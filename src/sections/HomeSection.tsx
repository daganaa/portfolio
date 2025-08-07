import { motion, useScroll, useTransform } from 'framer-motion';

const HomeSection = ({ className = '' }: { className?: string }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -60]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center bg-white ${className}`}>
      <motion.div
        className="max-w-4xl mx-auto px-8"
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and Title */}
          <div>
            <h1 className="text-5xl font-bold text-blue-900 mb-4">Nathan Thai</h1>
            <p className="text-2xl text-blue-700 mb-8">placeholder</p>
          </div>
          
          {/* Right side - Navigation Links */}
          <div>
            <nav className="flex flex-col gap-6">
              <button 
                className="text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-2"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </button>
              <button 
                className="text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-2"
                onClick={() => {
                  const el = document.getElementById('skills');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Skills
              </button>
              <button 
                className="text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-2"
                onClick={() => {
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </button>
              <button 
                className="text-left text-xl font-medium text-blue-900 hover:text-blue-600 transition-colors py-2"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;