'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import gridSVG from '../assets/grid.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import TitleBadge from '@/components/ui/title-badge';
import Link from 'next/link';
import NavigationMenu from '../navbar';
import heroStyles from '../landingPage.module.css';



export default function Hero() {

    return (
        <div className="bg-white">
            {/* Navigation Menu */}
            <NavigationMenu />

            <div className="relative isolate md:px-6 lg:px-8">
                <div
                    className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden "
                    // className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    {/* <Image src={'/grid.svg'} width={100} height={100} alt='background' className='min-w-full object-cover min-h-full' /> */}
                </div>
                <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:pt-56 lg:pb-32">

                    <TitleBadge text="Explore Projects" />

                    <div className="text-center">
                        {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> */}
                        <h1 className=" font-bold tracking-tight text-gray-900 sm:text-6xl" style={{ fontSize: '48px', margin: '0', textAlign: 'center' }}>
                            Discover the latest innovations from our community.
                        </h1>
                        {/* <p className="mt-6 text-lg md:max-w-4xl mx-auto leading-8 text-gray-600" style={{padding: '0 5%', border: '1px solid red'}}> */}
                        <p className="mt-6 md:max-w-4xl mx-auto leading-8 text-[#0F172A]" style={{ padding: '0 6%', fontSize: '20px', lineHeight: '32px', textAlign: 'center' }}>
                            Welcome to our diverse and dynamic project gallery! Each entry in this collection represents hours of dedication and innovation from TS Labs students and contributors around the globe.
                            {/* <br/>Browse, engage, and be inspired to contribute your own ideas. */}
                        </p>
                        <div className={`${heroStyles.heroBtnContainer} mt-5 `} style={{ padding: '0 5%', fontSize: '20px', lineHeight: '32px', textAlign: 'center' }}>
                            Browse, engage, and be inspired to contribute your own ideas.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
