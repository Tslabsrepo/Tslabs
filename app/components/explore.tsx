"use client";
import ProjectsList from "@/components/projects/projects-list";
import iProject from "@/components/projects/project.interface";
import TitleBadge from "@/components/ui/title-badge";
import Link from "next/link";
import { useEffect, useState } from "react";
import heroStyles from './landingPage.module.css';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import projectService from "@/lib/services/projects";


// const projects: Array<iProject> = [
//     { title: 'Sample 1', category: 'Artificial Intelligence' },
//     { title: 'Sample 2', category: 'FinTech' },
//     { title: 'Sample 3', category: 'Mobile app' },
//     { title: 'Sample 4', category: 'Mobile app' },
//     { title: 'Sample 5', category: 'Category A' },
//     { title: 'Sample 6', category: 'Category B' },
//     { title: 'Sample 7', category: 'Category C' },
//     { title: 'Sample 8', category: 'Category A' },
//     { title: 'Sample 9', category: 'Category B' },
//     { title: 'Sample 10', category: 'Category C' },
//     { title: 'Sample 11', category: 'Category A' },
// ];

const categories = [
    "All",
    "Web Apps",
    "Mobile Apps",
    "IoT",
    "Blockchain",
    "AR/VR",
    "FinTech",
    "Artificial Intelligence",
    // "E-commerce",
    // "UI/UX",
    // "Health Technology",
    // "Media",
    // "Cloud Computing",
];

export default function Explore() {
    // const [projects, setProjects] = useState<Array<iProject>>([]);
    const [categoryData, setcategoryData] = useState<string>("All");
    const [projects, setProjects] = useState<iProject[]>([]);

    const handlecategoryData = (category: string) => {
        setcategoryData(category);

    }
    useEffect(() => {
        const getProjectData = async () => {
            try {
                const response = await projectService.getAll();

                if (!response.ok) {
                    console.log("Error occured");
                }
                const data = await response.json();

                if (data.data) {
                    setProjects(data.data);
                }

            } catch (error: any) {
                console.log(error.message);
            }
        };

        getProjectData();
    }, [])

    const limitedProjects: Array<iProject> = projects.slice(0, 8);

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


                <div className={`${heroStyles.categorySelect} ${heroStyles.bigScreen} `}>
                    {categories.map((category, index) => (
                        <div key={index} className="" onClick={() => handlecategoryData(category)} style={{ border: categoryData === category ? '1px solid #0F172A' : 'none ', }}>{category}</div>
                    ))}

                </div>
                <ScrollArea className={` ${heroStyles.smallScreens} h-[100%] w-[100%] py-4`}>
                    <div className={`${heroStyles.categorySelect} `}>
                        {categories.map((category, index) => (
                            <div key={index} className="" onClick={() => handlecategoryData(category)} style={{ border: categoryData === category ? '1px solid #0F172A' : 'none ', }}>{category}</div>
                        ))}

                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                {limitedProjects.length > 0 == true && (
                    <ProjectsList projects={limitedProjects} columns={4} />
                )}

                {/* View All Project Button */}

                <div className="mx-9 mt-4 " style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href={'/projects'}><div className=" hover:bg-gray-100 hover:cursor-pointer " style={{ border: '1px solid #0F172A', fontSize: '16px', color: '#0F172A', padding: '5px 16px', borderRadius: '6px' }}>
                        View all
                    </div></Link>
                </div>
            </div>
        </div>
    )

}