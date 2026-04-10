import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const ContactForm = lazy(() => import('./ContactForm'));

const ease = [0.22, 1, 0.36, 1];

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_50%,_var(--color-accent)_0%,_transparent_60%)] opacity-0"
        animate={{ opacity: [0, 0.05, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.15em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-sm text-accent uppercase font-medium mb-4"
          >
            Let's build something great
          </motion.p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
            Your next website could be
            <br className="hidden sm:block" />
            <motion.span
              className="text-accent inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              live in 2 weeks.
            </motion.span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-neutral-400 text-lg mb-4 leading-relaxed max-w-xl mx-auto">
            Every week you wait is a week your competitors are capturing
            the clients you're missing. Let's change that — today.
          </p>
          <p className="text-neutral-500 text-sm mb-2">
            Drop me a message and I'll reply within 24 hours.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Suspense>
            <ContactForm />
          </Suspense>
        </FadeIn>
      </div>
    </section>
  );
}
