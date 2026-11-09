import React, { useState, useEffect } from 'react';
import { Clock, FileText } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './ProcessPage.css';

export default function ProcessPage() {
  usePageMetadata({
    title: 'How We Work — Disciplined 6-Step Implementation Framework',
    description: 'Our disciplined, step-by-step engineering delivery process ensures technical feasibility, system reliability, and clear human oversight before deployment.',
    path: '/process',
  });

  const [activeStep, setActiveStep] = useState('01');

  useScrollReveal();

  const steps = [
    {
      num: '01',
      phase: 'Discover',
      title: 'Operational Process Audit & Feasibility',
      desc: 'We map your existing manual workflows, pinpoint specific operational bottlenecks, inspect tool integrations, and evaluate data hygiene to determine exact automation feasibility.',
      deliverables: 'Process workflow diagram, technical feasibility scorecard, and prioritized implementation backlog.',
      timeCommitment: '2 to 3 hours of interviews with team leads and frontline operators.',
    },
    {
      num: '02',
      phase: 'Strategise',
      title: 'Technical Architecture & Solution Design',
      desc: 'We architect the end-to-end technical system: specifying API endpoints, webhook schemas, model routing strategies, data sanitization rules, and human-in-the-loop checkpoints.',
      deliverables: 'Formal technical specification document, system architecture blueprint, and data security review.',
      timeCommitment: '1 collaborative architecture review and scope sign-off session.',
    },
    {
      num: '03',
      phase: 'Build',
      title: 'Production Engineering & Sandbox Prototyping',
      desc: 'We build and benchmark functional prototypes in an isolated staging environment using sanitized sample data, then construct production code with exponential retries and schema validation.',
      deliverables: 'Production codebase, encrypted credential handling, operational dashboards, and test suites.',
      timeCommitment: 'Hands-on review and feedback session on prototype performance.',
    },
    {
      num: '04',
      phase: 'Deploy',
      title: 'User Acceptance Testing & Controlled Rollout',
      desc: 'We run the automation in parallel with your human staff, validating edge-case outcomes, tuning confidence thresholds, and training operators on oversight procedures before live cutover.',
      deliverables: 'Standard Operating Procedures (SOP), staff training sessions, and formal UAT sign-off.',
      timeCommitment: '1 to 2 weeks of parallel verification by designated internal operators.',
    },
    {
      num: '05',
      phase: 'Improve',
      title: 'Continuous Telemetry & System Optimization',
      desc: 'We manage the live cutover with continuous telemetry. We monitor system latency, model drift, API status, and provide ongoing prompt, connector, and schema maintenance.',
      deliverables: 'Live telemetry monitoring, monthly operational health summaries, and SLA-backed support.',
      timeCommitment: 'Bi-weekly or monthly operational check-ins.',
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
        badgeType="purple"
        title="From business challenge to intelligent execution."
        description="We do not believe in speculative AI demos or rushed deployments. We follow a proven five-phase implementation framework that ensures technical feasibility, operational fit, and clear accountability before any code is committed."
      >
        <Button variant="primary" size="md" arrow href="/contact">
          Discuss Your Project
        </Button>
        <Button variant="secondary" size="md" href="/capabilities">
          Explore Capabilities
        </Button>
      </PageHeader>

      <section className="section detail-section">
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
                    data-step={st.num}
                    className={`process-step-row card ${isActive ? 'is-active-phase' : ''}`}
                  >
                    <div className="step-num-col">
                      <span className="step-num-big">{st.num}</span>
                      <span className="step-phase-tag">{st.phase}</span>
                      {isActive && (
                        <span className="step-active-indicator">
                          <span className="step-active-dot"></span>
                          <span>Active</span>
                        </span>
                      )}
                    </div>

                    <div className="step-main-col">
                      <h3 className="step-title">{st.title}</h3>
                      <p className="step-desc">{st.desc}</p>
                    </div>

                    <div className="step-details-col">
                      <div className="step-info-block">
                        <span className="info-label">
                          <FileText size={13} color="#7657E8" />
                          Key Deliverables
                        </span>
                        <p className="info-val">{st.deliverables}</p>
                      </div>

                      <div className="step-info-block">
                        <span className="info-label">
                          <Clock size={13} color="#71717A" />
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
