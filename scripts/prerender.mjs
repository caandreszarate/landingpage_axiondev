import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const { render } = await import(path.join(root, 'dist-server/entry-server.js'));

// Each built HTML template gets its #root filled with the prerendered app for its route.
// index.html serves "/" and "/en" (Vercel catch-all) — prerender it at "/" (English).
const targets = [
  { file: 'dist/index.html', route: '/' },
  { file: 'dist/index-es.html', route: '/es' },
];

for (const { file, route } of targets) {
  const full = path.join(root, file);
  const template = fs.readFileSync(full, 'utf-8');
  const appHtml = await render(route);
  if (!template.includes('<div id="root"></div>')) {
    throw new Error(`Expected an empty <div id="root"></div> in ${file}`);
  }
  const out = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  fs.writeFileSync(full, out);
  console.log(`prerendered ${route} → ${file} (${(appHtml.length / 1024).toFixed(1)} KB)`);
}
