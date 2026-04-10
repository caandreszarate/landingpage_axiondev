import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.07]" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_40%,_var(--color-accent)_0%,_transparent_70%)] opacity-0"
        animate={{ opacity: [0, 0.05, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-neutral-500 text-base md:text-lg font-medium uppercase tracking-wide mb-5"
        >
          Your website is losing you clients. Let's fix that.
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl md:text-[5.2rem] font-bold tracking-tight text-neutral-100 leading-[1.05] mb-8"
        >
          I build websites that{' '}
          <span className="text-accent">generate clients</span>
          <br className="hidden sm:block" />
          — not just look good.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          AI-powered development that launches in{' '}
          <span className="text-neutral-200 font-semibold">days, not months</span>.
          Designed to convert visitors into paying customers.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-500 mb-12"
        >
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent"><path d="M20 6L9 17l-5-5" /></svg>
            10+ projects shipped
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent"><path d="M20 6L9 17l-5-5" /></svg>
            Under 2-week delivery
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent"><path d="M20 6L9 17l-5-5" /></svg>
            AI-first workflow
          </span>
        </motion.div>

        <motion.div
          variants={scaleFade}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center bg-accent text-white font-semibold px-10 py-4 rounded-lg text-base overflow-hidden transition-shadow hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"
          >
            <span className="relative z-10">Start your project &rarr;</span>
            <span className="absolute inset-0 bg-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-neutral-100 font-medium px-10 py-4 rounded-lg transition-all duration-300 text-base hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]"
          >
            See my work
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
