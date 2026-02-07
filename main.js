'use strict';

/**
 * Main JavaScript file for the Mega homepage.
 * This file will handle interactivity, animations, and other dynamic features.
 */

// Define the ImageGalleryItem Web Component
class ImageGalleryItem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const img = document.createElement('img');
        img.src = this.getAttribute('src');
        img.alt = this.getAttribute('alt');
        img.loading = 'lazy'; // Lazy load images

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                border: 1px solid var(--color-border);
                border-radius: 8px;
                overflow: hidden;
                box-shadow: var(--shadow-small);
                transition: transform 0.2s ease-in-out;
            }
            :host(:hover) {
                transform: translateY(-5px);
            }
            img {
                width: 100%;
                height: 200px; /* Fixed height for consistency, adjust as needed */
                object-fit: cover;
                display: block;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(img);
    }
}
customElements.define('image-gallery-item', ImageGalleryItem);


document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
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

    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // This refers to the <html> tag

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let currentTheme = htmlElement.getAttribute('data-theme');
            let newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Dynamic Image Loading for Management Section
    const imageGallery = document.getElementById('image-gallery');
    if (imageGallery) {
        const images = [
            { business: 'BusinessA', src: 'phto/BusinessA/plant_A_01.jpg', alt: 'Power Plant A 01' },
            { business: 'BusinessA', src: 'phto/BusinessA/plant_A_02.jpg', alt: 'Power Plant A 02' },
            { business: 'BusinessB', src: 'phto/BusinessB/plant_B_01.jpg', alt: 'Power Plant B 01' },
            // Add more images as needed
        ];

        images.forEach(imageData => {
            const galleryItem = document.createElement('image-gallery-item');
            galleryItem.setAttribute('src', imageData.src);
            galleryItem.setAttribute('alt', imageData.alt);
            imageGallery.appendChild(galleryItem);
        });
    }
});
