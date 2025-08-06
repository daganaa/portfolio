type Project = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  link: string;
};

type Props = {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
};

const AdminDashboard = ({ projects, onEdit, onDelete }: Props) => (
  <div className="space-y-4">
    {projects.map(project => (
      <div key={project.id} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded shadow">
        <img src={project.image_url} alt={project.name} className="w-16 h-16 object-cover rounded mr-4" />
        <div className="flex-1">
          <h4 className="font-bold">{project.name}</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
        </div>
        <button onClick={() => onEdit(project)} className="mr-2 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
        <button onClick={() => onDelete(project.id)} className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    ))}
  </div>
);

export default AdminDashboard;