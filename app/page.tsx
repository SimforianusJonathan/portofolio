import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero';
import AboutSection from '@/components/about';
import CurrentFocusSection from '@/components/current-focus';
import ProjectsSection from '@/components/projects';
import SkillsSection from '@/components/skills';
import ExperienceSection from '@/components/experience';
import EducationSection from '@/components/education';
import CourseworkSection from '@/components/coursework';
import ContactSection from '@/components/contact';
import Footer from '@/components/footer';
import LeadershipSection from '@/components/leadership';
import AdditionalSkillsSection from '@/components/additional-skills';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <CurrentFocusSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CourseworkSection />
        <LeadershipSection />
        <AdditionalSkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
