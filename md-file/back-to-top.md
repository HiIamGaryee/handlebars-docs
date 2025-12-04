# Back to Top Button

**Handlebars · Components**

Documentation for the Back to Top Button component (lines 4595-4600) in the all-blog.hbs template. This component provides a smooth scroll-to-top functionality that appears when users scroll down the page.

## Overview

The Back to Top Button is a fixed-position button that appears in the bottom-right corner of the page when users scroll down. It provides a quick way to return to the top of the page with a smooth scrolling animation.

The button features:

- **Auto-show/hide:** Appears when scrolling past a threshold, hides when near the top
- **Smooth animations:** Fade in/out with opacity transitions
- **Hover effects:** Background color change and lift animation
- **Smooth scroll:** Uses native smooth scroll behavior when clicked

> **TIP**  
> The button only renders if `back_to_top.enabled` is set to `true` in your JSON. The scroll threshold can be customized to control when the button appears.

## HTML Structure

The HTML template code for the Back to Top Button. This code should be placed in your Handlebars template, typically near the end of the body before closing tags.

\`\`\`handlebars
<!-- Back to Top Button -->
{{#if back_to_top.enabled}}
<button id="backToTopBtn" class="back-to-top-btn" style="display: none;">
  <img src="{{back_to_top.icon}}" alt="Back to Top" class="back-to-top-icon">
</button>
{{/if}}
\`\`\`

**Key Features:**
- Conditional rendering with `{{#if back_to_top.enabled}}`
- Initially hidden with `style="display: none;"`
- Uses an image icon from JSON configuration
- Requires JavaScript to show/hide based on scroll position

## CSS Styles

Complete CSS styles for the Back to Top Button. These styles create a fixed circular button with smooth transitions and hover effects.

\`\`\`css
.back-to-top-btn {
  position: fixed;
  bottom: 90px;
  right: 20px;
  z-index: 999;
  border: none;
  background: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease, opacity 0.3s ease;
  padding: 8px;
  opacity: 0;
}

.back-to-top-btn:hover {
  background: {{colors.primaryactions}};
  transform: translateY(-5px);
}

.back-to-top-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
\`\`\`

**Key Features:**
- Fixed positioning in bottom-right corner
- Circular shape with `border-radius: 50%`
- Initially transparent with `opacity: 0`
- Smooth transitions for all state changes
- Hover effect with background color and lift animation
- High z-index (999) to appear above other content

## JavaScript

The JavaScript code that handles the Back to Top Button functionality. This script monitors scroll position and shows/hides the button accordingly, then handles the smooth scroll-to-top action.

\`\`\`javascript
// Back to Top Button Functionality
(function() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;
  
  const scrollThreshold = {{back_to_top.scroll_threshold}} || 50;
  
  function checkScroll() {
    if (window.pageYOffset > scrollThreshold) {
      backToTopBtn.style.display = 'block';
      setTimeout(() => {
        backToTopBtn.style.opacity = '1';
      }, 10);
    } else {
      backToTopBtn.style.opacity = '0';
      setTimeout(() => {
        backToTopBtn.style.display = 'none';
      }, 300);
    }
  }
  
  // Initial check
  checkScroll();
  
  // Check on scroll
  window.addEventListener('scroll', checkScroll, { passive: true });
  
  // Scroll to top on click
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();
\`\`\`

**How it works:**

- **Scroll Detection:** Listens to window scroll events and checks if scroll position exceeds the threshold
- **Show/Hide Logic:** Shows button with fade-in when scrolled down, hides with fade-out when near top
- **Click Handler:** Smoothly scrolls to top using `window.scrollTo()` with `behavior: 'smooth'`
- **Performance:** Uses `passive: true` for scroll listener to improve performance

## Responsive CSS

Media queries for mobile devices. On screens smaller than 768px, the button size and position are adjusted for better mobile experience.

\`\`\`css
@media (max-width: 768px) {
  .back-to-top-btn {
    bottom: 85px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
}
\`\`\`

## JSON Structure

The JSON structure required for the Back to Top Button. Include this in your template JSON file.

\`\`\`json
{
  "back_to_top": {
    "enabled": true,
    "icon": "https://example.com/back-to-top-icon.png",
    "scroll_threshold": 50
  }
}
\`\`\`

> **TIP**  
> The `scroll_threshold` value determines how many pixels the user must scroll before the button appears. A value of 50 means the button will show after scrolling 50px down the page. Adjust this value based on your design needs.

## Complete Example

A complete working example showing how all the pieces fit together. Copy this structure into your template, CSS, JavaScript, and JSON files.

> **NOTE**  
> Make sure to include the JavaScript code in your template, typically in a `<script>` tag before the closing `</body>` tag. The button requires JavaScript to function properly.

