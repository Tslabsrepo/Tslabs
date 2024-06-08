'use client';
// import react from "React";
import AllFormFields from '@/components/forms/page';
import formStyles from './forms.module.css';
import Image from 'next/image';
import Link from 'next/link';



const UsersPage = () => {   

    return(
        
        <>
             {/* Navbar (To be removed) */}
            <div style={{border:'1px solid black', height:'70px',backgroundColor:'#0F172A'}}> </div>

            {/* Form Section */}

            <div className={formStyles.mainFormContainer} >
                <div >
                    <h1> Add Project</h1>

                    <div style={{}}>
                        
                        {/* All Form Fields */}

                        <AllFormFields/>
                        <div className={formStyles.socialFooter}>
                            <div className={formStyles.socialicons}>
                                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <Image src="/facebook.png" width="30" height="30" alt="Facebook icon" />
                                </Link>
                                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Image src="/instagram.png" width="30" height="30" alt="Instagram icon" />
                                </Link>
                                <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <Image src="/twitter.png" width="30" height="30" alt="Twitter icon" />
                                </Link>
                                <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Image src="/linkedin.png" width="30" height="30" alt="LinkedIn icon" />
                                </Link>
                            </div>

                            <div className={formStyles.socialLinks}>
                                <div>Terms of service</div>
                                <div>Privacy policy</div>
                                <div>Contact us</div>
                            </div>

                            <div className={formStyles.socialRights}>
                            © 2024 Transition School, Inc. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersPage;