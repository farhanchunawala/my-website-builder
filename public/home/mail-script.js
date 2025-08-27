/* public/home/mail-script.js
   Conflict-resistant: IIFE, no globals, safe binding, helpful logs.
   Usage: keep this at end of page or include with `defer`.
*/

(function () {
  "use strict";

  // CONFIG: endpoint to post to. Change if your backend uses a different path.
  // If you use Next.js API route: "/api/subscribe" or "/api/contact"
  // If you use Express on same origin: "/subscribe" or "/contact"
  const DEFAULT_ENDPOINTS = ["/api/subscribe", "/subscribe", "/api/contact", "/contact"];

  // utility: find the first existing form id on page we care about
  function findForm() {
    const candidates = ["subscribe-form", "contactForm", "contact-form", "SubscribeForm"];
    for (const id of candidates) {
      const el = document.getElementById(id);
      if (el) return el;
    }
    // fallback: any single form inside .form-block w-form
    const fallback = document.querySelector(".form-block form, .w-form form, form");
    return fallback || null;
  }

  // utility: choose endpoint (tries defaults, uses the first that returns 200 on OPTIONS or HEAD)
  async function probeEndpoint(list) {
    // quick probe: try a simple HEAD/OPTIONS to see if endpoint exists (best-effort)
    for (const ep of list) {
      try {
        const res = await fetch(ep, { method: "OPTIONS" }); // OPTIONS often allowed
        if (res.ok || res.status === 204 || res.status === 200) return ep;
      } catch (e) {
        // ignore and try next
      }
    }
    // if all probes fail, return first default so fetch tries it (useful for dev setups)
    return list[0];
  }

  // render message in inline UI or fallback to alert
  function showMessage(type, text, form) {
    const successEl = form.querySelector("#form-success") || document.getElementById("form-success");
    const errorEl = form.querySelector("#form-error") || document.getElementById("form-error");

    if (type === "success") {
      if (successEl) successEl.style.display = "block";
      if (errorEl) errorEl.style.display = "none";
      else alert(text);
    } else {
      if (errorEl) errorEl.style.display = "block";
      if (successEl) successEl.style.display = "none";
      else alert(text);
    }
  }

  // main bind
  async function init() {
    const form = findForm();
    if (!form) {
      console.warn("[mail-script] No form found on page (checked common IDs).");
      return;
    }

    // prevent double binding
    if (form.__mailScriptBound) {
      console.log("[mail-script] Already bound; skipping re-bind.");
      return;
    }
    form.__mailScriptBound = true;

    // get inputs (best effort)
    const emailInput = form.querySelector('input[type="email"], input[name="email"], #Subscribe-Email');
    const nameInput = form.querySelector('input[name="name"], input[type="text"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    // probing endpoint to be resilient. This is best-effort and fast.
    const endpoint = await probeEndpoint(DEFAULT_ENDPOINTS);
    console.log("[mail-script] Using endpoint:", endpoint);

    form.addEventListener(
      "submit",
      async function (ev) {
        ev.preventDefault();
        ev.stopPropagation(); // avoid other listeners interfering (use carefully)

        // small validation
        const email = emailInput ? emailInput.value.trim() : "";
        if (!email) {
          showMessage("error", "Please enter your email.", form);
          return;
        }

        // payload: adapt fields if not present
        const payload = {};
        if (nameInput) payload.name = nameInput.value.trim();
        if (emailInput) payload.email = email;
        if (messageInput) payload.message = messageInput.value.trim();

        // UI state
        const submitEl = form.querySelector('input[type="submit"], button[type="submit"]');
        const original = submitEl ? (submitEl.value || submitEl.textContent) : null;
        if (submitEl) {
          submitEl.disabled = true;
          if ("value" in submitEl) submitEl.value = "Sending...";
          else submitEl.textContent = "Sending...";
        }

        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          // debug logging
          console.log("[mail-script] request payload:", payload, "response status:", res.status);

          let data = {};
          try {
            data = await res.json();
          } catch (e) {
            console.warn("[mail-script] response not JSON");
          }

          if (res.ok && (data.success === undefined || data.success === true)) {
            showMessage("success", data.message || "Subscription sent!", form);
            form.reset();
            console.log("[mail-script] success:", data);
          } else {
            console.warn("[mail-script] server reported error:", data);
            showMessage("error", data.message || "Failed to submit. Check console/network.", form);
          }
        } catch (err) {
          console.error("[mail-script] network or JS error:", err);
          showMessage("error", "Network error. Open console and check the request.", form);
        } finally {
          if (submitEl) {
            submitEl.disabled = false;
            if ("value" in submitEl) submitEl.value = original || "Subscribe";
            else submitEl.textContent = original || "Subscribe";
          }
        }
      },
      { passive: false }
    );

    console.log("[mail-script] Bound to form:", form.id || form.className || form);
  }

  // run init once DOM ready (safe even if this script is inserted at head)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
