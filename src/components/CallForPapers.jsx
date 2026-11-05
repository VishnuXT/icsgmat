import React, { useState } from 'react'
import { conferenceInfo, abstractGuidelines } from '../data/conferenceData'
import { Icon } from './Icons'

export default function CallForPapers() {
  const [copied, setCopied] = useState(false)

  const copyTemplateSnippet = () => {
    const snippet = `TITLE (Times New Roman, 16 pt, Bold)
Author 1*, Author 2 (Times New Roman, 12 pt, Bold)
1 Affiliation 1, Department, Institution, Country (Times New Roman, 12 pt)
2 Affiliation 2, Department, Institution, Country (Times New Roman, 12 pt)
* Corresponding author email: email@domain.com

Abstract: (Times New Roman, 12 pt, Bold)
Abstract body text (Times New Roman, 12 pt, word limit: 150 words)

Keywords: Keyword 1, Keyword 2, Keyword 3, Keyword 4, Keyword 5 (Times New Roman, 12 pt)`

    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const steps = [
    { num: "01", title: "Abstract Preparation", desc: "Format original abstract within 150 words following the 16pt / 12pt Times New Roman style." },
    { num: "02", title: "Online Submission", desc: "Upload and submit through the official Google Form before November 10, 2026." },
    { num: "03", title: "Peer-Review Review", desc: "Expert technical evaluation; acceptance notifications dispatched by November 15, 2026." },
    { num: "04", title: "Registration & Presentation", desc: "Register by November 20, 2026 for oral / poster presentation during December 9–11, 2026." }
  ]

  return (
    <section id="cfp" className="section" aria-label="Call for Papers and Abstract Submission">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Submission Process</span>
          <h2 className="section-title">Call for Papers</h2>
          <p className="section-subtitle">
            Academicians, researchers, and industry specialists are cordially invited to submit original, 
            unpublished empirical papers, reviews, and case studies aligned with the conference tracks.
          </p>
        </div>

        {/* 4-Step Submission Roadmap */}
        <div className="cfp-steps-grid">
          {steps.map((st) => (
            <div key={st.num} className="cfp-step-card">
              <span className="cfp-step-num">{st.num}</span>
              <h3 className="cfp-step-title">{st.title}</h3>
              <p className="cfp-step-desc">{st.desc}</p>
            </div>
          ))}
        </div>

        <div className="cfp-layout">
          {/* Main Column */}
          <div className="cfp-main-card">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-deep-green)', marginBottom: '14px' }}>
              Submission Categories & Guidelines
            </h3>
            <p className="cfp-intro-text">
              All submissions must address novel theoretical insights, experimental methodologies, or industrial applications within the conference scope. Each paper will be double-blind peer-reviewed by domain specialists.
            </p>

            <div className="cfp-types-box">
              <h4 className="cfp-types-title">Eligible Paper Contributions</h4>
              <div className="cfp-types-grid">
                {abstractGuidelines.typesAccepted.map((type, idx) => (
                  <div key={idx} className="cfp-type-card">
                    <Icon name="checkCircle" size={18} />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission CTA Block */}
            <div className="cfp-cta-block">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <strong style={{ fontSize: '1.05rem', color: 'var(--color-deep-green)' }}>
                  Submission Deadline: {conferenceInfo.abstractDeadline}
                </strong>
                <span className="badge badge-gold">Max 150 Words</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-secondary-text)', marginBottom: '20px', lineHeight: '1.6' }}>
                Abstracts must be submitted directly through the official online Google Form. No registration fee is required at the initial abstract submission stage.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={conferenceInfo.links.abstractSubmission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  title="Open official Google Form for abstract submission"
                >
                  <span>Submit Abstract via Google Form</span>
                  <Icon name="externalLink" size={16} />
                </a>

                <button
                  type="button"
                  onClick={copyTemplateSnippet}
                  className="btn btn-secondary"
                  title="Copy the plain-text template outline to clipboard"
                >
                  <Icon name={copied ? 'check' : 'fileText'} size={16} />
                  <span>{copied ? 'Format Outline Copied!' : 'Copy Format Outline'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Preparation Requirements */}
          <div className="cfp-guidelines-card">
            <div className="cfp-guidelines-header">
              <h3 className="cfp-guidelines-title">Abstract Formatting Guide</h3>
              <p className="cfp-guidelines-subtitle">
                Strict adherence to typography and word-count specifications is required.
              </p>
            </div>

            <div className="guidelines-spec-list">
              {abstractGuidelines.requirements.map((spec, idx) => (
                <div key={idx} className="guideline-spec-item">
                  <span className="guideline-spec-label">{spec.label}</span>
                  <span className="guideline-spec-rule">{spec.rule}</span>
                </div>
              ))}
            </div>

            {/* Template Download / Institutional Reference Box */}
            <div className="cfp-template-box">
              <div className="cfp-template-header">
                <Icon name="fileText" size={18} style={{ color: 'var(--color-primary-green)' }} />
                <span>Reference Format Document (.docx)</span>
              </div>
              <p className="cfp-template-disclaimer">
                The official reference document (<code>ICSGMSA 2026 - Abstract Format.docx</code>) provides formatting guidance. Please adhere strictly to the 150-word and typography limits.
              </p>
              <div className="cfp-template-actions">
                <a
                  href={conferenceInfo.links.abstractTemplateRef}
                  download="ICSGMSA 2026 - Abstract Format.docx"
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.85rem', padding: '10px 16px' }}
                >
                  <Icon name="download" size={16} />
                  <span>Download Reference Format (.docx)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
