import React, { useState, useEffect } from 'react';
import { Clock, FileText, CheckCircle2, ShieldCheck, ArrowRight, GitBranch } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './ProcessPage.css';

export default function ProcessPage() {
  usePageMetadata({
    title: 'Engineering Process — Disciplined 5-Stage Implementation Framework',
    description: 'Our disciplined, step-by-step engineering delivery process ensures technical feasibility, system reliability, and clear human oversight before deployment.',
    path: '/process',
  });

  const [activeStep, setActiveStep] = useState('01');

  useScrollReveal();

  const steps = [
    {
      num: '01',
      phase: 'Discover',
      title: 'Operational Audit & Technical Feasibility',
      desc: 'We map your existing manual workflows, pinpoint specific operational bottlenecks, inspect tool integrations, and evaluate data hygiene to determine exact automation feasibility.',
      deliverables: 'Process workflow diagram, technical feasibility scorecard, data schema audit, and prioritized backlog.',
      timeCommitment: '2 to 3 hours of interviews with team leads and frontline operators.',
      gateCriteria: 'Documented data schema access, explicit success metrics, and sign-off on target ROI.',
    },
    {
      num: '02',
      phase: 'Architect',
      title: 'Technical Architecture & Solution Design',
      desc: 'We architect the end-to-end technical system: specifying API endpoints, webhook schemas, model routing strategies, data sanitization rules, and human-in-the-loop checkpoints.',
      deliverables: 'Formal technical specification document, system architecture blueprint, and data security review.',
      timeCommitment: '1 collaborative architecture review and scope sign-off session.',
      gateCriteria: 'API security approval, encryption protocol validation, and executive stakeholder sign-off.',
    },
    {
      num: '03',
      phase: 'Sandbox',
      title: 'Production Engineering & Sandbox Prototyping',
      desc: 'We build and benchmark functional prototypes in an isolated staging environment using sanitized sample data, then construct production code with exponential retries and schema validation.',
      deliverables: 'Production codebase, encrypted credential handling, operational dashboards, and end-to-end test suites.',
      timeCommitment: 'Hands-on review and feedback session on prototype performance.',
      gateCriteria: '>99.2% benchmark accuracy against gold-standard manual operational datasets.',
    },
    {
      num: '04',
      phase: 'Pilot',
      title: 'Parallel Verification & Controlled Cutover',
      desc: 'We run the automation in parallel with your human staff, validating edge-case outcomes, tuning confidence thresholds, and training operators on oversight procedures before live cutover.',
      deliverables: 'Standard Operating Procedures (SOP), staff training sessions, and formal UAT sign-off.',
      timeCommitment: '1 to 2 weeks of parallel verification by designated internal operators.',
      gateCriteria: 'Zero unresolved Sev-1 edge cases and 100% staff certification on escalation protocols.',
    },
    {
      num: '05',
      phase: 'Observe',
      title: 'Continuous Telemetry & SLA Governance',
      desc: 'We manage the live cutover with continuous telemetry. We monitor system latency, model drift, API status, and provide ongoing prompt, connector, and schema maintenance.',
      deliverables: 'Live telemetry monitoring, monthly operational health summaries, and SLA-backed support.',
      timeCommitment: 'Bi-weekly or monthly operational check-ins.',
      gateCriteria: 'Active uptime alerting, automated failovers, and regular model drift recalibration.',
    },
  ];

  // Scroll-triggered phase reveal and active tracking
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepNum = entry.target.getAttribute('data-step');
          if (stepNum) setActiveStep(stepNum);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.2,
    });

    const elements = document.querySelectorAll('.process-step-row');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeIdx = steps.findIndex((s) => s.num === activeStep);
  const progressHeightPercent = ((activeIdx + 1) / steps.length) * 100;

  return (
    <div className="process-page">
      <PageHeader
        eyebrow="ENGINEERING PROCESS"
        badgeText="Disciplined Delivery"
        badgeType="teal"
        title="From business challenge to intelligent execution."
        description="We do not believe in speculative AI demos or rushed deployments. We follow a proven five-stage implementation framework that guarantees architectural integrity, operational fit, and clear human oversight before any production cutover."
      >
        <Button variant="primary" size="md" arrow href="/contact">
          Discuss Your Project
        </Button>
        <Button variant="secondary" size="md" href="/capabilities">
          Explore Capabilities
        </Button>
      </PageHeader>

      {/* Engineering Principles Ribbon */}
      <section className="process-ribbon-section">
        <div className="container">
          <div className="process-metrics-ribbon">
            <div className="process-ribbon-item">
              <span className="ribbon-val">100%</span>
              <span className="ribbon-lbl">Deterministic Milestones</span>
            </div>
            <div className="process-ribbon-divider" />
            <div className="process-ribbon-item">
              <span className="ribbon-val">0</span>
              <span className="ribbon-lbl">Cutover Production Downtime</span>
            </div>
            <div className="process-ribbon-divider" />
            <div className="process-ribbon-item">
              <span className="ribbon-val">Human-in-Loop</span>
              <span className="ribbon-lbl">Escalation & Safety Gates</span>
            </div>
            <div className="process-ribbon-divider" />
            <div className="process-ribbon-item">
              <span className="ribbon-val">2–4 Wks</span>
              <span className="ribbon-lbl">Typical Prototype Sprint</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Process Timeline */}
      <section className="section process-main-section">
        <div className="container">
          <div className="process-timeline-layout">
            {/* Left animated progress line track on desktop */}
            <div className="process-progress-rail" aria-hidden="true">
              <div className="rail-background-line"></div>
              <div
                className="rail-active-line"
                style={{ height: `${progressHeightPercent}%` }}
              ></div>
            </div>

            {/* Steps Column */}
            <div className="process-timeline">
              {steps.map((st) => {
                const isActive = activeStep === st.num;
                return (
                  <article
                    key={st.num}
                    id={`stage-${st.num}`}
                    data-step={st.num}
                    className={`process-step-row ${isActive ? 'is-active-phase' : ''}`}
                    onClick={() => setActiveStep(st.num)}
                  >
                    <div className="step-num-col">
                      <span className="step-num-big">{st.num}</span>
                      <span className="step-phase-tag">{st.phase}</span>
                      {isActive && (
                        <span className="step-active-indicator">
                          <span className="step-active-dot"></span>
                          <span>In Focus</span>
                        </span>
                      )}
                    </div>

                    <div className="step-main-col">
                      <div className="step-header-wrap">
                        <span className="step-stage-pill">Phase {st.num}</span>
                        <h3 className="step-title">{st.title}</h3>
                      </div>
                      <p className="step-desc">{st.desc}</p>

                      <div className="step-gate-card">
                        <div className="gate-header">
                          <ShieldCheck size={15} color="#167C80" />
                          <span className="gate-label">Stage Gate Criteria</span>
                        </div>
                        <p className="gate-text">{st.gateCriteria}</p>
                      </div>
                    </div>

                    <div className="step-details-col">
                      <div className="step-info-block">
                        <span className="info-label">
                          <FileText size={14} color="#167C80" />
                          Key Deliverables
                        </span>
                        <p className="info-val">{st.deliverables}</p>
                      </div>

                      <div className="step-info-block">
                        <span className="info-label">
                          <Clock size={14} color="#40545C" />
                          Client Time Required
                        </span>
                        <p className="info-val">{st.timeCommitment}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Assurance Banner */}
      <section className="section process-assurance-section">
        <div className="container">
          <div className="process-assurance-card">
            <div className="assurance-badge">
              <CheckCircle2 size={16} />
              <span>GUARANTEED QUALITY ASSURANCE</span>
            </div>
            <h2 className="assurance-title">No black-box code. Total engineering transparency.</h2>
            <p className="assurance-desc">
              Every Hutomate deployment includes complete documentation, standard operating procedures, full code ownership, and thorough training for your operational teams.
            </p>
            <div className="assurance-grid">
              <div className="assurance-pill">
                <GitBranch size={16} color="#83DDE2" />
                <span>Client Repository Ownership</span>
              </div>
              <div className="assurance-pill">
                <ShieldCheck size={16} color="#83DDE2" />
                <span>Zero Training on Your Data</span>
              </div>
              <div className="assurance-pill">
                <CheckCircle2 size={16} color="#83DDE2" />
                <span>Production SLA Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
