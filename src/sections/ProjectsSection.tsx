import ProjectGrid from '../components/ProjectGrid';

const ProjectsSection = ({ className = '' }: { className?: string }) => (
  <section id="projects" className={`min-h-screen flex flex-col items-center justify-center bg-white ${className}`}>
    <header className="py-12 text-center">
      <h2 className="text-4xl font-extrabold mb-4">projects</h2>
    </header>
    <main className="w-full max-w-5xl px-4">
      <ProjectGrid />
    </main>
  </section>
);

export default ProjectsSection;