import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import './LegalPage.css';

export default function PrivacyPage() {
  usePageMetadata({
    title: 'Privacy Policy — Hutomate Data Protection',
    description: 'Our commitment to data privacy, zero training on client proprietary IP, and transparent data handling practices.',
    path: '/privacy',
  });

  return (
    <div className="legal-page">
      <PageHeader
        eyebrow="PRIVACY &amp; COMPLIANCE"
        badgeText="Data Protection"
        badgeType="purple"
        title="Privacy Policy"
        description="At Hutomate, we treat the confidentiality of our clients' operational data and project inquiries with the highest level of care. This policy outlines our data collection, processing, and protection standards."
      />

      <section className="section detail-section">
        <div className="container">
          <div className="legal-content-container card">
            <div className="legal-meta-bar">
              <span>Effective Date: October 2024</span>
              <span>Last Updated: October 2024</span>
            </div>

            <div className="legal-section-block">
              <h2>1. Information We Collect</h2>
              <p>
                When you visit our website or communicate with us, we collect information you provide directly to us through scoping questionnaires, contact forms, and electronic correspondence. This includes your name, work email address, company name, website URL, operational workflow descriptions, and system integration details.
              </p>
              <p>
                We also collect standard aggregate telemetry regarding website usage, such as browser types, referring pages, and device specifications, to maintain website performance and reliability.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. How We Use Collected Information</h2>
              <p>We use information provided through our website solely to:</p>
              <ul>
                <li>Evaluate project feasibility and prepare tailored technical scoping proposals.</li>
                <li>Respond directly to your inquiries and schedule discovery consultations.</li>
                <li>Maintain necessary business communication throughout client engagements.</li>
                <li>Improve our website architecture and operational content.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal or commercial contact information to third-party data brokers or marketing services.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. AI Model Training Protections (Strict Guarantee)</h2>
              <p>
                We maintain an absolute commitment regarding artificial intelligence model training:
              </p>
              <ul>
                <li>
                  <strong>No Public Model Training:</strong> Any operational data, workflow descriptions, system prompts, or proprietary materials shared during consultations or client engagements are never submitted to public LLM training sets.
                </li>
                <li>
                  <strong>Enterprise Zero-Retention APIs:</strong> All production AI integrations we engineer use dedicated enterprise endpoints with contractual zero-data-retention and zero-training guarantees.
                </li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>4. Client Confidentiality &amp; NDAs</h2>
              <p>
                We routinely execute standard Non-Disclosure Agreements (NDAs) prior to detailed discovery audits, protecting all proprietary business logic, customer records, and internal technical documentation shared with our engineering team.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Data Storage, Security &amp; Retention</h2>
              <p>
                We employ industry-standard technical and organizational security controls, including TLS 1.3 encryption in transit, encrypted storage at rest, and strict least-privilege administrative access controls. We retain project inquiry data only as long as necessary to fulfill business purposes or comply with legal requirements.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Your Rights (GDPR &amp; CCPA Compliance)</h2>
              <p>
                Depending on your geographic location, you possess rights regarding your personal information, including the right to request access, correction, or permanent deletion of your data. You may exercise these rights at any time by contacting our data protection officer.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>7. Contact Information</h2>
              <p>
                If you have questions regarding this Privacy Policy or our security posture, please reach out to us at:
              </p>
              <p>
                <strong>Hutomate Data Protection</strong><br />
                Email: <a href="mailto:hello@hutomate.com" style={{ color: 'var(--color-deep-teal, #167C80)', fontWeight: 600 }}>hello@hutomate.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
