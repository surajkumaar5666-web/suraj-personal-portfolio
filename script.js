
// ===============================
// 1. MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Menu link click karne par menu close hoga
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// ===============================
// 2. SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}


// ===============================
// 3. SCROLL PROGRESS BAR
// ===============================

const progressBar = document.getElementById("scrollProgress");

function updateScrollProgress() {
  if (!progressBar) return;

  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress =
    scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

  progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress, {
  passive: true
});

updateScrollProgress();


// ===============================
// 4. NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener(
  "scroll",
  () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  },
  { passive: true }
);


// ===============================
// 5. CURRENT YEAR AUTOMATIC
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ===============================
// 6. SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ===============================
// 7. CONSOLE MESSAGE
// ===============================

console.log(
  "%c Welcome to Suraj Kumar's Portfolio! ",
  "background: #b7f34a; color: #080a08; font-size: 16px; padding: 10px; font-weight: bold;"
);
