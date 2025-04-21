const tabButtons = document.querySelectorAll('.tab');
const slides = document.querySelectorAll('.slide');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const index = parseInt(button.getAttribute('data-index'));

    // Handle tab button active class
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Reset all cards
    slides.forEach((slide) => {
      slide.style.position = 'static';
      slide.style.left = '';
      slide.style.top = '';
      slide.style.zIndex = '';
      slide.style.transform = 'translate(0, 0)';
      slide.style.transition = 'all 0.4s ease';
    });

    // Apply stacking effect if index > 0
    if (index > 0) {
      for (let i = 1; i <= index; i++) {
        const slide = slides[i];
        slide.style.position = 'absolute';
        slide.style.left = '0';
        slide.style.top = `${i}px`; 
        slide.style.zIndex = i + 1;
     
        slide.style.transition = 'all 0.4s ease';
      }
    }
  });
});
