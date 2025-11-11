import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function FontFamilyLinkPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "JavaScript Function", href: "#javascript" },
    { label: "CSS Usage", href: "#css-usage" },
    { label: "JSON Structure", href: "#json-structure" },
    { label: "Usage Examples", href: "#usage-examples" },
  ];

  const htmlTemplate = `{{#if fontFamilyLink}}
<link href="{{fontFamilyLink}}&display=swap" rel="stylesheet">
{{else}}
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet">
{{/if}}

{{!-- V2 Font for FAQ Section --}}
{{#if fontFamilyLinkV2}}
<link href="{{fontFamilyLinkV2}}&display=swap" rel="stylesheet">
{{else}}
<link href="https://fonts.googleapis.com/css2?family=Gabarito&display=swap" rel="stylesheet">
{{/if}}`;

  const javascriptCode = `<script>
  function extractFontName(url, customFontName) {
    if (customFontName && customFontName !== 'undefined' && customFontName !== '') {
      return customFontName;
    }
    if (!url || url === 'undefined' || url === '') {
      return 'Nunito Sans Regular';
    }
    const match = url.match(/family=([^&:]+)/);
    if (match) {
      let fontName = decodeURIComponent(match[1].replace(/\\+/g, ' '));
      fontName = fontName.split(':')[0];
      return fontName.trim();
    }
    return 'Nunito Sans Regular';
  }

  // Main font (body, headings, etc.)
  const fontFamilyLink = '{{fontFamilyLink}}';
  const customFontFamily = '{{fontFamily}}';
  const fontFamily = extractFontName(fontFamilyLink, customFontFamily);

  // FAQ font (V2)
  const fontFamilyLinkV2 = '{{fontFamilyLinkV2}}';
  const customFontFamilyV2 = '{{fontFamilyV2}}';
  const fontFamilyV2 = fontFamilyLinkV2 && fontFamilyLinkV2 !== 'undefined' && fontFamilyLinkV2 !== ''
    ? extractFontName(fontFamilyLinkV2, customFontFamilyV2)
    : 'Gabarito';

  // Set main font
  document.documentElement.style.setProperty('--font-family', fontFamily);
  // Set FAQ font (V2)
  document.documentElement.style.setProperty('--font-family-v2', fontFamilyV2);

  document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.setProperty('--font-family', fontFamily);
    document.documentElement.style.setProperty('--font-family-v2', fontFamilyV2);
  });
</script>`;

  const cssUsage = `@font-face {
  font-family: '{{fontFamily}}';
  font-display: swap;
}

@font-face {
  font-family: '{{fontFamilyV2}}';
  font-display: swap;
}

:root {
  --font-family: {{#if fontFamily}}'{{fontFamily}}'{{else}}'Nunito Sans Regular'{{/if}};
  --font-family-v2: {{#if fontFamilyV2}}'{{fontFamilyV2}}'{{else}}'Gabarito'{{/if}};
}

body {
  font-family: var(--font-family);
}

.faq-section {
  font-family: var(--font-family-v2);
}`;

  const jsonExample = `{
  "fontFamilyLink": "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
  "fontFamily": "Bebas Neue",
  "fontFamilyLinkV2": "https://fonts.googleapis.com/css2?family=Lora&display=swap",
  "fontFamilyV2": "Lora, serif"
}`;

  const usageExample = `<!-- Example 1: Using Google Fonts URL -->
{
  "fontFamilyLink": "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
  "fontFamily": "Roboto"
}

<!-- Example 2: Using custom font name -->
{
  "fontFamilyLink": "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
  "fontFamily": "Open Sans"
}

<!-- Example 3: With V2 font for FAQ sections -->
{
  "fontFamilyLink": "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
  "fontFamily": "Bebas Neue",
  "fontFamilyLinkV2": "https://fonts.googleapis.com/css2?family=Lora&display=swap",
  "fontFamilyV2": "Lora, serif"
}`;

  return (
    <Layout tableOfContents={tableOfContents} sidebarSubtitle="Components">
      <div>
        <div className="main-header">
          <p className="eyebrow">Handlebars · Components</p>
          <h1>Font Family Link</h1>
          <p className="lead">
            Documentation for the FontFamilyLink component. This component
            allows you to define and use custom Google Fonts or web fonts in
            your Handlebars templates with automatic font name extraction and
            CSS variable setup.
          </p>
        </div>

        <section className="content-section" id="overview">
          <h2>Overview</h2>
          <p>
            The FontFamilyLink component provides a flexible way to load and use
            custom fonts in your Handlebars templates. It supports two font
            families:
          </p>
          <ul
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
          >
            <li>
              <strong>Main Font (fontFamilyLink):</strong> Used for body text,
              headings, and general content
            </li>
            <li>
              <strong>V2 Font (fontFamilyLinkV2):</strong> Used for specific
              sections like FAQ sections
            </li>
          </ul>
          <p>
            The component automatically extracts the font name from the Google
            Fonts URL and sets CSS variables for use throughout your stylesheet.
          </p>
        </section>

        <section className="content-section" id="html-structure">
          <h2>HTML Structure</h2>
          <p>
            The HTML structure for loading fonts. Place this in the{" "}
            <code>&lt;head&gt;</code> section of your template.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={htmlTemplate} language="handlebars" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              The component uses conditional rendering. If{" "}
              <code>fontFamilyLink</code> is not provided, it falls back to
              "Nunito Sans" as the default font. The <code>&display=swap</code>{" "}
              parameter ensures text remains visible during font load.
            </p>
          </div>
        </section>

        <section className="content-section" id="javascript">
          <h2>JavaScript Function</h2>
          <p>
            The JavaScript function that extracts font names from URLs and sets
            CSS variables. This script should be placed in the{" "}
            <code>&lt;head&gt;</code> section before your CSS.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={javascriptCode} language="javascript" />
          </div>
          <p
            style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}
          >
            <strong>How it works:</strong>
          </p>
          <ul
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
          >
            <li>Extracts font name from Google Fonts URL using regex</li>
            <li>Falls back to custom font name if provided in JSON</li>
            <li>
              Sets CSS custom properties (--font-family, --font-family-v2) for
              use in stylesheets
            </li>
            <li>
              Handles URL decoding and formatting (e.g., "Bebas+Neue" becomes
              "Bebas Neue")
            </li>
          </ul>
        </section>

        <section className="content-section" id="css-usage">
          <h2>CSS Usage</h2>
          <p>
            How to use the font families in your CSS. The fonts are available as
            CSS variables and can be used throughout your stylesheet.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={cssUsage} language="css" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              Use <code>var(--font-family)</code> for main content and{" "}
              <code>var(--font-family-v2)</code> for FAQ sections or other
              specific areas. The CSS variables are set automatically by the
              JavaScript function.
            </p>
          </div>
        </section>

        <section className="content-section" id="json-structure">
          <h2>JSON Structure</h2>
          <p>
            The JSON structure required for the FontFamilyLink component.
            Include this in your template JSON file.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={jsonExample} language="json" />
          </div>
        </section>

        <section className="content-section" id="usage-examples">
          <h2>Usage Examples</h2>
          <p>Examples of how to configure different fonts in your JSON file.</p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={usageExample} language="json" />
          </div>
          <div className="callout warning" style={{ marginTop: "24px" }}>
            <span className="callout-label">NOTE</span>
            <p>
              When using Google Fonts, make sure the URL includes{" "}
              <code>&display=swap</code> for better performance. The font name
              will be automatically extracted from the URL, but you can also
              provide a custom name in the <code>fontFamily</code> field.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
