'use client'
import { useState } from 'react';
import Description from './description';
import DetailStyle from './details.module.css';


export default function Details({ project }) {

    const tabData = [
        'description',
        'reviews'
    ]
    const [activeContainer, setActiveContainer] = useState('description');

    const handleSetActiveContainer = (containerName: any) => {
        setActiveContainer(containerName);
    }
    return (
        <div className={`bg-white ${DetailStyle.detailsContainer}`}>

            <div className={DetailStyle.detailsTab}>
                {tabData.map((tabs, index) => (
                    <div key={index} style={{
                        fontSize: '20px',
                        color: activeContainer === tabs ? '#0F172A' : '#334155',
                        fontWeight: activeContainer === tabs ? '500' : '400',
                        lineHeight: '28px',
                        padding: '8px 4px',
                        borderBottom: activeContainer === tabs ? '1px solid #0F172A' : 'none',
                        cursor: 'pointer',
                        transition: '.5s ease'
                    }}
                        onClick={() => { handleSetActiveContainer(tabs) }}>
                        {tabs}
                    </div>
                ))
                }

            </div>

            {/* Display section */}
            <div className='my-10'>
                {activeContainer === 'description' && (
                    <Description description={project.attributes.projectDescription} />
                )}

                {activeContainer === 'reviews' && (
                    <div style={{ margin: '0 4%', textAlign: 'center', color: '#0F172A', fontSize: '20px' }}>
                        Reviews are not available at the moment. Please, check back later.
                    </div>
                )}

            </div>
        </div>
    )
}
