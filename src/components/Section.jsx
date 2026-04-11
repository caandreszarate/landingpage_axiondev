export default function Section({ id, children, className = '', border = false }) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-6 ${border ? 'border-t border-neutral-800/50' : ''} ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionHeader({ label, title }) {
  return (
    <>
      <p className="text-sm text-accent uppercase tracking-widest mb-4">{label}</p>
      <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-16">{title}</h2>
    </>
  );
}
