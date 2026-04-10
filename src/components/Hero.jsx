import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.07]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-medium tracking-widest uppercase mb-6"
        >
          AI-Powered Web Development
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-neutral-100 leading-[1.1] mb-6"
        >
          I build high-converting websites{' '}
          <span className="text-accent">powered by AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10"
        >
          Helping startups and businesses launch faster, smarter, and more efficiently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            Book a call
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-neutral-100 font-medium px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            View projects
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-neutral-600 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-neutral-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
