import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import CTAButton from './CTAButton';

export default function MidCTA() {
  return (
    <section className="relative py-20 px-6 border-t border-b border-neutral-800/50 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <p className="text-neutral-400 text-lg md:text-xl mb-8 leading-relaxed">
            Stop waiting months for a website that doesn't convert.{' '}
            <span className="text-neutral-200 font-medium">Get yours in days.</span>
          </p>
          <CTAButton
            label="Let's talk about your project &rarr;"
            microcopy="Get your website in days, not weeks"
          />
        </FadeIn>
      </div>
    </section>
  );
}
