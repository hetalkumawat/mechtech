import React from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    image: "/assets/user1.jpg",
    name: "John Doe",
    feedback: "MechaCraft has revolutionized the way we approach automation. A true game-changer!",
  },
  {
    id: 2,
    image: "/assets/user2.jpg",
    name: "Jane Smith",
    feedback: "The best platform for integrating robotics into real-world applications. Highly recommend it!",
  },
  {
    id: 3,
    image: "/assets/user3.jpg",
    name: "Alice Johnson",
    feedback: "Thanks to MechaCraft, our productivity has skyrocketed. It's simply amazing!",
  },
  {
    id: 4,
    image: "/assets/user1.jpg",
    name: "Michael Lee",
    feedback: "A reliable platform for robotic innovation. Our go-to solution for engineering needs.",
  },
  {
    id: 5,
    image: "/assets/user2.jpg",
    name: "Sophia Brown",
    feedback: "Fantastic customer support and amazing features. Highly recommended!",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-heading">What Our Users Say</h2>
      <div className="testimonial-slider">
        {/* Duplicate testimonials to create seamless looping */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <p className="testimonial-feedback">{testimonial.feedback}</p>
              <h4 className="testimonial-name">- {testimonial.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
