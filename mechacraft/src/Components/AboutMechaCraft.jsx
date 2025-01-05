import React, { useEffect, useRef, useState } from "react";
import "./AboutMechaCraft.css";

const AboutMechaCraft = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Use a ref for the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% is visible
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section); // Cleanup on unmount
    };
  }, []);

  return (
    <section id="about"
      ref={sectionRef}
      className={`about-mechacraft ${isVisible ? "animate" : ""}`}
    >
      <div className="about-container">
        {/* Left Section - Text */}
        <div className="about-text">
          <h2>
            About <span className="highlight">MechaCraft</span>
          </h2>
          <p className="line-hover">
            <span>MechaCraft is your ultimate destination for transforming ideas into</span>
            <span>innovative solutions. By leveraging cutting-edge technology, we</span>
            <span>empower businesses to stay ahead in the fast-paced digital era.</span>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="about-image">
          <img
            src="/assets/about.png"
            alt="MechaCraft Innovation"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMechaCraft;
