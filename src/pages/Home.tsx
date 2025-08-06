import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  // Parallax effect for header
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -60]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.header
        className="py-16 text-center"
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Your Name</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Modern Portfolio</p>
      </motion.header>
    </div>
  );
};

export default Home;