import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function NewScriptFunctionPage() {
  const tableOfContents: TocItem[] = [
    { label: "Overview", href: "#overview" },
    { label: "HTML Structure", href: "#html-structure" },
    { label: "JavaScript Injection", href: "#javascript-injection" },
    { label: "JSON Structure", href: "#json-structure" },
    { label: "Usage Examples", href: "#usage-examples" },
  ];

  const htmlTemplate = `<!-- Custom Script Function -->
<script id="user-extra-script">
  {{#each new_script_function}} {{{this}}}
  {{/each}}
</script>`;

  const javascriptCode = `// Scripts are injected directly into the <head> section
// Each item in the new_script_function array is executed as raw JavaScript

// Example: The scripts are placed in a <script> tag with id="user-extra-script"
// Multiple scripts can be provided in the array`;

  const jsonExample = `{
  "new_script_function": [
    "console.log('Welcome to our website!');",
    "window.myCustomFunction = function() { console.log('Custom function loaded'); };"
  ]
}`;

  const usageExample = `// Example 1: Simple console log
{
  "new_script_function": [
    "console.log('Page loaded successfully');"
  ]
}

// Example 2: Initialize a third-party library
{
  "new_script_function": [
    "if (typeof gtag !== 'undefined') { gtag('config', 'GA_MEASUREMENT_ID'); }"
  ]
}

// Example 3: Custom initialization
{
  "new_script_function": [
    "(function() { window.myApp = { init: function() { console.log('App initialized'); } }; })();"
  ]
}

// Example 4: Multiple scripts
{
  "new_script_function": [
    "console.log('Script 1 loaded');",
    "console.log('Script 2 loaded');",
    "window.customVar = 'value';"
  ]
}`;

  return (
    <Layout tableOfContents={tableOfContents}>
      <h1>New Script Function</h1>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          The <code>new_script_function</code> allows you to inject custom JavaScript code into the <code>&lt;head&gt;</code> section of your page. This is useful for:
        </p>
        <ul>
          <li>Initializing third-party analytics or tracking scripts</li>
          <li>Setting up global variables or configuration</li>
          <li>Running custom initialization code</li>
          <li>Adding event listeners that need to run early</li>
        </ul>
        <p>
          The scripts are injected as raw JavaScript and executed in the order they appear in the array. Each script in the array is placed within a single <code>&lt;script&gt;</code> tag.
        </p>
      </section>

      <section id="html-structure">
        <h2>HTML Structure</h2>
        <p>
          The script function injects a <code>&lt;script&gt;</code> tag with the ID <code>user-extra-script</code> into the <code>&lt;head&gt;</code> section. Each item in the <code>new_script_function</code> array is concatenated and executed.
        </p>
        <CodeExample code={htmlTemplate} language="handlebars" />
      </section>

      <section id="javascript-injection">
        <h2>JavaScript Injection</h2>
        <p>
          The scripts are injected directly into the document head. They execute immediately when the page loads, before the DOM is fully ready. If you need to wait for the DOM, wrap your code in a <code>DOMContentLoaded</code> event listener.
        </p>
        <CodeExample code={javascriptCode} language="javascript" />
      </section>

      <section id="json-structure">
        <h2>JSON Structure</h2>
        <p>
          The <code>new_script_function</code> is an array of strings, where each string contains JavaScript code. The code is executed as-is, so make sure it's valid JavaScript.
        </p>
        <CodeExample code={jsonExample} language="json" />
      </section>

      <section id="usage-examples">
        <h2>Usage Examples</h2>
        <p>
          Here are some common use cases for the script function:
        </p>
        <CodeExample code={usageExample} language="json" />
        <div style={{ marginTop: "24px", padding: "16px", background: "var(--color-bg-callout-warning)", borderRadius: "8px", border: "1px solid var(--color-border-callout-warning)" }}>
          <p style={{ margin: 0, color: "var(--color-text-callout-warning)", fontSize: "0.9rem" }}>
            <strong>Warning:</strong> Be careful when injecting scripts. Always validate and sanitize any user-provided code to prevent XSS attacks. Only use trusted sources for script content.
          </p>
        </div>
      </section>
    </Layout>
  );
}


