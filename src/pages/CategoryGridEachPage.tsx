
import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function CategoryGridEachPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "CSS Styles", href: "#css-styles" },
    { label: "Responsive CSS", href: "#responsive-css" },
    { label: "JSON Structure", href: "#json-structure" },
  ];

  const htmlTemplate = `{{#if category_grid_each.enabled}}
<section id="category_grid_each" data-section-id="category_grid_each" style="background: {{category_grid_each.styles.section_bg}};padding:20px 0;">
  <div class="container">
    {{#if category_grid_each.title}}
    <h2 class="section-title" style="color: {{category_grid_each.styles.section_title_color}};margin:0 0 16px 0;">{{category_grid_each.title}}</h2>
    {{/if}}
    <div class="cg-grid">
      {{#each category_grid_each.items}}
      <article class="cg-card" style="background: {{../category_grid_each.styles.card_bg}};color: {{../category_grid_each.styles.card_text_color}};border: {{../category_grid_each.styles.card_border}};border-radius: {{../category_grid_each.styles.card_border_radius}};box-shadow: {{../category_grid_each.styles.card_box_shadow}};">
        <div class="cg-thumb">
          {{#if image}}
          {{#if url}}<a href="{{url}}" style="display:block;"{{#if new_tab}} target="_blank" rel="noopener"{{/if}}>{{/if}}
          <img src="{{image}}" alt="{{alt}}" style="border-radius: {{../category_grid_each.styles.image_border_radius}};">
          {{#if url}}</a>{{/if}}
          {{/if}}
        </div>
        <div class="cg-content">
          {{#if title}}<h3 class="cg-title" style="color: {{../category_grid_each.styles.card_title_color}};">{{title}}</h3>{{/if}}
          {{#if description}}<p class="cg-desc" style="color: {{../category_grid_each.styles.card_text_color}};">{{{description}}}</p>{{/if}}
          {{#if url}}
            <a href="{{url}}" style="color: {{../category_grid_each.styles.link_color}};text-decoration:none;font-weight:600;">{{#if link_text}}{{link_text}}{{else}}Read more »{{/if}}</a>
          {{/if}}
        </div>
      </article>
      {{/each}}
    </div>
  </div>
</section>
{{/if}}`;

  const cssStyles = `#category_grid_each .cg-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
}

#category_grid_each .cg-card {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
}

#category_grid_each .cg-thumb {
  flex: 0 0 180px;
}

#category_grid_each .cg-thumb img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
}

#category_grid_each .cg-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

#category_grid_each .cg-title {
  font-weight: 700;
  font-size: 18px;
  margin: 0;
}

#category_grid_each .cg-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}`;

  const responsiveCss = `@media (max-width: 992px) {
  #category_grid_each .cg-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  #category_grid_each .cg-thumb {
    flex-basis: 140px;
  }
  #category_grid_each .cg-thumb img {
    height: 100px;
  }
}

@media (max-width: 480px) {
  #category_grid_each .cg-grid {
    grid-template-columns: 1fr;
  }
  #category_grid_each .cg-card {
    flex-direction: column;
    align-items: flex-start;
  }
  #category_grid_each .cg-thumb {
    width: 100%;
    flex-basis: auto;
  }
  #category_grid_each .cg-thumb img {
    height: 160px;
  }
}`;

  const jsonExample = `{
  "category_grid_each": {
    "enabled": true,
    "title": "Featured Categories",
    "styles": {
      "section_bg": "#ffffff",
      "section_title_color": "#333333",
      "card_bg": "#f8f9fa",
      "card_text_color": "#333333",
      "card_title_color": "#000000",
      "card_border": "1px solid #e0e0e0",
      "card_border_radius": "8px",
      "card_box_shadow": "0 2px 4px rgba(0,0,0,0.1)",
      "image_border_radius": "4px",
      "link_color": "#007bff"
    },
    "items": [
      {
        "image": "https://example.com/image1.jpg",
        "alt": "Category 1",
        "title": "Category Title",
        "description": "Category description text here.",
        "url": "/category-1",
        "new_tab": false,
        "link_text": "Learn More"
      },
      {
        "image": "https://example.com/image2.jpg",
        "alt": "Category 2",
        "title": "Another Category",
        "description": "Another category description.",
        "url": "/category-2",
        "new_tab": true,
        "link_text": "View Details"
      }
    ]
  }
}`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <h1>Category Grid Each</h1>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          The <code>category_grid_each</code> component displays a grid of category cards, each containing an image, title, description, and optional link. The component is fully responsive and supports customizable styling through JSON configuration.
        </p>
        <p>
          Each card displays horizontally with an image thumbnail on the left and content on the right. On mobile devices, the layout switches to a vertical stack for better readability.
        </p>
      </section>

      <section id="html-structure">
        <h2>HTML Structure</h2>
        <p>
          The component uses a grid layout with individual card articles. Each card contains a thumbnail div and a content div. Images can be wrapped in anchor tags if a URL is provided, and all styling is applied inline using Handlebars variables.
        </p>
        <CodeExample code={htmlTemplate} language="handlebars" />
      </section>

      <section id="css-styles">
        <h2>CSS Styles</h2>
        <p>
          The CSS uses CSS Grid for the main layout, with three columns on desktop. Each card uses flexbox for internal layout, with the thumbnail having a fixed width and the content area taking the remaining space.
        </p>
        <CodeExample code={cssStyles} language="css" />
      </section>

      <section id="responsive-css">
        <h2>Responsive CSS</h2>
        <p>
          The component adapts to different screen sizes:
        </p>
        <ul>
          <li><strong>Desktop (992px+):</strong> 3 columns grid</li>
          <li><strong>Tablet (480px - 992px):</strong> 2 columns grid with smaller thumbnails</li>
          <li><strong>Mobile (&lt;480px):</strong> Single column with vertical card layout</li>
        </ul>
        <CodeExample code={responsiveCss} language="css" />
      </section>

      <section id="json-structure">
        <h2>JSON Structure</h2>
        <p>
          The component requires a <code>category_grid_each</code> object with an <code>enabled</code> flag, optional <code>title</code>, <code>styles</code> object for customization, and an <code>items</code> array containing the category cards.
        </p>
        <CodeExample code={jsonExample} language="json" />
        <p>
          <strong>Note:</strong> The <code>link_text</code> property is optional. If not provided, the default text "Read more »" will be used.
        </p>
      </section>
    </Layout>
  );
}

