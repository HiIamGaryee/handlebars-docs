import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function NewHtmlFunctionPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "JavaScript", href: "#javascript" },
    { label: "JSON Structure", href: "#json-structure" },
    { label: "SEO Content", href: "#seo-content" },
    { label: "Usage Examples", href: "#usage-examples" },
  ];

  const htmlTemplate = `<!-- New HTML Function -->
<div id="user-extra-html" class="user-extra-html">{{{new_html_function}}}</div>`;

  const javascriptCode = `<script>
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
</script>`;

  const jsonExample = `{
  "new_html_function": "<div class='custom-section'><h2>Custom Content</h2><p>This is custom HTML content.</p></div>"
}`;

  const seoContentNote = `<!-- SEO Content (Same as new_html_function) -->
<section class="seo-content" id="seo_content" data-section-id="seo_content">
  <div class="container">
    <div class="info">
      {{{seo_content}}}
    </div>
  </div>
</section>`;

  const usageExample = `<!-- Example 1: Simple HTML -->
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
}`;

  return (
    <Layout tableOfContents={tableOfContents} sidebarSubtitle="Components">
      <div>
        <div className="main-header">
          <p className="eyebrow">Handlebars · Components</p>
          <h1>New HTML Function</h1>
          <p className="lead">
            Documentation for the New HTML Function component. This component
            allows you to inject custom HTML content into your template
            dynamically. Note that <code>seo_content</code> works the same way
            as <code>new_html_function</code>.
          </p>
        </div>

        <section className="content-section" id="overview">
          <h2>Overview</h2>
          <p>
            The New HTML Function component provides a way to inject custom HTML
            content into your Handlebars template. This is useful for:
          </p>
          <ul
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
          >
            <li>Adding custom sections or widgets</li>
            <li>Injecting promotional banners or announcements</li>
            <li>Adding dynamic content that changes frequently</li>
            <li>Including third-party widgets or embeds</li>
          </ul>
          <div className="callout warning" style={{ marginTop: "24px" }}>
            <span className="callout-label">NOTE</span>
            <p>
              The <code>seo_content</code> field works exactly the same way as{" "}
              <code>new_html_function</code>. Both use triple braces{" "}
              <code>&#123;&#123;&#123;&#125;&#125;&#125;</code> to render raw
              HTML without escaping. Use <code>seo_content</code> for
              SEO-optimized content sections.
            </p>
          </div>
        </section>

        <section className="content-section" id="html-structure">
          <h2>HTML Structure</h2>
          <p>
            The HTML structure for the New HTML Function component. The content
            is inserted before the footer by default.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={htmlTemplate} language="handlebars" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              The component uses triple braces{" "}
              <code>&#123;&#123;&#123;&#125;&#125;&#125;</code> to render raw
              HTML without escaping. This allows you to include HTML tags,
              scripts, and other markup directly.
            </p>
          </div>
        </section>

        <section className="content-section" id="javascript">
          <h2>JavaScript</h2>
          <p>
            JavaScript code that dynamically inserts the HTML content. This
            script runs on page load and inserts the content before the footer.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={javascriptCode} language="javascript" />
          </div>
        </section>

        <section className="content-section" id="json-structure">
          <h2>JSON Structure</h2>
          <p>
            The JSON structure for the New HTML Function component. The HTML
            content should be provided as a string.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={jsonExample} language="json" />
          </div>
        </section>

        <section className="content-section" id="seo-content">
          <h2>SEO Content</h2>
          <p>
            The <code>seo_content</code> field works exactly the same way as{" "}
            <code>new_html_function</code>. It's typically used for
            SEO-optimized content sections.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={seoContentNote} language="handlebars" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              Use <code>seo_content</code> for main content sections that need
              SEO optimization. Use <code>new_html_function</code> for custom
              widgets, banners, or supplementary content.
            </p>
          </div>
        </section>

        <section className="content-section" id="usage-examples">
          <h2>Usage Examples</h2>
          <p>Examples of different HTML content you can inject.</p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={usageExample} language="json" />
          </div>
        </section>
      </div>
    </Layout>
  );
}
