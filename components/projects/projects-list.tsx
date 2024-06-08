import ProjectCard from "./project-card";
import iProject from "./project.interface";

export default function ProjectsList({ projects }: iProject[]) {
    return (
        <div className="grid md:grid-cols-4 gap-3 py-5">
            {projects.map((project, index: number) => (
                <ProjectCard project={project} key={index} />
            ))}
        </div>
    )
}