/* Lightweight pageview logger — fire-and-forget, never blocks rendering
   and never throws into the page if Firebase isn't reachable (e.g. the
   config is still the placeholder, or the visitor is offline). */
import { db } from "./firebase-init.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

(function () {
  try {
    addDoc(collection(db, "visits"), {
      page: location.pathname.replace(/^\/|\/$/g, "") || "index.html",
      referrer: document.referrer || null,
      userAgent: navigator.userAgent,
      viewedAt: serverTimestamp()
    }).catch(function () { /* offline, blocked, or config not set up yet — ignore */ });
  } catch (e) { /* ignore */ }
})();
