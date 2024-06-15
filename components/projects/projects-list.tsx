import ProjectCard from "./project-card";
import iProject from "./project.interface";
// import hearoStyles from "../../app/components/landingPage.module.css"

export default function ProjectsList({ projects }: { projects: iProject[] }) {
    return (
        <div className="grid md:grid-cols-4 gap-3 py-5 px-0 md:px-9" >
            {projects.map((project, index: number) => (
                <ProjectCard project={project} key={index} />
            ))}
        </div>
    )
}