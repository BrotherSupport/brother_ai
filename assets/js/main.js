// Slima Warm Editorial — shared interactions (nav toggle, scroll shadow, reveal, form demo)

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
    });
  }

  document.querySelectorAll(".nav__item--dropdown > a").forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      if (window.innerWidth > 760) return;
      event.preventDefault();
      const item = toggle.closest(".nav__item--dropdown");
      document.querySelectorAll(".nav__item--dropdown.is-open").forEach((other) => {
        if (other !== item) other.classList.remove("is-open");
      });
      item.classList.toggle("is-open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav__item--dropdown")) {
      document.querySelectorAll(".nav__item--dropdown.is-open").forEach((item) => {
        item.classList.remove("is-open");
      });
    }
  });

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const success = document.querySelector("#contact-success");
      if (success) success.classList.add("is-visible");
      contactForm.reset();
    });
  }

  const newsletterForm = document.querySelector("#newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const success = document.querySelector("#newsletter-success");
      if (success) success.classList.add("is-visible");
      newsletterForm.reset();
    });
  }
});
