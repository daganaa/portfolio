import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt, FaFolder, FaTools, FaUser, FaEnvelope } from 'react-icons/fa';
import headshot from '../assets/headshot.jpeg';
import resume from '../assets/resume.pdf';

const HomeSection = ({ className = '' }: { className?: string }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -60]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);

  const titles = [
    'cs @ boston college',
    'software engineer',
    'student researcher',
    'ai enthusiast',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % titles.length);
    }, 2500); // change every 2.5 seconds
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center bg-white ${className}`}>
      <motion.div
        className="max-w-7xl w-full px-8"
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Column */}
          <div className="grid grid-cols-7 gap-x-1 items-start">
            {/* Social Icons */}
            <div className="flex flex-col gap-3 pt-1 items-start">
              <a href="https://github.com/daganaa" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 text-2xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/nathanjthai" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 text-2xl">
                <FaLinkedin />
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 text-2xl">
                <FaFileAlt />
              </a>
            </div>

            {/* Name + Cycling Title */}
            <div className="col-span-4">
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
            </div>

            {/* Vertical Divider */}
            <div className="h-full w-px bg-gray-300 mx-auto" />

            {/* Navigation */}
            <div className="flex flex-col gap-4">
              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaFolder size={20}/>
                Projects
              </button>

              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaTools size={20}/>
                Skills
              </button>

              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaUser size={20}/>
                About
              </button>

              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaEnvelope size={20}/>
                Contact
              </button>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className="flex justify-end mt-12 lg:mt-0">
            <div className="w-60 h-60 rounded-lg overflow-hidden shadow-lg">
              <img
                src={headshot}
                alt="Nathan Thai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
