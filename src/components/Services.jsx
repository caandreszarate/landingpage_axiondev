import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import FadeIn from './FadeIn';
import { StaggerContainer, StaggerItem } from './FadeIn';
import Section from './Section';
import { Icon } from './icons';
import { SERVICES } from '../data/content';

function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  const smoothRx = useSpring(rotateX, springConfig);
  const smoothRy = useSpring(rotateY, springConfig);

  const handleMouse = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(py * -8);
    rotateY.set(px * 8);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  }, [rotateX, rotateY, glowX, glowY]);

  const handleLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX: smoothRx,
        rotateY: smoothRy,
        transformPerspective: 800,
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  return (
    <Section id="services">
      <div className="mb-16 max-w-3xl">
        <FadeIn>
          <p className="text-sm text-accent uppercase tracking-widest mb-4">What I deliver</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
            Three ways I put
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              money back in your pocket.
            </span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Every service is built around one question:{' '}
            <span className="text-neutral-200 font-medium">will this make or save you money?</span>{' '}
            If the answer isn't yes, I don't build it.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <StaggerItem key={service.title}>
            <TiltCard className="group h-full flex flex-col rounded-2xl border border-neutral-800/50 hover:border-accent/30 bg-neutral-900/20 hover:bg-neutral-900/50 transition-all duration-300 hover:shadow-[0_10px_50px_rgba(99,102,241,0.08)] overflow-hidden">
              <div className="p-8 pb-0 flex-1">
                <motion.div
                  className="text-accent mb-5 origin-center"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon name={service.icon} />
                </motion.div>

                <h3 className="text-xl font-bold text-neutral-100 mb-2">
                  {service.title}
                </h3>

                <p className="text-accent text-sm font-semibold mb-4">
                  {service.outcome}
                </p>

                <p className="text-neutral-400 leading-relaxed text-[0.938rem]">
                  {service.description}
                </p>
              </div>

              <div className="px-8 py-5 mt-6 border-t border-neutral-800/40 bg-neutral-900/40">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400 shrink-0">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span>{service.proof}</span>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
