import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './FadeIn';
import FadeIn from './FadeIn';
import Section from './Section';
import { CONTENT, TECH_STACK } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';

export default function SocialProof() {
  const lang = useLanguage();
  const t = CONTENT[lang].socialProof;

  return (
    <Section border>
      <FadeIn>
        <p className="text-center text-sm text-neutral-500 uppercase tracking-widest mb-12">
          {t.tagline}
        </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        {t.stats.map((stat, i) => (
          <StaggerItem key={stat.label}>
            <motion.div
              className="text-center relative group cursor-default"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl font-bold text-neutral-100 mb-2 group-hover:text-accent transition-colors duration-300"
              >
                {stat.value}
              </motion.p>
              <p className="text-neutral-500 text-sm">{stat.label}</p>
              {i < t.stats.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-neutral-700 to-transparent origin-top"
                />
              )}
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn>
        <p className="text-center text-xs text-neutral-600 uppercase tracking-widest mb-6">
          {t.techLabel}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {TECH_STACK.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/40 text-xs font-medium text-neutral-400"
              style={{ borderColor: `${tech.color}20`, color: tech.color }}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
