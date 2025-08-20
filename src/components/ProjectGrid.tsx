import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  link: string;
};

const gridVariants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  hidden: {},
};

const ProjectGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (!error && data) setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) return <div className="text-center py-8">Loading projects...</div>;

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-8"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {displayedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
      {projects.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => setShowAll(prev => !prev)}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            {showAll ? 'Show less' : 'Show more'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;