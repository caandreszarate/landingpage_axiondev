import { motion } from 'framer-motion';

const shimmer = {
  initial: { backgroundPosition: '200% center' },
  animate: { backgroundPosition: '-200% center' },
};

export default function SectionSkeleton({ lines = 3, variant = 'default' }) {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {variant === 'default' && (
          <>
            {/* Header skeleton */}
            <div className="mb-16">
              <motion.div
                variants={shimmer}
                initial="initial"
                animate="animate"
                transition={{ duration: 2, repeat: Infinity }}
                className="h-3 w-24 rounded-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%] mb-4"
              />
              <motion.div
                variants={shimmer}
                initial="initial"
                animate="animate"
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                className="h-10 w-56 rounded-lg bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%]"
              />
            </div>

            {/* Content lines skeleton */}
            <div className="space-y-3">
              {Array.from({ length: lines }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={shimmer}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 2, repeat: Infinity, delay: 0.1 * (i + 1) }}
                  className="h-4 rounded bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%]"
                  style={{ width: `${90 - i * 15}%` }}
                />
              ))}
            </div>
          </>
        )}

        {variant === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                variants={shimmer}
                initial="initial"
                animate="animate"
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 * i }}
                className="rounded-2xl bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%] h-64"
              />
            ))}
          </div>
        )}

        {variant === 'list' && (
          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <motion.div
                  variants={shimmer}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 2, repeat: Infinity, delay: 0.1 * i }}
                  className="h-6 w-48 rounded bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%]"
                />
                <motion.div
                  variants={shimmer}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 2, repeat: Infinity, delay: 0.15 * i }}
                  className="h-4 rounded bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%] w-full"
                />
                <motion.div
                  variants={shimmer}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 * i }}
                  className="h-4 rounded bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%] w-4/5"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function SocialProofSkeleton() {
  return <SectionSkeleton lines={4} />;
}

export function ServicesSkeleton() {
  return <SectionSkeleton variant="cards" />;
}

export function PortfolioSkeleton() {
  return <SectionSkeleton variant="list" />;
}

export function OffersSkeleton() {
  return <SectionSkeleton variant="cards" />;
}

export function FAQSkeleton() {
  return <SectionSkeleton variant="list" />;
}

export function FooterSkeleton() {
  return (
    <div className="py-8 px-6 border-t border-neutral-800/50">
      <div className="max-w-6xl mx-auto space-y-4">
        <motion.div
          initial={{ backgroundPosition: '200% center' }}
          animate={{ backgroundPosition: '-200% center' }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-4 w-32 rounded bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%]"
        />
        <motion.div
          initial={{ backgroundPosition: '200% center' }}
          animate={{ backgroundPosition: '-200% center' }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
          className="h-4 w-24 rounded bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%]"
        />
      </div>
    </div>
  );
}
