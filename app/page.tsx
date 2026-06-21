import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero';
import CurrentFocusSection from '@/components/current-focus';
import ProjectsSection from '@/components/projects';
import SkillsSection from '@/components/skills';
import ExperienceSection from '@/components/experience';
import EducationSection from '@/components/education';
import ContactSection from '@/components/contact';
import Footer from '@/components/footer';
import LeadershipSection from '@/components/leadership';
import AchievementsSection from '@/components/achievements';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        <CurrentFocusSection />
        <AchievementsSection />
        <EducationSection />
        <ExperienceSection />
        <LeadershipSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
