import "./App.css";
import Header from "./Header";
import SampleText from "./SampleText";
import Hero from "./Hero";
import About from "./About";
import CaseStudies from "./CaseStudies";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const hero = heroRef.current;
    if (!header || !hero) return;

    const update = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const headerBottom = header.getBoundingClientRect().bottom;
      setScrolled(heroBottom <= headerBottom);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    let heroObserver, headerObserver;
    if ("ResizeObserver" in window) {
      heroObserver = new ResizeObserver(update);
      headerObserver = new ResizeObserver(update);
      heroObserver.observe(hero);
      headerObserver.observe(header);
    }

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      heroObserver?.disconnect();
      headerObserver?.disconnect();
    };
  }, []);

  return (
    <div className={scrolled ? "app scrolled" : "app"}>
      <Header ref={headerRef} />
      <SampleText />
      <Hero ref={heroRef} />
      <About />
      <CaseStudies />
      <Footer />
    </div>
  );
}