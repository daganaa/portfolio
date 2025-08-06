import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import AdminDashboard from '../components/AdminDashboard';
import AdminForm from '../components/AdminForm';

export type Project = {
  id?: string;
  name: string;
  description: string;
  image_url?: string;
  link: string;
};

const Admin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate('/login');
      } else {
        fetchProjects();
      }
    };
    checkSession();
    // eslint-disable-next-line
  }, [navigate]);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (!error && data) setProjects(data);
    setLoading(false);
  };

  const handleEdit = (project: Project) => {
    setEditing(project);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    setSubmitting(true);
    await supabase.from('projects').delete().eq('id', id);
    await fetchProjects();
    setSubmitting(false);
  };

  const uploadImage = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage.from('project-images').upload(fileName, file, { upsert: true });
    if (error) throw error;
    const { data: urlData } = supabase.storage.from('project-images').getPublicUrl(data.path);
    return urlData.publicUrl;
  };

  const handleFormSubmit = async (project: Project, file?: File) => {
    setSubmitting(true);
    let imageUrl = project.image_url;
    if (file) {
      imageUrl = await uploadImage(file);
    }
    if (editing && editing.id) {
      // Update
      await supabase.from('projects').update({
        name: project.name,
        description: project.description,
        link: project.link,
        image_url: imageUrl,
      }).eq('id', editing.id);
    } else {
      // Create
      await supabase.from('projects').insert({
        name: project.name,
        description: project.description,
        link: project.link,
        image_url: imageUrl,
      });
    }
    setShowForm(false);
    setEditing(null);
    await fetchProjects();
    setSubmitting(false);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading projects...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="w-full max-w-2xl">
        <button onClick={() => { setShowForm(true); setEditing(null); }} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Project</button>
        {showForm && (
          <AdminForm initial={editing || undefined} onSubmit={handleFormSubmit} />
        )}
        {submitting && <div className="mb-2 text-blue-600">Processing...</div>}
        <AdminDashboard projects={projects as any} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Admin;