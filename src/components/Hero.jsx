import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.p
          variants={fadeUp}
          className="text-accent text-sm font-medium tracking-widest uppercase mb-6"
        >
          AI-Powered Web Development
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-neutral-100 leading-[1.1] mb-6"
        >
          I build high-converting websites{' '}
          <span className="text-accent">powered by AI.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10"
        >
          Helping startups and businesses launch faster, smarter, and more efficiently.
        </motion.p>

        <motion.div
          variants={scaleFade}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center bg-accent text-white font-medium px-8 py-3.5 rounded-lg text-base overflow-hidden transition-shadow hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            <span className="relative z-10">Book a call</span>
            <span className="absolute inset-0 bg-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-neutral-100 font-medium px-8 py-3.5 rounded-lg transition-all duration-300 text-base hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]"
          >
            View projects
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
