'use client';
import { useState, useCallback, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import formStyles from "./forms.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useDropzone } from 'react-dropzone';
import uploadService from '@/lib/services/uploads';




const formSchema = z.object({
    projectTitle: z.string().min(10, {
        message: "Project Title must be atleast 10 characters",
    }),

    projectDescription: z.string().min(10, {
        message: "Project Description must be atleast 10 characters",
    }),

    projectScreenshots: z.string(),
    projectLogo: z.string(),

    projectWebsite: z.string().url({
        message: "Invalid URL format"
    }),

    projectRepo: z.string().url({
        message: "Invalid URL format"
    }).refine(url => /github\.com/.test(url),
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

    // fileSize: z.string().nonempty({
    //     message: "Required"
    // }),

    fileSize: z.string().min(1,{
            message: "File size is required",
        })
        .refine(
            (val) => /^[0-9]+(MB|mb|Gb|gb|TB|tb)$/.test(val),
            {
                message: "File size must be a number followed by MB, GB, or TB example: 3MB or 3mb",
            }
        )
        .refine(
            (val) => !/\s/.test(val),
            {
                message: "File size must not contain spaces.",
            }
        ),
  
});


const AllFormFields = () => {
    const [imageSrc, setImageSource] = useState('/check.png');
    const [fileSelected, setFileSelected] = useState<File[]>([]);
    const [screenshotFile, setScreenshotFile] = useState([]);

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

    const handleCategory = (category: string) => {

        if (!form.getValues("projectCategory").includes(category)) {
            if (form.getValues("projectCategory").length >= 5) {
                console.log("Max is 5. You cannot add anymore")
            } else {
                form.setValue("projectCategory", [...form.getValues("projectCategory"), category]);
                // console.log(form.getValues("projectCategory"));
                return form.getValues("projectCategory");
            }

        } else {
            const categoryIndex = form.getValues("projectCategory").indexOf(category);
            const currentCategory = [...form.getValues("projectCategory")];

            currentCategory.splice(categoryIndex, 1);

            form.setValue("projectCategory", currentCategory as any);


        }


    };

    // Dropzone component
    const handleDrop = (acceptedFiles: any) => {
        console.log(acceptedFiles);

    }

    const handleScreenshotDrop = (acceptedFiles: any) => {
        // console.log(acceptedFiles);
        const file = acceptedFiles[0];


        handleUpload(acceptedFiles).then((response: any) => {
            console.log({ response })
            if (response) {
                form.setValue("projectScreenshots", response[0].url);
            }
        }).catch((e) => {
            console.log('an error occured with upload', { e })
        });


        if (file) {
            // form.setValue("projectScreenshots", file.name);
            // setFileSelected(true);
            // Handle file upload logic here, e.g., save the file or preview it
            // console.log("File selected:", file);


            return file;
        }
    }


    const handleUpload = async (file: any) => {
        const response: any = await uploadService.store(file);

        if (!response) {
            return false;
        }
        return response[0];

    }

    const onDrop = useCallback((acceptedFiles: any) => {
        if (acceptedFiles?.length) {
            // setScreenshotFile((previousFiles: any) => [
            //     ...previousFiles,
            //     ...acceptedFiles.map((file: any) =>
            //         Object.assign(file, { preview: URL.createObjectURL(file) })
            //     )
            // ])
            const file: any = [
                ...screenshotFile,
                ...acceptedFiles.map((file: any) =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                )
            ];

            setScreenshotFile(file);
        }
    }, [])

    const { getRootProps: getLogoRootProps, getInputProps: getLogoInputProps, open: openLogo, acceptedFiles: acceptedLogoFile } = useDropzone({
        // validator<any>: handleDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            'image/svg+xml': ['.svg'],
            // 'video/mp4': ['.mp4']
        },
        onDrop: acceptedLogoFile => {
            setFileSelected(acceptedLogoFile.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })))
        },
        noClick: true,
        noKeyboard: true,

    });

    const { getRootProps: getScreenshotRootProps, getInputProps: getScreenshotInputProps, open: openScreenshots, acceptedFiles } = useDropzone({
        onDrop,
        validator: handleScreenshotDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
            'image/svg+xml': ['.svg'],
            // 'video/mp4': ['.mp4']
        },

        noClick: true,
        noKeyboard: true
    });



    const deleteFile = (name: any) => {
        console.log(name);
        setScreenshotFile(screenshotFile => screenshotFile.filter((file: any) => file.name != name));
    }




    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await fetch('https://ts-labs-admin-0ff0c6162225.herokuapp.com/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 31d3957bc8f1b2ffb30a152d44cc04d45bf4d7ab6ec58dc32815887118f8632a879c8de097a0a1784a0977099e33bdc76acba6adf945defac5046202137f92e44863ba1a90cd6fe494224ce2b6f5ea35bc722d2b62e6e9858a5f8443522ac86772c886e93c6a91c71b8a3af6a9e9d0920042ca8adf5d9b0c3cf67792cd0cdc8a'
                },
                body: JSON.stringify({
                    data: {
                        projectTitle: values.projectTitle,
                        projectDescription: values.projectDescription,
                        projectURL: values.projectWebsite,
                        projectRepo: values.projectRepo,
                        // projectScreenshots: values.projectScreenshots,
                        // projectLogo: values.projectLogo,
                        // projectCategory: values.projectCategory,
                        // developersInfo: values.developersInfo,
                        // fileSize: values.fileSize,
                    }
                }),
            });

            if (response.ok) {
                alert('Form data submitted successfully');

                console.log('Form data submitted successfully');
            } else {

                alert('Failed to submit form data');

                console.error('Failed to submit form data');
            }
        } catch (error) {
            alert('Error submitting form data. Please check console');

            console.error('Error submitting form data:', error);
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                    control={form.control}
                    name="projectTitle"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Project Title:" {...field} className={formStyles.FormField} />
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
                                <Textarea placeholder="Project Overview/Description:" {...field} className={formStyles.FormField} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projectLogo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={formStyles.appHeader}>Applications Logo</FormLabel>
                            <FormControl>
                                <div {...getLogoRootProps({
                                    className: formStyles.appImageContainers
                                })} >
                                    <input {...getLogoInputProps()} />
                                    <Image src={'/cloudy.png'} alt={'cloud Image'} width={40} height={40} className='pb-2' />
                                    <div className={formStyles.appDragnDrop}><b>
                                        {fileSelected ? "Drag and Drop to Change Document" : "Drag and Drop"} or <span className='text-[#1D4ED8]' style={{ cursor: 'pointer' }} onClick={openLogo}>Choose files</span> to upload</b>
                                    </div>
                                    <div className={formStyles.appSupportedFiles}>
                                        Supported formats: JPG, PNG, MP4, SVG
                                    </div>


                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* LOGO IMAGE PREVIEW */}
                <div >
                    {
                        fileSelected.map((file: any, index) => (
                            <div key={index} style={{ border: '1px solid #CBD5E1', borderRadius: '6px', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', marginTop: '5px', transition: '.5s ease' }}>
                                {/* <Image src={'/'} /> */}
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ display: 'flex', marginRight: '20px', width: 'auto' }}>
                                        <div style={{ width: '50px', height: '50px', border: '1px solid black', borderRadius: '6px' }}>
                                            <Image src={file?.preview} width={100} height={100} alt={'image'}
                                                onLoad={() => (URL.revokeObjectURL(file?.preview))}

                                                style={{ border: '1px solid black', padding: '0' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '5px' }}>
                                            <div style={{ fontSize: '16px', fontWeight: '500', lineHeight: '24px' }}> {file.name}</div>
                                            <div style={{ fontSize: '14px' }}> 5 MB</div>
                                        </div>

                                    </div>
                                    <div style={{ width: '100%', position: 'relative' }}>
                                        <div style={{ backgroundColor: '#1E3A8A', height: '8px', borderRadius: '5px', position: 'absolute', bottom: '5px', width: '70%' }}></div>
                                    </div>
                                </div>

                                <div style={{ width: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'end', paddingTop: '3px' }}>
                                    {/* <div style={{fontSize:'14px', fontWeight:'500', lineHeight:'24px'}}> logo.png</div> */}
                                    <Image src={'/check.png'} height={'20'} width={'20'} alt={'check img'} />
                                    <div style={{ fontSize: '14px' }}> 100%</div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <FormField
                    control={form.control}
                    name="projectScreenshots"
                    render={() => (
                        <FormItem>
                            <FormLabel className={formStyles.appHeader}>Applications Screenshots</FormLabel>
                            <FormControl>
                                <FormControl>
                                    <div {...getScreenshotRootProps()} className={formStyles.appImageContainers}>
                                        <input {...getScreenshotInputProps()} />
                                        <Image src={'/cloudy.png'} alt={'cloud Image'} width={40} height={40} className='pb-2' />
                                        <div className={formStyles.appDragnDrop}><b>
                                            {fileSelected ? "Drag and Drop to Change Document" : "Drag and Drop"} or <span className='text-[#1D4ED8]' style={{ cursor: 'pointer' }} onClick={openScreenshots}>Choose files</span> to upload</b>
                                        </div>
                                        <div className={formStyles.appSupportedFiles}>
                                            Supported formats: JPG, PNG, MP4, SVG
                                        </div>
                                        {/* <p>{screenshotfiles}</p> */}
                                        {/* { fileSelected ? (<p className='mt-5 border border-slate-800'> file appears here ...</p>) : ()} */}
                                        {/* {fileSelected && (<p className='mt-5 border border-[#1D4ED8] text-[#1D4ED8] px-3 py-2 rounded font-bold hover:cursor-default'> {files}</p>)} */}


                                    </div>

                                </FormControl>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* add to show when there are images availble to show */}
                <div >
                    {

                        screenshotFile.map((file: any, index) => (
                            <div key={index} style={{ border: '1px solid #CBD5E1', borderRadius: '6px', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', marginTop: '5px', transition: '.5s ease' }}>
                                {/* <Image src={'/'} /> */}
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ display: 'flex', marginRight: '20px', width: 'auto' }}>
                                        <div style={{ width: '50px', height: '50px', border: '1px solid black', borderRadius: '6px' }}>
                                            <Image src={file?.preview} width={100} height={100} alt={'image'}
                                                onLoad={() => (URL.revokeObjectURL(file?.preview))}

                                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '5px' }}>
                                            <div style={{ fontSize: '16px', fontWeight: '500', lineHeight: '24px' }}> {file.name}</div>
                                            <div style={{ fontSize: '14px' }}> 5 MB</div>
                                        </div>

                                    </div>
                                    <div style={{ width: '100%', position: 'relative' }}>
                                        <div style={{ backgroundColor: '#1E3A8A', height: '8px', borderRadius: '5px', position: 'absolute', bottom: '5px', width: '70%' }}></div>
                                    </div>
                                </div>

                                <div style={{ width: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'end', paddingTop: '3px' }}>
                                    {/* <div style={{fontSize:'14px', fontWeight:'500', lineHeight:'24px'}}> logo.png</div> */}
                                    <Image src={imageSrc} height={'20'} width={'20'} alt={'check img'} onClick={() => deleteFile(file.name)} onLoad={() => { setTimeout(() => { setImageSource('/cloudy.png') }, 3000) }} />
                                    <div style={{ fontSize: '14px' }}> 100%</div>
                                </div>
                            </div>
                        ))
                    }
                </div>

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

                                            categoryData.map((category) => {
                                                // const maxSelected = ;
                                                const isSelected = form.getValues("projectCategory").includes(category);
                                                const maxSelected = form.getValues("projectCategory").length >= 5;
                                                return (
                                                    <div key={category} className={`${formStyles.eachCategory} ${isSelected ? formStyles.selectedCategory : formStyles.unselectedCategory} ${maxSelected && !isSelected ? formStyles.notselectedCategory : ''}`}
                                                        onClick={() => handleCategory(category)}>
                                                        {category}
                                                    </div>
                                                )
                                            })
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
                    <div className={` ${formStyles.footerHelp} text-base text-[#334155] items-center justify-center relative`}>
                        <Image src={'/helpIcon.png'} alt={'cloud Image'} width={'17'} height={'10'} className='pb-2 absolute top-1' />
                        <Link href={'/'}><div className='ml-5'> Help Center </div></Link>
                    </div>
                    <div className='flex items-center'>
                        <Link href={'/'}><Button variant="ghost" style={{ color: '#0F172A', marginRight: '15px' }}>Cancel</Button></Link>
                        <Button type='submit' style={{ color: 'white', backgroundColor: '#0F172A', }}>Submit</Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default AllFormFields;