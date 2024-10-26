// Header
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar-nav').classList.toggle('active');
});

// testimonial slider
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
          currentIndex = 0; // lop back to start
      }
      updateSliderPosition();
  });

  prevButton.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = totalSlides - 3;
      }
      updateSliderPosition();
  });

  window.addEventListener('resize', updateSliderPosition);

  // auto loop 
  setInterval(() => {
      nextButton.click();
  }, 20000);
