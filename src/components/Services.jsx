import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Section, { SectionHeader } from './Section';
import { Icon } from './icons';
import { SERVICES } from '../data/content';

export default function Services() {
  return (
    <Section id="services">
      <FadeIn>
        <SectionHeader label="What I do" title="Services" />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
              className="group p-8 rounded-2xl border border-neutral-800/50 hover:border-accent/30 bg-neutral-900/30 hover:bg-neutral-900/60 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(99,102,241,0.08)]"
            >
              <div className="text-accent mb-5 transition-transform duration-300 group-hover:scale-110">
                <Icon name={service.icon} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
