import React, { forwardRef } from "react";
import "./Header.css";

const Header = forwardRef((props, ref) => (
  <header ref={ref}>
        <div className="header-inner">
                <div className="header-title">      
                        <h1>
                                <span className="text-highlight-alder">ALDER </span> 
                                <span className="text-highlight-advisory">ADVISORY </span> 
                                <span className="text-highlight-llc">LLC</span> 
                        </h1>
                </div>                           
                <div className="header-buttons">
                        <div className="button-wrapper">
                                <a href="mailto:veronica@alderadvisoryllc.com?subject=Inquiry from Alder Advisory Website" target="_blank" rel="no-referrer" className="button-style button-text"><i className="bi bi-envelope"></i></a>
                        </div>                        
                        <div className="button-wrapper">
                                <a href="https://calendar.app.google/5EDhxjGqzWvPtdQLA" target="_blank" rel="no-referrer" className="button-style button-text"><i className="bi bi-calendar-event"></i></a>
                        </div>   
                </div>
        </div>
</header> ));
export default Header;