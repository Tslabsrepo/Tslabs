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


export default function ProjectCard({ project }: iProject) {
    return (
        <Card className="p-4 pb-8">
            <CardHeader style={{padding:'0'}}>
                <div style={{marginBottom:'10px',width:'100%', height:'210px'}}>
                    <Image src={'/testImg.png'} width={100} height={100} alt={'project view'} style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius:'4px 4px 0 0'}}/>
                </div>
                <CardTitle className="py-2" style={{fontSize:'18px', color:'#334155'}}>VirtualArt Gallery</CardTitle>
                <CardDescription className="pb-2" style={{fontSize:'16px', color:'#334155', lineHeight:'24px', fontWeight:'400'}}>AR/VR experience for exploring digital art galleries.</CardDescription>
            </CardHeader>
            <CardContent style={{ padding:'0', color:'#94A3B8', fontSize:'16px', fontWeight:'400', display:'flex'}}>
                <p className="mr-2">By: </p>
                <p style={{borderBottom:'1px solid #94A3B8'}}>TS Labs</p>
                
            </CardContent>
            {/* <CardFooter style={{padding:'0'}}>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>
    )
}