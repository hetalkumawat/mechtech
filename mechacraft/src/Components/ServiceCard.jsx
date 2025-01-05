import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ name, description }) => {
  return (
    <div className="service-card">
      <h4 className="service-name">{name}</h4>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
