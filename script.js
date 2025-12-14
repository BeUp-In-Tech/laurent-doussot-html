// ===== DOM Elements =====
const header = document.getElementById("header")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileNav = document.getElementById("mobileNav")
const modalOverlay = document.getElementById("modalOverlay")
const modalClose = document.getElementById("modalClose")
const emailForm = document.getElementById("emailForm")

// CTA Buttons
const ctaButtons = document.querySelectorAll(".cta-btn")

// Variant System
const variantBtns = document.querySelectorAll(".variant-btn")
const variantTitle = document.getElementById("variantTitle")
const variantDescription = document.getElementById("variantDescription")
const mainImage = document.getElementById("mainImage")
const thumbnails = document.querySelectorAll(".thumbnail")
const specsVariant = document.getElementById("specsVariant")

// Accordions
const accordions = document.querySelectorAll(".accordion")

// Countdown
const countdownBar = document.getElementById("countdownBar")

// ===== Variant Data =====
const variants = {
  orange: {
    title: "ONAMI – MAGMA ORANGE",
    description:
      "A dial that glows with the warmth of molten metal, shifting from inner radiance to deep burnt ember at the perimeter. Its layered textures play with depth and shadow, giving the surface a living presence that changes with every movement of the wrist. Paired with ONAMI's sculpted case lines and flowing curvature, this variant brings a warm, elemental energy to the collection — expressive yet refined.",
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
    specs: {
      title: "Variant: Magma Orange",
      image: "/watch-dial-closeup-orange-texture.jpg",
      details: [
        "Outer dial: sand-grain texture with burnt orange fumé",
        "Inner dial: warm orange sunburst gradient",
        "Dial ring accents: dark orange",
        "Numerals: sandwich cut, BGW9 luminous",
        "Hands: silver-polished with BGW9 lume",
        "Seconds hand: red with orange tip",
      ],
    },
    ref: "Ref. ONAMI-MO-01",
  },
  red: {
    title: "ONAMI – MAGMA RED",
    description:
      "Founder's Edition — Limited to 50 pieces. Black PVD case — Paired with an exotic leather strap. A deep, glowing red inspired by molten intensity — shifting from volcanic warmth to darker ember tones as the dial curves toward the edge. Framed by a black PVD case, the Magma Red dial gains even more depth: the contrast sharpens its architecture, amplifies the sculptural lines, and gives the entire watch a dramatic presence on the wrist.",
    mainImage: "/luxury-sculptural-dive-watch-red-dial-black-pvd-ca.jpg",
    thumbnails: [
      "/luxury-watch-front-view-red-dial-black-case.jpg",
      "/luxury-watch-angle-view-red-dial.jpg",
      "/luxury-watch-side-profile-black-pvd-case.jpg",
      "/luxury-watch-crown-detail-black-pvd.jpg",
      "/luxury-watch-caseback-engraved-black.jpg",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
    ],
    specs: {
      title: "Variant: Magma Red (Founder's)",
      image: "/placeholder.svg?height=200&width=200",
      details: [
        "Outer dial: dark sand-grain with ember red fumé",
        "Inner dial: sunburst ember gradient",
        "Dial ring accents: black / red",
        "Numerals: BGW9 luminous",
        "Hands: gold-polished",
        "Seconds hand: black with orange tip",
      ],
    },
    ref: "Ref. ONAMI-MR-01",
  },
  anthracite: {
    title: "ONAMI – ANTHRACITE",
    description:
      "A calm, architectural interpretation of ONAMI — a dial that reveals its depth through controlled contrasts and shifting shadow. Anthracite expresses the watch's sculptural geometry in its purest form, allowing the carved lines, transitions, and volumes to take center stage. Its darker tones enhance the interplay between light and curvature, giving ONAMI a modern, understated presence — refined, versatile, and shaped by the quiet strength of shadow.",
    mainImage: "/placeholder.svg?height=700&width=700",
    thumbnails: [
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/luxury-watch-crown-detail-steel.jpg",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
    ],
    specs: {
      title: "Variant: Anthracite",
      image: "/placeholder.svg?height=200&width=200",
      details: [
        "Outer dial: sand-grain anthracite with black fumé",
        "Inner dial: sunburst graphite gradient",
        "Dial ring accents: anthracite + orange",
        "Numerals: sandwich cut, BGW9 luminous",
        "Hands: silver-polished",
        "Seconds hand: red with orange tip",
      ],
    },
    ref: "Ref. ONAMI-AN-01",
  },
  sage: {
    title: "ONAMI – SAGE",
    description:
      "A natural, organic expression of ONAMI — inspired by mineral tones, coastal vegetation, and the calm strength of the shoreline. The Sage dial transitions from a soft, radiant green at the center to a deeper, textured olive fumé around the edge, creating a layered gradient that feels both earthy and luminous. This variant highlights ONAMI's sculptural construction through subtle contrasts and shifting tones. Sage brings a warm, grounded character to the collection — refined, expressive, and shaped by the quiet beauty of nature.",
    mainImage: "/placeholder.svg?height=700&width=700",
    thumbnails: [
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/luxury-watch-crown-detail-steel.jpg",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
    ],
    specs: {
      title: "Variant: Sage",
      image: "/placeholder.svg?height=200&width=200",
      details: [
        "Outer dial: sand-grain sage with fumé",
        "Inner dial: sunburst green gradient",
        "Dial ring accents: sage + orange",
        "Numerals: BGW9 luminous",
        "Hands: silver-polished",
        "Seconds hand: black with orange tip",
      ],
    },
    ref: "Ref. ONAMI-SG-01",
  },
}

