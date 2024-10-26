// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the active class for both the hamburger icon and the nav links
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});


const sliderContainer = document.querySelector('.slider-container');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.testimonial').length;

  const updateSliderPosition = () => {
      const sliderWidth = sliderContainer.clientWidth / 3;
      sliderContainer.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
  };

  nextButton.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= totalSlides - 2) {
          currentIndex = 0; // Loop back to start
      }
      updateSliderPosition();
  });

  prevButton.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = totalSlides - 3; // Loop to the last full set
      }
      updateSliderPosition();
  });

  window.addEventListener('resize', updateSliderPosition);

  // Auto loop through slides every 5 seconds
  setInterval(() => {
      nextButton.click();
  }, 300000);
