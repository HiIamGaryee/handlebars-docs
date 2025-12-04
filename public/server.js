const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const hbs = require("handlebars");

const ROOT = __dirname;
const TPL_FILE = path.join(ROOT, "templates", "main.hbs");
const BLOG_FILE = path.join(ROOT, "templates", "blog.hbs");
const DATA_FILE = path.join(ROOT, "data", "page.json");
const ADMIN_FILE = path.join(ROOT, "public", "admin.html");
const ADMIN_CHANGE_FILE = path.join(ROOT, "templates", "admin-change.hbs");
const SPINWHEEL_PARTIAL = path.join(
  ROOT,
  "templates",
  "partials",
  "spinwheel.hbs"
);
const PUBLIC_DIR = path.join(ROOT, "public");

const send = (res, code, type, body) =>
  res.writeHead(code, { "Content-Type": type }).end(body);

// Register spinwheel partial
(async () => {
  const spinwheelSrc = await fs.readFile(SPINWHEEL_PARTIAL, "utf8");
  hbs.registerPartial("spinwheel", spinwheelSrc);
})();

// Helper to flatten JSON for form fields
function flatten(obj, prefix = "", res = {}) {
  for (const key in obj) {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flatten(obj[key], prefix ? prefix + "." + key : key, res);
    } else if (Array.isArray(obj[key])) {
      obj[key].forEach((item, idx) => {
        if (typeof item === "object" && item !== null) {
          flatten(item, (prefix ? prefix + "." : "") + key + "." + idx, res);
        } else {
          res[(prefix ? prefix + "." : "") + key + "." + idx] = item;
        }
      });
    } else {
      res[prefix ? prefix + "." + key : key] = obj[key];
    }
  }
  return res;
}

// Helper to unflatten form data back to nested JSON
function unflatten(data) {
  const result = {};
  for (const flatKey in data) {
    const value = data[flatKey];
    const keys = flatKey.split(".");
    let cur = result;
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const isArrayIdx = /^\d+$/.test(keys[i + 1]);
      if (i === keys.length - 1) {
        cur[k] = value;
      } else {
        if (!cur[k]) cur[k] = isArrayIdx ? [] : {};
        cur = cur[k];
      }
    }
  }
  return result;
}

// Register Handlebars helper for flattening
hbs.registerHelper("eachFlat", function (context, options) {
  const flat = flatten(context);
  let out = "";
  for (const key in flat) {
    out += options.fn(flat[key], { data: { key } });
  }
  return out;
});

// Register JSON helper for JavaScript output
hbs.registerHelper("json", function (context) {
  return JSON.stringify(context);
});

// Register comparison helpers
hbs.registerHelper("lt", function (a, b) {
  return a < b;
});

hbs.registerHelper("lte", function (a, b) {
  return a <= b;
});

hbs.registerHelper("eq", function (a, b) {
  return a === b;
});

const render = async () => {
  const [tplSrc, dataSrc] = await Promise.all([
    fs.readFile(TPL_FILE, "utf8"),
    fs.readFile(DATA_FILE, "utf8"),
  ]);
  return hbs.compile(tplSrc)(JSON.parse(dataSrc));
};

const renderBlog = async (item) => {
  const tplSrc = await fs.readFile(BLOG_FILE, "utf8");
  return hbs.compile(tplSrc)({ item });
};

// Utility: check if a file exists
async function fileExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

// Find a template for a given slug in known template directories
async function findTemplateForSlug(slug) {
  const candidates = [

    { section: "subpages", dir: path.join(ROOT, "templates", "subpages") },
    { section: "subpage", dir: path.join(ROOT, "templates", "subpage") },
    { section: "content", dir: path.join(ROOT, "templates", "content") },
    { section: "games", dir: path.join(ROOT, "templates", "games") },
  ];

  for (const c of candidates) {
    const tplPath = path.join(c.dir, `${slug}.hbs`);
    if (await fileExists(tplPath)) {
      return { section: c.section, tplPath };
    }
  }
  return null;
}

