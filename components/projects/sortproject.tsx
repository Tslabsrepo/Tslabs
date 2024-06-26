
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SortProjects() {
   
    return (
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E2E8F0', paddingLeft: '10px', borderRadius: '6px' }}>
            <div>Sort:</div>
                <Select>
                    <SelectTrigger className="w-[150px]" style={{ outline: 'none', border: 'none' }}>
                        <SelectValue placeholder="Best Rated" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Best Rated</SelectItem>
                        <SelectItem value="dark">Date posted</SelectItem>
                                        {/* <SelectItem value="system">System</SelectItem> */}
                    </SelectContent>
                </Select>
        </div>

        // <div className="grid md:grid-cols-3 gap-10 py-5" >
        // {projects.map((project, index: number) => (
        //     <ProjectCard project={project} key={index} />
        // ))}
        // </div>
    )
}