# Font Family Link

**Handlebars · Functions**

Documentation for the FontFamilyLink component. This component allows you to define and use custom Google Fonts or web fonts in your Handlebars templates with automatic font name extraction and CSS variable setup.

## Overview

The FontFamilyLink component provides a flexible way to load and use custom fonts in your Handlebars templates. It supports two font families:

- **Main Font (fontFamilyLink):** Used for body text, headings, and general content
- **V2 Font (fontFamilyLinkV2):** Used for specific sections like FAQ sections

The component automatically extracts the font name from the Google Fonts URL and sets CSS variables for use throughout your stylesheet.

## HTML Structure

The HTML structure for loading fonts. Place this in the `<head>` section of your template.

```handlebars
{{#if fontFamilyLink}}
<link href="{{fontFamilyLink}}&display=swap" rel="stylesheet">
{{else}}
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet">
{{/if}}

{{!-- V2 Font for FAQ Section --}}
{{#if fontFamilyLinkV2}}
<link href="{{fontFamilyLinkV2}}&display=swap" rel="stylesheet">
{{else}}
<link href="https://fonts.googleapis.com/css2?family=Gabarito&display=swap" rel="stylesheet">
{{/if}}
```

> **TIP**  
> The component uses conditional rendering. If `fontFamilyLink` is not provided, it falls back to "Nunito Sans" as the default font. The `&display=swap` parameter ensures text remains visible during font load.

## JavaScript Function

The JavaScript function that extracts font names from URLs and sets CSS variables. This script should be placed in the `<head>` section before your CSS.

```javascript
<script>
  function extractFontName(url, customFontName) {
    if (customFontName && customFontName !== 'undefined' && customFontName !== '') {
      return customFontName;
    }
    if (!url || url === 'undefined' || url === '') {
      return 'Nunito Sans Regular';
    }
    const match = url.match(/family=([^&:]+)/);
    if (match) {
      let fontName = decodeURIComponent(match[1].replace(/\\+/g, ' '));
      fontName = fontName.split(':')[0];
      return fontName.trim();
    }
    return 'Nunito Sans Regular';
  }

  // Main font (body, headings, etc.)
  const fontFamilyLink = '{{fontFamilyLink}}';
  const customFontFamily = '{{fontFamily}}';
  const fontFamily = extractFontName(fontFamilyLink, customFontFamily);

  // FAQ font (V2)
  const fontFamilyLinkV2 = '{{fontFamilyLinkV2}}';
  const customFontFamilyV2 = '{{fontFamilyV2}}';
  const fontFamilyV2 = fontFamilyLinkV2 && fontFamilyLinkV2 !== 'undefined' && fontFamilyLinkV2 !== ''
    ? extractFontName(fontFamilyLinkV2, customFontFamilyV2)
    : 'Gabarito';

  // Set main font
  document.documentElement.style.setProperty('--font-family', fontFamily);
  // Set FAQ font (V2)
  document.documentElement.style.setProperty('--font-family-v2', fontFamilyV2);

  document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.setProperty('--font-family', fontFamily);
    document.documentElement.style.setProperty('--font-family-v2', fontFamilyV2);
  });
</script>
```

**How it works:**

- Extracts font name from Google Fonts URL using regex
- Falls back to custom font name if provided in JSON
- Sets CSS custom properties (--font-family, --font-family-v2) for use in stylesheets
- Handles URL decoding and formatting (e.g., "Bebas+Neue" becomes "Bebas Neue")

## CSS Usage

How to use the font families in your CSS. The fonts are available as CSS variables and can be used throughout your stylesheet.

```css
@font-face {
  font-family: '{{fontFamily}}';
  font-display: swap;
}

@font-face {
  font-family: '{{fontFamilyV2}}';
  font-display: swap;
}

:root {
  --font-family: {{#if fontFamily}}'{{fontFamily}}'{{else}}'Nunito Sans Regular'{{/if}};
  --font-family-v2: {{#if fontFamilyV2}}'{{fontFamilyV2}}'{{else}}'Gabarito'{{/if}};
}

body {
  font-family: var(--font-family);
}

.faq-section {
  font-family: var(--font-family-v2);
}
```

> **TIP**  
> Use `var(--font-family)` for main content and `var(--font-family-v2)` for FAQ sections or other specific areas. The CSS variables are set automatically by the JavaScript function.

## JSON Structure

The JSON structure required for the FontFamilyLink component. Include this in your template JSON file.

```json
{
  "fontFamilyLink": "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
  "fontFamily": "Bebas Neue",
  "fontFamilyLinkV2": "https://fonts.googleapis.com/css2?family=Lora&display=swap",
  "fontFamilyV2": "Lora, serif"
}
```

## Usage Examples

Examples of how to configure different fonts in your JSON file.

```json
<!-- Example 1: Using Google Fonts URL -->
{
  "fontFamilyLink": "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
  "fontFamily": "Roboto"
}

<!-- Example 2: Using custom font name -->
{
  "fontFamilyLink": "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
  "fontFamily": "Open Sans"
}

<!-- Example 3: With V2 font for FAQ sections -->
{
  "fontFamilyLink": "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
  "fontFamily": "Bebas Neue",
  "fontFamilyLinkV2": "https://fonts.googleapis.com/css2?family=Lora&display=swap",
  "fontFamilyV2": "Lora, serif"
}
```

> **NOTE**  
> When using Google Fonts, make sure the URL includes `&display=swap` for better performance. The font name will be automatically extracted from the URL, but you can also provide a custom name in the `fontFamily` field.






