# Contact Sidebar

**Handlebars · Templates**

Documentation for the Contact Sidebar component (lines 4602-4624) in the all-blog.hbs template. This component creates a fixed sidebar that slides in on hover, displaying contact options with icons.

## Overview

The Contact Sidebar is a fixed-position component that appears on the right side of the page. It slides in from the right when users hover over it, revealing contact options like WhatsApp, Telegram, Email, etc. The component uses pure CSS for animations - no JavaScript required.

The sidebar consists of two main parts:

- **Left Content:** A vertical label with icon showing "CONTACT US" text
- **Right Box:** A container with contact items (icons + names) that link to various contact methods

> **TIP**  
> The sidebar only renders if `contact_sidebar.enabled` is set to `true` in your JSON. The component uses CSS hover effects for smooth slide-in animations.

## HTML Structure

The HTML template code for the Contact Sidebar component. This code should be placed in your Handlebars template where you want the contact sidebar to appear (typically near the end of the body, before closing tags).

```handlebars
<!-- Contact Sidebar -->
{{#if contact_sidebar.enabled}}
<div id="contactSidenav" class="contact-sidenav">
  <div id="contactAbout">
    <div class="contact-box">
      <div id="contactLeftContent">
        <img src="{{contact_sidebar.icon}}" alt="{{contact_sidebar.title}}" width="30" height="30" class="contact-icon">
        {{contact_sidebar.title}}
      </div>
      <div id="contactRightBox">
        {{#each contact_sidebar.items}}
        <a href="{{url}}" target="_blank" rel="noopener">
          <div class="contact-item {{#if @first}}mb-3{{/if}}">
            <img src="{{icon}}" alt="{{name}}" width="45" height="45" class="contact-item-icon">
            <span>{{name}}</span>
          </div>
        </a>
        {{/each}}
      </div>
    </div>  
  </div>
</div>
{{/if}}
```

**Key Features:**
- Conditional rendering with `{{#if contact_sidebar.enabled}}`
- Loop through contact items using `{{#each}}`
- First item gets `mb-3` class for margin-bottom
- All links open in new tab with `target="_blank" rel="noopener"`

## CSS Styles

Complete CSS styles for the Contact Sidebar. These styles create a fixed sidebar that slides in from the right on hover, with a gradient background and smooth transitions.

```css
#contactSidenav #contactAbout {
  position: fixed;
  right: -236px;
  transition: 0.3s;
  padding: 0;
  text-decoration: none;
  font-size: 20px;
  color: {{colors.contactSidenavText}};
  bottom: 58%;
  z-index: 1000;
}

#contactSidenav #contactAbout:hover {
  right: 0;
}

#contactSidenav #contactAbout .contact-box {
  width: 280px;
  display: flex;
}

#contactLeftContent {
  height: 200px;
  writing-mode: vertical-rl;
  background: linear-gradient(1deg, {{colors.primaryactionssec}} 0%, {{colors.footerTitleColor}} 80%, {{colors.footerTitleColor}} 90%, #FFBD87 100%);
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  font-size: 1rem;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: {{colors.textLight}};
  font-weight: bold;
}

#contactLeftContent .contact-icon {
  margin-bottom: 10px;
}

#contactRightBox {
  width: 100%;
  height: 230px;
  background-color: {{colors.contactRightBox}};
  padding: 30px 10px;
}

#contactRightBox a {
  text-decoration: none;
}

.contact-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: scale(1.05);
}

.contact-item.mb-3 {
  margin-bottom: 1rem;
}

.contact-item span {
  color: {{colors.footerTitleColor}};
  font-size: 1rem;
  margin-left: 15px;
  font-weight: bold;
}

.contact-item-icon {
  width: 45px;
  height: 45px;
  object-fit: contain;
}
```

**Key Features:**
- Fixed positioning with `right: -236px` (hidden by default)
- Slides to `right: 0` on hover
- Vertical text using `writing-mode: vertical-rl`
- Gradient background for left content
- Scale animation on contact item hover
- Smooth transitions (0.3s) for all animations

## Responsive CSS

Media queries for mobile devices. On screens smaller than 768px, the sidebar adjusts its size and positioning for better mobile experience.

```css
@media (max-width: 768px) {
  #contactSidenav #contactAbout {
    bottom: 20%;
  }

  #contactSidenav #contactAbout .contact-box {
    width: 240px;
  }

  #contactLeftContent {
    height: 160px;
    font-size: 0.9rem;
    padding: 5px;
  }

  #contactRightBox {
    height: 180px;
    padding: 20px 8px;
  }

  .contact-item span {
    font-size: 0.85rem;
    margin-left: 10px;
  }

  .contact-item-icon {
    width: 38px;
    height: 38px;
  }
}
```

**Mobile Adjustments:**
- Reduced width (240px instead of 280px)
- Smaller heights for left and right boxes
- Smaller font sizes and icon sizes
- Adjusted bottom position (20% instead of 58%)

## JSON Structure

The JSON structure required for the Contact Sidebar. Include this in your template JSON file.

```json
{
  "contact_sidebar": {
    "enabled": true,
    "title": "CONTACT US",
    "icon": "https://example.com/contact-icon.png",
    "items": [
      {
        "name": "Whatsapp",
        "icon": "https://example.com/whatsapp-icon.webp",
        "url": "https://wa.me/1234567890"
      },
      {
        "name": "Telegram",
        "icon": "https://example.com/telegram-icon.webp",
        "url": "https://t.me/yourusername"
      },
      {
        "name": "Email",
        "icon": "https://example.com/email-icon.webp",
        "url": "mailto:contact@example.com"
      }
    ]
  }
}
```

> **TIP**  
> Each contact item requires: `name` (display text), `icon` (image URL), and `url` (link URL). You can add as many contact items as needed. The first item will automatically get extra margin-bottom spacing.

## Complete Example

A complete working example showing how all the pieces fit together. Copy this structure into your template and JSON files.

> **NOTE**  
> The Contact Sidebar uses pure CSS for animations - no JavaScript is required. The hover effect is achieved through CSS transitions. Make sure to replace all Handlebars variable placeholders (like `{{colors.contactSidenavText}}`) with actual values or ensure your template engine processes them correctly.

> **TIP**  
> The sidebar position can be adjusted by changing the `bottom` and `right` CSS properties. The `z-index: 1000` ensures it appears above other content.

