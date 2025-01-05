import React from "react";
import "./HeroSection.css"; // Import your CSS file
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Navbar/>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/assets/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero content with text */}
      <div className="hero-content">
        <h1>Welcome to Mechacraft</h1>
        <p>Innovative IoT solutions for a smarter tomorrow.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
