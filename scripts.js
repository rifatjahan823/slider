// const times = document.querySelectorAll('.time');
// const slides = document.querySelectorAll('.slide');
// let currentIndex = 0;

// times.forEach((time, index) => {
//   time.addEventListener('click', () => {
//     // Update active time button
//     times.forEach(t => t.classList.remove('active'));
//     time.classList.add('active');
    
//     // Slide effect
//     const offset = index * 30; // Adjust slide width with gap included (420px = 380px width + 30px gap)
//     document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
//     currentIndex = index;
//   });
// });


let currentCard = 0;

function nextCard() {
  const cards = document.querySelectorAll('.slide');
  const totalCards = cards.length;

  // Move the cards one step forward
  currentCard = (currentCard + 1) % totalCards;

  // Adjust the positioning of the cards
  cards.forEach((card, index) => {
    if (index === currentCard) {
      card.style.top = '0';
      card.style.left = '0';
      card.style.zIndex = 5; // Bring to front
    } else if (index === (currentCard + 1) % totalCards) {
      card.style.top = '0';
      card.style.left = '50px'; // Slide the next card a little to the side
      card.style.zIndex = 4;
    } else {
      card.style.top = '100px'; // Slide the other cards down
      card.style.left = '100px'; // Adjust to maintain stacking order
      card.style.zIndex = 1;
    }
  });
}
