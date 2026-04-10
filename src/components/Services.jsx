import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { StaggerContainer, StaggerItem } from './FadeIn';
import Section, { SectionHeader } from './Section';
import { Icon } from './icons';
import { SERVICES } from '../data/content';

const cardHover = {
  y: -6,
  transition: { type: 'spring', stiffness: 300, damping: 20 },
};

export default function Services() {
  return (
    <Section id="services">
      <FadeIn>
        <SectionHeader label="What I do" title="Services" />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <StaggerItem key={service.title}>
            <motion.div
              whileHover={cardHover}
              className="group h-full p-8 rounded-2xl border border-neutral-800/50 hover:border-accent/30 bg-neutral-900/30 hover:bg-neutral-900/60 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(99,102,241,0.08)]"
            >
              <motion.div
                className="text-accent mb-5 origin-center"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                <Icon name={service.icon} />
              </motion.div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
