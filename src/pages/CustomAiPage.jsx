import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import './CustomAiPage.css';

const CUSTOM_DELIVERABLES = [
  {
    id: 'hybrid-rag',
    num: '01',
    title: 'Domain-Specific Retrieval Systems (Hybrid RAG)',
    domain: 'Enterprise Knowledge',
    lead: 'Advanced hybrid retrieval combining dense semantic vectors and sparse lexical search.',
    desc: 'Indexes millions of proprietary technical documents, blueprints, legal briefs, and historical tickets. Delivers grounded answers with exact paragraph source citations and role-based access filtering.',
    specs: [
      { label: 'Retrieval Method', value: 'Reciprocal rank fusion over vector & keyword indices' },
      { label: 'Latency Budget', value: 'Sub-400ms grounded generation' },
      { label: 'Security Boundary', value: 'Permission-filtered document chunking' },
    ],
    systems: ['PostgreSQL pgvector', 'Pinecone', 'OpenSearch', 'Snowflake', 'AWS S3'],
  },
  {
    id: 'private-vpc',
    num: '02',
    title: 'Private VPC & Zero-Retention Deployments',
    domain: 'Security & Compliance',
    lead: 'Self-hosted inference gateways ensuring client data never touches public models.',
    desc: 'Deploy custom models in your own dedicated AWS, Google Cloud, or Azure Virtual Private Cloud. Enforces strict zero-retention data boundaries with end-to-end encryption in transit and at rest.',
    specs: [
      { label: 'Deployment Topology', value: 'Dedicated private VPC cloud cluster' },
      { label: 'Data Retention', value: 'Zero third-party caching or training storage' },
      { label: 'Compliance Standard', value: 'SOC 2, HIPAA, and GDPR architectural alignment' },
    ],
    systems: ['AWS PrivateLink', 'GCP Private Service Connect', 'Azure VNet', 'Docker'],
  },
  {
    id: 'legacy-adapters',
    num: '03',
    title: 'Legacy Database AI Query Adapters',
    domain: 'Infrastructure Modernization',
    lead: 'Intelligent natural language query layers built over older SQL databases and ERPs.',
    desc: 'Enables operators to query complex relational databases in conversational English. Employs read-only query sandboxes, strict syntax checkers, and confidence validators to protect legacy systems.',
    specs: [
      { label: 'Safety Protocol', value: 'Read-only connection pool with query timeout caps' },
      { label: 'Schema Mapping', value: 'Deterministic entity-relationship reflection' },
      { label: 'Output Schema', value: 'Structured JSON and formatted business summaries' },
    ],
    systems: ['Oracle Database', 'Microsoft SQL Server', 'PostgreSQL', 'SAP', 'AS400'],
  },
  {
    id: 'operations-copilots',
    num: '04',
    title: 'Bespoke Frontline Operations Copilots',
    domain: 'Specialized Applications',
    lead: 'Custom web workspaces that assist staff through complex quoting, underwriting, and review.',
    desc: 'Custom-designed web interfaces that combine proprietary data schemas with real-time model reasoning to accelerate complex casework—reducing multi-hour manual reviews to minutes with human sign-off.',
    specs: [
      { label: 'Interface', value: 'Custom React workspace designed for operator ergonomics' },
      { label: 'Validation Layer', value: 'Multi-point verification with operator sign-off' },
      { label: 'Throughput Gain', value: 'Multi-hour casework reduced to minutes' },
    ],
    systems: ['Internal Web Apps', 'Salesforce Canvas', 'Custom REST APIs', 'GraphQL'],
  },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Unstructured Enterprise Complexity',
    desc: 'Off-the-shelf AI models fail on complex engineering schematics, technical blueprints, nested tables, and specialized domain terminology.',
  },
  {
    num: '02',
    title: 'Strict Data Sovereignty Barriers',
    desc: 'Regulated organizations cannot upload sensitive client records or financial data to public cloud AI tools without violating compliance frameworks.',
  },
  {
    num: '03',
    title: 'Legacy Software Lock-in',
    desc: 'Older on-premise ERPs, SQL databases, and internal software lack modern REST APIs, creating an innovation bottleneck for operations.',
  },
  {
    num: '04',
    title: 'Lack of Domain Context',
    desc: 'Generic models generate generic answers because they lack structural understanding of your proprietary business rules and schemas.',
  },
];

