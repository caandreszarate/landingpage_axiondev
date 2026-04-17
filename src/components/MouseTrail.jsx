import { useEffect, useRef, useState } from 'react';
import './MouseTrail.css';

export default function MouseTrail() {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const idRef = useRef(0);

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const [isMobile] = useState(() => window.innerWidth < 768 || isTouch);

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const render = () => {
      const now = Date.now();
      particlesRef.current = particlesRef.current.filter((p) => {
        const age = now - p.createdAt;
        if (age >= 600) {
          p.el.remove();
          return false;
        }
        const progress = age / 600;
        p.el.style.opacity = 1 - progress;
        p.el.style.transform = `translate(-50%, -50%) scale(${1 - progress * 0.5})`;
        return true;
      });
      rafRef.current = requestAnimationFrame(render);
    };

    let lastMove = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMove < 16) return;
      lastMove = now;
      const el = document.createElement('div');
      el.className = 'trail-particle';
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.transform = 'translate(-50%, -50%) scale(1)';
      container.appendChild(el);
      particlesRef.current.push({ id: idRef.current++, el, createdAt: now });
    };

    rafRef.current = requestAnimationFrame(render);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
      particlesRef.current.forEach((p) => p.el.remove());
      particlesRef.current = [];
    };
  }, [isMobile]);

  if (isMobile) return null;

  return <div ref={containerRef} className="mouse-trail-container" />;
}
