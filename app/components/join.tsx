
import TitleBadge from "@/components/ui/title-badge";
import Image from "next/image";

export default function JoinUs() {

    return (
        <div className="container mx-auto" >
            <div className="relative isolate px-6 py-20 lg:px-8 mb-10">

                <div className="bg-[#0F172A] px-10" style={{ borderRadius: '40px', display: 'flex' }} >
                    <div className="flex-1 px-7 text-white" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }} >
                        <div className="">

                            <TitleBadge text=" Contribute" />


                        </div>
                        <h2 className="pr-7" style={{ letterSpacing: '0.75%', lineHeight: '36px', fontSize: '32px', color: 'white', fontWeight: '600' }}>
                            Join the TS Labs Creator Community
                        </h2>

                        <div className="pr-20 mt-3" style={{ fontSize: '17px', lineHeight: '25px', fontWeight: '400', color: 'rgba(255, 255, 255, 1)' }}>
                            If you&apos;re working on something exciting that taps into new tech possibilities or perfecting a tool that could transform how we interact with technology,
                            we&apos;re all ears! Your project deserves a spotlight where it can shine and inspire—right here at TS Labs.
                        </div>

                        <div className="px-3 py-2 mt-9 hover:bg-white hover:text-[#0F172A] hover:cursor-pointer" style={{ border: '1px solid white', borderRadius: '6px', transition: '.3s ease' }}>
                            Contribute your projects
                        </div>
                    </div>

                    <div className="flex-1" style={{ height: '460px' }}>
                        <Image src={'/join.svg'} width={100} height={100} alt={'contribute'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                </div>
            </div>
        </div>
    )

}