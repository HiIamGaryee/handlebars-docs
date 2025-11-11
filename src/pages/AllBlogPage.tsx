import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";
import allBlogJson from "../json/all-blog.json";

export default function AllBlogPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "Template Code", href: "#template-code" },
    { label: "CSS Styles", href: "#css-styles" },
    { label: "Responsive CSS", href: "#responsive-css" },
    { label: "JSON Structure", href: "#json-structure" },
    { label: "Script Functions", href: "#script-functions" },
    { label: "Complete Example", href: "#complete-example" },
  ];

  const templateCode = `{{#if recent_posts.length}}
<section class="recent-posts">
   <div class="container">
      <h2>{{recent_posts_heading}}</h2>
      <div class="recent-posts__list">
         {{#each recent_posts}}
         <article class="post-card">
            <div class="post-card__image">
               {{#if image}}
               <img src="{{image}}" alt="{{title}}" class="post-card__img">
               {{else}}
               <div class="post-card__placeholder">
                  <i class="fas fa-image"></i>
               </div>
               {{/if}}
            </div>
            <div class="post-card__content">
               <div class="post-card__date">{{date}}</div>
               <h3 class="post-card__title">
                  <a href="{{domain}}{{url}}">{{title}}</a>
               </h3>
               <p class="post-card__excerpt">{{excerpt}}</p>
               <a href="{{domain}}{{url}}" class="post-card__read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
         </article>
         {{/each}}
      </div>
      <div class="recent-posts__more">
         <a href="{{domain}}/all-blog" class="btn">View All</a>
      </div>
   </div>
</section>
{{/if}}`;

  const cssStyles = `.recent-posts {
   background-color: {{colors.white}};
   box-shadow: {{style.cardBorder}};
   padding: 40px 20px;
   margin-top: 30px;
   border-radius: 12px;
}

.recent-posts h2 {
   font-size: 28px;
   font-weight: 700;
   color: {{colors.text}};
   text-align: center;
   margin-bottom: 30px;
}

.recent-posts__list {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 30px;
   margin-bottom: 30px;
}

.post-card {
   background: {{colors.white}};
   border-radius: 12px;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   overflow: hidden;
   transition: transform 0.3s ease, box-shadow 0.3s ease;
   border: 1px solid {{colors.primary_block_border}};
}

.post-card:hover {
   transform: translateY(-5px);
   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.post-card__image {
   width: 100%;
   height: 200px;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: {{colors.primaryBg}};
}

.post-card__img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   transition: transform 0.3s ease;
}

.post-card:hover .post-card__img {
   transform: scale(1.05);
}

.post-card__placeholder {
   font-size: 60px;
   color: #ccc;
}

.post-card__content {
   padding: 20px;
}

.post-card__date {
   font-size: 12px;
   color: {{colors.divider}};
   margin-bottom: 8px;
   text-transform: uppercase;
   letter-spacing: 0.5px;
}

.post-card__title {
   font-size: 20px;
   font-weight: 700;
   color: {{colors.secondary}};
   margin-bottom: 10px;
   line-height: 1.3;
}

.post-card__title a {
   color: inherit;
   text-decoration: none;
   transition: color 0.3s ease;
}

.post-card__title a:hover {
   color: {{colors.primary}};
}

.post-card__excerpt {
   font-size: 16px;
   color: {{colors.divider}};
   line-height: 1.6;
   margin-bottom: 15px;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   overflow: hidden;
}

.post-card__read-more {
   display: inline-flex;
   align-items: center;
   color: {{colors.primary}};
   text-decoration: none;
   font-weight: 600;
   transition: color 0.3s ease;
}

.post-card__read-more:hover {
   color: {{colors.primaryLight}};
}

.post-card__read-more i {
   margin-left: 8px;
   font-size: 14px;
   transition: transform 0.3s ease;
}

.post-card__read-more:hover i {
   transform: translateX(5px);
}

.recent-posts__more {
   text-align: center;
   margin-top: 20px;
   margin-bottom: 40px;
}

.recent-posts__more .btn {
   background-color: {{colors.primary}};
   color: {{colors.textLight}};
   font-weight: 700;
   text-transform: uppercase;
   text-decoration: none;
   padding: 12px 25px;
   border-radius: 30px;
   transition: background-color 0.3s ease;
}

.recent-posts__more .btn:hover {
   background-color: {{colors.primaryLight}};
}`;

  const responsiveCss = `/* Tablet: 2 columns */
@media (max-width: 1024px) {
   .recent-posts__list {
      grid-template-columns: repeat(2, 1fr);
   }
}

/* Mobile: 1 column */
@media (max-width: 440px) {
   .recent-posts__list {
      grid-template-columns: repeat(1, 1fr);
   }
}`;

  const jsonExample = JSON.stringify(allBlogJson, null, 2);

  const scriptExample = `<!-- Custom Script Function -->
<script id="user-extra-script">
   {{#each new_script_function}} 
   {{{this}}}
   {{/each}}
</script>`;

  return (
    <Layout tableOfContents={tableOfContents} sidebarSubtitle="Templates">
      <div>
        <div className="main-header">
          <p className="eyebrow">Handlebars · Templates</p>
          <h1>Recent Posts Section</h1>
          <p className="lead">
            Documentation for the Recent Posts section (lines 4474-4507) in the
            all-blog.hbs template. This section displays blog posts in a
            responsive grid layout with hover effects and smooth animations.
          </p>
        </div>

        <section className="content-section" id="overview">
          <h2>Overview</h2>
          <p>
            The Recent Posts section displays a grid of blog post cards with
            images, titles, dates, excerpts, and "Read More" links. The section
            only renders if the <code>recent_posts</code> array has items. Each
            post card includes hover effects and responsive design for mobile,
            tablet, and desktop views.
          </p>
          <p>
            The template uses Handlebars block helpers (
            <code>&#123;&#123;#if&#125;&#125;</code> and{" "}
            <code>&#123;&#123;#each&#125;&#125;</code>) to conditionally render
            the section and loop through posts. All content is centered and
            properly formatted.
          </p>
        </section>

        <section className="content-section" id="template-code">
          <h2>Template Code</h2>
          <p>
            The template code for the Recent Posts section (lines 4474-4507).
            This code should be placed in your Handlebars template where you
            want the recent posts to appear.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={templateCode} language="handlebars" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              The section only displays if <code>recent_posts.length</code> is
              greater than 0. If an image is not provided, a placeholder icon is
              shown. The "View All" button links to{" "}
              <code>&#123;&#123;domain&#125;&#125;/all-blog</code>.
            </p>
          </div>
        </section>

        <section className="content-section" id="css-styles">
          <h2>CSS Styles</h2>
          <p>
            Complete CSS styles for the Recent Posts section. These styles
            create a responsive grid layout with hover effects, smooth
            transitions, and professional card design.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={cssStyles} language="css" />
          </div>
          <p
            style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}
          >
            <strong>Key Features:</strong>
          </p>
          <ul
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
          >
            <li>3-column grid layout on desktop</li>
            <li>Hover effects with lift animation and shadow</li>
            <li>Image zoom on hover</li>
            <li>Text truncation for excerpts (3 lines max)</li>
            <li>Arrow icon animation on "Read More" hover</li>
            <li>Centered "View All" button</li>
          </ul>
        </section>

        <section className="content-section" id="responsive-css">
          <h2>Responsive CSS</h2>
          <p>
            Media queries for responsive design. The grid adapts to different
            screen sizes: 3 columns on desktop, 2 columns on tablet, and 1
            column on mobile.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={responsiveCss} language="css" />
          </div>
        </section>

        <section className="content-section" id="json-structure">
          <h2>JSON Structure</h2>
          <p>
            The JSON structure required for the Recent Posts section. Include
            this in your <code>all-blog.json</code> file.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={jsonExample} language="json" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              Each post object requires: <code>title</code>, <code>date</code>,{" "}
              <code>excerpt</code>, <code>url</code>, and optionally{" "}
              <code>image</code>. The <code>domain</code> field is used to
              construct full URLs for links.
            </p>
          </div>
        </section>

        <section className="content-section" id="script-functions">
          <h2>Script Functions</h2>
          <p>
            Custom JavaScript functions can be added using the{" "}
            <code>new_script_function</code> array. Each item in the array is
            rendered as a script block in the template head section.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={scriptExample} language="html" />
          </div>
          <p
            style={{ marginTop: "16px", color: "var(--color-text-secondary)" }}
          >
            In your JSON, include scripts like this:
          </p>
          <div style={{ marginTop: "12px" }}>
            <CodeExample
              code={`"new_script_function": [
  "console.log('Custom script loaded');",
  "// Add your custom JavaScript here",
  "function initCustomFeatures() { /* your code */ }"
]`}
              language="json"
            />
          </div>
        </section>

        <section className="content-section" id="complete-example">
          <h2>Complete Example</h2>
          <p>
            A complete working example showing how all the pieces fit together.
            Copy this structure into your template and JSON files.
          </p>
          <div className="callout warning" style={{ marginTop: "24px" }}>
            <span className="callout-label">NOTE</span>
            <p>
              Make sure to replace all Handlebars variable placeholders (like{" "}
              <code>&#123;&#123;colors.white&#125;&#125;</code>) with actual
              values or ensure your template engine processes them correctly.
              The CSS uses Handlebars expressions for dynamic theming.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
