import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import CTAButton from './CTAButton';

export default function MidCTA() {
  return (
    <section className="relative py-20 px-6 border-t border-b border-neutral-800/50 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <p className="text-neutral-400 text-lg md:text-xl mb-3 leading-relaxed">
            Every week without a converting website is{' '}
            <span className="text-red-400 font-medium">money left on the table</span>.
          </p>
          <p className="text-neutral-500 text-sm mb-8">
            Your competitors already have one. How much longer will you wait?
          </p>
          <CTAButton
            label="Claim your free audit &rarr;"
            microcopy="I'll show you exactly what's costing you clients — in 24 hours"
            urgency="Limited availability — first come, first served"
          />
        </FadeIn>
      </div>
    </section>
  );
}