// Load base page data and merge with optional section-specific JSON for the slug
async function loadPageData(section, slug) {
  const base = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
  let extra = {};

  const sectionDir = path.join(ROOT, "data", section);
  const jsonPath = path.join(sectionDir, `${slug}.json`);
  if (await fileExists(jsonPath)) {
    try {
      extra = JSON.parse(await fs.readFile(jsonPath, "utf8"));
    } catch {}
  }

  // expose extra under both `page` and `item` for template flexibility
  return { ...base, page: extra, item: extra };
}

// Create server with proper error handling
const server = http.createServer(async (req, res) => {
  // Serve images and static files
  if (req.method === "GET" && req.url.startsWith("/images/")) {
    const imgPath = path.join(PUBLIC_DIR, req.url);
    try {
      const img = await fs.readFile(imgPath);
      const ext = path.extname(imgPath).toLowerCase();
      const type =
        ext === ".jpg" || ext === ".jpeg"
          ? "image/jpeg"
          : ext === ".png"
          ? "image/png"
          : "application/octet-stream";
      return send(res, 200, type, img);
    } catch {
      return send(res, 404, "text/plain", "Image not found");
    }
  }

  // Home page
  if (req.method === "GET" && req.url === "/") {
    return send(res, 200, "text/html", await render());
  }

  // Blog index page: /blog or /blog/
  if (req.method === "GET" && (req.url === "/blog" || req.url === "/blog/")) {
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    const tplSrc = await fs.readFile(
      path.join(ROOT, "templates", "all-blog.hbs"),
      "utf8"
    );
    return send(res, 200, "text/html", hbs.compile(tplSrc)(data));
  }

// Blog page: /blog/:slug
if (req.method === 'GET' && req.url.startsWith('/blog')) {
  const data  = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
  const safe  = JSON.stringify(data).replace(/</g, '\\u003c');   // escape </script>
  const html  = await fs.readFile(
    path.join(ROOT, 'templates', 'blog.hbs'),               // <- can also point to blog.hbs; both now identical at bottom
    'utf8'
  );
  return send(res, 200, 'text/html', hbs.compile(html)({ ...data, dataJSON: safe }));
}


  // Admin UI
  if (req.method === "GET" && req.url === "/admin") {
    return send(res, 200, "text/html", await fs.readFile(ADMIN_FILE, "utf8"));
  }

  // Admin Change UI
  if (req.method === "GET" && req.url === "/admin-change") {
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    const tplSrc = await fs.readFile(ADMIN_CHANGE_FILE, "utf8");
    return send(res, 200, "text/html", hbs.compile(tplSrc)(data));
  }

  if (req.method === "POST" && req.url === "/admin-change") {
    let raw = "";
    req
      .on("data", (c) => (raw += c))
      .on("end", async () => {
        const params = new URLSearchParams(raw);
        const obj = {};
        for (const [k, v] of params.entries()) obj[k] = v;
        const newData = unflatten(obj);
        await fs.writeFile(DATA_FILE, JSON.stringify(newData, null, 2));
        send(res, 200, "text/plain", "saved");
      });
    return;
  }

  // Save edited template
  if (req.method === "POST" && req.url === "/save") {
    let raw = "";
    req
      .on("data", (c) => (raw += c))
      .on("end", async () => {
        const { template } = JSON.parse(raw || "{}");
        await fs.writeFile(TPL_FILE, template);
        send(res, 200, "text/plain", "saved");
      });
    return;
  }

  // Privacy Policy page
  if (req.method === "GET" && req.url === "/privacy-policy") {
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    const tplSrc = await fs.readFile(
      path.join(ROOT, "templates", "policy.hbs"),
      "utf8"
    );
    return send(res, 200, "text/html", hbs.compile(tplSrc)(data));
  }

  // Alias: /policy → /privacy-policy (render same template)
  if (req.method === "GET" && req.url === "/policy") {
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    const tplSrc = await fs.readFile(
      path.join(ROOT, "templates", "policy.hbs"),
      "utf8"
    );
    return send(res, 200, "text/html", hbs.compile(tplSrc)(data));
  }
  // Alias: /all-review → /all-review (render same template)
  if (req.method === "GET" && req.url === "/all-review") {
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    const tplSrc = await fs.readFile(
      path.join(ROOT, "templates", "all-review.hbs"),
      "utf8"
    );
    return send(res, 200, "text/html", hbs.compile(tplSrc)(data));
  }

  // Terms and Conditions page
  if (req.method === "GET" && req.url === "/terms-and-conditions") {
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    const tplSrc = await fs.readFile(
      path.join(ROOT, "templates", "terms-and-conditions.hbs"),
      "utf8"
    );
    return send(res, 200, "text/html", hbs.compile(tplSrc)(data));
  }

  // Ausfreepokies Portal page
  if (req.method === "GET" && req.url === "/Ausfreepokies") {
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    const tplSrc = await fs.readFile(
      path.join(ROOT, "templates", "Ausfreepokies.hbs"),
      "utf8"
    );
    return send(res, 200, "text/html", hbs.compile(tplSrc)(data));
  }

  // About Us page
  if (req.method === "GET" && req.url === "/about-us") {
    const dataPath = path.join(ROOT, "data", "subpages", "about-us.json");
    const tplPath = path.join(ROOT, "templates", "subpages", "about-us.hbs");
    
    try {
      const data = JSON.parse(await fs.readFile(dataPath, "utf8"));
      const tplSrc = await fs.readFile(tplPath, "utf8");
      return send(res, 200, "text/html", hbs.compile(tplSrc)(data));
    } catch (error) {
      console.error("Error loading about-us page:", error);
      return send(res, 500, "text/plain", "Error loading About Us page");
    }
  }

  // Generic content pages by slug, e.g. /top-free-pokies-australia
  if (req.method === "GET") {
    const { pathname } = new URL(req.url, "http://localhost");

    // Skip paths that are handled above or are asset-like
    if (
      pathname !== "/" &&
      !pathname.startsWith("/images/") &&
      !pathname.startsWith("/assets/") &&
      !pathname.startsWith("/admin") &&
      !pathname.startsWith("/blog")
    ) {
      const slugMatch = pathname.match(/^\/(?:([a-z0-9\-]+))\/?$/);
      if (slugMatch) {
        const slug = slugMatch[1];
        const found = await findTemplateForSlug(slug);
        if (found) {
          const tplSrc = await fs.readFile(found.tplPath, "utf8");
          const data = await loadPageData(found.section, slug);
          return send(res, 200, "text/html", hbs.compile(tplSrc)(data));
        }
      }
    }
  }

  // 404 fallback
  send(res, 404, "text/plain", "Not found");
});

// Handle server errors gracefully
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(
      "⚠️  Port 3000 is already in use. Trying to kill existing process..."
    );
    // Try to kill any existing process on port 3000
    require("child_process").exec("lsof -ti:3000 | xargs kill -9", (error) => {
      if (error) {
        console.log(
          "❌ Could not kill existing process. Please manually stop any running server."
        );
        console.log('💡 Try: pkill -f "node server.js" or killall node');
        process.exit(1);
      } else {
        console.log("✅ Killed existing process. Restarting server...");
        setTimeout(() => {
          server.listen(3000, () => {
            console.log("📡  http://localhost:3000   (admin → /admin)");
          });
        }, 1000);
      }
    });
  } else {
    console.error("Server error:", err);
    process.exit(1);
  }
});

// Graceful shutdown handling
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server gracefully...");
  server.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  console.log("\n🛑 Shutting down server gracefully...");
  server.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });
});

// Start the server
server.listen(3000, () => {
  console.log("📡  http://localhost:3000   (admin → /admin)");
});
