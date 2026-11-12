import React from 'react';
import {
  Workflow,
  Zap,
  CheckCircle2,
  XCircle,
  GitBranch,
  RefreshCw,
  ShieldCheck,
  Server,
  ArrowRight,
  Database
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import WorkflowProcessDiagram from '../components/diagrams/WorkflowProcessDiagram';
import { CAPABILITIES_DATA } from '../data/capabilitiesData';
import './WorkflowAutomationPage.css';

export default function WorkflowAutomationPage() {
  const capData = CAPABILITIES_DATA.find((c) => c.id === 'workflow-automation') || CAPABILITIES_DATA[1];

  usePageMetadata({
    title: 'Workflow Automation — Connected Business Systems | Hutomate',
    description: 'Connect fragmented applications, eliminate manual data handoffs, and deploy deterministic event-driven automation pipelines.',
    path: '/capabilities/workflow-automation',
  });

  useScrollReveal();

  const toolCategories = [
    { name: 'CRM & Client Records', badge: 'HubSpot · Salesforce · Pipedrive', desc: 'Real-time contact creation, deal pipeline updates, and interaction logging.' },
    { name: 'Messaging & Comms', badge: 'Slack · Gmail · Microsoft 365', desc: 'Automated team alerting, client confirmation emails, and internal escalations.' },
    { name: 'Financial & Billing', badge: 'Stripe · QuickBooks · Xero', desc: 'Instant invoice creation, payment status reconciliation, and subscription sync.' },
    { name: 'Database & Operations', badge: 'PostgreSQL · Airtable · Sheets', desc: 'Normalized operational backlogs, audit logging, and automated report staging.' },
  ];

  const tenets = [
    {
      num: 'TENET 01',
      title: 'Idempotent Ingestion',
      desc: 'Workflows never process the same webhook or client transaction twice. Every execution hashes the payload key to guarantee safe duplicate deflection.',
    },
    {
      num: 'TENET 02',
      title: 'Strict Schema Validation',
      desc: 'Inbound records are typed and validated before reaching internal software. Malformed requests trigger immediate exception alerts rather than corrupting databases.',
    },
    {
      num: 'TENET 03',
      title: 'Exponential Retry Shields',
      desc: 'When third-party SaaS APIs experience downtime, our pipelines automatically queue transactions with progressive backoff until the remote system restores.',
    },
  ];

  return (
    <div className="workflow-automation-page">
      {/* 1. Dedicated Pipeline Hero */}
      <section className="wf-hero-section" aria-label="Workflow Automation Hero">
        <div className="container">
          <div className="wf-hero-content reveal-on-scroll">
            <div className="wf-eyebrow-row">
              <span className="wf-tag">EVENT-DRIVEN PIPELINES // 02</span>
              <div className="wf-badge">
                <span className="wf-badge-dot" />
                <span>Deterministic Enterprise Integration</span>
              </div>
            </div>

            <h1 className="wf-hero-title">
              Connect your software stack. Eliminate manual data handoffs.
            </h1>

            <p className="wf-hero-desc">
              We engineer resilient, deterministic automation pipelines that move information seamlessly across your CRM, communication tools, and databases with sub-second latency and zero data loss.
            </p>

            <div className="wf-hero-actions">
              <Button variant="cinematic-primary" size="lg" arrow href="/contact">
                Discuss Your Integration Pipeline
              </Button>
              <Button variant="cinematic-secondary" size="lg" href="/capabilities">
                Explore All Capabilities
              </Button>
            </div>

            {/* Performance Indicators */}
            <div className="wf-metrics-strip">
              {capData.heroMetrics?.map((m, idx) => (
                <div key={idx} className="wf-metric-item">
                  <span className="wf-metric-val">{m.value}</span>
                  <span className="wf-metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pipeline Process Diagram (Trigger -> Process -> Execution) */}
      <section className="wf-pipeline-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker">DATAFLOW ARCHITECTURE</span>
            <h2 className="section-main-heading">
              Trigger → Normalize &amp; Route → System Synchronization
            </h2>
            <p className="section-main-body">
              How events move securely from initial capture to verified multi-system propagation without human intervention.
            </p>
          </div>

          <div className="reveal-on-scroll">
            <WorkflowProcessDiagram />
          </div>
        </div>
      </section>

      {/* 3. Integration Ecosystem Grid */}
      <section className="wf-ecosystem-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker">CROSS-PLATFORM INTEGRATION</span>
            <h2 className="section-main-heading">
              Unified operational harmony across your existing tools
            </h2>
            <p className="section-main-body">
              We never ask you to migrate away from the software that runs your business. We engineer real-time bridges that synchronize them automatically.
            </p>
          </div>

          <div className="wf-tools-grid reveal-on-scroll">
            {toolCategories.map((cat, idx) => (
              <div key={idx} className="wf-tool-card">
                <div className="wf-tool-header">
                  <h3 className="wf-tool-name">{cat.name}</h3>
                </div>
                <span className="wf-tool-badge" style={{ marginBottom: '12px' }}>{cat.badge}</span>
                <p className="wf-tool-desc">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Resilient Automation Tenets */}
      <section className="wf-tenets-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker">ENGINEERING STANDARDS</span>
            <h2 className="section-main-heading">
              The three tenets of production-grade automation
            </h2>
            <p className="section-main-body">
              Brittle scripts fail when external APIs hiccup. Our architectures build in automated recovery from day one.
            </p>
          </div>

          <div className="wf-tenets-grid reveal-on-scroll">
            {tenets.map((t, idx) => (
              <div key={idx} className="wf-tenet-card">
                <span className="wf-tenet-num">{t.num}</span>
                <h3 className="wf-tenet-title">{t.title}</h3>
                <p className="wf-tenet-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Before vs. After Operational Matrix */}
      <section className="wf-comparison-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker" style={{ color: 'var(--color-accent-cyan, #83DDE2)' }}>
              OPERATIONAL IMPACT
            </span>
            <h2 className="section-main-heading" style={{ color: '#FFFFFF' }}>
              The measurable difference in day-to-day operations
            </h2>
          </div>

          <div className="wf-matrix-grid reveal-on-scroll">
            {/* Before */}
            <div className="wf-matrix-col wf-matrix-col--before">
              <span className="wf-matrix-label wf-matrix-label--before">CURRENT MANUAL FRICTION</span>
              <h3 className="wf-matrix-title">Disconnected Operations</h3>
              <ul className="wf-matrix-list">
                <li className="wf-matrix-item">
                  <XCircle size={16} className="matrix-cross" />
                  <span>Manual re-typing of client data across CRM and billing platforms</span>
                </li>
                <li className="wf-matrix-item">
                  <XCircle size={16} className="matrix-cross" />
                  <span>Leads wait hours in email inboxes before being assigned to staff</span>
                </li>
                <li className="wf-matrix-item">
                  <XCircle size={16} className="matrix-cross" />
                  <span>Frequent clerical errors in client quotes and accounting records</span>
                </li>
                <li className="wf-matrix-item">
                  <XCircle size={16} className="matrix-cross" />
                  <span>Zero audit trail when a critical communication is dropped</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="wf-matrix-col wf-matrix-col--after">
              <span className="wf-matrix-label wf-matrix-label--after">HUTOMATE AUTOMATED PIPELINE</span>
              <h3 className="wf-matrix-title">Event-Driven Synchronization</h3>
              <ul className="wf-matrix-list">
                <li className="wf-matrix-item">
                  <CheckCircle2 size={16} className="matrix-check" />
                  <span>Sub-second bidirectional data synchronization with schema validation</span>
                </li>
                <li className="wf-matrix-item">
                  <CheckCircle2 size={16} className="matrix-check" />
                  <span>Immediate instant lead intake and routing based on availability rules</span>
                </li>
                <li className="wf-matrix-item">
                  <CheckCircle2 size={16} className="matrix-check" />
                  <span>100% deterministic accuracy with automated deduplication checks</span>
                </li>
                <li className="wf-matrix-item">
                  <CheckCircle2 size={16} className="matrix-check" />
                  <span>Complete historical telemetry logs for every business transaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing Call to Action */}
      <CtaBanner
        title="Ready to automate your cross-platform workflows?"
        description="Tell us which software tools run your operations. We'll map the optimal pipeline architecture and provide a fixed-scope implementation plan."
        buttonText="Discuss Your Pipeline"
        buttonHref="/contact"
        secondaryButtonText="Explore Voice AI"
        secondaryButtonHref="/capabilities/voice-ai"
      />
    </div>
  );
}
