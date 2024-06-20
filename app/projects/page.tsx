import Image from "next/image";
import Hero from "../components/projects/hero";
import ProjectDisplay from "../components/projects/projects-display"
import Footer from "../components/footer"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'TSL || Projects',
};

export default function Home() {

  
  return (
    <main>
      <Hero />
      <ProjectDisplay />
      <Footer />
    </main>
  );
}
