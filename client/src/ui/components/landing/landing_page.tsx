import Navbar from "../landing/navbar";
import AboutSection from "./about_section";
import BrandSection from "./brand_section";
import SkillSection from "./skill_section";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <BrandSection />
        <AboutSection />
        <SkillSection />
      </main>
    </>
  );
}