// ===== Header Scroll Effect =====
let lastScrollY = window.scrollY

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > 100) {
    header.style.backgroundColor = "rgba(14, 15, 17, 0.98)"
  } else {
    header.style.backgroundColor = "rgba(14, 15, 17, 0.95)"
  }

  lastScrollY = currentScrollY
})

// ===== Mobile Menu =====
mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active")
  mobileMenuBtn.classList.toggle("active")
})

// Close mobile nav on link click
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active")
    mobileMenuBtn.classList.remove("active")
  })
})

// ===== Modal System =====
function openModal() {
  modalOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modalOverlay.classList.remove("active")
  document.body.style.overflow = ""
}

// CTA buttons open modal
ctaButtons.forEach((btn) => {
  if (btn.textContent.trim().toLowerCase().includes("join")) {
    btn.addEventListener("click", openModal)
  }
})

modalClose.addEventListener("click", closeModal)

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal()
  }
})

// Escape key closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal()
  }
})

// Email form submission
emailForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = e.target.querySelector("input").value

  // Show success message
  const modalContent = document.querySelector(".modal-content")
  modalContent.innerHTML = `
        <h3 class="modal-title">Thank You!</h3>
        <p class="modal-text">You've been added to the ONAMI launch list. We'll notify you when we're ready to launch.</p>
        <button class="cta-btn modal-submit" onclick="closeModal()">Close</button>
    `
})

// ===== Variant System =====
function updateVariant(variantKey) {
  const variant = variants[variantKey]
  if (!variant) return

  // Update title and description
  variantTitle.textContent = variant.title
  variantDescription.textContent = variant.description

  // Update main image
  mainImage.style.opacity = "0"
  setTimeout(() => {
    mainImage.src = variant.mainImage
    mainImage.style.opacity = "1"
  }, 150)

  // Update thumbnails
  thumbnails.forEach((thumb, index) => {
    if (variant.thumbnails[index]) {
      thumb.querySelector("img").src = variant.thumbnails[index]
    }
  })

  // Reset thumbnail selection
  thumbnails.forEach((thumb, index) => {
    thumb.classList.toggle("active", index === 0)
  })

  // Update product ref
  document.querySelector(".product-ref").textContent = variant.ref

  // Update specs variant section
  specsVariant.innerHTML = `
        <h4 class="specs-category">${variant.specs.title}</h4>
        <div class="specs-variant-content">
            <div class="specs-variant-image">
                <img src="${variant.specs.image}" alt="Dial Detail">
            </div>
            <ul class="specs-list">
                ${variant.specs.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
        </div>
    `

  // Update active button
  variantBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.variant === variantKey)
  })
}

variantBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateVariant(btn.dataset.variant)
  })
})

// ===== Thumbnail Gallery =====
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    // Update active state
    thumbnails.forEach((t) => t.classList.remove("active"))
    thumb.classList.add("active")

    // Update main image
    const imgSrc = thumb.querySelector("img").src
    const highResSrc = imgSrc.replace("height=80&width=80", "height=700&width=700")

    mainImage.style.opacity = "0"
    setTimeout(() => {
      mainImage.src = highResSrc
      mainImage.style.opacity = "1"
    }, 150)
  })
})

// ===== Accordions =====
accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header")

  header.addEventListener("click", () => {
    // Close other accordions (optional - remove for independent operation)
    // accordions.forEach(a => {
    //     if (a !== accordion) a.classList.remove('active');
    // });

    accordion.classList.toggle("active")
  })
})

// ===== Countdown Timer (Hidden by default) =====
// To activate: remove 'hidden' class from countdownBar
// Set your launch date below

const launchDate = new Date("2025-03-01T00:00:00").getTime()

function updateCountdown() {
  const now = new Date().getTime()
  const distance = launchDate - now

  if (distance < 0) {
    countdownBar.classList.add("hidden")
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById("countdownDays").textContent = String(days).padStart(2, "0")
  document.getElementById("countdownHours").textContent = String(hours).padStart(2, "0")
  document.getElementById("countdownMinutes").textContent = String(minutes).padStart(2, "0")
  document.getElementById("countdownSeconds").textContent = String(seconds).padStart(2, "0")
}

// Run countdown every second (only if visible)
if (!countdownBar.classList.contains("hidden")) {
  updateCountdown()
  setInterval(updateCountdown, 1000)
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// ===== Intersection Observer for Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe story blocks for fade-in effect
document.querySelectorAll(".story-block, .variant-ribbon, .variant-header").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Set initial variant
  updateVariant("orange")
})
