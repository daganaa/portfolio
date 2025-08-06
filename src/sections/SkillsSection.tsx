const frontEndSkills = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'Tailwind', icon: '🌬️' },
  { name: 'Framer Motion', icon: '🎞️' },
];
const backEndSkills = [
  { name: 'Node.js', icon: '🟩' },
  { name: 'Supabase', icon: '🟢' },
  { name: 'Express', icon: '🚂' },
  { name: 'PostgreSQL', icon: '🐘' },
];
const toolsSkills = [
  { name: 'Git', icon: '🔧' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Vercel', icon: '▲' },
];
const SkillGrid = ({ skills }: { skills: { name: string; icon: string }[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {skills.map(skill => (
      <div key={skill.name} className="flex flex-col items-center p-4 rounded-lg bg-white shadow hover:shadow-lg transition">
        <span className="text-3xl mb-2">{skill.icon}</span>
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
      </div>
    ))}
  </div>
);
const SkillsSection = ({ className = '' }: { className?: string }) => (
  <section id="skills" className={`min-h-screen bg-white flex flex-col items-center py-12 ${className}`}>
    <h2 className="text-4xl font-extrabold mb-10">Skills</h2>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">Front End</h3>
        <SkillGrid skills={frontEndSkills} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">Back End</h3>
        <SkillGrid skills={backEndSkills} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">Tools</h3>
        <SkillGrid skills={toolsSkills} />
      </div>
    </div>
  </section>
);
export default SkillsSection;