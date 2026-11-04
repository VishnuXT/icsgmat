import React, { useState } from 'react'
import { committeeData } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Committee() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <section id="committee" className="section" aria-label="Organizing and Advisory Committees">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Governance & Leadership</span>
          <h2 className="section-title">Organizing Committee</h2>
          <p className="section-subtitle">
            Guided by academic leadership and renowned national and international advisory mentors from premier research institutes and universities.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="committee-filter-pills" role="tablist" aria-label="Committee Category Filter">
          <button
            type="button"
            className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Committees
          </button>
          <button
            type="button"
            className={`filter-pill ${activeFilter === 'patrons' ? 'active' : ''}`}
            onClick={() => setActiveFilter('patrons')}
          >
            Patrons & Leadership
          </button>
          <button
            type="button"
            className={`filter-pill ${activeFilter === 'organizing' ? 'active' : ''}`}
            onClick={() => setActiveFilter('organizing')}
          >
            Organizing Members
          </button>
          <button
            type="button"
            className={`filter-pill ${activeFilter === 'international' ? 'active' : ''}`}
            onClick={() => setActiveFilter('international')}
          >
            International Advisory
          </button>
          <button
            type="button"
            className={`filter-pill ${activeFilter === 'national' ? 'active' : ''}`}
            onClick={() => setActiveFilter('national')}
          >
            National Advisory
          </button>
        </div>

        <div className="committee-wrapper">
          {/* 1. Chief Patrons & Patrons */}
          {(activeFilter === 'all' || activeFilter === 'patrons') && (
            <div className="committee-category-block">
              <h3 className="committee-category-title">
                <span>Patrons & Institutional Leadership</span>
                <span className="committee-category-subtitle">SBES & SBCE Pattoor</span>
              </h3>

              <div className="patrons-grid">
                {committeeData.patrons.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    {group.members.map((member, mIdx) => (
                      <div key={`${gIdx}-${mIdx}`} className="patron-card">
                        <span className="patron-role-tag">{group.category}</span>
                        <h4 className="patron-name">{member.name}</h4>
                        <p className="patron-designation">{member.role}</p>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* 2. Conference Executive Leadership */}
          {(activeFilter === 'all' || activeFilter === 'patrons') && (
            <div className="committee-category-block">
              <h3 className="committee-category-title">
                <span>Conference Executive Committee</span>
                <span className="committee-category-subtitle">Department of BT & BCE</span>
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {committeeData.leadership.map((exec, idx) => (
                  <div key={idx} className="card-base" style={{ borderLeft: '4px solid var(--color-primary-green)' }}>
                    <span className="badge badge-gold" style={{ marginBottom: '10px' }}>{exec.title}</span>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-deep-green)', marginBottom: '4px' }}>
                      {exec.name}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                      {exec.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Organizing Committee Members */}
          {(activeFilter === 'all' || activeFilter === 'organizing') && (
            <div className="committee-category-block">
              <h3 className="committee-category-title">
                <span>Organizing Committee Members</span>
                <span className="committee-category-subtitle">Faculty, Dept. of BT & BCE</span>
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {committeeData.organizingMembers.map((member, idx) => (
                  <div key={idx} className="advisory-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon name="checkCircle" size={16} style={{ color: 'var(--color-primary-green)' }} />
                      <span className="advisory-name">{member.name}</span>
                    </div>
                    <span className="advisory-affiliation">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. International Advisory Committee */}
          {(activeFilter === 'all' || activeFilter === 'international') && (
            <div className="committee-category-block">
              <h3 className="committee-category-title">
                <span>International Advisory Committee</span>
                <span className="committee-category-subtitle">Global Academic & Industry Leaders</span>
              </h3>

              <div className="advisory-grid">
                {committeeData.internationalAdvisory.map((advisor, idx) => (
                  <div key={idx} className="advisory-card">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                      <span className="advisory-name">{advisor.name}</span>
                      <span style={{ fontSize: '1.1rem' }}>{advisor.flag}</span>
                    </div>
                    <span className="advisory-affiliation">{advisor.affiliation}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. National Advisory Committee */}
          {(activeFilter === 'all' || activeFilter === 'national') && (
            <div className="committee-category-block">
              <h3 className="committee-category-title">
                <span>National Advisory Committee</span>
                <span className="committee-category-subtitle">Premier Indian Universities, IITs, NITs & CSIR Labs</span>
              </h3>

              <div className="advisory-grid">
                {committeeData.nationalAdvisory.map((advisor, idx) => (
                  <div key={idx} className="advisory-card">
                    <span className="advisory-name">{advisor.name}</span>
                    <span className="advisory-affiliation">{advisor.affiliation}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
