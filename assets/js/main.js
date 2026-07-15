/* =========================================================
   Essor School — site interactivity
   Mobile nav, sticky header state, scroll-reveal animations,
   active-link highlighting, back-to-top, and a small client-side
   filter for the Events / Articles grids.
   ========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initHeader();
    initMobileNav();
    initActiveNav();
    initScrollReveal();
    initBackToTop();
    initFilters();
    initContactForm();
  });

  /* ---------- Sticky header ---------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile nav ---------- */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var panel = document.querySelector(".mobile-nav");
    if (!toggle || !panel) return;

    function close() {
      toggle.classList.remove("is-open");
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    function toggleOpen() {
      var isOpen = toggle.classList.toggle("is-open");
      panel.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    toggle.addEventListener("click", toggleOpen);
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) close();
    });
  }

  /* ---------- Active nav link ---------- */
  function initActiveNav() {
    var current = (document.body.getAttribute("data-page") || "").trim();
    if (!current) return;
    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
      if (link.getAttribute("data-nav-link") === current) {
        link.classList.add("active");
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initScrollReveal() {
    var targets = document.querySelectorAll("[data-reveal], [data-reveal-group]");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Back to top ---------- */
  function initBackToTop() {
    var btn = document.querySelector(".to-top");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      function () {
        btn.classList.toggle("is-visible", window.scrollY > 500);
      },
      { passive: true }
    );

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Events / Articles filter ---------- */
  function initFilters() {
    var filterRow = document.querySelector("[data-filter-row]");
    if (!filterRow) return;

    var buttons = filterRow.querySelectorAll("[data-filter]");
    var items = document.querySelectorAll("[data-category]");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");

        var filter = btn.getAttribute("data-filter");
        items.forEach(function (item) {
          var match = filter === "all" || item.getAttribute("data-category") === filter;
          item.style.display = match ? "" : "none";
        });
      });
    });
  }

  /* ---------- Contact form (static demo) ---------- */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var successEl = form.querySelector("[data-form-success]");
      form.querySelectorAll("input, textarea").forEach(function (field) {
        field.value = "";
      });
      if (successEl) {
        successEl.hidden = false;
        successEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }
})();
