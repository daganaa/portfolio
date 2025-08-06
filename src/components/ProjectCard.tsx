import { motion } from 'framer-motion';

type Project = {
  id?: string;
  name: string;
  description: string;
  image_url: string;
  link: string;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    className="rounded-lg shadow-lg bg-white dark:bg-gray-900 overflow-hidden hover:scale-105 transition-transform"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
  >
    <img src={project.image_url} alt={project.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{project.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
      <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  </motion.div>
);

export default ProjectCard;