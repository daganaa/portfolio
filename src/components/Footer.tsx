import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const Footer = () => (
  <footer className="border-t bg-white">
    <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
      <span className="text-xs md:text-sm text-gray-600">created by nathan thai</span>
      <div className="flex items-center gap-4 text-blue-900">
        <a href="https://github.com/daganaa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/nathanjthai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl">
          <FaLinkedin />
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl">
          <FaFileAlt />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;


