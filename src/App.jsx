import React, { useState, lazy, Suspense, memo, useCallback } from 'react'
import './App.css'

// Lazy load components that are below the fold - Updated paths for /ui folder
const ServicesSection = lazy(() => import('./components/ui/ServicesSection'))
const ReviewsSection = lazy(() => import('./components/ui/ReviewsSection'))
const ContactSection = lazy(() => import('./components/ui/ContactSection'))
const AboutSection = lazy(() => import('./components/ui/AboutSection'))

// Memoized components for better performance
const Header = memo(({ onNavClick }) => (
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
          <a href="#home" onClick={(e) => onNavClick(e, 'home')}>HOME</a>
          <a href="#services" onClick={(e) => onNavClick(e, 'services')}>SERVICES</a>
          <a href="#reviews" onClick={(e) => onNavClick(e, 'reviews')}>REVIEWS</a>
          <a href="#about" onClick={(e) => onNavClick(e, 'about')}>ABOUT US</a>
          <a href="#contact" onClick={(e) => onNavClick(e, 'contact')}>CONTACT</a>
        </nav>

        <a href="tel:+12162942843" className="phone-button">
          📞 (216) 294-BUGD
        </a>
      </div>
    </div>
  </header>
))

const HeroSection = memo(() => (
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
          <a href="tel:+12162942843" className="btn-primary">📞 Call (216) 294-BUGD (2843)</a>
          <a href="#services" className="btn-secondary">OUR SERVICES</a>
        </div>
      </div>
    </div>
  </section>
))

const TrustIndicators = memo(() => (
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
))

const ServiceArea = memo(() => (
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
))

const Footer = memo(() => (
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
))

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="section-loader">
    <div className="loader-spinner"></div>
    <p>Loading...</p>
  </div>
)

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

  // Memoized callback to prevent unnecessary re-renders
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you soon.')
  }, [])

  // Smooth scroll navigation
  const handleNavClick = useCallback((e, target) => {
    e.preventDefault()
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="app">
      <Header onNavClick={handleNavClick} />
      <HeroSection />
      
      {/* Lazy load below-the-fold sections */}
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      
      <TrustIndicators />
      
      <Suspense fallback={<SectionLoader />}>
        <ReviewsSection />
      </Suspense>
      
      <ServiceArea />
      
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection 
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </Suspense>
      
      <Footer />
    </div>
  )
}

export default App

