import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { Icon } from './icons';
import { SOCIAL_LINKS } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <FadeIn direction="left">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight text-neutral-100">
              Axion<span className="text-accent">Dev</span>
            </span>
            <span className="text-neutral-700">|</span>
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
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
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
