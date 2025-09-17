import { useState, useMemo } from "react";
import "./About.css";

function About() {
  // Track inner (nested) panels by id (Set allows multiple open)
  const [openIds, setOpenIds] = useState(new Set());
  // Top-level (headline) accordion state
  const [outerOpen, setOuterOpen] = useState(false);
  // Helper: toggle a single id
  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Sections (h3-level)
  const sections = useMemo(
    () => [
      {
        id: "mission",
        title: "MISSION",
        content: (
          <p>
            Alder Advisory partners with organizations at pivotal moments of growth or transformation. We meet clients
            where they are, and bring strategic expertise rooted in financial discipline, systems thinking, and
            values-based leadership to help clients align mission, metrics, and execution. Whether scaling sustainability
            strategy, enhancing operational resilience, or navigating regulatory complexity, we provide thought partnership
            and hands-on support to turn ambition into meaningful and effective results.
          </p>
        ),
      },
      {
        id: "values",
        title: "VALUES",
        content: (
          <>
            <h4>INTEGRITY &amp; ACCOUNTABILITY</h4>
            <p>
              We uphold the highest ethical standards, delivering transparent, audit-ready, and regulatory-compliant
              strategies that build long-term trust.
            </p>
            <h4>STRATEGIC INNOVATION &amp; INTERNAL OWNERSHIP</h4>
            <p>
              We co-create solutions that are both visionary and pragmatic. By partnering closely with internal teams, we
              foster shared ownership and embed capabilities that enable durable systems change.
            </p>
            <h4>TRANSFORMATION WITH PURPOSE</h4>
            <p>
              We help leaders navigate complexity, driving climate resilience and social equity through cross-functional
              strategy and operational alignment.
            </p>
            <h4>EQUITY &amp; INCLUSION</h4>
            <p>
              We design together with communities, elevating stakeholder-led leadership and voices of women, people of
              color, and underserved populations.
            </p>
          </>
        ),
      },
      {
        id: "core-services",
        title: "CORE SERVICES",
        content: (
          <>
            <h4>STRATEGY &amp; SYSTEMS TRANSFORMATION</h4>
            <ul>
              <li>
                Design and operationalize organizational strategies including sustainability roadmaps, new business units,
                teams and internal functions, tailored to each client&apos;s mission, market, and stage of growth.
              </li>
              <li>
                Build from the ground up by developing structures, workflows, and governance models where none exist.
                Support clients in launching new programs, teams, or capabilities that align with strategic priorities.
              </li>
              <li>
                Support sustainability and climate-aligned transformation through ESG integration including materiality
                assessments, decarbonization strategies, climate finance thought partnership, and cross-functional planning
                that embeds environmental and social impact across the enterprise.
              </li>
            </ul>
            <h4>ESG &amp; REGULATORY REPORTING</h4>
            <ul>
              <li>
                Design and implement investor-grade ESG reporting frameworks (GRI, IFRS/ISSB/SASB, EU CSRD, TCFD, EU
                Taxonomy, GHG Protocol) and public-facing reporting including aligned sustainability and annual reports.
              </li>
              <li>Conduct single or double materiality assessments and develop board-ready disclosures and metrics.</li>
              <li>Lead ESG ratings optimization, assurance planning, and audit preparation for public and private entities.</li>
            </ul>
            <h4>OPERATIONAL INFRASTRUCTURE &amp; COMPLIANCE</h4>
            <ul>
              <li>Strengthen financial and operational infrastructure through systems design, internal controls, and contract lifecycle management.</li>
              <li>Align business functions and systems with environmental, social, and governance principles and compliance standards (SOx, GAAP, IFRS, Sustainability regulations and standards).</li>
              <li>Support risk management, policy design, and cross-departmental accountability mechanisms.</li>
            </ul>
            <h4>STAKEHOLDER ENGAGEMENT &amp; COLLABORATIVE INITIATIVES</h4>
            <ul>
              <li>Facilitate stakeholder mapping, engagement strategy, and coalition development.</li>
              <li>Design and produce social impact events, learning labs, and participatory workshops.</li>
              <li>Build internal Green Teams, cross-sector task forces, and peer learning networks that foster ownership and momentum.</li>
            </ul>
            <h4>INTERIM EXECUTIVE LEADERSHIP &amp; CAPABILITY BUILDING</h4>
            <ul>
              <li>Provide interim sustainability, ESG controllership, or operational leadership during transitions, restructuring, or growth periods.</li>
              <li>Build internal capacity through team mentorship, governance support, and succession planning.</li>
              <li>Coach and support leaders stepping into roles of greater visibility and responsibility.</li>
            </ul>
          </>
        ),
      },
    ],
    []
  );
const handleOuterToggle = () => {
  setOuterOpen((prev) => {
    if (prev === true) {
      // if we’re about to close, clear nested panels
      setOpenIds(new Set());
    }
    return !prev; // toggle open/closed
  });
};
// Render
return (
<section className="about-outer">
<div className="about-inner inner">

        {/* Headline-level accordion (outer) */}
        <div className="about-title-and-buttons-cont">  
          <h2 className="about-title">
            <button
              type="button"
              className="accordion-button"
              aria-expanded={outerOpen}
              aria-controls="about-outer-panel"
                onClick={handleOuterToggle}
            >
              <span className="accordion-button-label">ABOUT</span>
              <i className="bi bi-chevron-right accordion-button-icon" aria-hidden="true" />
            </button>
          </h2>
        </div>
        {/* Nested accordion list (inner) */}
        <div
          id="about-outer-panel"
          className="about-accordion"
          role="list"
          hidden={!outerOpen}
                aria-hidden={!outerOpen}
          style={outerOpen ? undefined : { display: "none" }}        >
          {sections.map(({ id, title, content }) => {
            const isOpen = openIds.has(id);
            const buttonId = `acc-btn-${id}`;
            const panelId = `acc-panel-${id}`;

            


            return (
              <div key={id} className="accordion-item" role="listitem">
                <div className="accordion-header">
                  <h3 id={`acc-h3-${id}`} className="accordion-title">
                    <button
                      id={buttonId}
                      className="accordion-button"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(id)} >
                      <span className="accordion-button-label">{title}</span>
                      <i className="bi bi-chevron-right accordion-button-icon" aria-hidden="true" />
                    </button>
                  </h3>
                </div>
                <div
                  id={panelId}
                  className="accordion-panel"
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  {content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default About;