import Image from "next/legacy/image";

export default function AboutMeExperiences() {
  return (
    <>
      <div className="lg:flex-grow mt-16 md:ml-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-16 font-medium text-gray-900">
          🛫Other Experiences.
        </h1>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Communication.
        </h1>
        <ul className="mb-8 leading-relaxed">
          <li>
            휴학을 하는 동안 23개도시를 다녀오며 개방적이고 다양성을 존중하는
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
              target="_blank"
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
        <div className="lg:max-w-lg md:w-1/2 w-5/6"></div>
        <Image
          src={"/IMG_1505.JPG"}
          oncontextmenu="return false"
          style="-webkit-touch-callout:none"
          alt="image"
          width={682} 
          height={908}
          quality={100}
        />
      </div>
    </>
  );
}