const BENEFITS = [
  {
    index: '01',
    title: 'Absolute Data Sovereignty',
    desc: 'Models execute within isolated cloud perimeters with guaranteed zero-retention policies so proprietary data never leaks.',
  },
  {
    index: '02',
    title: 'Engineered for Your Schemas',
    desc: 'Custom data pipelines designed specifically around your database structures, field types, and internal business logic.',
  },
  {
    index: '03',
    title: 'Modernize Without Replacing',
    desc: 'Adds intelligent conversational and analytical capabilities on top of legacy software without costly full-system migrations.',
  },
  {
    index: '04',
    title: 'Quantifiable Operational ROI',
    desc: 'Engineered specifically to solve your single largest operational bottleneck with predictable, measurable business returns.',
  },
];

export default function CustomAiPage() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const pageRef = useRef(null);

  usePageMetadata({
    title: 'Custom AI Solutions — Enterprise AI Systems | Hutomate',
    description: 'Bespoke AI architectures, private VPC model deployments, custom document intelligence pipelines, and proprietary enterprise software copilots.',
    path: '/capabilities/custom-ai-solutions',
  });

  useScrollReveal();

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.custom-hero-bg, .custom-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.custom-hero-bg',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        '.custom-hero-label',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.8'
      )
      .fromTo(
        '.custom-hero-headline',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.45'
      )
      .fromTo(
        '.custom-hero-desc',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.custom-hero-ctas',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      );
  }, []);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="custom-page-redesign" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO — FULL-COVER PHOTOGRAPHY
          ========================================================================= */}
      <section className="custom-hero-section" aria-label="Custom AI Solutions Hero">
        <div className="custom-hero-bg-wrapper" aria-hidden="true">
          <img
            src="/images/hero-custom-ai.jpg"
            alt=""
            className="custom-hero-bg"
            loading="eager"
            decoding="sync"
          />
          <div className="custom-hero-overlay" />
          <div className="custom-hero-vignette" />
        </div>

        <div className="container custom-hero-container">
          <div className="custom-hero-content">
            <div className="custom-hero-label">
              <span className="custom-hero-beacon" aria-hidden="true" />
              <span>CAPABILITY 04 // PURPOSE-BUILT ARCHITECTURES</span>
            </div>

            <h1 className="custom-hero-headline">
              Tailored AI systems engineered around specific business requirements.
            </h1>

            <p className="custom-hero-desc">
              When off-the-shelf software cannot satisfy complex operational requirements, security constraints, or proprietary workflows, we engineer bespoke AI systems, specialized RAG pipelines, and private VPC solutions.
            </p>

            <div className="custom-hero-ctas">
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
          SECTION 02: THE CHALLENGE — ASYMMETRIC EDITORIAL SPLIT
          ========================================================================= */}
      <section className="custom-challenge-section" aria-label="The Challenge">
        <div className="container">
          <div className="custom-challenge-grid">
            <div className="custom-challenge-left reveal-on-scroll">
              <span className="custom-section-kicker">THE OFF-THE-SHELF CEILING</span>
              <h2 className="custom-challenge-heading">
                Generic AI chatbots break the moment they touch proprietary enterprise schemas.
              </h2>
              <p className="custom-challenge-lead">
                Mature enterprises handle sensitive client records, non-standard document formats, and legacy operational systems. Off-the-shelf AI tools cannot be safely retrofitted to these environments without significant security and accuracy risks.
              </p>
              <div className="custom-challenge-banner">
                <span className="custom-banner-title">Zero Data Retention</span>
                <span className="custom-banner-text">
                  Private VPC deployment guarantees that confidential business data is never cached or used for public model training.
                </span>
              </div>
            </div>

            <div className="custom-challenge-right reveal-on-scroll">
              {CHALLENGES.map((ch, idx) => (
                <div key={idx} className="custom-challenge-card">
                  <div className="custom-challenge-header">
                    <span className="custom-challenge-num">{ch.num}</span>
                    <h3 className="custom-challenge-title">{ch.title}</h3>
                  </div>
                  <p className="custom-challenge-desc">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT WE DELIVER — INTERACTIVE CUSTOM ACCORDION
          ========================================================================= */}
      <section className="custom-deliver-section" aria-label="What We Deliver">
        <div className="container">
          <div className="custom-deliver-header reveal-on-scroll">
            <span className="custom-section-kicker">WHAT WE DELIVER</span>
            <h2 className="custom-section-heading">
              Bespoke systems engineered for your proprietary operations.
            </h2>
            <p className="custom-section-subhead">
              Architectures designed around your exact database schema, compliance mandates, and operational logic.
            </p>
          </div>

          <div className="custom-accordion-wrap reveal-on-scroll">
            {CUSTOM_DELIVERABLES.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`custom-accordion-item ${isExpanded ? 'is-active' : ''}`}
                >
                  <button
                    type="button"
                    className="custom-accordion-trigger"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isExpanded}
                    aria-controls={`custom-deliverable-${item.id}`}
                  >
                    <div className="custom-accordion-trigger-left">
                      <span className="custom-item-num">{item.num}</span>
                      <div className="custom-item-title-wrap">
                        <span className="custom-item-domain">{item.domain}</span>
                        <h3 className="custom-item-title">{item.title}</h3>
                      </div>
                    </div>
                    <div className="custom-accordion-icon-wrap" aria-hidden="true">
                      <ChevronDown
                        size={20}
                        className={`custom-chevron ${isExpanded ? 'is-rotated' : ''}`}
                      />
                    </div>
                  </button>

                  <div
                    id={`custom-deliverable-${item.id}`}
                    className={`custom-accordion-drawer ${isExpanded ? 'is-open' : ''}`}
                  >
                    <div className="custom-drawer-inner">
                      <div className="custom-drawer-grid">
                        <div className="custom-drawer-main">
                          <p className="custom-drawer-lead">{item.lead}</p>
                          <p className="custom-drawer-desc">{item.desc}</p>

                          <div className="custom-drawer-systems">
                            <span className="custom-systems-label">Infrastructure &amp; Stack:</span>
                            <div className="custom-systems-tags">
                              {item.systems.map((sys, sIdx) => (
                                <span key={sIdx} className="custom-sys-pill">
                                  {sys}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="custom-drawer-specs">
                          <span className="custom-specs-title">System Specifications</span>
                          {item.specs.map((sp, spIdx) => (
                            <div key={spIdx} className="custom-spec-row">
                              <span className="custom-spec-key">{sp.label}</span>
                              <span className="custom-spec-val">{sp.value}</span>
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
          SECTION 04: WHY IT MATTERS — ASYMMETRIC ARCHITECTURAL STAGGER
          ========================================================================= */}
      <section className="custom-matters-section" aria-label="Why It Matters">
        <div className="container">
          <div className="custom-matters-header reveal-on-scroll">
            <span className="custom-section-kicker">WHY IT MATTERS</span>
            <h2 className="custom-section-heading">
              Enterprise control, data sovereignty, and measurable ROI.
            </h2>
            <p className="custom-section-subhead">
              We build systems that satisfy your strict security mandates while solving real business bottlenecks.
            </p>
          </div>

          <div className="custom-stagger-grid reveal-on-scroll">
            {BENEFITS.map((ben, idx) => (
              <div key={idx} className="custom-stagger-card">
                <div className="custom-stagger-top">
                  <span className="custom-stagger-idx">0{ben.index}</span>
                  <div className="custom-stagger-line" aria-hidden="true" />
                </div>
                <h3 className="custom-stagger-title">{ben.title}</h3>
                <p className="custom-stagger-desc">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: FINAL CTA — PREMIUM DARK NAVY COMPOSITION
          ========================================================================= */}
      <section className="custom-final-cta-section" aria-label="Discuss Your Custom AI Architecture">
        <div className="custom-final-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="custom-final-cta-inner reveal-on-scroll">
            <span className="custom-final-kicker">ARCHITECT YOUR SOLUTION</span>
            <h2 className="custom-final-heading">
              Ready to engineer custom AI tailored to your proprietary operations?
            </h2>
            <p className="custom-final-desc">
              Talk directly with our solutions architects. We evaluate your data security constraints, existing technical infrastructure, and system design requirements.
            </p>
            <div className="custom-final-actions">
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
