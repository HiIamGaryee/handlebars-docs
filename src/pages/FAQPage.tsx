import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function FAQPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "CSS Styles", href: "#css-styles" },
    { label: "JavaScript Functionality", href: "#javascript-functionality" },
    { label: "JSON Structure", href: "#json-structure" },
  ];

  const htmlTemplate = `<section id="faq" class="faq" itemscope itemtype="https://schema.org/FAQPage">
  <div class="container">
    <h2 class="faq__title">Frequently Ask Questions</h2>
    <div class="faq-list">
      {{#each faqs.items}}
      <div class="faq__block" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq__question" aria-expanded="false">
          <h3 class="faq__question-text" itemprop="name">{{question}}</h3>
          <span class="faq__chevron" aria-hidden="true"></span>
        </div>
        <div class="faq__answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>{{answer}}</p>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </div>
</section>`;

  const cssStyles = `.faq {
  background-color: {{colors.faqBg}};
  padding: 60px 0;
}

.faq__title {
  font-size: 42px;
  font-weight: 700;
  color: {{colors.faqTitleColor}};
  letter-spacing: -0.5px;
  margin: 0 0 40px 0;
}

.faq-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  align-items: start;
  grid-auto-rows: auto;
}

.faq__block {
  background: {{colors.faqBlockBg}};
  border-radius: 0;
  box-shadow: none;
  overflow: visible;
  border-bottom: 1px solid #e0e0e0;
  align-self: start;
}

.faq__block .faq__question {
  position: relative;
  z-index: 1;
}

.faq__question {
  font-size: 16px;
  border: 0;
  background: {{colors.faqQuestionBg}};
  padding: 20px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  line-height: 1.5;
  color: {{colors.faqQuestionText}};
  border-radius: 0;
  box-shadow: none;
  transition: color 0.3s ease, background 0.3s ease;
}

.faq__question:hover {
  background: {{colors.faqQuestionHoverBg}};
}

.faq__question:hover .faq__question-text { 
  color: {{colors.faqQuestionHoverText}};
}

.faq__question-text {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  flex: 1;
  color: {{colors.faqQuestionText}};
}

.faq__block.active .faq__question {
  background: {{colors.faqQuestionBg}};
}

.faq__block.active .faq__question-text { 
  color: {{colors.faqQuestionHoverText}};
  font-weight: 600;
}

.faq__answer {
  font-size: 15px;
  display: none;
  color: {{colors.faqAnswerText}};
  padding: 0 24px 20px 24px;
  line-height: 1.6;
  background: {{colors.faqBlockBg}};
  width: 100%;
  box-sizing: border-box;
}

.faq__block.active .faq__answer {
  display: block;
  animation: slideDown 0.3s ease;
  will-change: height;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq__chevron {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.faq__block.active .faq__chevron {
  transform: rotate(180deg);
}

.faq__chevron::before {
  content: '';
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid currentColor;
}`;

  const javascriptCode = `function initFAQ() {
  document.querySelectorAll('.faq__question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      // Close others
      document.querySelectorAll('.faq__block').forEach(item => {
        if (item !== faqItem) item.classList.remove('active');
      });
      // Toggle current
      faqItem.classList.toggle('active', !isActive);
      question.setAttribute('aria-expanded', String(!isActive));
    });
  });
}

// Initialize on page load
initFAQ();`;

  const jsonExample = `{
  "faqs": {
    "items": [
      {
        "question": "What is Speedpgk33?",
        "answer": "Speedpgk33 is a trusted guide and resource combining reviews, tips, and updates to help players enjoy pokies safely and responsibly.",
        "icon": "info-circle"
      },
      {
        "question": "Is online gambling legal in Online?",
        "answer": "Online gambling in Online is regulated. Licensed sites can operate legally, and players are advised to choose only licensed platforms for safety.",
        "icon": "gavel"
      },
      {
        "question": "Is Speedpgk33 unbiased?",
        "answer": "Yes. Speedpgk33 is an independent platform. All reviews are written based on transparent evaluation criteria with no hidden influence.",
        "icon": "balance-scale"
      }
    ]
  },
  "colors": {
    "faqBg": "#f5f5f5",
    "faqTitleColor": "#333333",
    "faqBlockBg": "#ffffff",
    "faqQuestionBg": "#ffffff",
    "faqQuestionText": "#555555",
    "faqQuestionHoverBg": "#fafafa",
    "faqQuestionHoverText": "#333333",
    "faqAnswerText": "#666666"
  }
}`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <h1>FAQ Section</h1>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          The FAQ (Frequently Asked Questions) section provides an
          accordion-style interface for displaying questions and answers. Users
          can click on questions to expand and view answers, with smooth
          animations and accessibility features.
        </p>
        <p>
          The component includes Schema.org structured data markup for SEO
          purposes, making it easier for search engines to understand and
          display FAQ content in rich snippets.
        </p>
      </section>

      <section id="html-structure">
        <h2>HTML Structure</h2>
        <p>
          The FAQ section uses semantic HTML with Schema.org microdata. Each FAQ
          item is wrapped in a <code>faq__block</code> div containing a question
          button and an answer div. The chevron icon indicates the
          expand/collapse state.
        </p>
        <CodeExample code={htmlTemplate} language="handlebars" />
      </section>

      <section id="css-styles">
        <h2>CSS Styles</h2>
        <p>
          The CSS provides a clean, modern accordion design with hover effects,
          smooth transitions, and animations. The active state changes the
          question text color and rotates the chevron icon. Colors are
          customizable through the JSON configuration.
        </p>
        <CodeExample code={cssStyles} language="css" />
      </section>

      <section id="javascript-functionality">
        <h2>JavaScript Functionality</h2>
        <p>
          The <code>initFAQ()</code> function adds click event listeners to all
          FAQ questions. When a question is clicked, it toggles the active state
          of its parent block and closes other open FAQ items, ensuring only one
          answer is visible at a time.
        </p>
        <CodeExample code={javascriptCode} language="javascript" />
      </section>

      <section id="json-structure">
        <h2>JSON Structure</h2>
        <p>
          The FAQ section requires an array of items, each containing a question
          and answer. The color scheme can be customized through the{" "}
          <code>colors</code> object in the JSON configuration.
        </p>
        <CodeExample code={jsonExample} language="json" />
        <p>
          <strong>Note:</strong> The <code>icon</code> property is optional and
          can be used for future enhancements or custom styling.
        </p>
      </section>
    </Layout>
  );
}
