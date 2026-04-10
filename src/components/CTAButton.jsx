import { CONTACT_EMAIL } from '../data/content';

export default function CTAButton({ label, microcopy, size = 'base', className = '' }) {
  const sizes = {
    base: 'px-10 py-4 text-base',
    lg: 'px-12 py-4.5 text-lg',
  };

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <a
        href={CONTACT_EMAIL}
        className={`group relative inline-flex items-center justify-center bg-accent text-white font-semibold rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] ${sizes[size]}`}
      >
        <span className="relative z-10">{label}</span>
        <span className="absolute inset-0 bg-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
      {microcopy && (
        <p className="text-xs text-neutral-500">{microcopy}</p>
      )}
    </div>
  );
}
