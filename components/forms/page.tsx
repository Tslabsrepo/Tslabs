'use client';
import react from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import formStyles from "./forms.module.css";
import Image from "next/image";
import Link from 'next/link';


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
    
    // projectLogo: z.instanceof(File).refine(file => file.size <= 5000000, "File size should be less than 5MB"), // Optional: File size validation
    
    projectScreenshots: z.string(),
    projectLogo: z.string(),

    projectWebsite: z.string().url({
         message: "Invalid URL format" 
    }),

    projectRepo: z.string().url({
         message: "Invalid URL format" }).refine(url => /github\.com/.test(url), 
         {
            message: "Project Repo must be a GitHub URL",
    }),

    projectCategory: z.array(z.string()).nonempty({
        message: "At least one category must be selected"
    }),

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
            projectLogo: "",
            projectScreenshots: "",
            projectCategory: [],
            projectWebsite: "",
            projectRepo: "",
            projectVersion: "",
            developersInfo: "",
            fileSize: "",
        },
    });

    const handleCategory = (category : string) =>{
        
        if (!form.getValues("projectCategory").includes(category)){
            // var btnContainer = document.getElementsByClassName("eachCategory");
            if(form.getValues("projectCategory").length >= 5){
                console.log("Max is 5. You cannot add anymore")
            }else{
                form.setValue("projectCategory", [...form.getValues("projectCategory"), category]);
                console.log(form.getValues("projectCategory"));
                console.log(form.getValues("projectCategory").length);
                return form.getValues("projectCategory");
            }
            
        }else{
            const categoryIndex = form.getValues("projectCategory").indexOf(category);
            const currentCategory = [...form.getValues("projectCategory")];

            currentCategory.splice(categoryIndex, 1);

            form.setValue("projectCategory", currentCategory);
            console.log("This exists: ",category);
            console.log("currentCategory: ",currentCategory);
        }
        
        
    };

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({values});
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
                                <Image src={'/cloudy.png'} alt={'cloud Image'} width={'40'} height={'40'} className='pb-2'/>
                                <div className={formStyles.appDragnDrop}><b>
                                    Drag and Drop or <span className='text-[#1D4ED8]'>Choose files</span> to upload</b>
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
                                <Image src={'/cloudy.png'} alt={'cloud Image'} width={'40'} height={'40'} className='pb-2'/>
                                <div className={formStyles.appDragnDrop}><b>
                                    Drag and Drop or <span className='text-[#1D4ED8]'>Choose files</span> to upload</b>
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
                                        categoryData.map((category, index) =>(
                                            <div key={index} className={`${formStyles.eachCategory} ${form.getValues("projectCategory").includes(category) ? formStyles.selectedCategory : formStyles.unselectedCategory}`} onClick={() => handleCategory(category)}>
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
                    <div className='text-base text-[#334155] items-center justify-center relative'>
                        <Image src={'/helpIcon.png'} alt={'cloud Image'} width={'17'} height={'10'} className='pb-2 absolute top-1'/>
                        <Link href={'/'}><div className='ml-5'> Help Center </div></Link>
                    </div>
                    <div className='flex items-center'>
                        {/* <div style={{borderRadius:'6px',padding:'8px 15px', marginRight:'15px', fontWeight:'400', color:'#0F172A'}}>Cancel</div> */}
                        {/* <div style={{backgroundColor:'#0F172A',color:'white', borderRadius:'6px',padding:'8px 15px',fontWeight:'400'}}>Submit</div> */}
                        <Link href={'/'}><Button variant="ghost" style={{color:'#0F172A', marginRight:'15px'}}>Cancel</Button></Link>
                        <Button type='submit' style={{color:'white', backgroundColor:'#0F172A',}}>Submit</Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default AllFormFields;