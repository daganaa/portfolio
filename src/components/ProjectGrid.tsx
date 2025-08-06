import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import ProjectCard from './ProjectCard';

type Project = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  link: string;
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;