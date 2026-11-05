import React from 'react'
import { conferenceInfo } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container-wide">
        <div className="footer-top">
          {/* Brand & Editorial Summary */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img 
                src={conferenceInfo.media.autonomousEmblem} 
                alt="SBCE Pattoor Crest" 
                style={{ height: '44px', width: 'auto' }} 
              />
              <div>
                <h3 style={{ margin: 0, lineHeight: 1.1 }}>{conferenceInfo.acronym}</h3>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold-light)' }}>
                  Series &bull; III Edition
                </span>
              </div>
            </div>

            <p>
              International Conference Series — III on <strong>Smart and Green Materials for Sustainable Applications</strong>.
            </p>
            <p style={{ fontSize: '0.84rem', color: '#9DA695' }}>
              Organized by {conferenceInfo.department}, {conferenceInfo.institution}.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="badge badge-gold">December 9–11, 2026</span>
              <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}>Hybrid Mode</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Conference</a></li>
              <li><a href="#tracks" onClick={(e) => { e.preventDefault(); scrollTo('tracks'); }}>Conference Tracks</a></li>
              <li><a href="#speakers" onClick={(e) => { e.preventDefault(); scrollTo('speakers'); }}>Distinguished Speakers</a></li>
              <li><a href="#cfp" onClick={(e) => { e.preventDefault(); scrollTo('cfp'); }}>Call for Papers</a></li>
              <li><a href="#dates" onClick={(e) => { e.preventDefault(); scrollTo('dates'); }}>Important Dates</a></li>
              <li><a href="#registration" onClick={(e) => { e.preventDefault(); scrollTo('registration'); }}>Registration Fees</a></li>
              <li><a href="#committee" onClick={(e) => { e.preventDefault(); scrollTo('committee'); }}>Organizing Committee</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Venue & Secretariat</a></li>
            </ul>
          </div>

          {/* Action Links */}
          <div>
            <h4 className="footer-col-title">Downloads & Forms</h4>
            <ul className="footer-links-list">
              <li>
                <a href={conferenceInfo.links.abstractSubmission} target="_blank" rel="noopener noreferrer">
                  Submit Research Abstract &rarr;
                </a>
              </li>
              <li>
                <a href={conferenceInfo.links.registration} target="_blank" rel="noopener noreferrer">
                  Delegate Registration Form &rarr;
                </a>
              </li>
              <li>
                <a href={conferenceInfo.links.brochurePdf} download="ICSGMSA-2026-Brochure.pdf">
                  Download Conference Brochure (PDF)
                </a>
              </li>
              <li>
                <a href={conferenceInfo.links.abstractTemplateRef} download="ICSGMSA 2026 - Abstract Format.docx">
                  Download Reference Format (.docx)
                </a>
              </li>
              <li>
                <a href={conferenceInfo.links.institutionWebsite} target="_blank" rel="noopener noreferrer">
                  SBCE Official Website &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Secretariat Desk</h4>
            <div className="footer-contact-item">
              <Icon name="mapPin" size={18} />
              <span>{conferenceInfo.contact.fullAddress}</span>
            </div>

            <div className="footer-contact-item">
              <Icon name="phone" size={18} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <a href={`tel:${conferenceInfo.contact.phoneTel}`} style={{ color: '#ACB5A2' }}>
                  {conferenceInfo.contact.phoneDisplay} (Helpline)
                </a>
                <a href={`tel:${conferenceInfo.contact.studentCoordinatorTel}`} style={{ color: '#ACB5A2' }}>
                  {conferenceInfo.contact.studentCoordinatorDisplay} (Student Coord)
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Icon name="globe" size={18} />
              <a href={conferenceInfo.links.institutionWebsite} target="_blank" rel="noopener noreferrer" style={{ color: '#ACB5A2' }}>
                www.sbce.ac.in
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-outline-white"
              style={{ marginTop: '16px', fontSize: '0.82rem', padding: '8px 16px' }}
            >
              <span>Back to Top &uarr;</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; 2026 ICSGMSA. All rights reserved. Department of Biotechnology & Biochemical Engineering, SBCE Pattoor.
          </div>
          <div>
            Autonomous Institution affiliated to APJ Abdul Kalam Technological University &bull; NAAC 'A' Grade
          </div>
        </div>
      </div>
    </footer>
  )
}
