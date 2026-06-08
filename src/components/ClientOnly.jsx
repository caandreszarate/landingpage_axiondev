import { useEffect, useState } from 'react';

/**
 * Renders children only after mount (client-side). During SSR/prerender and the
 * first hydration pass it renders nothing, so:
 *  - components that touch window/navigator/canvas at render time can't crash the
 *    prerender, and
 *  - there's no hydration mismatch from non-deterministic content (random positions).
 * Bonus: keeps decorative work off the critical path (Sprint 12 perf, phase 2).
 */
export default function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? children : null;
}
