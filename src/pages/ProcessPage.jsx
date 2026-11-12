import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  FileText,
  ShieldCheck,
  CheckCircle2,
  GitBranch,
  Compass,
  Hammer,
  Rocket,
  TrendingUp,
  Search,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './ProcessPage.css';

const PROCESS_STAGES = [
  {
    num: '01',
    phase: 'Discover',
    tagline: 'Operational Audit & Feasibility',
    narrative:
      'We map your existing manual workflows, pinpoint specific operational bottlenecks, inspect tool integrations, and evaluate data hygiene to determine exact automation feasibility.',
    deliverables:
      'Process workflow diagram, technical feasibility scorecard, data schema audit, and prioritized backlog.',
    timeCommitment:
      '2 to 3 hours of interviews with team leads and frontline operators.',
    checkpoint:
      'Documented data schema access, explicit success metrics, and sign-off on target ROI.',
    icon: Search,
  },
  {
    num: '02',
    phase: 'Architect',
    tagline: 'System Architecture & Technical Design',
    narrative:
      'We architect the end-to-end technical system: specifying API endpoints, webhook schemas, model routing strategies, data sanitization rules, and human-in-the-loop checkpoints.',
    deliverables:
      'Formal technical specification document, system architecture blueprint, and data security review.',
    timeCommitment:
      '1 collaborative architecture review and scope sign-off session.',
    checkpoint:
      'API security approval, encryption protocol validation, and executive stakeholder sign-off.',
    icon: Compass,
  },
  {
    num: '03',
    phase: 'Build',
    tagline: 'Production Engineering & Sandbox Prototyping',
    narrative:
      'We build and benchmark functional prototypes in an isolated staging environment using sanitized sample data, then construct production code with exponential retries and schema validation.',
    deliverables:
      'Production codebase, encrypted credential handling, operational dashboards, and end-to-end test suites.',
    timeCommitment:
      'Hands-on review and feedback session on prototype performance.',
    checkpoint:
      'Concordance validation against historical operational datasets and verified edge cases.',
    icon: Hammer,
  },
  {
    num: '04',
    phase: 'Deploy',
    tagline: 'Parallel Verification & Controlled Cutover',
    narrative:
      'We run the automation in parallel with your human staff, validating edge-case outcomes, tuning confidence thresholds, and training operators on oversight procedures before live cutover.',
    deliverables:
      'Standard Operating Procedures (SOP), staff training sessions, and formal UAT sign-off.',
    timeCommitment:
      '1 to 2 weeks of parallel verification by designated internal operators.',
    checkpoint:
      'Resolution of all critical edge cases and full staff sign-off on escalation protocols.',
    icon: Rocket,
  },
  {
    num: '05',
    phase: 'Optimize',
    tagline: 'Continuous Telemetry & SLA Governance',
    narrative:
      'We manage the live cutover with continuous telemetry. We monitor system latency, model drift, API status, and provide ongoing prompt, connector, and schema maintenance.',
    deliverables:
      'Live telemetry monitoring, monthly operational health summaries, and SLA-backed support.',
    timeCommitment:
      'Bi-weekly or monthly operational check-ins.',
    checkpoint:
      'Active uptime alerting, automated failovers, and regular model drift recalibration.',
    icon: TrendingUp,
  },
];

