import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Section from './Section';
import { STATS } from '../data/content';

const ease = [0.25, 0.1, 0.25, 1];

const counterVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
};

export default function SocialProof() {
  return (
    <Section border>
      <FadeIn>
        <p className="text-center text-sm text-neutral-500 uppercase tracking-widest mb-12">
          Trusted by growing businesses
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <motion.p
                variants={counterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease }}
                className="text-3xl md:text-4xl font-bold text-neutral-100 mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-neutral-500 text-sm">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
