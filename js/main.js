
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = document.querySelector('.navbar').offsetHeight;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Fade in elements on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Add fade-in class to elements
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('section > div').forEach(element => {
        element.classList.add('fade-in');
    });
    fadeInOnScroll();
});

window.addEventListener('scroll', fadeInOnScroll);

// Contact Us Form Submission
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you, " + name + "! Your message has been sent successfully.");

    document.getElementById("contactForm").reset();

    return false;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Mobile menu handling
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

// Floating animation on scroll
function floatInOnScroll() {
    const elements = document.querySelectorAll('.float-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    floatInOnScroll(); // Run on load in case elements are already in view
});

window.addEventListener('scroll', floatInOnScroll);

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function () {
            this.classList.add('loaded');
        });
    });
});

// Slide-in animation for Call to Action section
function slideInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    slideInOnScroll(); // Run on load in case elements are already in view
});

window.addEventListener('scroll', slideInOnScroll);

// Animate testimonials on scroll
function animateTestimonialsOnScroll() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        const elementTop = card.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            card.classList.add('visible');
        }
    });
}

// Run animation on scroll for testimonials
document.addEventListener('DOMContentLoaded', function () {
    animateTestimonialsOnScroll(); // Run on page load
});

window.addEventListener('scroll', animateTestimonialsOnScroll);

// Zoom-in animation for Welcome Section
function zoomInOnScroll() {
    const welcomeSection = document.querySelector('.zoom-in');
    if (welcomeSection) {
        const elementTop = welcomeSection.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            welcomeSection.classList.add('visible');
        }
    }
}

document.addEventListener('DOMContentLoaded', zoomInOnScroll);
window.addEventListener('scroll', zoomInOnScroll);
