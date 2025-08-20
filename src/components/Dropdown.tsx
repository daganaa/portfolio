import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function smoothScrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const scrollContainer = document.querySelector('.snap-y') as HTMLElement | null;
  if (!scrollContainer) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  // Create a non-null reference for inner closures
  const container: HTMLElement = scrollContainer;

  container.classList.remove('snap-y', 'snap-mandatory');

  const containerRect = container.getBoundingClientRect();
  const elementRect = el.getBoundingClientRect();
  const targetScroll = container.scrollTop + (elementRect.top - containerRect.top);

  const startScroll = container.scrollTop;
  const distance = targetScroll - startScroll;
  const duration = 900;
  let startTime: number | null = null;

  function animate(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const currentScroll = startScroll + (distance * easeProgress);
    container.scrollTop = currentScroll;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        container.classList.add('snap-y', 'snap-mandatory');
      }, 100);
    }
  }

  requestAnimationFrame(animate);
}

const menuVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, when: 'beforeChildren', staggerChildren: 0.05 },
  },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const navItems = [
  { id: 'home', label: 'home' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'about', label: 'about' },
  { id: 'contact', label: 'contact' },
];

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const handleNavigate = (id: string) => {
    setOpen(false);
    if (isLanding) {
      smoothScrollToSection(id);
    } else {
      window.location.assign(`/#${id}`);
    }
  };

  return (
    <div className="fixed top-3 right-4 z-[100]">
      <button
        aria-label="Open menu"
        onClick={() => setOpen((p) => !p)}
        className="w-10 h-10 rounded-md bg-white/90 backdrop-blur border border-gray-200 shadow flex items-center justify-center hover:bg-white transition"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1.5">
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`}></span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/20 backdrop-blur-sm flex items-start justify-center"
            onClick={() => setOpen(false)}
          >
            <motion.div
              key="menu"
              onClick={(e) => e.stopPropagation()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="w-[min(92%,480px)] mt-14 bg-white/95 backdrop-blur border border-gray-200 shadow-xl rounded-lg px-4 py-3"
            >
              <nav className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    className="text-sm sm:text-base font-semibold text-blue-900 hover:text-blue-600 transition-colors"
                    onClick={() => handleNavigate(item.id)}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;


