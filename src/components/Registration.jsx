import React, { useState } from 'react'
import { registrationPlans, conferenceInfo, bankDetails } from '../data/conferenceData'
import { Icon } from './Icons'

export default function Registration() {
  const [currencyMode, setCurrencyMode] = useState('both') // 'both', 'inr', 'usd'
  const [copiedField, setCopiedField] = useState(null)

  const handleCopy = (text, field) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2200)
      }).catch(() => {})
    }
  }

  return (
    <section id="registration" className="section section-alt" aria-label="Conference Registration and Fees">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Participation Tiers</span>
          <h2 className="section-title">Registration Fees</h2>
          <p className="section-subtitle">
            Nominal registration fees (inclusive of 18% GST for Indian delegates) covering session access, 
            presentation slots, official certificates, and ISBN proceedings consideration.
          </p>
        </div>

        {/* Currency Filter Controls */}
        <div className="reg-currency-toggle" role="group" aria-label="Currency view options">
          <span className="reg-toggle-label">View Pricing In:</span>
          <button
            type="button"
            className={`currency-btn ${currencyMode === 'both' ? 'active' : ''}`}
            onClick={() => setCurrencyMode('both')}
          >
            INR & USD (Both)
          </button>
          <button
            type="button"
            className={`currency-btn ${currencyMode === 'inr' ? 'active' : ''}`}
            onClick={() => setCurrencyMode('inr')}
          >
            INR (₹) Only
          </button>
          <button
            type="button"
            className={`currency-btn ${currencyMode === 'usd' ? 'active' : ''}`}
            onClick={() => setCurrencyMode('usd')}
          >
            USD ($) Only
          </button>
        </div>

        {/* Plan Cards */}
        <div className="registration-grid">
          {registrationPlans.map((plan) => (
            <div key={plan.id} className={`reg-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">Most Popular &bull; Author Slot</div>
              )}

              <h3 className="reg-category">{plan.category}</h3>
              <p className="reg-subtitle">{plan.subtitle}</p>

              <div className="reg-price-block">
                {(currencyMode === 'both' || currencyMode === 'inr') && (
                  <div>
                    <span className="reg-price-tag">Indian Delegates</span>
                    <span className="reg-price-inr">{plan.inr}</span>
                    <span className="reg-price-breakdown">{plan.calcNote}</span>
                  </div>
                )}
                {(currencyMode === 'both' || currencyMode === 'usd') && (
                  <div style={{ marginLeft: currencyMode === 'both' ? 'auto' : '0', textAlign: currencyMode === 'both' ? 'right' : 'left' }}>
                    <span className="reg-price-tag">International</span>
                    <span className="reg-price-usd">{plan.usd} USD</span>
                  </div>
                )}
              </div>

              <ul className="reg-benefits-list">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="reg-benefit-item">
                    <Icon name="checkCircle" size={16} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={conferenceInfo.links.registration}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ marginTop: 'auto', width: '100%' }}
                title={`Register for ${plan.category}`}
              >
                <span>Register for this Tier</span>
                <Icon name="externalLink" size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Structured Table Summary */}
        <div className="reg-table-wrapper">
          <div className="reg-table-scroll-hint">
            <Icon name="arrowRight" size={12} />
            <span>Swipe table horizontally to compare fees</span>
          </div>
          <div className="reg-table-container">
          <table className="reg-table" aria-label="Fee Structure Summary Table">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col" className="col-amount">
                  Indian Participants (Rs.)
                  <span style={{ fontSize: '0.72rem', fontWeight: 500, display: 'block', color: 'var(--color-secondary-text)' }}>
                    (incl. 18% GST)
                  </span>
                </th>
                <th scope="col" className="col-amount">International Participants (USD)</th>
                <th scope="col" style={{ textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {registrationPlans.map((row) => (
                <tr key={row.id}>
                  <td>
                    <strong>{row.category}</strong>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)' }}>{row.subtitle}</div>
                  </td>
                  <td className="col-amount">
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary-text)' }}>
                      {row.inr}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-secondary-text)', fontWeight: 500 }}>
                      {row.calcNote}
                    </div>
                  </td>
                  <td className="col-amount">{row.usd}</td>
                  <td style={{ textAlign: 'center' }}>
                    <a
                      href={conferenceInfo.links.registration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="table-apply-btn"
                    >
                      <span>Register</span>
                      <Icon name="arrowRight" size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

        {/* Bank Account Details for Fee Payment */}
        <div className="reg-bank-card" aria-label="Official Bank Account Details for Registration Fee">
          <div className="reg-bank-header">
            <div className="reg-bank-badge">
              <Icon name="landmark" size={16} />
              <span>Official Remittance Account</span>
            </div>
            <h3 className="reg-bank-title">Bank Account Details for Fee Payment</h3>
            <p className="reg-bank-subtitle">
              Registration fees can be remitted directly via Net Banking / NEFT / IMPS / UPI to the following Canara Bank account. Please save the transaction receipt or UTR reference number to upload in the registration form.
            </p>
          </div>

          <div className="reg-bank-grid">
            <div className="reg-bank-item">
              <span className="bank-item-label">Account Holder Name</span>
              <span className="bank-item-val highlight">{bankDetails.accountName}</span>
            </div>

            <div className="reg-bank-item">
              <div className="bank-item-header">
                <span className="bank-item-label">Account Number</span>
                <button
                  type="button"
                  className="bank-copy-btn"
                  onClick={() => handleCopy(bankDetails.accountNumber, 'account')}
                  aria-label="Copy Account Number"
                  title="Copy Account Number"
                >
                  <Icon name={copiedField === 'account' ? 'check' : 'copy'} size={13} />
                  <span>{copiedField === 'account' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <span className="bank-item-val mono">{bankDetails.accountNumber}</span>
            </div>

            <div className="reg-bank-item">
              <span className="bank-item-label">Bank Name</span>
              <span className="bank-item-val">{bankDetails.bankName}</span>
            </div>

            <div className="reg-bank-item">
              <span className="bank-item-label">Branch Name</span>
              <span className="bank-item-val">{bankDetails.branch}</span>
            </div>

            <div className="reg-bank-item">
              <div className="bank-item-header">
                <span className="bank-item-label">IFSC Code</span>
                <button
                  type="button"
                  className="bank-copy-btn"
                  onClick={() => handleCopy(bankDetails.ifsc, 'ifsc')}
                  aria-label="Copy IFSC Code"
                  title="Copy IFSC Code"
                >
                  <Icon name={copiedField === 'ifsc' ? 'check' : 'copy'} size={13} />
                  <span>{copiedField === 'ifsc' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <span className="bank-item-val mono">{bankDetails.ifsc}</span>
            </div>

            <div className="reg-bank-item">
              <span className="bank-item-label">MICR Code</span>
              <span className="bank-item-val mono">{bankDetails.micr}</span>
            </div>
          </div>

          <div className="reg-bank-note">
            <Icon name="shieldCheck" size={16} />
            <span>
              <strong>Payment Advice:</strong> Keep a screenshot of the successful transaction (showing Date, UTR / Transaction Ref ID, and Amount). Attach the screenshot while completing your online registration below.
            </span>
          </div>
        </div>

        {/* Registration Action Banner & QR Code */}
        <div className="reg-action-panel">
          <div className="reg-action-content">
            <h3>Registration Deadline: {conferenceInfo.registrationDeadline}</h3>
            <p>
              Registrations and payment verification are coordinated seamlessly through the official Google Form. 
              Please register your presentation and co-authors before the deadline.
            </p>
          </div>

          <div className="reg-action-buttons">
            <div className="reg-qr-wrapper" title="Scan QR Code to open Registration Form on mobile">
              <img src={conferenceInfo.media.qrCode} alt="Registration Link QR Code" />
            </div>

            <a
              href={conferenceInfo.links.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ whiteSpace: 'nowrap' }}
            >
              <span>Open Registration Form</span>
              <Icon name="externalLink" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
