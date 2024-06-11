import Image from "next/image";
import Hero from "./components/hero";
import Explore from "./components/explore";
import Reviews from "./components/carousel-review";
import JoinUs from "./components/join";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Explore />
      <Reviews />
      <JoinUs />
      
      <Footer />
    </main>
  );
}
