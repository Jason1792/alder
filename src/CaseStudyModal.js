import React, { useEffect } from "react";
import "./CaseStudyModal.css";
const CaseStudyModal = ({ field_02, field_03, field_04, field_05, field_06, field_07, onClose, }) => {
useEffect(() => {
    // Disable background scroll
    document.body.style.overflow = "hidden";
    // Cleanup: re-enable scroll on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
return (
<div className="modal-overlay">
                <div className="modal-nav-and-text">
                        <div className="modal-nav">
                                <div className="modal-close">
                                        <button className="modal-nav-button" onClick={onClose}><i class="bi bi-x-lg"></i></button>
                                </div>
                        </div>
                        <div className="modal-text">
                                <h3 className="modal-field_02">{field_02}</h3>
                                <p className="modal-field_03">{field_03}</p>
                                <p className="modal-field_04">{field_04}</p>
                                <p className="modal-field_05">{field_05}</p>
                                <p className="modal-field_06">{field_06}</p>
                                <p className="modal-field_07">{field_07}</p>
                        </div>
                </div>
</div>
);
};
export default CaseStudyModal;
