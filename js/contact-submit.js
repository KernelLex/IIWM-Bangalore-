/* Wires the Contact Us form into the same Firestore `leads` collection
   the quiz uses (source: 'Contact Form'), so both show up together in
   the admin Leads tab. Falls back to localStorage if Firebase is
   unreachable, same pattern as the quiz. */
import { db } from "./firebase-init.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

var LEADS_STORAGE_KEY = 'iiwm_quiz_leads';

var form = document.getElementById('contactForm');
if (form) {
  var card = document.getElementById('contactFormCard');
  var submitBtn = document.getElementById('contactSubmitBtn');
  var formErrorEl = document.getElementById('contactFormError');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var data = {
      name: form.elements.name.value.trim(),
      phone: form.elements.phone.value.trim(),
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim()
    };

    var errors = validate(data);
    ['name', 'phone', 'email', 'message'].forEach(function (field) {
      var el = form.elements[field];
      var errEl = document.getElementById('c' + capitalize(field) + 'Error');
      if (errors[field]) {
        el.setAttribute('aria-invalid', 'true');
        if (errEl) errEl.textContent = errors[field];
      } else {
        el.removeAttribute('aria-invalid');
        if (errEl) errEl.textContent = '';
      }
    });
    if (Object.keys(errors).length) return;

    formErrorEl.textContent = '';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    var record = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: 'Contact Form'
    };

    addDoc(collection(db, 'leads'), Object.assign({}, record, { submittedAt: serverTimestamp() }))
      .then(showSuccess)
      .catch(function () {
        saveLocally(Object.assign({}, record, { submittedAt: new Date().toISOString() }));
        showSuccess();
      });
  });

  function showSuccess() {
    card.innerHTML = '<div class="form-success-msg"><strong>Thank you!</strong>' +
      'Your enquiry has been received — our team will get back to you shortly.</div>';
  }

  function saveLocally(record) {
    try {
      var existing = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
      existing.push(record);
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existing));
    } catch (e) { /* storage unavailable — ignore */ }
  }
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function validate(data) {
  var errors = {};
  if (!data.name || data.name.length < 2) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) errors.email = 'Please enter a valid email.';
  var digits = (data.phone || '').replace(/[^\d]/g, '');
  if (digits.length < 8) errors.phone = 'Please enter a valid phone number.';
  if (!data.message || data.message.length < 5) errors.message = 'Please enter a short message.';
  return errors;
}
