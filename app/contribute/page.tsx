
import AllFormFields from '@/components/forms/page';
import formStyles from './forms.module.css';
import Image from 'next/image';
import NavigationMenu from '../components/navbar';
import Link from 'next/link';
// import { Metadata } from 'next';

// Page Title


const UsersPage = () => {

    return (

        <>
            {/* Navbar (To be removed) */}
            <NavigationMenu />


            {/* Form Section */}

            <div className={formStyles.mainFormContainer} >
                <div >
                    <h1 > Add Project</h1>

                    <div>

                        {/* All Form Fields */}

                        <AllFormFields />
                        <div className={formStyles.socialFooter}>
                            <div className={formStyles.socialicons}>
                                <a href="https://facebook.com/transitionschl">
                                    <Image src={'/facebook.png'} width={20} height={20} alt={'logo'} />
                                </a>
                                <a href="https://instagram.com/transitionschool">
                                    <Image src={'/instagram.png'} width={'20'} height={'20'} alt={'logo'} />
                                </a>
                                <a href="https://twitter.com/transitionschl">
                                    <Image src={'/twitter.png'} width={'20'} height={'20'} alt={'logo'} />
                                </a>
                                <a href="https://linkedin.com/company/transitionschool">
                                    <Image src={'/linkedin.png'} width={'20'} height={'20'} alt={'logo'} />
                                </a>
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