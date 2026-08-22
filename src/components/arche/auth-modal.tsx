"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, AlertCircle, Mail, Lock, User as UserIcon } from "lucide-react";
import { signIn, signUp } from "@/lib/auth";
import { ArcheButton } from "../arche/button";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  reason?: string; // z.B. "Damit du eine Bewertung schreiben kannst."
}

export function AuthModal({ open, onClose, onSuccess, reason }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError(null);
    setBusy(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);

    try {
      if (mode === "signup") {
        await signUp(email, password, name);
      } else {
        await signIn(email, password);
      }
      reset();
      onSuccess();
    } catch (err: any) {
      const code = err?.code || "";
      if (code.includes("email-already-in-use")) {
        setError("Diese E-Mail ist schon registriert. Versuch dich anzumelden.");
        setMode("signin");
      } else if (code.includes("invalid-credential") || code.includes("wrong-password")) {
        setError("E-Mail oder Passwort nicht korrekt.");
      } else if (code.includes("too-many-requests")) {
        setError("Zu viele Versuche. Bitte später erneut.");
      } else {
        setError(err?.message || "Etwas ist schief gelaufen.");
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal — bottom sheet auf Mobile, zentriert auf Desktop */}
          <motion.div
            className="relative w-full sm:max-w-md glass rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-title text-foreground">
                  {mode === "signup" ? "Account erstellen" : "Anmelden"}
                </h3>
                {reason && (
                  <p className="text-caption text-muted-foreground mt-1.5">
                    {reason}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 -mr-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {mode === "signup" && (
                <div>
                  <label htmlFor="auth-name" className="text-caption block mb-1.5">
                    Name
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="auth-name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={60}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dein Name"
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl pl-9 pr-3 h-11 text-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[oklch(0.62_0.24_295/0.5)] focus:bg-white/[0.05] transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="auth-email" className="text-caption block mb-1.5">
                  E-Mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="auth-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.de"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl pl-9 pr-3 h-11 text-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[oklch(0.62_0.24_295/0.5)] focus:bg-white/[0.05] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="auth-pw" className="text-caption block mb-1.5">
                  Passwort
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="auth-pw"
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mindestens 6 Zeichen"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl pl-9 pr-3 h-11 text-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[oklch(0.62_0.24_295/0.5)] focus:bg-white/[0.05] transition-colors"
                  />
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
                disabled={busy}
                className="w-full mt-2"
              >
                {busy ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Einen Moment …</span>
                  </>
                ) : (
                  <span>{mode === "signup" ? "Konto erstellen" : "Anmelden"}</span>
                )}
              </ArcheButton>
            </form>

            {/* Switch mode */}
            <div className="mt-5 text-center text-caption text-muted-foreground">
              {mode === "signup" ? (
                <>
                  Schon hier?{" "}
                  <button
                    onClick={() => {
                      setMode("signin");
                      setError(null);
                    }}
                    className="text-foreground hover:text-[oklch(0.72_0.20_295)] transition-colors font-medium"
                  >
                    Anmelden
                  </button>
                </>
              ) : (
                <>
                  Noch kein Account?{" "}
                  <button
                    onClick={() => {
                      setMode("signup");
                      setError(null);
                    }}
                    className="text-foreground hover:text-[oklch(0.72_0.20_295)] transition-colors font-medium"
                  >
                    Jetzt erstellen
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
