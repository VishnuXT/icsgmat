import React, { useState } from 'react'
import { conferenceInfo } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', institution: '', subject: '', message: '' })

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.message) return

    let text = `Hello ICSGMSA 2026 Student Coordinator,\n\n`
    text += `*Name:* ${formState.name}\n`
    if (formState.institution) {
      text += `*Institution:* ${formState.institution}\n`
    }
    if (formState.subject) {
      text += `*Subject:* ${formState.subject}\n`
    }
    text += `*Inquiry:* ${formState.message}`

    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/919526657903?text=${encodedText}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
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
                  <Icon name="phone" size={20} />
                </div>
                <div className="venue-detail-content">
                  <strong>Student Coordinator</strong>
                  <a href={`tel:${conferenceInfo.contact.studentCoordinatorTel}`} title="Call student coordinator">
                    {conferenceInfo.contact.studentCoordinatorDisplay}
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
                title="Call coordinator helpline"
              >
                <Icon name="phone" size={16} />
                <span>Call Helpline</span>
              </a>

              <a
                href={`tel:${conferenceInfo.contact.studentCoordinatorTel}`}
                className="btn btn-secondary"
                title="Call student coordinator"
              >
                <Icon name="phone" size={16} />
                <span>Student Coordinator</span>
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

            {/* WhatsApp Inquiry to Student Coordinator */}
            <div className="inquiry-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)'
                }}>
                  <Icon name="whatsapp" size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-deep-green)', margin: 0 }}>
                    Inquiry via WhatsApp
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Student Coordinator Desk &bull; +91 95266 57903
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'var(--color-secondary-text)', marginBottom: '16px', lineHeight: '1.5' }}>
                Have questions regarding registration, paper tracks, or campus arrival? Fill in your query below to chat directly with our student coordinator on WhatsApp.
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="inquiry-form">
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
                    type="text"
                    placeholder="Institution / College"
                    value={formState.institution}
                    onChange={(e) => setFormState({ ...formState, institution: e.target.value })}
                    className="inquiry-input"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject (e.g. Registration Fee, Track Query, Presentation Slot)"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="inquiry-input"
                />
                <textarea
                  rows={3}
                  placeholder="Your Question / Message *"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="inquiry-input"
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#25D366',
                      borderColor: '#20BA5A',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <Icon name="whatsapp" size={18} />
                    <span>Send Message on WhatsApp</span>
                  </button>

                  <a
                    href="https://wa.me/919526657903?text=Hello%20ICSGMSA%202026%20Student%20Coordinator%2C%20I%20have%20an%20inquiry%20regarding%20the%20conference."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      padding: '10px',
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>Direct WhatsApp Chat: +91 95266 57903</span>
                    <Icon name="externalLink" size={14} />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
