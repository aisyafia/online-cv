import { experiencesData } from "@/lib/data";
import { Motion } from "./Motion";

const Experience = () => {
  return (
    <section className="scroll-mt-16 max-w-[50rem]">
      {experiencesData.map((exp) => {
        return (
          <Motion
            key={exp.title}
            className="entry-container"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>{exp.title}</h3>
            <div className="flex justify-start items-center gap-2">
              <h5>
                {exp.company} - {exp.location} -
              </h5>
              <h5 className="text-base font-light">{exp.date}</h5>
            </div>

            <p>{exp.description}</p>
          </Motion>
        );
      })}
    </section>
  );
};

export { Experience };
