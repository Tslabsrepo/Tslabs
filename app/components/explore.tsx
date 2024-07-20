"use client";
import ProjectsList from "@/components/projects/projects-list";
import iProject from "@/components/projects/project.interface";
import TitleBadge from "@/components/ui/title-badge";
import Link from "next/link";
import { useEffect, useState } from "react";
import heroStyles from './landingPage.module.css';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import projectService from "@/lib/services/projects";
import categoriesService from "@/lib/services/categories";

export default function Explore() {
    const [categoryData, setcategoryData] = useState<string>("All");
    const [projects, setProjects] = useState<iProject[]>([]);
    const [categories, setCategories] = useState(["All"]);

    const handlecategoryData = (category: string) => {
        setcategoryData(category);
    }

    useEffect(() => {
        const getProjectData = async () => {
            try {
                const response = await projectService.getAll();

                if (!response.ok) {
                    console.log("Error occurred");
                }
                const data = await response.json();
                console.log("preoject", data);
                if (data.data) {
                    setProjects(data.data);
                }

            } catch (error: any) {
                console.log(error.message);
            }
        };

        getProjectData();
    }, [])

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        try {
            const _categories: any = await categoriesService.getAll();

            // console.log({ _categories })
            if (_categories) {
                const categoryNames = _categories.map((item: any) => item.attributes.categoryName);
                setCategories(["All", ...categoryNames]);
            }
        } catch (error: any) {
            console.log(error.message);
        }
    }

    // const filterProjects = (project: iProject) => {

    //     return projectService.filter([categoryData], null, project);

    // }

    const limitedProjects: Array<iProject> = projects.slice(0, 8);

    // const filteredProjects = projects.filter(filterProjects);


    return (
        <div className="container mx-auto">
            <div className="relative isolate px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <TitleBadge text="Explore Projects" />
                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                            Explore Top Projects on our Platform
                        </h2>
                    </div>
                </div>

                <div className={`${heroStyles.categorySelect} ${heroStyles.bigScreen}`}>
                    {categories.map((category, index) => (
                        <Link key={index} href={"projects?category=" + category} style={{ border: categoryData === category ? '1px solid #0F172A' : 'none' }}>
                            {category}
                        </Link>
                    ))}
                </div>

                <ScrollArea className={`${heroStyles.smallScreens} h-[100%] w-[100%] py-4`}>
                    <div className={heroStyles.categorySelect}>
                        {categories.map((category, index) => (
                            <div key={index} href={"projects?category=" + category} style={{ border: categoryData === category ? '1px solid #0F172A' : 'none' }}>
                                {category}
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                {limitedProjects.length > 0 && (
                    <ProjectsList projects={limitedProjects} columns={4} />
                )}

                <div className="mx-9 mt-4" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href={'/projects'}>
                        <div className="hover:bg-gray-100 hover:cursor-pointer" style={{ border: '1px solid #0F172A', fontSize: '16px', color: '#0F172A', padding: '5px 16px', borderRadius: '6px' }}>
                            View all
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
