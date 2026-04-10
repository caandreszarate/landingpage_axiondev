import FadeIn from './FadeIn';
import Section from './Section';
import { HIGHLIGHTS } from '../data/content';

export default function ValueProposition() {
  return (
    <Section border>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div>
            <p className="text-sm text-accent uppercase tracking-widest mb-4">Why me</p>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6">
              Not just another developer
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              I combine design, development, and AI to deliver faster results and better
              performance than traditional agencies.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {HIGHLIGHTS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
