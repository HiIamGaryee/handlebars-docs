import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function ClonePage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "Step 1: Get Example .hbs File", href: "#step-1" },
    { label: "Step 2: Get Example JSON File", href: "#step-2" },
    { label: "Step 3: Rename Files", href: "#step-3" },
    { label: "Step 4: Replace Parameters", href: "#step-4" },
    { label: "Complete Example", href: "#complete-example" },
  ];

  const exampleHbs = `<!-- Example: all-blog.hbs -->
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>{{page_title}}</title>
  <!-- ... other head content ... -->
</head>
<body>
  <!-- Header -->
  {{> header}}
  
  <!-- Main Content -->
  <main>
    <h1>{{blog_content_title}}</h1>
    <div class="content">
      {{{blog_content_html}}}
    </div>
  </main>
  
  <!-- Footer -->
  {{> footer}}
</body>
</html>`;

  const exampleJsonBefore = `{
  "title": "十三幺",
  "website_name": "十三幺",
  "subtitle": "十三幺",
  "og_description": "探索十三幺電子遊戲，集合多家國際供應商熱門機台，主題多元、操作流暢。",
  "og_image": "https://13yaohkofficial.com/assets/manual_upload/file-1762695941274-419138011.webp",
  "og_title": "十三幺電子遊戲｜熱門電子機台一次玩",
  "og_url": "https://13yaohkofficial.com",
  "og_type": "website",
  "og_locale": "en_US",
  "og_site_name": "十三幺",
  "og_image_width": 1200,
  "og_image_height": 630,
  "excerpt": "探索十三幺電子遊戲，集合多家國際供應商熱門機台，主題多元、操作流暢。",
  "blog_content_html": "十三幺電子遊戲專區：一站式暢玩國際級電子娛樂...",
  "blog_content_title": "十三幺電子遊戲專區：一站式暢玩國際級電子娛樂",
  "blog_content_date": "2025-08-09",
  "blog_content_author_name": "十三幺",
  "blog_content_excerpt": "探索十三幺電子遊戲，集合多家國際供應商熱門機台，主題多元、操作流暢。",
  "blog_content_tags": [
    {
      "name": "十三幺"
    }
  ],
  "description": "探索十三幺電子遊戲，集合多家國際供應商熱門機台，主題多元、操作流暢。",
  "page_title": "十三幺",
  "meta_description": "探索十三幺電子遊戲，集合多家國際供應商熱門機台，主題多元、操作流暢。",
  "meta_keywords": "十三幺電子遊戲",
  "meta_twitter_id": "@十三幺"
}`;

  const completeExample = `{
  "title": "New Website",
  "website_name": "New Website",
  "subtitle": "New Website Subtitle",
  "og_description": "This is the description for the new website.",
  "og_image": "https://newsite.com/assets/og-image.webp",
  "og_title": "New Website | Welcome to New Website",
  "og_url": "https://newsite.com",
  "og_type": "website",
  "og_locale": "en_US",
  "og_site_name": "New Website",
  "og_image_width": 1200,
  "og_image_height": 630,
  "excerpt": "This is a short description for the new website.",
  "blog_content_html": "<h1>Welcome to New Website</h1><p>This is your content...</p>",
  "blog_content_title": "Welcome to New Website",
  "blog_content_date": "2025-01-15",
  "blog_content_author_name": "Website Administrator",
  "blog_content_excerpt": "This is a short description for the new website.",
  "blog_content_tags": [
    {
      "name": "New Website"
    }
  ],
  "description": "This is the description for the new website.",
  "page_title": "New Website",
  "meta_description": "This is the SEO description for the new website.",
  "meta_keywords": "new website, website, online",
  "meta_twitter_id": "@newsite",
  "logo_src": "https://newsite.com/assets/logo.png",
  "logo_alt": "New Website Logo",
  "site_domain": "https://newsite.com",
  "navlist": [
    {
      "text": "Home",
      "url": "/",
      "icon": ""
    }
  ],
  "footers": {
    "partners_title": "Our Trusted Partners",
    "copyright_text": "Copyright © 2025 New Website."
  }
}`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <h1>Clone Page Guide</h1>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          This guide will help you clone an existing sub-page template and
          create a new page. Follow the steps below to quickly set up a new
          page.
        </p>
        <p>
          The cloning process includes: getting example files, renaming them,
          and replacing parameters.
        </p>
      </section>

      <section id="step-1">
        <h2>Step 1: Get Example .hbs File</h2>
        <p>
          First, you need to get an example Handlebars template file (.hbs) for
          subpages.{" "}
        </p>

        <p>
          <strong>Example .hbs file structure:</strong>
        </p>
        <CodeExample code={exampleHbs} language="handlebars" />
        <p>
          <strong>Tip:</strong> Make sure the example file you choose contains
          all the blocks you need (Header, Footer, main content, etc.).
        </p>
      </section>

      <section id="step-2">
        <h2>Step 2: Get Example JSON File</h2>
        <p>
          Next, get the corresponding JSON data file. This file contains all the
          data and settings needed for the page.
        </p>
        <p>
          <strong>Example JSON file (original example):</strong>
        </p>
        <CodeExample code={exampleJsonBefore} language="json" />
        <p>
          <strong>Tip:</strong> The JSON file should include all necessary
          fields, including SEO settings, content data, page information, etc.
        </p>
      </section>

      <section id="step-3">
        <h2>Step 3: Rename Files</h2>
        <p>Rename the files according to your desired URL path.</p>
        <p>
          <strong>Naming rules:</strong>
        </p>
        <ul>
          <li>
            If your URL is <code>https://abc.com/abcd</code>, then the file name
            should be <code>abcd</code>
          </li>
          <li>
            .hbs file named as: <code>abcd.hbs</code>
          </li>
          <li>
            JSON file named as: <code>abcd.json</code>
          </li>
        </ul>
        <p>
          <strong>Examples:</strong>
        </p>
        <ul>
          <li>
            URL: <code>https://example.com/products</code> → Files:{" "}
            <code>products.hbs</code> and <code>products.json</code>
          </li>
          <li>
            URL: <code>https://example.com/about-us</code> → Files:{" "}
            <code>about-us.hbs</code> and <code>about-us.json</code>
          </li>
        </ul>
      </section>

      <section id="step-4">
        <h2>Step 4: Replace Parameters</h2>
        <p>
          In the JSON file, you need to replace the following parameters with
          your own content:
        </p>

        <h3>Main Parameters to Replace:</h3>
        <ul>
          <li>
            <code>title</code> - Page title
          </li>
          <li>
            <code>website_name</code> - Website name
          </li>
          <li>
            <code>subtitle</code> - Subtitle
          </li>
          <li>
            <code>og_description</code> - Open Graph description
          </li>
          <li>
            <code>og_image</code> - Open Graph image URL
          </li>
          <li>
            <code>og_title</code> - Open Graph title
          </li>
          <li>
            <code>og_url</code> - Open Graph URL
          </li>
          <li>
            <code>og_site_name</code> - Open Graph site name
          </li>
          <li>
            <code>excerpt</code> - Page excerpt
          </li>
          <li>
            <code>blog_content_html</code> - Main content HTML
          </li>
          <li>
            <code>blog_content_title</code> - Content title
          </li>
          <li>
            <code>blog_content_date</code> - Content date
          </li>
          <li>
            <code>blog_content_author_name</code> - Author name
          </li>
          <li>
            <code>description</code> - Page description
          </li>
          <li>
            <code>page_title</code> - Page title
          </li>
          <li>
            <code>meta_description</code> - Meta description
          </li>
          <li>
            <code>meta_keywords</code> - Meta keywords
          </li>
          <li>
            <code>meta_twitter_id</code> - Twitter ID
          </li>
          <li>
            <code>logo_src</code> - Logo image URL
          </li>
          <li>
            <code>site_domain</code> - Site domain
          </li>
          <li>
            <code>navlist</code> - Navigation menu items
          </li>
          <li>
            <code>footers</code> - Footer related settings
          </li>
          <li>
            <code>social_share</code> - Social sharing settings
          </li>
        </ul>
      </section>

      <section id="complete-example">
        <h2>Complete Example</h2>
        <p>
          Below is a complete JSON example showing all parameters that need to
          be replaced:
        </p>
        <CodeExample code={completeExample} language="json" />
        <p>
          <strong>Important Notes:</strong>
        </p>
        <ul>
          <li>Make sure all URLs use the correct domain</li>
          <li>Image paths should point to actual existing image files</li>
          <li>
            Date format should be <code>YYYY-MM-DD</code>
          </li>
          <li>
            Special characters in HTML content need to be properly escaped
          </li>
          <li>
            Ensure JSON format is correct (use commas to separate, no comma
            after the last item)
          </li>
        </ul>
      </section>
    </Layout>
  );
}
