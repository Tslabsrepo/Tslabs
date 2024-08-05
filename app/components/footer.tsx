import ProjectsList from "@/components/projects/projects-list";
import iProject from "@/components/projects/project.interface";
import TitleBadge from "@/components/ui/title-badge";
import heroStyles from "./landingPage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <div className="container mx-auto">
            <div className="relative isolate px-6 py-5 lg:px-8">
                <div className={` ${heroStyles.topfooter} py-3`}>
                    <div className={heroStyles.footerImgContainer}>
                        <Image src={'/logo.png'} width={100} height={30} alt={'logo'} />
                    </div>
                    {/* <div className={heroStyles.footerlinks} style={{}}>
                        <div>Term of privacy</div>
                        <div>Privacy policy</div>
                        <div>Contact us</div>
                    </div> */}
                    <div className={`${heroStyles.footerSocialLinks} flex items-center justify-between`} >
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
                </div>

                <div className="text-center py-3 mt-10 text-sm">© 2024 Transition School, Inc. All rights reserved.</div>

            </div>
        </div>
    )

}