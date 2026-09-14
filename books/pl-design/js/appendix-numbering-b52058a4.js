// Sidebar cosmetics: the Appendices carry manual letter labels ("A.", "A.1", "B.", …) in their
// titles, but mdBook also auto-numbers them (49, 49.1, 50, …) because they follow 48 numbered
// chapters. mdBook has no letter-numbering mode and `no-section-label` would strip numbers from the
// whole book, so instead we blank mdBook's numeric label for the Appendices part only, leaving the
// manual letters to stand alone. Everything above the Appendices keeps its normal 1..N numbering.
(function () {
  "use strict";

  function relabel() {
    // Find the "Appendices" part header in the sidebar.
    var appendices = null;
    var parts = document.querySelectorAll(".part-title");
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].textContent.trim().toLowerCase() === "appendices") {
        appendices = parts[i];
        break;
      }
    }
    if (!appendices) return false;

    // Blank the auto-number on every sidebar entry that comes after the Appendices header.
    var scope = document.querySelector("#sidebar") || document;
    var labels = scope.querySelectorAll('a strong[aria-hidden="true"]');
    var sawAny = labels.length > 0;
    for (var j = 0; j < labels.length; j++) {
      var s = labels[j];
      if (appendices.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING) {
        s.textContent = "";
      }
    }
    return sawAny;
  }

  function boot() {
    if (relabel()) return;
    // The sidebar renders from toc.js and may not be in the DOM yet; watch for it, with fallbacks.
    var obs = new MutationObserver(function () {
      if (relabel()) obs.disconnect();
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(relabel, 300);
    setTimeout(relabel, 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
