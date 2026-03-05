import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import SkillsSection from "../components/home/SkillSection";
import ProjectsSection from "../components/home/ProjectsSection";
import JourneySection from "../components/home/Journeysection";
import ContactSection from "../components/home/ContactSection";
import ServiceSection from "../components/home/ServiceSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <ServiceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}