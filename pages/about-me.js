import AboutMeExperiences from "../components/aboutme/about-me-experiences";
import AboutMeSkills from "../components/aboutme/about-me-skills";
import Layout from "../components/layout";

export default function AboutMe() {
  return (
    <Layout>
      <AboutMeSkills />
      <AboutMeExperiences />
    </Layout>
  );
}
