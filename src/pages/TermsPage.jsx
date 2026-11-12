import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import './LegalPage.css';

export default function TermsPage() {
  usePageMetadata({
    title: 'Terms of Service — Hutomate Implementation',
    description: 'Terms of service governing the use of the Hutomate website and overview of commercial engagement principles.',
    path: '/terms',
  });

  return (
    <div className="legal-page">
      <PageHeader
        eyebrow="TERMS OF SERVICE"
        badgeText="Commercial Framework"
        badgeType="purple"
        title="Terms of Service"
        description="These Terms of Service govern your use of the Hutomate website and provide an overview of our general commercial and intellectual property principles."
      />

      <section className="section detail-section">
        <div className="container">
          <div className="legal-content-container card">
            <div className="legal-meta-bar">
              <span>Effective Date: October 2024</span>
              <span>Last Updated: October 2024</span>
            </div>

            <div className="legal-section-block">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Hutomate website (hutomate.com), you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. Scope of Services</h2>
              <p>
                Hutomate provides AI implementation consulting, custom workflow automation engineering, AI agent development, and systems integration services. Information presented on this website—including architectural blueprints, potential use cases, and workflow diagrams—is for conceptual and illustrative purposes only and does not constitute a formal binding technical commitment until memorialized in an executed Master Services Agreement (MSA) or Statement of Work (SOW).
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. Intellectual Property Rights</h2>
              <p>
                All website design, copy, architectural illustrations, trademarks, and branding on this website remain the proprietary intellectual property of Hutomate.
              </p>
              <p>
                For client engagements: bespoke code, custom prompt instructions, and integrations developed specifically for a client under a paid Statement of Work belong exclusively to the client upon full payment, subject to standard carve-outs for Hutomate’s pre-existing software libraries and reusable core modules.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. Client Information &amp; Scoping Disclosures</h2>
              <p>
                Any business process information or operational descriptions submitted via our website forms are used solely to assess project feasibility. Both parties agree to maintain mutual confidentiality regarding proprietary technical and commercial details.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Limitation of Liability</h2>
              <p>
                In no event shall Hutomate, its directors, or its engineering team be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use this website. All website content is provided on an "as-is" and "as-available" basis without warranties of any kind.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Third-Party Integrations &amp; APIs</h2>
              <p>
                Our services involve integrating with third-party software platforms (e.g. OpenAI, Anthropic, HubSpot, Zendesk, Xero, AWS). Clients remain responsible for maintaining their own valid commercial accounts, API keys, and compliance with the relevant third-party terms of service.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>7. Governing Law</h2>
              <p>
                These Terms of Service and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with standard international commercial arbitration principles and applicable state laws.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>8. Contact &amp; Inquiries</h2>
              <p>
                For questions regarding these Terms of Service or formal commercial agreements, please contact:
              </p>
              <p>
                <strong>Hutomate Legal &amp; Commercial Operations</strong><br />
                Email: <a href="mailto:hello@hutomate.com" style={{ color: 'var(--color-deep-teal, #167C80)', fontWeight: 600 }}>hello@hutomate.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
