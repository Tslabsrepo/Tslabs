import ProjectCard from "./project-card";
import iProject from "./project.interface";
import heroStyles from "../../app/components/landingPage.module.css"

export default function ProjectsList({ projects, columns }: { projects: iProject[] , columns: number}) {
    const gridColumnsClass = columns === 4 ? "md:grid-cols-4 gap-3" : " grid-cols-2 sm:grid-cols-2 gap-3 md:grid-cols-3 md:gap-7 ";
    const gridPaddingClass = columns === 4 ? "px-0 md:px-9" : "";
    return (
        <div className={`grid  ${gridColumnsClass} py-5 ${gridPaddingClass} ${heroStyles.projectsdisplay}`} >
            {projects.map((project, index: number) => (
                <ProjectCard project={project} key={index} />
            ))}
        </div>

        // <div className="grid md:grid-cols-3 gap-10 py-5" >
        // {projects.map((project, index: number) => (
        //     <ProjectCard project={project} key={index} />
        // ))}
        // </div>
    )
}