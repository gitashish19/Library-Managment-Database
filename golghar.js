const rating = document.querySelector('.rating');
const stars = rating.querySelectorAll('input');

stars.forEach(star => {
  star.addEventListener('change', () => {
    const selectedRating = rating.querySelector('input:checked').value;
    console.log('Selected rating:', selectedRating);
    
  });
});
