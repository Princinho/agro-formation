import { useState, useEffect } from "react";

import "./styles/globals.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import WhyAfrica from "./components/WhyAfrica";
import Program from "./components/Program";
import Testimonials from "./components/Testimonials";
import Tickets from "./components/Tickets";
import { Faq, CtaFinal, Footer } from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar scrolled={scrolled} />
      <Hero />
      {/* <Stats /> */}
      {/* <About />
      <WhyAfrica />
      <Program />
      <Testimonials />
      <Tickets />
      <Faq />
      <CtaFinal /> */}
      {/* <Footer /> */}
    </>
  );
}
