import Image from "next/legacy/image";

export default function TechDiaryItem({ data }) {
  const title = data.properties["프로젝트 01"].title[0].plain_text;
  const github = data.properties.GitHub.url;
  const description = data.properties.Description.rich_text[0]?.plain_text;
  const imageSrc = data.cover?.external.url;
  const tags = data.properties["태그"].multi_select;

  const start = data.properties.WorkPeriod.date?.start;
  const end = data.properties.WorkPeriod.date?.end;

  const calculatedPeriod = (start, end) => {
    const startDateArray = start?.split("-");
    const endDateArray = end?.split("-");

    var startDate = new Date(
      startDateArray[0],
      startDateArray[1],
      startDateArray[2]
    );
    var endDate = new Date(endDateArray[0], endDateArray[1], endDateArray[2]);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imageSrc}
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="none"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={github}>깃허브 바로가기</a>
        <p className="my-1 text-xl">
          {" "}
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2 md:grid md:grid-cols-3 gap-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
