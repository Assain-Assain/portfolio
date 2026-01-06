import { useI18n } from "../i18n/i18n";
import About from "../sections/About";
import FeaturedProjects from "../sections/FeaturedProjects";
import SkillsGrid from "../sections/SkillsGrid";
import HomeContactus from "./HomeContactus";
import AnimatedSection from "../components/AnimatedSection"; // import wrapper

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <AnimatedSection>
        <section className="hero">
          <div className="hero-content">
            <h1>{t("home.hello")}</h1>
            <h2 className="typing">{t("home.ftd")}</h2>
            <p className="lead">{t("home.ftd_dis")}</p>
            <div className="hero-actions">
              <a href="/projects" className="btn primary">{t("home.v_project")}</a>
              <a href="/resume" className="btn secondary">{t("home.d_resume")}</a>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="/assets/WhatsApp_Image_2025-10-15_at_1.30.31_PM-removebg-preview.png"
              alt="Assain profile"
            />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><SkillsGrid /></AnimatedSection>
      <AnimatedSection><FeaturedProjects /></AnimatedSection>
      <AnimatedSection><HomeContactus /></AnimatedSection>
    </>
  );
}