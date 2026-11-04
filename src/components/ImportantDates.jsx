import React from 'react'
import { importantDates } from '../data/conferenceData'
import { Icon } from './Icons'

export default function ImportantDates() {
  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=ICSGMSA+2026+-+International+Conference+on+Smart+and+Green+Materials&dates=20261209T033000Z/20261211T123000Z&details=International+Conference+Series+III+on+Smart+and+Green+Materials+for+Sustainable+Applications+(ICSGMSA+2026)+at+Sree+Buddha+College+of+Engineering+Pattoor+Kerala+(Autonomous)&location=Sree+Buddha+College+of+Engineering+Pattoor+Alappuzha+Kerala"

  return (
    <section id="dates" className="section section-tint" aria-label="Important Dates and Deadlines">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Deadlines & Milestones</span>
          <h2 className="section-title">Important Dates</h2>
          <p className="section-subtitle">
            Mark your calendar for key submission deadlines, acceptance announcements, registration deadlines, and the main conference dates.
          </p>
        </div>

        <div className="dates-timeline">
          {importantDates.map((item) => (
            <div
              key={item.id}
              className={`date-milestone-card ${item.isPrimary ? 'active-deadline' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'rgba(83, 107, 63, 0.4)' }}>
                  {item.step}
                </span>
                <div className={`date-badge ${item.isPrimary ? 'badge-highlight' : 'badge-neutral'}`}>
                  <Icon name={item.isPrimary ? 'clock' : 'calendar'} size={13} />
                  <span>{item.status}</span>
                </div>
              </div>

              <div className="milestone-date-display">{item.date}</div>
              <h3 className="milestone-title">{item.title}</h3>
              <p className="milestone-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Calendar Reminder & Early Submission Action */}
        <div className="dates-action-bar">
          <div className="dates-action-text">
            <Icon name="calendar" size={22} style={{ color: 'var(--color-primary-green)', flexShrink: 0 }} />
            <div>
              <strong>Save December 9–11, 2026 to Your Schedule</strong>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-secondary-text)' }}>
                Sync the conference dates directly to your Google Calendar or mobile device.
              </p>
            </div>
          </div>

          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: '0.85rem', padding: '10px 18px', whiteSpace: 'nowrap' }}
          >
            <Icon name="externalLink" size={15} />
            <span>Add to Google Calendar</span>
          </a>
        </div>
      </div>
    </section>
  )
}
