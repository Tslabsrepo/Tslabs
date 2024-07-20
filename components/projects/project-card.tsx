import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import iProject from "./project.interface"
import Image from "next/image"
import Link from "next/link"
import { getUploadImage } from "@/lib/helpers"


export default function ProjectCard({ project }: { project: iProject }) {

    return (
        <Link href={'/projects/' + project.id}>
            <Card className="p-4 pb-8 h-[350px] flex flex-col justify-between" >
                <CardHeader style={{ padding: '0' }}>
                    <div style={{ marginBottom: '10px', width: '100%' }}>
                        {project?.attributes?.projectLogo ?
                            <Image src={getUploadImage(project?.attributes?.projectLogo)} width={100} height={100} alt={'project view'} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px 4px 0 0' }} />
                            :
                            null
                        }
                    </div>
                    <CardTitle className="py-2" style={{ fontSize: '18px', color: '#334155', wordWrap: "break-word" }}> {project?.attributes?.projectTitle}</CardTitle>
                    {/* <CardDescription className="pb-2" style={{ fontSize: '16px', color: '#334155', lineHeight: '24px', fontWeight: '400' }}>Artificial Intelligence</CardDescription> */}
                    {/* <CardDescription className="pb-2" style={{ fontSize: '16px', color: '#334155', lineHeight: '24px', fontWeight: '400' }}>{project?.attributes?.projectDescription}</CardDescription> */}
                </CardHeader>
                <CardContent style={{ padding: '0', color: '#94A3B8', fontSize: '16px', fontWeight: '400', display: 'flex' }}>
                    <p className="mr-2">By: </p>
                    <p style={{ borderBottom: '1px solid #94A3B8' }}>TS Labs</p>

                </CardContent>
                {/* <CardFooter style={{padding:'0'}}>
                <p>Card Footer</p>
            </CardFooter> */}
            </Card>
        </Link>
    )
}