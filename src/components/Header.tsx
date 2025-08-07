import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function smoothScrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) {
    console.log('Element not found:', id);
    return;
  }
  
  // Get the scroll container
  const scrollContainer = document.querySelector('.snap-y');
  if (!scrollContainer) {
    console.log('Scroll container not found');
    return;
  }
  
  // Temporarily disable scroll snapping
  scrollContainer.classList.remove('snap-y', 'snap-mandatory');
  
  // Calculate the target scroll position
  const containerRect = scrollContainer.getBoundingClientRect();
  const elementRect = el.getBoundingClientRect();
  const targetScroll = scrollContainer.scrollTop + (elementRect.top - containerRect.top);
  
  // Custom smooth acceleration/deceleration animation
  const startScroll = scrollContainer.scrollTop;
  const distance = targetScroll - startScroll;
  const duration = 1500; // 1.5 seconds for smoother motion
  let startTime: number | null = null;
  
  function animate(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Smooth acceleration and deceleration curve
    // This creates a bell curve: starts slow, accelerates, then decelerates
    const easeProgress = progress < 0.5 
      ? 2 * progress * progress // Accelerate (quadratic)
      : 1 - Math.pow(-2 * progress + 2, 2) / 2; // Decelerate (quadratic)
    
    const currentScroll = startScroll + (distance * easeProgress);
    
    if (scrollContainer) {
      scrollContainer.scrollTop = currentScroll;
    }
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Re-enable scroll snapping after animation
      setTimeout(() => {
        if (scrollContainer) {
          scrollContainer.classList.add('snap-y', 'snap-mandatory');
        }
      }, 100);
    }
  }
  
  requestAnimationFrame(animate);
}

const Header = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isLanding) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollContainer = document.querySelector('.snap-y');
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop;
        // Show header when scrolled down more than 100px (not on HomeSection)
        setIsVisible(scrollTop > 100);
      }
    };

    const scrollContainer = document.querySelector('.snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [isLanding]);

  if (!isVisible) return null;

  return (
    <header className="fixed left-0 top-0 h-full w-16 bg-gray-300 shadow z-50 transition-opacity duration-300 flex flex-col p-3">
      <div className="font-extrabold text-sm tracking-tight text-gray-900 cursor-pointer mb-6 text-center" onClick={() => isLanding ? smoothScrollToSection('home') : window.location.assign('/') }>
        NT
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <nav className="flex flex-col gap-6 items-center">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" onClick={() => isLanding ? smoothScrollToSection('projects') : window.location.assign('/#projects')}>📁</button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" onClick={() => isLanding ? smoothScrollToSection('skills') : window.location.assign('/#skills')}>⚡</button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" onClick={() => isLanding ? smoothScrollToSection('about') : window.location.assign('/#about')}>👤</button>
        </nav>
      </div>
      
      <div>
        <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors mx-auto" onClick={() => isLanding ? smoothScrollToSection('contact') : window.location.assign('/#contact')}>✉️</button>
      </div>
    </header>
  );
};

export default Header;