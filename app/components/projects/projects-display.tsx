"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import SortProjects from '@/components/projects/sortproject';
import { Checkbox } from "@/components/ui/checkbox";
import { Categories } from "@/components/projects/categories"; // Assuming it's an array of strings
import ProjectsList from "@/components/projects/projects-list";
import iProject from "@/components/projects/project.interface";
import heroStyles from "./projectstyle.module.css"

export default function ProjectDisplay() {
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

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [toggleCategories, setToggleCategories] = useState(true);
    useEffect(() => {
        setCurrentPage(1); // Reset page whenever search term or selected categories change
    }, [searchTerm, selectedCategories]);

    const handlePageChange = (page: number) => {
        if (page < 1) {
            setCurrentPage(1);
        } else if (page > totalPages) {
            setCurrentPage(totalPages);
        } else {
            setCurrentPage(page);
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (category: string) => {
        const index = selectedCategories.indexOf(category);
        if (index === -1) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        }
    };

    const filterProjects = (project: iProject) => {
        if (selectedCategories.length > 0 && !selectedCategories.includes(project.category)) {
            return false;
        }
        if (searchTerm && !(project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.category.toLowerCase().includes(searchTerm.toLowerCase()))) {
            return false;
        }
        return true;
    };

    const filteredProjects = projects.filter(filterProjects);
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const getCurrentPageProjects = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredProjects.slice(startIndex, endIndex);
    };

    // const showCategories = () => {
    //     const screenWidth = window.innerWidth;

    //     if(screenWidth <= 640){
    //         const accordionsm = document.getElementById()
    //         setToggleCategories(!toggleCategories);
    //         console.log(toggleCategories)
    //     }else{
    //     console.log(screenWidth,"big")}
    // }
    return (
        <div className="container mx-auto">
            <div className="relative isolate px-1 pb-20 lg:px-8">
                <div className={` ${heroStyles.projectContainer}`}>
                    <div className={heroStyles.filterSection}>
                        <div >
                            <div className={heroStyles.filterAccordionmd}>
                                <div className="h-10" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} >Filter Templates</div>
                                <Accordion type="single" collapsible className='mt-3 '>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Categories</AccordionTrigger>
                                        <AccordionContent>
                                            {Categories.map((category, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex space-x-2 rounded-md py-3 px-2 mb-2 ${selectedCategories.includes(category) ? 'bg-gray-200' : ''}`}
                                                    style={{ border: '1px solid #CBD5E1', color: '#1E293B', cursor: 'pointer' }}
                                                    onClick={() => handleCategoryChange(category)}
                                                >
                                                    <Checkbox id={`category-${index}`} checked={selectedCategories.includes(category)} onChange={() => {}} />
                                                    <div className="grid gap-1.5 leading-none">
                                                        <label
                                                            htmlFor={`category-${index}`}
                                                            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            style={{ fontSize: '16px' }}
                                                        >
                                                            {category}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className={heroStyles.filterAccordionsm}>
                                {/* <div className="h-10" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} onClick={showCategories}>Filter Templates</div> */}
                                <Accordion type="single" collapsible className='py-2'>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Filter Templates</AccordionTrigger>
                                        <AccordionContent>

                                            {/* category accordion */}
                                            <Accordion type="single" collapsible className='py-4'>
                                                <AccordionItem value="item-1">
                                                    <AccordionTrigger>Categories</AccordionTrigger>
                                                    <AccordionContent>
                                                        {Categories.map((category, index) => (
                                                            <div
                                                                key={index}
                                                                className={`flex space-x-2 rounded-md py-3 px-2 mb-2 ${selectedCategories.includes(category) ? 'bg-gray-200' : ''}`}
                                                                style={{ border: '1px solid #CBD5E1', color: '#1E293B', cursor: 'pointer' }}
                                                                onClick={() => handleCategoryChange(category)}
                                                            >
                                                                <Checkbox id={`category-${index}`} checked={selectedCategories.includes(category)} onChange={() => {}} />
                                                                <div className="grid gap-1.5 leading-none">
                                                                    <label
                                                                        htmlFor={`category-${index}`}
                                                                        className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                        style={{ fontSize: '16px' }}
                                                                    >
                                                                        {category}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>

                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div className={heroStyles.sortprojectsm}>
                            <SortProjects />
                        </div>
                    </div>
                    <div className={` ${heroStyles.projectSection} `}>
                        <div style={{ display: 'flex' }}>
                            <div className={`${heroStyles.searchTab} mr-10`}>
                                <div style={{ width: '20px' }}>
                                    <Image src={'/searchIcon.svg'} width={20} height={100} alt={'search'} style={{ width: '100%' }} />
                                </div>
                                <div className={`ml-2 text-[#334155] ${heroStyles.formContainer} `}>
                                    <form >
                                        <input
                                            type='text'
                                            placeholder='Search Projects...'
                                            className='bg-inherit focus:outline-none placeholder:text-[#334155]'
                                            style={{ width: '100%' }}
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                    </form>
                                </div>
                            </div>

                            {/* Select component */}
                            <div className={heroStyles.sortprojectmd}>
                                <SortProjects />
                            </div>
                        </div>
                        {filteredProjects.length === 0 ? (
                                <div className='mt-4 text-center text-gray-600'> No result Found for '{searchTerm}'.<br/> Please, try another value</div>
                            ) : (
                                <div>
                                    <div>
                                        <ProjectsList projects={getCurrentPageProjects()} columns={3} />
                                    </div>
                                    <Pagination>
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} disabled={currentPage === 1} />
                                            </PaginationItem>
                                            {[...Array(totalPages)].map((_, index) => (
                                                <PaginationItem key={index}>
                                                    <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(index + 1); }} active={currentPage === index + 1}>
                                                        {index + 1}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            ))}
                                            <PaginationItem>
                                                <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} disabled={currentPage === totalPages} />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
