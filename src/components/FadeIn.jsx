import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const viewport = { once: true, margin: '-60px' };

const transition = {
  duration: 0.7,
  ease: [0.25, 0.1, 0.25, 1],
};

export default function FadeIn({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
