import React, { useEffect, useState } from 'react';
import './Footer.css'; // Link to the CSS file
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Import icons

const Footer = () => {
  const [projects, setProjects] = useState(0);
  const [students, setStudents] = useState(0);
  const [kits, setKits] = useState(0);
  const [clients, setClients] = useState(0);
  const [isInView, setIsInView] = useState(false); // State to track visibility

  // Function to count up to the target value
  const countUp = (setter, target) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setter(count);
      if (count >= target) clearInterval(interval);
    }, 10);
  };

  // Using IntersectionObserver to trigger count when the footer is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when the footer is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the footer is visible
    );

    const footerSection = document.querySelector('.footer');
    observer.observe(footerSection);

    return () => {
      if (footerSection) observer.unobserve(footerSection); // Clean up observer
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      countUp(setProjects, 100);
      countUp(setStudents, 500);
      countUp(setKits, 10);
      countUp(setClients, 20);
    }
  }, [isInView]);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="stats">
          <div className="stat">
            <span className="stat-number">{projects}</span>+ Projects
          </div>
          <div className="stat">
            <span className="stat-number">{students}</span>+ Students
          </div>
          <div className="stat">
            <span className="stat-number">{kits}</span>+ Kits
          </div>
          <div className="stat">
            <span className="stat-number">{clients}</span>+ Clients
          </div>
        </div>

        <div className="social-media">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} className="social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={40} className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={40} className="social-icon" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} MechaCraft. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
