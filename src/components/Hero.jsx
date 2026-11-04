import React, { useState, useEffect } from 'react'
import { conferenceInfo } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Conference start date: December 9, 2026
    const target = new Date('2026-12-09T09:00:00+05:30').getTime()

    const calculateTime = () => {
      const now = new Date().getTime()
      const diff = target - now

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = (e) => {
    e.preventDefault()
    const el = document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" aria-label="Conference Introduction">
      <div className="container-wide">
        <div className="hero-grid">
          {/* Left Column: Conference Header & Details */}
          <div className="hero-content">
            <div className="hero-badge-row">
              <div className="hero-series-badge">
                <span className="badge-dot" />
                <span>{conferenceInfo.series}</span>
              </div>
              <span className="hero-series-edition">3rd Edition &bull; IC-SGMAT Legacy</span>
            </div>

            <h1 className="hero-title">
              {conferenceInfo.title}
              <span className="highlight-acronym">{conferenceInfo.acronym}</span>
            </h1>

            {/* Key Event Metadata */}
            <div className="hero-meta-bar">
              <div className="hero-meta-item">
                <Icon name="calendar" size={17} />
                <span>{conferenceInfo.dates}</span>
              </div>
              <div className="hero-meta-divider" aria-hidden="true" />
              <div className="hero-meta-item">
                <Icon name="globe" size={17} />
                <span>{conferenceInfo.mode}</span>
              </div>
              <div className="hero-meta-divider" aria-hidden="true" />
              <div className="hero-meta-item hero-meta-institution">
                <Icon name="mapPin" size={17} />
                <span>SBCE Pattoor, Kerala (Autonomous)</span>
              </div>
            </div>

            {/* Supporting Tagline */}
            <p className="hero-tagline">
              “{conferenceInfo.tagline}”
            </p>

            {/* Call to Actions */}
            <div className="hero-actions">
              <a
                href={conferenceInfo.links.abstractSubmission}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                title="Submit your research abstract via Google Form"
              >
                <span>Submit Abstract</span>
                <Icon name="externalLink" size={16} />
              </a>

              <a
                href="#about"
                onClick={scrollToAbout}
                className="btn btn-secondary"
                title="Explore conference overview and details"
              >
                <span>Explore Conference</span>
                <Icon name="arrowRight" size={16} />
              </a>

              <a
                href={conferenceInfo.links.brochurePdf}
                download="ICSGMSA-2026-Brochure.pdf"
                className="btn btn-gold"
                title="Download the official conference brochure PDF"
              >
                <Icon name="download" size={16} />
                <span>Download Brochure</span>
              </a>
            </div>

            {/* Live Event Countdown */}
            <div className="hero-countdown-box">
              <span className="countdown-label">
                <Icon name="clock" size={14} />
                <span>Countdown to ICSGMSA 2026:</span>
              </span>
              <div className="countdown-units">
                <div className="countdown-unit">
                  <span className="countdown-num">{timeLeft.days}</span>
                  <span className="countdown-text">Days</span>
                </div>
                <span className="countdown-sep">:</span>
                <div className="countdown-unit">
                  <span className="countdown-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="countdown-text">Hours</span>
                </div>
                <span className="countdown-sep">:</span>
                <div className="countdown-unit">
                  <span className="countdown-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="countdown-text">Mins</span>
                </div>
                <span className="countdown-sep">:</span>
                <div className="countdown-unit">
                  <span className="countdown-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="countdown-text">Secs</span>
                </div>
              </div>
            </div>

            {/* Institutional Credentials Strip */}
            <div className="hero-institution-strip">
              <img
                src={conferenceInfo.media.autonomousEmblem}
                alt="Sree Buddha College of Engineering Autonomous Crest"
                className="hero-institution-emblem"
              />
              <div className="hero-institution-info">
                <span className="hero-institution-name">
                  Sree Buddha College of Engineering, Pattoor
                </span>
                <span className="hero-department-name">
                  Organized by {conferenceInfo.department}
                </span>
              </div>
              <img
                src={conferenceInfo.media.accreditationBadges}
                alt="NAAC, NBA, and UGC Accreditations"
                className="hero-institution-badges"
              />
            </div>
          </div>

          {/* Right Column: Visual Artwork & Highlights */}
          <div className="hero-visual-card">
            <div className="hero-visual-frame">
              {/* Refined Integrated Badge */}
              <div className="hero-card-badge">
                <Icon name="sparkles" size={16} />
                <span>Legacy Series &bull; IC-SGMAT 2023 & 2025</span>
              </div>

              <img
                src={conferenceInfo.media.heroVisual}
                alt="Smart and Green Materials for Sustainable Applications - Visual Art"
                className="hero-visual-img"
                loading="eager"
              />

              <div className="hero-visual-overlay">
                <span className="hero-overlay-tag">Focal Theme 2026</span>
                <p className="hero-overlay-title">
                  Advancing Circularity, Smart Nano-Interfaces & Sustainable Materials
                </p>
                <div className="hero-overlay-chips">
                  <span>Hybrid Sessions</span>
                  <span>Scopus Publication</span>
                  <span>Best Paper Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