export default function ProcessPage() {
  usePageMetadata({
    title: 'Process — Disciplined 5-Stage Implementation Framework | Hutomate',
    description:
      'How Hutomate takes businesses from operational challenges to working solutions: Discover, Architect, Build, Deploy, and Optimize with complete transparency and human oversight.',
    path: '/process',
  });

  const [activeStageNum, setActiveStageNum] = useState('01');
  const stagesContainerRef = useRef(null);

  useScrollReveal();

  // Synchronized scroll tracking (Preserving Batch 2 requirements)
  // Animation starts when section enters viewport, advances smoothly based on scroll,
  // gives sufficient reading time, avoids sudden jumps, and preserves native mobile scrolling.
  useEffect(() => {
    const handleScroll = () => {
      const stageElements = document.querySelectorAll('.proc-stage-chapter');
      if (!stageElements.length) return;

      const viewportHeight = window.innerHeight;
      const triggerLine = viewportHeight * 0.42;

      let current = '01';

      stageElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          const num = el.getAttribute('data-stage');
          if (num) current = num;
        }
      });

      setActiveStageNum(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStage = (stageNum) => {
    setActiveStageNum(stageNum);
    const target = document.getElementById(`process-stage-${stageNum}`);
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const activeIndex = PROCESS_STAGES.findIndex((s) => s.num === activeStageNum);
  const railProgressPercent = ((activeIndex + 1) / PROCESS_STAGES.length) * 100;

  return (
    <div className="process-page-view">
      {/* ----------------------------------------------------------------------
          1. EDITORIAL PROCESS HERO
          Communicates moving from operational challenge to working solution
          ---------------------------------------------------------------------- */}
      <section className="proc-hero-section" aria-label="Process Introduction">
        <div className="proc-hero-ambient" aria-hidden="true" />

        <div className="container proc-hero-container">
          <div className="proc-hero-content reveal-on-scroll">
            <div className="proc-eyebrow-pill">
              <span className="proc-eyebrow-dot" />
              <span className="proc-eyebrow-text">DELIVERY FRAMEWORK</span>
            </div>

            <h1 className="proc-hero-title">
              From an operational challenge to a{' '}
              <span className="proc-title-accent">working solution.</span>
            </h1>

            <p className="proc-hero-lead">
              We do not believe in speculative demos or rushed cutovers. Every Hutomate deployment follows a disciplined five-stage engineering framework that guarantees architectural integrity, data security, and clear human oversight before any production launch.
            </p>

            <div className="proc-hero-actions">
              <Button variant="primary" size="md" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" size="md" href="/capabilities">
                Explore Capabilities
              </Button>
            </div>
          </div>

          {/* Connected 5-Stage Milestone Strip */}
          <div className="proc-milestones-bar reveal-on-scroll reveal-delay-2" aria-label="Process Stages Summary">
            {PROCESS_STAGES.map((st, idx) => {
              const isActive = activeStageNum === st.num;
              return (
                <button
                  key={st.num}
                  type="button"
                  className={`proc-milestone-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => scrollToStage(st.num)}
                >
                  <span className="milestone-num">{st.num}</span>
                  <span className="milestone-name">{st.phase}</span>
                  {idx < PROCESS_STAGES.length - 1 && (
                    <span className="milestone-arrow" aria-hidden="true">→</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          2. FIVE-STAGE EDITORIAL STORYTELLING PRESENTATION
          Split layout: Sticky stage navigator on desktop + expansive chapters
          ---------------------------------------------------------------------- */}
      <section className="proc-stages-section" ref={stagesContainerRef} aria-label="Five Implementation Stages">
        <div className="container proc-stages-container">
          <div className="proc-stages-layout">
            {/* Left Sticky Progress Rail (Desktop) */}
            <aside className="proc-sticky-sidebar" aria-label="Stages Navigation">
              <div className="proc-sticky-card">
                <div className="proc-sticky-header">
                  <span className="proc-sticky-eyebrow">ROADMAP</span>
                  <h3 className="proc-sticky-title">5 Delivery Stages</h3>
                </div>

                <div className="proc-sticky-track">
                  {/* Vertical Progress Line */}
                  <div className="proc-track-line-bg" />
                  <div
                    className="proc-track-line-fill"
                    style={{ height: `${railProgressPercent}%` }}
                  />

                  {/* Stage Jump Links */}
                  <nav className="proc-sticky-nav">
                    {PROCESS_STAGES.map((st) => {
                      const isActive = activeStageNum === st.num;
                      return (
                        <button
                          key={st.num}
                          type="button"
                          className={`proc-nav-item ${isActive ? 'is-active' : ''}`}
                          onClick={() => scrollToStage(st.num)}
                        >
                          <span className="proc-nav-bullet" />
                          <div className="proc-nav-text">
                            <span className="proc-nav-phase">{st.num} — {st.phase}</span>
                            <span className="proc-nav-sub">{st.tagline.split('&')[0].trim()}</span>
                          </div>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                <div className="proc-sticky-footer">
                  <div className="proc-status-dot" />
                  <span>Staged Cutover Protocol</span>
                </div>
              </div>
            </aside>

            {/* Right Main Chapters Column */}
            <main className="proc-chapters-col">
              {PROCESS_STAGES.map((st, idx) => {
                const isActive = activeStageNum === st.num;
                const IconComponent = st.icon;

                return (
                  <article
                    key={st.num}
                    id={`process-stage-${st.num}`}
                    data-stage={st.num}
                    className={`proc-stage-chapter ${isActive ? 'is-active' : ''}`}
                  >
                    {/* Chapter Header */}
                    <div className="chapter-header-row">
                      <div className="chapter-meta">
                        <span className="chapter-num">{st.num}</span>
                        <div className="chapter-phase-badge">
                          <IconComponent size={14} className="chapter-phase-icon" />
                          <span>Phase {st.num} // {st.phase}</span>
                        </div>
                      </div>

                      {isActive && (
                        <div className="chapter-live-indicator">
                          <span className="live-pulse-dot" />
                          <span>Current Focus</span>
                        </div>
                      )}
                    </div>

                    <h2 className="chapter-title">{st.tagline}</h2>

                    <p className="chapter-narrative">{st.narrative}</p>

                    {/* Integrated Information Panel (Clean editorial layout, no separate clunky boxes) */}
                    <div className="chapter-info-panel">
                      <div className="chapter-info-grid">
                        {/* Key Deliverables (Priority Retained) */}
                        <div className="chapter-deliverables-block">
                          <div className="info-block-label">
                            <FileText size={15} className="info-label-icon" />
                            <span>Key Deliverables</span>
                          </div>
                          <p className="info-block-text">{st.deliverables}</p>
                        </div>

                        {/* Client Time Required (Concise supporting info) */}
                        <div className="chapter-time-block">
                          <div className="info-block-label">
                            <Clock size={15} className="info-label-icon info-label-icon--slate" />
                            <span>Client Time Required</span>
                          </div>
                          <p className="info-block-text info-block-text--time">{st.timeCommitment}</p>
                        </div>
                      </div>

                      {/* Milestone Checkpoint (Natural integration of stage gate) */}
                      <div className="chapter-checkpoint-row">
                        <div className="checkpoint-badge">
                          <ShieldCheck size={14} className="checkpoint-icon" />
                          <span className="checkpoint-title">Stage Gate Milestone:</span>
                        </div>
                        <span className="checkpoint-desc">{st.checkpoint}</span>
                      </div>
                    </div>

                    {/* Subtle connector to next stage */}
                    {idx < PROCESS_STAGES.length - 1 && (
                      <div className="chapter-connector" aria-hidden="true">
                        <div className="connector-dot" />
                        <div className="connector-line" />
                      </div>
                    )}
                  </article>
                );
              })}
            </main>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          3. GOVERNANCE & ENGINEERING TRANSPARENCY
          ---------------------------------------------------------------------- */}
      <section className="proc-assurance-section" aria-label="Engineering Standards">
        <div className="container">
          <div className="proc-assurance-card reveal-on-scroll">
            <div className="assurance-header">
              <div className="assurance-badge">
                <CheckCircle2 size={15} />
                <span>QUALITY &amp; GOVERNANCE</span>
              </div>
              <h2 className="assurance-heading">
                Engineering transparency. <br className="assurance-br" />
                Zero black-box lock-in.
              </h2>
              <p className="assurance-lead">
                Every system we build is designed for enterprise stability, client sovereignty, and operational independence.
              </p>
            </div>

            <div className="assurance-cards-grid">
              <div className="assurance-item-card">
                <div className="assurance-icon-box">
                  <GitBranch size={20} />
                </div>
                <h3 className="assurance-item-title">Client Repository Ownership</h3>
                <p className="assurance-item-desc">
                  You maintain 100% intellectual property ownership of your codebase, automation workflows, connector schemas, and operational dashboards.
                </p>
              </div>

              <div className="assurance-item-card">
                <div className="assurance-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="assurance-item-title">Zero Public Model Training</h3>
                <p className="assurance-item-desc">
                  Your business data and customer interactions are never used to train public foundation models. We enforce strict zero-data-retention API policies.
                </p>
              </div>

              <div className="assurance-item-card">
                <div className="assurance-icon-box">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="assurance-item-title">Production SLA &amp; Support</h3>
                <p className="assurance-item-desc">
                  Continuous telemetry monitoring, model drift recalibration, and guaranteed response SLAs keep your production workflows running reliably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          4. CLOSING CTA BANNER
          ---------------------------------------------------------------------- */}
      <CtaBanner
        title="Ready to begin with Discovery?"
        description="Our initial operational audit evaluates your processes, data structures, and tool compatibility to confirm feasibility before any commitment."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
        secondaryButtonText="Explore Capabilities"
        secondaryButtonHref="/capabilities"
      />
    </div>
  );
}
