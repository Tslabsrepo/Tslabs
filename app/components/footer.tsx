import ProjectsList from "@/components/projects/projects-list";
import iProject from "@/components/projects/project.interface";
import TitleBadge from "@/components/ui/title-badge";
import exploreStyle from "./explore.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    
    return (
        <div className="container mx-auto">
            <div className="relative isolate px-6 py-5 lg:px-8">
                <div className="py-3" style={{ display:'flex', justifyContent:'space-between'}}>
                    <div>
                        <Image src={'/logo.png'} width={100} height={30} alt={'logo'} />
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',fontWeight:'400', lineHeight:'24px', fontSize:'16px', color:'#0F172A', width:'30%'}}>
                        <div>Term of privacy</div>
                        <div>Privacy policy</div>
                        <div>Contact us</div>
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'10%'}}>
                        <div>
                            <Image src={'/facebook.png'} width={20} height={20} alt={'logo'} />
                        </div>
                        <div>
                            <Image src={'/instagram.png'} width={'20'} height={'20'} alt={'logo'} />
                        </div>

                        <div>
                            <Image src={'/twitter.png'} width={'20'} height={'20'} alt={'logo'} />
                        </div>

                        <div>
                            <Image src={'/linkedin.png'} width={'20'} height={'20'} alt={'logo'} />
                        </div>
                        
                    </div>
                </div>
                
                <div className="text-center py-3">© 2024 Transition School, Inc. All rights reserved.</div>

            </div>
        </div>
    )

}