/* Firebase project config.
   TODO(IIWM): replace every value below with the real config object from
   Firebase Console → Project Settings → Your apps → (</>) web app.
   This object is not secret — it's meant to be embedded in client code.
   Actual access control lives in firestore.rules. */
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAE38HtKRPpRCEUNBas66Lf7_XeaWWAvGc",
  authDomain: "iiwm-bangalore.firebaseapp.com",
  projectId: "iiwm-bangalore",
  storageBucket: "iiwm-bangalore.firebasestorage.app",
  messagingSenderId: "864814355496",
  appId: "1:864814355496:web:341bd21a570f2f11a0d11d"
};

/* Internal-only email domain the admin username gets mapped to before
   calling Firebase Auth (Firebase requires an email-shaped identifier). */
export const ADMIN_EMAIL_DOMAIN = "iiwm-admin.local";
