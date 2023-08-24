import Head from "next/head";
import Layout from "../components/layout";
import TechDiaryItem from "../components/techdiary/techdiary-item";
import { TOKEN, DATABASE_ID } from "../config";

export default function TechDiary({ techdiary }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
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
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{techdiary.results.length}</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 py-10 m-6 md:grid-cols-3">
          {techdiary.results.map((aProject) => (
            <TechDiaryItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
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
