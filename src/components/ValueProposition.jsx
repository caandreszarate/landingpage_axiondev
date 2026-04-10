import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Section from './Section';
import { HIGHLIGHTS } from '../data/content';

const ease = [0.25, 0.1, 0.25, 1];

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
            <FadeIn key={item.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease }}
                className="flex gap-4 group cursor-default"
              >
                <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400">{item.description}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
