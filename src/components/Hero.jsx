import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease } },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(4px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease } },
};

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_60%)] opacity-[0.06]" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_35%,_var(--color-accent)_0%,_transparent_70%)] opacity-0"
        animate={{ opacity: [0, 0.06, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Taking on 2 new clients this month
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-center text-[2.5rem] sm:text-6xl md:text-[5.5rem] font-bold tracking-tight text-neutral-100 leading-[1.05] mb-8"
        >
          Your next website
          <br />
          will bring you clients
          <br />
          <span className="text-accent">in days, not months.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-center text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I use AI to build, ship, and optimize websites that
          <span className="text-neutral-200 font-medium"> turn visitors into revenue</span>.
          No bloated timelines. No agency overhead. Just a site that
          works as hard as you do — live and converting in under 14 days.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-400 mb-14"
        >
          <span className="flex items-center gap-2">{CHECK} 2x average conversion rate</span>
          <span className="flex items-center gap-2">{CHECK} Live in under 14 days</span>
          <span className="flex items-center gap-2">{CHECK} 90% cheaper than agencies</span>
        </motion.div>

        <motion.div
          variants={scaleFade}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <CTAButton
            label="Get my free website audit &rarr;"
            microcopy="I'll review your site and show you what's costing you clients"
          />
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-neutral-100 font-medium px-10 py-4 rounded-lg transition-all duration-300 text-base hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]"
          >
            See results
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-neutral-600 rounded-full flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="w-1 h-2 bg-neutral-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
