import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import './index.css';

// #root is prerendered at build time (scripts/prerender.mjs). Defer hydration until
// the browser is idle so it paints the prerendered hero first (fast FCP/LCP) instead
// of blocking the first paint behind the bundle's parse + hydration work. The page is
// fully readable and its links work as plain HTML during this short window.
function hydrate() {
  hydrateRoot(
    document.getElementById('root'),
    <StrictMode>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </StrictMode>
  );
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(hydrate, { timeout: 1800 });
} else {
  setTimeout(hydrate, 1);
}
