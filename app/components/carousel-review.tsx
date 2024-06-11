"use client";
import TitleBadge from "@/components/ui/title-badge";

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const reviews: any = [
    {
        userName: 'Mariam Salehu',
        jobRole: 'Software Developer'
    },
    {
        userName: 'Alexander Johnson',
        jobRole: 'Software Developer'
    },
    {
        userName: 'Maria Gonzalez',
        jobRole: 'UI/UX Designer'
    },
    {
        userName: 'Chinaza C.',
        jobRole: 'Software Engineer'
    },
    {
        userName: 'Sample',
        jobRole: 'Software Developer'
    },
    {
        image: '',
        userName: 'Sample',
        jobRole: 'Software Developer'
    },

]

export default function CarouselReviews() {


    return (

        <div className="container mx-auto ">
            <div className="relative isolate px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-6xl">

                    <TitleBadge text="Testimonials" />

                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl ">
                            Hear from Our Innovators and Contributors
                        </h2>
                    </div>
                </div>


                <Carousel className="mx-5 mt-9"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2500,
                        }),
                    ]}>

                    <CarouselContent >
                        {reviews.map((review: any, index: any) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 " style={{ borderRadius: '12px' }}>
                                <Card className="pt-6 pb-2 hover:cursor-pointer ">
                                    <CardContent>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div style={{ width: '60px', height: '60px', marginRight: '15px' }}>
                                                <Image src={'/testImg.png'} width={100} height={100} alt={'project view'} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '18px', fontWeight: '700', color: '#334155', lineHeight: '24px' }}>{review.userName}</p>
                                                <p style={{ color: '#475569', fontSize: '16px' }}>{review.jobRole}</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 " style={{ fontSize: '16px', fontWeight: '500', color: '#334155', lineHeight: '25px' }}>
                                            <q> TS Labs has transformed the way I approach my projects. The resources and community support have propelled my innovations from mere concepts to market-ready products. </q>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>

                <div className="mx-9 mt-9 " style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href={'https://forms.gle/fVL2AHYb1dnYyAhGA'}><div className="bg-[#0F172A] text-white hover:cursor-pointer hover:bg-white hover:text-[#0F172A] hover:font-semibold" style={{ border: '1px solid #0F172A', fontSize: '16px', letterSpacing: '0.5px', padding: '5px 16px', borderRadius: '6px', transition: '.5s ease' }}>
                        Leave a review
                    </div></Link>
                </div>
            </div>
        </div>
    )

}