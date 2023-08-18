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
            className="btn-resume"
          >
            경력기술서
          </a>
        </div>
      </div>
      <div>
        <Image
          src={
            "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffecdaa1d-185f-4658-9cf2-ab0e49f01018%2FIMG_4267.jpg?table=block&id=fd6e98f6-b751-436d-aa62-88fdb427dd02&spaceId=ba40811f-21c0-4249-a512-9e75d1c965ff&width=2000&userId=c5d3630a-a8cd-46b1-9d83-bbffaf3d0263&cache=v2"
          }
          alt="image"
          width="568"
          height="758"
          quality={100}
        />
      </div>
      <div className="lg:max-w-lg md:w-1/2 w-5/6"></div>
    </>
  );
}
