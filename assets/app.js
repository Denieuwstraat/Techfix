
(() => {
  const path = window.location.pathname.replace(/index\.html$/, "").replace(/\/+$/, "") || "/";
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const p = new URL(href, window.location.origin).pathname.replace(/index\.html$/, "").replace(/\/+$/, "") || "/";
    if (p === path) a.classList.add("text-techfix");
  });

  const params = new URLSearchParams(window.location.search);
  const box = document.getElementById("form-status");
  if (box && params.get("success") === "1") {
    box.hidden = false;
    box.className = "mt-4 rounded-2xl border border-techfix/30 bg-techfix/10 px-4 py-3 text-sm text-white";
    box.textContent = "Bedankt! Je aanvraag is ontvangen. Ik neem zo snel mogelijk contact met je op.";
  }
})();
