"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { ArcheButton } from "../arche/button";
import { StarRating } from "../arche/star-rating";
import { AuthModal } from "../arche/auth-modal";
import {
  subscribeApprovedReviews,
  subscribeMyReviews,
  submitReview,
  updateMyReview,
  deleteMyReview,
} from "@/lib/reviews";
import { subscribeAuth, signOutUser } from "@/lib/auth";
import type { Review, ArcheUser } from "@/lib/types";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [user, setUser] = useState<ArcheUser | null>(null);
  const [myReviews, setMyReviews] = useState<Review[]>([]);
  const [authOpen, setAuthOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const unsub1 = subscribeApprovedReviews((rs) => setReviews(rs));
    const unsub2 = subscribeAuth((u) => setUser(u));
    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  useEffect(() => {
    if (!user) return;
    const unsub = subscribeMyReviews(user.uid, setMyReviews);
    return unsub;
  }, [user]);

  const myReviewsToShow = user ? myReviews : [];
  const hasPublicReviews = reviews && reviews.length > 0;
  const hasMyReviews = myReviewsToShow.length > 0;

  // Gesamtbewertung berechnen
  const avgRating =
    reviews && reviews.length > 0
      ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
      : 0;
  const reviewCount = reviews?.length || 0;

  // Index begrenzen via derived state (kein Effect nötig)
  const safeIndex =
    reviews && reviews.length > 0
      ? Math.min(currentIndex, reviews.length - 1)
      : 0;

  const handleWriteClick = () => {
    if (!user) {
      setAuthOpen(true);
    } else {
      setEditingReview(null);
      setFormOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    setAuthOpen(false);
    setEditingReview(null);
    setFormOpen(true);
  };

  const handleEdit = (r: Review) => {
    setEditingReview(r);
    setFormOpen(true);
  };

  const handleSignOut = async () => {
    await signOutUser();
  };

  const paginate = useCallback(
    (dir: number) => {
      if (!reviews || reviews.length === 0) return;
      setDirection(dir);
      setCurrentIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return reviews.length - 1;
        if (next >= reviews.length) return 0;
        return next;
      });
    },
    [reviews],
  );

  // Auto-advance — auf ALLEN Geräten, smooth idle rotation
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // für Progress-Bar Reset
  const touchStartX = useRef<number | null>(null);
  const AUTO_ADVANCE_MS = 4500;

  useEffect(() => {
    if (!reviews || reviews.length < 2 || paused) return;
    const timer = setTimeout(() => {
      paginate(1);
      setProgressKey((k) => k + 1);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [reviews, paused, paginate, safeIndex, progressKey]);

  // JSON-LD für Reviews
  const reviewsJsonLd =
    reviews && reviews.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "arche. Webdesign & Development",
          description:
            "Moderne Websites und digitale Experiences für kleine Unternehmen und Selbstständige.",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avgRating,
            reviewCount: reviewCount,
            bestRating: 5,
            worstRating: 0.5,
          },
          review: reviews.slice(0, 5).map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            datePublished: new Date(r.createdAt).toISOString(),
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
              worstRating: 0.5,
            },
            reviewBody: r.text,
          })),
        }
      : null;

  return (
    <Section id="section-reviews" ariaLabel="Kundenbewertungen">
      {reviewsJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
        />
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
        <Reveal className="max-w-xl">
          <span className="text-eyebrow">Reviews</span>
          <h2 className="text-headline mt-4">Was andere sagen.</h2>

          {/* Gesamtbewertung */}
          {hasPublicReviews && reviewCount > 0 && (
            <div className="flex items-center gap-3 mt-4">
              <StarRating rating={avgRating} size={16} />
              <span className="text-body text-foreground font-medium">
                {avgRating.toFixed(1)}
              </span>
              <span className="text-body text-muted-foreground">
                ({reviewCount} {reviewCount === 1 ? "Bewertung" : "Bewertungen"})
              </span>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          {user ? (
            <div className="flex items-center gap-2">
              <ArcheButton variant="secondary" size="sm" onClick={handleWriteClick}>
                <Plus className="w-4 h-4" />
                <span>Bewertung schreiben</span>
              </ArcheButton>
              <button
                onClick={handleSignOut}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
                aria-label="Abmelden"
                title={`Eingeloggt als ${user.displayName || user.email} — abmelden`}
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <ArcheButton variant="secondary" size="sm" onClick={handleWriteClick}>
              <Plus className="w-4 h-4" />
              <span>Erfahrung teilen</span>
            </ArcheButton>
          )}
        </Reveal>
      </div>

      {/* Eigene Reviews */}
      {user && hasMyReviews && (
        <Reveal className="mb-8">
          <div className="text-caption text-muted-foreground mb-3">
            Deine Bewertungen
          </div>
          <div className="flex flex-col gap-2">
            {myReviewsToShow.map((r) => (
              <MyReviewRow
                key={r.id}
                review={r}
                onEdit={() => handleEdit(r)}
                onDelete={() => {
                  if (confirm("Diese Bewertung wirklich löschen?")) {
                    deleteMyReview(r.id, user.uid);
                  }
                }}
              />
            ))}
          </div>
        </Reveal>
      )}

      {/* Loading */}
      {reviews === null && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      )}

      {/* Empty State — wenn noch keine Reviews vorhanden */}
      {reviews !== null && !hasPublicReviews && (
        <Reveal>
          <div className="surface rounded-2xl p-8 md:p-10 text-center">
            <p className="text-body-lg text-foreground/90 mb-2">
              Noch keine Reviews.
            </p>
            <p className="text-body text-muted-foreground max-w-md mx-auto">
              arche. baut diese Seite gerade erst auf. Wenn du bereits mit mir
              gearbeitet hast, kannst du deine Erfahrung hier teilen.
            </p>
          </div>
        </Reveal>
      )}

      {/* 3D Karussell */}
      {hasPublicReviews && reviews && reviews.length > 0 && (
        <Reveal delay={0.05}>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
              setPaused(true);
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(delta) > 50) {
                paginate(delta > 0 ? -1 : 1);
                setProgressKey((k) => k + 1);
              }
              touchStartX.current = null;
              // Resume nach kurzer Pause
              setTimeout(() => setPaused(false), 1500);
            }}
          >
            {/* Karussell-Container mit Perspective */}
            <div
              className="relative h-[420px] sm:h-[380px] md:h-[400px] flex items-center justify-center overflow-hidden"
              style={{ perspective: "1400px" }}
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                {reviews.map((r, i) => {
                  const offset = i - safeIndex;
                  const wrapped =
                    reviews.length > 2
                      ? ((offset + reviews.length + Math.floor(reviews.length / 2)) %
                          reviews.length) -
                        Math.floor(reviews.length / 2)
                      : offset;
                  const isCenter = wrapped === 0;
                  const isSide = Math.abs(wrapped) === 1;
                  // Auf Mobile nur Center zeigen, auf Desktop auch Side cards
                  const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;
                  const isVisible = isCenter || (isDesktop && isSide);

                  if (!isVisible) return null;

                  // Responsive Werte
                  const rotateY = wrapped * (isDesktop ? -25 : 0);
                  const translateX = wrapped * (isDesktop ? 55 : 0);
                  const translateZ = -Math.abs(wrapped) * 80;
                  const scale = isCenter ? 1 : 0.85;
                  const opacity = isCenter ? 1 : 0.55;

                  return (
                    <motion.div
                      key={r.id}
                      custom={direction}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotateY: direction > 0 ? 35 : -35,
                        x: direction > 0 ? 200 : -200,
                        z: -100,
                      }}
                      animate={{
                        opacity,
                        scale,
                        rotateY,
                        x: translateX + "%",
                        z: translateZ,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        rotateY: direction > 0 ? -35 : 35,
                        x: direction > 0 ? -200 : 200,
                        z: -100,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: EASE,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                        position: "absolute",
                        width: "min(90%, 420px)",
                        zIndex: isCenter ? 30 : isSide ? 20 : 10,
                        pointerEvents: isCenter ? "auto" : "none",
                      }}
                    >
                      <ReviewCard review={r} highlighted={isCenter} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons — nur Desktop, nur wenn >2 Reviews */}
            {reviews.length > 2 && (
              <>
                <button
                  onClick={() => paginate(-1)}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass border border-white/[0.08] items-center justify-center text-foreground hover:bg-white/[0.08] transition-colors z-40"
                  aria-label="Vorherige Bewertung"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass border border-white/[0.08] items-center justify-center text-foreground hover:bg-white/[0.08] transition-colors z-40"
                  aria-label="Nächste Bewertung"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Dots + Progress — Mobile + Desktop */}
            {reviews.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > safeIndex ? 1 : -1);
                      setCurrentIndex(i);
                      setProgressKey((k) => k + 1);
                    }}
                    className="transition-all duration-300 relative"
                    aria-label={`Zur Bewertung ${i + 1}`}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 overflow-hidden ${
                        i === safeIndex
                          ? "w-8 h-2 bg-white/15"
                          : "w-2 h-2 bg-white/15 hover:bg-white/30"
                      }`}
                    >
                      {/* Progress fill für aktive Dot */}
                      {i === safeIndex && !paused && (
                        <motion.span
                          key={progressKey}
                          className="block h-full bg-[oklch(0.62_0.24_295)] rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: AUTO_ADVANCE_MS / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Swipe hint auf Mobile */}
            <p className="md:hidden text-center text-micro text-muted-foreground/60 mt-3">
              Wischen zum Navigieren
            </p>
          </div>
        </Reveal>
      )}

      {/* Auth Modal */}
      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onSuccess={handleAuthSuccess}
        reason="Damit du eine Bewertung schreiben kannst."
      />

      {/* Review Form Modal */}
      <AnimatePresence>
        {formOpen && user && (
          <ReviewFormModal
            user={user}
            existing={editingReview}
            onClose={() => setFormOpen(false)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ------------------------- Review Card ------------------------- */

function ReviewCard({
  review,
  highlighted = false,
}: {
  review: Review;
  highlighted?: boolean;
}) {
  const date = new Date(review.createdAt);
  const dateStr = date.toLocaleDateString("de-DE", {
    month: "short",
    year: "numeric",
  });

  return (
    <article
      className={`surface rounded-2xl p-6 md:p-8 flex flex-col gap-4 h-full transition-all duration-500 ${
        highlighted
          ? "border-[oklch(0.62_0.24_295/0.25)] shadow-[0_20px_60px_-20px_oklch(0.62_0.24_295/0.3)]"
          : ""
      }`}
    >
      {/* Quote icon + Stars */}
      <div className="flex items-start justify-between">
        <StarRating rating={review.rating} size={13} />
        {review.featured && (
          <span className="text-micro text-[oklch(0.72_0.20_295)]">★ Featured</span>
        )}
      </div>

      {/* Text */}
      <p className="text-body text-foreground/90 leading-relaxed flex-1">
        „{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-2.5 pt-4 border-t border-white/[0.06]">
        <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-xs font-medium text-foreground/80">
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-foreground truncate">
            {review.name}
          </div>
          {review.project && (
            <div className="text-micro text-muted-foreground truncate">
              {review.project}
            </div>
          )}
        </div>
        <div className="text-micro text-muted-foreground shrink-0">
          {dateStr}
        </div>
      </div>
    </article>
  );
}

/* ------------------------- My Review Row ------------------------- */

function MyReviewRow({
  review,
  onEdit,
  onDelete,
}: {
  review: Review;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const statusLabel =
    review.status === "pending"
      ? "Wird geprüft"
      : review.status === "approved"
        ? "Veröffentlicht"
        : "Nicht veröffentlicht";
  const statusColor =
    review.status === "pending"
      ? "text-amber-300/90"
      : review.status === "approved"
        ? "text-emerald-300/90"
        : "text-red-300/90";

  return (
    <div className="surface rounded-xl p-4 flex items-start gap-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <StarRating rating={review.rating} size={11} />
          <span className={`text-micro ${statusColor}`}>{statusLabel}</span>
        </div>
        <p className="text-body text-foreground/80 line-clamp-2">„{review.text}"</p>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={onEdit}
          className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
          aria-label="Bearbeiten"
        >
          <Edit2 className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={onDelete}
          className="p-2 rounded-full text-muted-foreground hover:text-red-300 hover:bg-red-500/10 transition-colors"
          aria-label="Löschen"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------- Review Form Modal ------------------------- */

function ReviewFormModal({
  user,
  existing,
  onClose,
}: {
  user: ArcheUser;
  existing: Review | null;
  onClose: () => void;
}) {
  const [name, setName] = useState(existing?.name || user.displayName || "");
  const [rating, setRating] = useState(existing?.rating || 5);
  const [text, setText] = useState(existing?.text || "");
  const [project, setProject] = useState(existing?.project || "");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      if (existing) {
        await updateMyReview(existing.id, user.uid, {
          name,
          rating,
          text,
          project: project || undefined,
        });
      } else {
        await submitReview(
          { name, rating, text, project: project || undefined },
          user.uid,
          user.displayName || name,
        );
      }
      setStatus("success");
      setTimeout(onClose, 1800);
    } catch (err: any) {
      setError(err?.message || "Fehler beim Speichern.");
      setStatus("error");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        className="relative w-full sm:max-w-md glass rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        initial={{ y: 60, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {status === "success" ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex w-12 h-12 rounded-full bg-[oklch(0.62_0.24_295/0.15)] items-center justify-center mb-5"
            >
              <CheckCircle2 className="w-6 h-6 text-[oklch(0.72_0.20_295)]" />
            </motion.div>
            <h3 className="text-title text-foreground">
              Danke für dein Feedback.
            </h3>
            <p className="text-body text-muted-foreground mt-2">
              {existing
                ? "Die Änderung wird kurz geprüft und danach wieder veröffentlicht."
                : "Wir prüfen die Bewertung kurz und veröffentlichen sie anschließend."}
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="text-title text-foreground">
                  {existing ? "Bewertung bearbeiten" : "Bewertung abgeben"}
                </h3>
                <p className="text-caption text-muted-foreground mt-1.5">
                  Kurz geprüft, dann sichtbar.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 -mr-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-caption block mb-2">Bewertung</label>
                <div className="flex items-center gap-3">
                  <StarRating
                    rating={rating}
                    size={26}
                    interactive
                    onChange={setRating}
                  />
                  <span className="text-body text-foreground font-medium">
                    {rating.toFixed(1)}
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="rev-name" className="text-caption block mb-1.5">
                  Name
                </label>
                <input
                  id="rev-name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={60}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dein Name"
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 h-11 text-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[oklch(0.62_0.24_295/0.5)] focus:bg-white/[0.05] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="rev-project" className="text-caption block mb-1.5">
                  Projekt <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="rev-project"
                  type="text"
                  maxLength={60}
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  placeholder="z. B. Website"
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 h-11 text-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[oklch(0.62_0.24_295/0.5)] focus:bg-white/[0.05] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="rev-text" className="text-caption block mb-1.5">
                  Deine Bewertung
                </label>
                <textarea
                  id="rev-text"
                  required
                  minLength={10}
                  maxLength={800}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Wie war die Zusammenarbeit?"
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-3 text-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[oklch(0.62_0.24_295/0.5)] focus:bg-white/[0.05] transition-colors resize-none"
                />
                <div className="text-micro text-right mt-1 text-muted-foreground">
                  {text.length} / 800
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300">
                  <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <ArcheButton
                type="submit"
                variant="purple"
                size="md"
                disabled={status === "submitting"}
                className="w-full"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Wird gesendet …</span>
                  </>
                ) : (
                  <span>{existing ? "Änderungen speichern" : "Bewertung senden"}</span>
                )}
              </ArcheButton>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
