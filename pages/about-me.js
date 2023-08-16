import AboutMeExperiences from "../components/aboutme/about-me-experiences";
import AboutMeSkills from "../components/aboutme/about-me-skills";
import Layout from "../components/layout";

export default function AboutMe() {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <AboutMeSkills />
          <AboutMeExperiences />
        </div>
      </section>
    </Layout>
  );
}
