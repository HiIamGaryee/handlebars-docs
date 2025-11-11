import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function FooterPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "CSS Styles", href: "#css-styles" },
    { label: "Mobile Styles", href: "#mobile-styles" },
    { label: "JSON Structure", href: "#json-structure" },
    { label: "Complete Example", href: "#complete-example" },
  ];

  const htmlTemplate = `<!-- Footer -->
<footer class="footer">
  <div class="footer-container">
    <!-- Our Trusted Partners - Scrollable Section -->
    <div class="footer-partners-section">
      <label class="footer-partners-title">{{footers.partners_title}}</label>
      <div class="footer-partners-scroll">
        <div class="footer-partners-track">
          {{#each vendor_track}}
          <div class="footer-partner-item">
            <a href="{{#if url}}{{url}}{{else}}{{site_domain}}{{/if}}" target="_blank" rel="noopener">
              <img src="{{icon}}" alt="{{name}}" class="footer-partner-img">
            </a>
          </div>
          {{/each}}
        </div>
      </div>
    </div>

    <!-- Desktop Footer Content -->
    <div class="footer-content-desktop">
      <div class="footer-ul-wrapper">
        <!-- Games Column -->
        <div class="footer-ul">
          <ul>
            <h3 class="h-title">Games</h3>
            {{#each footers.games}}
            <li><a href="{{url}}">{{text}}</a></li>
            {{/each}}
          </ul>
        </div>
        
        <!-- Information Column -->
        <div class="footer-ul">
          <ul>
            <h3 class="h-title">Information</h3>
            {{#each footers.info_links}}
            <li><a href="{{domain}}{{url}}">{{text}}</a></li>
            {{/each}}
          </ul>
        </div>

        <!-- Certification Column -->
        <div class="footer-ul">
          <ul class="certification-list">
            <h3 class="h-title">Certification</h3>
            <li>
              <div class="image-container">
                {{#each footers.certifications}}
                <a href="{{#if url}}{{url}}{{else}}{{site_domain}}{{/if}}" target="_blank" rel="noopener" style="display: inline-block;">
                  <img src="{{src}}" alt="{{alt}}" width="{{width}}" height="{{height}}" class="cert-img">
                </a>
                {{/each}}
              </div>
            </li>
          </ul>
        </div>

        <!-- Responsible Gaming & Social Media Column -->
        <div class="footer-ul footer-ul-side">
          <ul>
            <h3 class="h-title">Responsible Gaming</h3>
            <li>
              <div class="image-container">
                {{#each footers.responsible_gaming}}
                <a href="{{#if url}}{{url}}{{else}}{{site_domain}}{{/if}}" target="_blank" rel="noopener" style="display: inline-block;">
                  <img src="{{src}}" alt="{{alt}}" width="{{width}}" height="{{height}}" class="resp-img">
                </a>
                {{/each}}
              </div>
            </li>
          </ul>
          {{#if social_share.enabled}}
          <ul class="mt-1">
            <h3 class="h-title">Follow Us</h3>
            <li>
              <div class="social-desktop">
                {{#each social_share.items}}
                <a href="{{url}}" target="_blank" rel="noopener" class="social-desktop-link" title="{{alt}}">
                  <img src="{{img}}" alt="{{alt}}" class="social-desktop-img">
                </a>
                {{/each}}
              </div>
            </li>
          </ul>
          {{/if}}
        </div>
      </div>
    </div>

    <!-- Mobile Footer Content -->
    <div class="footer-content-mobile">
      <!-- Games Section -->
      <div class="footer-mobile-section">
        <label class="footer-mobile-title">Games</label>
        <ul class="footer-mobile-list">
          {{#each footers.games}}
          <li><a href="{{url}}">{{text}}</a></li>
          {{/each}}
        </ul>
      </div>
      
      <!-- Information Section -->
      <div class="footer-mobile-section">
        <label class="footer-mobile-title">Information</label>
        <ul class="footer-mobile-list">
          {{#each footers.info_links}}
          <li><a href="{{domain}}{{url}}">{{text}}</a></li>
          {{/each}}
        </ul>
      </div>
      
      <!-- Certification Section -->
      <div class="footer-mobile-section">
        <label class="footer-mobile-title">Certification</label>
        <div class="certification-mobile">
          {{#each footers.certifications}}
          <a href="{{#if url}}{{url}}{{else}}{{site_domain}}{{/if}}" target="_blank" rel="noopener">
            <img src="{{src}}" alt="{{alt}}" class="cert-mobile-img">
          </a>
          {{/each}}
        </div>
      </div>
      
      <!-- Responsible Gaming Section -->
      <div class="footer-mobile-section">
        <label class="footer-mobile-title">Responsible Gaming</label>
        <div class="responsible-gaming-mobile">
          {{#each footers.responsible_gaming}}
          <a href="{{#if url}}{{url}}{{else}}{{site_domain}}{{/if}}" target="_blank" rel="noopener">
            <img src="{{src}}" alt="{{alt}}" class="resp-mobile-img">
          </a>
          {{/each}}
        </div>
      </div>

      {{#if social_share.enabled}}
      <div class="footer-mobile-section">
        <label class="footer-mobile-title">Follow Us</label>
        <div class="social-mobile">
          {{#each social_share.items}}
          <a href="{{url}}" target="_blank" rel="noopener" class="social-mobile-link" title="{{alt}}">
            <img src="{{img}}" alt="{{alt}}" class="social-mobile-img">
          </a>
          {{/each}}
        </div>
      </div>
      {{/if}}
    </div>
  </div>
  
  <!-- Copyright Section -->
  <div class="footer-copyright">
    <div class="footer-copyright-container">
      <span class="powered-by-text">{{footers.powered_by_text}}</span>
      <div class="copyright-content">
        <img src="{{footers.copyright_logo}}" alt="Logo" class="copyright-logo">
        <p class="copyright-text">{{footers.copyright_text}}</p>
      </div>
    </div>
  </div>
</footer>`;

  const cssStyles = `.footer {
  background: url('{{footer_bg_url}}') center / cover no-repeat fixed, {{colors.footer_bg}};
  padding: 60px 0 0;
  position: relative;
  z-index: 1;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('{{footer_bg_url}}') center / cover no-repeat fixed, {{colors.footer_bg}};
  opacity: 0.1;
  z-index: -1;
}

.footer > * {
  position: relative;
  z-index: 2;
  pointer-events: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 20px;
}

.footer-partners-section {
  padding: 20px 0 30px;
  border-bottom: 1px solid {{colors.footerPartnersBorder}};
  margin-bottom: 30px;
}

.footer-partners-title {
  display: block;
  color: {{colors.footerTitleColor}};
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
}

.footer-partners-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
}

.footer-partners-scroll:active {
  cursor: grabbing;
}

.footer-partners-scroll::-webkit-scrollbar {
  display: none;
}

.footer-partners-track {
  display: flex;
  gap: 16px;
  padding: 10px 0;
  min-width: max-content;
}

.footer-partner-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.footer-partner-item:hover {
  transform: translateY(-3px);
}

.footer-partner-img {
  height: 60px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
}

.footer-content-desktop {
  display: block;
}

.footer-ul-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.footer-ul {
  flex: 1;
  min-width: 180px;
}

.footer-ul ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
  float: left;
  text-align: left;
  min-width: 120px;
}

.footer-ul .h-title {
  font-size: 0.8rem;
  color: {{colors.footerTitleColor}};
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-ul ul li {
  font-size: 0.8rem;
  color: {{colors.footerText}};
  padding: 5px 0;
}

.footer-ul ul li a {
  text-decoration: none;
  color: {{colors.footerLinkColor}};
  transition: color 0.3s ease;
}

.footer-ul ul li a:hover {
  color: {{colors.footerLinkHoverColor}};
}

.footer-ul .image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.footer-ul .cert-img,
.footer-ul .resp-img {
  object-fit: contain;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.footer-ul .cert-img:hover,
.footer-ul .resp-img:hover {
  transform: scale(1.1);
}

.social-desktop {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.social-desktop-link {
  display: inline-block;
  transition: transform 0.3s ease;
}

.social-desktop-link:hover {
  transform: scale(1.15);
}

.social-desktop-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.footer-copyright {
  background-color: {{colors.footerCopyrightBg}};
  padding: 20px 0;
  border-top: 1px solid {{colors.footerBorderTop}};
}

.footer-copyright-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.powered-by-text {
  display: block;
  color: {{colors.footerText}};
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.copyright-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.copyright-logo {
  height: 30px;
  width: auto;
  object-fit: contain;
}

.copyright-text {
  color: {{colors.footerText}};
  font-size: 0.85rem;
  margin: 0;
}`;

  const mobileCss = `.footer-content-mobile {
  display: none;
}

.footer-mobile-section {
  text-align: left;
  padding: 15px;
}

.footer-mobile-title {
  display: block;
  color: {{colors.footerTitleColor}};
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-mobile-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-mobile-list li {
  padding: 5px 0;
}

.footer-mobile-list li a {
  color: {{colors.footerLinkColor}};
  text-decoration: none;
  font-size: 0.85rem;
}

.certification-mobile,
.responsible-gaming-mobile {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.cert-mobile-img,
.resp-mobile-img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.social-mobile {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.social-mobile-img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}

@media (max-width: 992px) {
  .footer-content-desktop {
    display: none;
  }
  
  .footer-content-mobile {
    display: block;
  }
}`;

  const jsonExample = `{
  "footers": {
    "partners_title": "Our Trusted Partners",
    "games": [
      {
        "text": "Sport",
        "url": "https://s4.winners33slot.online"
      },
      {
        "text": "Live Casino",
        "url": "https://s4.winners33slot.online"
      },
      {
        "text": "Slots",
        "url": "https://s4.winners33slot.online"
      },
      {
        "text": "Fishing",
        "url": "https://s4.winners33slot.online"
      }
    ],
    "info_links": [
      {
        "text": "HomePage",
        "url": "/"
      },
      {
        "text": "About Us",
        "url": "/about-us"
      },
      {
        "text": "Contacts Us",
        "url": "/contact-us"
      },
      {
        "text": "Privacy Policy",
        "url": "/privacy-policy"
      },
      {
        "text": "Responsible Gambling",
        "url": "/responsible-gambling"
      }
    ],
    "certifications": [
      {
        "src": "https://api.infin1x.com/assets/manual_upload/8bB9X2Ev96.png",
        "alt": "BMM Logo",
        "width": "60",
        "height": "36"
      },
      {
        "src": "https://api.infin1x.com/assets/manual_upload/Kzh0Gw9jrb.png",
        "alt": "iTech Labs",
        "width": "50",
        "height": "50"
      },
      {
        "src": "https://api.infin1x.com/assets/manual_upload/PZx8jjmW3e.png",
        "alt": "Gaming International",
        "width": "50",
        "height": "50"
      },
      {
        "src": "https://api.infin1x.com/assets/manual_upload/VzR2IdrZxZ.png",
        "alt": "Payout Review International",
        "width": "90",
        "height": "54"
      },
      {
        "src": "https://api.infin1x.com/assets/manual_upload/whGlCfeMDB.png",
        "alt": "GoDaddy Verified",
        "width": "120",
        "height": "72"
      }
    ],
    "responsible_gaming": [
      {
        "src": "https://api.infin1x.com/assets/manual_upload/8bB9X2Ev96.png",
        "alt": "18+ Only",
        "width": "38",
        "height": "38"
      },
      {
        "src": "https://api.infin1x.com/assets/manual_upload/whGlCfeMDB.png",
        "alt": "Game Care",
        "width": "38",
        "height": "38"
      },
      {
        "src": "https://api.infin1x.com/assets/manual_upload/VzR2IdrZxZ.png",
        "alt": "Be Gamble Aware",
        "width": "38",
        "height": "38"
      }
    ],
    "powered_by_text": "Powered By",
    "copyright_logo": "https://api.infin1x.com/assets/manual_upload/file-1761306388277-439952939.gif",
    "copyright_text": "Copyright Speedpgk33 @ 2025. All rights reserved."
  },
  "vendor_track": [
    {
      "code": "AUDPLAY168",
      "icon": "https://api.infin1x.com/assets/manual_upload/file-1759944896212-770437428.gif",
      "name": "AUDPLAY168",
      "url": ""
    },
    {
      "code": "UNITEDAU",
      "icon": "https://api.infin1x.com/assets/manual_upload/file-1759945498240-899108802.gif",
      "name": "UNITEDAU",
      "url": ""
    },
    {
      "code": "MRPOKIES",
      "icon": "https://api.infin1x.com/assets/manual_upload/file-1759945203759-91444594.gif",
      "name": "MRPOKIES",
      "url": ""
    }
  ],
  "social_share": {
    "enabled": true,
    "items": [
      {
        "platform": "Facebook",
        "url": "https://s4.winners33slot.online",
        "img": "https://api.infin1x.com/assets/manual_upload/A5lNiNWlu3.webp",
        "alt": "Facebook"
      },
      {
        "platform": "Instagram",
        "url": "https://s4.winners33slot.online",
        "img": "https://api.infin1x.com/assets/manual_upload/1czFxY8S5z.webp",
        "alt": "Instagram"
      },
      {
        "platform": "Youtube",
        "url": "https://s4.winners33slot.online",
        "img": "https://api.infin1x.com/assets/manual_upload/a7GUSJkiGG.webp",
        "alt": "Youtube"
      },
      {
        "platform": "X",
        "url": "https://s4.winners33slot.online",
        "img": "https://api.infin1x.com/assets/manual_upload/XzNnPRvIcc.webp",
        "alt": "X"
      }
    ]
  }
}`;

  return (
    <Layout tableOfContents={tableOfContents} sidebarSubtitle="Components">
      <div>
        <div className="main-header">
          <p className="eyebrow">Handlebars · Components</p>
          <h1>Footer</h1>
          <p className="lead">
            Documentation for the Footer component (lines 4721-4882) in the
            all-blog.hbs template. This component provides a comprehensive
            footer with partners, links, certifications, and social media
            integration.
          </p>
        </div>

        <section className="content-section" id="overview">
          <h2>Overview</h2>
          <p>
            The Footer component is a comprehensive site footer that includes
            multiple sections:
          </p>
          <ul
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
          >
            <li>
              <strong>Trusted Partners:</strong> Scrollable horizontal list of
              partner logos
            </li>
            <li>
              <strong>Games Column:</strong> Links to different game categories
            </li>
            <li>
              <strong>Information Column:</strong> Site navigation links
            </li>
            <li>
              <strong>Certification Column:</strong> Display of certification
              badges
            </li>
            <li>
              <strong>Responsible Gaming:</strong> Responsible gaming badges and
              links
            </li>
            <li>
              <strong>Social Media:</strong> Social media icons and links (if
              enabled)
            </li>
            <li>
              <strong>Copyright Section:</strong> Copyright text and logo
            </li>
          </ul>
          <p>
            The footer has separate layouts for desktop and mobile, with the
            mobile version showing a simplified vertical layout.
          </p>
        </section>

        <section className="content-section" id="html-structure">
          <h2>HTML Structure</h2>
          <p>
            The complete HTML template code for the Footer component. This code
            should be placed at the end of your Handlebars template body.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={htmlTemplate} language="handlebars" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              The footer uses Handlebars{" "}
              <code>&#123;&#123;#each&#125;&#125;</code> helpers to loop through
              arrays of games, links, certifications, etc. All content is
              dynamically populated from your JSON data.
            </p>
          </div>
        </section>

        <section className="content-section" id="css-styles">
          <h2>CSS Styles</h2>
          <p>
            Complete CSS styles for the Footer component. These styles create a
            responsive footer with background images, hover effects, and smooth
            transitions.
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
            <li>
              Background image with overlay effect using <code>::before</code>
              pseudo-element
            </li>
            <li>Scrollable partners section with hidden scrollbar</li>
            <li>Flexbox layout for responsive column arrangement</li>
            <li>Hover effects on links, images, and social icons</li>
            <li>Smooth transitions for all interactive elements</li>
          </ul>
        </section>

        <section className="content-section" id="mobile-styles">
          <h2>Mobile Styles</h2>
          <p>
            CSS styles for mobile devices. On screens smaller than 992px, the
            desktop footer is hidden and the mobile version is displayed.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={mobileCss} language="css" />
          </div>
        </section>

        <section className="content-section" id="json-structure">
          <h2>JSON Structure</h2>
          <p>
            The JSON structure required for the Footer component. Include this
            in your template JSON file.
          </p>
          <div style={{ marginTop: "20px" }}>
            <CodeExample code={jsonExample} language="json" />
          </div>
          <div className="callout tip" style={{ marginTop: "24px" }}>
            <span className="callout-label">TIP</span>
            <p>
              The footer requires data from multiple JSON objects:{" "}
              <code>footers</code>, <code>vendor_track</code>, and{" "}
              <code>social_share</code>. Make sure all required fields are
              present in your JSON structure. The{" "}
              <code>social_share.enabled</code> flag controls whether the social
              media section is displayed.
            </p>
          </div>
        </section>

        <section className="content-section" id="complete-example">
          <h2>Complete Example</h2>
          <p>
            A complete working example showing how all the pieces fit together.
            Copy this structure into your template, CSS, and JSON files.
          </p>
          <div className="callout warning" style={{ marginTop: "24px" }}>
            <span className="callout-label">NOTE</span>
            <p>
              The footer uses background images and color variables from your
              theme. Make sure to replace all Handlebars variable placeholders
              (like <code>&#123;&#123;colors.footer_bg&#125;&#125;</code>) with
              actual values or ensure your template engine processes them
              correctly.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
