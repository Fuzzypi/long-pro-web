import React, { memo } from 'react'

const AboutSection = memo(() => (
  <section id="about" className="about">
    <div className="container">
      <div className="section-header">
        <h2>ABOUT US</h2>
      </div>

      <div className="about-content">
        <p>
          At LongPro Pest Control, we've provided top-notch pest control services to the greater Cleveland area for over ten years. Our experienced technicians are dedicated to bringing you reliable and affordable solutions that address both current and long-term pest control needs.
        </p>
        
        <p>
          Unlike many of our competitors, our overhead is kept low, so we can pass those savings on to our customers. We understand that the cost of pest control is a significant concern for most people, so we aim to keep are over-head down and our prices low. We also deliver highly discreet service, so your privacy is never compromised during our service visits.
        </p>

        <p>
          In addition to our unrivaled customer satisfaction and affordability, we are proud to have earned an <strong>A+ score from the highly revered Better Business Bureau (BBB)</strong>. This rating reflects our unwavering commitment to delivering quality results at affordable rates. We also strictly adhere to all state regulations regarding pest removal methods and techniques, ensuring the safest and most effective treatments available to eliminate any pests infiltrating your home.
        </p>

        <p>
          No one knows better than us how frustrating it can be to deal with pests such as ants, spiders, bed bugs, and cockroaches. That's why we take pride in offering fast response times and efficient solutions no matter the pest control problem you may face. With us on the job, you can rest assured knowing that your home or business will be free from unwanted pests after our work is done.
        </p>

        <div className="specialization">
          Specializing in Bed Bug and Cockroach extermination.
        </div>
      </div>
    </div>
  </section>
))

export default AboutSection

