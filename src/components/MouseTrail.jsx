import { useEffect, useState } from 'react';
import './MouseTrail.css';

export default function MouseTrail() {
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let particleId = 0;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      setParticles((prev) => {
        const newParticles = [
          ...prev,
          {
            id: particleId++,
            x: clientX,
            y: clientY,
            createdAt: Date.now(),
          },
        ];

        return newParticles.filter((p) => Date.now() - p.createdAt < 600);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="mouse-trail-container">
      {particles.map((particle) => {
        const age = Date.now() - particle.createdAt;
        const progress = age / 600;

        return (
          <div
            key={particle.id}
            className="trail-particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: 1 - progress,
              transform: `scale(${1 - progress * 0.5})`,
            }}
          />
        );
      })}
    </div>
  );
}
