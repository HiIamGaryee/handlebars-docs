# Category Grid

**Handlebars · Components**

## Overview

The `category_grid` component displays a vertical stack of category cards, each containing text content and an optional image. Unlike `category_grid_each` which uses a horizontal grid layout, this component displays items in a single column with a horizontal card layout (text on left, image on right).

Each card can have a background color or background image, and the entire card is clickable if a URL is provided. The component is fully responsive and adapts to mobile devices by stacking the content vertically.

## HTML Structure

The component uses a single-column grid container with individual article cards. Each card contains a flex container with text content and an optional image. An overlay link makes the entire card clickable.

```handlebars
{{#if category_grid.enabled}}
<section id="category_grid" data-section-id="category_grid">
  <div class="container-title">
    <div class="big-title">
      <p>{{category_grid.title}}</p>
    </div>
    <div class="big-title-description">
      <p>{{category_grid.description}}</p>
    </div>
  </div>

  <div class="category-grid-container">
    {{#each category_grid.items}}
    <article class="category-grid-card" style="{{#if bg_image}}background-image: url('{{bg_image}}'); background-size: cover; background-position: center;{{else}}{{#if bg_color}}background-color: {{bg_color}};{{else}}background-color: {{../colors.modePaperBg}};{{/if}}{{/if}} border-radius: {{../style.borderRadiusCard}}; box-shadow: {{../style.globalBoxShadow}};">
      <div class="category-grid-content">
        <div class="category-grid-text">
          {{#if title}}
          <h3 class="category-grid-title">{{title}}</h3>
          {{/if}}
          {{#if description}}
          <p class="category-grid-description">{{description}}</p>
          {{else}}{{#if subtitle}}
          <p class="category-grid-description">{{subtitle}}</p>
          {{/if}}{{/if}}
        </div>
        {{#if image}}
        <div class="category-grid-image">
          <img src="{{image}}" alt="{{#if title}}{{title}}{{else}}{{alt}}{{/if}}" class="category-grid-img">
        </div>
        {{/if}}
      </div>
      {{#if url}}
      <a href="{{url}}" class="category-grid-link" aria-label="{{#if title}}{{title}}{{else}}View more{{/if}}"></a>
      {{/if}}
    </article>
    {{/each}}
  </div>
</section>
{{/if}}
```

## CSS Styles

The CSS uses a single-column grid layout with flexbox for the card content. Cards have a minimum height and use flexbox to align text and images horizontally. The overlay link covers the entire card area for better UX.

```css
.category-grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.category-grid-card {
  position: relative;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  align-items: center;
  padding: 30px;
}

.category-grid-content {
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  position: relative;
  z-index: 2;
}

.category-grid-text {
  flex: 1;
  min-width: 0;
}

.category-grid-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.category-grid-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333333;
  margin: 0;
}

.category-grid-image {
  flex: 0 0 280px;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-grid-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.category-grid-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  text-decoration: none;
}

.container-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: start;
}

.big-title {
  width: 100%;
  max-width: 1140px;
  color: {{colors.bigTitleColor}};
  font-size: 1rem;
  font-weight: bold;
  padding: 30px 0px;
  text-align: left;
}

.big-title p {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}

.big-title-description {
  padding-bottom: 30px;
}
```

## Responsive CSS

On mobile devices (max-width: 768px), the card content switches to a vertical layout with the image centered above the text. The image size is also reduced for better mobile display.

```css
@media (max-width: 768px) {
  .category-grid-container {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 15px;
  }
  
  .category-grid-card {
    min-height: auto;
    padding: 20px;
  }
  
  .category-grid-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .category-grid-image {
    flex: 0 0 auto;
    width: 100%;
    max-width: 280px;
    height: 200px;
    margin: 0 auto;
  }
  
  .category-grid-title {
    font-size: 1.25rem;
  }
  
  .category-grid-description {
    font-size: 0.9rem;
  }
}
```

## JSON Structure

The component requires a `category_grid` object with an `enabled` flag, optional `title` and `description`, and an `items` array. Each item can have a title, description (or subtitle), image, URL, and optional background styling.

```json
{
  "category_grid": {
    "enabled": true,
    "title": "Trusted Online Casino Games Online",
    "description": "Explore our wide selection of casino games",
    "items": [
      {
        "title": "Live Casino",
        "description": "Experience real-time gaming with live dealers",
        "image": "https://example.com/live-casino.jpg",
        "url": "https://example.com/live-casino",
        "alt": "Live Casino",
        "bg_color": "#f8f9fa",
        "bg_image": ""
      },
      {
        "title": "Slot Games",
        "subtitle": "Spin and win with our exciting slot collection",
        "image": "https://example.com/slot-games.jpg",
        "url": "https://example.com/slot-games",
        "alt": "Slot Games",
        "bg_color": "#ffffff"
      }
    ]
  },
  "colors": {
    "bigTitleColor": "#333333",
    "modePaperBg": "#ffffff"
  },
  "style": {
    "borderRadiusCard": "8px",
    "globalBoxShadow": "0 2px 8px rgba(0,0,0,0.1)"
  }
}
```

**Note:** The `bg_image` property takes precedence over `bg_color`. If neither is provided, the card will use the default background color from `colors.modePaperBg`.

