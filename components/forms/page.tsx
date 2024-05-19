'use client';
import react from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import formStyles from "./forms.module.css";


const categoryData = [
    "Artificial Intelligence",
    "FinTech",
    "Mobile app",
    "Web app",
    "E-commerce",
    "Blockchain",
    "AR/VR",
    "IoT",
    "UI/UX",
    "Health Technology",
    "Media",
    "Cloud Computing",
];

const formSchema = z.object({
    projectTitle: z.string().min(10, {
        message: "Project Title must be atleast 10 characters",
    }),

    projectDescription: z.string().min(10, {
        message: "Project Description must be atleast 10 characters",
    }),
    
    projectLogo: z.instanceof(File).refine(file => file.size <= 5000000, "File size should be less than 5MB"), // Optional: File size validation
    
    projectScreenshots: z.string(),

    projectWebsite: z.string().url({
         message: "Invalid URL format" 
    }),

    projectRepo: z.string().url({
         message: "Invalid URL format" }).refine(url => /github\.com/.test(url), 
         {
            message: "Project Repo must be a GitHub URL",
    }),

    projectCategory: z.string(),

    projectVersion: z.string().nonempty({
         message: "Required"
    }),

    developersInfo: z.string().nonempty({ 
        message: "Project website is required" 
    }),

    fileSize: z.string().nonempty({ 
        message: "Required"
    }),
    // projectImage: z
    // .instanceof(File)
    //   .refine(file => file.size <= 5000000, "File size should be less than 5MB"), // Optional: File size validation

});


const AllFormFields = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            projectTitle: "",
            projectDescription: "",
            projectWebsite: "",
            projectRepo: "",
            projectVersion: "",
            developersInfo: "",
            fileSize: "",
        },
    });

    const onSubmit = () => {

    }
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                    control={form.control}
                    name="projectTitle"
                    render={({ field }) => (
                    <FormItem>
                                            
                        <FormControl>
                            <Input placeholder="Project Title:" {...field} className={formStyles.FormField} style={{}}/>
                        </FormControl>
                            <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                    <FormItem>
                                            
                        <FormControl>
                            <Input placeholder="Project Overview/Description:" {...field} className={formStyles.FormField} />
                        </FormControl>
                            <FormMessage />
                    </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="projectLogo"
                    render={() => (
                    <FormItem>
                        <FormLabel className={formStyles.appHeader}>Applications Logo</FormLabel>   
                        <FormControl>
                            <div className={formStyles.appImageContainers} >
                                <div className={formStyles.appDragnDrop}><b>
                                    Drag and Drop or <span className='color-[#1D4ED8]'>Choose files</span> to upload</b>
                                </div>
                                <div className={formStyles.appSupportedFiles}>
                                    Supported formats: JPG, PNG,MP4, SVG
                                </div>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projectScreenshots"
                    render={() => (
                    <FormItem>
                        <FormLabel className={formStyles.appHeader}>Applications Screenshots</FormLabel>   
                        <FormControl>
                            <div className={formStyles.appImageContainers} >
                                <div className={formStyles.appDragnDrop}><b>
                                    Drag and Drop or <span className='color-[#1D4ED8]'>Choose files</span> to upload</b>
                                </div>
                                <div className={formStyles.appSupportedFiles}>
                                    Supported formats: JPG, PNG,MP4, SVG
                                </div>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projectWebsite"
                    render={({ field }) => (
                    <FormItem>
                                            
                        <FormControl>
                            <Input placeholder="Link to Project Website:" {...field} className={formStyles.FormField} />
                        </FormControl>
                            <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projectRepo"
                    render={({ field }) => (
                    <FormItem>
                                            
                        <FormControl>
                            <Input placeholder="Link to Project Repo:" {...field} className={formStyles.FormField} />
                        </FormControl>
                            <FormMessage />
                    </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="projectCategory"
                    render={() => (
                    <FormItem>
                                            
                        <FormControl>
                            <>
                                <div className={formStyles.categoryHeader}> Project Category</div>
                                <div className={formStyles.categorysubHeader}>Select all that apply. Do not select more than 5.</div>
                                
                                <div className={`${formStyles.eachCategoryContainer} flex flex-wrap justify-between`}>
                                    {
                                        categoryData.map((category) =>(
                                            <div className={formStyles.eachCategory}>
                                                {category}
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                            
                        </FormControl>
                            <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projectVersion"
                    render={({ field }) => (
                    <FormItem>
                                            
                        <FormControl>
                            <>
                                <div className={formStyles.projectDetailsHeader} style={{}}> Project Details</div>
                                <Input placeholder="Project Version:" {...field} className={formStyles.FormField} />
                            </>
                        </FormControl>
                            <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="developersInfo"
                    render={({ field }) => (
                    <FormItem>
                                            
                        <FormControl>
                            
                            <Input placeholder="Developer’s Information:" {...field} className={formStyles.FormField} />
                           
                        </FormControl>
                            <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="fileSize"
                    render={({ field }) => (
                    <FormItem>
                                            
                        <FormControl>
                            
                            <Input placeholder="File Size:" {...field} className={formStyles.FormField} />
                           
                        </FormControl>
                            <FormMessage />
                    </FormItem>
                    )}
                />
                {/* Project Category */}
                
                <div className={formStyles.formFooter}>
                    <div>Help Center</div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        {/* <div style={{borderRadius:'6px',padding:'8px 15px', marginRight:'15px', fontWeight:'400', color:'#0F172A'}}>Cancel</div> */}
                        {/* <div style={{backgroundColor:'#0F172A',color:'white', borderRadius:'6px',padding:'8px 15px',fontWeight:'400'}}>Submit</div> */}
                        <Button variant="ghost" style={{color:'#0F172A', marginRight:'15px'}}>Cancel</Button>
                        <Button type='submit' style={{color:'white', backgroundColor:'#0F172A',}}>Submit</Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default AllFormFields;