// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the active class for both the hamburger icon and the nav links
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

