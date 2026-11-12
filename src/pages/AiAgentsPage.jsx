import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import './AiAgentsPage.css';

const DELIVERABLES = [
  {
    id: 'triage-agents',
    num: '01',
    title: 'Inbound Inquiry & Triage Agents',
    category: 'Operational Routing',
    lead: 'Interprets inbound client emails, portal tickets, and web submissions with calibrated intent classification.',
    desc: 'Extracts critical entities, verifies client accounts against your CRM, and automatically stages formatted draft responses or routes the case to the appropriate specialist with full context.',
    specs: [
      { label: 'Latency', value: 'Sub-second classification' },
      { label: 'Safety Gate', value: 'Confidence scoring with manual fallback' },
      { label: 'Output Schema', value: 'Structured JSON pushed directly to CRM' },
    ],
    systems: ['HubSpot', 'Salesforce', 'Zendesk', 'Gmail', 'Microsoft 365'],
  },
  {
    id: 'knowledge-copilots',
    num: '02',
    title: 'Grounded Knowledge Retrieval Copilots',
    category: 'Context & Retrieval',
    lead: 'Internal intelligence engines that index proprietary manuals, SOPs, and technical documentation.',
    desc: 'Empowers employees to query thousands of pages of company guidelines in natural language. Every answer is strictly grounded in verified source documents with line-item citations, eliminating hallucination risks.',
    specs: [
      { label: 'Retrieval Model', value: 'Hybrid dense semantic & sparse lexical' },
      { label: 'Access Control', value: 'Role-based document permission filtering' },
      { label: 'Citation Depth', value: 'Direct link to exact source paragraphs' },
    ],
    systems: ['Notion', 'Confluence', 'Google Drive', 'PostgreSQL', 'SharePoint'],
  },
  {
    id: 'document-extraction',
    num: '03',
    title: 'Intelligent Document Extraction Pipelines',
    category: 'Data Normalization',
    lead: 'Automated processing for multi-page PDFs, contracts, invoices, and structured business forms.',
    desc: 'Extracts nested line items, financial figures, and contractual terms without manual transcription. Validates extracted schemas against strict business rules before pushing directly into ERPs.',
    specs: [
      { label: 'Document Formats', value: 'Scanned PDFs, TIFFs, forms, invoices' },
      { label: 'Validation Layer', value: 'Automated checksum and schema verification' },
      { label: 'Throughput', value: 'Concurrent batch extraction at scale' },
    ],
    systems: ['QuickBooks', 'Xero', 'Stripe', 'NetSuite', 'AWS S3'],
  },
  {
    id: 'operations-agents',
    num: '04',
    title: 'Action-Executing Operations Agents',
    category: 'Tool Execution',
    lead: 'Sandboxed autonomous agents authorized to execute multi-step operations across internal software.',
    desc: 'Coordinates cross-platform operations such as provisioning client accounts, generating access tokens, scheduling calendar meetings, and updating stage flags with strict human-in-the-loop oversight.',
    specs: [
      { label: 'Execution Scope', value: 'Scoped tokens and whitelisted endpoints' },
      { label: 'Human Oversight', value: 'Approval gates for sensitive mutations' },
      { label: 'Audit Logging', value: 'Tamper-evident reasoning telemetry' },
    ],
    systems: ['Linear', 'Jira', 'Slack', 'Google Calendar', 'Internal APIs'],
  },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Manual Inquiry Triage Drag',
    desc: 'High-salary teams lose hours every day reading, classifying, and routing customer tickets instead of resolving high-value casework.',
  },
  {
    num: '02',
    title: 'Information Trapped in Silos',
    desc: 'Critical company policies, product manuals, and historical records live in disconnected tools, making accurate answers slow to retrieve.',
  },
  {
    num: '03',
    title: 'Clerical Transcription Errors',
    desc: 'Copying unstructured text between customer emails, PDFs, and internal databases introduces frequent clerical mistakes and operational delays.',
  },
  {
    num: '04',
    title: 'Unchecked Hallucination Risks',
    desc: 'Deploying off-the-shelf generative chat tools without strict grounding, bounded tool permissions, and human checkpoints creates liabilities.',
  },
];

