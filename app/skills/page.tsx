import { skillsData } from "@/lib/data";
import { Motion } from "@/components/Motion";

const SkillsPage = () => {
  return (
    <main className="max-w-[50rem] h-max flex flex-wrap justify-center py-10 px-4 transition-opacity duration-500 ease-in-out">
      {skillsData.map((skill) => {
        return (
          <Motion
            className="rounded-full w-fit h-10 px-4 py-2 border-2 flex m-2 items-center justify-center transition-opacity duration-500 ease-in-out"
            key={skill}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h6 className="">{skill}</h6>
          </Motion>
        );
      })}
    </main>
  );
};

export default SkillsPage;
