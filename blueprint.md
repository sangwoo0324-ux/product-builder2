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
    *   Content: Solar power plant details are now statically embedded directly into `index.html` using a grid layout.

6.  **Contact Section:**
    *   Content: "담당자 email : koreawindpower@naver.com"

7.  **Footer:**
    *   Multi-column layout with links and contact info, updated company name.
    *   Copyright notice.
    *   Responsiveness: Layout adjusts for tablet and mobile screens.

## Completed Tasks:

*   **Inserted Locally Hosted Image for "경북 영주 태양광 발전소":** The `plant-image-placeholder` for "경북 영주 태양광 발전소" in `index.html` was updated to use the locally stored `영주.jpg` file as its source, adding `alt` and `loading="lazy"` attributes.
*   **Inserted Image for "경북 영주 태양광 발전소":** The `plant-image-placeholder` for "경북 영주 태양광 발전소" in `index.html` was replaced with an `<img>` tag, using the provided URL and adding `alt` and `loading="lazy"` attributes.
*   **Refactored Management Tab to Static HTML:** The management section was refactored from a dynamic, Web Component-based approach to a static HTML structure directly embedded in `index.html`, along with new CSS styling in `style.css` for a grid layout and placeholders for images. The `meta http-equiv="Content-Security-Policy"` was removed from `index.html`.
*   **Removed Redundant JavaScript:** The `ImageGalleryItem` Web Component definition, dynamic image loading logic, and theme toggle functionality were removed from `main.js` to align with the new static HTML structure and user's changes in `index.html` and `style.css`.
*   **Updated Header Logo and Theme Toggle:** The `logo.jpg` image was removed from the header, and the theme toggle button and its functionality were removed, reflecting the user's latest `index.html` changes.
*   **Resolved ReferenceError in ImageGalleryItem (Previous Dynamic Approach):** (Note: This task is related to the previous dynamic approach and is kept for historical context of work done.) Corrected `main.js` to ensure `address` and `startDate` variables are properly declared using `document.createElement('p')` within the `ImageGalleryItem` Web Component constructor, resolving `Uncaught ReferenceError` issues.
*   **Update Image Paths to Absolute (Previous Dynamic Approach):** (Note: This task is related to the previous dynamic approach and is kept for historical context of work done.) Modified `main.js` to change all image `src` paths from relative ('photo/...') to absolute ('/photo/...') to improve consistency and resolve potential loading issues across different environments.
