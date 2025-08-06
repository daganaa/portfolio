import { useState } from 'react';

type Project = {
  id?: string;
  name: string;
  description: string;
  image_url?: string;
  link: string;
};

type Props = {
  initial?: Project;
  onSubmit?: (project: Project, file?: File) => void;
};

const AdminForm = ({ initial, onSubmit }: Props) => {
  const [name, setName] = useState(initial?.name || '');
  const [description, setDescription] = useState(initial?.description || '');
  const [link, setLink] = useState(initial?.link || '');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ name, description, link }, file || undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow">
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        required
      />
      <input
        type="url"
        placeholder="Project Link"
        value={link}
        onChange={e => setLink(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={e => setFile(e.target.files?.[0] || null)}
        className="w-full"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold">{initial ? 'Update' : 'Create'} Project</button>
    </form>
  );
};

export default AdminForm;