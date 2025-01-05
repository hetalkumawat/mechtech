import React from 'react';
import ServiceCard from './ServiceCard';
import './SolutionsServices.css';

const solutions = [
  {
    title: 'Smart Solutions for Daily Life',
    services: [
      { name: 'Home Automation', description: 'Smart systems for lighting, HVAC, and security.' },
      { name: 'Personal Terminals', description: 'Wearables and smart devices for productivity and health.' },
    ],
  },
  {
    title: 'Industry and Business Solutions',
    services: [
      { name: 'Industry 4.0', description: 'IoT solutions for predictive maintenance and automation.' },
      { name: 'Fleet Tracking', description: 'Advanced GPS-enabled tracking and driver analysis.' },
      { name: 'Commercial Equipment', description: 'IoT-enabled devices and secure storage systems.' },
    ],
  },
  {
    title: 'Advanced Technology and Research',
    services: [
      { name: 'Robotics Labs', description: 'Tools, simulators, and platforms for research.' },
      { name: 'AR/VR Solutions', description: 'Immersive applications for training and simulation.' },
      { name: 'Drone Technology', description: 'IoT-enabled drones with AI-based navigation.' },
    ],
  },
  {
    title: 'Domain-Specific Innovations',
    services: [
      { name: 'Agriculture', description: 'IoT-enabled smart farming with real-time monitoring.' },
      { name: 'Healthcare', description: 'IoT solutions for patient monitoring and telemedicine.' },
      { name: 'Automotive Electronics', description: 'Smart vehicle systems like ADAS and infotainment.' },
    ],
  },
];

const SolutionsServices = () => {
  return (
    <section className="solutions-services">
      <h2 className="section-title">Solutions & Services</h2>
      <div className="solutions-grid">
        {solutions.map((category, index) => (
          <div key={index} className="category">
            <h3 className="category-title">{category.title}</h3>
            <div className="services-list">
              {category.services.map((service, idx) => (
                <ServiceCard key={idx} name={service.name} description={service.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsServices;
