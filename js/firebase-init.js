/* Shared Firebase app/service instances, imported by every module that
   needs Firestore or Auth. Keeps the CDN SDK version and the
   initializeApp() call in exactly one place.

   Storage is intentionally not used here — Firebase now requires the
   Blaze (pay-as-you-go) plan for Storage specifically, even within its
   free-tier limits, so resume uploads were dropped to keep this project
   on the no-cost Spark plan. Firestore and Auth are unaffected. */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { FIREBASE_CONFIG } from "./firebase-config.js";

const app = initializeApp(FIREBASE_CONFIG);

export const db = getFirestore(app);
export const auth = getAuth(app);
