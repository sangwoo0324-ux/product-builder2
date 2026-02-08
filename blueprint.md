# Mega Homepage Blueprint

## Overview

The goal is to create a modern, responsive, and visually engaging single-page landing page for (주)메가와트알이, focusing on clean/renewable energy. The homepage will be structured with four main sections (About, Business, Management, Contact) accessible via navigation tabs.

## Design & Style (Retained)

*   **Aesthetics:** A bright, clean, and professional look with a light-themed UI, conveying innovation and sustainability.
*   **Color Palette:**
    *   Primary Background: `#F7F9FC` (Light Blue/Gray)
    *   Card/Layer Background: `#FFFFFF`
    *   Primary Text: `#1D2C3C` (Dark Slate Blue)
    *   Accent Color: `#007BFF` (Vibrant Blue)
    *   Secondary Text: `#5A6A7B` (Grayish Blue)
*   **Typography:**
    *   Headings: 'Poppins', sans-serif.
    *   Body: 'Inter', sans-serif.
*   **Layout:** A responsive single-page layout with distinct sections for each tab.

## Features & Sections (Updated)

1.  **Header:**
    *   Sticky navigation with "(주)메가와트알이" logo.
    *   Navigation links for "About", "Business", "Management", "Contact".
    *   Smooth scrolling to sections.

2.  **Hero Section:**
    *   Remains as is, providing a strong first impression.

3.  **About Section:**
    *   Content:
        *   "기후 위기의 시대에 신재생에너지로의 에너지 전환은 중요하며, 대한민국이 신재생에너지로의 전환에 이바지하겠습니다."
        *   "신재생에너지 발전사업에 대한 솔루션을 제공하고 함께 성장하도록 하겠습니다."
        *   "신재생에너지의 공급자, 수요자, 개발자, 투자자 모두 합리적인 선택을 할 수 있도록 돕겠습니다."

4.  **Business Section:**
    *   Content:
        *   신재생에너지 사업개발 컨설팅 (발전사업허가/개발행위/도시관리계획/공유수면 등 인허가 자문, 사업개발 기획)
        *   신재생에너지 투자 및 금융 자문 (투자 유치 및 프로젝트 파이낸싱(PF) 자문, 주민참여형 금융구조 설계)
        *   풍력자원평가 및 풍력발전사업 발전량 분석 (Met mast 설치 및 풍황자원평가, 발전량 평가 및 풍력발전단지 설계)
        *   신재생에너지 발전사업 중개 (태양광, 육상/해상 풍력, 연료전지 발전사업 중개거래, RE100 PPA 중개거래)
        *   신재생에너지 발전사업 운영 (풍력, 태양광 발전사업 운영, 소규모 태양광 발전사업 운영 및 법인 관리)

5.  **Management Section:**
    *   Content: List of power plants with capacity, address, and operation start date.
    *   Image placeholders for "발전소 전경".

6.  **Contact Section:**
    *   Content: "담당자 email : koreawindpower@naver.com"

7.  **Footer:**
    *   Multi-column layout with links and contact info, updated company name.
    *   Copyright notice.
    *   Responsiveness: Layout adjusts for tablet and mobile screens.

## Completed Tasks:

*   **Implement Image Gallery and Light/Dark Mode:**
    *   Modified `index.html` to include a container for the image gallery and a theme toggle button.
    *   Created a Web Component in `main.js` to display images dynamically, categorized by business.
    *   Implemented light/dark mode toggle functionality in `main.js` (adding/removing a class from `body`).
    *   Updated `style.css` to define CSS variables for light and dark mode colors and apply thematic styling.
    *   Ensured proper linking of `main.js` and `style.css` in `index.html`.
*   **Fix Management Section Display Issue:**
    *   Modified the `ImageGalleryItem` Web Component in `main.js` to gracefully handle `null` or empty attribute values for 'capacity', 'address', and 'start_date', preventing the literal string "null" from being displayed.
    *   Enhanced `ImageGalleryItem` to handle potentially missing or empty `src` attributes for images, ensuring that an invalid image path is not set and providing a default `alt` text.
*   **Rename Image Files and Update Paths:**
    *   Renamed image files in the `photo` directory from Korean filenames with spaces to English filenames with hyphens (e.g., `영주 태양광.jpg` to `yeongju-solar.jpg`).
    *   Updated corresponding `src` paths in the `images` array within `main.js` to reflect the new English filenames.
*   **Resolve ReferenceError in ImageGalleryItem:**
    *   Corrected `main.js` to ensure `address` and `startDate` variables are properly declared using `document.createElement('p')` within the `ImageGalleryItem` Web Component constructor, resolving `Uncaught ReferenceError` issues.
*   **Resolve Content Security Policy (CSP) Issue:**
    *   Modified `index.html` to add `'unsafe-eval'` to the `script-src` directive in the Content Security Policy (CSP) meta tag. This allows the execution of JavaScript code that uses `eval()` and similar functions, resolving related errors. (Note: This change increases security risk and should be reviewed for long-term solutions.)

## Current Task: Verify Fix

*   **Steps:**
    1.  User to verify if the "null" values for image, "용량", "주소", and "최초운전개시" are no longer displayed in the "management tap".
    2.  User to confirm if images and data are loading correctly, and no JavaScript errors are present in the browser console.
    3.  User to confirm that the Content Security Policy (CSP) error related to 'eval' is no longer appearing.