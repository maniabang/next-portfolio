export default function AboutMeSkills() {
  return (
    <>
      <div className="lg:flex-grow mt-16 md:ml-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-16 font-medium text-gray-900">
          ⌨️Skills.
        </h1>
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          JavaScript.
        </h2>
        <ul className="mb-8 leading-relaxed">
          <li>
            JavaScript와 TypeScript 기반에 기술스택을 주로 사용하였습니다.
          </li>
          <li>
            nvm을 사용하여 프로젝트에 맞는 node버전을 제어하고 생성하였습니다.
          </li>
          <li>npm 보다 yarn의 사용을 선호하는 편입니다.</li>
          <li>ES6+ 환경에 대한 이해도가 있습니다.</li>
        </ul>

        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          React.
        </h2>
        <ul className="mb-8 leading-relaxed">
          <li>
            React hooks를 사용하고, 대부분 컴포넌트를 함수로 만드는 환경에
            익숙합니다.
          </li>
          <li>커스텀 hooks를 통한 모듈화. </li>
          <li>Mobx를 이용한 상태관리 라이브러리를 사용하는데 익숙합니다.</li>
          <li>React-hook-form을 이용한 Form 데이터 관리에 능숙합니다.</li>
          <li>Yup을 이용한 동적 배열 및 데이터 유효성 검증에 능숙합니다.</li>
        </ul>
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Tools.
        </h2>
        <ul className="mb-8 leading-relaxed">
          <li>Github, Git enterprise 및 Git 형상관리시스템에 익숙합니다.</li>
          <li>Conﬂuence 및 Jira 사용에 익숙합니다. </li>
          <li>Slack 사용에 익숙합니다.</li>
          <li>Notion 사용에 익숙합니다.</li>
          <li>macOS에 익숙합니다.</li>
        </ul>
        <div className="lg:max-w-lg md:w-1/2 w-5/6"></div>
      </div>
    </>
  );
}
