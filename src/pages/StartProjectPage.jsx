import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import './StartProjectPage.css';

const getInitialFormState = () => {
  const initial = {
    fullName: '',
    workEmail: '',
    companyName: '',
    companyWebsite: '',
    region: 'Americas (EST/CST/PST)',
    solutions: [],
    processDescription: '',
    toolsInUse: '',
    volume: 'Daily high volume',
    timeline: 'Within 2-4 weeks',
  };

  if (typeof window === 'undefined') return { form: initial, context: '' };

  try {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    const industryParam = params.get('industry');

    const solutions = [];
    let context = '';

    if (serviceParam) {
      if (serviceParam.includes('agent')) {
        solutions.push('agents');
        context = 'AI Agents';
      } else if (serviceParam.includes('voice') || serviceParam.includes('receptionist')) {
        solutions.push('voice');
        context = 'AI Receptionists / Voice AI';
      } else if (serviceParam.includes('workflow')) {
        solutions.push('workflows');
        context = 'Workflow Automation';
      } else if (serviceParam.includes('custom') || serviceParam.includes('integration')) {
        solutions.push('custom');
        context = 'Custom AI & Integrations';
      }
    }

    if (industryParam) {
      const cleanName = industryParam.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      context = context ? `${context} for ${cleanName}` : `${cleanName} Sector`;
      initial.processDescription = `Industry / Sector: ${cleanName}\nKey operational bottleneck to solve: `;
    }

    if (solutions.length > 0) {
      initial.solutions = solutions;
    }

    return { form: initial, context };
  } catch {
    return { form: initial, context: '' };
  }
};

