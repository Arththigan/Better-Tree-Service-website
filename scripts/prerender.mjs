import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const templatePath = path.join(root, "dist", "index.html");
let template = fs.readFileSync(templatePath, "utf8");
const siteUrl = process.env.SITE_URL || "https://bettertreeservice.com";

const stylesheetTag = template.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (stylesheetTag) {
  const stylesheetPath = path.join(root, "dist", stylesheetTag[1].replace(/^\//, ""));
  const stylesheet = fs.readFileSync(stylesheetPath, "utf8");
  template = template.replace(stylesheetTag[0], `<style>${stylesheet}</style>`);
  fs.writeFileSync(templatePath, template);
  fs.unlinkSync(stylesheetPath);
}

const pages = [
  {
    path: "about",
    title: "About Better Tree Service | Local Syracuse Tree Care",
    description: "Learn about Better Tree Service, a local Syracuse tree care company committed to safe work, honest guidance and clean results."
  },
  {
    path: "services",
    title: "Tree Services in Syracuse, NY | Better Tree Service",
    description: "Tree removal, trimming, stump grinding, emergency response and tree health care for Syracuse, NY properties."
  },
  {
    path: "gallery",
    title: "Tree Service Gallery | Better Tree Service Syracuse",
    description: "See professional tree removal, pruning, cleanup and property care work from Better Tree Service in Syracuse, NY."
  },
  {
    path: "contact",
    title: "Contact Better Tree Service | Free Estimate in Syracuse, NY",
    description: "Request a tree service estimate in Syracuse, NY. Call Better Tree Service or send details about your tree removal, trimming or stump project."
  },
  {
    path: "privacy-policy",
    title: "Privacy Policy | Better Tree Service",
    description: "Read the Better Tree Service privacy policy, including how personal information and SMS consent data are collected, used, and protected."
  },
  {
    path: "terms-and-conditions",
    title: "Terms & Conditions | Better Tree Service",
    description: "Read the Better Tree Service website, service, and SMS messaging terms and conditions."
  }
];

for (const page of pages) {
  const outputDir = path.join(root, "dist", page.path);
  fs.mkdirSync(outputDir, { recursive: true });
  const metadata = [
    `<meta name="description" content="${page.description}">`,
    `<link rel="canonical" href="${siteUrl}/${page.path}">`,
    `<meta property="og:title" content="${page.title}">`,
    `<meta property="og:description" content="${page.description}">`,
    `<meta property="og:url" content="${siteUrl}/${page.path}">`,
    `<meta property="og:type" content="website">`
  ].join("");
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
    .replace("</head>", `${metadata}</head>`);
  fs.writeFileSync(path.join(outputDir, "index.html"), html);
}

console.log(`Inlined critical CSS and generated metadata for ${pages.length} routes.`);
