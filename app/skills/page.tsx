import { skillsData } from "@/lib/data";

const SkillsPage = () => {
  return (
    <main className="max-w-[50rem] h-max flex flex-wrap justify-center py-10 px-4">
      {skillsData.map((skill) => {
        return (
          <div
            className="rounded-full w-fit h-10 px-4 py-2 border-2 flex m-2 items-center justify-center"
            key={skill}
          >
            <h6 className="">{skill}</h6>
          </div>
        );
      })}
    </main>
  );
};

export default SkillsPage;
