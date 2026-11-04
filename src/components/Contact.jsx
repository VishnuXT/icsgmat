import React, { useState } from 'react'
import { conferenceInfo } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formState.name && formState.email && formState.message) {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormSubmitted(false)
        setFormState({ name: '', email: '', subject: '', message: '' })
      }, 5000)
    }
  }

  return (
    <section id="contact" className="section section-tint" aria-label="Contact and Conference Venue">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Campus Venue & Logistics</span>
          <h2 className="section-title">Venue & Secretariat</h2>
          <p className="section-subtitle">
            ICSGMSA 2026 is hosted in hybrid mode at Sree Buddha College of Engineering, Pattoor, Alappuzha, Kerala.
          </p>
        </div>

        <div className="contact-grid">
          {/* Institution & Contact Details Card */}
          <div className="venue-card">
            <div className="venue-header">
              <span className="venue-autonomous-tag">Autonomous Institution &bull; NAAC 'A'</span>
              <h3 className="venue-institution-name" style={{ marginTop: '12px' }}>
                {conferenceInfo.contact.institution}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-secondary-text)' }}>
                Department of Biotechnology and Biochemical Engineering
              </p>
            </div>

            <div className="venue-details-list">
              <div className="venue-detail-item">
                <div className="venue-detail-icon">
                  <Icon name="mapPin" size={20} />
                </div>
                <div className="venue-detail-content">
                  <strong>Campus Address</strong>
                  <span>{conferenceInfo.contact.fullAddress}</span>
                </div>
              </div>

              <div className="venue-detail-item">
                <div className="venue-detail-icon">
                  <Icon name="phone" size={20} />
                </div>
                <div className="venue-detail-content">
                  <strong>Helpline / Contact Phone</strong>
                  <a href={`tel:${conferenceInfo.contact.phoneTel}`} title="Call conference helpline">
                    {conferenceInfo.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="venue-detail-item">
                <div className="venue-detail-icon">
                  <Icon name="globe" size={20} />
                </div>
                <div className="venue-detail-content">
                  <strong>Official Website</strong>
                  <a href={conferenceInfo.links.institutionWebsite} target="_blank" rel="noopener noreferrer">
                    {conferenceInfo.links.institutionWebsite}
                  </a>
                </div>
              </div>

              <div className="venue-detail-item">
                <div className="venue-detail-icon">
                  <Icon name="fileText" size={20} />
                </div>
                <div className="venue-detail-content">
                  <strong>Registration & Abstract Desk</strong>
                  <span>{conferenceInfo.contact.emailClarification}</span>
                </div>
              </div>
            </div>

            {/* Transit Guide */}
            <div className="venue-transit-box">
              <div className="transit-header">
                <Icon name="layers" size={16} />
                <span>Transit & Connectivity</span>
              </div>
              <div className="transit-grid">
                <div>
                  <span className="transit-label">Nearest Railheads:</span>
                  <ul className="transit-list">
                    {conferenceInfo.transit.rail.map((r, i) => (
                      <li key={i}>{r.station} ({r.distance})</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="transit-label">Airports:</span>
                  <ul className="transit-list">
                    {conferenceInfo.transit.air.map((a, i) => (
                      <li key={i}>{a.airport} ({a.distance})</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={conferenceInfo.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                title="Open location in Google Maps"
              >
                <Icon name="mapPin" size={16} />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${conferenceInfo.contact.phoneTel}`}
                className="btn btn-secondary"
                title="Call coordinator phone"
              >
                <Icon name="phone" size={16} />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map & Inquiry Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Map Embed Card */}
            <div className="map-card">
              <div className="map-embed-wrapper">
                <iframe
                  title="Sree Buddha College of Engineering Campus Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.525287661005!2d76.62007827478335!3d9.286812890785023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061614742f1f0f%3A0xcfe0433ddb0002ab!2sSree%20Buddha%20College%20of%20Engineering%2C%20Pattoor!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="map-footer-bar">
                <div className="map-footer-text">
                  <strong>Pattoor, Padanilam, Alappuzha</strong>
                  <span>Easily accessible from Kayamkulam, Adoor & Chengannur</span>
                </div>
                <a
                  href={conferenceInfo.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '8px 16px', whiteSpace: 'nowrap' }}
                >
                  <span>Open Full Map</span>
                  <Icon name="externalLink" size={14} />
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="inquiry-card">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-deep-green)', marginBottom: '6px' }}>
                Quick Inquiry to Secretariat
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-secondary-text)', marginBottom: '16px' }}>
                Have questions regarding tracks, accommodations, or virtual access? Send a quick query.
              </p>

              {formSubmitted ? (
                <div className="inquiry-success-msg">
                  <Icon name="checkCircle" size={20} />
                  <span>Thank you! Your inquiry has been recorded. Our coordinator desk will assist you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="inquiry-form-row">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="inquiry-input"
                    />
                    <input
                      type="email"
                      placeholder="Your Email *"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="inquiry-input"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject (e.g. Track Query, Accommodation, Virtual Link)"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="inquiry-input"
                  />
                  <textarea
                    rows={3}
                    placeholder="Your Message / Query *"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="inquiry-input"
                  />
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '11px' }}>
                    <span>Send Message to Coordinator</span>
                    <Icon name="arrowRight" size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
