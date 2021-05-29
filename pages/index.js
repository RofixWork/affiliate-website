import About from "../components/About";
import Banner from "../components/Banner";
import Cliens from "../components/Clients";
import Contact from "../components/Contact";
import Dna from "../components/Dna";
import Faq from "../components/Faq";
import Features from "../components/Features";
import ImportantFeatures from "../components/ImportantFeatures";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <About />
      <Pricing />
      <Dna />
      <ImportantFeatures />
      <Faq />
      <Cliens />
      <Contact />
    </>
  );
}
