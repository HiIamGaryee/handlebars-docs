import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function PromotionGridPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "CSS Styles", href: "#css-styles" },
    { label: "Responsive CSS", href: "#responsive-css" },
    { label: "JSON Structure", href: "#json-structure" },
  ];

  const htmlTemplate = `{{#if promotion_grid.enabled}}
<section id="promotion_grid" data-section-id="promotion_grid">
  <div class="container-title">
    <div class="big-title">
      <p>{{promotion_grid.title}}</p>
    </div>
    <div class="big-title-description">
      <p>{{category_grid.description}}</p>
    </div>
  </div>

  <div class="image-grid">
    {{#each promotion_grid.items}}
    <div>
      <a href="{{url}}">
        <img src="{{image}}" alt="{{alt}}">
      </a>
      <div style="text-align:center;margin-top:8px;">
        <div style="font-weight:600;color:{{../colors.primary}};">{{title}}</div>
        {{#if subtitle}}
        <div style="font-size:12px;color:{{../colors.primary}};">{{subtitle}}</div>
        {{/if}}
      </div>
    </div>
    {{/each}}
  </div>
</section>
{{/if}}`;

  const cssStyles = `.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 1100px;
  height: 300px;
  margin: -15px auto 40px;
}

.image-grid > div {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.image-grid img {
  width: 100%;
  max-width: 250px;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.image-grid > div:hover img {
  transform: scale(1.05);
}

#promotion_grid .image-grid > div {
  display: flex;
  flex-direction: column;
}

#promotion_grid .image-grid > div a {
  display: block;
  aspect-ratio: 1/1 !important;
  width: 100%;
  overflow: hidden;
}

#promotion_grid .image-grid img {
  aspect-ratio: 1/1 !important;
  object-fit: cover;
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  display: block;
}

.container-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: start;
}

.big-title {
  width: 100%;
  max-width: 1140px;
  color: {{colors.bigTitleColor}};
  font-size: 1rem;
  font-weight: bold;
  padding: 30px 0px;
  text-align: left;
}

.big-title p {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}

.big-title-description {
  padding-bottom: 30px;
}`;

  const responsiveCss = `@media screen and (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
    height: auto;
    gap: 15px;
  }
  
  .image-grid > div {
    min-height: 150px;
  }
}`;

  const jsonExample = `{
  "promotion_grid": {
    "enabled": true,
    "title": "Trusted Online Gaming Games Online",
    "items": [
      {
        "title": "Live Casino",
        "image": "https://example.com/live-casino.jpg",
        "url": "https://example.com/live-casino",
        "alt": "Live Casino",
        "subtitle": "Optional subtitle text"
      },
      {
        "title": "Slot Games",
        "image": "https://example.com/slot-games.jpg",
        "url": "https://example.com/slot-games",
        "alt": "Slot Games"
      },
      {
        "title": "Sports Betting",
        "image": "https://example.com/sports-betting.jpg",
        "url": "https://example.com/sports-betting",
        "alt": "Sports Betting"
      },
      {
        "title": "Fishing Games",
        "image": "https://example.com/fishing-games.jpg",
        "url": "https://example.com/fishing-games",
        "alt": "Fishing Games"
      }
    ]
  },
  "colors": {
    "primary": "#007bff",
    "bigTitleColor": "#333333"
  }
}`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <h1>Promotion Grid</h1>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          The <code>promotion_grid</code> component displays a grid of
          promotional items, typically showing game categories or promotional
          offers. Each item consists of a square image with a title and optional
          subtitle below it.
        </p>
        <p>
          The component uses a 4-column grid layout on desktop, with each item
          maintaining a 1:1 aspect ratio. Images are clickable and link to the
          specified URL. The grid is responsive and adapts to smaller screens.
        </p>
      </section>

      <section id="html-structure">
        <h2>HTML Structure</h2>
        <p>
          The component consists of a section wrapper with a title container and
          an image grid. Each grid item contains an anchor-wrapped image and a
          text container with the title and optional subtitle.
        </p>
        <CodeExample code={htmlTemplate} language="handlebars" />
      </section>

      <section id="css-styles">
        <h2>CSS Styles</h2>
        <p>
          The CSS uses CSS Grid for the main layout, with 4 columns on desktop.
          Each item maintains a square aspect ratio (1:1) and includes hover
          effects. The title and subtitle are styled with the primary color from
          the theme.
        </p>
        <CodeExample code={cssStyles} language="css" />
      </section>

      <section id="responsive-css">
        <h2>Responsive CSS</h2>
        <p>
          On mobile devices (max-width: 768px), the grid switches to 2 columns
          and adjusts the height to auto for better display on smaller screens.
        </p>
        <CodeExample code={responsiveCss} language="css" />
      </section>

      <section id="json-structure">
        <h2>JSON Structure</h2>
        <p>
          The component requires a <code>promotion_grid</code> object with an{" "}
          <code>enabled</code> flag, a <code>title</code>, and an{" "}
          <code>items</code> array. Each item should have an image, URL, alt
          text, and title. The <code>subtitle</code> property is optional.
        </p>
        <CodeExample code={jsonExample} language="json" />
        <p>
          <strong>Note:</strong> The component typically displays 4 items in a
          row, but you can add more items and they will wrap to additional rows
          as needed.
        </p>
      </section>
    </Layout>
  );
}
