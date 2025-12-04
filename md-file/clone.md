# Clone Page Guide

**Handlebars · Clone**

## Overview

This guide will help you clone an existing sub-page template and create a new page. Follow the steps below to quickly set up a new page.

The cloning process includes: getting example files, renaming them, and replacing parameters.

## Step 1: Get Example .hbs File

First, you need to get an example Handlebars template file (.hbs) for subpages.

**Example .hbs file structure:**

```handlebars
<!-- Example: all-blog.hbs -->
<!DOCTYPE html>
<html lang="en">
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
</html>
```

**Tip:** Make sure the example file you choose contains all the blocks you need (Header, Footer, main content, etc.).

## Step 2: Get Example JSON File

Next, get the corresponding JSON data file. This file contains all the data and settings needed for the page.

**Example JSON file (original example):**

```json
{
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
}
```

**Tip:** The JSON file should include all necessary fields, including SEO settings, content data, page information, etc.

## Step 3: Rename Files

Rename the files according to your desired URL path.

**Naming rules:**

- If your URL is `https://abc.com/abcd`, then the file name should be `abcd`
- .hbs file named as: `abcd.hbs`
- JSON file named as: `abcd.json`

**Examples:**

- URL: `https://example.com/products` → Files: `products.hbs` and `products.json`
- URL: `https://example.com/about-us` → Files: `about-us.hbs` and `about-us.json`

## Step 4: Replace Parameters

In the JSON file, you need to replace the following parameters with your own content:

### Main Parameters to Replace:

- `title` - Page title
- `website_name` - Website name
- `subtitle` - Subtitle
- `og_description` - Open Graph description
- `og_image` - Open Graph image URL
- `og_title` - Open Graph title
- `og_url` - Open Graph URL
- `og_site_name` - Open Graph site name
- `excerpt` - Page excerpt
- `blog_content_html` - Main content HTML
- `blog_content_title` - Content title
- `blog_content_date` - Content date
- `blog_content_author_name` - Author name
- `description` - Page description
- `page_title` - Page title
- `meta_description` - Meta description
- `meta_keywords` - Meta keywords
- `meta_twitter_id` - Twitter ID
- `logo_src` - Logo image URL
- `site_domain` - Site domain
- `navlist` - Navigation menu items
- `footers` - Footer related settings
- `social_share` - Social sharing settings

## Complete Example

Below is a complete JSON example showing all parameters that need to be replaced:

```json
{
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
}
```

**Important Notes:**

- Make sure all URLs use the correct domain
- Image paths should point to actual existing image files
- Date format should be `YYYY-MM-DD`
- Special characters in HTML content need to be properly escaped
- Ensure JSON format is correct (use commas to separate, no comma after the last item)
