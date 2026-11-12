import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import './WorkflowAutomationPage.css';

const WORKFLOW_DELIVERABLES = [
  {
    id: 'crm-erp-sync',
    num: '01',
    title: 'Bidirectional CRM & ERP Synchronization',
    domain: 'Data Consistency',
    lead: 'Continuous real-time data sync across client records, invoices, and operational databases.',
    desc: 'Eliminates dual entry and mismatched customer records between platforms like Salesforce, HubSpot, QuickBooks, and internal Postgres databases with automatic conflict resolution and deduplication.',
    specs: [
      { label: 'Latency', value: 'Sub-second event propagation' },
      { label: 'Conflict Policy', value: 'Deterministic timestamp and precedence rules' },
      { label: 'Deduplication', value: 'Cryptographic payload hashing and entity matching' },
    ],
    systems: ['HubSpot', 'Salesforce', 'QuickBooks', 'PostgreSQL', 'Stripe'],
  },
  {
    id: 'client-onboarding',
    num: '02',
    title: 'Automated Client Onboarding Pipelines',
    domain: 'Lifecycle Execution',
    lead: 'Contract execution triggers instant, end-to-end client workspace provisioning.',
    desc: 'When a contract is signed, the pipeline automatically generates invoices, creates team Slack connect channels, provisions Google Drive folders, and dispatches customized welcome sequences.',
    specs: [
      { label: 'Trigger Event', value: 'DocuSign or PandaDoc signature webhook' },
      { label: 'Task Execution', value: 'Multi-system parallel provisioning' },
      { label: 'Notification', value: 'Internal Slack broadcast and client confirmation' },
    ],
    systems: ['DocuSign', 'Slack', 'Google Workspace', 'Linear', 'Asana'],
  },
  {
    id: 'financial-reconciliation',
    num: '03',
    title: 'Financial Reconciliation & Ledger Sync',
    domain: 'Finance & Accounting',
    lead: 'Matches payment gateway receipts against open invoices with exception detection.',
    desc: 'Automatically pairs incoming Stripe, bank wire, or credit card transactions with open accounting invoices, recording ledger entries and alerting finance leads only when discrepancies arise.',
    specs: [
      { label: 'Matching Accuracy', value: 'Multi-field reference and amount validation' },
      { label: 'Exception Handling', value: 'Auto-quarantine with dedicated Slack alert' },
      { label: 'Audit Trail', value: 'Complete bank transaction reference logging' },
    ],
    systems: ['Stripe', 'QuickBooks', 'Xero', 'NetSuite', 'Bank Feeds'],
  },
  {
    id: 'approval-workflows',
    num: '04',
    title: 'Multi-Stage Approval & Governance Flows',
    domain: 'Operations & Compliance',
    lead: 'Interactive Slack and email approvals that route high-value items with complete audit trails.',
    desc: 'Replaces scattered email threads with interactive approval buttons in Slack or Teams. Escalates unacknowledged requests and logs all approvals for compliance.',
    specs: [
      { label: 'Interface', value: 'Interactive Slack buttons and secure token links' },
      { label: 'Timeout Protocol', value: 'Automated manager escalation after SLA breach' },
      { label: 'Audit Records', value: 'Timestamped signature logging' },
    ],
    systems: ['Slack', 'Microsoft Teams', 'Gmail', 'Enterprise ERP'],
  },
];

const COMPARISONS = [
  {
    manual: 'Manual copy-pasting customer records between CRM and billing',
    automated: 'Instant bidirectional sync with automated schema validation',
  },
  {
    manual: '48-hour email delays before onboarding a newly signed client',
    automated: 'Sub-second provisioning of accounts, folders, and invoices',
  },
  {
    manual: 'Fragile DIY automations that silently drop events when APIs change',
    automated: 'Engineered retry shields with exponential backoff and dead-letter queues',
  },
  {
    manual: 'Scattered spreadsheets and missed payments needing manual chase',
    automated: 'Automated ledger reconciliation with real-time exception notifications',
  },
];

