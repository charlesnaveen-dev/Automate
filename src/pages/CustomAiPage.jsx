import React, { useRef } from 'react';
import {
  Layers,
  Cpu,
  Database,
  LayoutDashboard,
  FolderSync,
  Wrench,
  GitMerge,
  TrendingUp,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import WhyItMattersSection from '../components/WhyItMattersSection';
import './CustomAiPage.css';

const SIX_CUSTOM_CAPABILITIES = [
  {
    num: '01',
    icon: Layers,
    title: 'CRM & Business Tool Integration',
    desc: 'Deep, bi-directional bridges between HubSpot, Salesforce, Notion, Zendesk, and proprietary software.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'API Connectivity',
    desc: 'Robust REST and webhook pipelines with automated retries, rate limiting, and failure containment.',
  },
  {
    num: '03',
    icon: Database,
    title: 'Database Synchronization',
    desc: 'Secure ETL pipelines ensuring private databases and cloud warehouses remain in continuous, verified sync.',
  },
  {
    num: '04',
    icon: LayoutDashboard,
    title: 'Custom Business Dashboards',
    desc: 'Operational telemetry, telemetry tracking, and executive dashboards providing real-time visibility into automations.',
  },
  {
    num: '05',
    icon: FolderSync,
    title: 'System & Data Migration',
    desc: 'Painless data extraction, cleanup, normalization, and cutover between legacy tools and modern platforms.',
  },
  {
    num: '06',
    icon: Wrench,
    title: 'Custom Workflow Development',
    desc: 'Bespoke internal software tools, deterministic business logic engines, and custom back-office infrastructure.',
  },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Off-the-Shelf Tools Lack Custom Context',
    desc: 'Generic AI tools do not understand your company\'s specific jargon, bespoke database tables, or complex workflows.',
  },
  {
    num: '02',
    title: 'Legacy Databases Locked in Silos',
    desc: 'Valuable operational data sits trapped in older on-premise databases, ERPs, and custom software that lack modern integrations.',
  },
  {
    num: '03',
    title: 'Strict Data Security & Privacy Mandates',
    desc: 'Businesses in regulated industries cannot risk sending proprietary customer data or intellectual property to public AI providers.',
  },
  {
    num: '04',
    title: 'Unenforced Business Rules & Hallucinations',
    desc: 'Without custom logic guardrails, off-the-shelf chatbots produce inaccurate guidance that violates corporate policy and creates liabilities.',
  },
];

const WHY_IT_MATTERS_BENEFITS = [
  {
    num: '01',
    icon: Layers,
    title: 'Connected Business Data',
    desc: 'Bring information together across your applications and reduce disconnected data sources.',
  },
  {
    num: '02',
    icon: GitMerge,
    title: 'Simplified Operations',
    desc: 'Connect systems and eliminate unnecessary manual transfers between different platforms.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Built to Scale',
    desc: 'Develop flexible integrations and custom systems that support changing business requirements.',
  },
];

