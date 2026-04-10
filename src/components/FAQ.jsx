import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import { StaggerContainer, StaggerItem } from './FadeIn';
import Section from './Section';
import CTAButton from './CTAButton';
import { FAQ as FAQ_DATA } from '../data/content';

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? 'border-accent/30 bg-accent/[0.03] shadow-[0_4px_30px_rgba(99,102,241,0.06)]'
          : 'border-neutral-800/50 bg-neutral-900/20 hover:border-neutral-700/50'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
      >
        <span className="text-base font-semibold text-neutral-100 leading-snug">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="shrink-0 w-8 h-8 rounded-lg bg-neutral-800/60 flex items-center justify-center text-neutral-400"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6">
              <p className="text-neutral-400 text-[0.938rem] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <Section id="faq" border>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm text-accent uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
              Questions you're probably
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                already thinking.
              </span>
            </h2>
            <p className="text-neutral-400 text-lg">
              If your question isn't here,{' '}
              <a href="#contact" className="text-accent hover:text-accent-light transition-colors underline underline-offset-2">
                just ask
              </a>
              . I reply within 24 hours.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="flex flex-col gap-4">
          {FAQ_DATA.map((item) => (
            <StaggerItem key={item.question}>
              <FAQItem item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <div className="mt-14 text-center">
            <p className="text-neutral-500 text-sm mb-6">
              Still have doubts? Let's clear them in a 5-minute call.
            </p>
            <CTAButton
              label="Book a free call &rarr;"
              microcopy="No commitment. No pitch. Just answers."
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
