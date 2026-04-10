import FadeIn from './FadeIn';

const stats = [
  { value: '10+', label: 'Projects delivered' },
  { value: '< 2 weeks', label: 'Average turnaround' },
  { value: 'AI-first', label: 'Development approach' },
];

export default function SocialProof() {
  return (
    <section className="py-24 px-6 border-t border-neutral-800/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-center text-sm text-neutral-500 uppercase tracking-widest mb-12">
            Trusted by growing businesses
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-neutral-100 mb-2">
                  {stat.value}
                </p>
                <p className="text-neutral-500 text-sm">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
