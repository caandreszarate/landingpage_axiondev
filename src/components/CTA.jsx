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
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase border border-amber-400/20 bg-amber-400/5 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Only 2 spots available this month
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
            Stop losing clients to a
            <br className="hidden sm:block" />
            <motion.span
              className="text-accent inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              website that doesn't convert.
            </motion.span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-neutral-400 text-lg mb-3 leading-relaxed max-w-xl mx-auto">
            Every day without a high-converting website is{' '}
            <span className="text-red-400 font-medium">revenue walking out the door</span>.
            Let's fix that this week.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              Free strategy call
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              24h response guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              Money-back guarantee
            </span>
          </div>
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
