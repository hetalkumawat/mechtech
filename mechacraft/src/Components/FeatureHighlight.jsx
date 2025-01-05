import React from 'react';
import './FeatureHighlight.css'; // Link to the CSS file

const FeatureHighlight = () => {
  return (
    <section className="feature-highlight" id='footer'>
      <div className="feature-container">
        {/* Left Section - Image */}
        <div className="feature-image">
          <img
            src="/assets/connect.jpg"
            alt="MechaCraft Team"
          />
        </div>

        {/* Right Section - Content */}
        <div className="feature-content">
          <h1>
            Transform your vision with <span>MechaCraft</span>'s expertise.
          </h1>
          <p>
            Join forces with MechaCraft to revolutionize your business through
            the power of innovation and cutting-edge IoT solutions.
          </p>
          <button className="cta-button">Connect with Us</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
