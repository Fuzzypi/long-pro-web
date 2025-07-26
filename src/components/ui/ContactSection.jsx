import React, { memo } from 'react'

const ContactSection = memo(({ formData, onInputChange, onSubmit }) => (
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-header">
        <h2>CONTACT US</h2>
        <p>Get a free quote today!</p>
      </div>

      <div className="contact-form-container">
        <div className="form-card">
          <h3>Request Service</h3>
          <p>Fill out the form below and we'll get back to you within 24 hours.</p>
          
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => onInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => onInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => onInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => onInputChange('phone', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="area">Area</label>
                <input
                  id="area"
                  type="text"
                  value={formData.area}
                  onChange={(e) => onInputChange('area', e.target.value)}
                  placeholder="Cleveland, OH"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Select Service</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => onInputChange('service', e.target.value)}
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="bed-bug">Bed Bug Extermination</option>
                  <option value="cockroach">Cockroach Extermination</option>
                  <option value="ants-spiders">Ants/Spiders etc</option>
                  <option value="wdi">WDI Inspection</option>
                  <option value="va-loan">VA Home Loan Inspection</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Write a message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => onInputChange('message', e.target.value)}
                rows="4"
                placeholder="Describe your pest problem or inspection needs..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Submit Request</button>
          </form>
        </div>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <a href="tel:+12162942843">📞 (216) 294-BUGD (2843)</a>
        </div>
        <div className="contact-item">
          <a href="mailto:info@longpropc.com">✉️ info@longpropc.com</a>
        </div>
        <div className="contact-item">
          <span>📍 Cleveland, OH Area</span>
        </div>
      </div>
    </div>
  </section>
))

export default ContactSection

