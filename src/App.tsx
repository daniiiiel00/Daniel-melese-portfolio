import { ThemeProvider } from './context/ThemeContext';
import { Cinematic3DWorld } from './components/3d/Cinematic3DWorld';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { ArchitectureBlueprint } from './components/sections/ArchitectureBlueprint';
import { About } from './components/sections/About';
import { ExperienceSection } from './components/sections/Experience';
import { TechStack } from './components/sections/TechStack';
import { ProjectsSection } from './components/sections/Projects';
import { CertificationsSection } from './components/sections/Certifications';
import { ContactSection } from './components/sections/Contact';
import { Footer } from './components/ui/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-500 font-sans">
        {/* Continuous 3D World with Smooth Camera Scroll */}
        <Cinematic3DWorld />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <TechStack />
          <ArchitectureBlueprint />
          <ExperienceSection />
          <ProjectsSection />
          <About />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
