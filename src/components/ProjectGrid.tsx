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

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (!error && data) setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) return <div className="text-center py-8">Loading projects...</div>;

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectGrid;