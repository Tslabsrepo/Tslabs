'use client'
import Navbar from "@/app/components/navbar";
import Heading from "@/app/components/project-details/heading";
import Details from "@/app/components/project-details/details";
import RelatedProjects from "@/app/components/project-details/related-projects";
import Footer from "@/app/components/footer"
import { Metadata } from "next";
import projectService from "@/lib/services/projects";
import iProject from "@/components/projects/project.interface";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: 'TSL || nam',
// };

export default function Home({
  params: { id },
}: {
  params: { id: string }
}) {

  const [project, setProject] = useState(null);

  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    try {
      const response = await projectService.getById(id);

      if (!response.ok) {
        console.log("Error occured");
      }
      const data = await response.json();

      if (data.data) {
        setProject(data.data);
      }

    } catch (error: any) {
      console.log(error.message);
    }
  };


  if (!project) return;
  return (
    <main>
      <Navbar />
      <Heading project={project} />
      <Details project={project} />
      {/* <RelatedProjects /> */}
      <Footer />
    </main>
  );
}


