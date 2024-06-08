import ProjectsList from "@/components/projects/projects-list";


const projects = [
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
                    <div className=" sm:mb-8 flex sm:justify-center ">
                        <div className="relative flex rounded-full px-3 py-1 text-sm leading-6 text-gray-600 border border-slate-200">
                            <svg width="35" height="26" className='border-slate-200' viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <rect x="1" y="0.5" width="33" height="25" rx="12.5" fill="#F8FAFC" />
                                <rect x="1" y="0.5" width="33" height="25" rx="12.5" stroke="#E2E8F0" />
                                <rect x="8.5" y="4" width="18" height="18" fill="url(#pattern0_219_926)" />
                                <defs>
                                    <pattern id="pattern0_219_926" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_219_926" transform="scale(0.0138889)" />
                                    </pattern>
                                    <image id="image0_219_926" width="72" height="72" xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>

                            Explore Projects
                        </div>
                    </div>
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