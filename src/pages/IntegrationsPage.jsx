import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './IntegrationsPage.css';

export default function IntegrationsPage() {
  usePageMetadata({
    title: 'Integrations & Technology — Supported Tools & Protocols | Hutomate',
    description: 'We integrate with your existing technology stack using standard REST APIs, webhooks, databases, and AI protocols without forcing platform replacements.',
    path: '/integrations',
  });

  useScrollReveal();

  const toolCategories = [
    {
      title: 'CRM & Sales Operations',
      desc: 'Synchronise deal stages, enrich lead profiles, and automate routine sales sequences.',
      tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'Close', 'Apollo', 'Clearbit'],
    },
    {
      title: 'Customer Support & Comms',
      desc: 'Route tickets, triage incoming inquiries, and trigger internal team alerts.',
      tools: ['Zendesk', 'Intercom', 'Front', 'Freshdesk', 'Slack', 'Microsoft Teams'],
    },
    {
      title: 'Databases & Infrastructure',
      desc: 'Query verified business data, store vector embeddings, and synchronize state securely.',
      tools: ['PostgreSQL', 'Supabase', 'AWS RDS', 'Google Cloud', 'Snowflake', 'Pinecone', 'Qdrant'],
    },
    {
      title: 'Knowledge & Productivity',
      desc: 'Index documents, trigger project tasks, and generate formatted briefs.',
      tools: ['Notion', 'Google Workspace', 'Microsoft 365', 'Confluence', 'Linear', 'Asana'],
    },
    {
      title: 'Accounting & Finance',
      desc: 'Ingest vendor invoices, reconcile transaction lines, and coordinate billing sign-offs.',
      tools: ['Xero', 'QuickBooks Online', 'Stripe', 'NetSuite', 'Bill.com'],
    },
    {
      title: 'Foundation AI & Inference',
      desc: 'Select optimal reasoning models via enterprise, zero-retention private endpoints.',
      tools: ['OpenAI GPT-4o', 'Anthropic Claude 3.5', 'Google Gemini 1.5', 'Groq LPU', 'Mistral Large'],
    },
    {
      title: 'Voice & Telephony',
      desc: 'Low-latency telephony streaming, real-time transcription, and neural speech synthesis.',
      tools: ['Twilio Voice', 'Deepgram Nova-2', 'Cartesia Sonic', 'ElevenLabs', 'Retell AI'],
    },
    {
      title: 'Cloud & Event Orchestration',
      desc: 'Event-driven webhooks, distributed queues, and secure serverless workers.',
      tools: ['AWS Lambda', 'Google Cloud Run', 'Temporal', 'Docker', 'GitHub Actions', 'Webhooks'],
    },
  ];

  const assessmentPoints = [
    {
      num: '01',
      title: 'API Authentication & Permissions',
      desc: 'We inspect OAuth 2.0 grant types, scoped API keys, and token refresh mechanisms to ensure strictly sandboxed access to only necessary endpoints.',
    },
    {
      num: '02',
      title: 'Real-Time Webhooks vs. Polling',
      desc: 'We prioritize event-driven webhooks for instantaneous automation. If a legacy system lacks webhooks, we engineer lightweight, rate-conscious polling workers.',
    },
    {
      num: '03',
      title: 'Rate Limits & Concurrency Budgets',
      desc: 'We map each tool’s requests-per-minute ceiling, implementing distributed token buckets and queue buffers so your operations never trigger 429 throttling errors.',
    },
    {
      num: '04',
      title: 'Legacy Database & Middleware Connectors',
      desc: 'For on-premise systems or older ERPs without modern REST APIs, we build secure read-only SQL replicas or direct SFTP ingestion pipelines.',
    },
  ];

  return (
    <div className="integrations-page">
      <PageHeader
        eyebrow="INTEGRATIONS &amp; TECH STACK"
        badgeText="Interoperability"
        badgeType="teal"
        title="Connecting the modern business and AI software ecosystem."
        description="We integrate with your existing technology stack using standard REST APIs, event-driven webhooks, database connections, and modern AI protocols. No need to discard the tools your team already relies on."
      >
        <Button variant="primary" size="md" arrow href="/start-project">
          Assess Your Software Stack
        </Button>
        <Button variant="secondary" size="md" href="/blueprints">
          View Architecture Blueprints
        </Button>
      </PageHeader>

      <section className="section detail-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-label">Ecosystem Compatibility</span>
            <h2 className="section-heading">Supported tools and business platforms</h2>
            <p className="section-body">
              We connect across standard enterprise systems, vector stores, and foundation AI models.
            </p>
          </div>

          <div className="integrations-categories-grid">
            {toolCategories.map((cat, i) => (
              <div key={i} className={`integration-cat-card card reveal-on-scroll reveal-delay-${(i % 2) + 1}`}>
                <div className="cat-header">
                  <h3 className="cat-title">{cat.title}</h3>
                  <p className="cat-desc">{cat.desc}</p>
                </div>
                <div className="cat-tools-tags">
                  {cat.tools.map((t, idx) => (
                    <span key={idx} className="tool-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="assessment-box reveal-on-scroll">
            <div className="assessment-box-header">
              <span className="section-label">Technical Due Diligence</span>
              <h3 className="assessment-box-title">How we assess integration feasibility</h3>
              <p className="section-body">
                Before committing to an integration architecture, we run every proposed tool through a structured technical evaluation:
              </p>
            </div>

            <div className="assessment-grid">
              {assessmentPoints.map((ap, i) => (
                <div key={i} className="assessment-item">
                  <span className="assessment-num">{ap.num}</span>
                  <div className="assessment-content">
                    <h4 className="assessment-title">{ap.title}</h4>
                    <p className="assessment-desc">{ap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a custom or proprietary system you need to connect?"
        description="We routinely engineer custom connectors and database pipelines for internal tools and bespoke databases."
        buttonText="Discuss Your Tech Stack"
        buttonHref="/start-project"
        secondaryButtonText="Explore Capabilities"
        secondaryButtonHref="/capabilities"
      />
    </div>
  );
}
