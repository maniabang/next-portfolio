import Head from "next/head";
import AboutMeHome from "../components/home/about-me-home";
import Animation from "../components/home/animation";
import Hero from "../components/home/hero";
import Layout from "../components/layout";
import useWindowDimension from "../components/utils/customhooks/useWindowDimension";

export default function Home() {
  const { width } = useWindowDimension();

  return (
    <Layout>
      <Head>
        <title>KHLEE | 사용자를 고려하는 개발자</title>
        <meta
          property="og:description"
          content="프론트엔드 개발자 이광훈입니다."
        />
        <meta
          property="og:image"
          content="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffecdaa1d-185f-4658-9cf2-ab0e49f01018%2FIMG_4267.jpg?table=block&id=fd6e98f6-b751-436d-aa62-88fdb427dd02&spaceId=ba40811f-21c0-4249-a512-9e75d1c965ff&width=2000&userId=c5d3630a-a8cd-46b1-9d83-bbffaf3d0263&cache=v2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
          <Animation />
        </div>
      </section>
      {width > 1100 ? <></> : <AboutMeHome />}
    </Layout>
  );
}
