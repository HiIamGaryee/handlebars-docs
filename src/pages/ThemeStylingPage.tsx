import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";
import { ExpandableCodeExample } from "../components/ExpandableCodeExample";

export default function ThemeStylingPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "Style Tokens", href: "#style-tokens" },
    { label: "Color Tokens", href: "#color-tokens" },
    { label: "Usage", href: "#usage" },
  ];

  const styleSnippet = `{
  "style": {
    "cardBorder": "0 18px 40px rgba(18, 61, 133, 0.16)",
    "sideFooterBorder": "0 -2px 18px rgba(15, 56, 114, 0.12)",
    "globalBoxShadow": "0 20px 40px rgba(15, 56, 114, 0.18)",
    "borderRadiusButton": "30px",
    "borderRadiusCard": "20px",
    "borderRadiusSmall": "12px",
    "borderRadiusMedium": "16px",
    "borderRadiusLarge": "28px",
    "homeBannerBorderRadius": "16px"
  }
}`;

  const colorsSnippet = `{
  "colors": {
    "primary": "#2f8bff",
    "primaryLight": "#7bc6ff",
    "primaryBg": "#f2f7ff",
    "secondary": "#1f4ad8",
    "secondaryBg": "#ffffff",
    "textSecondary": "#3a4a66",
    "text": "#1e2a3b",
    "textLight": "#ffffff",
    "htmlColorP": "#4f5f7a",
    "modePaperBorder": "1px solid rgba(47, 139, 255, 0.16)",
    "slideDrawerPaperBg": "rgba(18, 40, 87, 0.95)",
    "footerBorderTop": "rgba(255, 255, 255, 0.08)",
    "LoginBottonBgStart": "#4a90ff",
    "RegisterButtonColor": "#1c63ff",
    "bottomMenuBg": "#1f4ad8",
    "primaryactions": "#2f8bff",
    "hotGamesPlayBtnBg": "#ffe38f",
    "giftContainerBoxShawdow": "0 18px 32px rgba(18,61,133,0.18)"
  }
}`;

  const usageSnippet = `{{!-- Example: apply shared tokens inside templates --}}
<section class="featured-card" style="box-shadow: {{style.cardBorder}}; border-radius: {{style.borderRadiusCard}};">
  <h2 style="color: {{colors.primary}};">Highlighted Section</h2>
  <p style="color: {{colors.textSecondary}};">Keep copy short and readable.</p>
  <a class="btn-primary"
     style="
       background: {{colors.primary}};
       color: {{colors.textLight}};
       border-radius: {{style.borderRadiusButton}};
     ">
    Call to action
  </a>
</section>`;

  return (
    <Layout tableOfContents={tableOfContents} sidebarSubtitle="Layout">
      <div className="content-stack">
        <section className="content-section" id="overview">
          <h1>Theme Styling Tokens</h1>
          <p className="lead">
            Use the <code>style</code> and <code>colors</code> keys to keep
            design decisions consistent across templates. Define them once in your
            JSON payload, then read the values in any component.
          </p>
          <p>
            Think of these objects as design tokens: shadows, radii, and color
            pairs that keep headers, cards, buttons, and banners aligned with the
            brand palette.
          </p>
        </section>

        <section className="content-section" id="style-tokens">
          <h2>Style Tokens</h2>
          <p>
            Everything under <code>style</code> controls shared spacing and shape
            choices. The values can be dropped straight into inline styles or SCSS
            variables.
          </p>

          <CodeExample code={styleSnippet} language="json" />

          <ul>
            <li>
              <strong>cardBorder</strong>: standard drop shadow for cards and
              promo blocks.
            </li>
            <li>
              <strong>borderRadius*</strong>: default rounding used across buttons
              and surfaces at different sizes.
            </li>
            <li>
              <strong>homeBannerBorderRadius</strong>: quick override for large
              hero banners.
            </li>
          </ul>
        </section>

        <section className="content-section" id="color-tokens">
          <h2>Color Tokens</h2>
          <p>
            The <code>colors</code> object carries the brand palette. Pull these
            values into headers, footers, CTA buttons, and FAQ sections so
            everything looks cohesive.
          </p>

          <ExpandableCodeExample
            code={colorsSnippet}
            language="json"
            maxLines={10}
            expandThreshold={20}
          />

          <div className="callout tip">
            <span className="callout-label">TIP</span>
            <p>
              Stick to semantic names like <code>primary</code>,
              <code>textSecondary</code>, or <code>bottomMenuBg</code>. It makes
              global theme swaps painless.
            </p>
          </div>
        </section>

        <section className="content-section" id="usage">
          <h2>Usage</h2>
          <p>
            Reference the tokens directly inside Handlebars helpers or pass them
            through to React components. No extra helpers needed—just use the
            keys.
          </p>

          <CodeExample code={usageSnippet} language="hbs" />
        </section>
      </div>
    </Layout>
  );
}

