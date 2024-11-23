// JavaScript for contact page

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Construct the mailto URL
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:RECHACHOURACHID@hgi-dz.com?subject=${subject}&body=${body}`;

    // Trigger the mailto link
    window.location.href = mailtoLink;


});

// Burger menu functionality
document.getElementById('burger-button').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle the active class
}); 