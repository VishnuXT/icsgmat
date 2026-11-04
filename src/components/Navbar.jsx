import React, { useState, useEffect } from 'react'
import { conferenceInfo } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Active section detection
      const sections = ['home', 'about', 'tracks', 'speakers', 'cfp', 'dates', 'registration', 'committee', 'contact']
      const scrollPosition = window.scrollY + 120

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
              alt="Autonomous College Emblem" 
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
            <a
              href={conferenceInfo.links.abstractSubmission}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
              title="Submit your research abstract via Google Form"
            >
              <span>Submit Abstract</span>
              <Icon name="externalLink" size={14} />
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
        <ul className="mobile-menu-list">
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

        <div className="mobile-drawer-cta">
          <a
            href={conferenceInfo.links.abstractSubmission}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Submit Abstract</span>
            <Icon name="externalLink" size={16} />
          </a>
          <a
            href={conferenceInfo.links.registration}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Register for Conference</span>
          </a>
        </div>
      </aside>
    </>
  )
}

