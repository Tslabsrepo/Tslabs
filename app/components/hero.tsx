'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import gridSVG from '../assets/grid.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import TitleBadge from '@/components/ui/title-badge';
import Link from 'next/link';
import NavigationMenu from './navbar';
import heroStyles from './landingPage.module.css';



export default function Hero() {

    return (
        <div className="bg-white">
            {/* Navigation Menu */}
            <NavigationMenu />

            <div className="relative isolate px-6 lg:px-8">
                <div
                    className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden "
                    // className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <Image src={'/grid.svg'} width={100} height={100} alt='background' className='min-w-full object-cover min-h-full' />
                </div>
                <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">

                    <TitleBadge text="Welcome to Transition School Labs" />

                    <div className="text-center">
                        {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> */}
                        <h1 className=" font-bold tracking-tight text-gray-900 sm:text-6xl" style={{ fontSize: '48px', margin: '0 5%', textAlign: 'center' }}>
                            Discover and Drive Tomorrow’s Technology,
                            Today!
                        </h1>
                        {/* <p className="mt-6 text-lg md:max-w-4xl mx-auto leading-8 text-gray-600" style={{padding: '0 5%', border: '1px solid red'}}> */}
                        <p className="mt-6 md:max-w-4xl mx-auto leading-8 text-[#0F172A]" style={{ padding: '0 5%', fontSize: '20px', lineHeight: '32px', textAlign: 'center' }}>
                            Explore a showcase of pioneering projects by TS Labs students, or contribute your own creation to our vibrant showcase of tech breakthroughs and collaborative innovation
                        </p>
                        <div className={`${heroStyles.heroBtnContainer} mt-10 `} >
                            <Link href={'/projects'}  className={heroStyles.linkComponent}>
                                <Button className={heroStyles.exploreBtn}>
                                    Explore Projects

                                
                                </Button>
                            </Link>
                            <Link href={'/contribute'}  className={heroStyles.linkComponent}>
                                <Button className={`${heroStyles.contribBtn} hover:text-white `}>
                                    
                                    Contribute your projects
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    {/* <img src={grid} /> */}
                    {/* <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    /> */}
                </div>
            </div>
        </div>
    )
}
