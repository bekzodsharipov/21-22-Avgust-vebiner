const modal = document.querySelector('.modal');
const openBtns = document.querySelectorAll('.hero__main-btn'); // Barcha tugmalarni olamiz

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
  });
});

// Modal fonini bosganda yopish
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
