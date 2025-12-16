// ================= DOM ELEMENTS =================
const header = document.getElementById("header");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

// CTA & Early Access
const ctaButtons = document.querySelectorAll(".cta-btn");
const earlyAccessSection = document.getElementById("get-early-access-section");
const emailForm = document.querySelector(".get-early-access-form");

// Variant System
const variantBtns = document.querySelectorAll(".variant-btn");
const variantTitle = document.getElementById("variantTitle");
const variantDescription = document.getElementById("variantDescription");
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");
const specsVariant = document.getElementById("specsVariant");

// Accordions
const accordions = document.querySelectorAll(".accordion");


// ================= HEADER SCROLL =================
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ================= MOBILE MENU =================
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });
}

document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  });
});


// ================= CTA SCROLL SYSTEM (CLIENT WANTED) =================
// All "Get Early Access" buttons scroll to footer section
ctaButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!earlyAccessSection) return;

    const offsetTop = earlyAccessSection.offsetTop - 90;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});


// ================= EMAIL FORM (INLINE CONFIRMATION) =================
if (emailForm) {
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    emailForm.innerHTML = `
      <p class="early-access-confirmation">
        <strong>Early Access Confirmed.</strong><br/>
        You’ll be the first to hear about all ONAMI developments.
      </p>
    `;
  });
}


// ================= VARIANT DATA =================
const variants = {
  orange: {
    title: "ONAMI – MAGMA ORANGE",
    description:
      "A dial that glows with the warmth of molten metal, shifting from inner radiance to deep burnt ember at the perimeter.",
    mainImage: "/luxury-sculptural-dive-watch-orange-dial-front-vie.jpg",
    thumbnails: [
      "/luxury-watch-front-view-orange-dial.jpg",
      "/luxury-watch-angle-view-orange-dial.jpg",
      "/luxury-watch-side-profile-steel-case.jpg",
      "/luxury-watch-crown-detail-steel.jpg",
      "/luxury-watch-caseback-engraved-wave-motif.jpg",
      "/luxury-watch-macro-dial-texture-orange.jpg",
      "/luxury-watch-lume-glowing-dark.jpg",
    ],
    ref: "Ref. ONAMI-MO-01",
  },

  red: {
    title: "ONAMI – MAGMA RED",
    description:
      "Founder’s Edition. A deep glowing red framed by a black PVD case.",
    mainImage: "/luxury-sculptural-dive-watch-red-dial-black-pvd-ca.jpg",
    thumbnails: [],
    ref: "Ref. ONAMI-MR-01",
  },

  anthracite: {
    title: "ONAMI – ANTHRACITE",
    description:
      "A calm, architectural expression revealing depth through shadow.",
    mainImage: "/placeholder.svg?height=700&width=700",
    thumbnails: [],
    ref: "Ref. ONAMI-AN-01",
  },

  sage: {
    title: "ONAMI – SAGE",
    description:
      "An organic expression inspired by mineral tones and the shoreline.",
    mainImage: "/placeholder.svg?height=700&width=700",
    thumbnails: [],
    ref: "Ref. ONAMI-SG-01",
  },
};


// ================= VARIANT SWITCH =================
function updateVariant(key) {
  const variant = variants[key];
  if (!variant) return;

  variantTitle.textContent = variant.title;
  variantDescription.textContent = variant.description;

  mainImage.style.opacity = "0";
  setTimeout(() => {
    mainImage.src = variant.mainImage;
    mainImage.style.opacity = "1";
  }, 150);

  document.querySelector(".product-ref").textContent = variant.ref;

  variantBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.variant === key);
  });
}

variantBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateVariant(btn.dataset.variant);
  });
});


// ================= THUMBNAIL GALLERY =================
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    thumbnails.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");

    const src = thumb.querySelector("img").src;

    mainImage.style.opacity = "0";
    setTimeout(() => {
      mainImage.src = src;
      mainImage.style.opacity = "1";
    }, 150);
  });
});


// ================= ACCORDIONS =================
accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});


// ================= SMOOTH SCROLL (NAV LINKS) =================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    const offsetTop = target.offsetTop - 90;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});


// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  updateVariant("orange");
});



const MAX_WORDS = 15;

document.querySelectorAll(".read-more-text").forEach((el) => {
  const fullText = el.textContent.trim();
  const words = fullText.split(/\s+/);

  if (words.length <= MAX_WORDS) return;

  const shortText = words.slice(0, MAX_WORDS).join(" ") + "...";

  el.textContent = shortText;
  el.setAttribute("data-full", fullText);
  el.setAttribute("data-short", shortText);
  el.setAttribute("data-expanded", "false");

  const btn = document.createElement("button");
  btn.className = "read-more-btn";
  btn.textContent = "Read more";

  btn.addEventListener("click", () => {
    const expanded = el.getAttribute("data-expanded") === "true";

    if (!expanded) {
      el.textContent = el.getAttribute("data-full");
      btn.textContent = "Read less";
      el.setAttribute("data-expanded", "true");
    } else {
      el.textContent = el.getAttribute("data-short");
      btn.textContent = "Read more";
      el.setAttribute("data-expanded", "false");
    }
  });

  el.after(btn);
});
