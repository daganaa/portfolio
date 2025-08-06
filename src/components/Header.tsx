import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <div className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white">
        Your Name
      </div>
      <nav className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/skills" className="hover:underline">Skills</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
      </nav>
      <div>
        <Link to="/contact">
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors">Contact</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;