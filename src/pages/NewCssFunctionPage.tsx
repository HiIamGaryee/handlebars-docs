import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function NewCssFunctionPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "JavaScript", href: "#javascript" },
    { label: "JSON Structure", href: "#json-structure" },
    { label: "Usage Examples", href: "#usage-examples" },
  ];

  const htmlTemplate = `<!-- New CSS Function -->
<style id="user-extra-css">{{{new_css_function}}}</style>

<!-- Or using array format -->
<style id="user-extra-css">
  {{#each new_css_function}} {{{this}}}
  {{/each}}
</style>`;

  const javascriptCode = `<script>
  (function () {
    var css = {{#if new_css_function}}{{{json new_css_function}}}{{else}}""{{/if}};
    
    if (css) {
      var s = document.createElement("style");
      s.id = "user-extra-css";
      s.appendChild(document.createTextNode(css));
      document.head.appendChild(s);    
    }
  })();
</script>`;

  const jsonExample = `{
  "new_css_function": ".custom-class { color: #333; background: #f0f0f0; padding: 20px; }"
}`;

  const jsonArrayExample = `{
  "new_css_function": [
    ".custom-widget { max-width: 1200px; margin: 0 auto; }",
    ".custom-widget h2 { color: #d32f2f; font-size: 24px; }",
    ".custom-widget p { line-height: 1.6; color: #666; }"
  ]
}`;

  const usageExample = `<!-- Example 1: Single CSS string -->
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
}`;

  return (
    <Layout tableOfContents={tableOfContents} sidebarSubtitle="Components">
      <div>
        <div className="main-header">
          <p className="eyebrow">Handlebars · Components</p>
          <h1>New CSS Function</h1>
          <p className="lead">
            Documentation for the New CSS Function component. This component
            allows you to inject custom CSS styles into your template
            dynamically, either as a single string or an array of CSS rules.
          </p>
        </div>

        <section className="content-section" id="overview">
          <h2>Overview</h2>
          <p>
            The New CSS Function component provides a way to inject custom CSS
            styles into your Handlebars template. This is useful for:
          </p>
          <ul
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
          >
            <li>Adding custom styles for specific pages or sections</li>
            <li>Overriding default theme styles</li>
            <li>Adding responsive styles dynamically</li>
            <li>Including third-party widget styles</li>
          </ul>
          <p>
            The component supports both single CSS string and array of CSS
            strings formats.
          </p>
        </section>

        <section className="content-section" id="html-structure">
          <h2>HTML Structure</h2>
          <p>
            The HTML structure for the New CSS Function component. Can be used
            in two ways: single string or array format.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={htmlTemplate} language="handlebars" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              Use the array format when you have multiple CSS rules to inject.
              Each item in the array will be rendered as a separate CSS block.
            </p>
          </div>
        </section>

        <section className="content-section" id="javascript">
          <h2>JavaScript</h2>
          <p>
            JavaScript code that dynamically injects the CSS into the document
            head. This script runs on page load.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={javascriptCode} language="javascript" />
          </div>
        </section>

        <section className="content-section" id="json-structure">
          <h2>JSON Structure</h2>
          <p>
            The JSON structure for the New CSS Function component. Supports both
            single string and array formats.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={jsonExample} language="json" />
          </div>
          <p
            style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}
          >
            <strong>Array Format:</strong>
          </p>
          <div style={{ marginTop: "12px" }}>
            <CodeExample code={jsonArrayExample} language="json" />
          </div>
        </section>

        <section className="content-section" id="usage-examples">
          <h2>Usage Examples</h2>
          <p>Examples of different CSS content you can inject.</p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={usageExample} language="json" />
          </div>
          <div className="callout warning" style={{ marginTop: "24px" }}>
            <span className="callout-label">NOTE</span>
            <p>
              When using the array format, make sure each CSS string is complete
              and valid. The component will concatenate all array items
              together.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
