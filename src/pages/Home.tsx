import ProjectGrid from '../components/ProjectGrid';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Your Name</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Modern Portfolio</p>
      </header>
      <main className="w-full max-w-5xl px-4">
        <ProjectGrid />
      </main>
    </div>
  );
};

export default Home;