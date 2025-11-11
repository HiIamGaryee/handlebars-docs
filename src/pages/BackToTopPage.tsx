import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function BackToTopPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "CSS Styles", href: "#css-styles" },
    { label: "JavaScript", href: "#javascript" },
    { label: "Responsive CSS", href: "#responsive-css" },
    { label: "JSON Structure", href: "#json-structure" },
    { label: "Complete Example", href: "#complete-example" },
  ];

  const htmlTemplate = `<!-- Back to Top Button -->
{{#if back_to_top.enabled}}
<button id="backToTopBtn" class="back-to-top-btn" style="display: none;">
  <img src="{{back_to_top.icon}}" alt="Back to Top" class="back-to-top-icon">
</button>
{{/if}}`;

  const cssStyles = `.back-to-top-btn {
  position: fixed;
  bottom: 90px;
  right: 20px;
  z-index: 999;
  border: none;
  background: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease, opacity 0.3s ease;
  padding: 8px;
  opacity: 0;
}

.back-to-top-btn:hover {
  background: {{colors.primaryactions}};
  transform: translateY(-5px);
}

.back-to-top-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}`;

  const javascriptCode = `// Back to Top Button Functionality
(function() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;
  
  const scrollThreshold = {{back_to_top.scroll_threshold}} || 50;
  
  function checkScroll() {
    if (window.pageYOffset > scrollThreshold) {
      backToTopBtn.style.display = 'block';
      setTimeout(() => {
        backToTopBtn.style.opacity = '1';
      }, 10);
    } else {
      backToTopBtn.style.opacity = '0';
      setTimeout(() => {
        backToTopBtn.style.display = 'none';
      }, 300);
    }
  }
  
  // Initial check
  checkScroll();
  
  // Check on scroll
  window.addEventListener('scroll', checkScroll, { passive: true });
  
  // Scroll to top on click
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();`;

  const responsiveCss = `@media (max-width: 768px) {
  .back-to-top-btn {
    bottom: 85px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
}`;

  const jsonExample = `{
  "back_to_top": {
    "enabled": true,
    "icon": "https://example.com/back-to-top-icon.png",
    "scroll_threshold": 50
  }
}`;

  return (
    <Layout tableOfContents={tableOfContents} sidebarSubtitle="Components">
      <div>
        <div className="main-header">
          <p className="eyebrow">Handlebars · Components</p>
          <h1>Back to Top Button</h1>
          <p className="lead">
            Documentation for the Back to Top Button component (lines 4595-4600)
            in the all-blog.hbs template. This component provides a smooth scroll-to-top
            functionality that appears when users scroll down the page.
          </p>
        </div>

        <section className="content-section" id="overview">
          <h2>Overview</h2>
          <p>
            The Back to Top Button is a fixed-position button that appears in the
            bottom-right corner of the page when users scroll down. It provides a
            quick way to return to the top of the page with a smooth scrolling
            animation.
          </p>
          <p>
            The button features:
          </p>
          <ul style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
            <li>
              <strong>Auto-show/hide:</strong> Appears when scrolling past a
              threshold, hides when near the top
            </li>
            <li>
              <strong>Smooth animations:</strong> Fade in/out with opacity
              transitions
            </li>
            <li>
              <strong>Hover effects:</strong> Background color change and lift
              animation
            </li>
            <li>
              <strong>Smooth scroll:</strong> Uses native smooth scroll behavior
              when clicked
            </li>
          </ul>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              The button only renders if <code>back_to_top.enabled</code> is set
              to <code>true</code> in your JSON. The scroll threshold can be
              customized to control when the button appears.
            </p>
          </div>
        </section>

        <section className="content-section" id="html-structure">
          <h2>HTML Structure</h2>
          <p>
            The HTML template code for the Back to Top Button. This code should be
            placed in your Handlebars template, typically near the end of the body
            before closing tags.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={htmlTemplate} language="handlebars" />
          </div>
          <p style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}>
            <strong>Key Features:</strong>
          </p>
          <ul style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
            <li>
              Conditional rendering with <code>&#123;&#123;#if back_to_top.enabled&#125;&#125;</code>
            </li>
            <li>
              Initially hidden with <code>style="display: none;"</code>
            </li>
            <li>
              Uses an image icon from JSON configuration
            </li>
            <li>
              Requires JavaScript to show/hide based on scroll position
            </li>
          </ul>
        </section>

        <section className="content-section" id="css-styles">
          <h2>CSS Styles</h2>
          <p>
            Complete CSS styles for the Back to Top Button. These styles create a
            fixed circular button with smooth transitions and hover effects.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={cssStyles} language="css" />
          </div>
          <p style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}>
            <strong>Key Features:</strong>
          </p>
          <ul style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
            <li>
              Fixed positioning in bottom-right corner
            </li>
            <li>
              Circular shape with <code>border-radius: 50%</code>
            </li>
            <li>
              Initially transparent with <code>opacity: 0</code>
            </li>
            <li>
              Smooth transitions for all state changes
            </li>
            <li>
              Hover effect with background color and lift animation
            </li>
            <li>
              High z-index (999) to appear above other content
            </li>
          </ul>
        </section>

        <section className="content-section" id="javascript">
          <h2>JavaScript</h2>
          <p>
            The JavaScript code that handles the Back to Top Button functionality.
            This script monitors scroll position and shows/hides the button
            accordingly, then handles the smooth scroll-to-top action.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={javascriptCode} language="javascript" />
          </div>
          <p style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}>
            <strong>How it works:</strong>
          </p>
          <ul style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
            <li>
              <strong>Scroll Detection:</strong> Listens to window scroll events
              and checks if scroll position exceeds the threshold
            </li>
            <li>
              <strong>Show/Hide Logic:</strong> Shows button with fade-in when
              scrolled down, hides with fade-out when near top
            </li>
            <li>
              <strong>Click Handler:</strong> Smoothly scrolls to top using{" "}
              <code>window.scrollTo()</code> with <code>behavior: 'smooth'</code>
            </li>
            <li>
              <strong>Performance:</strong> Uses <code>passive: true</code> for
              scroll listener to improve performance
            </li>
          </ul>
        </section>

        <section className="content-section" id="responsive-css">
          <h2>Responsive CSS</h2>
          <p>
            Media queries for mobile devices. On screens smaller than 768px, the
            button size and position are adjusted for better mobile experience.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={responsiveCss} language="css" />
          </div>
        </section>

        <section className="content-section" id="json-structure">
          <h2>JSON Structure</h2>
          <p>
            The JSON structure required for the Back to Top Button. Include this in
            your template JSON file.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={jsonExample} language="json" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              The <code>scroll_threshold</code> value determines how many pixels the
              user must scroll before the button appears. A value of 50 means the
              button will show after scrolling 50px down the page. Adjust this
              value based on your design needs.
            </p>
          </div>
        </section>

        <section className="content-section" id="complete-example">
          <h2>Complete Example</h2>
          <p>
            A complete working example showing how all the pieces fit together.
            Copy this structure into your template, CSS, JavaScript, and JSON files.
          </p>
          <div className="callout warning" style={{ marginTop: "24px" }}>
            <span className="callout-label">NOTE</span>
            <p>
              Make sure to include the JavaScript code in your template, typically
              in a <code>&lt;script&gt;</code> tag before the closing{" "}
              <code>&lt;/body&gt;</code> tag. The button requires JavaScript to
              function properly.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

