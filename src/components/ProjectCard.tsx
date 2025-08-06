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
    className="rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
  >
    <motion.img
      src={project.image_url}
      alt={project.name}
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    />
    <div className="p-5">
      <h3 className="font-extrabold text-lg mb-2 tracking-tight text-gray-900 dark:text-white">{project.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">{project.description}</p>
      <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  </motion.div>
);

export default ProjectCard;