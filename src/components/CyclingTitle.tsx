import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type CyclingTitleProps = {
  titles: string[];
  intervalMs?: number;
  className?: string;
};

const CyclingTitle = ({ titles, intervalMs = 2500, className = '' }: CyclingTitleProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!titles || titles.length === 0) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % titles.length), intervalMs);
    return () => clearInterval(t);
  }, [titles, intervalMs]);

  return (
    <div className="relative h-8 sm:h-9 overflow-hidden" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={titles[index]}
          className={`absolute left-0 top-0 w-full leading-8 sm:leading-9 ${className}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {titles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default CyclingTitle;


