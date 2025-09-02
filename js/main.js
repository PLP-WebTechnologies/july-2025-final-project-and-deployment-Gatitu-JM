// main.js - Portfolio site interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Mobile nav toggle (if you add a hamburger menu later)
    // Example: document.getElementById('navToggle').onclick = function() { ... }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let valid = true;
            let errorMsg = '';
            if (name.length < 2) {
                valid = false;
                errorMsg += 'Name must be at least 2 characters.\n';
            }
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                valid = false;
                errorMsg += 'Please enter a valid email.\n';
            }
            if (message.length < 10) {
                valid = false;
                errorMsg += 'Message must be at least 10 characters.';
            }
            if (!valid) {
                alert(errorMsg);
                e.preventDefault();
            }
        });
    }

    // Simple scroll animation for sections
    const sections = document.querySelectorAll('section');
    const revealSection = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = 'none';
            }
        });
    };
    window.addEventListener('scroll', revealSection);
    revealSection();
});
