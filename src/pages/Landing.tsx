import HomeSection from '../sections/HomeSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';

const Landing = () => (
  <div className="snap-y snap-mandatory h-screen overflow-y-auto bg-white">
    <HomeSection className="snap-start" />
    <ProjectsSection className="snap-start" />
    <SkillsSection className="snap-start" />
    <AboutSection className="snap-start" />
    <ContactSection className="snap-start" />
  </div>
);

export default Landing;