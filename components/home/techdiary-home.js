import TechDiaryItem from "../techdiary/techdiary-item";

export default function TechDiaryHome({ techdiary }) {
  return (
    <section className="mt-20 flex flex-col items-center justify-center text-gray-600 body-font">
      <h1 className="text-4xl font-bold sm:text-6xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{techdiary?.results?.length}</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 py-10 m-6 md:grid-cols-3">
        {techdiary?.results?.map((aProject) => (
          <TechDiaryItem key={aProject.id} data={aProject} />
        ))}
      </div>
    </section>
  );
}
