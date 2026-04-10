import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { StaggerContainer, StaggerItem } from './FadeIn';
import Section from './Section';
import { TESTIMONIALS, ABOUT } from '../data/content';

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-accent/20">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
    </svg>
  );
}

const cardHover = {
  y: -4,
  transition: { type: 'spring', stiffness: 300, damping: 20 },
};

export default function Trust() {
  return (
    <Section id="trust" border>
      {/* About / Personal intro */}
      <div className="mb-20">
        <FadeIn direction="left">
          <div className="flex flex-col md:flex-row items-start gap-8 max-w-3xl">
            <div className="shrink-0">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-accent/20">
                  C
                </div>
                {ABOUT.available && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-neutral-950 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                )}
              </motion.div>
            </div>
            <div>
              <p className="text-sm text-accent uppercase tracking-widest mb-2">About me</p>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-1">
                {ABOUT.name} <span className="text-neutral-500 font-normal text-lg">/ {ABOUT.role}</span>
              </h2>
              <p className="text-sm text-neutral-500 mb-4 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {ABOUT.location}
                {ABOUT.available && (
                  <span className="ml-2 inline-flex items-center gap-1 text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for work
                  </span>
                )}
              </p>
              <p className="text-neutral-400 leading-relaxed">{ABOUT.bio}</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Section header */}
      <FadeIn>
        <p className="text-sm text-accent uppercase tracking-widest mb-4">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4 leading-tight">
          Don't take my word for it.
        </h2>
        <p className="text-neutral-500 text-lg mb-16">
          Worked with startups, agencies, and growing businesses across LATAM and the US.
        </p>
      </FadeIn>

      {/* Testimonial cards */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <StaggerItem key={t.name}>
            <motion.div
              whileHover={cardHover}
              className="group relative flex flex-col h-full p-7 rounded-2xl border border-neutral-800/50 hover:border-accent/20 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(99,102,241,0.06)]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
              >
                <QuoteIcon />
              </motion.div>

              <div className="flex gap-0.5 mt-3 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 15,
                      delay: 0.2 + j * 0.06,
                    }}
                  >
                    <StarIcon />
                  </motion.span>
                ))}
              </div>

              <blockquote className="text-neutral-300 text-[0.938rem] leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-neutral-800/50">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-semibold text-neutral-300 shrink-0"
                >
                  {t.initials}
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-neutral-200">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
