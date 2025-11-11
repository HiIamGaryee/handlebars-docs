import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";
import { ExpandableCodeExample } from "../components/ExpandableCodeExample";

export default function Example13YAOPage() {
  const [hbsContent, setHbsContent] = useState<string>("");
  const [jsonContent, setJsonContent] = useState<string>("");

  useEffect(() => {
    // Load HBS file
    fetch("/main-13yao.hbs")
      .then((res) => res.text())
      .then((text) => setHbsContent(text))
      .catch((err) => console.error("Failed to load HBS file:", err));

    // Load JSON file
    fetch("/page-13yao.json")
      .then((res) => res.json())
      .then((data) => setJsonContent(JSON.stringify(data, null, 2)))
      .catch((err) => console.error("Failed to load JSON file:", err));
  }, []);

  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "Template File", href: "#template-file" },
    { label: "JSON Configuration", href: "#json-configuration" },
  ];

  const hbsPreview = `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
      <!-- SEO and Performance Meta Tags -->
      <title>{{subtitle}}</title>
      <meta name="description" content="{{meta_description}}">
      ...
   </head>
   <body>
      {{#if homeBanner.enabled}}
      <section class="home-banner" id="home_banner" data-section-id="home_banner">
         ...
      </section>
      {{/if}}
      ...
   </body>
</html>`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <h1>13YAO Example</h1>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          This is a complete example implementation of a Handlebars template and JSON configuration for the 13YAO casino website. The example includes all components, sections, and configurations needed to build a full-featured casino website.
        </p>
        <p>
          The template file (<code>main-13yao.hbs</code>) is a comprehensive Handlebars template with over 5,500 lines of code, including all the components documented in this guide. The JSON file (<code>page-13yao.json</code>) contains all the configuration data needed to populate the template.
        </p>
      </section>

      <section id="template-file">
        <h2>Template File</h2>
        <p>
          The Handlebars template file (<code>main-13yao.hbs</code>) is a complete implementation that includes:
        </p>
        <ul>
          <li>Full HTML structure with meta tags and SEO optimization</li>
          <li>All documented components (Home Banner, Header, Footer, FAQ, etc.)</li>
          <li>Responsive CSS styling</li>
          <li>JavaScript functionality for interactive components</li>
          <li>Section ordering and dynamic content rendering</li>
        </ul>
        <p>
          <strong>Note:</strong> The full template file is very large (5,542 lines), so we're showing a preview below. Use the download button to get the complete file.
        </p>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <CodeExample
            code={hbsPreview}
            language="handlebars"
            downloadButton={
              hbsContent
                ? {
                    filename: "main-13yao.hbs",
                    contentType: "text/plain",
                    label: "Download",
                  }
                : undefined
            }
          />
        </div>
      </section>

      <section id="json-configuration">
        <h2>JSON Configuration</h2>
        <p>
          The JSON configuration file (<code>page-13yao.json</code>) contains all the data needed to populate the template, including:
        </p>
        <ul>
          <li>Site metadata and SEO information</li>
          <li>Component configurations (banners, grids, FAQs, etc.)</li>
          <li>Color schemes and styling options</li>
          <li>Navigation structures</li>
          <li>Content sections and blog posts</li>
        </ul>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          {jsonContent ? (
            <ExpandableCodeExample
              code={jsonContent}
              language="json"
              downloadButton={{
                filename: "page-13yao.json",
                contentType: "application/json",
                label: "Download",
              }}
              maxLines={5}
              expandThreshold={30}
            />
          ) : (
            <div style={{ padding: "20px", background: "var(--color-bg-muted)", borderRadius: "8px" }}>
              Loading JSON content...
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

