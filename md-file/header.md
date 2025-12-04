# Header Component

**Handlebars · Layout**

Documentation for the Header component. This component provides a sticky header with logo, navigation menu, login/register buttons, and a scrolling banner.

## Overview

The Header component is a comprehensive site header that includes:

- **Logo:** Site logo with link to homepage
- **Hamburger Menu:** Mobile menu button with optional custom icon
- **Navigation Bar:** Horizontal menu with optional icons
- **Login/Register Buttons:** Action buttons with optional images
- **Certificate Badge:** Optional certification image
- **Scrolling Banner:** Marquee text for announcements

## HTML Structure

The complete HTML structure for the Header component. Place this at the top of your page body.

```handlebars
<!-- Header -->
<header class="header">
  <div class="header__top">
    <!-- Left side: Logo + Hamburger -->
    <div class="header__top-left">
      <div class="logo_container">
        <a href="{{site_domain}}">
          <img src="{{logo_src}}" alt="{{logo_alt}}" />
        </a>
      </div>
      <div class="btn-hamburger-wrap">
        <button class="btn-hamburger" data-header-menu title="Additional menu">
          {{#if hamburger_icon}}
          <img src="{{hamburger_icon}}" alt="Menu" style="width: auto; height:40px;">
          {{else}}
          <i class="fa fa-bars"></i>
          {{/if}}
        </button>
      </div>
    </div>
    
    <!-- Right side: Login/Register Buttons + Cert -->
    <div class="header__top-right">
      {{#if accountPanel.login}}
      <a href="{{accountPanel.login.url}}" class="header-login-btn{{#if accountPanel.login.image}} has-image{{/if}}">
        {{#if accountPanel.login.image}}
        <img src="{{accountPanel.login.image}}" alt="{{accountPanel.login.text}}">
        {{else}}
        {{accountPanel.login.text}}
        {{/if}}
      </a>
      {{/if}}
      
      {{#if accountPanel.register}}
      <a href="{{accountPanel.register.url}}" class="header-register-btn{{#if accountPanel.register.image}} has-image{{/if}}">
        {{#if accountPanel.register.image}}
        <img src="{{accountPanel.register.image}}" alt="{{accountPanel.register.text}}">
        {{else}}
        {{accountPanel.register.text}}
        {{/if}}
      </a>
      {{/if}}
      
      {{#if certImg}}
      <a href="{{certUrl}}" target="_blank" class="header-cert">
        <img src="{{certImg}}" alt="Certificate" style="height: 40px; width: auto;">
      </a>
      {{/if}}
    </div>
  </div>

  <!-- Navigation Bar -->
  {{#if navlist}}
  <nav class="header__navbar">
    <div class="container">
      <ul class="navbar__list">
        {{#each navlist}}
        <li class="navbar__item">
          <a href="{{url}}" class="navbar__link">
            {{#if icon}}<img src="{{icon}}" alt="{{text}}" class="navbar__icon">{{/if}}
            <span>{{text}}</span>
          </a>
        </li>
        {{/each}}
      </ul>
    </div>
  </nav>
  {{/if}}

  <!-- Bottom Row: Scrolling Banner -->
  <div class="header__bottom">
    <marquee behavior="scroll" direction="left" scrollamount="6" style="padding: 0 12px; color: {{colors.textBannerColor}};">
      {{#if notices.enabled}}
        {{#each notices.items}}
          {{content}} {{#unless @last}} • {{/unless}}
        {{/each}}
      {{else}}
        {{#if headers.banner_text}}{{headers.banner_text}}{{else}}click SHARE, Commission is Cash on Hand!{{/if}}
      {{/if}}
    </marquee>
  </div>
</header>
```

## CSS Styles

Complete CSS styles for the Header component. These styles create a sticky header with responsive design.

```css
.header {
  background: {{colors.header_bg}};
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid {{colors.darkDivider}};
  position: relative;
}

.header__top-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo_container img {
  height: 40px;
  width: auto;
}

.btn-hamburger {
  background: none;
  border: none;
  color: {{colors.header_text}};
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  transition: color 0.3s ease;
}

.btn-hamburger:hover {
  color: {{colors.primaryactions}};
}

.header__top-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-login-btn,
.header-register-btn {
  padding: 8px 20px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.header-login-btn {
  background: linear-gradient(to right, {{colors.LoginBottonBgStart}}, {{colors.LoginBottonBgEnd}});
  color: {{colors.LoginBottonColor}};
  border: 2px solid {{colors.LoginBottonBorder}};
  border-radius: {{colors.LoginButtonRadius}};
}

.header-register-btn {
  background: {{colors.RegisterButtonBg}};
  color: {{colors.RegisterButtonColor}};
  border: 2px solid {{colors.RegisterButtonBorder}};
  border-radius: {{colors.RegisterButtonRadius}};
}

.header__navbar {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0;
  margin: 0 20px;
}

.navbar__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
}

.navbar__link {
  color: {{colors.header_text}};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
}

.navbar__link:hover {
  color: {{colors.primaryactions}};
}

.header__bottom {
  padding: 8px 0;
  border-top: 1px solid {{colors.darkDivider}};
}
```

## JSON Structure

The JSON structure required for the Header component. Include this in your template JSON file.

```json
{
  "logo_src": "https://api.abcdef.com/assets/manual_upload/logo.png",
  "logo_alt": "Your Logo",
  "hamburger_icon": "https://api.abcdef.com/assets/manual_upload/menu-icon.webp",
  "site_domain": "https://yourwebsite.com",
  "certImg": "https://api.abcdef.com/assets/manual_upload/certificate.png",
  "certUrl": "https://yourwebsite.com/certificate",
  "accountPanel": {
    "login": {
      "text": "LOGIN",
      "url": "https://yourwebsite.com/login",
      "image": ""
    },
    "register": {
      "text": "REGISTER",
      "url": "https://yourwebsite.com/register",
      "image": ""
    }
  },
  "navlist": [
    {
      "text": "Home",
      "url": "/",
      "icon": ""
    },
    {
      "text": "Games",
      "url": "/games",
      "icon": "https://api.abcdef.com/assets/manual_upload/games-icon.png"
    }
  ],
  "notices": {
    "enabled": true,
    "items": [
      {
        "content": "Welcome to our website!"
      }
    ]
  },
  "headers": {
    "banner_text": "Special promotion available now!"
  }
}
```

## Usage Examples

Examples of different header configurations.

> **TIP**  
> The header uses conditional rendering for all optional elements. If `navlist` is not provided, the navigation bar won't render. The same applies to login/register buttons and certificate badge.

