import { useEffect, useState } from "react";
import Card from "./Card";
import CaseStudyModal from "./CaseStudyModal";
import "./CaseStudies.css";

export default function CaseStudies({
  dataUrl = "https://script.google.com/macros/s/AKfycbwQzD1dkgPWq_pgNCH39zAZmMj5IeUdIRBbn_UYufarCEwH45PplxWrQQbOt8lBUEyt/exec",
}) {
  const [filtered, setFiltered] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  // Headline-level accordion state
  const [outerOpen, setOuterOpen] = useState(false);
  useEffect(() => {
    const ac = new AbortController();
    setLoading(true);
    setErrorMsg("");

    fetch(dataUrl, { signal: ac.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setFiltered(data || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setErrorMsg("Unable to load case studies.");
          // console.error(err);
        }
      })
      .finally(() => setLoading(false));

    return () => ac.abort();
  }, [dataUrl]);

  return (
    <>
      <section className="case-studies-outer">
        <div className="case-studies-inner inner">
          <h2>
                <button
              type="button"
              className="accordion-button"
              aria-expanded={outerOpen}
              aria-controls="case-studies-panel"
              onClick={() => setOuterOpen((o) => !o)}
            >
              <span className="accordion-button-label">CASE STUDIES</span>
              <i className="bi bi-chevron-right accordion-button-icon" aria-hidden="true" />
            </button>
        </h2>
          <div id="case-studies-panel" hidden={!outerOpen}>
          {loading ? (
            <div className="no-results">
              <p>Loading...</p>
            </div>
          ) : errorMsg ? (
            <div className="no-results">
              <p>{errorMsg}</p>
            </div>
          ) : filtered.length > 0 ? (
            <div className="card-grid">
              {filtered.map((card, idx) => (
                <Card
                  key={idx}
                  field_02={card.field_02}
                  field_03={card.field_03}
                  field_04={card.field_04}
                  field_05={card.field_05}
                  field_06={card.field_06}
                  field_07={card.field_07}
                  field_08={card.field_08}
                  onCardClick={() => setSelectedIndex(idx)}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No results.</p>
            </div>
          )}
          </div>
        </div>
      </section>

      {selectedIndex !== null && filtered[selectedIndex] && (
        <CaseStudyModal
          field_02={filtered[selectedIndex].field_02}
          field_03={filtered[selectedIndex].field_03}
          field_04={filtered[selectedIndex].field_04}
          field_05={filtered[selectedIndex].field_05}
          field_06={filtered[selectedIndex].field_06}
          field_07={filtered[selectedIndex].field_07}
          onClose={() => setSelectedIndex(null)}
          onNext={() =>
            setSelectedIndex((prev) => (prev + 1) % filtered.length)
          }
          onPrev={() =>
            setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
          }
        />
      )}
    </>
  );
}
