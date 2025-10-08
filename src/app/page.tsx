import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

import { SpotBlur } from "./components/SpotBlur";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SpotBlur placementVar="top-0 left-0"></SpotBlur>
      <SpotBlur placementVar="bottom-0 right-0"></SpotBlur>
      <Navbar />
      <Hero />
      <About />
      <Skills></Skills>
    </div>
  );
}
