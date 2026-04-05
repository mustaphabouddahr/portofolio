// src/pages/Home.jsx
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PhotographySection } from "@/components/PhotographySection";
import { ContactSection } from "@/components/ContactSection";
import { GitHubStatus } from "../components/GitHubStatus";

export const Home = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <HeroSection />
      <AboutSection />
      <GitHubStatus />
      <ProjectsSection />
      <SkillsSection />
      <PhotographySection />
      <ContactSection />
    </div>
  );
};
