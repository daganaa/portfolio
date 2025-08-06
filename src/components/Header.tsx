import { useLocation } from 'react-router-dom';

function smoothScrollToSection(id: string, duration = 900) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + window.scrollY;
  const change = end - start;
  let startTime: number | null = null;

  function animateScroll(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, start + change * easeInOutQuad(progress));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }
  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  requestAnimationFrame(animateScroll);
}

const Header = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 shadow sticky top-0 z-50 backdrop-blur-md">
      <div className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white cursor-pointer" onClick={() => isLanding ? smoothScrollToSection('home') : window.location.assign('/') }>
        Your Name
      </div>
      <nav className="flex gap-6 items-center">
        <button className="hover:underline bg-transparent" onClick={() => isLanding ? smoothScrollToSection('home') : window.location.assign('/')}>Home</button>
        <button className="hover:underline bg-transparent" onClick={() => isLanding ? smoothScrollToSection('projects') : window.location.assign('/#projects')}>Projects</button>
        <button className="hover:underline bg-transparent" onClick={() => isLanding ? smoothScrollToSection('skills') : window.location.assign('/#skills')}>Skills</button>
        <button className="hover:underline bg-transparent" onClick={() => isLanding ? smoothScrollToSection('about') : window.location.assign('/#about')}>About</button>
      </nav>
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors" onClick={() => isLanding ? smoothScrollToSection('contact') : window.location.assign('/#contact')}>Contact</button>
      </div>
    </header>
  );
};

export default Header;