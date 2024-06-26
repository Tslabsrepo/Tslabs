import Image from "next/image";
import Navbar from "../components/navbar";
import Heading from "../components/project-details/heading";
import Details from "../components/project-details/details";
import RelatedProjects from "../components/project-details/related-projects";
import Footer from "../components/footer"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'TSL || nam',
};

export default function Home() {

  
  return (
    <main>
      <Navbar />
      <Heading />
      <Details />
      <RelatedProjects />
      <Footer />
    </main>
  );
}
