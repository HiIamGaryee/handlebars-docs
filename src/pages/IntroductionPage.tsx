import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function IntroductionPage() {
  const tableOfContents: TocItem[] = [
    { label: "Introduction", href: "#introduction" },
    { label: "What is Handlebars?", href: "#what-is-handlebars" },
    { label: "Language features", href: "#language-features" },
    { label: "Simple expressions", href: "#simple-expressions" },
    { label: "Nested input objects", href: "#nested-input-objects" },
    { label: "Evaluation context", href: "#evaluation-context" },
    { label: "Template comments", href: "#template-comments" },
    { label: "Custom Helpers", href: "#custom-helpers" },
    { label: "Block Helpers", href: "#block-helpers" },
    { label: "HTML Escaping", href: "#html-escaping" },
    { label: "Partials", href: "#partials" },
    { label: "Built-In Helpers", href: "#built-in-helpers" },
    { label: "API Reference", href: "#api-reference" },
    { label: "Metadata Configuration", href: "#metadata-config" },
    { label: "Basic Meta Tags", href: "#basic-meta" },
    { label: "Open Graph Tags", href: "#open-graph" },
    { label: "Twitter Card Tags", href: "#twitter-card" },
    { label: "Security Headers", href: "#security-headers" },
  ];

  const simpleTemplateSnippet = `<p>{{firstname}} {{lastname}}</p>`;
  const simpleInputSnippet = `{
  firstname: "Yehuda",
  lastname: "Katz"
}`;
  const simpleOutputSnippet = `<p>Yehuda Katz</p>`;

  const nestedInputSnippet = `{
  author: {
    firstname: "Yehuda",
    lastname: "Katz"
  }
}`;

  const nestedTemplateSnippet = `<p>{{author.firstname}} {{author.lastname}}</p>`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <div id="introduction">
        <div className="main-header">
          <p className="eyebrow">Handlebars · Guide</p>
          <h1>Introduction</h1>
          <p className="lead">
            Learn the core ideas behind Handlebars, the lightweight templating
            language for generating HTML, emails, PDFs, and any other plain-text
            output.
          </p>
        </div>

        <section className="content-section" id="what-is-handlebars">
          <h2>What is Handlebars?</h2>
          <p>
            Handlebars is a simple <strong>templating language</strong>. It uses
            a template and an input object to generate HTML or other text
            formats. Handlebars templates look like regular text with embedded
            Handlebars expressions.
          </p>

          <CodeExample code={simpleTemplateSnippet} language="template" />

          <p>
            A Handlebars expression is a <code>&#123;&#123;</code>, some
            contents, followed by a <code>&#125;&#125;</code>. When the template
            is executed, these expressions are replaced with values from an
            input object.
          </p>

          <a className="learn-more" href="#language-features">
            Learn More: Expressions
          </a>
        </section>

        <section className="content-section" id="language-features">
          <h2>Language features</h2>

          <article className="subsection" id="simple-expressions">
            <h3>Simple expressions</h3>
            <p>
              As shown before, the following template defines two Handlebars
              expressions. When executed with the input object, the expressions
              are replaced with the corresponding properties.
            </p>

            <div className="example-grid">
              <CodeExample code={simpleTemplateSnippet} language="template" />
              <CodeExample code={simpleInputSnippet} language="input" />
              <CodeExample code={simpleOutputSnippet} language="output" />
            </div>
          </article>

          <article className="subsection" id="nested-input-objects">
            <h3>Nested input objects</h3>
            <p>
              Sometimes, the input objects contain other objects or arrays.
              Handlebars lets you reference nested properties using dot
              notation.
            </p>

            <div className="example-grid">
              <CodeExample code={nestedInputSnippet} language="input" />
              <CodeExample code={nestedTemplateSnippet} language="template" />
            </div>
          </article>

          <article className="subsection" id="evaluation-context">
            <h3>Evaluation context</h3>
            <p>
              Each template is evaluated against the current context. When you
              enter a block, the context changes to the block&apos;s data unless
              you use <code>../</code> paths to access parent scopes.
            </p>
          </article>

          <article className="subsection" id="template-comments">
            <h3>Template comments</h3>
            <p>
              Use <code>&#123;!</code> and <code>!&#125;</code> to add comments
              within templates. They are removed during compilation and never
              appear in the output.
            </p>
          </article>

          <article className="subsection" id="custom-helpers">
            <h3>Custom Helpers</h3>
            <p>
              Helpers let you extract common logic into reusable functions.
              Register a helper with <code>Handlebars.registerHelper</code> and
              call it within your template.
            </p>
          </article>

          <article className="subsection" id="block-helpers">
            <h3>Block Helpers</h3>
            <p>
              Block helpers wrap a section of a template and can modify the
              rendering context or repeat the block, similar to loops and
              conditionals.
            </p>
          </article>

          <article className="subsection" id="html-escaping">
            <h3>HTML Escaping</h3>
            <p>
              By default, Handlebars escapes values to protect against XSS. Use
              triple stashes <code>&#123;&#123;&#123;</code> and{" "}
              <code>&#125;&#125;&#125;</code> when you intentionally want to
              output raw HTML.
            </p>
          </article>

          <article className="subsection" id="partials">
            <h3>Partials</h3>
            <p>
              Partials let you reuse template fragments. Register a partial
              once, then include it in other templates with{" "}
              <code>&#123;&#123;&gt;</code>.
            </p>
          </article>

          <article className="subsection" id="built-in-helpers">
            <h3>Built-In Helpers</h3>
            <p>
              Handlebars ships with helpers like <code>if</code>,{" "}
              <code>each</code>, and <code>with</code> to handle common
              templating tasks out of the box.
            </p>
          </article>

          <article className="subsection" id="api-reference">
            <h3>API Reference</h3>
            <p>
              When you are ready to go deeper, consult the comprehensive API
              reference for every available helper, hook, and runtime
              configuration option.
            </p>
          </article>
        </section>

        <section className="content-section" id="metadata-config">
          <h2>Metadata Configuration</h2>
          <p>
            For templates like all-blog.hbs, metadata should be properly configured
            in the JSON file and centered in the HTML head section. All metadata tags
            are automatically inserted using Handlebars expressions.
          </p>
        </section>

        <section className="content-section" id="basic-meta">
          <h2>Basic Meta Tags</h2>
          <p>
            Standard HTML meta tags for SEO and page information. These should be
            included in your template head section.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample
              code={`<title>{{subtitle}}</title>
<meta name="description" content="{{meta_description}}">
<meta name="keywords" content="{{meta_keywords}}">
<meta name="author" content="{{author_name}}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<link rel="canonical" href="{{canonical_url}}">`}
              language="html"
            />
          </div>
        </section>

        <section className="content-section" id="open-graph">
          <h2>Open Graph Tags</h2>
          <p>
            Open Graph meta tags enable rich previews when your content is shared on
            social media platforms like Facebook and LinkedIn.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample
              code={`<meta property="og:title" content="{{og_title}}">
<meta property="og:description" content="{{og_description}}">
<meta property="og:image" content="{{og_image}}">
<meta property="og:url" content="{{og_url}}">
<meta property="og:type" content="{{og_type}}">
<meta property="og:locale" content="{{og_locale}}">
<meta property="og:site_name" content="{{og_site_name}}">
<meta property="og:image:width" content="{{og_image_width}}">
<meta property="og:image:height" content="{{og_image_height}}">`}
              language="html"
            />
          </div>
        </section>

        <section className="content-section" id="twitter-card">
          <h2>Twitter Card Tags</h2>
          <p>
            Twitter Card meta tags optimize how your content appears when shared on
            Twitter. Use summary_large_image for best visual impact.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample
              code={`<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{og_title}}">
<meta name="twitter:description" content="{{og_description}}">
<meta name="twitter:image" content="{{og_image}}">
<meta name="twitter:site" content="{{meta_twitter_id}}">`}
              language="html"
            />
          </div>
        </section>

        <section className="content-section" id="security-headers">
          <h2>Security Headers</h2>
          <p>
            Security-related meta tags help protect your site from various attacks
            and improve security posture.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample
              code={`<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">`}
              language="html"
            />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              All metadata values are pulled from your JSON file using Handlebars
              expressions. Make sure all required fields are present in your JSON
              structure. See the All Blog Page documentation for the complete JSON
              example.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

