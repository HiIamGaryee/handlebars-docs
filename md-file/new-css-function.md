# New CSS Function

**Handlebars · Functions**

Documentation for the New CSS Function component. This component allows you to inject custom CSS styles into your template dynamically, either as a single string or an array of CSS rules.

## Overview

The New CSS Function component provides a way to inject custom CSS styles into your Handlebars template. This is useful for:

- Adding custom styles for specific pages or sections
- Overriding default theme styles
- Adding responsive styles dynamically
- Including third-party widget styles

The component supports both single CSS string and array of CSS strings formats.

## HTML Structure

The HTML structure for the New CSS Function component. Can be used in two ways: single string or array format.

```handlebars
<!-- New CSS Function -->
<style id="user-extra-css">{{{new_css_function}}}</style>

<!-- Or using array format -->
<style id="user-extra-css">
  {{#each new_css_function}} {{{this}}}
  {{/each}}
</style>
```

> **TIP**  
> Use the array format when you have multiple CSS rules to inject. Each item in the array will be rendered as a separate CSS block.

## JavaScript

JavaScript code that dynamically injects the CSS into the document head. This script runs on page load.

```javascript
<script>
  (function () {
    var css = {{#if new_css_function}}{{{json new_css_function}}}{{else}}""{{/if}};
    
    if (css) {
      var s = document.createElement("style");
      s.id = "user-extra-css";
      s.appendChild(document.createTextNode(css));
      document.head.appendChild(s);    
    }
  })();
</script>
```

## JSON Structure

The JSON structure for the New CSS Function component. Supports both single string and array formats.

**Single String Format:**

```json
{
  "new_css_function": ".custom-class { color: #333; background: #f0f0f0; padding: 20px; }"
}
```

**Array Format:**

```json
{
  "new_css_function": [
    ".custom-widget { max-width: 1200px; margin: 0 auto; }",
    ".custom-widget h2 { color: #d32f2f; font-size: 24px; }",
    ".custom-widget p { line-height: 1.6; color: #666; }"
  ]
}
```

## Usage Examples

Examples of different CSS content you can inject.

```json
<!-- Example 1: Single CSS string -->
{
  "new_css_function": ".promo-banner { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white; }"
}

<!-- Example 2: Array of CSS strings -->
{
  "new_css_function": [
    ".custom-section { padding: 40px 20px; }",
    ".custom-section h2 { font-size: 32px; margin-bottom: 20px; }",
    ".custom-section .content { max-width: 800px; margin: 0 auto; }"
  ]
}

<!-- Example 3: Complex CSS with media queries -->
{
  "new_css_function": ".responsive-widget { width: 100%; padding: 20px; } @media (min-width: 768px) { .responsive-widget { padding: 40px; } } @media (min-width: 1024px) { .responsive-widget { max-width: 1200px; margin: 0 auto; } }"
}
```

> **NOTE**  
> When using the array format, make sure each CSS string is complete and valid. The component will concatenate all array items together.

