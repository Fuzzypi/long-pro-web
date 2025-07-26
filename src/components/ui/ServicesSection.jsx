import React, { memo } from 'react'

const ServiceCard = memo(({ icon, title, description, className = "" }) => (
  <div className={`service-card ${className}`}>
    <div className={`service-icon ${icon.includes('🔍') || icon.includes('🏠') || icon.includes('⏰') ? 'green' : 'red'}`}>
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
))

const ServicesSection = memo(() => (
  <section id="services" className="services">
    <div className="container">
      <div className="section-header">
        <h2>OUR SERVICES</h2>
        <p>At LongPro Pest Control co, we take pride in delivering top-notch bed bug services to the greater Cleveland area from Lorain to Eastlake. We know that every case is different, so we are committed to solving your problem the most efficient and effective way possible.</p>
      </div>

      <div className="services-grid">
        <ServiceCard
          icon="🐛"
          title="Bed Bug Extermination"
          description="Comprehensive bed bug elimination using proven heat treatment and chemical methods. Same-day to next-day service available."
        />

        <ServiceCard
          icon="🪳"
          title="Cockroach Extermination"
          description="Professional cockroach elimination with long-lasting results. We target breeding areas and provide prevention strategies."
        />

        <ServiceCard
          icon="🐜"
          title="Ants/Spiders etc."
          description="Complete treatment for ants, spiders, and other common household pests. Eco-friendly solutions that are safe for your family."
        />

        <ServiceCard
          icon="🔍"
          title="WDI Inspection"
          description="Wood Destroying Insect inspections for real estate transactions. Thorough documentation and professional reporting."
        />

        <ServiceCard
          icon="🏠"
          title="VA Home Loan Inspection"
          description="Specialized inspections for VA home loans. Fast turnaround times to keep your home buying process on track."
        />

        <ServiceCard
          icon="⏰"
          title="Emergency Service"
          description="24/7 emergency pest control services. When you need immediate help, we're here to respond quickly and effectively."
          className="emergency"
        />
      </div>
    </div>
  </section>
))

export default ServicesSection

