import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt, FaFolder, FaTools, FaUser, FaEnvelope } from 'react-icons/fa';
import headshot from '../assets/headshot.jpeg';
import resume from '../assets/resume.pdf';

const HomeSection = ({ className = '' }: { className?: string }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Progress is 0 when the section top hits the top of the viewport,
  // and reaches 1 by the time ~60% of the section has scrolled past.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0%', 'end 60%'],
  });

  // Clamp transforms so values never extrapolate beyond the ranges.
  const socialOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0], { clamp: true });
  const socialScale   = useTransform(scrollYProgress, [0, 0.25], [1, 0.9], { clamp: true });

  const nameOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0], { clamp: true });
  const nameX       = useTransform(scrollYProgress, [0, 0.3], [0, -30], { clamp: true });

  const dividerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0], { clamp: true });
  const dividerScaleY  = useTransform(scrollYProgress, [0, 0.25], [1, 0], { clamp: true });

  const navX       = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, -120, -260, -300], { clamp: true });
  const navY       = useTransform(scrollYProgress, [0, 0.3], [0, -30], { clamp: true });
  const navOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.85], { clamp: true });

  const photoOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0], { clamp: true });
  const photoScale   = useTransform(scrollYProgress, [0, 0.3], [1, 0.9], { clamp: true });
  const photoX       = useTransform(scrollYProgress, [0, 0.3], [0, 40], { clamp: true });

  // Cycling title
  const titles = ['cs @ boston college', 'software engineer', 'student researcher', 'ai enthusiast', 'data scientist', '채재민'];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % titles.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`min-h-screen flex items-center justify-center bg-white ${className}`}
    >
      <motion.div
        className="max-w-7xl w-full px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Column */}
          <div className="grid grid-cols-7 gap-x-1 items-start">
            {/* Social Icons */}
            <motion.div
              className="flex flex-col gap-3 pt-1 items-start"
              style={{
                opacity: socialOpacity,
                scale: socialScale,
                willChange: 'opacity, transform',
              }}
            >
              <a href="https://github.com/daganaa" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 text-2xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/nathanjthai" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 text-2xl">
                <FaLinkedin />
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 text-2xl">
                <FaFileAlt />
              </a>
            </motion.div>

            {/* Name + Cycling Title */}
            <motion.div
              className="col-span-4"
              style={{
                opacity: nameOpacity,
                x: nameX,
                willChange: 'opacity, transform',
              }}
            >
              <h1 className="text-5xl font-bold text-blue-900 mb-4 whitespace-nowrap">nathan thai</h1>

              {/* Animated vertical cycling title */}
              <div className="relative h-8 overflow-hidden mb-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={titles[index]}
                    className="text-2xl text-blue-700 absolute"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {titles[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Vertical Divider */}
            <motion.div
              className="h-full w-px bg-gray-300 mx-auto -ml-1"
              style={{
                opacity: dividerOpacity,
                scaleY: dividerScaleY,
                transformOrigin: 'top',
                willChange: 'opacity, transform',
              }}
            />

            {/* Navigation */}
            <motion.div
              className="flex flex-col gap-4"
              style={{
                x: navX,
                y: navY,
                opacity: navOpacity,
                position: 'relative',
                zIndex: 10,
                willChange: 'opacity, transform',
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1 leading-none"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaFolder className="w-5 h-5 shrink-0" aria-hidden />
                <span>projects</span>
              </button>

              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1 leading-none"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaTools className="w-5 h-5 shrink-0" aria-hidden />
                <span>skills</span>
              </button>

              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1 leading-none"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaUser className="w-5 h-5 shrink-0" aria-hidden />
                <span>about</span>
              </button>

              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1 leading-none"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaEnvelope className="w-5 h-5 shrink-0" aria-hidden />
                <span>contact</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Photo */}
          <motion.div
            className="flex justify-end mt-12 lg:mt-0"
            style={{
              opacity: photoOpacity,
              scale: photoScale,
              x: photoX,
              willChange: 'opacity, transform',
            }}
            transition={{ type: 'tween', duration: 0.4 }}
          >
            <div className="w-60 h-60 rounded-lg overflow-hidden shadow-lg">
              <img
                src={headshot}
                alt="Nathan Thai"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
