# Landing Banner V1

**Handlebars · Components**

## Overview

The `landing_banner` component (also available as `landing_banner_v1`, `landing_banner_v2`, `landing_banner_v3`, etc.) displays promotional banner images in a vertical stack. Each banner can be clickable and link to a specific URL.

This component is ideal for displaying promotional content, advertisements, or featured offers. Multiple versions (v1, v2, v3, etc.) can be used on the same page to display different sets of banners in different sections.

## HTML Structure

The component consists of a section wrapper with a container div. Each banner item is wrapped in an anchor tag (if a URL is provided) and displays an image. The structure is simple and semantic, making it easy to customize.

**Version 1 (landing_banner):**

```handlebars
{{#if landing_banner.enabled}}
{{#if landing_banner.items}}
<section class="landing-banner-parents has-items" id="landing_banner_v1" data-section-id="landing_banner_v1">
  <div class="container landing-banner">
    {{#each landing_banner.items}}
    <a href="{{url}}" {{#if new_tab}}target="_blank" rel="noopener"{{/if}} class="landing-banner__link" aria-label="{{alt}}">
      <img src="{{img}}" alt="{{alt}}" class="landing-banner__img"/>
    </a>
    {{/each}}
  </div>
</section>
{{/if}}
{{/if}}
```

**Version 2 (landing_banner_v2):**

```handlebars
{{#if landing_banner_v2.enabled}}
{{#if landing_banner_v2.items}}
<section class="landing-banner-parents" id="landing_banner_v2" data-section-id="landing_banner_v2">
  <div class="container landing-banner">
    {{#each landing_banner_v2.items}}
    <a href="{{url}}" {{#if new_tab}}target="_blank" rel="noopener"{{/if}} class="landing-banner__link" aria-label="{{alt}}">
      <img src="{{img}}" alt="{{alt}}" class="landing-banner__img"/>
    </a>
    {{/each}}
  </div>
</section>
{{/if}}
{{/if}}
```

**Note:** The same pattern applies to v3, v4, and any future versions. Simply replace `landing_banner_v2` with `landing_banner_v3`, `landing_banner_v4`, etc.

## CSS Styles

The CSS provides a centered, vertical layout for the banners. Images are constrained to a maximum width and height while maintaining their aspect ratio. The `has-items` class adds bottom padding when items are present.

```css
.landing-banner {
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.landing-banner__link {
  display: inline-block;
  line-height: 0;
  margin: 12px 0 0 0;
}

.landing-banner__img {
  width: 100%;
  max-width: 800px;
  max-height: 400px;
  object-fit: contain;
  border-radius: {{style.borderRadiusCard}};
  display: block;
}

.landing-banner-parents.has-items {
  padding-bottom: 20px;
}
```

## Version Variants

You can use multiple versions of the landing banner on the same page:

- **landing_banner** or **landing_banner_v1**: First banner section
- **landing_banner_v2**: Second banner section
- **landing_banner_v3**: Third banner section
- **landing_banner_v4**, **landing_banner_v5**, etc.: Additional banner sections

Each version is independent and can have its own set of items. This allows you to place different promotional banners in different sections of your page.

**Important:** Make sure to update the `ensureSectionIdMap()` function in your JavaScript to include any new version IDs (e.g., `landing_banner_v4`, `landing_banner_v5`) if you create additional versions.

## JSON Structure

Each version requires its own configuration object in the JSON file. The structure is identical for all versions:

**Version 1:**

```json
{
  "landing_banner": {
    "enabled": true,
    "items": [
      {
        "img": "https://example.com/banner1.jpg",
        "url": "/promo-page",
        "alt": "Promo Banner 1",
        "new_tab": false
      },
      {
        "img": "https://example.com/banner2.jpg",
        "url": "https://external-site.com",
        "alt": "Promo Banner 2",
        "new_tab": true
      }
    ]
  }
}
```

**Version 2:**

```json
{
  "landing_banner_v2": {
    "enabled": true,
    "items": [
      {
        "img": "https://example.com/banner-v2.jpg",
        "url": "/special-offer",
        "alt": "Special Offer",
        "new_tab": false
      }
    ]
  }
}
```

**Version 3:**

```json
{
  "landing_banner_v3": {
    "enabled": true,
    "items": [
      {
        "img": "https://example.com/banner-v3.jpg",
        "url": "/featured-deal",
        "alt": "Featured Deal",
        "new_tab": false
      }
    ]
  }
}
```

**Note:** The `new_tab` property determines whether the link opens in a new tab. Set to `true` for external links and `false` for internal navigation.



