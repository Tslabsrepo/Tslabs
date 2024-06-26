'use client'
import Image from 'next/image';
import { useState } from 'react';
import ProjectsList from '@/components/projects/projects-list';
import iProject from '@/components/projects/project.interface';
import DetailStyle from './details.module.css';

export default function RelatedProjects() {
    const projects: Array<iProject> = [
        { title: 'Sample 1', category: 'Artificial Intelligence' },
        { title: 'Sample 2', category: 'FinTech' },
        { title: 'Sample 3', category: 'Mobile app' },
        { title: 'Sample 4', category: 'Mobile app' },
        { title: 'Sample 5', category: 'Category A' },
        { title: 'Sample 6', category: 'Category B' },
        { title: 'Sample 7', category: 'Category C' },
        { title: 'Sample 8', category: 'Category A' },
        { title: 'Sample 9', category: 'Category B' },
        { title: 'Sample 10', category: 'Category C' },
        { title: 'Sample 11', category: 'Category A' },
    ];
    
    const limitedProjects: Array<iProject> = projects.slice(0, 4);

    return (
        <div className={` bg-white my-20 ${DetailStyle.relatedProjects}`}>    

            <h2>
                Related Projects
            </h2>   
           <div>
            {limitedProjects.length > 0 == true && (
                    <ProjectsList projects={limitedProjects} columns={4} gap={8}/>
                )}
           </div>
        </div>
    )
}
