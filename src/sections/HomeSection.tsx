import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt, FaFolder, FaTools, FaUser, FaEnvelope } from 'react-icons/fa';

const HomeSection = ({ className = '' }: { className?: string }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -60]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);

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
          
          {/* Left Column: Nested 5-column layout */}
          <div className="grid grid-cols-5 gap-6 items-start">
            
            {/* Column 1: Social Icons */}
            <div className="flex flex-col gap-4 pt-2 items-start">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 text-2xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 text-2xl">
                <FaLinkedin />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 text-2xl">
                <FaFileAlt />
              </a>
            </div>

            {/* Column 2–3: Name and Title */}
            <div className="col-span-2">
              <h1 className="text-5xl font-bold text-blue-900 mb-4">nathan thai</h1>
              <p className="text-2xl text-blue-700 mb-8">cs @ boston college</p>
            </div>

            {/* Column 4: Vertical Divider */}
            <div className="h-full w-px bg-gray-300 mx-auto" />

            {/* Column 5: Navigation */}
            <div className="flex flex-col gap-4">
              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaFolder />
                Projects
              </button>

              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1"
                onClick={() => {
                  const el = document.getElementById('skills');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaTools />
                Skills
              </button>

              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1"
                onClick={() => {
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaUser />
                About
              </button>

              <button
                className="flex items-center gap-2 text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-1"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaEnvelope />
                Contact
              </button>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className="flex justify-end mt-12 lg:mt-0">
            <div className="w-60 h-60 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/your-photo.jpg" 
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
