import React from 'react'
import { highlights } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Highlights() {
  const iconMap = {
    1: 'users',
    2: 'layers',
    3: 'bookOpen',
    4: 'globe',
    5: 'sparkles',
    6: 'award',
    7: 'fileText'
  }

  return (
    <section id="highlights" className="section section-tint" aria-label="Conference Highlights">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Excellence</span>
          <h2 className="section-title">Conference Highlights</h2>
          <p className="section-subtitle">
            ICSGMSA 2026 brings together cross-disciplinary scientific tracks, distinguished keynote speakers, 
            prestigious track awards, and high-impact dissemination opportunities.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item) => {
            const isFeatured = item.id === 7
            return (
              <article 
                key={item.id} 
                className={`highlight-card ${isFeatured ? 'highlight-featured' : ''}`}
              >
                {isFeatured ? (
                  <div className="highlight-featured-content">
                    <div className="highlight-featured-main">
                      <div className="highlight-icon-wrapper">
                        <Icon name={iconMap[item.id] || 'checkCircle'} size={24} />
                      </div>
                      <div className="highlight-featured-body">
                        <span className="highlight-tag">{item.tag}</span>
                        <h3 className="highlight-title">{item.title}</h3>
                        <p className="highlight-description">{item.description}</p>
                      </div>
                    </div>
                    <div className="highlight-featured-badges">
                      <div className="featured-channel-pill">
                        <Icon name="checkCircle" size={16} />
                        <span>ISBN Conference Proceedings</span>
                      </div>
                      <div className="featured-channel-pill">
                        <Icon name="checkCircle" size={16} />
                        <span>Scopus Journal Consideration</span>
                      </div>
                      <div className="featured-channel-pill">
                        <Icon name="checkCircle" size={16} />
                        <span>Official Abstract Booklet</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="highlight-icon-wrapper">
                      <Icon name={iconMap[item.id] || 'checkCircle'} size={24} />
                    </div>
                    <span className="highlight-tag">{item.tag}</span>
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-description">{item.description}</p>
                  </>
                )}
              </article>
            )
          })}
        </div>

        {/* Ethical Scholarly Publishing Notice */}
        <div className="highlights-notice">
          <div className="highlights-notice-icon">
            <Icon name="shieldCheck" size={22} />
          </div>
          <p className="highlights-notice-text">
            <strong>Publication Note:</strong> All accepted and registered papers will be included in the official ISBN-registered 
            conference proceedings and abstract booklet. Selected high-quality papers will be recommended for publication in Scopus-indexed 
            partner journals following rigorous peer review as per the respective journal editorial standards. Publication in indexed journals is subject to review outcome and is not unconditionally guaranteed.
          </p>
        </div>
      </div>
    </section>
  )
}

