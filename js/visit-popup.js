/* Lead-capture popup — appears once per browser session, 5 seconds
   after the first page loads. Submissions are saved into the same
   Firestore `visits` collection the admin Visits tab already reads,
   tagged with identified:true so the admin table can show name/phone/
   email alongside the anonymous pageview rows. */
import { db } from "./firebase-init.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

(function () {
  var SHOWN_KEY = 'iiwm_visit_popup_shown';
  if (sessionStorage.getItem(SHOWN_KEY)) return;

  setTimeout(showPopup, 5000);

  function showPopup() {
    if (sessionStorage.getItem(SHOWN_KEY)) return;
    sessionStorage.setItem(SHOWN_KEY, '1');

    var overlay = document.createElement('div');
    overlay.className = 'visit-popup-overlay';
    overlay.innerHTML =
      '<div class="visit-popup-modal" role="dialog" aria-modal="true" aria-label="Get in touch">' +
      '<button type="button" class="visit-popup-close" aria-label="Close">&times;</button>' +
      '<p class="eyebrow">IIWM Bangalore</p>' +
      '<h3>Thinking About a Wedding Career?</h3>' +
      '<p class="visit-popup-desc">Leave your details and our team will reach out with program information.</p>' +
      '<form id="visitPopupForm" novalidate>' +
      '<div class="admin-login-field"><label for="vpName">Full Name</label><input type="text" id="vpName" autocomplete="name" required></div>' +
      '<div class="admin-login-field"><label for="vpPhone">Phone Number</label><input type="tel" id="vpPhone" autocomplete="tel" required></div>' +
      '<div class="admin-login-field"><label for="vpEmail">Email Address</label><input type="email" id="vpEmail" autocomplete="email" required></div>' +
      '<p class="admin-login-error" id="vpError"></p>' +
      '<button type="submit" class="admin-login-submit" id="vpSubmit">Submit</button>' +
      '</form>' +
      '</div>';
    document.body.appendChild(overlay);

    function close() { overlay.remove(); }
    overlay.querySelector('.visit-popup-close').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function onEsc(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
    });

    var form = overlay.querySelector('#visitPopupForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('vpName').value.trim();
      var phone = document.getElementById('vpPhone').value.trim();
      var email = document.getElementById('vpEmail').value.trim();
      var errEl = document.getElementById('vpError');
      var btn = document.getElementById('vpSubmit');

      if (!name || name.length < 2) { errEl.textContent = 'Please enter your full name.'; return; }
      var digits = phone.replace(/[^\d]/g, '');
      if (digits.length < 8) { errEl.textContent = 'Please enter a valid phone number.'; return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { errEl.textContent = 'Please enter a valid email.'; return; }

      errEl.textContent = '';
      btn.disabled = true;
      btn.textContent = 'Submitting…';

      addDoc(collection(db, 'visits'), {
        page: location.pathname.replace(/^\/|\/$/g, '') || 'index.html',
        name: name,
        phone: phone,
        email: email,
        identified: true,
        viewedAt: serverTimestamp()
      }).then(function () {
        var modal = overlay.querySelector('.visit-popup-modal');
        modal.innerHTML =
          '<button type="button" class="visit-popup-close" aria-label="Close">&times;</button>' +
          '<h3>Thank You!</h3><p class="visit-popup-desc">Our team will be in touch shortly.</p>';
        modal.querySelector('.visit-popup-close').addEventListener('click', close);
        setTimeout(close, 2500);
      }).catch(function () {
        errEl.textContent = 'Something went wrong — please try again.';
        btn.disabled = false;
        btn.textContent = 'Submit';
      });
    });
  }
})();
