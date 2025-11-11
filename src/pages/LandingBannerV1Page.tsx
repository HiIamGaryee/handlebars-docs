import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function LandingBannerV1Page() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "CSS Styles", href: "#css-styles" },
    { label: "Version Variants", href: "#version-variants" },
    { label: "JSON Structure", href: "#json-structure" },
  ];

  const htmlTemplateV1 = `{{#if landing_banner.enabled}}
{{#if landing_banner.items}}
<section class="landing-banner-parents has-items" id="landing_banner_v1" data-section-id="landing_banner_v1">
  <div class="container landing-banner">
    {{#each landing_banner.items}}
    <a href="{{url}}" {{#if new_tab}}target="_blank" rel="noopener"{{/if}} class="landing-banner__link" aria-label="{{alt}}">
      <img src="{{img}}" alt="{{alt}}" class="landing-banner__img"/>
    </a>
    {{/each}}
  </div>
</section>
{{/if}}
{{/if}}`;

  const htmlTemplateV2 = `{{#if landing_banner_v2.enabled}}
{{#if landing_banner_v2.items}}
<section class="landing-banner-parents" id="landing_banner_v2" data-section-id="landing_banner_v2">
  <div class="container landing-banner">
    {{#each landing_banner_v2.items}}
    <a href="{{url}}" {{#if new_tab}}target="_blank" rel="noopener"{{/if}} class="landing-banner__link" aria-label="{{alt}}">
      <img src="{{img}}" alt="{{alt}}" class="landing-banner__img"/>
    </a>
    {{/each}}
  </div>
</section>
{{/if}}
{{/if}}`;

  const cssStyles = `.landing-banner {
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.landing-banner__link {
  display: inline-block;
  line-height: 0;
  margin: 12px 0 0 0;
}

.landing-banner__img {
  width: 100%;
  max-width: 800px;
  max-height: 400px;
  object-fit: contain;
  border-radius: {{style.borderRadiusCard}};
  display: block;
}

.landing-banner-parents.has-items {
  padding-bottom: 20px;
}`;

  const jsonExampleV1 = `{
  "landing_banner": {
    "enabled": true,
    "items": [
      {
        "img": "https://example.com/banner1.jpg",
        "url": "/promo-page",
        "alt": "Promo Banner 1",
        "new_tab": false
      },
      {
        "img": "https://example.com/banner2.jpg",
        "url": "https://external-site.com",
        "alt": "Promo Banner 2",
        "new_tab": true
      }
    ]
  }
}`;

  const jsonExampleV2 = `{
  "landing_banner_v2": {
    "enabled": true,
    "items": [
      {
        "img": "https://example.com/banner-v2.jpg",
        "url": "/special-offer",
        "alt": "Special Offer",
        "new_tab": false
      }
    ]
  }
}`;

  const jsonExampleV3 = `{
  "landing_banner_v3": {
    "enabled": true,
    "items": [
      {
        "img": "https://example.com/banner-v3.jpg",
        "url": "/featured-deal",
        "alt": "Featured Deal",
        "new_tab": false
      }
    ]
  }
}`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <h1>Landing Banner V1</h1>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          The <code>landing_banner</code> component (also available as{" "}
          <code>landing_banner_v1</code>, <code>landing_banner_v2</code>,{" "}
          <code>landing_banner_v3</code>, etc.) displays promotional banner
          images in a vertical stack. Each banner can be clickable and link to a
          specific URL.
        </p>
        <p>
          This component is ideal for displaying promotional content,
          advertisements, or featured offers. Multiple versions (v1, v2, v3,
          etc.) can be used on the same page to display different sets of
          banners in different sections.
        </p>
      </section>

      <section id="html-structure">
        <h2>HTML Structure</h2>
        <p>
          The component consists of a section wrapper with a container div. Each
          banner item is wrapped in an anchor tag (if a URL is provided) and
          displays an image. The structure is simple and semantic, making it
          easy to customize.
        </p>
        <p>
          <strong>Version 1 (landing_banner):</strong>
        </p>
        <CodeExample code={htmlTemplateV1} language="handlebars" />
        <p>
          <strong>Version 2 (landing_banner_v2):</strong>
        </p>
        <CodeExample code={htmlTemplateV2} language="handlebars" />
        <p>
          <strong>Note:</strong> The same pattern applies to v3, v4, and any
          future versions. Simply replace <code>landing_banner_v2</code> with{" "}
          <code>landing_banner_v3</code>, <code>landing_banner_v4</code>, etc.
        </p>
      </section>

      <section id="css-styles">
        <h2>CSS Styles</h2>
        <p>
          The CSS provides a centered, vertical layout for the banners. Images
          are constrained to a maximum width and height while maintaining their
          aspect ratio. The <code>has-items</code> class adds bottom padding
          when items are present.
        </p>
        <CodeExample code={cssStyles} language="css" />
      </section>

      <section id="version-variants">
        <h2>Version Variants</h2>
        <p>
          You can use multiple versions of the landing banner on the same page:
        </p>
        <ul>
          <li>
            <strong>landing_banner</strong> or{" "}
            <strong>landing_banner_v1</strong>: First banner section
          </li>
          <li>
            <strong>landing_banner_v2</strong>: Second banner section
          </li>
          <li>
            <strong>landing_banner_v3</strong>: Third banner section
          </li>
          <li>
            <strong>landing_banner_v4</strong>,{" "}
            <strong>landing_banner_v5</strong>, etc.: Additional banner sections
          </li>
        </ul>
        <p>
          Each version is independent and can have its own set of items. This
          allows you to place different promotional banners in different
          sections of your page.
        </p>
        <p>
          <strong>Important:</strong> Make sure to update the{" "}
          <code>ensureSectionIdMap()</code> function in your JavaScript to
          include any new version IDs (e.g., <code>landing_banner_v4</code>,{" "}
          <code>landing_banner_v5</code>) if you create additional versions.
        </p>
      </section>

      <section id="json-structure">
        <h2>JSON Structure</h2>
        <p>
          Each version requires its own configuration object in the JSON file.
          The structure is identical for all versions:
        </p>
        <p>
          <strong>Version 1:</strong>
        </p>
        <CodeExample code={jsonExampleV1} language="json" />
        <p>
          <strong>Version 2:</strong>
        </p>
        <CodeExample code={jsonExampleV2} language="json" />
        <p>
          <strong>Version 3:</strong>
        </p>
        <CodeExample code={jsonExampleV3} language="json" />
        <p>
          <strong>Note:</strong> The <code>new_tab</code> property determines
          whether the link opens in a new tab. Set to <code>true</code> for
          external links and <code>false</code> for internal navigation.
        </p>
      </section>
    </Layout>
  );
}
