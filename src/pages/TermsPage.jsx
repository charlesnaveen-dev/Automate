import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import './LegalPage.css';

export default function TermsPage() {
  usePageMetadata({
    title: 'Terms of Service — Hutomate Commercial Framework',
    description: 'Terms of service governing the use of the Hutomate website and overview of our professional engagement and commercial terms.',
    path: '/terms',
  });

  return (
    <div className="legal-page">
      <PageHeader
        eyebrow="TERMS OF SERVICE"
        badgeText="Commercial Framework"
        badgeType="teal"
        title="Terms of Service"
        description="These Terms of Service govern your use of the Hutomate website and provide an overview of our general commercial and intellectual property principles."
      />

      <section className="section detail-section">
        <div className="container">
          <div className="legal-content-container card">
            <div className="legal-meta-bar">
              <span>Effective Date: November 2024</span>
              <span>Last Updated: November 2024</span>
            </div>

            <div className="legal-section-block">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing, browsing, or using the Hutomate website, or by submitting project enquiries through our forms, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you should discontinue use of this website.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. Scope of Services</h2>
              <p>
                Hutomate provides business automation engineering, conversational AI systems implementation, workflow integration, and technical advisory services. Content presented on this website—including architectural examples, sample workflows, case descriptions, and integration overviews—is provided for illustrative and educational purposes and does not constitute a binding technical commitment.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. Project Proposals and Agreements</h2>
              <p>
                Formal engineering services, deliverables, implementation milestones, and specific technical specifications are governed exclusively by individually executed Master Services Agreements (MSAs), Statements of Work (SOWs), or project proposals signed by authorized representatives of both parties. In the event of a conflict between these general website terms and an executed client agreement, the executed agreement shall take precedence.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. Fees and Payments</h2>
              <p>
                Pricing, deposit schedules, milestone payments, and recurring support terms are defined in individual Statements of Work. Unless otherwise specified in an executed agreement, invoices are payable upon receipt. Any third-party software licensing fees, API usage costs, or cloud infrastructure charges incurred directly by client accounts remain the sole responsibility of the client.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Client Responsibilities</h2>
              <p>
                Successful automation implementations require collaborative engagement. Clients agree to provide timely access to necessary business systems, sandbox or test credentials, API keys, documentation, and stakeholder feedback required for our engineering team to complete agreed project deliverables.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Intellectual Property</h2>
              <p>
                All website design, trademarks, service marks, graphics, editorial text, and proprietary branding on this website are the intellectual property of Hutomate and protected by applicable copyright and trademark laws.
              </p>
              <p>
                For custom client engagements: ownership of bespoke software configurations, custom scripts, and tailored workflow logic developed specifically for a client under an executed Statement of Work transfers to the client upon full payment, excluding Hutomate&apos;s pre-existing software libraries, reusable modules, and proprietary tools.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>7. Confidentiality</h2>
              <p>
                Both parties agree to treat non-public business information, operational data, client customer records, and technical architectures shared during discovery and engagement as confidential. Neither party will disclose confidential information to any third party without prior written authorization, except as required by law.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>8. Third-Party Services and Integrations</h2>
              <p>
                Our solutions frequently interface with third-party platforms, such as customer relationship management (CRM) software, cloud hosting providers, telephony carriers, and third-party AI model providers. Clients are responsible for maintaining their own valid commercial accounts and adhering to third-party terms of service. Hutomate is not responsible for interruptions, rate-limiting, or policy changes implemented by third-party service providers.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>9. Warranties and Limitations</h2>
              <p>
                Hutomate provides professional engineering services with reasonable care, skill, and industry diligence. However, this website and all conceptual materials are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis without warranties of any kind, whether express or implied. We do not warrant that website functions will be completely uninterrupted or error-free.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, neither Hutomate nor its officers, employees, or contractors shall be liable for any indirect, incidental, consequential, special, or punitive damages arising from the use of this website or implementation services. In any case, our total aggregate liability under an engagement shall be limited to the total fees actually paid to Hutomate by the client under the applicable Statement of Work giving rise to the claim.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>11. Termination</h2>
              <p>
                Procedures for project termination, suspension, or completion of services are governed by the specific terms outlined in each client&apos;s executed Statement of Work or agreement. We reserve the right to suspend or discontinue website access for users who violate these Terms of Service.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>12. Governing Law and Disputes</h2>
              <p>
                These Terms of Service and any matters arising out of or related to your use of the website shall be governed by applicable commercial laws. In the event of any dispute, the parties agree to first attempt resolution through good-faith commercial negotiation before pursuing formal legal proceedings.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>13. Contact Information</h2>
              <p>
                For questions regarding these Terms of Service or to discuss commercial agreements, please contact our team:
              </p>
              <p>
                <strong>Hutomate Commercial Operations</strong><br />
                Email: <a href="mailto:hutomate@gmail.com" style={{ color: 'var(--color-deep-teal, #167C80)', fontWeight: 600 }}>hutomate@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
