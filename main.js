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


document.addEventListener('DOMContentLoaded', () => {
    console.log("main.js script loaded and executing (inside DOMContentLoaded)!"); // Debug log

    // Gemini API Integration (Placeholder)
    // Replace 'YOUR_API_KEY' with your actual API key
    const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

    let genAIInstance;
    let foundGlobalName = null;
    const possibleGlobalNames = ['GoogleGenerativeAI', 'genai', 'GenAI']; // Common global names for this library

    try {
        for (const name of possibleGlobalNames) {
            if (typeof window[name] !== 'undefined') {
                genAIInstance = new window[name](API_KEY);
                foundGlobalName = name;
                console.log(`Gemini API initialized using window.${name}`);
                break; // Found it, stop searching
            }
        }

        if (!foundGlobalName) {
            console.error("Gemini API object (GoogleGenerativeAI, genai, or GenAI) is not defined in window. Please ensure the @google/genai UMD CDN script is loaded correctly or check its global name.");
        }


        if (genAIInstance) {
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
        }

    } catch (error) {
        console.error("Error during Gemini API initialization:", error);
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

    // Dynamic Image Loading for Management Section
    const imageGallery = document.getElementById('image-gallery');
    if (imageGallery) {
        const images = [
            {
                title: '경북 영주 태양광 발전소',
                capacity: '100Kw급',
                address: '경북 영주시 평은면',
                start_date: '2018년',
                src: 'photo/영주 태양광.jpg',
                alt: '경북 영주 태양광 발전소 전경'
            },
            {
                title: '충남 청양 태양광 발전소',
                capacity: '500Kw급',
                address: '충남 청양군 청남면',
                start_date: '2021년',
                src: 'photo/청양 태양광.jpg',
                alt: '충남 청양 태양광 발전소 전경'
            },
            {
                title: '경남 진주1 태양광 발전소',
                capacity: '100Kw급',
                address: '경남 진주시 금곡면',
                start_date: '2024년',
                src: 'photo/진주1 태양광.jpg',
                alt: '경남 진주1 태양광 발전소 전경'
            },
            {
                title: '경남 진주2 태양광 발전소',
                capacity: '300Kw급',
                address: '경남 진주시 미천면',
                start_date: '2025년',
                src: 'photo/진주2 태양광.png',
                alt: '경남 진주2 태양광 발전소 전경'
            },
            {
                title: '경남 창녕 태양광 발전소',
                capacity: '300kW급',
                address: '경남 창녕군 성산면',
                start_date: '2025년',
                src: 'photo/창녕 태양광.jpg',
                alt: '경남 창녕 태양광 발전소 전경'
            },
        ];

        images.forEach(imageData => {
            const galleryItem = document.createElement('image-gallery-item');
            galleryItem.setAttribute('src', imageData.src);
            galleryItem.setAttribute('alt', imageData.alt);
            galleryItem.setAttribute('title', imageData.title);
            galleryItem.setAttribute('capacity', imageData.capacity);
            galleryItem.setAttribute('address', imageData.address);
            galleryItem.setAttribute('start_date', imageData.start_date);
            imageGallery.appendChild(galleryItem);
        });
    }
});