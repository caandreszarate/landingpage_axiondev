import FadeIn from './FadeIn';
import Section, { SectionHeader } from './Section';
import { STEPS } from '../data/content';

export default function Process() {
  return (
    <Section id="process" border>
      <FadeIn>
        <SectionHeader label="How it works" title="Simple process. Fast results." />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.15}>
            <div>
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
    </Section>
  );
}
