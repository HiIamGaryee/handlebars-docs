import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function ContactSidebarPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "CSS Styles", href: "#css-styles" },
    { label: "Responsive CSS", href: "#responsive-css" },
    { label: "JSON Structure", href: "#json-structure" },
    { label: "Complete Example", href: "#complete-example" },
  ];

  const htmlTemplate = `<!-- Contact Sidebar -->
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
{{/if}}`;

  const cssStyles = `#contactSidenav #contactAbout {
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
}`;

  const responsiveCss = `@media (max-width: 768px) {
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
}`;

  const jsonExample = `{
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
}`;

  return (
    <Layout tableOfContents={tableOfContents} sidebarSubtitle="Templates">
      <div>
        <div className="main-header">
          <p className="eyebrow">Handlebars · Templates</p>
          <h1>Contact Sidebar</h1>
          <p className="lead">
            Documentation for the Contact Sidebar component (lines 4602-4624) in
            the all-blog.hbs template. This component creates a fixed sidebar that
            slides in on hover, displaying contact options with icons.
          </p>
        </div>

        <section className="content-section" id="overview">
          <h2>Overview</h2>
          <p>
            The Contact Sidebar is a fixed-position component that appears on the
            right side of the page. It slides in from the right when users hover
            over it, revealing contact options like WhatsApp, Telegram, Email, etc.
            The component uses pure CSS for animations - no JavaScript required.
          </p>
          <p>
            The sidebar consists of two main parts:
          </p>
          <ul style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
            <li>
              <strong>Left Content:</strong> A vertical label with icon showing
              "CONTACT US" text
            </li>
            <li>
              <strong>Right Box:</strong> A container with contact items (icons +
              names) that link to various contact methods
            </li>
          </ul>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              The sidebar only renders if <code>contact_sidebar.enabled</code> is
              set to <code>true</code> in your JSON. The component uses CSS hover
              effects for smooth slide-in animations.
            </p>
          </div>
        </section>

        <section className="content-section" id="html-structure">
          <h2>HTML Structure</h2>
          <p>
            The HTML template code for the Contact Sidebar component. This code
            should be placed in your Handlebars template where you want the contact
            sidebar to appear (typically near the end of the body, before closing
            tags).
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={htmlTemplate} language="handlebars" />
          </div>
          <p style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}>
            <strong>Key Features:</strong>
          </p>
          <ul style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
            <li>
              Conditional rendering with <code>&#123;&#123;#if contact_sidebar.enabled&#125;&#125;</code>
            </li>
            <li>
              Loop through contact items using <code>&#123;&#123;#each&#125;&#125;</code>
            </li>
            <li>
              First item gets <code>mb-3</code> class for margin-bottom
            </li>
            <li>
              All links open in new tab with <code>target="_blank" rel="noopener"</code>
            </li>
          </ul>
        </section>

        <section className="content-section" id="css-styles">
          <h2>CSS Styles</h2>
          <p>
            Complete CSS styles for the Contact Sidebar. These styles create a
            fixed sidebar that slides in from the right on hover, with a gradient
            background and smooth transitions.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={cssStyles} language="css" />
          </div>
          <p style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}>
            <strong>Key Features:</strong>
          </p>
          <ul style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
            <li>
              Fixed positioning with <code>right: -236px</code> (hidden by default)
            </li>
            <li>
              Slides to <code>right: 0</code> on hover
            </li>
            <li>
              Vertical text using <code>writing-mode: vertical-rl</code>
            </li>
            <li>
              Gradient background for left content
            </li>
            <li>
              Scale animation on contact item hover
            </li>
            <li>
              Smooth transitions (0.3s) for all animations
            </li>
          </ul>
        </section>

        <section className="content-section" id="responsive-css">
          <h2>Responsive CSS</h2>
          <p>
            Media queries for mobile devices. On screens smaller than 768px, the
            sidebar adjusts its size and positioning for better mobile experience.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={responsiveCss} language="css" />
          </div>
          <p style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}>
            <strong>Mobile Adjustments:</strong>
          </p>
          <ul style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
            <li>Reduced width (240px instead of 280px)</li>
            <li>Smaller heights for left and right boxes</li>
            <li>Smaller font sizes and icon sizes</li>
            <li>Adjusted bottom position (20% instead of 58%)</li>
          </ul>
        </section>

        <section className="content-section" id="json-structure">
          <h2>JSON Structure</h2>
          <p>
            The JSON structure required for the Contact Sidebar. Include this in
            your template JSON file.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={jsonExample} language="json" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              Each contact item requires: <code>name</code> (display text),{" "}
              <code>icon</code> (image URL), and <code>url</code> (link URL). You
              can add as many contact items as needed. The first item will
              automatically get extra margin-bottom spacing.
            </p>
          </div>
        </section>

        <section className="content-section" id="complete-example">
          <h2>Complete Example</h2>
          <p>
            A complete working example showing how all the pieces fit together.
            Copy this structure into your template and JSON files.
          </p>
          <div className="callout warning" style={{ marginTop: "24px" }}>
            <span className="callout-label">NOTE</span>
            <p>
              The Contact Sidebar uses pure CSS for animations - no JavaScript is
              required. The hover effect is achieved through CSS transitions. Make
              sure to replace all Handlebars variable placeholders (like{" "}
              <code>&#123;&#123;colors.contactSidenavText&#125;&#125;</code>) with
              actual values or ensure your template engine processes them correctly.
            </p>
          </div>
          <div className="callout tip" style={{ marginTop: "16px" }}>
            <span className="callout-label">TIP</span>
            <p>
              The sidebar position can be adjusted by changing the <code>bottom</code>{" "}
              and <code>right</code> CSS properties. The <code>z-index: 1000</code>{" "}
              ensures it appears above other content.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

