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

  const exampleJsonAfter = `{
  "title": "你的網站名稱",
  "website_name": "你的網站名稱",
  "subtitle": "你的網站副標題",
  "og_description": "你的網站描述，用於社交媒體分享預覽。",
  "og_image": "https://yourdomain.com/assets/og-image.webp",
  "og_title": "你的網站標題｜副標題",
  "og_url": "https://yourdomain.com",
  "og_type": "website",
  "og_locale": "zh_TW",
  "og_site_name": "你的網站名稱",
  "og_image_width": 1200,
  "og_image_height": 630,
  "excerpt": "你的網站簡短描述。",
  "blog_content_html": "你的完整內容 HTML...",
  "blog_content_title": "你的文章標題",
  "blog_content_date": "2025-01-15",
  "blog_content_author_name": "你的作者名稱",
  "blog_content_excerpt": "你的文章簡短摘要。",
  "blog_content_tags": [
    {
      "name": "標籤1"
    },
    {
      "name": "標籤2"
    }
  ],
  "description": "你的網站描述。",
  "page_title": "你的頁面標題",
  "meta_description": "你的 SEO 描述。",
  "meta_keywords": "關鍵字1, 關鍵字2, 關鍵字3",
  "meta_twitter_id": "@你的Twitter帳號"
}`;

  const footerHeaderParams = `{
  "logo_src": "https://yourdomain.com/assets/logo.png",
  "logo_alt": "你的網站 Logo",
  "site_domain": "https://yourdomain.com",
  "navlist": [
    {
      "text": "首頁",
      "url": "/",
      "icon": ""
    },
    {
      "text": "關於我們",
      "url": "/about",
      "icon": ""
    }
  ],
  "footers": {
    "partners_title": "我們的合作夥伴",
    "games": [
      {
        "text": "遊戲1",
        "url": "https://yourdomain.com/game1"
      }
    ],
    "info_links": [
      {
        "text": "首頁",
        "url": "/"
      }
    ],
    "copyright_text": "版權所有 © 2025 你的網站名稱。",
    "copyright_logo": "https://yourdomain.com/assets/copyright-logo.png"
  },
  "social_share": {
    "enabled": true,
    "items": [
      {
        "platform": "Facebook",
        "url": "https://facebook.com/yourpage",
        "img": "https://yourdomain.com/assets/facebook-icon.webp",
        "alt": "Facebook"
      }
    ]
  }
}`;

  const completeExample = `{
  "title": "新網站",
  "website_name": "新網站",
  "subtitle": "新網站副標題",
  "og_description": "這是新網站的描述。",
  "og_image": "https://newsite.com/assets/og-image.webp",
  "og_title": "新網站｜歡迎來到新網站",
  "og_url": "https://newsite.com",
  "og_type": "website",
  "og_locale": "zh_TW",
  "og_site_name": "新網站",
  "og_image_width": 1200,
  "og_image_height": 630,
  "excerpt": "這是新網站的簡短描述。",
  "blog_content_html": "<h1>歡迎來到新網站</h1><p>這是你的內容...</p>",
  "blog_content_title": "歡迎來到新網站",
  "blog_content_date": "2025-01-15",
  "blog_content_author_name": "網站管理員",
  "blog_content_excerpt": "這是新網站的簡短描述。",
  "blog_content_tags": [
    {
      "name": "新網站"
    }
  ],
  "description": "這是新網站的描述。",
  "page_title": "新網站",
  "meta_description": "這是新網站的 SEO 描述。",
  "meta_keywords": "新網站, 網站, 線上",
  "meta_twitter_id": "@newsite",
  "logo_src": "https://newsite.com/assets/logo.png",
  "logo_alt": "新網站 Logo",
  "site_domain": "https://newsite.com",
  "navlist": [
    {
      "text": "首頁",
      "url": "/",
      "icon": ""
    }
  ],
  "footers": {
    "partners_title": "我們的合作夥伴",
    "copyright_text": "版權所有 © 2025 新網站。"
  }
}`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <h1>Clone Page Guide</h1>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          本指南將幫助您複製現有的子頁面模板，並創建一個新的頁面。按照以下步驟操作即可快速建立新頁面。
        </p>
        <p>
          克隆頁面的流程包括：獲取範例檔案、重新命名、替換參數等步驟。
        </p>
      </section>

      <section id="step-1">
        <h2>Step 1: Get Example .hbs File</h2>
        <p>
          首先，您需要獲取一個範例的 Handlebars 模板檔案（.hbs）。您可以從現有的頁面中複製，例如：
        </p>
        <ul>
          <li><code>all-blog.hbs</code></li>
          <li><code>example-page.hbs</code></li>
          <li>或其他現有的模板檔案</li>
        </ul>
        <p>
          <strong>範例 .hbs 檔案結構：</strong>
        </p>
        <CodeExample code={exampleHbs} language="handlebars" />
        <p>
          <strong>提示：</strong> 確保您選擇的範例檔案包含您需要的所有區塊（Header、Footer、主要內容等）。
        </p>
      </section>

      <section id="step-2">
        <h2>Step 2: Get Example JSON File</h2>
        <p>
          接下來，獲取對應的 JSON 資料檔案。這個檔案包含了頁面所需的所有資料和設定。
        </p>
        <p>
          <strong>範例 JSON 檔案（原始範例）：</strong>
        </p>
        <CodeExample code={exampleJsonBefore} language="json" />
        <p>
          <strong>提示：</strong> JSON 檔案應該包含所有必要的欄位，包括 SEO 設定、內容資料、頁面資訊等。
        </p>
      </section>

      <section id="step-3">
        <h2>Step 3: Rename Files</h2>
        <p>
          根據您想要的 URL 路徑來重新命名檔案。
        </p>
        <p>
          <strong>命名規則：</strong>
        </p>
        <ul>
          <li>如果您的 URL 是 <code>https://abc.com/abcd</code>，則檔案名稱應為 <code>abcd</code></li>
          <li>.hbs 檔案命名為：<code>abcd.hbs</code></li>
          <li>JSON 檔案命名為：<code>abcd.json</code></li>
        </ul>
        <p>
          <strong>範例：</strong>
        </p>
        <ul>
          <li>URL: <code>https://example.com/products</code> → 檔案: <code>products.hbs</code> 和 <code>products.json</code></li>
          <li>URL: <code>https://example.com/about-us</code> → 檔案: <code>about-us.hbs</code> 和 <code>about-us.json</code></li>
        </ul>
      </section>

      <section id="step-4">
        <h2>Step 4: Replace Parameters</h2>
        <p>
          在 JSON 檔案中，您需要替換以下參數為您自己的內容：
        </p>
        
        <h3>4.1 基本頁面參數</h3>
        <p>
          替換以下基本頁面資訊：
        </p>
        <CodeExample code={exampleJsonAfter} language="json" />
        
        <h3>4.2 Header 和 Footer 參數</h3>
        <p>
          替換 Header 和 Footer 相關的參數：
        </p>
        <CodeExample code={footerHeaderParams} language="json" />
        
        <h3>需要替換的主要參數列表：</h3>
        <ul>
          <li><code>title</code> - 頁面標題</li>
          <li><code>website_name</code> - 網站名稱</li>
          <li><code>subtitle</code> - 副標題</li>
          <li><code>og_description</code> - Open Graph 描述</li>
          <li><code>og_image</code> - Open Graph 圖片 URL</li>
          <li><code>og_title</code> - Open Graph 標題</li>
          <li><code>og_url</code> - Open Graph URL</li>
          <li><code>og_site_name</code> - Open Graph 網站名稱</li>
          <li><code>excerpt</code> - 頁面摘要</li>
          <li><code>blog_content_html</code> - 主要內容 HTML</li>
          <li><code>blog_content_title</code> - 內容標題</li>
          <li><code>blog_content_date</code> - 內容日期</li>
          <li><code>blog_content_author_name</code> - 作者名稱</li>
          <li><code>description</code> - 頁面描述</li>
          <li><code>page_title</code> - 頁面標題</li>
          <li><code>meta_description</code> - Meta 描述</li>
          <li><code>meta_keywords</code> - Meta 關鍵字</li>
          <li><code>meta_twitter_id</code> - Twitter ID</li>
          <li><code>logo_src</code> - Logo 圖片 URL</li>
          <li><code>site_domain</code> - 網站網域</li>
          <li><code>navlist</code> - 導航選單項目</li>
          <li><code>footers</code> - Footer 相關設定</li>
          <li><code>social_share</code> - 社群分享設定</li>
        </ul>
      </section>

      <section id="complete-example">
        <h2>Complete Example</h2>
        <p>
          以下是一個完整的 JSON 範例，展示了所有需要替換的參數：
        </p>
        <CodeExample code={completeExample} language="json" />
        <p>
          <strong>注意事項：</strong>
        </p>
        <ul>
          <li>確保所有 URL 都使用正確的網域</li>
          <li>圖片路徑應該指向實際存在的圖片檔案</li>
          <li>日期格式應為 <code>YYYY-MM-DD</code></li>
          <li>HTML 內容中的特殊字元需要正確轉義</li>
          <li>確保 JSON 格式正確（使用逗號分隔，最後一項不加逗號）</li>
        </ul>
      </section>
    </Layout>
  );
}

