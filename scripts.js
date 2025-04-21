const tabButtons = document.querySelectorAll('.tab');
const slides = document.querySelectorAll('.slide');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const index = parseInt(button.getAttribute('data-index'));

    // Handle tab button active class
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Reset all cards to default state
    slides.forEach((slide) => {
      slide.style.position = 'static';
      slide.style.left = '';
      slide.style.top = '';
      slide.style.zIndex = '';
      slide.style.opacity = '1';
      slide.style.transform = 'translateX(0)';
      slide.style.transition = 'none'; // remove transition for reset
    });

    // Apply stacking + animation if index > 0
    if (index > 0) {
      for (let i = 1; i <= index; i++) {
        const slide = slides[i];
        slide.style.position = 'absolute';
        slide.style.left = '0';
        slide.style.top = `${i}px`;
        slide.style.zIndex = i + 1;

        // Start with opacity 0 and slight shift right
        slide.style.opacity = '0';
        slide.style.transform = 'translateX(20px)';
        slide.offsetHeight; 

        // // Animate to final position
        // slide.style.transition = 'all 0.4s ease';
        // slide.style.transform = 'translateX(0)';
        slide.style.opacity = '1';
      }
    }
  });
});
