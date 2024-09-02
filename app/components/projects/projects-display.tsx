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
// import { Categories } from "@/components/projects/categories"; // Assuming it's an array of strings
import ProjectsList from "@/components/projects/projects-list";
import iProject from "@/components/projects/project.interface";
import heroStyles from "./projectstyle.module.css"
import projectService from '@/lib/services/projects';
import categoriesService from '@/lib/services/categories';

export default function ProjectDisplay() {

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState<string | null>('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [toggleCategories, setToggleCategories] = useState(true);
    const [projects, setProjects] = useState<iProject[]>([]);
    const [categories, setCategories] = useState([]);

    const [sortedFilteredProjects, setSortedFilteredProjects] = useState<iProject[]>([]);

    const [sortValue, setSortValue] = useState('');



    useEffect(() => {
        getProjects();
        setCurrentPage(1); // Reset page whenever search term or selected categories change
    }, [searchTerm, selectedCategories]);

    useEffect(() => {
        getCategories();
    }, [])

    useEffect(() => {
        // console.log({ sortValue, projects });
        let filteredProjects = projects.filter(filterProjects);



        // let _sortedFilteredProjects = projects.sort(sortProjects);
        setSortedFilteredProjects(filteredProjects.sort(sortProjects));
    }, [sortValue])


    const sortProjects = (a, b) => {
        let valA = a?.attributes?.projectTitle;
        let valB = b?.attributes?.projectTitle;

        let valC = new Date(a?.attributes?.createdAt).getTime();
        let valD = new Date(b?.attributes?.createdAt).getTime();


        let _projects;


        switch (sortValue) {
            case 'desc':
                _projects = valB.localeCompare(valA);
                break;
            case 'asc':
                _projects = valA.localeCompare(valB);
                break;

            case 'oldest':
                _projects = valC - valD;

            case 'newest':
                _projects = valD - valC;

        }

        console.log({ _projects, sortValue });

        return _projects;
    }

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        let searchCategory: string | null = urlParams.get('category');

        let searchQuery: string | null = urlParams.get('q');

        if (searchCategory == 'All') {
            searchCategory = null;
        }

        setSelectedCategories(searchCategory ? [searchCategory] : []);
        setSearchTerm(searchQuery);
    }, [])


    const handleSort = (value: any) => {
        setSortValue(value);
    }

    const getCategories = async () => {
        let _categories: any = await categoriesService.getAll();

        if (_categories) {
            let __cat: any = [];
            _categories.map((item: any) => {
                __cat.push(item.attributes.categoryName);
            })
            setCategories(__cat);
        }
    }

    const getProjects = async () => {
        try {
            const response = await projectService.getAll();

            if (!response.ok) {
                console.log("Error occurred");
                return;
            }

            const data = await response.json();

            if (data.data) {
                setProjects(data.data);
            }

        } catch (error: any) {
            console.log(error.message);
        }
    };

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

        return projectService.filter(selectedCategories, searchTerm, project);

        // var record_exists = true;

        // if (selectedCategories.length > 0) {

        //     selectedCategories.forEach(category => {
        //         let project_categories = project?.attributes?.project_categories.data;

        //         let values = project_categories?.filter((project_category) => project_category?.attributes?.categoryName == category);

        //         console.log({ values })
        //         if (values.length <= 0) {
        //             record_exists = false;
        //         }
        //     });
        // }


        // if (searchTerm && !(project?.attributes?.projectTitle?.toLowerCase().includes(searchTerm.toLowerCase()) || project?.category?.toLowerCase()?.includes(searchTerm.toLowerCase()))) {
        //     record_exists = false;
        // }

        // return record_exists;
    };

    useEffect(() => {

        setSortedFilteredProjects(projects);
    }, [projects]);



    const totalPages = Math.ceil(sortedFilteredProjects.length / itemsPerPage);

    const getCurrentPageProjects = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedFilteredProjects.slice(startIndex, endIndex);
    };

    return (
        <div className="container mx-auto">
            <div className="relative isolate px-1 pb-20 lg:px-8">
                <div className={` ${heroStyles.projectContainer}`}>
                    <div className={heroStyles.filterSection}>
                        <div>
                            <div className={heroStyles.filterAccordionmd}>
                                <div className="h-10" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>Filter Templates</div>
                                <Accordion type="single" defaultValue="item-1" collapsible open className='mt-3'>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Categories</AccordionTrigger>
                                        <AccordionContent>
                                            {categories?.map((category, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex space-x-2 rounded-md py-3 px-2 mb-2 ${selectedCategories.includes(category) ? 'bg-gray-200' : ''}`}
                                                    style={{ border: '1px solid #CBD5E1', color: '#1E293B', cursor: 'pointer' }}
                                                    onClick={() => handleCategoryChange(category)}
                                                >
                                                    <Checkbox id={`category-${index}`} checked={selectedCategories.includes(category)} onChange={() => { }} />
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
                                <Accordion type="single" collapsible className='py-2'>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Filter Templates</AccordionTrigger>
                                        <AccordionContent>
                                            <Accordion type="single" collapsible className='py-4'>
                                                <AccordionItem value="item-1">
                                                    <AccordionTrigger>Categories</AccordionTrigger>
                                                    <AccordionContent>
                                                        {categories?.map((category, index) => (
                                                            <div
                                                                key={index}
                                                                className={`flex space-x-2 rounded-md py-3 px-2 mb-2 ${selectedCategories.includes(category) ? 'bg-gray-200' : ''}`}
                                                                style={{ border: '1px solid #CBD5E1', color: '#1E293B', cursor: 'pointer' }}
                                                                onClick={() => handleCategoryChange(category)}
                                                            >
                                                                <Checkbox id={`category-${index}`} checked={selectedCategories.includes(category)} onChange={() => { }} />
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
                            <SortProjects onSort={handleSort} sortValue={sortValue} />
                        </div>
                    </div>
                    <div className={` ${heroStyles.projectSection} `}>
                        <div style={{ display: 'flex' }}>
                            <div className={`${heroStyles.searchTab} `}>
                                <div style={{ width: '20px' }}>
                                    <Image src={'/searchIcon.svg'} width={20} height={100} alt={'search'} style={{ width: '100%' }} />
                                </div>
                                <div className={`ml-2 p-3 text-[#334155] ${heroStyles.formContainer}`}>
                                    <form>
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
                                <SortProjects onSort={handleSort} sortValue={sortValue} />
                            </div>
                        </div>
                        {sortedFilteredProjects.length === 0 ? (
                            <div className='mt-4 text-center text-gray-600'> No result Found for <strong>{searchTerm}</strong>.<br /> Please, try another value</div>
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
                                                <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(index + 1); }} isActive={currentPage === index + 1}>
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
