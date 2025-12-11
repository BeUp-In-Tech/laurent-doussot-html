// ==========================
// MOBILE SIDEBAR
// ==========================
const hamburger = document.getElementById("hamburger");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  mobileSidebar.style.right = "0";
  overlay.style.display = "block";
});

closeSidebar.addEventListener("click", () => {
  mobileSidebar.style.right = "-260px";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  mobileSidebar.style.right = "-260px";
  overlay.style.display = "none";
});

// ==========================
// NAVBAR STICKY
// ==========================
const header = document.querySelector(".header-wrapper");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// ==========================
// JOIN LAUNCH LIST MODAL
// ==========================
function modalJsSection() {
  const modalOverlay = document.getElementById("modal-overlay");
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal-close");
  const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
  const signupForm = document.getElementById("signup-form");
  const modalFormContainer = document.getElementById("modal-form-container");
  const modalSuccess = document.getElementById("modal-success");

  function openModal() {
    modalOverlay.classList.add("modal-overlay--visible");
    modal.classList.add("modal--visible");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("modal-overlay--visible");
    modal.classList.remove("modal--visible");
    document.body.style.overflow = "";
    setTimeout(() => {
      modalFormContainer.style.display = "block";
      modalSuccess.classList.remove("modal__success--visible");
    }, 300);
  }

  modalTriggers.forEach((trigger) =>
    trigger.addEventListener("click", openModal)
  );

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

modalJsSection();

// ==========================
// SCROLL FADE ANIMATION
// ==========================
const blocks = document.querySelectorAll(".fade-up");

function revealOnScroll() {
  blocks.forEach((block) => {
    const rect = block.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      block.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ==========================
// HERO RIGHT SLIDER (NO CONFLICT)
// ==========================
(function sliderInit() {
    const track = document.getElementById('sliderTrack');
    const sliderDots = document.querySelectorAll('.slider-dots .dot');

    // guards
    if (!track || !sliderDots || sliderDots.length === 0) return;

    let current = 0;
    const total = track.children.length || 1;
    let autoPlay = setInterval(nextSlide, 2000);

    // ensure slides are 100% wide (CSS must also set .slide { min-width:100%; })
    function goTo(i) {
      current = (i + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      sliderDots.forEach((d, x) => d.classList.toggle('active', x === current));
    }

    function nextSlide() {
      goTo(current + 1);
    }

    function resetAuto() {
      clearInterval(autoPlay);
      autoPlay = setInterval(nextSlide, 2000);
    }

    // Dot click (robust: parse dataset and ignore invalid)
    sliderDots.forEach((dot, idx) => {
      dot.addEventListener('click', function (e) {
        // Prefer explicit data-index, fallback to position if absent
        const idxFromData = Number(this.dataset.index);
        const targetIndex = Number.isFinite(idxFromData) && !Number.isNaN(idxFromData)
          ? idxFromData
          : idx;
        goTo(targetIndex);
        resetAuto();
      });
    });

    // Touch swipe
    let startX = 0;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', (e) => {
      const end = e.changedTouches[0].clientX;
      if (startX - end > 50) nextSlide();
      if (end - startX > 50) goTo(current - 1);
      resetAuto();
    });

    // Pause on hover (optional)
    const wrapper = track.parentElement;
    if (wrapper) {
      wrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
      wrapper.addEventListener('mouseleave', () => (autoPlay = setInterval(nextSlide, 5000)));
    }

    // init UI
    goTo(0);
  })();
