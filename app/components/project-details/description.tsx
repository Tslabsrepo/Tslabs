'use client'
import Image from 'next/image';
import DetailStyle from './details.module.css'
import { useState } from 'react';
import { getUploadImage } from '@/lib/helpers';

export default function Description({ project }) {

    const { projectDescription, projectImages } = project

    return (
        <div className={`bg-white ${DetailStyle.descriptionContainer}`}>
            <h2>project description </h2>

            <div className={DetailStyle.ImageTextContainer} >

                {/* Image Section */}

                {projectImages?.length > 0 && (
                    <div className={DetailStyle.imageContainer}>
                        <div style={{ height: '540px' }}>
                            <Image src={getUploadImage(projectImages[0])} width={100} height={100} style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }} alt={'selected Image'} />
                        </div>

                        <div className={DetailStyle.projectImageList}>
                            {projectImages.slice(1).map((image: string, index: number) => (
                                <div key={index} style={{ height: '95px', width: '22%' }}>
                                    <Image src={getUploadImage(image)} width={100} height={100} style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }} alt={'selected Image'} />
                                </div>
                            ))}
                            {/* 
                            <div style={{ height: '95px', width: '22%' }}>
                                <Image src={'/testImg.png'} width={100} height={100} style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }} alt={'selected Image'} />
                            </div>

                            <div style={{ height: '95px', width: '22%' }}>
                                <Image src={'/testImg.png'} width={100} height={100} style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }} alt={'selected Image'} />
                            </div>

                            <div style={{ height: '95px', width: '22%' }}>
                                <Image src={'/testImg.png'} width={100} height={100} style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover' }} alt={'selected Image'} />
                            </div> */}
                        </div>
                    </div>
                )}


                {/* Text Section */}
                <div className={DetailStyle.descriptionTextContainer}>
                    <div>
                        <div className={DetailStyle.descriptionTextHeader} >Overview</div>
                        <div className={DetailStyle.descriptionProjectDetails} >
                            <div dangerouslySetInnerHTML={{ __html: projectDescription }} />
                        </div>
                        {/* 
                        <div className={DetailStyle.descriptionProjectDetails} >
                            Harnessing the power of advanced Augmented Reality (AR) and Virtual Reality (VR) technologies, VirtuArt Gallery offers a seamless and engaging experience. Through a meticulously designed user interface, visitors can virtually step inside an eclectic array of art galleries. Each virtual space is crafted with meticulous attention to realism and interactivity, ensuring every artwork is represented with stunning clarity and detail.
                        </div> */}
                    </div>

                    {/* specifications */}
                    {/* <div className={DetailStyle.specifications} >
                        <div className={DetailStyle.descriptionTextHeader}>Specifications</div>
                        <ul className={DetailStyle.projectList} >
                            <li> Runs on Android 10+, iOS 13+</li>
                            <li> Requires a minimum of 8GB RAM</li>
                            <li> Supports up to 100 simultaneous users in a virtual gallery</li>
                            <li> ADA compliant with voice navigation, high-contrast visuals, and text-to-speech features</li>
                            <li> Low latency under 20 ms for real-time responsiveness</li>
                            <li> Supports 4K resolution on desktops, Full HD on mobile</li>
                        </ul>


                    </div> */}

                    {/* <div className={DetailStyle.specifications}>
                        <div className={DetailStyle.descriptionTextHeader}>Technologies Used</div>
                        <ul className={DetailStyle.projectList}>
                            <li> Unity 3D for virtual environment creation</li>
                            <li> Oculus SDK for VR headset compatibility</li>
                            <li> Node.js with MongoDB for backend operations and data storage</li>
                            <li> Utilizes Google Arts & Culture API and Three.js for enriching 3D web effects</li>
                            <li> WebSockets for real-time user communication</li>
                            <li> Supports 4K resolution on desktops, Full HD on mobile</li>
                        </ul>
                    </div> */}
                </div>
            </div>

        </div>
    )
}
