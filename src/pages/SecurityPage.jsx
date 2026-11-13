import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileText, Server, Key } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './SecurityPage.css';

export default function SecurityPage() {
  usePageMetadata({
    title: 'Security & Responsible AI — Data Protection & Governance | Hutomate',
    description: 'We build enterprise automation with strict data protection, zero model training on client IP, role-based access control, and human oversight gates.',
    path: '/security',
  });

  useScrollReveal();

  const pillars = [
    {
      title: 'Zero Model Training on Client Data',
      desc: 'All commercial LLM API agreements are configured with zero-retention and zero-training guarantees. Your proprietary business data is never ingested into public model training corpuses.',
      icon: EyeOff,
    },
    {
      title: 'Sandboxed Least-Privilege Access',
      desc: 'AI agents and automated workers operate under strict role-based access control (RBAC). They only receive token permissions for the exact database tables and endpoints required for their task.',
      icon: Lock,
    },
    {
      title: 'Deterministic Confidence Gates',
      desc: 'Automated tasks execute only when model confidence scores exceed pre-set thresholds (e.g. 95%). Ambiguous queries or edge-case anomalies are routed immediately to human review.',
      icon: ShieldCheck,
    },
    {
      title: 'Immutable Audit Logging',
      desc: 'Every system prompt, retrieved vector context chunk, reasoning step, and destination API payload is recorded with cryptographic timestamps for internal compliance audits.',
      icon: FileText,
    },
    {
      title: 'End-to-End Encryption & Secret Vaults',
      desc: 'All data in transit is encrypted using modern TLS 1.3 standards. API keys and database credentials are stored in encrypted secret vaults, never hardcoded.',
      icon: Key,
    },
    {
      title: 'Isolated Tenant Environments',
      desc: 'Client vector databases, staging pipelines, and production automation runtimes are strictly isolated to prevent cross-contamination or unauthorized access.',
      icon: Server,
    },
  ];

  const zones = [
    {
      zoneClass: 'zone-green',
      name: 'Green Zone',
      title: 'Autonomous Execution',
      desc: 'Low-risk, reversible operations where automation executes directly without waiting for manual human intervention.',
      examples: 'Drafting internal summaries, parsing PDF fields into staging queues, tagging CRM inquiries, and synchronizing calendar availability.',
    },
    {
      zoneClass: 'zone-yellow',
      name: 'Yellow Zone',
      title: 'Human-Assisted Sign-Off',
      desc: 'Moderate-risk actions where the AI prepares the full output, but an authorized human operator must click approve before commit.',
      examples: 'Dispatching customer support emails, issuing draft invoice records to accounting ledgers, and triggering outbound phone calls.',
    },
    {
      zoneClass: 'zone-red',
      name: 'Red Zone',
      title: 'Strictly Restricted / Barred',
      desc: 'High-risk operations that AI systems are technically prevented from executing under any circumstances.',
      examples: 'Initiating bank wire payouts, deleting database tables, modifying user authentication permissions, or altering legal contracts.',
    },
  ];

  return (
    <div className="security-page">
      <PageHeader
        eyebrow="SECURITY &amp; GOVERNANCE"
        badgeText="Enterprise Security"
        badgeType="teal"
        title="Enterprise security and responsible AI practices from day one."
        description="We design automation systems with strict data protection boundaries, model safety guardrails, and human oversight. Your data remains strictly yours, and automated actions are always bounded."
      >
        <Button variant="primary" size="md" arrow href="/start-project">
          Request Security Brief
        </Button>
        <Button variant="secondary" size="md" href="/process">
          Explore Delivery Framework
        </Button>
      </PageHeader>

      <section className="section detail-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-label">Security Architecture</span>
            <h2 className="section-heading">Core data protection and governance pillars</h2>
            <p className="section-body">
              How we protect your confidential business data and maintain operational integrity.
            </p>
          </div>

          <div className="security-pillars-grid">
            {pillars.map((p, i) => {
              const IconComp = p.icon;
              return (
                <div key={i} className={`security-pillar-card card reveal-on-scroll reveal-delay-${(i % 3) + 1}`}>
                  <div className="pillar-icon-wrap">
                    <IconComp size={22} />
                  </div>
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="hitl-container reveal-on-scroll">
            <div className="hitl-header">
              <span className="section-label">Human Oversight</span>
              <h3 className="hitl-title">The Three-Zone Oversight Framework</h3>
              <p className="section-body">
                We categorize all business actions into strict operational boundaries to ensure AI systems never exceed their authorized mandate:
              </p>
            </div>

            <div className="zones-grid">
              {zones.map((z, i) => (
                <div key={i} className={`zone-card ${z.zoneClass}`}>
                  <div className="zone-header">
                    <span className="zone-dot" />
                    <span className="zone-name">{z.name}</span>
                  </div>
                  <h4 className="zone-title">{z.title}</h4>
                  <p className="zone-desc">{z.desc}</p>
                  <div className="zone-examples">
                    <strong>Allowed Scope:</strong> {z.examples}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have specific compliance or vendor security questionnaires?"
        description="Our technical team regularly completes vendor due diligence and provides comprehensive architecture security documentation."
        buttonText="Contact Security Team"
        buttonHref="/contact"
        secondaryButtonText="Read Terms of Service"
        secondaryButtonHref="/terms"
      />
    </div>
  );
}
