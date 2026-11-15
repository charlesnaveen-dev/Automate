import React, { useState } from 'react';
import { Mail, Clock, Globe, CheckCircle2, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import './ContactPage.css';

export default function ContactPage() {
  usePageMetadata({
    title: 'Contact Us — Hutomate Intelligent Automation',
    description: 'Get in touch with the Hutomate team. We review your operational challenges and evaluate how intelligent automation can help your business.',
    path: '/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isDeliveredViaApi, setIsDeliveredViaApi] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg('Please enter your name or business name.');
      return;
    }

    const phoneRegex = /^[+]?[\d\s().-]{7,25}$/;
    if (!trimmedPhone || !phoneRegex.test(trimmedPhone)) {
      setErrorMsg('Please enter a valid telephone number.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    const record = {
      name: trimmedName,
      phone: trimmedPhone,
      email: trimmedEmail,
      timestamp: new Date().toISOString(),
      formType: 'General Contact',
    };

    // 1. Local backup to localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('hutomate_enquiries') || '[]');
      stored.push(record);
      localStorage.setItem('hutomate_enquiries', JSON.stringify(stored));
    } catch (_storageErr) {
      // LocalStorage access restricted in private/sandbox mode
    }

    // 2. Dispatch to backend API if available
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      });

      if (res.ok) {
        const data = await res.json();
        setIsDeliveredViaApi(Boolean(data.delivered));
      } else {
        setIsDeliveredViaApi(false);
      }
    } catch (_err) {
      setIsDeliveredViaApi(false);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page">
      <PageHeader
        eyebrow="GET IN TOUCH"
        badgeText="Direct Communication"
        badgeType="teal"
        title="Contact Us"
        description="Have a question about our automation capabilities or want to explore how our systems apply to your workflows? Share your contact information and our engineering team will get back to you within one business day."
      />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Direct Info & Commitments */}
            <div className="contact-info-panel">
              <div className="contact-info-block">
                <div className="contact-block-header">
                  <Mail size={18} color="#167C80" />
                  <span className="contact-block-kicker">Direct Inquiries</span>
                </div>
                <h3 className="contact-info-title">Email Our Engineering Team</h3>
                <p className="contact-info-desc">
                  For formal RFPs, technical questions, or exploratory architectural reviews:
                </p>
                <a href="mailto:hutomate@gmail.com" className="direct-email-link">
                  hutomate@gmail.com
                </a>
              </div>

              <div className="contact-info-block">
                <div className="contact-block-header">
                  <Clock size={18} color="#167C80" />
                  <span className="contact-block-kicker">Response SLA</span>
                </div>
                <h3 className="contact-info-title">1 Business Day Response</h3>
                <p className="contact-info-desc">
                  Every inquiry is evaluated directly by our technical engineering team. We review your workflow and respond with clear next steps.
                </p>
              </div>

              <div className="contact-info-block">
                <div className="contact-block-header">
                  <ShieldCheck size={18} color="#167C80" />
                  <span className="contact-block-kicker">Data Protection</span>
                </div>
                <h3 className="contact-info-title">Strict Confidentiality</h3>
                <p className="contact-info-desc">
                  We treat all operational data, workflow architectures, and business discussions under strict mutual non-disclosure standards.
                </p>
              </div>

              <div className="contact-info-block">
                <div className="contact-block-header">
                  <Globe size={18} color="#167C80" />
                  <span className="contact-block-kicker">Global Availability</span>
                </div>
                <h3 className="contact-info-title">Working with Businesses Worldwide</h3>
                <p className="contact-info-desc">
                  Supporting clients across the United States, United Kingdom, Australia, and worldwide with full timezone accommodation.
                </p>
              </div>
            </div>

            {/* Right Column: Clean Three-Field Enquiry Form */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success-state">
                  <div className="contact-success-icon-box">
                    <CheckCircle2 size={36} color="#167C80" />
                  </div>
                  <h2 className="contact-success-title">
                    {isDeliveredViaApi ? 'Enquiry Delivered Successfully' : 'Enquiry Recorded Locally'}
                  </h2>
                  <p className="contact-success-text">
                    {isDeliveredViaApi ? (
                      <>
                        Your enquiry has been delivered directly to our engineering team at <strong>hutomate@gmail.com</strong>. We will review your details and respond to <strong>{formData.email}</strong> within one business day.
                      </>
                    ) : (
                      <>
                        Your contact details have been safely recorded. To ensure immediate receipt by our engineers right now, please click the button below to dispatch directly to <strong>hutomate@gmail.com</strong>.
                      </>
                    )}
                  </p>

                  <div className="contact-success-summary-box">
                    <div className="success-summary-row">
                      <span className="summary-label">Name / Business Name:</span>
                      <span className="summary-val">{formData.name}</span>
                    </div>
                    <div className="success-summary-row">
                      <span className="summary-label">Phone Number:</span>
                      <span className="summary-val">{formData.phone}</span>
                    </div>
                    <div className="success-summary-row">
                      <span className="summary-label">Email Address:</span>
                      <span className="summary-val">{formData.email}</span>
                    </div>
                  </div>

                  {!isDeliveredViaApi && (
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                      <a
                        href={`mailto:hutomate@gmail.com?subject=${encodeURIComponent(`Project Enquiry: ${formData.name}`)}&body=${encodeURIComponent(`Name / Business Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nHello Hutomate Team,\n\nI submitted an inquiry on your website and would like to explore an intelligent automation project.`)}`}
                        className="btn btn-primary btn-md"
                        style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', padding: '14px 24px', fontWeight: '700' }}
                      >
                        Send via Email Client to hutomate@gmail.com →
                      </a>
                    </div>
                  )}

                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="contact-form-element" onSubmit={handleSubmit} noValidate>
                  <div className="form-header-area">
                    <span className="form-eyebrow">ENQUIRY FORM</span>
                    <h2 className="form-main-heading">Send an enquiry</h2>
                    <p className="form-main-sub">
                      Tell us how to reach you and our engineering team will get in touch.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="form-error-banner" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Name / Business Name <span className="form-required">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Sarah Jenkins or Apex Logistics"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number <span className="form-required">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="e.g. +1 (555) 234-5678"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address <span className="form-required">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="form-submit-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg form-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="btn-spinner" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <ArrowRight size={16} className="btn-icon" />
                        </>
                      )}
                    </button>
                    <span className="form-privacy-note">
                      We respect your privacy. No spam or unsolicited sales calls.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
