import Image from "next/legacy/image";

export default function AboutMeExperiences() {
  return (
    <>
      <div className="lg:flex-grow mt-16 md:w-1/2 md:ml-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <Image
          src={
            "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F261e7679-3942-4b06-b5d9-7702965c910b%2FImage.jpeg?table=block&id=1488b61c-be4e-43a5-b2fd-30e988857215&spaceId=ba40811f-21c0-4249-a512-9e75d1c965ff&width=2000&userId=c5d3630a-a8cd-46b1-9d83-bbffaf3d0263&cache=v2"
          }
          alt="image"
          width="1291"
          height="758"
          quality={100}
        />
      </div>
      <div className="lg:flex-grow mt-16 md:ml-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Communication.
        </h1>
        <ul className="mb-8 leading-relaxed">
          <li>
            휴학을 하는 동안 20개도시를 다녀오며 개방적이고 다양성을 존중하는
            유연한 마인드를 가지게 되었습니다.
          </li>
          <li>
            다양한 주제를 알고 이야기 하기 위해 매달 4권이상씩 책을 읽고
            있습니다.
          </li>
          <li>
            대화와 토론하는 것을 좋아하며 아이디어의 원천은 토론에서 나온다고
            생각합니다.
          </li>
        </ul>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Writing.
        </h1>
        <ul className="mb-8 leading-relaxed">
          <li>
            여행 블로그 운영 경험, 여행앱 트리플에 &nbsp;
            <a
              href="https://triple.guide/regions/e447ef78-8c4a-41c1-9de4-976e4b85f20d/articles/37380bc6-53ee-4097-8fd5-6486200033db"
              className="btn-link"
            >
              달랏가이드
            </a>
            &nbsp; 기고
          </li>
          <li>
            나의 생각과 보고 들은 것을 독서와 여행의 경험으로 정리하는데 능숙함
          </li>
        </ul>
      </div>
      <div className="lg:max-w-lg md:w-1/2 w-5/6"></div>
    </>
  );
}
