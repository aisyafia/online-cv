import { educationsData } from "@/lib/data";

const eduPage = () => {
  return (
    <main>
      {educationsData.map((edu) => {
        return (
          <div key={edu.degree} className="entry-container">
            <h3>
              {edu.degree} - {edu.school}
            </h3>
            <h5>
              {edu.location} - {edu.year}
            </h5>
            <p>{edu.description}</p>
          </div>
        );
      })}
    </main>
  );
};

export default eduPage;
