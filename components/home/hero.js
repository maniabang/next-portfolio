import Image from "next/legacy/image";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요👋🏻,
          <br /> 웹 프론트엔드 엔지니어로 일 하고 있는 이광훈입니다.
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          개발에 대한 열정 뿐만 아니라 공감과 대화로부터 가치를 만들어내고 함께
          성장하는 것이 비즈니스 효율을 높인다고 생각합니다. 회사와 개발자
          모두에게 더 나은 여정을 함께할 곳을 찾습니다.
        </p>

        <div className="flex justify-center">
          <a
            href="https://woolen-ambulance-685.notion.site/9c480cc642b24f5f8d28f891f7e8a581?pvs=4"
            target="_blank"
            className="btn-resume"
          >
            경력기술서
          </a>
        </div>
      </div>
      <div>
        <Image
          src={"/IMG_8687_Original.jpg"}
          oncontextmenu="return false"
          style="-webkit-touch-callout:none"
          alt="image"
          width={795}
          height={1060}
          quality={100}
        />
      </div>
      <div className="lg:max-w-lg md:w-1/2 w-5/6"></div>
    </>
  );
}
