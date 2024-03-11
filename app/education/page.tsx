import { educationsData } from "@/lib/data";
import { Motion } from "@/components/Motion";

const eduPage = () => {
  return (
    <main>
      {educationsData.map((edu) => {
        return (
          <Motion key={edu.degree} className="entry-container" initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}>
            <h3>
              {edu.degree} - {edu.school}
            </h3>
            <h5>
              {edu.location} - {edu.year}
            </h5>
            <p>{edu.description}</p>
          </Motion>
        );
      })}
    </main>
  );
};

export default eduPage;
