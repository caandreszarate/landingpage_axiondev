import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { Icon } from './icons';
import { SOCIAL_LINKS, CAL_LINK, CONTENT } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { trackCalClick } from '../utils/analytics';

export default function Footer() {
  const lang = useLanguage();
  const t = CONTENT[lang].footer;
  const navLinks = CONTENT[lang].nav.links;

  return (
    <footer className="border-t border-neutral-800/50 pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-12 border-b border-neutral-800/50">
            <div>
              <p className="text-lg font-semibold text-neutral-100 mb-1">{t.readyTitle}</p>
              <p className="text-sm text-neutral-500">{t.readySubtitle}</p>
            </div>
            <motion.a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCalClick('footer', lang)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="shrink-0 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3 rounded-lg transition-colors text-sm hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              {t.bookCta}
            </motion.a>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <FadeIn direction="left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-lg font-bold tracking-tight text-neutral-100">
                Axion<span className="text-accent">Dev</span>
              </span>
              <span className="hidden sm:block text-neutral-700">|</span>
              <nav className="flex items-center gap-5">
                {navLinks.filter((link) => !link.lgOnly).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -3, scale: 1.15, color: '#6366f1' }}
                  whileTap={{ scale: 0.95 }}
                  className="text-neutral-500 hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/5"
                >
                  <Icon name={link.icon} />
                </motion.a>
              ))}
              <span className="text-xs text-neutral-600 ml-2">
                © {new Date().getFullYear()} Axion<span className="text-accent">Dev</span>
              </span>
            </div>
          </FadeIn>
        </div>

      </div>
    </footer>
  );
}
