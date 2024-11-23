// aboutme.js

// Function to handle the burger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.getElementById('burger-button');
    const navLinks = document.getElementById('nav-links');

    if (burgerButton) {
        burgerButton.addEventListener('click', function() {
            navLinks.classList.toggle('active'); // Toggle the active class for the nav links
        });
    }
});

// Smooth scrolling for anchor links (if applicable)
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Add any additional scripts or functionalities as needed 