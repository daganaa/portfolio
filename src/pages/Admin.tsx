import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import AdminDashboard from '../components/AdminDashboard';
import AdminForm from '../components/AdminForm';

// Use the same Project type as AdminForm/AdminDashboard
export type Project = {
  id?: string;
  name: string;
  description: string;
  image_url?: string;
  link: string;
};

const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'Sample Project',
    description: 'This is a sample project.',
    image_url: 'https://via.placeholder.com/150',
    link: 'https://example.com',
  },
];

const Admin = () => {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate('/login');
      } else {
        setLoading(false);
      }
    };
    checkSession();
  }, [navigate]);

  const handleEdit = (project: Project) => {
    setEditing(project);
    setShowForm(true);
  };
  const handleDelete = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };
  // Accept file param to match AdminForm signature
  const handleFormSubmit = (project: Project, file?: File) => {
    setShowForm(false);
    setEditing(null);
    // Add or update logic will go here
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Checking authentication...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="w-full max-w-2xl">
        <button onClick={() => { setShowForm(true); setEditing(null); }} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Project</button>
        {showForm && (
          <AdminForm initial={editing || undefined} onSubmit={handleFormSubmit} />
        )}
        <AdminDashboard projects={projects as any} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Admin;