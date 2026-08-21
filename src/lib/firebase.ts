import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyD3Nn0P87k9WP2biGm-CTmcqAx5VznQzPA",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "arche-studio-63567.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "arche-studio-63567",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "arche-studio-63567.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "483908743472",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:483908743472:web:d156a797918eff545c98f5",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-Q3N7L63FS8",
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let analytics: Analytics | null = null;

export function getFirebase() {
  if (!app) {
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }
    auth = getAuth(app);
    db = getFirestore(app);

    // Analytics nur im Browser laden, wenn nicht von Adblockern/Brave blockiert
    if (typeof window !== "undefined") {
      isSupported().then((supported) => {
        if (supported) {
          analytics = getAnalytics(app!);
        }
      });
    }
  }
  return { app: app!, auth: auth!, db: db!, analytics };
}

export function isFirebaseConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
}