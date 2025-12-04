import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function EnsureSectionIdMapPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "JavaScript Function", href: "#javascript" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "JSON Structure", href: "#json-structure" },
    { label: "Section IDs", href: "#section-ids" },
    { label: "Usage Examples", href: "#usage-examples" },
  ];

  const javascriptCode = `function ensureSectionIdMap() {
  var map = {};
  
  // Step 1: Find all elements with data-section-id attribute
  var nodes = document.querySelectorAll("[data-section-id]");
  nodes.forEach(function (n) {
    var sid = n.getAttribute("data-section-id");
    if (sid && !n.id) {
      n.id = sid; // Ensure element has ID
    }
    map[sid] = n;
  });
  
  // Step 2: Look for predefined sections by ID or selector
  var selectors = {
    home_banner: "#home_banner",
    landing_banner_v1: "#landing_banner_v1",
    landing_banner_v2: "#landing_banner_v2",
    landing_banner_v3: "#landing_banner_v3",
    promotion_grid: "#promotion_grid",
    category_grid: "#category_grid",
    category_grid_each: "#category_grid_each",
    seo_content: "#seo_content",
    all_blog_posts: "#all_blog_posts",
    faq: "#faq",
    new_html_function: "#new_html_function",
    new_html_function_v2: "#new_html_function_v2",
    new_html_function_v3: "#new_html_function_v3",
    casino_cta_buttons_outer: "#casino_cta_buttons_outer"
  };
  
  Object.keys(selectors).forEach(function (id) {
    if (map[id]) return; // Already in map
    
    // Try to find by ID first
    var byId = document.getElementById(id);
    if (byId) {
      map[id] = byId;
      if (!byId.getAttribute("data-section-id"))
        byId.setAttribute("data-section-id", id);
      return;
    }
    
    // Try to find by selector
    var el = document.querySelector(selectors[id]);
    if (el) {
      if (!el.id) el.id = id;
      if (!el.getAttribute("data-section-id"))
        el.setAttribute("data-section-id", id);
      map[id] = el;
    }
  });
  
  return map;
}

function moveSections(order) {
  var map = ensureSectionIdMap();
  if (!map || !order || !order.length) return;
  
  // Get nodes in order
  var nodes = order.map(function(o){ return map[o.id]; }).filter(Boolean);
  if (!nodes.length) return;
  
  // Find common parent
  var parent = nodes[0].parentNode;
  for (var i=1;i<nodes.length;i++){
    if (nodes[i].parentNode !== parent) { 
      parent = document.body; 
      break; 
    }
  }
  
  // Find earliest node
  var earliest = nodes[0];
  for (var j=1;j<nodes.length;j++){
    if (earliest.compareDocumentPosition(nodes[j]) & Node.DOCUMENT_POSITION_PRECEDING) {
      earliest = nodes[j];
    }
  }
  
  // Reorder sections
  var placeholder = document.createComment("section-order-anchor");
  try { parent.insertBefore(placeholder, earliest); } catch(e) {}
  
  for (var k=0;k<nodes.length;k++){
    var n = nodes[k];
    if (!n) continue;
    try { parent.insertBefore(n, placeholder); } catch(e) {}
  }
  
  try { parent.removeChild(placeholder); } catch(e) {}
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  var data = getPageData(); // Gets data from #json-data element
  var order = null;
  
  if (Array.isArray(data)) {
    order = normalizeOrder(data);
  } else if (data && (data.section_order || data.page_sections)) {
    order = normalizeOrder(data.section_order || data.page_sections);
  }
  
  if (!order || !order.length) return; // Keep default order
  moveSections(order);
});`;

  const htmlTemplate = `<!-- Hidden JSON data for section ordering -->
<div id="json-data" style="display:none;">{{{json section_order}}}</div>

<!-- Sections with data-section-id attribute -->
<section id="home_banner" data-section-id="home_banner">
  <!-- Home Banner Content -->
</section>

<section id="seo_content" data-section-id="seo_content">
  <!-- SEO Content -->
</section>

<section id="faq" data-section-id="faq">
  <!-- FAQ Section -->
</section>`;

  const jsonExample = `{
  "section_order": [
    { "id": "home_banner", "seq": 1 },
    { "id": "faq", "seq": 2 },
    { "id": "seo_content", "seq": 3 }
  ]
}`;

  const sectionIdsList = `Available Section IDs:
- home_banner
- landing_banner_v1
- landing_banner_v2
- landing_banner_v3
- promotion_grid
- category_grid
- category_grid_each
- seo_content
- all_blog_posts
- faq
- new_html_function
- new_html_function_v2
- new_html_function_v3
- casino_cta_buttons_outer`;

  const usageExample = `{
  "section_order": [
    { "id": "home_banner", "seq": 1 },
    { "id": "faq", "seq": 2 },
    { "id": "seo_content", "seq": 3 }
  ]
}`;

  return (
    <Layout tableOfContents={tableOfContents} sidebarSubtitle="Components">
      <div>
        <div className="main-header">
          <p className="eyebrow">Handlebars · Components</p>
          <h1>Ensure Section ID Map</h1>
          <p className="lead">
            Documentation for the <code>ensureSectionIdMap</code> function. This
            function creates a map of all page sections and enables dynamic
            reordering of sections based on JSON configuration.
          </p>
        </div>

        <section className="content-section" id="overview">
          <h2>Overview</h2>
          <p>
            The <code>ensureSectionIdMap</code> function is a JavaScript utility
            that:
          </p>
          <ul
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
          >
            <li>Creates a map of all page sections by their section IDs</li>
            <li>
              Ensures all sections have both <code>id</code> and{" "}
              <code>data-section-id</code> attributes
            </li>
            <li>Automatically finds sections using predefined selectors</li>
            <li>
              Enables dynamic reordering of page sections via JSON configuration
            </li>
          </ul>
          <p>
            This function works together with <code>moveSections</code> to
            reorder page sections dynamically based on the order specified in
            your JSON file.
          </p>
        </section>

        <section className="content-section" id="javascript">
          <h2>JavaScript Function</h2>
          <p>
            The complete JavaScript code for <code>ensureSectionIdMap</code> and
            related functions. This code should be placed in a script tag before
            the closing <code>&lt;/body&gt;</code> tag.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={javascriptCode} language="javascript" />
          </div>
        </section>

        <section className="content-section" id="how-it-works">
          <h2>How It Works</h2>
          <p
            style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}
          >
            <strong>HTML Structure:</strong> Make sure your sections have{" "}
            <code>data-section-id</code> attributes or matching IDs.
          </p>
          <div style={{ marginTop: "12px" }}>
            <CodeExample code={htmlTemplate} language="handlebars" />
          </div>
          <p style={{ marginTop: "16px" }}>The function works in two steps:</p>
          <ol
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
          >
            <li>
              <strong>Find sections with data-section-id:</strong> Scans the DOM
              for all elements with the <code>data-section-id</code> attribute
              and adds them to the map. If an element has{" "}
              <code>data-section-id</code> but no <code>id</code>, it
              automatically sets the <code>id</code>.
            </li>
            <li>
              <strong>Find predefined sections:</strong> Uses a predefined list
              of section IDs and selectors to find sections that might not have
              the <code>data-section-id</code> attribute yet. For each section,
              it:
              <ul style={{ marginTop: "8px" }}>
                <li>
                  First tries to find by ID using <code>getElementById</code>
                </li>
                <li>If not found, tries to find using CSS selector</li>
                <li>
                  Ensures the element has both <code>id</code> and{" "}
                  <code>data-section-id</code> attributes
                </li>
                <li>Adds the element to the map</li>
              </ul>
            </li>
          </ol>
          <p>
            The <code>moveSections</code> function then uses this map to reorder
            sections according to the sequence specified in your JSON.
          </p>
        </section>

        <section className="content-section" id="json-structure">
          <h2>JSON Structure</h2>
          <p>
            Configure <code>section_order</code> using objects that include both
            an <code>id</code> and <code>seq</code> value.
          </p>
          <div style={{ marginTop: "12px" }}>
            <CodeExample code={jsonExample} language="json" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              Make sure each entry has a unique <code>id</code> and an ascending
              <code>seq</code> value—the lower the number, the earlier the
              section appears.
            </p>
          </div>
        </section>

        <section className="content-section" id="section-ids">
          <h2>Section IDs</h2>
          <p>The following section IDs are recognized by the function:</p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={sectionIdsList} language="text" />
          </div>
          <div className="callout warning" style={{ marginTop: "24px" }}>
            <span className="callout-label">NOTE</span>
            <p>
              Make sure your HTML sections have matching IDs or{" "}
              <code>data-section-id</code> attributes. The function will
              automatically add missing attributes, but it's best to include
              them in your template.
            </p>
          </div>
        </section>

        <section className="content-section" id="usage-examples">
          <h2>Usage Examples</h2>
          <p>Example JSON showing a basic section order configuration.</p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={usageExample} language="json" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              To reorder sections, simply change the sequence numbers in your
              JSON. Sections will be automatically reordered on page load. You
              can also use simple string arrays if you don't need custom
              sequence numbers.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
