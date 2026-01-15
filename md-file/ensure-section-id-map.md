# Ensure Section ID Map

**Handlebars · Functions**

Documentation for the `ensureSectionIdMap` function. This function creates a map of all page sections and enables dynamic reordering of sections based on JSON configuration.

## Overview

The `ensureSectionIdMap` function is a JavaScript utility that:

- Creates a map of all page sections by their section IDs
- Ensures all sections have both `id` and `data-section-id` attributes
- Automatically finds sections using predefined selectors
- Enables dynamic reordering of page sections via JSON configuration

This function works together with `moveSections` to reorder page sections dynamically based on the order specified in your JSON file.

## JavaScript Function

The complete JavaScript code for `ensureSectionIdMap` and related functions. This code should be placed in a script tag before the closing `</body>` tag.

```javascript
function ensureSectionIdMap() {
  var map = {};
  
  // Step 1: Find all elements with data-section-id attribute
  var nodes = document.querySelectorAll("[data-section-id]");
  nodes.forEach(function (n) {
    var sid = n.getAttribute("data-section-id");
    if (sid && !n.id) {
      n.id = sid; // Ensure element has ID
    }
    map[sid] = n;
  });
  
  // Step 2: Look for predefined sections by ID or selector
  var selectors = {
    home_banner: "#home_banner",
    landing_banner_v1: "#landing_banner_v1",
    landing_banner_v2: "#landing_banner_v2",
    landing_banner_v3: "#landing_banner_v3",
    promotion_grid: "#promotion_grid",
    category_grid: "#category_grid",
    category_grid_each: "#category_grid_each",
    seo_content: "#seo_content",
    all_blog_posts: "#all_blog_posts",
    faq: "#faq",
    new_html_function: "#new_html_function",
    new_html_function_v2: "#new_html_function_v2",
    new_html_function_v3: "#new_html_function_v3",
    casino_cta_buttons_outer: "#casino_cta_buttons_outer"
  };
  
  Object.keys(selectors).forEach(function (id) {
    if (map[id]) return; // Already in map
    
    // Try to find by ID first
    var byId = document.getElementById(id);
    if (byId) {
      map[id] = byId;
      if (!byId.getAttribute("data-section-id"))
        byId.setAttribute("data-section-id", id);
      return;
    }
    
    // Try to find by selector
    var el = document.querySelector(selectors[id]);
    if (el) {
      if (!el.id) el.id = id;
      if (!el.getAttribute("data-section-id"))
        el.setAttribute("data-section-id", id);
      map[id] = el;
    }
  });
  
  return map;
}

function moveSections(order) {
  var map = ensureSectionIdMap();
  if (!map || !order || !order.length) return;
  
  // Get nodes in order
  var nodes = order.map(function(o){ return map[o.id]; }).filter(Boolean);
  if (!nodes.length) return;
  
  // Find common parent
  var parent = nodes[0].parentNode;
  for (var i=1;i<nodes.length;i++){
    if (nodes[i].parentNode !== parent) { 
      parent = document.body; 
      break; 
    }
  }
  
  // Find earliest node
  var earliest = nodes[0];
  for (var j=1;j<nodes.length;j++){
    if (earliest.compareDocumentPosition(nodes[j]) & Node.DOCUMENT_POSITION_PRECEDING) {
      earliest = nodes[j];
    }
  }
  
  // Reorder sections
  var placeholder = document.createComment("section-order-anchor");
  try { parent.insertBefore(placeholder, earliest); } catch(e) {}

  for (var k=0;k<nodes.length;k++){
    var n = nodes[k];
    if (!n) continue;
    try { parent.insertBefore(n, placeholder); } catch(e) {}
  }
  
  try { parent.removeChild(placeholder); } catch(e) {}
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  var data = getPageData(); // Gets data from #json-data element
  var order = null;
  
  if (Array.isArray(data)) {
    order = normalizeOrder(data);
  } else if (data && (data.section_order || data.page_sections)) {
    order = normalizeOrder(data.section_order || data.page_sections);
  }
  
  if (!order || !order.length) return; // Keep default order
  moveSections(order);
});
```

## How It Works

**HTML Structure:** Make sure your sections have `data-section-id` attributes or matching IDs.

```handlebars
<!-- Hidden JSON data for section ordering -->
<div id="json-data" style="display:none;">{{{json section_order}}}</div>

<!-- Sections with data-section-id attribute -->
<section id="home_banner" data-section-id="home_banner">
  <!-- Home Banner Content -->
</section>

<section id="seo_content" data-section-id="seo_content">
  <!-- SEO Content -->
</section>

<section id="faq" data-section-id="faq">
  <!-- FAQ Section -->
</section>
```

The function works in two steps:

1. **Find sections with data-section-id:** Scans the DOM for all elements with the `data-section-id` attribute and adds them to the map. If an element has `data-section-id` but no `id`, it automatically sets the `id`.

2. **Find predefined sections:** Uses a predefined list of section IDs and selectors to find sections that might not have the `data-section-id` attribute yet. For each section, it:
   - First tries to find by ID using `getElementById`
   - If not found, tries to find using CSS selector
   - Ensures the element has both `id` and `data-section-id` attributes
   - Adds the element to the map

The `moveSections` function then uses this map to reorder sections according to the sequence specified in your JSON.

## JSON Structure

Configure `section_order` using objects that include both an `id` and `seq` value.

```json
{
  "section_order": [
    { "id": "home_banner", "seq": 1 },
    { "id": "faq", "seq": 2 },
    { "id": "seo_content", "seq": 3 }
  ]
}
```

> **TIP**  
> Make sure each entry has a unique `id` and an ascending `seq` value—the lower the number, the earlier the section appears.

## Section IDs

The following section IDs are recognized by the function:

- home_banner
- landing_banner_v1
- landing_banner_v2
- landing_banner_v3
- promotion_grid
- category_grid
- category_grid_each
- seo_content
- all_blog_posts
- faq
- new_html_function
- new_html_function_v2
- new_html_function_v3
- casino_cta_buttons_outer

> **NOTE**  
> Make sure your HTML sections have matching IDs or `data-section-id` attributes. The function will automatically add missing attributes, but it's best to include them in your template.

## Usage Examples

Example JSON showing a basic section order configuration.

```json
{
  "section_order": [
    { "id": "home_banner", "seq": 1 },
    { "id": "faq", "seq": 2 },
    { "id": "seo_content", "seq": 3 }
  ]
}
```

> **TIP**  
> To reorder sections, simply change the sequence numbers in your JSON. Sections will be automatically reordered on page load. You can also use simple string arrays if you don't need custom sequence numbers.






