import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Section, { SectionHeader } from './Section';
import { STEPS } from '../data/content';

const ease = [0.25, 0.1, 0.25, 1];

const numberVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Process() {
  return (
    <Section id="process" border>
      <FadeIn>
        <SectionHeader label="How it works" title="Simple process. Fast results." />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.15}>
            <div className="relative">
              <motion.span
                variants={numberVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease }}
                className="text-6xl font-bold text-neutral-800/60 mb-4 block"
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
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-neutral-700 to-transparent" />
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
