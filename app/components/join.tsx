
import TitleBadge from "@/components/ui/title-badge";
import Image from "next/image";
import Link from 'next/link';
import heroStyles from './landingPage.module.css';

export default function JoinUs() {

    return (
        <div className="container mx-auto" >
            <div className="relative isolate px-6 py-20 lg:px-8 mb-10">
                
                <div className={` ${heroStyles.jonContainer} bg-[#0F172A]`} >
                    <div className={`${heroStyles.join1}  text-white`}>
                        <div className="">

                            <TitleBadge text=" Contribute" />


                        </div>
                        <h2 >
                            Join the TS Labs Creator Community
                        </h2>

                        <div className={` ${heroStyles.joinParagraph} text-base leading-6 font-normal`} >
                            If you're working on something exciting that taps into new tech possibilities or perfecting a tool that could transform how we interact with technology,
                            we're all ears! Your project deserves a spotlight where it can shine and inspire—right here at TS Labs.
                        </div>

                        <Link href={'/contributor-form'}>
                            <div className="px-3 py-2 mt-9 hover:bg-white hover:text-[#0F172A] hover:cursor-pointer" style={{border: '1px solid white',borderRadius:'6px', transition:'.3s ease'}}>
                                Contribute your projects
                            </div>
                        </Link>
                    </div>
                    
                   
                    <div className={heroStyles.join2} >
                        <Image src={'/conrtibImg.svg'} width={100} height={100} alt={'contribute'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                </div>
            </div>
        </div>
    )

}