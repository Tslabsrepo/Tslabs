import ProjectsList from "@/components/projects/projects-list";
import HeroBgSVG from "./HeroBgSVG";
import iProject from "@/components/projects/project.interface";
import TitleBadge from "@/components/ui/title-badge";


const projects: Array<iProject> = [
    {
        title: 'Sample'
    },
    {
        title: 'Sample'
    },
    {
        title: 'Sample'
    },
    {
        title: 'Sample'
    },
    {
        title: 'Sample'
    },
    {
        title: 'Sample'
    },
    {
        title: 'Sample'
    },
]

export default function Explore() {

    return (
        <div className="container mx-auto">
            <div className="relative isolate px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">

                    <TitleBadge text="Explore Projects" />

                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl ">
                            Explore Top Projects on our Platform
                        </h2>
                    </div>
                </div>

                {projects.length > 0 == true && (
                    <ProjectsList projects={projects} />
                )}
            </div>
        </div>
    )

}