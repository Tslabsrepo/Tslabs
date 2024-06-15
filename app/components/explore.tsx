"use client";
import ProjectsList from "@/components/projects/projects-list";
import iProject from "@/components/projects/project.interface";
import TitleBadge from "@/components/ui/title-badge";
import Link from "next/link";
import { useEffect, useState } from "react";
import heroStyles from './landingPage.module.css';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


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
    {
        title: 'Sample'
    },
    {
        title: 'Sample'
    },
]

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

    const handlecategoryData = (category: string) => {
        setcategoryData(category);

    }
    // useEffect(() => {
    //     const getProjectData = async () => {
    //         try{
    //             const response = await fetch('https://ts-labs-admin-0ff0c6162225.herokuapp.com/api/projects',{
    //                 method: 'GET',
    //                 headers: {
    //                     // 'Content-Type': 'application/json',
    //                     'Authorization': 'Bearer 31d3957bc8f1b2ffb30a152d44cc04d45bf4d7ab6ec58dc32815887118f8632a879c8de097a0a1784a0977099e33bdc76acba6adf945defac5046202137f92e44863ba1a90cd6fe494224ce2b6f5ea35bc722d2b62e6e9858a5f8443522ac86772c886e93c6a91c71b8a3af6a9e9d0920042ca8adf5d9b0c3cf67792cd0cdc8a'
    //                 }
    //             });

    //             if(!response.ok){
    //                 console.log("Error occured");
    //             }
    //             const data = await response.json();
    //             console.log(data);
    //         }catch(error:any){
    //             console.log(error.message);
    //         }
    //     };

    //     getProjectData();
    // }, [])
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
                    <ProjectsList projects={limitedProjects} />
                )}

                {/* View All Project Button */}

                <div className="mx-9 mt-4 " style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href={'/contributor-form'}><div className=" hover:bg-gray-100 hover:cursor-pointer " style={{ border: '1px solid #0F172A', fontSize: '16px', color: '#0F172A', padding: '5px 16px', borderRadius: '6px' }}>
                        View all
                    </div></Link>
                </div>
            </div>
        </div>
    )

}