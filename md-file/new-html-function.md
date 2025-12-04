# New HTML Function

**Handlebars · Functions**

Documentation for the New HTML Function component. This component allows you to inject custom HTML content into your template dynamically. Note that `seo_content` works the same way as `new_html_function`.

## Overview

The New HTML Function component provides a way to inject custom HTML content into your Handlebars template. This is useful for:

- Adding custom sections or widgets
- Injecting promotional banners or announcements
- Adding dynamic content that changes frequently
- Including third-party widgets or embeds

> **NOTE**  
> The `seo_content` field works exactly the same way as `new_html_function`. Both use triple braces `{{{}}}` to render raw HTML without escaping. Use `seo_content` for SEO-optimized content sections.

## HTML Structure

The HTML structure for the New HTML Function component. The content is inserted before the footer by default.

```handlebars
<!-- New HTML Function -->
<div id="user-extra-html" class="user-extra-html">{{{new_html_function}}}</div>
```

> **TIP**  
> The component uses triple braces `{{{}}}` to render raw HTML without escaping. This allows you to include HTML tags, scripts, and other markup directly.

## JavaScript

JavaScript code that dynamically inserts the HTML content. This script runs on page load and inserts the content before the footer.

```javascript
<script>
  (function () {
    var html = {{#if new_html_function}}{{{json new_html_function}}}{{else}}""{{/if}};

    if (html) {
      var hook = document.getElementById("user-extra-html");
      if (!hook) {
        hook = document.createElement("div");
        hook.id = "user-extra-html";
        var footer = document.querySelector("footer");
        (footer ? footer.parentNode.insertBefore(hook, footer) : document.body.appendChild(hook));
      }
      hook.innerHTML = html;
    }
  })();
</script>
```

## JSON Structure

The JSON structure for the New HTML Function component. The HTML content should be provided as a string.

```json
{
  "new_html_function": "<div class='custom-section'><h2>Custom Content</h2><p>This is custom HTML content.</p></div>"
}
```

## SEO Content

The `seo_content` field works exactly the same way as `new_html_function`. It's typically used for SEO-optimized content sections.

```handlebars
<!-- SEO Content (Same as new_html_function) -->
<section class="seo-content" id="seo_content" data-section-id="seo_content">
  <div class="container">
    <div class="info">
      {{{seo_content}}}
    </div>
  </div>
</section>
```

> **TIP**  
> Use `seo_content` for main content sections that need SEO optimization. Use `new_html_function` for custom widgets, banners, or supplementary content.

## Usage Examples

Examples of different HTML content you can inject.

```json
<!-- Example 1: Simple HTML -->
{
  "new_html_function": "<div class='promo-banner'><h3>Special Offer!</h3><p>Get 50% off today.</p></div>"
}

<!-- Example 2: Complex HTML with multiple elements -->
{
  "new_html_function": "<section class='custom-widget'><div class='widget-header'><h2>Featured Content</h2></div><div class='widget-body'><p>Your content here</p></div></section>"
}

<!-- Example 3: HTML with inline styles -->
{
  "new_html_function": "<div style='background: #f0f0f0; padding: 20px; border-radius: 8px;'><h2 style='color: #333;'>Welcome</h2><p style='color: #666;'>Custom styled content</p></div>"
}
```
