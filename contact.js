document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    // Add submit event listener to the contact form
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Show "Message sent successfully" alert
        alert('Message sent successfully!');

        // Clear the form fields after submission
        contactForm.reset();
    });
});