const BENEFITS = [
  {
    num: '01',
    title: '24/7 Backlog-Free Execution',
    desc: 'Inquiries, forms, and documents are classified and processed continuously around the clock with zero operational delay.',
  },
  {
    num: '02',
    title: 'Grounded Retrieval Guardrails',
    desc: 'Every response is strictly bounded by your verified internal documentation, accompanied by direct clickable source citations.',
  },
  {
    num: '03',
    title: 'Guaranteed Human Oversight',
    desc: 'Staff retain deterministic approval gates on sensitive customer messages, financial transactions, and operational mutations.',
  },
  {
    num: '04',
    title: 'Immutable Audit Telemetry',
    desc: 'Every prompt token, grounding citation, tool execution, and state change is permanently logged for security and compliance review.',
  },
];

export default function AiAgentsPage() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const pageRef = useRef(null);

  usePageMetadata({
    title: 'Autonomous AI Agents — Enterprise Intelligence | Hutomate',
    description: 'Deploy multi-step autonomous AI agents that reason, plan, and execute across your enterprise software stack with human oversight.',
    path: '/capabilities/ai-agents',
  });

  useScrollReveal();

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.agent-hero-bg, .agent-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.agent-hero-bg',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        '.agent-hero-label',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.8'
      )
      .fromTo(
        '.agent-hero-headline',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.45'
      )
      .fromTo(
        '.agent-hero-desc',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.agent-hero-ctas',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      );
  }, []);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="ai-agents-redesign" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO — FULL-COVER PHOTOGRAPHY
          ========================================================================= */}
      <section className="agent-hero-section" aria-label="AI Agents Hero">
        <div className="agent-hero-bg-wrapper" aria-hidden="true">
          <img
            src="/images/hero-ai-agents.jpg"
            alt=""
            className="agent-hero-bg"
            loading="eager"
            decoding="sync"
          />
          <div className="agent-hero-overlay" />
          <div className="agent-hero-vignette" />
        </div>

        <div className="container agent-hero-container">
          <div className="agent-hero-content">
            <div className="agent-hero-label">
              <span className="agent-hero-beacon" aria-hidden="true" />
              <span>CAPABILITY 01 // AUTONOMOUS INTELLIGENCE</span>
            </div>

            <h1 className="agent-hero-headline">
              AI agents that understand context, make decisions, and execute business tasks.
            </h1>

            <p className="agent-hero-desc">
              We engineer autonomous software agents that interpret natural language, retrieve verified company knowledge, and execute multi-step workflows across your business tools—with strict human-in-the-loop oversight.
            </p>

            <div className="agent-hero-ctas">
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
          SECTION 02: THE CHALLENGE — EDITORIAL SPLIT LAYOUT
          ========================================================================= */}
      <section className="agent-challenge-section" aria-label="The Challenge">
        <div className="container">
          <div className="agent-challenge-grid">
            <div className="agent-challenge-left reveal-on-scroll">
              <span className="agent-section-kicker">THE CHALLENGE</span>
              <h2 className="agent-challenge-heading">
                Knowledge teams spend 40% of their workday acting as human routers.
              </h2>
              <p className="agent-challenge-lead">
                Without structured agency and guardrails, operators waste hours copying text between client inboxes, checking internal PDF manuals, and manually keying records into CRMs.
              </p>
              <div className="agent-challenge-metric-callout">
                <span className="agent-metric-number">40%</span>
                <span className="agent-metric-caption">
                  Average employee time consumed by repetitive data triage and manual context-switching between SaaS tools.
                </span>
              </div>
            </div>

            <div className="agent-challenge-right reveal-on-scroll">
              {CHALLENGES.map((ch, idx) => (
                <div key={idx} className="agent-challenge-card">
                  <div className="agent-challenge-card-header">
                    <span className="agent-challenge-num">{ch.num}</span>
                    <h3 className="agent-challenge-title">{ch.title}</h3>
                  </div>
                  <p className="agent-challenge-desc">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT WE DELIVER — INTERACTIVE ACCORDION
          ========================================================================= */}
      <section className="agent-deliver-section" aria-label="What We Deliver">
        <div className="container">
          <div className="agent-deliver-header reveal-on-scroll">
            <span className="agent-section-kicker">WHAT WE DELIVER</span>
            <h2 className="agent-section-heading">
              Autonomous intelligence built for production operations.
            </h2>
            <p className="agent-section-subhead">
              Explore the four core agent architectures we engineer, each calibrated with grounded retrieval, deterministic schemas, and explicit confidence thresholds.
            </p>
          </div>

          <div className="agent-accordion-wrap reveal-on-scroll">
            {DELIVERABLES.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`agent-accordion-item ${isExpanded ? 'is-active' : ''}`}
                >
                  <button
                    type="button"
                    className="agent-accordion-trigger"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isExpanded}
                    aria-controls={`deliverable-content-${item.id}`}
                  >
                    <div className="agent-accordion-trigger-left">
                      <span className="agent-item-num">{item.num}</span>
                      <div className="agent-item-title-wrap">
                        <span className="agent-item-category">{item.category}</span>
                        <h3 className="agent-item-title">{item.title}</h3>
                      </div>
                    </div>
                    <div className="agent-accordion-icon-wrap" aria-hidden="true">
                      <ChevronDown
                        size={20}
                        className={`agent-chevron ${isExpanded ? 'is-rotated' : ''}`}
                      />
                    </div>
                  </button>

                  <div
                    id={`deliverable-content-${item.id}`}
                    className={`agent-accordion-drawer ${isExpanded ? 'is-open' : ''}`}
                  >
                    <div className="agent-drawer-inner">
                      <div className="agent-drawer-grid">
                        <div className="agent-drawer-main">
                          <p className="agent-drawer-lead">{item.lead}</p>
                          <p className="agent-drawer-desc">{item.desc}</p>

                          <div className="agent-drawer-systems">
                            <span className="agent-systems-label">Compatible Platforms:</span>
                            <div className="agent-systems-tags">
                              {item.systems.map((sys, sIdx) => (
                                <span key={sIdx} className="agent-sys-pill">
                                  {sys}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="agent-drawer-specs">
                          <span className="agent-specs-title">Architectural Specifications</span>
                          {item.specs.map((sp, spIdx) => (
                            <div key={spIdx} className="agent-spec-row">
                              <span className="agent-spec-key">{sp.label}</span>
                              <span className="agent-spec-val">{sp.value}</span>
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
          SECTION 04: WHY IT MATTERS — MINIMAL BUSINESS BENEFITS
          ========================================================================= */}
      <section className="agent-matters-section" aria-label="Why It Matters">
        <div className="container">
          <div className="agent-matters-header reveal-on-scroll">
            <span className="agent-section-kicker">WHY IT MATTERS</span>
            <h2 className="agent-section-heading">
              Measurable business outcomes, zero speculative claims.
            </h2>
            <p className="agent-section-subhead">
              We focus on tangible operational gains: eliminating backlog, verifying facts with citations, and keeping human teams firmly in control.
            </p>
          </div>

          <div className="agent-benefits-stream reveal-on-scroll">
            {BENEFITS.map((ben, idx) => (
              <div key={idx} className="agent-benefit-item">
                <div className="agent-benefit-top">
                  <span className="agent-benefit-num">{ben.num}</span>
                  <div className="agent-benefit-indicator" aria-hidden="true" />
                </div>
                <h3 className="agent-benefit-title">{ben.title}</h3>
                <p className="agent-benefit-desc">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: FINAL CTA — PREMIUM DARK NAVY COMPOSITION
          ========================================================================= */}
      <section className="agent-final-cta-section" aria-label="Discuss Your AI Agent Project">
        <div className="agent-final-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="agent-final-cta-inner reveal-on-scroll">
            <span className="agent-final-kicker">EVALUATE YOUR ARCHITECTURE</span>
            <h2 className="agent-final-heading">
              Ready to deploy autonomous agents with enterprise guardrails?
            </h2>
            <p className="agent-final-desc">
              Share your current operational workflows with our engineering team. We assess technical feasibility, software stack compatibility, and projected return on investment.
            </p>
            <div className="agent-final-actions">
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
