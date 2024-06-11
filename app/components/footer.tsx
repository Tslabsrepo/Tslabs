import ProjectsList from "@/components/projects/projects-list";
import iProject from "@/components/projects/project.interface";
import TitleBadge from "@/components/ui/title-badge";
import exploreStyle from "./explore.module.css";



export default function Footer() {

    return (
        <div className="container mx-auto" style={{ border: '1px solid red' }}>
            <div className="relative isolate px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-6xl text-gray-900">

                    <TitleBadge text="Explore Projects" />

                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight  md:text-3xl ">
                            Explore Top Projects on our Platform
                        </h2>
                    </div>
                </div>



                {/* View All Project Button */}

                <div className="mx-9 mt-4 " style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className=" hover:bg-gray-100 hover:cursor-pointer " style={{ border: '1px solid #0F172A', fontSize: '16px', color: '#0F172A', padding: '5px 16px', borderRadius: '6px' }}>
                        View all
                    </div>
                </div>
            </div>
        </div>
    )

}