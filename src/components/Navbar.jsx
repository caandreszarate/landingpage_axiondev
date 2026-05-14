import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { CONTENT, CAL_LINK } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { ScrollProgress } from './AnimationUtils';

function LanguageSelector({ lang, onSwitch }) {
  return (
    <div className="flex items-center gap-1 text-xs font-semibold tracking-wide">
      <button
        onClick={() => onSwitch('en')}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          lang === 'en' ? 'text-accent' : 'text-neutral-500 hover:text-neutral-300'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-neutral-700">|</span>
      <button
        onClick={() => onSwitch('es')}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          lang === 'es' ? 'text-accent' : 'text-neutral-500 hover:text-neutral-300'
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
    </div>
  );
}

export default function Navbar() {
  const lang = useLanguage();
  const t = CONTENT[lang].nav;
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate(`/${lang}`);
  };

  const handleLangSwitch = (newLang) => {
    if (newLang === lang) return;
    navigate(`/${newLang}${location.hash}`, { replace: false });
    closeMenu();
  };

  return (
    <>
    <ScrollProgress />
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href={`/${lang}`}
          onClick={handleLogoClick}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-tight text-neutral-100"
        >
          Axion<span className="text-accent">Dev</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {t.links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className={`relative text-sm text-neutral-400 hover:text-neutral-100 transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${link.lgOnly ? 'hidden lg:block' : ''}`}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <LanguageSelector lang={lang} onSwitch={handleLangSwitch} />
          </motion.div>

          <motion.a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="group relative text-sm font-medium bg-accent text-white px-5 py-2 rounded-lg overflow-hidden transition-shadow hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            <span className="relative z-10">{t.cta}</span>
            <span className="absolute inset-0 bg-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-neutral-300 p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-neutral-950/95 backdrop-blur-lg border-b border-neutral-800/50 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {t.links.filter((link) => !link.lgOnly).map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-neutral-300 hover:text-neutral-100 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center justify-between pt-2 border-t border-neutral-800/40">
                <LanguageSelector lang={lang} onSwitch={handleLangSwitch} />
                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="text-sm font-medium bg-accent text-white px-5 py-2 rounded-lg transition-colors"
                >
                  {t.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
