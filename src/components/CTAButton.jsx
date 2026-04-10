import { motion } from 'framer-motion';
import { CONTACT_EMAIL } from '../data/content';

export default function CTAButton({ label, microcopy, size = 'base', className = '', urgency, href }) {
  const sizes = {
    base: 'px-10 py-4 text-base',
    lg: 'px-12 py-5 text-lg',
    sm: 'px-8 py-3.5 text-sm',
  };

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
      {urgency && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-xs text-amber-400 font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          {urgency}
        </motion.p>
      )}
      <motion.a
        href={href || CONTACT_EMAIL}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`group relative inline-flex items-center justify-center bg-accent text-white font-semibold rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] ${sizes[size]}`}
      >
        <span className="relative z-10">{label}</span>
        <span className="absolute inset-0 bg-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.a>
      {microcopy && (
        <p className="text-xs text-neutral-500">{microcopy}</p>
      )}
    </div>
  );
}
