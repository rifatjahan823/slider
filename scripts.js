const tabButtons = document.querySelectorAll('.tab');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active from all, add to current
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Get index
    const index = parseInt(button.getAttribute('data-index'));

    // Calculate translate distance
    const slideWidth = slides[0].offsetWidth + 30; // 30 = gap
    const offset = slideWidth * index;

    // Apply transform
    slider.style.transform = `translateX(-${offset}px)`;
  });
});








// let currentCard = 0;

// function nextCard() {
//   const cards = document.querySelectorAll('.slide');
//   const totalCards = cards.length;

//   // Move the cards one step forward
//   currentCard = (currentCard + 1) % totalCards;

//   // Adjust the positioning of the cards
//   cards.forEach((card, index) => {
//     if (index === currentCard) {
//       card.style.top = '0';
//       card.style.left = '0';
//       card.style.zIndex = 5; // Bring to front
//     } else if (index === (currentCard + 1) % totalCards) {
//       card.style.top = '0';
//       card.style.left = '50px'; // Slide the next card a little to the side
//       card.style.zIndex = 4;
//     } else {
//       card.style.top = '100px'; // Slide the other cards down
//       card.style.left = '100px'; // Adjust to maintain stacking order
//       card.style.zIndex = 1;
//     }
//   });
// }
