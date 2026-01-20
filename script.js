document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        backToTop.classList.toggle('active', window.scrollY > 300);
    });
    
    // Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const words = ['web applications', 'desktop software', 'business solutions', 'digital experiences'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        typingText.textContent = currentChar;
        
        if (!isDeleting && charIndex < currentWord.length) {
            // Typing
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            charIndex--;
            setTimeout(type, 50);
        } else {
            // Change word
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 1000);
        }
    }
    
    // Start typing animation
    setTimeout(type, 1000);
    
    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Project Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // Skills Chart
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Frontend', 'Backend', 'Database', 'UI/UX', 'DevOps', 'Mobile'],
            datasets: [{
                label: 'Technical Skills',
                data: [90, 85, 80, 75, 70, 65],
                backgroundColor: 'rgba(67, 97, 238, 0.2)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(67, 97, 238, 1)',
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(67, 97, 238, 1)',
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 20,
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            family: 'Inter',
                            size: 12,
                            weight: '500'
                        },
                        color: '#333'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                line: {
                    tension: 0.1
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
    // Form Submission
    // Form Submission using Formspree
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) { // Added 'async' keyword here
        e.preventDefault(); // Prevent the default form submission (page reload)

        const form = e.target; // Get the form element that triggered the event
        const formData = new FormData(form); // Create FormData object from the form

        try {
             // Show a loading SweetAlert
                    Swal.fire({
                        title: 'Sending message...',
                        text: 'Please wait a moment.',
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading();
                        }
                    });
            // Send the form data to Formspree's endpoint
            const response = await fetch(form.action, { // Use form.action to get the URL from HTML
                method: form.method, // Use form.method (POST) from HTML
                body: formData, // Send the FormData object
                headers: {
                    'Accept': 'application/json' // Tell Formspree we expect a JSON response
                }
            });

            if (response.ok) { // Check if the HTTP response status is 2xx (success)
                 Swal.fire({
                            icon: 'success',
                            title: 'Message Sent!',
                            text: 'Thank you for your message! I will get back to you soon.',
                            confirmButtonText: 'OK',
                            customClass: {
                                confirmButton: 'swal-button-primary' // Custom class for styling button
                            }
                        });
                form.reset(); // Clear the form fields
            } else {
                // If response is not OK, try to parse error details from Formspree
                const data = await response.json();
                let errorMessage = 'Failed to send message. Please try again.';
                if (data.errors) {
                    // If Formspree provides specific errors, display them
                    errorMessage += '\nDetails: ' + data.errors.map(err => err.message).join(', ');
                }
               Swal.fire({
                            icon: 'error',
                            title: 'Submission Failed',
                            text: errorMessage,
                            confirmButtonText: 'OK',
                            customClass: {
                                confirmButton: 'swal-button-error' // Custom class for styling button
                            }
                        });
            }
        } catch (error) {
            // Catch any network errors or other unexpected issues
            console.error('Error submitting form:', error);
            Swal.fire({
                        icon: 'error',
                        title: 'Network Error',
                        text: 'An unexpected error occurred. Please check your internet connection and try again.',
                        confirmButtonText: 'OK',
                        customClass: {
                            confirmButton: 'swal-button-error' // Custom class for styling button
                        }
                    });
        }
    });

    }
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .service-card, .skill-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.animation = 'fadeInUp 0.5s ease forwards';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// Better touch handling for mobile menu
menuToggle.addEventListener('touchstart', function(e) {
    e.preventDefault();
    this.click();
}, { passive: false });

// Prevent zooming on double-tap for buttons
const buttons = document.querySelectorAll('button, .btn, .nav-link');
buttons.forEach(button => {
    button.addEventListener('touchstart', function() {
        // No action needed, just prevents zoom
    }, { passive: true });
});

// Add this to your existing scroll event listener for header
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    
    // For mobile, hide header on scroll down
    if (window.innerWidth <= 768) {
        if (currentScroll > lastScroll && currentScroll > 50) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    }
    
    lastScroll = currentScroll;
});