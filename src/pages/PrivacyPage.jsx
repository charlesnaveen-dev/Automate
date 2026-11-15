import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import './LegalPage.css';

export default function PrivacyPage() {
  usePageMetadata({
    title: 'Privacy Policy — Hutomate Data Protection',
    description: 'Our commitment to data privacy, transparent data handling practices, and client confidentiality.',
    path: '/privacy',
  });

  return (
    <div className="legal-page">
      <PageHeader
        eyebrow="PRIVACY &amp; COMPLIANCE"
        badgeText="Data Protection"
        badgeType="teal"
        title="Privacy Policy"
        description="At Hutomate, we treat the confidentiality of our clients' operational data and project inquiries with the highest level of care. This policy outlines our data collection, processing, and protection standards."
      />

      <section className="section detail-section">
        <div className="container">
          <div className="legal-content-container card">
            <div className="legal-meta-bar">
              <span>Effective Date: November 2024</span>
              <span>Last Updated: November 2024</span>
            </div>

            <div className="legal-section-block">
              <h2>1. Information We Collect</h2>
              <p>
                When you visit our website, complete an enquiry form, or communicate with us, we collect information you choose to provide directly. This typically includes your name or business name, telephone number, email address, and any operational workflow details or questions you submit in project enquiries.
              </p>
              <p>
                Like most modern websites, we may also receive standard aggregate technical telemetry regarding site usage—such as browser types, device categories, approximate geographic region, and referring pages—solely to maintain website stability, monitor performance, and prevent spam or malicious traffic.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. How We Use Collected Information</h2>
              <p>We use the information submitted through our website solely to:</p>
              <ul>
                <li>Evaluate your operational requirements and assess technical feasibility.</li>
                <li>Respond directly to your project enquiries and schedule discovery consultations.</li>
                <li>Prepare clear implementation proposals and technical scoping documentation.</li>
                <li>Maintain professional correspondence throughout ongoing client engagements.</li>
                <li>Maintain and improve our website performance, security, and usability.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your contact information or project details to third-party data brokers, marketers, or advertisers.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. AI Model Training Protections</h2>
              <p>
                We recognize that business operations, workflow logic, and proprietary communications must remain protected:
              </p>
              <ul>
                <li>
                  <strong>Commercial APIs:</strong> When engineering custom AI integrations, we prioritize commercial API endpoints where provider terms explicitly state that customer inputs and outputs are not used to train public foundation models.
                </li>
                <li>
                  <strong>Provider Transparency:</strong> Specific data handling, retention windows, and training opt-outs depend on the third-party model providers and software platforms selected for your implementation. We document and review these technical boundaries with you during solution design.
                </li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>4. Client Confidentiality &amp; NDAs</h2>
              <p>
                We treat all business process descriptions, internal documentation, customer interaction flows, and system credentials shared with our team as strictly confidential.
              </p>
              <p>
                We routinely execute mutual Non-Disclosure Agreements (NDAs) prior to in-depth technical audits or scoping sessions upon request, ensuring your proprietary operational workflows remain legally protected.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Data Storage, Security &amp; Retention</h2>
              <p>
                We maintain appropriate technical, administrative, and physical safeguards designed to protect personal and business information against unauthorized access, loss, misuse, or alteration. All web communications with our website are encrypted using standard HTTPS protocols.
              </p>
              <p>
                While we apply diligent security practices, no digital transmission over the Internet or electronic storage method can be guaranteed 100% secure. We retain project enquiry information only for as long as necessary to evaluate project feasibility, maintain ongoing client relationships, or comply with applicable legal obligations.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Your Rights</h2>
              <p>
                Depending on your country or state of residence (such as the European Economic Area, the United Kingdom, California, or other applicable jurisdictions), you may have statutory rights regarding the personal information we hold about you. These rights may include:
              </p>
              <ul>
                <li>The right to request access to the personal data we hold about you.</li>
                <li>The right to request correction of inaccurate or incomplete information.</li>
                <li>The right to request deletion of your personal information, subject to legal recordkeeping obligations.</li>
                <li>The right to withdraw consent or object to specific processing activities where applicable.</li>
              </ul>
              <p>
                To exercise any applicable rights, please contact us using the details below. We evaluate and fulfill verified requests in accordance with applicable laws.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>7. Contact Information</h2>
              <p>
                If you have questions, feedback, or requests regarding this Privacy Policy or how your information is handled, please contact our privacy contact team:
              </p>
              <p>
                <strong>Hutomate Privacy Team</strong><br />
                Email: <a href="mailto:hutomate@gmail.com" style={{ color: 'var(--color-deep-teal, #167C80)', fontWeight: 600 }}>hutomate@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
