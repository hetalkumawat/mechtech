import React, { memo } from "react";
import "./CardsSection.css"; // Import your CSS file for this section

const CardsSection = memo(() => {
  // List of card items
  const cardItems = [
    {
      image: "./src/assets/drone.webp",
      alt: "Drone",
      text: "Drones",
    },
    {
      image: "./src/assets/ar-vr.webp",
      alt: "AR-VR",
      text: "AR/VR",
    },
    {
      image: "./src/assets/robotics.png",
      alt: "Robotics",
      text: "Robotics",
    },
  ];

  return (
    <section id="services">
    <div className="cards-section">
      <h2 className="section-heading">Services & Solutions</h2>
      <div className="card-container">
        {cardItems.map((item, index) => (
          <div className="card-item" key={index}>
            <div className="card">
              <img
                src={item.image}
                alt={item.alt}
                className="card-image"
                loading="lazy" // Lazy load image
              />
              <div className="preview-button">Preview</div>
            </div>
            <div className="card-text">{item.text}</div> {/* Text below the card */}
          </div>
        ))}
      </div>
    </div></section>
  );
});

export default CardsSection;
