/**
 * arche. — Review Service (v3)
 * User können Reviews erstellen und ihre eigenen verwalten.
 * Moderation (approved/rejected) erfolgt serverseitig via Firestore Rules.
 *
 * WICHTIG: Keine orderBy in den Queries — verhindert Composite-Index-Fehler.
 * Sortierung erfolgt Client-seitig.
 */

import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { getFirebase, isFirebaseConfigured } from "./firebase";
import type { Review, ReviewInput } from "./types";

const COLLECTION = "reviews";

/* ------------------------- Public: Approved Reviews ------------------------- */

export function subscribeApprovedReviews(
  cb: (reviews: Review[]) => void,
): () => void {
  if (!isFirebaseConfigured()) {
    cb([]);
    return () => {};
  }

  const { db } = getFirebase();
  // KEIN orderBy — verhindert Index-Fehler
  // Sortierung erfolgt Client-seitig
  const q = query(
    collection(db, COLLECTION),
    where("status", "==", "approved"),
    where("type", "==", "real"),
  );

  return onSnapshot(
    q,
    (snap) => {
      const reviews: Review[] = snap.docs.map((d) => {
        const data = d.data() as any;
        const createdAt =
          data.createdAt instanceof Timestamp
            ? data.createdAt.toMillis()
            : typeof data.createdAt === "number"
              ? data.createdAt
              : Date.now();
        return {
          id: d.id,
          ...(data as Omit<Review, "id" | "createdAt">),
          createdAt,
        };
      });
      // Client-seitig sortieren: featured zuerst, dann nach Datum absteigend
      reviews.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return b.createdAt - a.createdAt;
      });
      cb(reviews);
    },
    (err) => {
      console.error("[reviews] subscribeApprovedReviews error:", err);
      cb([]);
    },
  );
}

/* ------------------------- User: Eigene Reviews ------------------------- */

export function subscribeMyReviews(
  uid: string,
  cb: (reviews: Review[]) => void,
): () => void {
  if (!isFirebaseConfigured()) {
    cb([]);
    return () => {};
  }

  const { db } = getFirebase();
  // KEIN orderBy — verhindert Index-Fehler
  const q = query(
    collection(db, COLLECTION),
    where("authorUid", "==", uid),
  );

  return onSnapshot(
    q,
    (snap) => {
      const reviews: Review[] = snap.docs.map((d) => {
        const data = d.data() as any;
        const createdAt =
          data.createdAt instanceof Timestamp
            ? data.createdAt.toMillis()
            : typeof data.createdAt === "number"
              ? data.createdAt
              : Date.now();
        return {
          id: d.id,
          ...(data as Omit<Review, "id" | "createdAt">),
          createdAt,
        };
      });
      // Client-seitig nach Datum absteigend sortieren
      reviews.sort((a, b) => b.createdAt - a.createdAt);
      cb(reviews);
    },
    (err) => {
      console.error("[reviews] subscribeMyReviews error:", err);
      cb([]);
    },
  );
}

/* ------------------------- Submit Review (eingeloggt) ------------------------- */

export async function submitReview(
  input: ReviewInput,
  authorUid: string,
  authorName: string,
): Promise<void> {
  if (!authorUid) throw new Error("Du musst eingeloggt sein.");

  if (!input.name || input.name.trim().length < 2) {
    throw new Error("Bitte gib deinen Namen an.");
  }
  if (input.name.length > 60) {
    throw new Error("Name ist zu lang (max. 60 Zeichen).");
  }
  if (!input.text || input.text.trim().length < 10) {
    throw new Error("Bitte schreib mindestens einen kurzen Satz.");
  }
  if (input.text.length > 800) {
    throw new Error("Text ist zu lang (max. 800 Zeichen).");
  }
  if (
    typeof input.rating !== "number" ||
    input.rating < 0.5 ||
    input.rating > 5 ||
    input.rating % 0.5 !== 0
  ) {
    throw new Error("Ungültige Bewertung.");
  }

  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase ist nicht konfiguriert. Bitte .env.local einrichten.",
    );
  }

  const { db } = getFirebase();
  await addDoc(collection(db, COLLECTION), {
    name: input.name.trim(),
    rating: input.rating,
    text: input.text.trim(),
    project: input.project?.trim() || null,
    status: "pending",
    featured: false,
    type: "real",
    authorUid,
    authorName: authorName.trim(),
    createdAt: serverTimestamp(),
  });
}

/* ------------------------- User: Eigene Reviews bearbeiten ------------------------- */

export async function updateMyReview(
  id: string,
  authorUid: string,
  input: ReviewInput,
): Promise<void> {
  if (!authorUid) throw new Error("Du musst eingeloggt sein.");
  if (!input.text || input.text.trim().length < 10) {
    throw new Error("Bitte schreib mindestens einen kurzen Satz.");
  }
  if (input.text.length > 800) {
    throw new Error("Text ist zu lang (max. 800 Zeichen).");
  }

  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase ist nicht konfiguriert. Bitte .env.local einrichten.",
    );
  }

  const { db } = getFirebase();
  await updateDoc(doc(db, COLLECTION, id), {
    text: input.text.trim(),
    rating: input.rating,
    project: input.project?.trim() || null,
    name: input.name.trim(),
    status: "pending",
  });
}

export async function deleteMyReview(
  id: string,
  authorUid: string,
): Promise<void> {
  if (!authorUid) throw new Error("Du musst eingeloggt sein.");

  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase ist nicht konfiguriert. Bitte .env.local einrichten.",
    );
  }

  const { db } = getFirebase();
  await deleteDoc(doc(db, COLLECTION, id));
}
