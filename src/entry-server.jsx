import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Writable } from 'node:stream';
import App from './App';

// Build-time render. renderToPipeableStream + onAllReady waits for every Suspense
// boundary (the lazy() sections) to resolve before emitting, so the whole page is in
// the static HTML — no React #419 (incomplete-boundary) errors on hydration, and the
// hero is present for an early FCP/LCP. Decorative components are <ClientOnly>-gated.
export function render(path) {
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _enc, cb) { html += chunk; cb(); },
    });
    sink.on('finish', () => resolve(html));

    const { pipe } = renderToPipeableStream(
      <StaticRouter location={path}>
        <App />
      </StaticRouter>,
      {
        onAllReady() { pipe(sink); },
        onError(err) { reject(err); },
      }
    );
  });
}
