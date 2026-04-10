import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import CTAButton from './CTAButton';
import { FloatingParticles } from './AnimationUtils';

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.96]);

  const smoothHeadlineY = useSpring(headlineY, { stiffness: 80, damping: 30 });
  const smoothSubY = useSpring(subY, { stiffness: 80, damping: 30 });
  const smoothBgY = useSpring(bgY, { stiffness: 80, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 80, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 80, damping: 30 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <motion.div
        style={{ y: smoothBgY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_60%)] opacity-[0.06]"
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_35%,_var(--color-accent)_0%,_transparent_70%)] opacity-0"
        animate={{ opacity: [0, 0.06, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <FloatingParticles count={15} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ opacity: smoothOpacity, scale: smoothScale }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <motion.span
            className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full"
            whileHover={{ scale: 1.05, borderColor: 'rgba(99,102,241,0.4)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Taking on 2 new clients this month
          </motion.span>
        </motion.div>

        <motion.div style={{ y: smoothHeadlineY }}>
          <motion.h1
            variants={fadeUp}
            className="text-center text-[2.5rem] sm:text-6xl md:text-[5.5rem] font-bold tracking-tight text-neutral-100 leading-[1.05] mb-8"
          >
            I build websites that
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              bring you clients.
            </span>
            <br />
            <span className="text-neutral-500 text-[0.6em]">Not in months — in days.</span>
          </motion.h1>
        </motion.div>

        <motion.div style={{ y: smoothSubY }}>
          <motion.p
            variants={fadeUp}
            className="text-center text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            For startups and businesses tired of paying agencies $10K+ for
            websites that don't convert. I use AI to build
            <span className="text-neutral-200 font-medium"> revenue-generating sites</span> —
            live, optimized, and bringing in clients in under 14 days.
            Fixed price. Money-back guarantee.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-400 mb-14"
        >
          {['2x average conversion rate', 'Live in under 14 days', '90% cheaper than agencies'].map((text, i) => (
            <motion.span
              key={text}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.12, ease }}
            >
              {CHECK} {text}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={scaleFade}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <CTAButton
            label="Book a free strategy call &rarr;"
            microcopy="Get your website live in days — not months"
            urgency="Only 2 spots left this month"
            size="lg"
          />
          <motion.a
            href="#offers"
            whileHover={{ scale: 1.03, borderColor: 'rgba(163,163,163,0.5)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="inline-flex items-center justify-center border border-neutral-700 text-neutral-300 hover:text-neutral-100 font-medium px-10 py-4 rounded-lg transition-all duration-300 text-base hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]"
          >
            See pricing &amp; packages
          </motion.a>
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
