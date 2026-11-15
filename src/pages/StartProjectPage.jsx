import React, { useState } from 'react';
import { Mail, Clock, ShieldCheck, CheckCircle2, Loader2, ArrowRight, Sparkles } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import './StartProjectPage.css';

export default function StartProjectPage() {
  usePageMetadata({
    title: 'Discuss Your Project — Hutomate Intelligent Automation',
    description: 'Tell us a little about your business and how to reach you. Our team will get in touch to understand your requirements and explore the right solution.',
    path: '/start-project',
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
      formType: 'Project Intake Consultation',
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
    <div className="start-project-page">
      <PageHeader
        eyebrow="PROJECT INITIATION"
        badgeText="Discovery &amp; Consultation"
        badgeType="teal"
        title="Let's build something intelligent."
        description="Tell us a little about your business and how to reach you. Our team will get in touch to understand your requirements and explore the right solution."
      />

      <section className="section start-project-section">
        <div className="container">
          <div className="project-layout-grid">
            {/* Left Column: Project Consultation Guidance */}
            <div className="project-info-panel">
              <div className="project-info-block">
                <div className="project-block-header">
                  <Sparkles size={18} color="#167C80" />
                  <span className="project-block-kicker">Technical Consultation</span>
                </div>
                <h3 className="project-info-title">Direct Access to Engineering Leads</h3>
                <p className="project-info-desc">
                  We review your current software stack, operational bottlenecks, and workflow requirements before proposing an architecture.
                </p>
              </div>

              <div className="project-info-block">
                <div className="project-block-header">
                  <Clock size={18} color="#167C80" />
                  <span className="project-block-kicker">Feasibility Review</span>
                </div>
                <h3 className="project-info-title">1 Business Day Turnaround</h3>
                <p className="project-info-desc">
                  Our technical leads evaluate incoming project inquiries promptly with clear next steps and an estimated scoping schedule.
                </p>
              </div>

              <div className="project-info-block">
                <div className="project-block-header">
                  <ShieldCheck size={18} color="#167C80" />
                  <span className="project-block-kicker">Confidentiality</span>
                </div>
                <h3 className="project-info-title">Mutual NDA on Request</h3>
                <p className="project-info-desc">
                  We treat all operational data and workflow discussions as strictly confidential and routinely sign NDAs prior to technical audits.
                </p>
              </div>

              <div className="project-info-block">
                <div className="project-block-header">
                  <Mail size={18} color="#167C80" />
                  <span className="project-block-kicker">Direct Inquiries</span>
                </div>
                <h3 className="project-info-title">Have an RFP or Spec Document?</h3>
                <p className="project-info-desc">
                  You can also email project briefs or RFP documentation directly to our team:
                </p>
                <a href="mailto:hutomate@gmail.com" className="project-direct-email">
                  hutomate@gmail.com
                </a>
              </div>
            </div>

            {/* Right Column: Clean Three-Field Project Form */}
            <div className="project-form-card">
              {submitted ? (
                <div className="project-success-state">
                  <div className="project-success-icon-box">
                    <CheckCircle2 size={36} color="#167C80" />
                  </div>
                  <h2 className="project-success-title">
                    {isDeliveredViaApi ? 'Project Inquiry Delivered Successfully' : 'Project Inquiry Saved Locally'}
                  </h2>
                  <p className="project-success-text">
                    {isDeliveredViaApi ? (
                      <>
                        Your project inquiry has been delivered directly to our solutions architecture team at <strong>hutomate@gmail.com</strong>. We will review your requirements and respond to <strong>{formData.email}</strong> within one business day.
                      </>
                    ) : (
                      <>
                        Your project details have been safely recorded. To ensure our engineering leads receive your requirements immediately, please click the button below to dispatch directly to <strong>hutomate@gmail.com</strong>.
                      </>
                    )}
                  </p>

                  <div className="project-success-summary-box">
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
                        href={`mailto:hutomate@gmail.com?subject=${encodeURIComponent(`Project Consultation: ${formData.name}`)}&body=${encodeURIComponent(`Name / Business Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nHello Hutomate Engineering Team,\n\nI would like to discuss an intelligent automation project for my business.`)}`}
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
                    Submit Another Project Inquiry
                  </Button>
                </div>
              ) : (
                <form className="project-form-element" onSubmit={handleSubmit} noValidate>
                  <div className="form-header-area">
                    <span className="form-eyebrow">PROJECT INTAKE</span>
                    <h2 className="form-main-heading">Start the conversation</h2>
                    <p className="form-main-sub">
                      Tell us how to reach you and we will arrange a discovery call to understand your requirements.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="form-error-banner" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label" htmlFor="project-name">
                      Name / Business Name <span className="form-required">*</span>
                    </label>
                    <input
                      id="project-name"
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
                    <label className="form-label" htmlFor="project-phone">
                      Phone Number <span className="form-required">*</span>
                    </label>
                    <input
                      id="project-phone"
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
                    <label className="form-label" htmlFor="project-email">
                      Email Address <span className="form-required">*</span>
                    </label>
                    <input
                      id="project-email"
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
                          <span>Preparing Consultation...</span>
                        </>
                      ) : (
                        <>
                          <span>Discuss Your Project</span>
                          <ArrowRight size={16} className="btn-icon" />
                        </>
                      )}
                    </button>
                    <span className="form-privacy-note">
                      We treat all workflow discussions and project inquiries with strict confidentiality.
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
