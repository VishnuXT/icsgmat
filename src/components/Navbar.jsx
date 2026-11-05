import React, { useState, useEffect } from 'react'
import { conferenceInfo } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Active section detection
      const sections = ['home', 'about', 'tracks', 'speakers', 'cfp', 'dates', 'registration', 'committee', 'contact']
      const scrollPosition = window.scrollY + 130

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'cfp', label: 'Call for Papers' },
    { id: 'dates', label: 'Important Dates' },
    { id: 'registration', label: 'Registration' },
    { id: 'committee', label: 'Committee' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo & Title */}
          <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, 'home')}>
            <img 
              src={conferenceInfo.media.autonomousEmblem} 
              alt="Autonomous College Crest" 
              className="navbar-brand-emblem" 
            />
            <div className="navbar-brand-text">
              <span className="brand-acronym">{conferenceInfo.acronym}</span>
              <span className="brand-college">SBCE Pattoor &bull; Autonomous</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            <ul className="navbar-menu">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navbar Actions */}
          <div className="navbar-actions">
            {/* Desktop CTA */}
            <a
              href={conferenceInfo.links.abstractSubmission}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn desktop-only"
              title="Submit your research abstract via Google Form"
            >
              <span>Submit Abstract</span>
              <Icon name="externalLink" size={14} />
            </a>

            {/* Mobile Compact Quick CTA */}
            <a
              href={conferenceInfo.links.abstractSubmission}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-cta-btn"
              title="Submit Abstract"
            >
              <span>Submit</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="hamburger-btn"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        {/* Drawer Header with Title & Close Button */}
        <div className="drawer-header">
          <div className="drawer-brand">
            <img 
              src={conferenceInfo.media.autonomousEmblem} 
              alt="Crest" 
              className="drawer-emblem" 
            />
            <div>
              <strong className="drawer-title">{conferenceInfo.acronym}</strong>
              <span className="drawer-sub">Dec 9–11, 2026 &bull; Hybrid</span>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            aria-label="Close Navigation Menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Icon name="x" size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="mobile-menu-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                <span>{link.label}</span>
                <Icon name="arrowRight" size={14} className="mobile-nav-arrow" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Action Buttons */}
        <div className="mobile-drawer-cta">
          <a
            href={conferenceInfo.links.abstractSubmission}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Submit Abstract (Google Form)</span>
            <Icon name="externalLink" size={15} />
          </a>
          <a
            href={conferenceInfo.links.registration}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Register as Delegate</span>
          </a>
          <a
            href={conferenceInfo.links.brochurePdf}
            download="ICSGMSA-2026-Brochure.pdf"
            className="btn btn-gold"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Icon name="download" size={15} />
            <span>Download Brochure (PDF)</span>
          </a>
        </div>

        {/* Drawer Secretariat Contact Details */}
        <div className="drawer-contact-footer">
          <a href={`tel:${conferenceInfo.contact.phoneTel}`} className="drawer-contact-link">
            <Icon name="phone" size={16} />
            <span>Helpline: {conferenceInfo.contact.phoneDisplay}</span>
          </a>
          <a href={`tel:${conferenceInfo.contact.studentCoordinatorTel}`} className="drawer-contact-link" style={{ marginTop: '4px' }}>
            <Icon name="phone" size={16} />
            <span>Student Coord: {conferenceInfo.contact.studentCoordinatorDisplay}</span>
          </a>
          <div className="drawer-location-text">
            <Icon name="mapPin" size={16} />
            <span>Sree Buddha College of Engineering, Pattoor, Alappuzha</span>
          </div>
        </div>
      </aside>
    </>
  )
}
