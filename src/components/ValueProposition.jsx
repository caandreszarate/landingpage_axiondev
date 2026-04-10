import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { StaggerContainer, StaggerItem } from './FadeIn';
import Section from './Section';
import { HIGHLIGHTS } from '../data/content';

const ICONS = {
  speed: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  quality: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  ai: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  convert: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
};

export default function ValueProposition() {
  return (
    <Section border>
      <div className="mb-16 max-w-3xl">
        <FadeIn direction="left">
          <p className="text-sm text-accent uppercase tracking-widest mb-4">Why AxionDev</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
            Faster than agencies.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              Smarter than freelancers.
            </span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Traditional agencies take months and charge a fortune. Most freelancers
            can't deliver strategy. I use <span className="text-neutral-200 font-medium">AI-powered
            development</span> to give you both — premium quality at startup speed,
            with every decision focused on one thing: <span className="text-neutral-200 font-medium">growing
            your business</span>.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HIGHLIGHTS.map((item) => (
          <StaggerItem key={item.title}>
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative h-full p-6 rounded-2xl border border-neutral-800/50 bg-neutral-900/30 hover:bg-neutral-900/60 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(99,102,241,0.06)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="mt-0.5 p-2.5 rounded-xl bg-accent/10 text-accent shrink-0 transition-colors duration-300 group-hover:bg-accent/20"
                >
                  {ICONS[item.icon]}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-[0.938rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
