import React from 'react';
import EditorialCapabilitiesShowcase from '../components/EditorialCapabilitiesShowcase';
import './ServicesSection.css';

export default function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-container">
        <EditorialCapabilitiesShowcase />
      </div>
    </section>
  );
}
