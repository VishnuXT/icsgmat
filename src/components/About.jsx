import React, { useState } from 'react'
import { aboutContent } from '../data/conferenceData'
import { Icon } from './Icons'

export default function About() {
  const [activeTab, setActiveTab] = useState('conference')

  return (
    <section id="about" className="section section-alt" aria-label="About ICSGMSA 2026 and Institution">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Background & Institutional Profile</span>
          <h2 className="section-title">About the Conference</h2>
          <p className="section-subtitle">
            An established academic conference series advancing smart materials, green chemistry, bioengineering solutions, 
            and sustainable technological breakthroughs.
          </p>
        </div>

        {/* Tab Switcher for Subsections */}
        <div className="about-tabs" role="tablist" aria-label="About Information Tabs">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'conference'}
            className={`about-tab-btn ${activeTab === 'conference' ? 'active' : ''}`}
            onClick={() => setActiveTab('conference')}
          >
            The Conference (ICSGMSA 2026)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'institution'}
            className={`about-tab-btn ${activeTab === 'institution' ? 'active' : ''}`}
            onClick={() => setActiveTab('institution')}
          >
            Sree Buddha College of Engineering
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'department'}
            className={`about-tab-btn ${activeTab === 'department' ? 'active' : ''}`}
            onClick={() => setActiveTab('department')}
          >
            Dept. of Biotechnology & Biochemical Engg.
          </button>
        </div>

        {/* Content Panes */}
        {activeTab === 'conference' && (
          <div className="about-content-card" role="tabpanel">
            {/* Quick Stats Grid */}
            <div className="about-stats-grid">
              {aboutContent.conference.stats.map((st, idx) => (
                <div key={idx} className="about-stat-box">
                  <span className="about-stat-number">{st.number}</span>
                  <span className="about-stat-label">{st.label}</span>
                </div>
              ))}
            </div>

            <div className="about-editorial-grid">
              <div>
                <p className="about-lead">
                  {aboutContent.conference.lead}
                </p>
                {aboutContent.conference.paragraphs.map((p, idx) => (
                  <p key={idx} className="about-paragraph">{p}</p>
                ))}
              </div>

              <div className="about-sidebar">
                <h3 className="about-sidebar-title">Conference Profile</h3>
                {aboutContent.conference.features.map((item, idx) => (
                  <div key={idx} className="about-feature-item">
                    <span className="about-feature-bullet">&bull;</span>
                    <div className="about-feature-text">
                      <strong>{item.label}:</strong> {item.value}
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                  <span className="badge badge-gold">Series III &bull; Hybrid Mode</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'institution' && (
          <div className="about-content-card" role="tabpanel">
            {/* Institution Stats */}
            <div className="about-stats-grid">
              {aboutContent.institution.stats.map((st, idx) => (
                <div key={idx} className="about-stat-box">
                  <span className="about-stat-number">{st.number}</span>
                  <span className="about-stat-label">{st.label}</span>
                </div>
              ))}
            </div>

            <div className="about-editorial-grid">
              <div>
                <span className="badge" style={{ marginBottom: '16px' }}>
                  {aboutContent.institution.locationBadge}
                </span>
                <p className="about-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  {aboutContent.institution.body}
                </p>
              </div>

              <div className="about-sidebar">
                <h3 className="about-sidebar-title">Key Institutional Accreditations</h3>
                {aboutContent.institution.highlights.map((item, idx) => (
                  <div key={idx} className="about-feature-item">
                    <Icon name="checkCircle" size={18} style={{ color: 'var(--color-primary-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span className="about-feature-text">{item}</span>
                  </div>
                ))}
                <a
                  href="https://www.sbce.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ marginTop: '14px', fontSize: '0.85rem' }}
                >
                  <span>Visit College Website</span>
                  <Icon name="externalLink" size={14} />
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'department' && (
          <div className="about-content-card" role="tabpanel">
            {/* Department Stats */}
            <div className="about-stats-grid">
              {aboutContent.department.stats && aboutContent.department.stats.map((st, idx) => (
                <div key={idx} className="about-stat-box">
                  <span className="about-stat-number">{st.number}</span>
                  <span className="about-stat-label">{st.label}</span>
                </div>
              ))}
            </div>

            <div className="about-editorial-grid">
              <div>
                <span className="badge" style={{ marginBottom: '16px' }}>NBA Accredited Department</span>
                <p className="about-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  {aboutContent.department.body}
                </p>
                <div style={{ marginTop: '28px' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-deep-green)', marginBottom: '14px' }}>
                    Key Research & Development Thrusts
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                    {aboutContent.department.researchThrusts.map((thrust, idx) => (
                      <div key={idx} className="about-thrust-chip">
                        <Icon name="atom" size={16} />
                        <span>{thrust}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="about-sidebar">
                <h3 className="about-sidebar-title">Academic Programs Offered</h3>
                {aboutContent.department.programs.map((prog, idx) => (
                  <div key={idx} className="about-feature-item">
                    <Icon name="bookOpen" size={18} style={{ color: 'var(--color-primary-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span className="about-feature-text"><strong>{prog}</strong></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
