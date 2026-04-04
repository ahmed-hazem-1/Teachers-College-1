# Design System & UI/UX Guidelines

This document outlines the design philosophy, user interface (UI) components, user experience (UX) patterns, and overall styling for the "Teachers College" English learning platform.

## 1. Brand Identity & Vibe
The website aims to project a **professional, modern, and engaging** atmosphere. It moves away from traditional, boring educational templates and embraces a dynamic, interactive, and premium feel. The core themes are confidence, success, and fluency.

## 2. Color Palette
The color scheme is designed to provide high contrast, readability, and a touch of vibrant energy.

*   **Primary Accent (Gold/Yellow):** Used for primary buttons, highlights, badges, and hover states. It draws attention and signifies action and premium quality.
*   **Primary Dark (Navy Blue):** Used for headings, primary text, and dark section backgrounds (like the CTA). It provides a strong, professional contrast against the light backgrounds and gold accents.
*   **Backgrounds:** 
    *   **White (`#ffffff`):** Primary background for cards and main sections.
    *   **Off-White/Light Gray (`#fafafa`, `gray-50`):** Used to separate sections (e.g., Features, Testimonials, Footer) and reduce eye strain.
*   **Accents:** Soft, blurred gradients (red/gold and blue) are used in the background of the Hero and CTA sections to add depth without distracting from the content.

## 3. Typography
*   **Primary Font:** `Inter` (sans-serif). Chosen for its excellent readability on screens of all sizes, clean lines, and modern aesthetic.
*   **Hierarchy:**
    *   **Headings:** Bold (`font-bold`, `font-extrabold`), tight tracking (`tracking-tight`), and large sizes (up to `text-5xl` on desktop) to establish clear section boundaries.
    *   **Body Text:** Regular or medium weight, slightly relaxed line height (`leading-relaxed`), typically `text-base` or `text-lg` for comfortable reading.
    *   **Labels/Badges:** Small (`text-sm`), medium weight, often uppercase or title case.

## 4. Layout & Spacing
*   **Container:** The site uses a centralized, responsive container (`max-w-7xl mx-auto`) to ensure content doesn't stretch too wide on large screens, maintaining readability.
*   **Padding & Margins:** Generous whitespace is used throughout (`py-16`, `py-24`, `gap-8`). This "breathing room" makes the content feel premium and less cluttered.
*   **Border Radius:** A friendly and modern look is achieved through heavy use of rounded corners:
    *   Buttons and Badges: `rounded-full` (pill shape).
    *   Cards and Images: `rounded-2xl` or `rounded-3xl`.

## 5. UI Components
*   **Navigation Bar:** Fixed at the top with a glassmorphism/carved-inward effect on desktop (`bg-gray-100/80 p-1.5 rounded-full`). Active states are clearly marked with a white background and shadow.
*   **Buttons:** 
    *   Primary: Gold background, Navy text, bold, with a slight scale or opacity change on hover.
    *   Secondary: White background, gray text, subtle border, used for less critical actions.
*   **Section Badges:** Small, pill-shaped indicators at the top of sections (e.g., "Testimonials", "Introduction") featuring an icon and text to set the context.
*   **Cards (Methodology):** Clean white cards with subtle borders and shadows. On hover, they invert their color scheme (background becomes gold, text becomes navy) to provide strong interactive feedback.

## 6. UX & Animations (Motion)
Animations are powered by `framer-motion` and are a core part of the UX, designed to guide the user's eye and provide feedback without being overwhelming.

*   **Scroll Reveals:** Elements fade in and slide up slightly (`y: 20` to `y: 0`) as the user scrolls down the page. This makes the page feel alive and loads content progressively.
*   **Synchronized Hero Animation:** The Hero section features a dynamic headline where key words (Confidence, Success, etc.) cycle every 3 seconds. The main image carousel and background decorative blobs pulse and change in perfect sync with these words, creating a cohesive thematic experience.
*   **Continuous Motion:** Floating elements (like the "500+ Happy Students" badge) have a continuous, gentle vertical floating animation (`y: [0, -12, 0]`) to add depth.
*   **Testimonial Carousel:** 
    *   The active testimonial is front and center, fully opaque and sharp.
    *   Previous and next testimonials are partially visible on the edges, scaled down, and slightly blurred/transparent to indicate more content is available.
    *   Transitions between testimonials use a smooth crossfade and blur effect.
*   **Micro-interactions:** Hovering over buttons, links, and cards triggers smooth, fast transitions (`duration-300`) to confirm user intent.

## 7. Responsiveness (Mobile-First)
*   The layout gracefully degrades on smaller screens.
*   Grids collapse from 3 or 4 columns down to 1 or 2 columns.
*   Font sizes scale down appropriately (e.g., `text-5xl` on desktop becomes `text-3xl` on mobile).
*   The desktop navigation transforms into a hamburger menu for mobile users.
*   The Testimonial carousel hides the side images on mobile to focus entirely on the active card.
