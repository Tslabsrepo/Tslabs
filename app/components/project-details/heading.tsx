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



export default function Hero() {

    return (
        <div className="bg-white" >
            {/* Navigation Menu */}
            <div className="relative isolate px-6 lg:px-8">
                
                <div className={`${DetailStyles.headingContainer} mx-auto max-w-7xl mx-7 sm:py-48 lg:pt-20 lg:pb-10`} >
                    <div className={DetailStyles.headingImgDescrptn}>
                        <div className={DetailStyles.headingMainImg}>
                            <Image src={'/test.png'} height={100} width={100} style={{width:'100%', height:'100%', borderRadius:'12px'}} alt={'cover'} />
                        </div>

                        <div className={DetailStyles.headingMainText}>
                            <div className={DetailStyles.headingTitle}> VisuArt Gallery </div>
                            <p className={DetailStyles.headingProjectDescrptn}>AR/VR experience for exploring digital art galleries.</p>
                            <div className={DetailStyles.headingProjectDevs}> By: TS Labs</div>
                        </div>
                    </div>
                    
                    <div className={DetailStyles.projectCategoriesBtn} >
                        <div className={DetailStyles.projectCategories}>
                            <div className='bg-[#FEF3C7]' >AR/VR</div>
                            <div className='bg-[#CFFAFE]'>Media</div>
                            <div className='bg-[#FCE7F3]' >Mobile App</div>
                            <div className='bg-[#ECFCCB]' >Artificial Intelligence</div>
                            <div className='bg-[#EDE9FE]'>IoT</div>
                        </div>

                        <div className={DetailStyles.projectheadingBtn}>
                            <div className={DetailStyles.projectRepo} > View Repository</div>
                            <div className={DetailStyles.projectWebsite}> View Website</div>
                        </div>
                    </div>
                </div>
               
            </div>
            
        </div>
    )
}
