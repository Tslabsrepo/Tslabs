"use client";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from "next/link";
import LandingStyles from "./landingPage.module.css";

export default function NavigationMenu() {

    const navigation = [
        { name: 'Projects', href: '/projects' },
        // { name: 'About Us', href: '/' },
        { name: 'Contribute', href: '/contribute' },
        // { name: 'Company', href: '#' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50 mx-9">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global" style={{ alignItems: 'center' }}>
                <div className="flex lg:flex-1">
                    <Link href={'/'} >
                        <div className='-m-1.5 p-1.5' style={{ width: '130px' }}><Image src={'/logo.png'} width={'130'} height={'30'} alt={'logo'} /></div>
                    </Link>

                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className={LandingStyles.navdetails}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="hidden lg:flex lg:gap-x-12" >
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href}><div className="text-md font-normal leading-6 text-slate-700 hover:cursor-pointer">
                                    {item.name}
                                </div></Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                            <div className='mr-10' style={{ display: 'flex', alignItems: 'center', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '15px', padding: '0 12px', width: '200px' }}>
                                <div style={{ width: '20px' }}>
                                    <Image src={'/searchIcon.svg'} width={20} height={100} alt={'search'} style={{ width: '100%' }} />
                                </div>
                                <div>
                                    <form className='ml-2 text-[#334155]' style={{ width: '95%' }}>
                                        <input type='text' placeholder='Search Projects...' className='bg-inherit focus:outline-none placeholder:text-[#334155]' style={{ width: '100%' }} />
                                    </form>
                                </div>
                                {/* <div className='ml-3 text-[#334155]'> Search Projects...</div> */}
                            </div>

                            <div className='mr-2 font-normal hover:cursor-pointer' style={{ color: '#0F172A', padding: '7px 16px', borderRadius: '6px' }}>
                                Sign in
                            </div>
                            <div className='hover:cursor-pointer' style={{ background: '#0F172A', color: 'white', padding: '7px 16px', borderRadius: '6px' }}>
                                Sign up
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )

}