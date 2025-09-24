import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {

  return <div className="flex flex-col items-center">
    <Navbar/>
    <Hero/>
    <About/>
  </div>




  
}