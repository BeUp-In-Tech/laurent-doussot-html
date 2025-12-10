const dots = document.querySelectorAll(".dot");
const sliderTrack = document.querySelector(".slider-track");
let index = 0;

function goToSlide(i) {
  index = i;
  sliderTrack.style.transform = `translateX(-${index * 520}px)`;

  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    goToSlide(i);
  });
});


// Join the Launch List btn modal 

     
function modalJsSection (){
      'use strict';
      const modalOverlay = document.getElementById('modal-overlay');
      const modal = document.getElementById('modal');
      const modalClose = document.getElementById('modal-close');
      const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
      const signupForm = document.getElementById('signup-form');
      const modalFormContainer = document.getElementById('modal-form-container');
      const modalSuccess = document.getElementById('modal-success');
      const mobileCta = document.getElementById('mobile-cta');
      
     
      // ----- Modal -----
      function openModal() {
        modalOverlay.classList.add('modal-overlay--visible');
        modal.classList.add('modal--visible');
        document.body.style.overflow = 'hidden';
      }
      
      function closeModal() {
        modalOverlay.classList.remove('modal-overlay--visible');
        modal.classList.remove('modal--visible');
        document.body.style.overflow = '';
        setTimeout(() => {
          modalFormContainer.style.display = 'block';
          modalSuccess.classList.remove('modal__success--visible');
        }, 300);
      }
      modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
      });
      modalClose.addEventListener('click', closeModal);
      modalOverlay.addEventListener('click', closeModal);
      signupForm.addEventListener('submit', handleFormSubmit);
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
      });
      
      setupAnimations();
      handleScroll();
      
    }

