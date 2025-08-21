import type { ReactElement } from 'react';
import { FaReact, FaFileCode, FaWind, FaFilm, FaPalette, FaNodeJs, FaCloud, FaServer, FaDatabase, FaPython, FaRobot, FaLeaf, FaBug, FaGitAlt, FaCode, FaPaintBrush, FaRocket, FaBolt, FaVuejs } from 'react-icons/fa';

const frontEndSkills = [
  { name: 'react', icon: <FaReact /> },
  { name: 'typescript', icon: <FaFileCode /> },
  { name: 'tailwind', icon: <FaWind /> },
  { name: 'framer', icon: <FaFilm /> },
  { name: 'm-ui', icon: <FaPalette /> },
];
const backEndSkills = [
  { name: 'node', icon: <FaNodeJs /> },
  { name: 'supabase', icon: <FaCloud /> },
  { name: 'express', icon: <FaServer /> },
  { name: 'postgres', icon: <FaDatabase /> },
  { name: 'python', icon: <FaPython /> },
  { name: 'puppeteer', icon: <FaRobot /> },
  { name: 'beautifulsoup', icon: <FaLeaf /> },
  { name: 'selenium', icon: <FaBug /> },
];
const toolsSkills = [
  { name: 'git', icon: <FaGitAlt /> },
  { name: 'vsc', icon: <FaCode /> },
  { name: 'figma', icon: <FaPaintBrush /> },
  { name: 'vercel', icon: <FaRocket /> },
  { name: 'vite', icon: <FaBolt /> },
  { name: 'vue', icon: <FaVuejs /> },
];
const SkillGrid = ({ skills }: { skills: { name: string; icon: ReactElement }[] }) => (
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
    {skills.map(skill => (
      <div key={skill.name} className="flex flex-col items-center justify-center p-4">
        <span className="text-5xl mb-2">{skill.icon}</span>
        <span className="text-xs sm:text-sm font-medium text-gray-700">{skill.name}</span>
      </div>
    ))}
  </div>
);
const SkillsSection = ({ className = '' }: { className?: string }) => (
  <section id="skills" className={`min-h-screen bg-white flex flex-col items-center justify-center py-12 ${className}`}>
    <h2 className="text-4xl font-extrabold mb-10">skills</h2>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">frontend</h3>
        <SkillGrid skills={frontEndSkills} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">backend</h3>
        <SkillGrid skills={backEndSkills} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">tools</h3>
        <SkillGrid skills={toolsSkills} />
      </div>
    </div>
  </section>
);
export default SkillsSection;