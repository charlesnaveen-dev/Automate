import React, { useState } from 'react';
import { Inbox, GitFork, Zap, TrendingUp, ChevronRight } from 'lucide-react';
import './HowItWorksTogether.css';

const STAGES = [
  {
    id: 'capture',
    num: '01',
    name: 'Capture',
    subtitle: 'Multichannel Intake',
    desc: 'Ingests messages, calls, documents and forms into clean, structured data.',
    icon: Inbox,
    details: 'Incoming customer signals and documents are immediately converted into validated, structured records.',
  },
  {
    id: 'automate',
    num: '02',
    name: 'Automate',
    subtitle: 'Routing & Validation',
    desc: 'Validates business rules, coordinates APIs and connects workflows across tools.',
    icon: GitFork,
    details: 'Custom business logic and validation pipelines ensure data consistency across your tool stack.',
  },
  {
    id: 'execute',
    num: '03',
    name: 'Execute',
    subtitle: 'Autonomous Action & Governance',
    desc: 'Deploys AI agents and voice systems to perform tasks with human oversight.',
    icon: Zap,
    details: 'Automations execute reliably within preset boundaries, escalating sensitive exceptions to your team.',
  },
  {
    id: 'grow',
    num: '04',
    name: 'Grow',
    subtitle: 'Continuous Optimization',
    desc: 'Tracks operational telemetry to uncover new efficiency gains over time.',
    icon: TrendingUp,
    details: 'Ongoing execution telemetry reveals bottlenecks and highlights new automation opportunities.',
  },
];

