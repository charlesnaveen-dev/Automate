import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Globe2,
  Mail,
  Loader2
} from 'lucide-react';
import './ContactSection.css';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  company: '',
  country: 'India',
  service: 'AI Agents',
  challenge: ''
};

const getInitialContactData = () => {
  const initial = { ...INITIAL_FORM_DATA };
  if (typeof window === 'undefined') return initial;

  try {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      if (serviceParam.includes('voice') || serviceParam.includes('receptionist')) {
        initial.service = 'Voice AI';
      } else if (serviceParam.includes('workflow')) {
        initial.service = 'Workflow Automation';
      } else if (serviceParam.includes('custom') || serviceParam.includes('integration')) {
        initial.service = 'Custom AI';
      } else if (serviceParam.includes('agent')) {
        initial.service = 'AI Agents';
      }
    }
  } catch {
    // Ignore URL parsing errors
  }
  return initial;
};

export default function ContactSection() {
  const [formData, setFormData] = useState(() => getInitialContactData());
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nameInputRef = useRef(null);

  // Validate fields
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your business email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleBlur = (field) => {
    if (field === 'name' && !formData.name.trim()) {
      setErrors((prev) => ({ ...prev, name: 'Please provide your name.' }));
    }
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        setErrors((prev) => ({ ...prev, email: 'Please provide your business email.' }));
      } else if (!emailRegex.test(formData.email.trim())) {
        setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setIsSubmitted(false);
  };

  const scrollToForm = (e) => {
    e.preventDefault();
    if (nameInputRef.current) {
      nameInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      nameInputRef.current.focus();
    }
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      {/* Background glow effects */}
      <div className="contact-bg-glow-top" aria-hidden="true" />
      <div className="contact-bg-glow-bottom" aria-hidden="true" />

      <div className="contact-container">
        <div className="contact-layout">
          {/* Left Column: Headline, subtext, CTA buttons, and trust metrics */}
          <div className="contact-info-column">
            <div className="contact-eyebrow reveal-on-scroll">
              <span className="contact-eyebrow-dot" aria-hidden="true" />
              <span>LET'S TALK</span>
            </div>

            <h2 id="contact-heading" className="contact-headline reveal-on-scroll reveal-delay-1">
              Let's make your business{'\n'}work smarter.
            </h2>

            <p className="contact-subtext reveal-on-scroll reveal-delay-2">
              Tell us how your business operates, what slows your team down, and where you want to improve. We'll explore whether AI automation is the right fit.
            </p>

            {/* Action buttons */}
            <div className="contact-cta-actions reveal-on-scroll reveal-delay-2">
              <button
                type="button"
                className="contact-btn contact-btn--primary"
                onClick={scrollToForm}
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={17} className="contact-btn-arrow" aria-hidden="true" />
              </button>

              <a
                href="#services"
                className="contact-btn contact-btn--secondary"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="contact-trust-list reveal-on-scroll reveal-delay-3">
              <div className="contact-trust-item">
                <Clock size={18} className="contact-trust-icon" aria-hidden="true" />
                <div className="contact-trust-text">
                  <strong>24-Hour Response</strong>
                  <span>Direct engineering review within one business day</span>
                </div>
              </div>

              <div className="contact-trust-item">
                <Globe2 size={18} className="contact-trust-icon" aria-hidden="true" />
                <div className="contact-trust-text">
                  <strong>Dual Region Coverage</strong>
                  <span>Serving businesses across India and the United States</span>
                </div>
              </div>

              <div className="contact-trust-item">
                <ShieldCheck size={18} className="contact-trust-icon" aria-hidden="true" />
                <div className="contact-trust-text">
                  <strong>No Vendor Lock-In</strong>
                  <span>You retain complete ownership of your data and workflows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column reveal-on-scroll reveal-delay-2">
            <div className="contact-form-card">
              {isSubmitted ? (
                /* Success Notice State */
                <div className="contact-success-state" role="status" aria-live="polite">
                  <div className="contact-success-icon-wrap" aria-hidden="true">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="contact-success-title">Message Received</h3>
                  <div className="contact-notice-box">
                    <p className="contact-notice-text">
                      Thank you for your interest. Form submission will be connected to a backend service. For now, please reach out directly.
                    </p>
                  </div>

                  <div className="contact-direct-card">
                    <Mail size={18} className="contact-direct-icon" aria-hidden="true" />
                    <div>
                      <span className="contact-direct-label">Direct Communication:</span>
                      <a href="mailto:hutomate@gmail.com" className="contact-direct-email">
                        hutomate@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="contact-btn contact-btn--reset"
                    onClick={handleReset}
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                /* Interactive Form State */
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Project consultation form"
                >
                  <div className="contact-form-header">
                    <h3 className="contact-form-title">Start a Conversation</h3>
                    <p className="contact-form-desc">
                      Share your operational bottlenecks. No sales pressure.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Name <span className="form-required" aria-hidden="true">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      className={`form-input ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Jane Doe"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="form-error" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Business email field */}
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Business email <span className="form-required" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="form-error" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Company field */}
                  <div className="form-group">
                    <label htmlFor="contact-company" className="form-label">
                      Company
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Acme Inc."
                      autoComplete="organization"
                    />
                  </div>

                  {/* Two Column Row: Country & Service of Interest */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-country" className="form-label">
                        Country
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="contact-country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="India">India</option>
                          <option value="United States">United States</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-service" className="form-label">
                        Service of interest
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="AI Agents">AI Agents</option>
                          <option value="Workflow Automation">Workflow Automation</option>
                          <option value="Voice AI">Voice AI</option>
                          <option value="Custom AI Solutions">Custom AI Solutions</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Challenge description field */}
                  <div className="form-group">
                    <label htmlFor="contact-challenge" className="form-label">
                      Brief description of the challenge
                    </label>
                    <textarea
                      id="contact-challenge"
                      name="challenge"
                      rows={3}
                      value={formData.challenge}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="e.g. We spend 15 hours a week manually copy-pasting customer booking data between our CRM and invoice tool..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="spinner-icon" aria-hidden="true" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={17} className="btn-arrow-icon" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p className="form-privacy-note">
                    Strict privacy. We never share your company details or workflows with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
