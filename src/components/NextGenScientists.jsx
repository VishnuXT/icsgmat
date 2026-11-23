import React, { useState } from 'react'
import { nextGenScientists } from '../data/conferenceData'
import { Icon } from './Icons'

export default function NextGenScientists() {
  const [modalOpen, setModalOpen] = useState(false)

  const whatsappMessage = encodeURIComponent(
    'Hello Coordinator, I have an inquiry regarding NEXTGEN SCIENTISTS 2026 School Research Project Presentation at SBCE Pattoor.'
  )

  return (
    <section id="nextgen-scientists" className="section nextgen-section" aria-label="NextGen Scientists School Event">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="nextgen-super-badge">
            <span className="badge-pulse" />
            <Icon name="sparkles" size={15} />
            <span>Pre-Conference School Event &bull; As part of ICSGMSA 2026</span>
          </div>
          <h2 className="section-title nextgen-heading">
            NEXTGEN SCIENTISTS
          </h2>
          <p className="section-subtitle nextgen-subtitle-text">
            Research Project Presentation for School Students &bull; Hosted by the Department of Biotechnology and Biochemical Engineering, Sree Buddha College of Engineering, Pattoor, Alappuzha.
          </p>
        </div>

        {/* Main Grid: Poster Preview + Event Hub */}
        <div className="nextgen-showcase-grid">
          {/* Left Column: Official Poster Card */}
          <div className="nextgen-poster-card">
            <div className="nextgen-poster-frame" onClick={() => setModalOpen(true)} title="Click to view full high-resolution poster">
              <img
                src={nextGenScientists.posterImage}
                alt="NextGen Scientists 2026 Official Event Poster"
                className="nextgen-poster-img"
              />
              <div className="nextgen-poster-overlay">
                <span className="poster-zoom-btn">
                  <Icon name="sparkles" size={16} />
                  <span>View Full Poster</span>
                </span>
              </div>
            </div>

            <div className="nextgen-poster-footer">
              <button
                type="button"
                className="poster-action-btn"
                onClick={() => setModalOpen(true)}
              >
                <Icon name="sparkles" size={15} />
                <span>Enlarge Poster</span>
              </button>
              <a
                href={nextGenScientists.posterUrl}
                download="NextGen-Scientists-2026-Poster.jpg"
                className="poster-action-btn secondary"
                title="Download high-resolution flyer"
              >
                <Icon name="download" size={15} />
                <span>Download Flyer</span>
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Program Information */}
          <div className="nextgen-content-panel">
            {/* Young Innovators Callout */}
            <div className="nextgen-pitch-box">
              <div className="pitch-tag">
                <Icon name="leaf" size={16} />
                <span>Calling All Young Innovators!</span>
              </div>
              <p className="pitch-text">
                Showcase your creativity, scientific temper, and problem-solving skills by presenting your research project through a <strong>PowerPoint presentation</strong>, <strong>video</strong>, or <strong>any creative demonstration mode</strong>.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="nextgen-facts-strip">
              <div className="fact-item">
                <span className="fact-label">Date of Event</span>
                <span className="fact-val highlight">
                  <Icon name="calendar" size={15} />
                  <span>{nextGenScientists.date}</span>
                </span>
              </div>

              <div className="fact-item">
                <span className="fact-label">Eligibility</span>
                <span className="fact-val">
                  <Icon name="users" size={15} />
                  <span>Classes 10, 11 &amp; 12</span>
                </span>
              </div>

              <div className="fact-item">
                <span className="fact-label">Registration Fee</span>
                <span className="fact-val free-badge">
                  <Icon name="gift" size={15} />
                  <span>FREE Entry</span>
                </span>
              </div>

              <div className="fact-item">
                <span className="fact-label">Presentation Format</span>
                <span className="fact-val">
                  <Icon name="fileText" size={15} />
                  <span>PPT / Video / Creative</span>
                </span>
              </div>
            </div>

            {/* Cash Prize Cards */}
            <div className="nextgen-prizes-block">
              <div className="prizes-header">
                <Icon name="trophy" size={20} />
                <h3>Win Exciting Cash Prizes</h3>
              </div>
              <div className="prizes-grid">
                {nextGenScientists.prizes.map((prize, idx) => (
                  <div key={idx} className={`prize-card prize-tier-${idx + 1}`}>
                    <div className="prize-card-meta">
                      <span className="prize-medal">{prize.medal}</span>
                      <div className="prize-info">
                        <span className="prize-place">{prize.place}</span>
                        <span className="prize-sub">{prize.label}</span>
                      </div>
                    </div>
                    <span className="prize-amount">{prize.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Highlights & Amenities */}
            <div className="nextgen-amenities-block">
              <h4 className="amenities-title">Event Highlights &amp; Student Amenities</h4>
              <div className="amenities-grid">
                {nextGenScientists.highlights.map((item, idx) => (
                  <div key={idx} className="amenity-item">
                    <div className="amenity-icon">
                      <Icon name={item.icon || 'checkCircle'} size={18} />
                    </div>
                    <div className="amenity-body">
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar: Register & Contacts */}
            <div className="nextgen-cta-banner">
              <div className="cta-left">
                <a
                  href={nextGenScientists.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary nextgen-register-btn"
                  title="Open Google Registration Form for School Students"
                >
                  <Icon name="externalLink" size={16} />
                  <span>Register Now (Google Form)</span>
                </a>

                <a
                  href={`https://wa.me/919544016387?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn nextgen-wa-btn"
                  title="Send WhatsApp Query regarding NextGen Scientists"
                >
                  <Icon name="whatsapp" size={16} />
                  <span>WhatsApp Queries</span>
                </a>
              </div>

              {/* Coordinator Contacts */}
              <div className="cta-contacts">
                <span className="contacts-label">
                  <Icon name="phone" size={14} />
                  <span>Helpline / Queries:</span>
                </span>
                <div className="contacts-nums">
                  <a href="tel:+919544016387" className="tel-link">95440 16387</a>
                  <span className="tel-sep">&bull;</span>
                  <a href="tel:+919400691353" className="tel-link">94006 91353</a>
                </div>
              </div>
            </div>

            {/* Travel notice */}
            <p className="nextgen-bus-note">
              <Icon name="bus" size={14} />
              <span>
                <strong>College Bus Facility:</strong> Dedicated bus transport will run from nodal pickup points across Alappuzha, Pathanamthitta, and Kollam districts for registered school participants.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Full Resolution Poster Lightbox / Modal */}
      {modalOpen && (
        <div
          className="nextgen-modal-backdrop"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="NextGen Scientists Poster Zoom View"
        >
          <div className="nextgen-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="nextgen-modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close Poster View"
            >
              <Icon name="x" size={24} />
            </button>
            <img
              src={nextGenScientists.posterImage}
              alt="NextGen Scientists 2026 High Resolution Poster"
              className="nextgen-modal-img"
            />
            <div className="nextgen-modal-footer">
              <a
                href={nextGenScientists.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Register for NextGen Scientists</span>
                <Icon name="externalLink" size={14} />
              </a>
              <a
                href={nextGenScientists.posterUrl}
                download="NextGen-Scientists-2026-Poster.jpg"
                className="btn btn-secondary"
              >
                <Icon name="download" size={14} />
                <span>Download Flyer</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
