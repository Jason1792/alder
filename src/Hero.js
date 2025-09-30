import React, { forwardRef, useEffect, useState } from "react";
import "./Hero.css";
import headshot from "./assets/202405-Veronica-Headshot-005.jpg";

const BANNERS = ["banner-01", "banner-02", "banner-03", "banner-04", "banner-05", "banner-06", "banner-07", "banner-08", "banner-09", "banner-10", "banner-11", "banner-12", "banner-13", "banner-14", "banner-15", "banner-16"];

const Hero = forwardRef((props, ref) => {
  // Initialize from existing attribute or localStorage, fallback to first
  const [banner, setBanner] = useState(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("theme-banner");
    const attr = typeof document !== "undefined" && document.documentElement.getAttribute("data-theme-banner");
    return saved || attr || BANNERS[0];
  });

  // Apply to <html> and persist
  useEffect(() => {
    document.documentElement.setAttribute("data-theme-banner", banner);
    localStorage.setItem("theme-banner", banner);
  }, [banner]);

  const advanceBanner = () => {
    const i = BANNERS.indexOf(banner);
    const next = BANNERS[(i + 1) % BANNERS.length];
    setBanner(next);
  };

  return (
    <section className="hero-outer" ref={ref}>
      <div className="hero-inner inner">
        {/* Desktop/Tablet image (unchanged) */}
        <div className="hero-image">
          <img src={headshot} alt="Veronica" />
        </div>

        {/* Mobile background as a real button */}
        <button
          type="button"
          className="hero-image-bg hero-banner-button"
          onClick={advanceBanner}
          aria-label="Show next banner image"
          title="Tap to change banner"
        />

        <div className="hero-text-and-buttons">
          <div className="hero-text">
            <h2 id="vrd">VERONICA RAMOS DULLACK</h2>
            <h2 id="fnp">FOUNDER & PRINCIPAL</h2>
            <p>
              Alder Advisory envisions an ethical economy where organizations of all sizes have
              strategic clarity, operational strength, and leadership capacity to create positive
              and enduring environmental, social, and economic impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
