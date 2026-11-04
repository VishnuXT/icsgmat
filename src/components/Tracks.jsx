import React, { useState } from 'react'
import { conferenceTracks, conferenceInfo } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Tracks() {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const trackIcons = {
    '01': 'sparkles',
    '02': 'leaf',
    '03': 'atom',
    '04': 'layers',
    '05': 'shieldCheck',
    '06': 'zap'
  }

  const filteredTracks = conferenceTracks.filter((track) => {
    const matchesFilter = filter === 'all' || track.category === filter
    const matchesSearch = 
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <section id="tracks" className="section" aria-label="Conference Tracks and Thematic Scope">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Thematic Scope</span>
          <h2 className="section-title">Conference Tracks</h2>
          <p className="section-subtitle">
            ICSGMSA 2026 welcomes original research papers, systematic reviews, and industrial case studies 
            spanning six comprehensive tracks in smart and sustainable materials science.
          </p>
        </div>

        {/* Interactive Filter & Search Bar */}
        <div className="tracks-toolbar">
          <div className="tracks-filter-pills" role="tablist" aria-label="Filter conference tracks">
            <button
              type="button"
              className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Tracks (6)
            </button>
            <button
              type="button"
              className={`filter-pill ${filter === 'materials' ? 'active' : ''}`}
              onClick={() => setFilter('materials')}
            >
              Smart Materials
            </button>
            <button
              type="button"
              className={`filter-pill ${filter === 'biobased' ? 'active' : ''}`}
              onClick={() => setFilter('biobased')}
            >
              Bio-Based
            </button>
            <button
              type="button"
              className={`filter-pill ${filter === 'nano' ? 'active' : ''}`}
              onClick={() => setFilter('nano')}
            >
              Nanotech & Biotech
            </button>
            <button
              type="button"
              className={`filter-pill ${filter === 'engineering' ? 'active' : ''}`}
              onClick={() => setFilter('engineering')}
            >
              Civil & Mechanical
            </button>
            <button
              type="button"
              className={`filter-pill ${filter === 'environment' ? 'active' : ''}`}
              onClick={() => setFilter('environment')}
            >
              Food & Environment
            </button>
            <button
              type="button"
              className={`filter-pill ${filter === 'energy' ? 'active' : ''}`}
              onClick={() => setFilter('energy')}
            >
              Energy & Emerging
            </button>
          </div>

          <div className="tracks-search-wrapper">
            <input
              type="text"
              className="tracks-search-input"
              placeholder="Search topics (e.g. polymer, battery, biosensor)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search track keywords"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="tracks-search-clear" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="tracks-grid">
          {filteredTracks.map((track) => (
            <article key={track.number} className="track-card">
              <div>
                <div className="track-card-header">
                  <span className="track-number">{track.number}</span>
                  <div className="track-icon">
                    <Icon name={trackIcons[track.number] || 'layers'} size={22} />
                  </div>
                </div>

                <h3 className="track-title">{track.title}</h3>
                <p className="track-description">{track.description}</p>
              </div>

              <div>
                <div style={{ marginBottom: '10px', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-green)' }}>
                  Core Sub-Themes & Scope:
                </div>
                <ul className="track-topics-list">
                  {track.topics.map((topic, idx) => (
                    <li key={idx} className="track-topic-item">
                      <Icon name="check" size={14} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="track-card-footer">
                  <span className="track-footer-label">
                    Track {track.number} &bull; Best Paper Award Eligible
                  </span>
                  <a
                    href={conferenceInfo.links.abstractSubmission}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="track-submit-link"
                    title={`Submit paper for Track ${track.number}`}
                  >
                    <span>Submit to Track</span>
                    <Icon name="arrowRight" size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredTracks.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'var(--color-surface-card)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border)', marginTop: '20px' }}>
            <p style={{ color: 'var(--color-secondary-text)', fontSize: '1rem' }}>
              No tracks matched your search keyword "<strong>{searchQuery}</strong>".
            </p>
            <button 
              type="button" 
              className="btn btn-secondary" 
              style={{ marginTop: '12px' }}
              onClick={() => { setSearchQuery(''); setFilter('all'); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
