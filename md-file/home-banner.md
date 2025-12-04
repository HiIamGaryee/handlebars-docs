# Home Banner

**Handlebars · Components**

Documentation for the Home Banner component. This component creates a responsive image carousel using Swiper.js with support for desktop and mobile images, auto-slide, and navigation indicators.

## Overview

The Home Banner component is a responsive image carousel that features:

- **Responsive Images:** Separate images for desktop and mobile devices
- **Auto-slide:** Configurable automatic slide transitions
- **Clickable Slides:** Optional links on banner images
- **Navigation Indicators:** Optional pagination dots
- **Loop:** Infinite carousel loop

## HTML Structure

The HTML structure for the Home Banner component. Requires Swiper.js CSS library.

```handlebars
{{#if homeBanner.enabled}}
<section class="home-banner" id="home_banner" data-section-id="home_banner">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  <div class="banner-container">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        {{#each homeBanner.slides}}
        {{#if redirect}}
        {{#if url}}
        <a class="swiper-slide is-clickable" href="{{url}}" aria-label="{{title}}">
          <img src="{{image}}" alt="{{altText}}" class="banner-img banner-img-desktop" loading="lazy" decoding="async">
          {{#if mobileImg}}
          <img src="{{mobileImg}}" alt="{{altText}}" class="banner-img banner-img-mobile" loading="lazy" decoding="async">
          {{else if mobileImgs}}
          <img src="{{mobileImgs}}" alt="{{altText}}" class="banner-img banner-img-mobile" loading="lazy" decoding="async">
          {{/if}}
        </a>
        {{/if}}
        {{else}}
        <div class="swiper-slide not-clickable">
          <img src="{{image}}" alt="{{altText}}" class="banner-img banner-img-desktop">
          {{#if mobileImg}}
          <img src="{{mobileImg}}" alt="{{altText}}" class="banner-img banner-img-mobile">
          {{/if}}
        </div>
        {{/if}}
        {{/each}}
      </div>
    </div>
  </div>
  {{#if homeBanner.showIndicators}}
  <div class="home-banner-pagination swiper-pagination"></div>
  {{/if}}
</section>
{{/if}}
```

## CSS Styles

Complete CSS styles for the Home Banner component. Includes responsive breakpoints for mobile and desktop images.

```css
.home-banner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
}

.banner-container {
  width: 100%;
  max-width: 100%;
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 0;
}

.home-banner .mySwiper {
  width: 100%;
  padding: 0;
  overflow: hidden;
  border-radius: {{style.homeBannerBorderRadius}};
}

.home-banner .mySwiper .swiper-slide {
  position: relative;
  width: 100%;
  display: block;
}

.home-banner .mySwiper .banner-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.banner-img-desktop {
  display: block;
}

.banner-img-mobile {
  display: none;
}

@media (max-width: 420px) {
  .banner-img-desktop {
    display: none !important;
  }
  .banner-img-mobile {
    display: block !important;
  }
  .home-banner {
    padding: 0;
  }
}

.home-banner-pagination {
  margin-top: 16px;
  text-align: center;
}

.home-banner-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: rgba(0,0,0,0.2);
  opacity: 1;
  margin: 0 6px !important;
  transition: transform 0.2s ease, background 0.2s ease;
}

.home-banner-pagination .swiper-pagination-bullet-active {
  background: {{colors.primary}};
  transform: scale(1.15);
}
```

## JavaScript

JavaScript code for initializing the Swiper carousel. Requires Swiper.js library.

```javascript
<script defer src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  (function initHomeBanner(){
    function ready(fn){ 
      if(document.readyState!=='loading'){fn()} 
      else {document.addEventListener('DOMContentLoaded',fn)} 
    }
    ready(function(){
      if (typeof Swiper === 'undefined') return;
      var auto = {{#if homeBanner.autoSlide}}true{{else}}false{{/if}};
      var delay = {{#if homeBanner.slideInterval}}{{homeBanner.slideInterval}}{{else}}5000{{/if}};
      var showIndicators = {{#if homeBanner.showIndicators}}true{{else}}false{{/if}};
      var swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: auto ? { delay: delay, disableOnInteraction: false } : false,
        pagination: showIndicators ? { el: '.swiper-pagination', clickable: true } : false,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 600,
        effect: 'slide'
      });
    });
  })();
</script>
```

## JSON Structure

The JSON structure required for the Home Banner component.

```json
{
  "homeBanner": {
    "enabled": true,
    "autoSlide": true,
    "slideInterval": 5000,
    "showNavigation": true,
    "showIndicators": true,
    "backgroundColor": "linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%)",
    "slides": [
      {
        "image": "https://api.infin1x.com/assets/manual_upload/banner-desktop.webp",
        "mobileImg": "https://api.infin1x.com/assets/manual_upload/banner-mobile.webp",
        "altText": "Banner 1 - Greatest Promotion",
        "title": "Special Offer",
        "redirect": true,
        "url": "https://yourwebsite.com/promo"
      },
      {
        "image": "https://api.infin1x.com/assets/manual_upload/banner2-desktop.webp",
        "mobileImgs": "https://api.infin1x.com/assets/manual_upload/banner2-mobile.webp",
        "altText": "Banner 2 - Largest Casino",
        "title": "New Games",
        "redirect": false
      }
    ]
  }
}
```

## Usage Examples

> **TIP**  
> Use `mobileImg` or `mobileImgs` for mobile images. The component automatically shows the appropriate image based on screen size. Set `redirect: true` and provide a `url` to make slides clickable.

