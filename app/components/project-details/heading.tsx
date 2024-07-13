'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import gridSVG from '../assets/grid.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import DetailStyles from "./details.module.css"
import TitleBadge from '@/components/ui/title-badge';
import Link from 'next/link';
import NavigationMenu from '../navbar';
import heroStyles from '../landingPage.module.css';
import { getUploadImage } from '@/lib/helpers';



export default function Hero({ project }) {
    // console.log(project.attributes.projectRepo)

    project = project?.attributes;

    return (
        <div className="bg-white" >
            {/* Navigation Menu */}
            <div className="relative isolate px-6 lg:px-8">

                <div className={`${DetailStyles.headingContainer} mx-auto max-w-7xl mx-7 sm:py-48 lg:pt-20 lg:pb-10`} >
                    <div className={DetailStyles.headingImgDescrptn}>
                        <div className={DetailStyles.headingMainImg}>
                            <Image src={getUploadImage(project.projectLogo)} height={100} width={100} style={{ width: '100%', height: '100%', borderRadius: '12px' }} alt={'cover'} />
                        </div>

                        <div className={DetailStyles.headingMainText}>
                            <div className={DetailStyles.headingTitle}>{project.projectTitle} </div>
                            <p className={DetailStyles.headingProjectDescrptn}>{project.projectDescription}</p>
                            <div className={DetailStyles.headingProjectDevs}> By: TS Labs</div>
                        </div>
                    </div>

                    <div className={DetailStyles.projectCategoriesBtn} >
                        <div className={DetailStyles.projectCategories}>
                            {project.project_categories?.map((item: any, index: number) => (
                                <div className='bg-[#FEF3C7]' key={index}>{item}</div>
                            ))}
                            {/* <div className='bg-[#CFFAFE]'>Media</div>
                            <div className='bg-[#FCE7F3]' >Mobile App</div>
                            <div className='bg-[#ECFCCB]' >Artificial Intelligence</div>
                            <div className='bg-[#EDE9FE]'>IoT</div> */}
                        </div>

                        <div className={DetailStyles.projectheadingBtn}>
                            <Link href={project.projectRepo} target='_blank'><div className={DetailStyles.projectRepo} > View Repository</div></Link>
                            <Link href={project.projectUrl} target='_blank'><div className={DetailStyles.projectWebsite}> View Website</div></Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
