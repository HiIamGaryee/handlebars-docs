import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function CasinoCtaButtonsPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "CSS Styles", href: "#css-styles" },
    { label: "Responsive CSS", href: "#responsive-css" },
    { label: "JSON Structure", href: "#json-structure" },
  ];

  const htmlTemplate = `{{#if homeBanner.enabled}}
<section class="casino-cta-buttons" id="casino_cta_buttons_outer" data-section-id="casino_cta_buttons_outer">
  <a href="{{sidenav.register_btn.url}}" style="text-decoration:none;flex:1;">
    <button class="casino-signup-btn"
      style="{{#if cta_buttons.signup.bg_img}}
        background-image:url('{{cta_buttons.signup.bg_img}}');
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        background-color:transparent;
      {{else}}
        background:{{cta_buttons.signup.bg_color}};
      {{/if}}
      color:{{cta_buttons.signup.text_color}};
      border:0;
      padding:15px 40px;
      border-radius:{{cta_buttons.signup.border_radius}};
      font-size:16px;
      font-weight:600;
      cursor:pointer;
      box-shadow:0 16px 32px rgba(44,128,245,0.25);
      width:100%;
      min-height:50px;
      position:relative;
      z-index:1;">
      {{cta_buttons.signup.text}}
    </button>
  </a>
  <a href="{{sidenav.login_link.url}}" style="text-decoration:none;flex:1;">
    <button class="casino-login-btn"
      style="{{#if cta_buttons.login.bg_img}}
        background-image:url('{{cta_buttons.login.bg_img}}');
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        background-color:transparent;
      {{else}}
        background:{{cta_buttons.login.bg_color}};
      {{/if}}
      color:{{cta_buttons.login.text_color}};
      border:1px solid {{cta_buttons.login.border_color}};
      padding:15px 40px;
      border-radius:{{cta_buttons.login.border_radius}};
      font-size:16px;
      font-weight:600;
      cursor:pointer;
      box-shadow:0 12px 24px rgba(15,31,61,0.15);
      width:100%;
      min-height:50px;
      text-shadow:0 2px 4px rgba(0,0,0,0.5);
      position:relative;
      z-index:1;">
      {{cta_buttons.login.text}}
    </button>
  </a>
</section>
{{/if}}`;

  const cssStyles = `.casino-cta-buttons-outer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.casino-cta-buttons {
  display: flex; 
  justify-content: center;
  gap: 15px;
  padding: 0 20px;
  max-width: 600px;
  width: 100%;
  transition: all 0.3s ease;
}

.casino-signup-btn,
.casino-login-btn {
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
}

.casino-signup-btn::before,
.casino-login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.casino-signup-btn:hover::before,
.casino-signup-btn:focus::before {
  opacity: 0.45;
  background: {{cta_buttons.signup.bg_color}};
}

.casino-login-btn:hover::before,
.casino-login-btn:focus::before {
  opacity: 0.3;
  background: {{cta_buttons.login.bg_color}};
}`;

  const responsiveCss = `@media (max-width: 992px) {
  .casino-cta-buttons {
    display: flex !important;
  }
}`;

  const jsonExample = `{
  "cta_buttons": {
    "signup": {
      "text": "Sign Up",
      "bg_color": "#f88400",
      "text_color": "#ffffff",
      "border_radius": "8px",
      "bg_img": "" // Optional: URL to background image
    },
    "login": {
      "text": "Login",
      "bg_color": "#ffffff",
      "text_color": "#f88400",
      "border_color": "#f88400",
      "border_radius": "8px",
      "bg_img": "" // Optional: URL to background image
    }
  },
  "sidenav": {
    "register_btn": {
      "url": "https://example.com/register"
    },
    "login_link": {
      "url": "https://example.com/login"
    }
  }
}`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <h1>Casino CTA Buttons Outer</h1>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          The <code>casino_cta_buttons_outer</code> component displays two
          call-to-action buttons: a Sign Up button and a Login button. These
          buttons are typically placed below the home banner and provide quick
          access to registration and login functionality.
        </p>
        <p>
          The component supports both background colors and background images
          for each button, with customizable text, colors, borders, and border
          radius. The buttons are responsive and include hover effects.
        </p>
      </section>

      <section id="html-structure">
        <h2>HTML Structure</h2>
        <p>
          The component consists of a section wrapper containing two anchor
          links, each wrapping a button element. The buttons are styled inline
          using Handlebars conditionals to support both background images and
          colors.
        </p>
        <CodeExample code={htmlTemplate} language="handlebars" />
      </section>

      <section id="css-styles">
        <h2>CSS Styles</h2>
        <p>
          The CSS provides flexbox layout for centering the buttons, hover
          effects using pseudo-elements, and smooth transitions. The buttons are
          contained within a max-width container for optimal display on larger
          screens.
        </p>
        <CodeExample code={cssStyles} language="css" />
      </section>

      <section id="responsive-css">
        <h2>Responsive CSS</h2>
        <p>
          On mobile devices (max-width: 992px), the buttons maintain their flex
          layout to ensure they remain visible and accessible.
        </p>
        <CodeExample code={responsiveCss} language="css" />
      </section>

      <section id="json-structure">
        <h2>JSON Structure</h2>
        <p>
          The component requires configuration in the JSON data file. The{" "}
          <code>cta_buttons</code> object contains styling and text for both
          buttons, while <code>sidenav</code> provides the URLs for navigation.
        </p>
        <CodeExample code={jsonExample} language="json" />
        <p>
          <strong>Note:</strong> The <code>bg_img</code> property is optional.
          If provided, it will override the <code>bg_color</code> setting. If
          not provided or empty, the button will use the background color
          instead.
        </p>
      </section>
    </Layout>
  );
}
