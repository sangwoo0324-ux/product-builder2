'use strict';



/**
 * Main JavaScript file for the Mega homepage.
 * This file will handle interactivity, animations, and other dynamic features.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate the position of the target element
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Smooth scroll to the target
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});