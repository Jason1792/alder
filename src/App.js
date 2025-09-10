import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import ImageModal from "./ImageModal";
import About from "./About";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [cardData, setCardData] = useState([]);
  const [filteredCardData, setFilteredCardData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
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

useEffect(() => {
  fetch("https://script.google.com/macros/s/AKfycbwQzD1dkgPWq_pgNCH39zAZmMj5IeUdIRBbn_UYufarCEwH45PplxWrQQbOt8lBUEyt/exec")
    .then(res => res.json())
      .then(data => {
        setCardData(data);
        setFilteredCardData(data); // Initialize filtered data with all cards
      });
  }, []);

  return (
    <div className={scrolled ? "app scrolled" : "app"}>
      <Header ref={headerRef} />
      <Hero ref={heroRef} />

      <About />


      <section className="case-studies-outer">
        <div className="case-studies-inner inner">
                <h2>CASE STUDIES</h2>
                {filteredCardData.length > 0 ? (
        <div className="card-grid">
                {filteredCardData.map((card, idx) => (
        <Card
          key={idx}
          field_02={card.field_02}
          field_03={card.field_03}
          field_04={card.field_04}
          field_05={card.field_05}
          field_06={card.field_06}
          field_07={card.field_07}
          field_08={card.field_08}
          onCardClick={() => setSelectedIndex(idx)}   // store index instead of card
      />
      ))}  
        </div>
    ) : (
        <div className="no-results">
                <p>Loading...</p>
        </div>
    )}
        </div>
        </section>

      <Footer />
       {selectedIndex !== null && (
  <ImageModal
    field_02={filteredCardData[selectedIndex].field_02}
    field_03={filteredCardData[selectedIndex].field_03}
    field_04={filteredCardData[selectedIndex].field_04}
    field_05={filteredCardData[selectedIndex].field_05}
    field_06={filteredCardData[selectedIndex].field_06}
    field_07={filteredCardData[selectedIndex].field_07}
    onClose={() => setSelectedIndex(null)}
    onNext={() =>
      setSelectedIndex((prev) =>
        (prev + 1) % filteredCardData.length
      )
    }
    onPrev={() =>
      setSelectedIndex((prev) =>
        (prev - 1 + filteredCardData.length) % filteredCardData.length
      )
    }
  />
)}

    </div>
  );
}