export default function StartProjectPage() {
  usePageMetadata({
    title: 'Start a Project — Scoping & Initial Feasibility Consultation',
    description: 'Share your operational challenge or repetitive workflow with our engineering team. We review submissions within 1 business day with an initial feasibility assessment.',
    path: '/start-project',
  });

  const [initialData] = useState(() => getInitialFormState());
  const [formData, setFormData] = useState(initialData.form);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const preselectedContext = initialData.context;

  const solutionOptions = [
    { id: 'agents', label: 'AI Agents (task reasoning & execution)' },
    { id: 'workflows', label: 'Workflow Automation (connecting tools)' },
    { id: 'voice', label: 'Voice AI (inbound phone/call triage)' },
    { id: 'custom', label: 'Custom AI Solutions (bespoke architectures)' },
    { id: 'unsure', label: 'Not sure yet / Exploring feasibility' },
  ];

  const handleSolutionToggle = (id) => {
    setFormData((prev) => {
      const exists = prev.solutions.includes(id);
      return {
        ...prev,
        solutions: exists
          ? prev.solutions.filter((s) => s !== id)
          : [...prev.solutions, id],
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.companyName.trim() || !formData.processDescription.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="start-project-page">
      <PageHeader
        eyebrow="PROJECT INTAKE"
        badgeText="Discovery &amp; Scoping"
        badgeType="teal"
        title="Tell us about the operational challenge you want to solve."
        description="Complete our scoping questionnaire to give our engineering team context before our first consultation. We review every submission within 1 business day."
      />

      <section className="section detail-section">
        <div className="container">
          {submitted ? (
            <div className="submission-success-card card">
              <div className="success-icon-wrap">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="success-title">Thank you, {formData.fullName.split(' ')[0]}!</h2>
              <p className="success-desc">
                Your project scoping details have been securely received. Our engineering team will review your workflow requirements and respond to <strong>{formData.workEmail}</strong> within 1 business day with a preliminary feasibility assessment.
              </p>

              <div className="summary-details-box">
                <div style={{ fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                  Submission Summary:
                </div>
                <div><strong>Company:</strong> {formData.companyName}</div>
                <div><strong>Region:</strong> {formData.region}</div>
                <div><strong>Selected Areas:</strong> {formData.solutions.length > 0 ? formData.solutions.join(', ') : 'General evaluation'}</div>
                <div><strong>Timeline:</strong> {formData.timeline}</div>
              </div>

              <Button variant="primary" size="md" href="/">
                Return to Homepage
              </Button>
            </div>
          ) : (
            <div className="scoping-form-wrapper card">
              {preselectedContext && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(22, 124, 128, 0.08)',
                  border: '1px solid rgba(22, 124, 128, 0.2)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  marginBottom: '24px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#167C80'
                }}>
                  <Sparkles size={16} />
                  <span>Context pre-selected: <strong>{preselectedContext}</strong></span>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <h3 className="form-section-title">01. Contact Information</h3>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="workEmail">
                      Work Email <span className="required">*</span>
                    </label>
                    <input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="form-input"
                      value={formData.workEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="companyName">
                      Company Name <span className="required">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      placeholder="Acme Operations Ltd"
                      className="form-input"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="companyWebsite">
                      Company Website (optional)
                    </label>
                    <input
                      id="companyWebsite"
                      name="companyWebsite"
                      type="text"
                      placeholder="https://example.com"
                      className="form-input"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="region">
                    Primary Region / Operating Time Zone
                  </label>
                  <select
                    id="region"
                    name="region"
                    className="form-select"
                    value={formData.region}
                    onChange={handleChange}
                  >
                    <option value="Americas (EST/CST/PST)">Americas (EST / CST / PST)</option>
                    <option value="EMEA (GMT/CET)">United Kingdom &amp; Europe (GMT / BST / CET)</option>
                    <option value="APAC (AEST/SGT)">Australia &amp; Asia-Pacific (AEST / SGT / IST)</option>
                    <option value="Other">Other Global Location</option>
                  </select>
                </div>

                <h3 className="form-section-title" style={{ marginTop: '36px' }}>
                  02. Areas of Interest
                </h3>
                <div className="chips-grid">
                  {solutionOptions.map((opt) => {
                    const isSelected = formData.solutions.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        className={`chip-checkbox-label ${isSelected ? 'selected' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleSolutionToggle(opt.id)}
                        />
                        <span>{opt.label}</span>
                      </label>
                    );
                  })}
                </div>

                <h3 className="form-section-title" style={{ marginTop: '36px' }}>
                  03. Current Operational Bottleneck
                </h3>
                <div className="form-group">
                  <label className="form-label" htmlFor="processDescription">
                    Describe the repetitive task or workflow your team spends manual time on <span className="required">*</span>
                  </label>
                  <textarea
                    id="processDescription"
                    name="processDescription"
                    required
                    placeholder="e.g. When customer emails arrive with PDF order forms, our team manually opens each file, copies data into our CRM, and alerts the warehouse team in Slack..."
                    className="form-textarea"
                    value={formData.processDescription}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="toolsInUse">
                    Which software tools or platforms are currently involved?
                  </label>
                  <input
                    id="toolsInUse"
                    name="toolsInUse"
                    type="text"
                    placeholder="e.g. HubSpot, Zendesk, Xero, Google Sheets, Postgres"
                    className="form-input"
                    value={formData.toolsInUse}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="volume">
                      Estimated Task Frequency / Volume
                    </label>
                    <select
                      id="volume"
                      name="volume"
                      className="form-select"
                      value={formData.volume}
                      onChange={handleChange}
                    >
                      <option value="Daily high volume">Daily high volume (multiple times/hour)</option>
                      <option value="Daily routine">Daily routine (several times a day)</option>
                      <option value="Weekly batch routines">Weekly batch routines</option>
                      <option value="Continuous 24/7 operations">Continuous 24/7 operations</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="timeline">
                      Implementation Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="form-select"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="Within 2-4 weeks">Immediately (within 2-4 weeks)</option>
                      <option value="Next 1-2 months">Next 1-2 months</option>
                      <option value="Upcoming quarter">Exploring / Budgeting for upcoming quarter</option>
                    </select>
                  </div>
                </div>

                {errorMsg && (
                  <div style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '16px' }}>
                    {errorMsg}
                  </div>
                )}

                <div className="form-submit-row">
                  <Button variant="primary" size="lg" arrow type="submit">
                    Submit Scoping Request
                  </Button>
                  <p className="form-trust-text">
                    <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                    We respect your privacy. Submissions are reviewed under strict non-disclosure obligations. We never share your data.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
