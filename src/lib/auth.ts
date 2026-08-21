/**
 * arche. — Auth Service
 * Einfacher User-Account für Reviews.
 * Sign up, sign in, sign out, listen to auth state.
 *
 * Hinweis: Echte Firebase Auth ist erforderlich.
 * Ohne Firebase-Konfiguration schlagen Auth-Aktionen fehl.
 */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  type User,
} from "firebase/auth";
import { getFirebase, isFirebaseConfigured } from "./firebase";
import type { ArcheUser } from "./types";

export function subscribeAuth(cb: (user: ArcheUser | null) => void): () => void {
  if (!isFirebaseConfigured()) {
    // Kein Demo-Modus mehr — direkt null zurückgeben
    cb(null);
    return () => {};
  }

  const { auth } = getFirebase();
  return onAuthStateChanged(auth, (u) => {
    if (u) {
      cb({
        uid: u.uid,
        email: u.email,
        displayName: u.displayName,
      });
    } else {
      cb(null);
    }
  });
}

export async function signUp(
  email: string,
  password: string,
  name: string,
): Promise<ArcheUser> {
  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase ist nicht konfiguriert. Bitte .env.local einrichten (siehe README).",
    );
  }

  if (!email || !password || !name) {
    throw new Error("Bitte alle Felder ausfüllen.");
  }
  if (password.length < 6) {
    throw new Error("Passwort muss mindestens 6 Zeichen lang sein.");
  }
  if (name.trim().length < 2) {
    throw new Error("Name ist zu kurz.");
  }

  const { auth } = getFirebase();
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name.trim() });
  return {
    uid: cred.user.uid,
    email: cred.user.email,
    displayName: name.trim(),
  };
}

export async function signIn(
  email: string,
  password: string,
): Promise<ArcheUser> {
  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase ist nicht konfiguriert. Bitte .env.local einrichten (siehe README).",
    );
  }

  if (!email || !password) {
    throw new Error("Bitte E-Mail und Passwort eingeben.");
  }

  const { auth } = getFirebase();
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return {
    uid: cred.user.uid,
    email: cred.user.email,
    displayName: cred.user.displayName,
  };
}

export async function signOutUser(): Promise<void> {
  if (!isFirebaseConfigured()) return;
  const { auth } = getFirebase();
  await signOut(auth);
}

export function toArcheUser(u: User | null): ArcheUser | null {
  if (!u) return null;
  return {
    uid: u.uid,
    email: u.email,
    displayName: u.displayName,
  };
}
