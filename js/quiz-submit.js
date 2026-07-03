/* Bridge between quiz.js (a plain classic script, not a module) and
   Firestore. Exposes window.IIWMFirebaseSubmit(record) which quiz.js
   calls on lead submission; quiz.js falls back to localStorage if this
   rejects (offline, Firebase not configured yet, etc). */
import { db } from "./firebase-init.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

window.IIWMFirebaseSubmit = function (record) {
  return addDoc(collection(db, 'leads'), Object.assign({}, record, {
    submittedAt: serverTimestamp()
  }));
};