export default function HowItWorksTogether() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  return (
    <section className="how-it-works-section" id="how-it-works">
      {/* Background ambient lighting */}
      <div className="how-bg-glow" aria-hidden="true" />

      <div className="container">
        <div className="how-split-layout">
          {/* ------------------------------------------------------------------
              LEFT COLUMN: Editorial Narrative & Interactive Stage Selector
              ------------------------------------------------------------------ */}
          <div className="how-left-col reveal-on-scroll">
            <div className="how-eyebrow-pill">
              <span className="how-eyebrow-dot" />
              <span className="how-eyebrow-text">INTEGRATED EXECUTION</span>
            </div>

            <h2 className="how-main-title">
              How It All <br />
              <span className="how-title-accent">Works Together.</span>
            </h2>

            <p className="how-main-desc">
              Rather than isolated bots or fragmented point solutions, Hutomate unites ingestion, intelligent decision-making, automated orchestration, and self-improving execution into one continuous, reliable loop.
            </p>

            {/* Interactive Stage Selector List */}
            <div className="how-stages-selector" role="tablist" aria-label="Workflow Stages">
              {STAGES.map((stage, idx) => {
                const IconComp = stage.icon;
                const isActive = activeStageIndex === idx;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`stage-panel-${stage.id}`}
                    className={`how-stage-tab ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveStageIndex(idx)}
                  >
                    <div className="how-tab-indicator">
                      <IconComp size={15} className="how-tab-icon" />
                    </div>

                    <div className="how-tab-text-wrap">
                      <div className="how-tab-heading-row">
                        <span className="how-tab-name">{stage.num} — {stage.name}</span>
                        <span className="how-tab-subtitle">{stage.subtitle}</span>
                      </div>
                      {isActive && (
                        <p className="how-tab-active-details">{stage.details}</p>
                      )}
                    </div>

                    <ChevronRight size={16} className="how-tab-chevron" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ------------------------------------------------------------------
              RIGHT COLUMN: Flowing Animated Curved SVG Path & Stages
              ------------------------------------------------------------------ */}
          <div className="how-right-col reveal-on-scroll reveal-delay-2">
            <div className="how-visual-canvas">
              {/* SVG Canvas with Flowing Bezier Path */}
              <svg
                className="how-flow-svg"
                viewBox="0 0 600 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Active glowing path gradient */}
                  <linearGradient id="flowPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#167C80" stopOpacity="0.8" />
                    <stop offset="35%" stopColor="#22ABB0" stopOpacity="1" />
                    <stop offset="70%" stopColor="#83DDE2" stopOpacity="1" />
                    <stop offset="100%" stopColor="#167C80" stopOpacity="0.8" />
                  </linearGradient>

                  {/* Soft glow filter for active path & pulse */}
                  <filter id="flowGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="nodeHaloGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background Track Path */}
                <path
                  d="M 95 85 C 270 85, 450 110, 485 195 C 520 280, 240 270, 115 345 C 10 410, 280 465, 485 465"
                  stroke="#E2EAEC"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  fill="none"
                />

                {/* Animated Primary Flowing Path */}
                <path
                  id="primaryCurvedFlowPath"
                  d="M 95 85 C 270 85, 450 110, 485 195 C 520 280, 240 270, 115 345 C 10 410, 280 465, 485 465"
                  stroke="url(#flowPathGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#flowGlowFilter)"
                />

                {/* Flowing Pulse Light Particle 1 */}
                <circle r="4.5" fill="#FFFFFF" filter="url(#flowGlowFilter)">
                  <animateMotion
                    path="M 95 85 C 270 85, 450 110, 485 195 C 520 280, 240 270, 115 345 C 10 410, 280 465, 485 465"
                    dur="5.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Flowing Pulse Light Particle 2 (Staggered offset) */}
                <circle r="3" fill="#83DDE2">
                  <animateMotion
                    path="M 95 85 C 270 85, 450 110, 485 195 C 520 280, 240 270, 115 345 C 10 410, 280 465, 485 465"
                    dur="5.5s"
                    begin="2.75s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Node 1 Anchor Ring (Capture: 95, 85) */}
                <g className={`svg-node-anchor ${activeStageIndex === 0 ? 'is-active' : ''}`} transform="translate(95, 85)">
                  <circle r="22" className="svg-node-halo" fill="rgba(22, 124, 128, 0.12)" />
                  <circle r="14" fill="#FFFFFF" stroke="#167C80" strokeWidth="2.5" />
                  <circle r="5" fill="#167C80" />
                </g>

                {/* Node 2 Anchor Ring (Automate: 485, 195) */}
                <g className={`svg-node-anchor ${activeStageIndex === 1 ? 'is-active' : ''}`} transform="translate(485, 195)">
                  <circle r="22" className="svg-node-halo" fill="rgba(22, 124, 128, 0.12)" />
                  <circle r="14" fill="#FFFFFF" stroke="#167C80" strokeWidth="2.5" />
                  <circle r="5" fill="#167C80" />
                </g>

                {/* Node 3 Anchor Ring (Execute: 115, 345) */}
                <g className={`svg-node-anchor ${activeStageIndex === 2 ? 'is-active' : ''}`} transform="translate(115, 345)">
                  <circle r="22" className="svg-node-halo" fill="rgba(22, 124, 128, 0.12)" />
                  <circle r="14" fill="#FFFFFF" stroke="#167C80" strokeWidth="2.5" />
                  <circle r="5" fill="#167C80" />
                </g>

                {/* Node 4 Anchor Ring (Grow: 485, 465) */}
                <g className={`svg-node-anchor ${activeStageIndex === 3 ? 'is-active' : ''}`} transform="translate(485, 465)">
                  <circle r="22" className="svg-node-halo" fill="rgba(22, 124, 128, 0.12)" />
                  <circle r="14" fill="#FFFFFF" stroke="#167C80" strokeWidth="2.5" />
                  <circle r="5" fill="#167C80" />
                </g>
              </svg>

              {/* Four Responsive Stage Floating Badges Along The Flow */}
              <div className="how-floating-nodes-container">
                {STAGES.map((stage, idx) => {
                  const IconComp = stage.icon;
                  const isActive = activeStageIndex === idx;

                  return (
                    <div
                      key={stage.id}
                      className={`how-stage-card how-stage-card--${idx + 1} ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveStageIndex(idx)}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isActive}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveStageIndex(idx);
                        }
                      }}
                    >
                      <div className="how-card-head">
                        <div className="how-card-icon-wrap">
                          <IconComp size={16} />
                        </div>
                        <span className="how-card-badge">{stage.num}</span>
                        <h4 className="how-card-title">{stage.name}</h4>
                      </div>
                      <p className="how-card-desc">{stage.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
