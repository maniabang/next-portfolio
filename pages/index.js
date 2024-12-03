import Head from "next/head";
import AboutMeHome from "../components/home/about-me-home";
import Animation from "../components/home/animation";
import Hero from "../components/home/hero";
import Layout from "../components/layout";
// import Projects from "../components/projects/projects";
import TechDiaryHome from "../components/home/techdiary-home";
import useWindowDimension from "../components/utils/customhooks/useWindowDimension";
import { DATABASE_ID, TOKEN } from "../config";

export default function Home({ techdiary }) {
  const { width } = useWindowDimension();

  return (
    <Layout>
      <Head>
        <title>KHLEE | 사용자를 고려하는 개발자</title>
        <meta
          property="og:description"
          content="프론트엔드 개발자 이광훈입니다."
        />
        <meta property="og:image" content="/IMG_8687_Original.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Hero />
        <Animation />
      </div>
      <section id="projects">
        {/* <Projects /> */}
      </section>
      <section id="about-me">
        <AboutMeHome />
      </section>
      <section id="techdiary">
        <TechDiaryHome techdiary={techdiary} />
      </section>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "태그",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const techdiary = await res.json();

  return {
    props: { techdiary },
  };
}
