
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SortProjects({ onSort, sortValue = null }) {

    // return;
    return (
        <div className="py-1" style={{ display: 'flex', alignItems: 'center', border: '1px solid #E2E8F0', paddingLeft: '10px', borderRadius: '6px' }}>
            <div>Sort:</div>
            <Select onValueChange={onSort} defaultValue={sortValue}>
                <SelectTrigger className="w-[150px]" style={{ outline: 'none', border: 'none' }}>
                    <SelectValue placeholder="Sort results" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="asc">A-Z</SelectItem>
                    <SelectItem value="desc">Z-A</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    {/* <SelectItem value="light">Best Rated</SelectItem>
 */}
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