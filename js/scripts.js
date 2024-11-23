let currentSlide = 0; // Current slide index
let slides; // Declare slides variable
var hights = []

var nextS = setInterval(nextSlide, 2000);

// Automatically load images from the Slider folder
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.getElementById('slider-container');
    const sliderT = document.querySelector('.slider');
    const images = ['building_1.jpg', 'photo_13.jpg', 'photo_22.jpg', 'photo_27.jpg']; // Ensure these paths are correct
    let minHeight = Infinity; // Variable to store the minimum height

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `Slider/${image}`; // Ensure the path is correct
        imgElement.alt = `Image ${image}`;
        
        // Set an onload event to log the height
        imgElement.onload = function() {
            const imgHeight = imgElement.naturalHeight / imgElement.naturalWidth * sliderContainer.offsetWidth;
            console.log(`Height of ${image}: ${imgHeight}`); // Log the height of the image
            hights.push(imgHeight) // Push the height to the array
            if(minHeight > imgHeight){
                minHeight = imgHeight;
                // make the slider high the minimum
                // sliderContainer.style.height = `${minHeight}px`;
                sliderT.style.height = `${minHeight}px`;
            }
        };

        sliderContainer.appendChild(imgElement);
    });

    console.log("Document loaded. Ready for animations and sliders.");

    // Initialize the first slide
    showSlide(currentSlide);

});


// Scroll animation for services section
const servicesSection = document.querySelector('.services');
const serviceItems = document.querySelectorAll('.service-item');
const contactSection = document.querySelector('.contact'); // Select the contact section
const locationSection = document.querySelector('.location'); // Select the location section

function animateServices() {
    const sectionPosition = servicesSection.getBoundingClientRect().top;
    const screenPositionE = window.innerHeight / 1.4; // Trigger when section is 20% from the bottom of the viewport
    const screenPositionD = window.innerHeight / 1; // UNTrigger when section is 0% from the bottom of the viewport

    if (sectionPosition < screenPositionE) {
        serviceItems.forEach((item, index) => {
            if (index % 2 === 0) {
                item.classList.add('animate-left'); // Add left animation for even items
            } else {
                item.classList.add('animate-right'); // Add right animation for odd items
            }
            item.style.opacity = 1; // Set opacity to 1 to make them visible
        });
    } 
    if (sectionPosition >= screenPositionD)  {
        // Reset animations when scrolling back up
        serviceItems.forEach(item => {
            item.classList.remove('animate-left', 'animate-right'); // Remove animation classes
            item.style.opacity = 0; // Reset opacity to 0
        });
    }
}

// Function to animate the contact section
function animateContact() {
    const sectionPosition = contactSection.getBoundingClientRect().top;
    const screenPositionE = window.innerHeight / 1.3; // Trigger when section is 40% from the bottom of the viewport
    const screenPositionD = window.innerHeight / 1; // UNTrigger when section is 0% from the bottom of the viewport

    if (sectionPosition < screenPositionE) {
        contactSection.classList.add('visible'); // Add class to make it visible
    } 
    if (sectionPosition >= screenPositionD) {
        contactSection.classList.remove('visible'); // Remove visible class
    }
}

// Function to animate the location section
function animateLocation() {
    const sectionPosition = locationSection.getBoundingClientRect().top;
    const screenPositionE = window.innerHeight / 1.3; // Trigger when section is 20% from the bottom of the viewport
    const screenPositionD = window.innerHeight / 1; // Trigger when section is 0% from the bottom of the viewport

    if (sectionPosition < screenPositionE) {
        locationSection.classList.add('visible'); // Add class to make it visible
    } 
    if (sectionPosition >= screenPositionD) {
        locationSection.classList.remove('visible'); // Remove visible class
    }
}

// Add event listener for scroll
window.addEventListener('scroll', animateServices);
window.addEventListener('scroll', animateContact);
window.addEventListener('scroll', animateLocation);

// Check if the services section is in view on page load
animateServices();
animateContact();
animateLocation();

function showSlide(index) {
    slides = document.querySelectorAll('#slider-container img'); // Get slides inside the function
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; // Show current slide, hide others
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Move to next slide
    showSlide(currentSlide);
    // stop the interval thingy
    clearInterval(nextS);
    nextS = setInterval(nextSlide, 2000)
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move to previous slide
    showSlide(currentSlide);
    clearInterval(nextS);
}

// Add this code at the end of your existing JavaScript file
document.getElementById('burger-button').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle the active class
});

