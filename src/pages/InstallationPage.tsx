import Layout from "../layout/Layout";
import type { TocItem } from "../types/navigation";
import { CodeExample } from "../components/CodeExample";

export default function InstallationPage() {
  const tableOfContents: TocItem[] = [
    { label: "npm or yarn (recommended)", href: "#npm-yarn" },
    { label: "Downloading Handlebars", href: "#downloading" },
    { label: "CDNs", href: "#cdns" },
  ];

  const npmInstallSnippet = `npm install handlebars
# or
yarn add handlebars`;

  const requireSnippet = `const Handlebars = require('handlebars');

const template = Handlebars.compile('Name: {{name}}');
console.log(template({ name: 'Nils' }));`;

  const importSnippet = `import Handlebars from 'handlebars';

const template = Handlebars.compile('Name: {{name}}');
console.log(template({ name: 'Nils' }));`;

  const browserBuildSnippet = `const Handlebars = require('handlebars/dist/cjs/handlebars');`;

  const cdnSnippet = `<!-- Include Handlebars from a CDN -->
<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>

<script>
  // compile the template
  var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
  // execute the compiled template and print the output to the console
  console.log(template({ doesWhat: "rocks!" }));
</script>`;

  return (
    <Layout
      tableOfContents={tableOfContents}
      sidebarSubtitle="Installation & Precompilation"
    >
      <div>
        <div className="main-header">
          <p className="eyebrow">Handlebars · Guide</p>
          <h1>Installation</h1>
          <p className="lead">
            Get Handlebars up and running in your project. Choose the method
            that best fits your setup.
          </p>
        </div>

        <section className="content-section" id="npm-yarn">
          <h2>npm or yarn (recommended)</h2>
          <p>
            The easiest way to add Handlebars to your project is using npm or
            yarn.
          </p>

          <CodeExample code={npmInstallSnippet} language="bash" />

          <p>
            Once installed, you can require Handlebars in your Node.js
            application:
          </p>

          <CodeExample code={requireSnippet} language="js" />

          <p>Or use ES6 imports:</p>

          <CodeExample code={importSnippet} language="js" />

          <div className="callout tip">
            <span className="callout-label">TIP</span>
            <p>
              For browser builds, you can find Handlebars in{" "}
              <code>node_modules/handlebars/dist/</code>. There are several
              other ways to use Handlebars when you target real production
              systems.
            </p>
            <a className="callout-link" href="#integrations">
              Learn more: Integrations
            </a>
          </div>
        </section>

        <section className="content-section" id="downloading">
          <h2>Downloading Handlebars</h2>
          <p>
            You can download Handlebars directly from the npm package or from
            the official Handlebars website.
          </p>

          <p>
            Browser builds are available in the npm package at{" "}
            <code>node_modules/handlebars/dist/</code>. You can use the CommonJS
            build for browser environments:
          </p>

          <CodeExample code={browserBuildSnippet} language="js" />
        </section>

        <section className="content-section" id="cdns">
          <h2>CDNs</h2>
          <p>
            For quick testing or prototyping, you can include Handlebars from a
            CDN directly in your HTML:
          </p>

          <CodeExample code={cdnSnippet} language="html" />

          <div className="callout warning">
            <span className="callout-label">WARNING</span>
            <p>
              This method can be used for small pages and for testing. There are
              several other ways to use Handlebars when you target real
              production systems.
            </p>
            <a className="callout-link" href="#integrations">
              Learn more: Installation
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