export default function CustomAiPage() {
  const pageRef = useRef(null);

  usePageMetadata({
    title: 'Custom AI Solutions & Enterprise Architecture | Hutomate',
    description: 'We build tailored AI systems, private VPC integrations, and legacy database adapters designed around your unique business operations.',
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
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.8'
      )
      .fromTo(
        '.custom-hero-headline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        '.custom-hero-lead',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.custom-hero-actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );
  });

  return (
    <div className="custom-page" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO SECTION
          ========================================================================= */}
      <section className="custom-hero-section" aria-label="Custom AI Solutions Hero">
        <div className="custom-hero-bg-container" aria-hidden="true">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-custom-ai-mobile.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-custom-ai-mobile.jpg"
              type="image/jpeg"
            />
            <source
              srcSet="/images/hero-custom-ai.webp"
              type="image/webp"
            />
            <img
              src="/images/hero-custom-ai.jpg"
              alt="Hutomate bespoke AI system architecture"
              className="custom-hero-bg"
              width="1920"
              height="1080"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="custom-hero-overlay" />
        </div>

        <div className="container custom-hero-container">
          <div className="custom-hero-content">
            <div className="custom-hero-label">
              <span>INTEGRATIONS & CUSTOM SYSTEMS</span>
            </div>

            <h1 className="custom-hero-headline">
              Custom AI systems designed around your proprietary business workflows.
            </h1>

            <p className="custom-hero-lead">
              When generic software doesn't fit your operational needs, we design, build, and deploy bespoke AI architectures. From private VPC deployments to legacy database adapters, we build systems tailored to your business.
            </p>

            <div className="custom-hero-actions">
              <Button variant="primary" size="lg" arrow href="/start-project">
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
          SECTION 02: THE CHALLENGE
          ========================================================================= */}
      <section className="custom-challenge-section" aria-label="The Challenge">
        <div className="container">
          <div className="custom-challenge-grid">
            <div className="custom-challenge-left reveal-on-scroll">
              <span className="custom-section-kicker">THE CHALLENGE</span>
              <h2 className="custom-challenge-heading">
                Off-the-shelf AI tools cannot handle proprietary business complexity.
              </h2>
              <p className="custom-challenge-lead">
                Every business runs on unique data structures, internal policies, and specialized terminology. Generic chatbots and no-code tools fail to integrate with older software, violate data privacy rules, and lack domain accuracy.
              </p>
              <div className="custom-challenge-benefit">
                <div className="custom-benefit-header">
                  <span className="custom-benefit-badge" aria-hidden="true" />
                  <span className="custom-benefit-title">Tailored Enterprise Systems</span>
                </div>
                <p className="custom-benefit-text">
                  We build custom software that connects directly with your existing infrastructure, respecting your business rules and ensuring complete data privacy.
                </p>
              </div>
            </div>

            <div className="custom-challenge-right reveal-on-scroll">
              {CHALLENGES.map((ch, idx) => (
                <div key={idx} className="custom-challenge-card">
                  <span className="custom-challenge-num">{ch.num}</span>
                  <h3 className="custom-challenge-title">{ch.title}</h3>
                  <p className="custom-challenge-desc">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT INTEGRATIONS & CUSTOM SYSTEMS CAN DO — 6-CARD GRID
          ========================================================================= */}
      <section className="custom-showcase-section" aria-label="What Integrations & Custom Systems Can Do">
        <div className="container">
          <div className="custom-showcase-header reveal-on-scroll">
            <span className="custom-section-kicker">WHAT INTEGRATIONS & CUSTOM SYSTEMS CAN DO</span>
            <div className="custom-showcase-header-split">
              <h2 className="custom-section-heading">
                Tailored Infrastructure, Built Around Your Stack
              </h2>
              <p className="custom-section-subhead">
                Custom architectures that bridge legacy tools, private databases, and modern APIs with guaranteed reliability.
              </p>
            </div>
          </div>

          <div className="custom-six-grid reveal-on-scroll">
            {SIX_CUSTOM_CAPABILITIES.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <article key={idx} className="custom-six-card">
                  <div className="custom-six-card-top">
                    <div className="custom-six-icon-box" aria-hidden="true">
                      <IconComp size={22} className="custom-six-icon" />
                    </div>
                    <span className="custom-six-num">{cap.num}</span>
                  </div>
                  <h3 className="custom-six-title">{cap.title}</h3>
                  <p className="custom-six-desc">{cap.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: WHY IT MATTERS — MINIMAL BUSINESS BENEFITS
          ========================================================================= */}
      <WhyItMattersSection
        kicker="WHY IT MATTERS"
        heading="Connected systems. A more unified business."
        subhead="Bring your existing tools, applications, and business data together through reliable integrations and custom-built solutions."
        benefits={WHY_IT_MATTERS_BENEFITS}
      />

      {/* =========================================================================
          SECTION 05: FINAL CTA
          ========================================================================= */}
      <section className="custom-final-cta-section" aria-label="Discuss Your Custom AI Architecture">
        <div className="custom-final-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="custom-final-cta-inner reveal-on-scroll">
            <span className="custom-final-kicker">ARCHITECT YOUR SYSTEM</span>
            <h2 className="custom-final-heading">
              Ready to engineer a system built around your business?
            </h2>
            <p className="custom-final-desc">
              Share your legacy tools, database architecture, or security requirements with our engineering leads. We evaluate technical feasibility and provide clear architectural guidance.
            </p>
            <div className="custom-final-actions">
              <Button variant="primary" size="lg" arrow href="/start-project">
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