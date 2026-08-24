import Assistant from "@/components/Assistant";
import Footer from "@/sections/Footer";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Gallery from "@/sections/Gallery";
import Sponsors from "@/sections/Sponsors";
import Venue from "@/sections/Venue";
import Registration from "@/sections/Registration";
import Schedule from "@/sections/Schedule";
import Speakers from "@/sections/Speakers";
import WhyAttend from "@/sections/WhyAttend";
import Stats from "@/sections/Stats";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import DP from "@/sections/DP";
import EventSchema from "@/components/EventSchema";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <WhyAttend />
      <Speakers />
      <Schedule />
      <Registration />
      <Venue />
      <Sponsors />
      <DP />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <Assistant />
      <EventSchema />
      
    </main>
  );
}