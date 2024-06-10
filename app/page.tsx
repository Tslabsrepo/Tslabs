import Image from "next/image";
import Hero from "./components/hero";
import Explore from "./components/explore";
import Reviews from "./components/carousel-review";

export default function Home() {
  return (
    <main>
      <Hero />
      <Explore />
      <Reviews />
    </main>
  );
}
