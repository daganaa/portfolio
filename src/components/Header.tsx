import { useLocation } from 'react-router-dom';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 shadow sticky top-0 z-50 backdrop-blur-md">
      <div className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white cursor-pointer" onClick={() => isLanding ? scrollToSection('home') : window.location.assign('/') }>
        Your Name
      </div>
      <nav className="flex gap-6 items-center">
        <button className="hover:underline bg-transparent" onClick={() => isLanding ? scrollToSection('home') : window.location.assign('/')}>Home</button>
        <button className="hover:underline bg-transparent" onClick={() => isLanding ? scrollToSection('projects') : window.location.assign('/#projects')}>Projects</button>
        <button className="hover:underline bg-transparent" onClick={() => isLanding ? scrollToSection('skills') : window.location.assign('/#skills')}>Skills</button>
        <button className="hover:underline bg-transparent" onClick={() => isLanding ? scrollToSection('about') : window.location.assign('/#about')}>About</button>
      </nav>
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors" onClick={() => isLanding ? scrollToSection('contact') : window.location.assign('/#contact')}>Contact</button>
      </div>
    </header>
  );
};

export default Header;