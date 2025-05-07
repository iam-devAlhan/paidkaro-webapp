import Navbar from "../landing/navbar";
import AboutSection from "./about_section";
import BrandSection from "./brand_section";
import Footer from "./footer";
import ReviewSection from "./review_section";
import SkillSection from "./skill_section";

export default function LandingPage() {
  return (
    <>
      <header><Navbar /></header>
      <main>
        <BrandSection />
        <AboutSection />
        <SkillSection />
        <ReviewSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
