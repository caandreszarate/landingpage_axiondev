import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FORMSPREE_ID, CAL_LINK, CONTENT, CONTACT_EMAIL } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';

const ease = [0.22, 1, 0.36, 1];

export default function ContactForm() {
  const lang = useLanguage();
  const t = CONTENT[lang].contactForm;

  const [status, setStatus] = useState('idle');
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');

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
        setProjectType('');
        setBudget('');
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
        <div>
          <p className="text-xs text-neutral-500 mb-2 text-left">{t.projectTypeLabel}</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label={t.projectTypeLabel}>
            {t.projectTypes.map((pt) => (
              <button
                key={pt.value}
                type="button"
                aria-pressed={projectType === pt.value}
                onClick={() => setProjectType(pt.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                  projectType === pt.value
                    ? 'bg-accent border-accent text-white'
                    : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-300'
                }`}
              >
                {pt.label}
              </button>
            ))}
          </div>
          <input type="hidden" name="project_type" value={projectType} />
        </div>

        <div>
          <p className="text-xs text-neutral-500 mb-2 text-left">
            {t.budgetLabel} <span className="text-neutral-600">{t.budgetOptional}</span>
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label={t.budgetLabel}>
            {t.budgets.map((b) => (
              <button
                key={b.value}
                type="button"
                aria-pressed={budget === b.value}
                onClick={() => setBudget(budget === b.value ? '' : b.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                  budget === b.value
                    ? 'bg-accent border-accent text-white'
                    : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-300'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
          <input type="hidden" name="budget" value={budget} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">{t.namePlaceholder}</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t.namePlaceholder}
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
              autoComplete="email"
              placeholder={t.emailPlaceholder}
              className="w-full bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 focus:border-accent focus:ring-1 focus:ring-accent/50 text-neutral-200 text-sm rounded-lg px-4 py-3 outline-none transition-all duration-200 placeholder:text-neutral-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">{t.messagePlaceholder}</label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            placeholder={t.messagePlaceholder}
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
            {status === 'sending' ? t.submitSending : t.submitIdle}
          </span>
          <span className="absolute inset-0 bg-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease }}
            className="mt-6 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 mb-4"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </motion.div>
            <p className="text-lg font-semibold text-emerald-400 mb-1">{t.successTitle}</p>
            <p className="text-sm text-neutral-400 mb-4">{t.successMessage}</p>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:text-accent-light transition-colors underline underline-offset-2"
            >
              {t.successCallLink}
            </a>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="mt-4 text-center text-sm text-red-400"
          >
            {t.errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <p className="mt-4 text-center text-xs text-neutral-600">
        {t.emailLabel}{' '}
        <a href={CONTACT_EMAIL} className="text-neutral-500 hover:text-accent transition-colors underline underline-offset-2">
          {t.emailLinkLabel}
        </a>
      </p>
    </form>
  );
}
