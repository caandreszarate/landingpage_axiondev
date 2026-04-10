import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import CTAButton from './CTAButton';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/content';

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
          <p className="text-neutral-400 text-lg md:text-xl mb-3 leading-relaxed">
            Every week without a converting website is{' '}
            <span className="text-red-400 font-medium">money left on the table</span>.
          </p>
          <p className="text-neutral-500 text-sm mb-8">
            Your competitors already have one. How much longer will you wait?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              label="Claim your free audit &rarr;"
              microcopy="I'll show you what's costing you clients"
              urgency="Limited availability"
            />
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-2 border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 text-[#25D366] font-medium px-8 py-4 rounded-lg transition-all duration-300 text-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.1)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
