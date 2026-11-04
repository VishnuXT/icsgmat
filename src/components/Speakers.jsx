import React from 'react'
import { distinguishedSpeakers } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Speakers() {
  return (
    <section id="speakers" className="section section-alt" aria-label="Distinguished Keynote Speakers">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Keynote Leadership</span>
          <h2 className="section-title">Distinguished Speakers</h2>
          <p className="section-subtitle">
            Renowned international and national researchers delivering keynote lectures, sharing groundbreaking research, 
            and interacting directly with delegates.
          </p>
        </div>

        <div className="speakers-grid">
          {distinguishedSpeakers.map((speaker) => (
            <article key={speaker.id} className="speaker-card">
              <div className="speaker-portrait-frame">
                <img
                  src={speaker.image}
                  alt={`Portrait of ${speaker.name}`}
                  className="speaker-portrait"
                  loading="lazy"
                />
                <span className="speaker-flag-badge" title={speaker.location}>
                  {speaker.flag}
                </span>
              </div>

              <div className="speaker-field-tag">{speaker.field}</div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-role">{speaker.role}</p>

              <p className="speaker-institution">
                {speaker.lab ? `${speaker.lab}, ` : ''}{speaker.institution}
              </p>

              <div className="speaker-location">
                <Icon name="mapPin" size={13} />
                <span>{speaker.location}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Keynote Format Note */}
        <div style={{ marginTop: '40px', padding: '18px 24px', backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Icon name="sparkles" size={20} style={{ color: 'var(--color-primary-green)' }} />
            <span style={{ fontSize: '0.92rem', color: 'var(--color-primary-text)' }}>
              <strong>Interactive Keynotes:</strong> All keynote sessions include dedicated live Q&A opportunities for both physical and virtual delegates.
            </span>
          </div>
          <span className="badge badge-gold">Hybrid Access Included</span>
        </div>
      </div>
    </section>
  )
}
