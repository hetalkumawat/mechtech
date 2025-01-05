import React, { useEffect, useRef, useState } from "react";
import "./PartnersSection.css"; // Import your CSS file for this section

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`partners-section ${isVisible ? "animate" : ""}`}
      ref={sectionRef}
    >
      <h2 className="section--heading">Our Trusted Partners</h2>
      <div className="partners-container">
        <div className={`partner-item staggered-0 ${isVisible ? "animate" : ""}`}>
          <img
            src="/assets/partner1.png"
            alt="Partner 1"
            className="partner-logo"
          />
        </div>
        <div className={`partner-item staggered-1 ${isVisible ? "animate" : ""}`}>
          <img
            src="/assets/partner2.png"
            alt="Partner 2"
            className="partner-logo"
          />
        </div>
        <div className={`partner-item staggered-2 ${isVisible ? "animate" : ""}`}>
          <img
            src="/assets/partner3.png"
            alt="Partner 3"
            className="partner-logo"
          />
        </div>
        <div className={`partner-item staggered-3 ${isVisible ? "animate" : ""}`}>
          <img
            src="/assets/partner4.png"
            alt="Partner 4"
            className="partner-logo"
          />
        </div>
        <div className={`partner-item staggered-4 ${isVisible ? "animate" : ""}`}>
          <img
            src="/assets/partner5.png"
            alt="Partner 5"
            className="partner-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
