import FadeIn from './FadeIn';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your goals, audience, and requirements to define the perfect scope.',
  },
  {
    number: '02',
    title: 'Design & Build',
    description: 'I design and develop your project using AI-enhanced workflows for speed and quality.',
  },
  {
    number: '03',
    title: 'Launch',
    description: 'Your project goes live with optimized performance, SEO, and ongoing support.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 border-t border-neutral-800/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm text-accent uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-16">
            Simple process. Fast results.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="relative">
                <span className="text-6xl font-bold text-neutral-800/60 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
