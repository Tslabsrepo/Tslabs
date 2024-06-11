import ProjectCard from "./project-card";
import iProject from "./project.interface";

export default function ProjectsList({ projects }: { projects: iProject[] }) {
    return (
        <div className="grid md:grid-cols-4 gap-3 py-5 px-9">
            {projects.map((project, index: number) => (
                <ProjectCard project={project} key={index} />
            ))}
        </div>
    )
}