const BENEFITS = [
  {
    tag: 'EFFICIENCY',
    title: 'Automated Data Ingestion',
    desc: 'Eliminates repetitive manual copy-pasting between business tools with automated schema validation and strict deduplication.',
  },
  {
    tag: 'VELOCITY',
    title: 'Real-Time Event Propagation',
    desc: 'Business events trigger immediate coordinated actions across all connected platforms without polling delays.',
  },
  {
    tag: 'RESILIENCE',
    title: 'Built-in Fault Tolerance',
    desc: 'Exponential backoff retries, dead-letter queues, and health checks prevent lost client transactions during third-party downtime.',
  },
  {
    tag: 'OBSERVABILITY',
    title: 'End-to-End Visibility',
    desc: 'Centralized telemetry tracks pipeline status, throughput, and error rates so operations teams maintain complete oversight.',
  },
];

export default function WorkflowAutomationPage() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const pageRef = useRef(null);

  usePageMetadata({
    title: 'Workflow Automation — Connected Business Systems | Hutomate',
    description: 'Connect fragmented applications, eliminate manual data handoffs, and deploy deterministic event-driven automation pipelines.',
    path: '/capabilities/workflow-automation',
  });

  useScrollReveal();

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.wf-hero-bg, .wf-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.wf-hero-bg',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        '.wf-hero-label',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.8'
      )
      .fromTo(
        '.wf-hero-headline',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.45'
      )
      .fromTo(
        '.wf-hero-desc',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.wf-hero-ctas',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      );
  }, []);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="wf-page-redesign" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO — FULL-COVER PHOTOGRAPHY
          ========================================================================= */}
      <section className="wf-hero-section" aria-label="Workflow Automation Hero">
        <div className="wf-hero-bg-wrapper" aria-hidden="true">
          <img
            src="/images/hero-workflow-automation.jpg"
            alt=""
            className="wf-hero-bg"
            loading="eager"
            decoding="sync"
          />
          <div className="wf-hero-overlay" />
          <div className="wf-hero-vignette" />
        </div>

        <div className="container wf-hero-container">
          <div className="wf-hero-content">
            <div className="wf-hero-label">
              <span className="wf-hero-beacon" aria-hidden="true" />
              <span>CAPABILITY 02 // CONNECTED OPERATIONS</span>
            </div>

            <h1 className="wf-hero-headline">
              Connect business tools and eliminate manual operational bottlenecks.
            </h1>

            <p className="wf-hero-desc">
              We architect robust, event-driven automation pipelines that eliminate manual data re-entry, coordinate multi-system processes, and keep your software stack synchronized in real time.
            </p>

            <div className="wf-hero-ctas">
              <Button variant="primary" size="lg" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/process">
                See Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: THE CHALLENGE — ASYMMETRIC FRICTION MATRIX
          ========================================================================= */}
      <section className="wf-challenge-section" aria-label="The Challenge">
        <div className="container">
          <div className="wf-challenge-grid">
            <div className="wf-challenge-left reveal-on-scroll">
              <span className="wf-section-kicker">THE INTEGRATION GAP</span>
              <h2 className="wf-challenge-heading">
                Modern businesses run on dozens of SaaS tools. The handoffs between them are broken.
              </h2>
              <p className="wf-challenge-lead">
                Sales closes a deal, but fulfillment, billing, and project teams operate on separate systems with delayed or mismatched records. Manual handoffs create silent errors and slow down operational velocity.
              </p>
              <div className="wf-challenge-stat-badge">
                <span className="wf-stat-value">Zero-Drop</span>
                <span className="wf-stat-label">Architecture: Guaranteed payload delivery with automated retries</span>
              </div>
            </div>

            <div className="wf-challenge-right reveal-on-scroll">
              <div className="wf-comparison-card">
                <div className="wf-comparison-header">
                  <span className="wf-col-label manual">Manual Friction</span>
                  <span className="wf-col-label automated">Engineered Pipeline</span>
                </div>
                <div className="wf-comparison-rows">
                  {COMPARISONS.map((comp, idx) => (
                    <div key={idx} className="wf-comp-row">
                      <div className="wf-comp-cell manual">
                        <span className="wf-comp-dot red" aria-hidden="true" />
                        <p>{comp.manual}</p>
                      </div>
                      <div className="wf-comp-cell automated">
                        <span className="wf-comp-dot green" aria-hidden="true" />
                        <p>{comp.automated}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT WE DELIVER — INTERACTIVE PIPELINE ACCORDION
          ========================================================================= */}
      <section className="wf-deliver-section" aria-label="What We Deliver">
        <div className="container">
          <div className="wf-deliver-header reveal-on-scroll">
            <span className="wf-section-kicker">WHAT WE DELIVER</span>
            <h2 className="wf-section-heading">
              Resilient pipelines engineered for zero data loss.
            </h2>
            <p className="wf-section-subhead">
              Fault-tolerant workflows that connect fragmented applications with schema typing, retries, and real-time observability.
            </p>
          </div>

          <div className="wf-accordion-wrap reveal-on-scroll">
            {WORKFLOW_DELIVERABLES.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`wf-accordion-item ${isExpanded ? 'is-active' : ''}`}
                >
                  <button
                    type="button"
                    className="wf-accordion-trigger"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isExpanded}
                    aria-controls={`wf-deliverable-${item.id}`}
                  >
                    <div className="wf-accordion-trigger-left">
                      <span className="wf-item-num">{item.num}</span>
                      <div className="wf-item-title-wrap">
                        <span className="wf-item-domain">{item.domain}</span>
                        <h3 className="wf-item-title">{item.title}</h3>
                      </div>
                    </div>
                    <div className="wf-accordion-icon-wrap" aria-hidden="true">
                      <ChevronDown
                        size={20}
                        className={`wf-chevron ${isExpanded ? 'is-rotated' : ''}`}
                      />
                    </div>
                  </button>

                  <div
                    id={`wf-deliverable-${item.id}`}
                    className={`wf-accordion-drawer ${isExpanded ? 'is-open' : ''}`}
                  >
                    <div className="wf-drawer-inner">
                      <div className="wf-drawer-grid">
                        <div className="wf-drawer-main">
                          <p className="wf-drawer-lead">{item.lead}</p>
                          <p className="wf-drawer-desc">{item.desc}</p>

                          <div className="wf-drawer-systems">
                            <span className="wf-systems-label">Integrated Ecosystem:</span>
                            <div className="wf-systems-tags">
                              {item.systems.map((sys, sIdx) => (
                                <span key={sIdx} className="wf-sys-pill">
                                  {sys}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="wf-drawer-specs">
                          <span className="wf-specs-title">Pipeline Architecture</span>
                          {item.specs.map((sp, spIdx) => (
                            <div key={spIdx} className="wf-spec-row">
                              <span className="wf-spec-key">{sp.label}</span>
                              <span className="wf-spec-val">{sp.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: WHY IT MATTERS — 4-QUADRANT PRECISION GRID
          ========================================================================= */}
      <section className="wf-matters-section" aria-label="Why It Matters">
        <div className="container">
          <div className="wf-matters-header reveal-on-scroll">
            <span className="wf-section-kicker">WHY IT MATTERS</span>
            <h2 className="wf-section-heading">
              Engineered reliability for mission-critical operations.
            </h2>
            <p className="wf-section-subhead">
              We design every pipeline to be fault-tolerant, idempotent, and observable so your business never drops a critical transaction.
            </p>
          </div>

          <div className="wf-quadrant-grid reveal-on-scroll">
            {BENEFITS.map((ben, idx) => (
              <div key={idx} className="wf-quadrant-cell">
                <div className="wf-quadrant-top">
                  <span className="wf-quadrant-tag">{ben.tag}</span>
                  <span className="wf-quadrant-index">0{idx + 1}</span>
                </div>
                <h3 className="wf-quadrant-title">{ben.title}</h3>
                <p className="wf-quadrant-desc">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: FINAL CTA — PREMIUM DARK NAVY COMPOSITION
          ========================================================================= */}
      <section className="wf-final-cta-section" aria-label="Discuss Your Workflow Automation Project">
        <div className="wf-final-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="wf-final-cta-inner reveal-on-scroll">
            <span className="wf-final-kicker">ARCHITECT YOUR PIPELINES</span>
            <h2 className="wf-final-heading">
              Ready to connect your business software and eliminate operational friction?
            </h2>
            <p className="wf-final-desc">
              Talk with our engineering team about your current tool stack. We identify integration bottlenecks and design a reliable automation roadmap.
            </p>
            <div className="wf-final-actions">
              <Button variant="primary" size="lg" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/process">
                See Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
