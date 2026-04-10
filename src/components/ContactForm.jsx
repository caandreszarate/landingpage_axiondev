import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FORMSPREE_ID } from '../data/content';

const ease = [0.22, 1, 0.36, 1];

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const data = new FormData(e.target);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 focus:border-accent focus:ring-1 focus:ring-accent/50 text-neutral-200 text-sm rounded-lg px-4 py-3 outline-none transition-all duration-200 placeholder:text-neutral-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 focus:border-accent focus:ring-1 focus:ring-accent/50 text-neutral-200 text-sm rounded-lg px-4 py-3 outline-none transition-all duration-200 placeholder:text-neutral-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            placeholder="Tell me about your project..."
            className="w-full bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 focus:border-accent focus:ring-1 focus:ring-accent/50 text-neutral-200 text-sm rounded-lg px-4 py-3 outline-none transition-all duration-200 placeholder:text-neutral-600 resize-none"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="group relative w-full bg-accent text-white font-semibold py-3.5 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </span>
          <span className="absolute inset-0 bg-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="mt-4 text-center text-sm text-emerald-400"
          >
            Message sent! I'll get back to you within 24 hours.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="mt-4 text-center text-sm text-red-400"
          >
            Something went wrong. Try emailing me directly.
          </motion.p>
        )}
      </AnimatePresence>

      <p className="mt-4 text-center text-xs text-neutral-600">
        Or reach out directly via{' '}
        <a href="mailto:carlos@axiondev.dev" className="text-neutral-500 hover:text-accent transition-colors underline underline-offset-2">
          email
        </a>
      </p>
    </form>
  );
}
