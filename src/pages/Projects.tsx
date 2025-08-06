import ProjectGrid from '../components/ProjectGrid';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="py-12 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">A selection of my work</p>
      </header>
      <main className="w-full max-w-5xl px-4">
        <ProjectGrid />
      </main>
    </div>
  );
};

export default Projects;