import { experiencesData } from "@/lib/data";

const Experience = () => {
  return (
    <section>
      <div className="max-w-[50rem]">
        {experiencesData.map((exp) => {
          return (
            <div
              key={exp.title}
              className="border border-white rounded-md m-4 p-2"
            >
              <h3>{exp.title}</h3>
              <h5>
                {exp.company} - {exp.location} -{" "}
              </h5>{" "}
              <p>{exp.date}</p>
              <p>{exp.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Experience };
