import { projectsData } from "@/lib/data"
import Image from "next/image"

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-16">
            {projectsData.map((project) => {
                return (
                    <div key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                    </div>
                )
            })}
        </section>
    )
}

export { Projects }