'use client';

import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import MiscSection from './sections/MiscSection';
import ContactSection from './sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <section id="home" className="scroll-mt-24 min-h-screen p-8">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4">Scroll or use the nav above to explore.</p>
      </section>
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <MiscSection />
      <ContactSection />
    </>
  );
}
