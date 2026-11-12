import React, { useState } from 'react';
import { Search, Compass, Hammer, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import './ProcessPreviewSection.css';

const PROCESS_PHASES = [
  {
    num: '01',
    name: 'Discover',
    tagline: 'Operational audit & workflow mapping',
    desc: 'We map your existing manual workflows, pinpoint exact operational bottlenecks, inspect software integrations, and establish clear success metrics.',
    deliverable: 'Workflow Process Map & Technical Feasibility Report',
    icon: Search,
  },
  {
    num: '02',
    name: 'Architect',
    tagline: 'System architecture & roadmap',
    desc: 'We define the technical architecture: model selection, webhook contracts, data sanitization rules, and human-in-the-loop review checkpoints.',
    deliverable: 'Technical Specification Blueprint & Security Review',
    icon: Compass,
  },
  {
    num: '03',
    name: 'Build',
    tagline: 'Development & sandbox testing',
    desc: 'We engineer the solution: connecting APIs, configuring prompt schemas, integrating voice telephony, and evaluating edge cases in an isolated staging environment.',
    deliverable: 'Functional Staging Prototype & Edge-Case Benchmark',
    icon: Hammer,
  },
  {
    num: '04',
    name: 'Deploy',
    tagline: 'Validation & team enablement',
    desc: 'We roll out the system in parallel with your staff, validate live transactions, train operators on oversight procedures, and launch production pipelines.',
    deliverable: 'Production Deployment & Operator SOP Guides',
    icon: Rocket,
  },
  {
    num: '05',
    name: 'Optimize',
    tagline: 'Continuous telemetry & tuning',
    desc: 'We monitor production telemetry, refine confidence thresholds against real operational data, and continually extend capabilities as your business grows.',
    deliverable: 'Performance Telemetry & Iterative Enhancements',
    icon: TrendingUp,
  },
];

export default function ProcessPreviewSection() {
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);
  const sectionRef = React.useRef(null);

  // Scroll-linked progress tracking through the 5 delivery phases
  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if section is in view
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const sectionHeight = rect.height;
      const scrolled = viewportHeight * 0.6 - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight + viewportHeight * 0.2)));
      const calculatedIdx = Math.floor(progress * PROCESS_PHASES.length);
      setActivePhaseIdx(Math.min(PROCESS_PHASES.length - 1, Math.max(0, calculatedIdx)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="process-preview-section" id="process" ref={sectionRef} aria-label="Process Preview">
      <div className="container">
        {/* Section Header */}
        <div className="process-preview-header reveal-on-scroll">
          <div className="process-header-intro">
            <span className="process-preview-eyebrow">OUR METHODOLOGY</span>
            <h2 className="process-preview-headline">
              From the first idea to{' '}
              <span className="process-headline-accent">real-world implementation.</span>
            </h2>
          </div>
          <div className="process-header-desc">
            <p className="process-preview-body">
              Every system we engineer follows a disciplined 5-phase delivery framework designed to guarantee technical feasibility, system reliability, and measurable business impact before production commit.
            </p>
            <div className="process-header-cta">
              <Button variant="secondary" size="md" arrow href="/process">
                Explore Full 5-Phase Process
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll-Linked Timeline Progress Line */}
        <div className="process-timeline-indicator" aria-hidden="true">
          <div
            className="process-timeline-fill"
            style={{ width: `${((activePhaseIdx + 1) / PROCESS_PHASES.length) * 100}%` }}
          />
        </div>

        {/* 5-Phase Horizontal Timeline Track */}
        <div className="process-phases-track reveal-on-scroll">
          {PROCESS_PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            const isActive = activePhaseIdx === idx;
            return (
              <div
                key={phase.num}
                className={`process-phase-card ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActivePhaseIdx(idx)}
                onClick={() => setActivePhaseIdx(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActivePhaseIdx(idx);
                  }
                }}
              >
                <div className="phase-card-top">
                  <span className="phase-num">{phase.num}</span>
                  <div className="phase-icon-box" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="phase-name">{phase.name}</h3>
                <span className="phase-tagline">{phase.tagline}</span>
                <p className="phase-desc">{phase.desc}</p>

                <div className="phase-deliverable">
                  <CheckCircle2 size={13} className="deliverable-check" aria-hidden="true" />
                  <span>{phase.deliverable}</span>
                </div>

                {isActive && <div className="phase-active-bar" aria-hidden="true" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
