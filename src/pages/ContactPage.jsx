import React, { useState } from 'react';
import { Mail, Clock, Globe, CheckCircle2, ShieldCheck, Send, Loader2 } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import './ContactPage.css';

const INDUSTRIES = [
  'Select your industry...',
  'Home Services & Field Operations',
  'Healthcare & Clinics',
  'Professional Services (Legal, Accounting, Advisory)',
  'Real Estate & Property Management',
  'E-commerce & Retail',
  'Hospitality & Customer Experience',
  'Logistics & Supply Chain',
  'Financial Services & FinTech',
  'SaaS & Technology',
  'Other / Specialized Sector',
];

const SERVICES = [
  { id: 'ai-agents', label: 'AI Agents' },
  { id: 'workflow-automation', label: 'Workflow Automation' },
  { id: 'voice-ai', label: 'Voice AI' },
  { id: 'custom-ai', label: 'Custom AI Solutions' },
  { id: 'not-sure', label: 'Not sure yet' },
];

export default function ContactPage() {
  usePageMetadata({
    title: 'Discuss Your Project — Hutomate Technical Consultation',
    description: 'Reach out to discuss your operational challenges. We review workflows, evaluate technical feasibility, and design custom intelligent systems.',
    path: '/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    industry: '',
    service: 'ai-agents',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (!formData.company.trim()) {
      setErrorMsg('Please enter your company name.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      setErrorMsg('Please describe your operational challenge or project (at least 15 characters).');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 850);
  };

  return (
    <div className="contact-page">
      <PageHeader
        eyebrow="GET IN TOUCH"
        badgeText="Project Scoping &amp; Consultation"
        badgeType="purple"
        title="Let's build something intelligent."
        description="Whether you have a specific operational bottleneck to solve, want to explore AI agents, or need advice on connecting your systems, we're here to talk."
      />

      <section className="section detail-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Direct Info & Commitments */}
            <div className="contact-info-panel">
              <div className="contact-info-block card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7657E8' }}>
                  <Mail size={18} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Inquiries</span>
                </div>
                <h3 className="contact-info-title">Email Our Engineering Team</h3>
                <p className="contact-info-desc">
                  For formal RFPs, technical questions, or exploratory discussions:
                </p>
                <a href="mailto:hello@hutomate.com" className="direct-email-link">
                  hello@hutomate.com
                </a>
              </div>

              <div className="contact-info-block card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981' }}>
                  <Clock size={18} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Response Time</span>
                </div>
                <h3 className="contact-info-title">1 Business Day Guarantee</h3>
                <p className="contact-info-desc">
                  Every inquiry is reviewed directly by an automation engineer or director. We do not use automated marketing funnels that waste your time.
                </p>
              </div>

              <div className="contact-info-block card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8' }}>
                  <ShieldCheck size={18} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Confidentiality</span>
                </div>
                <h3 className="contact-info-title">Confidential &amp; Secure</h3>
                <p className="contact-info-desc">
                  We treat all operational data, workflow architectures, and business discussions under strict mutual non-disclosure standards.
                </p>
              </div>

              <div className="contact-info-block card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B' }}>
                  <Globe size={18} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Delivery Zones</span>
                </div>
                <h3 className="contact-info-title">Serving Global Markets</h3>
                <p className="contact-info-desc">
                  Clients across the USA, UK, Australia, India, and worldwide with full timezone accommodation.
                </p>
              </div>
            </div>

            {/* Right Column: Multi-Field Project Enquiry Form */}
            <div className="contact-form-card card">
              {submitted ? (
                <div className="contact-success-state">
                  <div className="contact-success-icon-box">
                    <CheckCircle2 size={36} color="#10B981" />
                  </div>
                  <h3 className="contact-success-title">Project Enquiry Received</h3>
                  <p className="contact-success-text">
                    Thank you, <strong>{formData.name}</strong>. An automation director will review your project brief for <strong>{formData.company}</strong> and respond to <strong>{formData.email}</strong> within 1 business day.
                  </p>

                  <div className="contact-success-summary-box">
                    <div className="success-summary-row">
                      <span className="summary-label">Target Capability:</span>
                      <span className="summary-val">{SERVICES.find((s) => s.id === formData.service)?.label}</span>
                    </div>
                    {formData.industry && (
                      <div className="success-summary-row">
                        <span className="summary-label">Industry:</span>
                        <span className="summary-val">{formData.industry}</span>
                      </div>
                    )}
                    <div className="success-summary-row">
                      <span className="summary-label">Next Step:</span>
                      <span className="summary-val">Phase 1 Feasibility &amp; Architecture Audit</span>
                    </div>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        website: '',
                        industry: '',
                        service: 'ai-agents',
                        message: '',
                      });
                    }}
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-inner" noValidate>
                  <div className="form-header-area">
                    <h3 className="form-main-heading">Project Consultation Request</h3>
                    <p className="form-main-sub">Tell us about the workflows you want to automate.</p>
                  </div>

                  {/* 2-Column Grid for Name & Work Email */}
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Full Name <span className="form-required">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Work Email <span className="form-required">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* 2-Column Grid for Company & Website */}
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">
                        Company Name <span className="form-required">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Apex Logistics Ltd"
                        className="form-input"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="website">
                        Website <span className="form-optional">(Optional)</span>
                      </label>
                      <input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://company.com"
                        className="form-input"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Industry Select */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="industry">
                      Industry Sector
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="form-select"
                      value={formData.industry}
                      onChange={handleChange}
                    >
                      {INDUSTRIES.map((ind, i) => (
                        <option key={i} value={i === 0 ? '' : ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service Selection Pills */}
                  <div className="form-group">
                    <label className="form-label">
                      Required Capability / Interest
                    </label>
                    <div className="service-pills-grid" role="radiogroup">
                      {SERVICES.map((srv) => {
                        const isSelected = formData.service === srv.id;
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            className={`service-pill-btn ${isSelected ? 'is-selected' : ''}`}
                            onClick={() => handleServiceSelect(srv.id)}
                          >
                            <span>{srv.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message / Operational Challenge */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Project Description &amp; Operational Challenge <span className="form-required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe the repetitive tasks, manual handoffs, or systems (CRM, ERP, email, etc.) you wish to connect and automate..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {errorMsg && (
                    <div className="form-error-banner" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="btn-spinner" />
                        <span>Evaluating Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Enquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
