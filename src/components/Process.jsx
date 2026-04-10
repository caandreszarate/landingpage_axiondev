import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { StaggerContainer, StaggerItem } from './FadeIn';
import Section, { SectionHeader } from './Section';
import { STEPS } from '../data/content';

export default function Process() {
  return (
    <Section id="process" border>
      <FadeIn>
        <SectionHeader label="How it works" title="Simple process. Fast results." />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((step, i) => (
          <StaggerItem key={step.number}>
            <div className="relative group">
              <motion.span
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: 0.15 + i * 0.15,
                }}
                className="text-6xl font-bold text-neutral-800/60 mb-4 block transition-colors duration-500 group-hover:text-accent/30"
              >
                {step.number}
              </motion.span>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {step.description}
              </p>
              {i < STEPS.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-neutral-600 to-transparent origin-left"
                />
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
