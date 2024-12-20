import AboutMeExperiences from "../aboutme/about-me-experiences";
import AboutMeSkills from "../aboutme/about-me-skills";

export default function AboutMeHome() {
  return (
    <section className="flex flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <AboutMeSkills />
        <AboutMeExperiences />
      </div>
    </section>
  );
}
