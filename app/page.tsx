import Image from "next/image";
import Hero from "./components/hero";
import Explore from "./components/explore";

export default function Home() {
  return (
    <main>
      <Hero />
      <Explore />
      {/* <h1>OOPs!! PAge is still under contruction</h1> */}
    </main>
  );
}
