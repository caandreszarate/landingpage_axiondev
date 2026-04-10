import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import FadeIn from './FadeIn';
import { StaggerContainer, StaggerItem } from './FadeIn';
import Section, { SectionHeader } from './Section';
import { STEPS } from '../data/content';

function ConnectorLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'end 0.5'],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px">
      <div className="absolute inset-0 bg-neutral-800/50" />
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent"
      />
    </div>
  );
}

export default function Process() {
  return (
    <Section id="process" border>
      <FadeIn>
        <SectionHeader label="How it works" title="Simple process. Fast results." />
      </FadeIn>

      <div className="relative">
        <ConnectorLine />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.number}>
              <motion.div
                className="relative group text-center md:text-left"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: 0.15 + i * 0.15,
                  }}
                  className="relative inline-flex items-center justify-center w-16 h-16 mb-6"
                >
                  <div className="absolute inset-0 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
                  <span className="relative text-2xl font-bold text-accent">
                    {step.number}
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-accent/0 group-hover:border-accent/30"
                    initial={false}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </motion.div>

                <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
