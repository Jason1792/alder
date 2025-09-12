import React, { forwardRef } from "react";
import "./Hero.css";
import headshot from "./assets/202405-Veronica-Headshot-005.jpg";
const Hero = forwardRef((props, ref) => (
<section className="hero-outer" ref={ref}>
        <div className="hero-inner inner">
                <div className="hero-image">
                        <img src={headshot} alt="Veronica"/>
                </div>
                <div className="hero-image-bg"></div>
                <div className="hero-text-and-buttons">
                        <div className="hero-text">
                                <h2 id="vrd">VERONICA RAMOS DULLACK</h2>
                                <h2 id="fnp">20250911 1924</h2>
                                <p>Alder Advisory envisions an ethical economy where organizations of all sizes have strategic clarity, operational strength, and leadership capacity to create positive and enduring environmental, social, and economic impact. </p>
                        </div>
                        <div className="hero-buttons-cont">   
                                <div className="button-wrapper">
                                        <a href="mailto:veronica@alderadvisoryllc.com?subject=Inquiry from Alder Advisory Website" target="_blank" className="button-style button-text">Email</a>
                                </div>                        
                                <div className="button-wrapper">
                                        <a href="https://calendar.app.google/5EDhxjGqzWvPtdQLA" target="_blank" className="button-style button-text">Schedule a call</a>
                                </div>                          
                        </div>
                </div>
        </div>
</section>
  ));
export default Hero;