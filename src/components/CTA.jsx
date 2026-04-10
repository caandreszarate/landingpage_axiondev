import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import CTAButton from './CTAButton';

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_50%,_var(--color-accent)_0%,_transparent_60%)] opacity-0"
        animate={{ opacity: [0, 0.04, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <p className="text-sm text-accent uppercase tracking-widest mb-4">
            Let's build something great
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
            Your next website could be
            <br className="hidden sm:block" />
            <span className="text-accent">live in 2 weeks.</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Every week you wait is a week your competitors are capturing
            the clients you're missing. Let's change that — today.
          </p>
          <CTAButton
            label="Book your free call now &rarr;"
            microcopy="No commitment. No pitch decks. Just results."
            size="lg"
          />
        </FadeIn>
      </div>
    </section>
  );
}
