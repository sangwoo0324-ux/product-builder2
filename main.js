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

        const container = document.createElement('div');
        container.classList.add('item-container');

        const img = document.createElement('img');
        img.src = this.getAttribute('src');
        img.alt = this.getAttribute('alt');
        img.loading = 'lazy';

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('item-info');

        const title = document.createElement('h3');
        title.textContent = this.getAttribute('title');

        const capacity = document.createElement('p');
        capacity.textContent = `용량: ${this.getAttribute('capacity')}`;

        const address = document.createElement('p');
        address.textContent = `주소: ${this.getAttribute('address')}`;

        const startDate = document.createElement('p');
        startDate.textContent = `최초운전개시: ${this.getAttribute('start_date')}`;

        infoDiv.appendChild(title);
        infoDiv.appendChild(capacity);
        infoDiv.appendChild(address);
        infoDiv.appendChild(startDate);

        container.appendChild(img);
        container.appendChild(infoDiv);

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                border: 1px solid var(--color-border);
                border-radius: 8px;
                overflow: hidden;
                box-shadow: var(--shadow-small);
                transition: transform 0.2s ease-in-out;
                background-color: var(--color-background);
            }
            :host(:hover) {
                transform: translateY(-5px);
            }
            .item-container {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            img {
                width: 100%;
                height: 200px; /* Fixed height for consistency, adjust as needed */
                object-fit: cover;
                display: block;
            }
            .item-info {
                padding: 15px;
                flex-grow: 1;
            }
            .item-info h3 {
                margin-top: 0;
                margin-bottom: 10px;
                color: var(--color-heading);
                font-size: 1.2em;
            }
            .item-info p {
                margin-bottom: 5px;
                color: var(--color-text);
                font-size: 0.9em;
                line-height: 1.4;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}
customElements.define('image-gallery-item', ImageGalleryItem);

// BEGIN: Test for JavaScript execution outside DOMContentLoaded
const imageGallery = document.getElementById('image-gallery');
if (imageGallery) {
    const testDiv = document.createElement('div');
    testDiv.textContent = "Management content test - if you see this, JS is working outside DOMContentLoaded!";
    testDiv.style.padding = '20px';
    testDiv.style.backgroundColor = 'lightblue';
    testDiv.style.border = '1px solid blue';
    testDiv.style.margin = '10px';
    imageGallery.appendChild(testDiv);
}
// END: Test for JavaScript execution outside DOMContentLoaded

// Original DOMContentLoaded content (commented out for this test)
/*
document.addEventListener('DOMContentLoaded', () => {
    // Gemini API Integration (Placeholder)
    // Replace 'YOUR_API_KEY' with your actual API key
    const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
    // Ensure GoogleGenerativeAI is globally available from the CDN script
    if (typeof GoogleGenerativeAI !== 'undefined') {
        const genAIInstance = new GoogleGenerativeAI(API_KEY);
        const geminiModel = genAIInstance.getGenerativeModel({ model: "gemini-2.5-flash" });

        // Example function to call Gemini (this is a placeholder, actual usage will vary)
        async function runGeminiExample() {
            try {
                const prompt = "Write a short, engaging slogan for a renewable energy company.";
                const result = await geminiModel.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                console.log("Gemini Response:", text);
                // You can update a DOM element with this text, for example:
                // document.getElementById('gemini-slogan').textContent = text;
            } catch (error) {
                console.error("Error calling Gemini API:", error);
            }
        }

        // You might call this function based on a user action or on page load
        // runGeminiExample();
    } else {
        console.error("GoogleGenerativeAI is not defined. Please ensure the Gemini CDN script is loaded correctly or check its global name.");
    }


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
});
*/
