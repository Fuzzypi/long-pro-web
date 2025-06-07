import React, { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    area: '',
    service: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you soon.')
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">🔍</div>
              <div className="logo-text">
                <h1>LONGPRO</h1>
                <p className="subtitle">PEST CONTROL CO.</p>
                <p className="tagline">"The Pest Detective"</p>
              </div>
            </div>
            
            <nav className="nav">
              <a href="#home">HOME</a>
              <a href="#services">SERVICES</a>
              <a href="#reviews">REVIEWS</a>
              <a href="#about">ABOUT US</a>
              <a href="#contact">CONTACT</a>
            </nav>

            <div className="phone-button">
              📞 (216) 294-BUGD
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>LONGPRO PEST CONTROL</h1>
            <p className="hero-subtitle">
              "Trusted Cleveland Bed Bug Exterminator - Effective Bed Bug & Heat Treatment in Cleveland, Ohio. Your Solution for Reliable Bed Bug Control!"
            </p>
            <p className="hero-description">
              At LongPro Pest Control, we provide eco-friendly and affordable bed bug treatments in Cleveland, offering same-to next day service and thorough inspections to protect your home. Trust us to deliver top-notch pest control that prioritize your comfort and peace of mind.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">📞 Call (216) 294-BUGD (2843)</button>
              <button className="btn-secondary">OUR SERVICES</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>OUR SERVICES</h2>
            <p>At LongPro Pest Control co, we take pride in delivering top-notch bed bug services to the greater Cleveland area from Lorain to Eastlake. We know that every case is different, so we are committed to solving your problem the most efficient and effective way possible.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon red">🐛</div>
              <h3>Bed Bug Extermination</h3>
              <p>Comprehensive bed bug elimination using proven heat treatment and chemical methods. Same-day to next-day service available.</p>
            </div>

            <div className="service-card">
              <div className="service-icon red">🪳</div>
              <h3>Cockroach Extermination</h3>
              <p>Professional cockroach elimination with long-lasting results. We target breeding areas and provide prevention strategies.</p>
            </div>

            <div className="service-card">
              <div className="service-icon red">🐜</div>
              <h3>Ants/Spiders etc.</h3>
              <p>Complete treatment for ants, spiders, and other common household pests. Eco-friendly solutions that are safe for your family.</p>
            </div>

            <div className="service-card">
              <div className="service-icon green">🔍</div>
              <h3>WDI Inspection</h3>
              <p>Wood Destroying Insect inspections for real estate transactions. Thorough documentation and professional reporting.</p>
            </div>

            <div className="service-card">
              <div className="service-icon green">🏠</div>
              <h3>VA Home Loan Inspection</h3>
              <p>Specialized inspections for VA home loans. Fast turnaround times to keep your home buying process on track.</p>
            </div>

            <div className="service-card emergency">
              <div className="service-icon green">⏰</div>
              <h3>Emergency Service</h3>
              <p>24/7 emergency pest control services. When you need immediate help, we're here to respond quickly and effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">🏆</div>
              <h3>BBB A+ Rating</h3>
              <p>Better Business Bureau</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">⭐</div>
              <h3>5.0 Stars</h3>
              <p>Google Reviews</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🛡️</div>
              <h3>10+ Years</h3>
              <p>Experience</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">👥</div>
              <h3>1000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews">
        <div className="container">
          <div className="section-header">
            <h2>CUSTOMER REVIEWS</h2>
            <div className="rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="rating-text">5.0 • 10 Reviews</span>
            </div>
          </div>

          <div className="review-card">
            <div className="reviewer">
              <div className="reviewer-avatar">MW</div>
              <div className="reviewer-info">
                <h4>Marquis Wise</h4>
                <p>2 reviews • 9 photos</p>
              </div>
            </div>
            <div className="review-rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="review-date">4 years ago</span>
            </div>
            <p className="review-text">
              "I have called LongPro a couple times for different treatments and scares. All times, he has come promptly, and have handled my bug problem with great professionalism. Gives good explanation of treatment and purpose, and he also has very affordable prices. I recommend LongPro for my and all extermination."
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="service-area">
        <div className="container">
          <h2>SERVICE AREA</h2>
          <p>
            LongPro Pest Control LLC has been providing excellent service to Cuyahoga County and the greater Cleveland area for over ten years. While most of our business is done within a 25-mile radius of Cleveland OH, we also go as far east as East Lake OH, as far west as Lorain, OH and as far south as Brunswick, OH.
          </p>
          <p>
            If you happen to need service outside this area, give us a call, perhaps we can help, if not, then at least we can try to point you in the right direction. Furthermore, no matter where you live, if you have any questions just give us call <strong>(216) 294-2843</strong>
          </p>
        </div>
      </section>

      {/* About Section */}
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

      {/* Contact Section */}
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
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Area</label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => handleInputChange('area', e.target.value)}
                      placeholder="Cleveland, OH"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Select Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
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
                  <label>Write a message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
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
              <span>📞 (216) 294-BUGD (2843)</span>
            </div>
            <div className="contact-item">
              <span>✉️ info@longpropc.com</span>
            </div>
            <div className="contact-item">
              <span>📍 Cleveland, OH Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-icon">🔍</div>
              <div>
                <h3>LONGPRO PEST CONTROL CO.</h3>
                <p>"The Pest Detective"</p>
              </div>
            </div>
            <p>Professional pest control services in Cleveland, Ohio and surrounding areas.</p>
            <p className="copyright">© 2024 LongPro Pest Control LLC. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
