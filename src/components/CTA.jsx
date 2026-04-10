import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { CONTACT_EMAIL } from '../data/content';

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
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6">
            Ready to build your next project?
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Let's talk about how I can help you launch faster with AI-powered development.
          </p>
          <a
            href={CONTACT_EMAIL}
            className="group relative inline-flex items-center justify-center bg-accent text-white font-medium px-10 py-4 rounded-lg text-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"
          >
            <span className="relative z-10">Book a call</span>
            <span className="absolute inset-0 bg-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
