import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../router/Router';
import './CapabilitiesSection.css';

/**
 * 01 - AI Agents Visual
 * Layered translucent tilted cards with glowing central sparkle star
 * and subtle ethereal corner wave
 */
function AiAgentsVisual() {
  return (
    <div className="cap-visual-box cap-visual-box--agents" aria-hidden="true">
      <svg
        className="cap-svg cap-svg--agents"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="agentCardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#83DDE2" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient id="agentCardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#83DDE2" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="agentCardGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#83DDE2" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.45" />
          </linearGradient>
          <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Back layered card */}
        <g className="agent-layer agent-layer--back">
          <rect
            x="36"
            y="32"
            width="64"
            height="58"
            rx="14"
            transform="rotate(-18 68 61)"
            fill="url(#agentCardGrad1)"
            stroke="rgba(22, 124, 128, 0.3)"
            strokeWidth="1.2"
          />
        </g>

        {/* Middle layered card */}
        <g className="agent-layer agent-layer--mid">
          <rect
            x="48"
            y="26"
            width="64"
            height="58"
            rx="14"
            transform="rotate(-8 80 55)"
            fill="url(#agentCardGrad2)"
            stroke="rgba(22, 124, 128, 0.5)"
            strokeWidth="1.2"
          />
        </g>

        {/* Front layered card */}
        <g className="agent-layer agent-layer--front">
          <rect
            x="60"
            y="22"
            width="64"
            height="58"
            rx="14"
            transform="rotate(4 92 51)"
            fill="url(#agentCardGrad3)"
            stroke="rgba(22, 124, 128, 0.85)"
            strokeWidth="1.4"
          />
          {/* Glowing central four-pointed sparkle star */}
          <g transform="translate(93, 51)" className="agent-sparkle">
            <path
              d="M 0 -13 C 1 -4 4 -1 13 0 C 4 1 1 4 0 13 C -1 4 -4 1 -13 0 C -4 -1 -1 -4 0 -13 Z"
              fill="#FFFFFF"
              stroke="#167C80"
              strokeWidth="0.8"
              filter="url(#starGlow)"
            />
            <circle cx="0" cy="0" r="2.5" fill="#167C80" />
          </g>
        </g>
      </svg>
    </div>
  );
}

/**
 * 02 - Workflow Automation Visual
 * Three rounded node cubes with a smoothly curved connecting pipeline
 */
function WorkflowAutomationVisual() {
  return (
    <div className="cap-visual-box cap-visual-box--workflow" aria-hidden="true">
      <svg
        className="cap-svg cap-svg--workflow"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22ABB0" />
            <stop offset="100%" stopColor="#167C80" />
          </linearGradient>
          <filter id="nodeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#167C80" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Connecting pipeline path */}
        <path
          className="workflow-path"
          d="M 46 72 H 66 Q 78 72 78 60 V 46 Q 78 34 90 34 H 108"
          stroke="#167C80"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Traveling signal pulse */}
        <circle className="workflow-pulse-dot" r="3.5" fill="#83DDE2">
          <animateMotion
            path="M 46 72 H 66 Q 78 72 78 60 V 46 Q 78 34 90 34 H 108"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Node 1 (Lower Left) */}
        <g className="workflow-node workflow-node--1" filter="url(#nodeGlow)">
          <rect x="24" y="60" width="24" height="24" rx="7" fill="url(#nodeGrad)" />
          <circle cx="36" cy="72" r="3" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Node 2 (Upper Middle) */}
        <g className="workflow-node workflow-node--2" filter="url(#nodeGlow)">
          <rect x="74" y="22" width="24" height="24" rx="7" fill="url(#nodeGrad)" />
          <circle cx="86" cy="34" r="3" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Connector from Node 2 to Node 3 */}
        <path
          d="M 98 34 H 112"
          stroke="#167C80"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Node 3 (Upper Right) */}
        <g className="workflow-node workflow-node--3" filter="url(#nodeGlow)">
          <rect x="112" y="22" width="24" height="24" rx="7" fill="url(#nodeGrad)" />
          <circle cx="124" cy="34" r="3" fill="#FFFFFF" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

/**
 * 03 - Voice AI Visual
 * Elegant symmetrical vertical audio waveform bars
 */
function VoiceAiVisual() {
  return (
    <div className="cap-visual-box cap-visual-box--voice" aria-hidden="true">
      <svg
        className="cap-svg cap-svg--voice"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22ABB0" />
            <stop offset="100%" stopColor="#167C80" />
          </linearGradient>
          <filter id="voiceGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#167C80" floodOpacity="0.2" />
          </filter>
        </defs>

        <g className="voice-wave-group" filter="url(#voiceGlow)">
          {/* Bar 1 (Short Left) */}
          <rect className="voice-bar voice-bar--1" x="38" y="52" width="6" height="16" rx="3" fill="url(#waveBarGrad)" />

          {/* Bar 2 (Mid-Short Left) */}
          <rect className="voice-bar voice-bar--2" x="52" y="44" width="6" height="32" rx="3" fill="url(#waveBarGrad)" />

          {/* Bar 3 (Mid-Tall Left) */}
          <rect className="voice-bar voice-bar--3" x="66" y="36" width="6" height="48" rx="3" fill="url(#waveBarGrad)" />

          {/* Bar 4 (Tall Center) */}
          <rect className="voice-bar voice-bar--4" x="80" y="28" width="6" height="64" rx="3" fill="url(#waveBarGrad)" />

          {/* Bar 5 (Mid-Tall Right) */}
          <rect className="voice-bar voice-bar--5" x="94" y="36" width="6" height="48" rx="3" fill="url(#waveBarGrad)" />

          {/* Bar 6 (Mid-Short Right) */}
          <rect className="voice-bar voice-bar--6" x="108" y="44" width="6" height="32" rx="3" fill="url(#waveBarGrad)" />

          {/* Bar 7 (Short Right) */}
          <rect className="voice-bar voice-bar--7" x="122" y="52" width="6" height="16" rx="3" fill="url(#waveBarGrad)" />
        </g>
      </svg>
    </div>
  );
}

/**
 * 04 - Custom AI Solutions Visual
 * Layered geometric isometric glass plates stacked with elevation
 */
function CustomAiVisual() {
  return (
    <div className="cap-visual-box cap-visual-box--custom" aria-hidden="true">
      <svg
        className="cap-svg cap-svg--custom"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="isoGradBottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#167C80" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0B3038" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="isoGradMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22ABB0" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="isoGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#83DDE2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.6" />
          </linearGradient>
          <filter id="plateShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#071923" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* Base shadow */}
        <ellipse cx="82" cy="94" rx="42" ry="16" fill="rgba(11, 48, 56, 0.12)" />

        {/* Bottom Plate */}
        <g className="iso-plate iso-plate--bottom" filter="url(#plateShadow)">
          <path
            d="M 82 62 L 122 80 L 82 98 L 42 80 Z"
            fill="url(#isoGradBottom)"
            stroke="rgba(22, 124, 128, 0.4)"
            strokeWidth="1.2"
          />
        </g>

        {/* Middle Plate */}
        <g className="iso-plate iso-plate--mid" filter="url(#plateShadow)">
          <path
            d="M 82 48 L 122 66 L 82 84 L 42 66 Z"
            fill="url(#isoGradMid)"
            stroke="rgba(34, 171, 176, 0.6)"
            strokeWidth="1.2"
          />
        </g>

        {/* Top Plate */}
        <g className="iso-plate iso-plate--top" filter="url(#plateShadow)">
          <path
            d="M 82 34 L 122 52 L 82 70 L 42 52 Z"
            fill="url(#isoGradTop)"
            stroke="rgba(131, 221, 226, 0.95)"
            strokeWidth="1.4"
          />
          {/* Subtle highlight sheen */}
          <path
            d="M 82 37 L 115 52 L 82 67 L 49 52 Z"
            fill="rgba(255, 255, 255, 0.25)"
          />
        </g>
      </svg>
    </div>
  );
}

const CAPABILITIES = [
  {
    num: '01',
    title: 'AI Agents',
    description: 'Intelligent systems that understand, decide and execute tasks.',
    linkText: 'Explore AI Agents',
    route: '/capabilities/ai-agents',
    visual: <AiAgentsVisual />,
  },
  {
    num: '02',
    title: 'Workflow Automation',
    description: 'Connected processes that eliminate repetitive work and improve efficiency.',
    linkText: 'Explore Automation',
    route: '/capabilities/workflow-automation',
    visual: <WorkflowAutomationVisual />,
  },
  {
    num: '03',
    title: 'Voice AI',
    description: 'Natural conversations that turn into real actions across your business.',
    linkText: 'Explore Voice AI',
    route: '/capabilities/voice-ai',
    visual: <VoiceAiVisual />,
  },
  {
    num: '04',
    title: 'Custom AI Solutions',
    description: 'Purpose-built intelligence for your unique workflows, data and goals.',
    linkText: 'Explore Solutions',
    route: '/capabilities/custom-ai-solutions',
    visual: <CustomAiVisual />,
  },
];

export default function CapabilitiesSection() {
  // Shared active selection state (null by default so all 4 cards start in normal white state)
  const [activeCardNum, setActiveCardNum] = useState(null);
  const [hoveredCardNum, setHoveredCardNum] = useState(null);
  const [focusedCardNum, setFocusedCardNum] = useState(null);

  const handleCardClick = (num, e) => {
    // If clicking directly on the exploration link, allow normal navigation
    if (e.target.closest('.cap-card-link-wrap')) {
      return;
    }
    // Clicking the card toggles active state: click active card resets to null
    e.preventDefault();
    setActiveCardNum((prev) => (prev === num ? null : num));
  };

  const handleKeyDown = (num, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.target === e.currentTarget) {
        e.preventDefault();
        setActiveCardNum((prev) => (prev === num ? null : num));
      }
    }
  };

  return (
    <section className="cap-showcase-section" id="capabilities">
      {/* Decorative flowing teal wave along the bottom */}
      <div className="cap-bg-wave-wrap" aria-hidden="true">
        <svg
          className="cap-bg-wave-svg"
          viewBox="0 0 1440 280"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradLeft" x1="0%" y1="100%" x2="70%" y2="0%">
              <stop offset="0%" stopColor="#167C80" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#83DDE2" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#83DDE2" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGradRight" x1="100%" y1="100%" x2="30%" y2="0%">
              <stop offset="0%" stopColor="#167C80" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#83DDE2" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#83DDE2" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Left flowing organic wave ribbon */}
          <path
            d="M -60 280 C 120 220 280 250 480 210 C 680 170 820 240 1000 280 Z"
            fill="url(#waveGradLeft)"
          />

          {/* Right sweeping translucent teal wave ribbon */}
          <path
            d="M 500 280 C 720 210 940 160 1140 190 C 1280 210 1380 140 1500 80 L 1500 280 Z"
            fill="url(#waveGradRight)"
          />
        </svg>
      </div>

      <div className="container cap-showcase-container">
        {/* Section Header */}
        <div className="cap-header-center">
          <div className="cap-eyebrow-pill">
            <span className="cap-eyebrow-dot" />
            <span className="cap-eyebrow-text">CORE CAPABILITIES</span>
          </div>

          <h2 className="cap-main-heading">
            Engineered around the <br className="cap-heading-br" />
            way your <span className="cap-highlight-text">business works.</span>
          </h2>

          <p className="cap-main-desc">
            Four specialised capabilities that bring intelligence, automation and execution together — built around your business, not a generic playbook.
          </p>
        </div>

        {/* Four Cards Grid */}
        <div className="cap-cards-row" onMouseLeave={() => setHoveredCardNum(null)}>
          {CAPABILITIES.map((cap) => {
            const isHovered = hoveredCardNum === cap.num;
            const isFocused = focusedCardNum === cap.num;
            const isActive = activeCardNum === cap.num;
            // Hover or focus highlights the card; when nothing is hovered/focused, active clicked card remains highlighted
            const isHighlighted = isHovered || isFocused || (hoveredCardNum === null && focusedCardNum === null && isActive);

            return (
              <div
                key={cap.num}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={`${cap.title} capability. Click to toggle active preview.`}
                onClick={(e) => handleCardClick(cap.num, e)}
                onKeyDown={(e) => handleKeyDown(cap.num, e)}
                onMouseEnter={() => setHoveredCardNum(cap.num)}
                onFocus={() => setFocusedCardNum(cap.num)}
                onBlur={() => setFocusedCardNum(null)}
                className={`cap-panel-card ${
                  isHighlighted
                    ? 'cap-panel-card--active cap-panel-card--dark'
                    : 'cap-panel-card--light'
                }`}
              >
                {/* Dynamic ethereal ambient glow & corner ribbon for the highlighted card */}
                <div
                  className={`cap-dark-ambient-wave ${isHighlighted ? 'is-visible' : ''}`}
                  aria-hidden="true"
                />
                <svg
                  className={`cap-dark-corner-wave ${isHighlighted ? 'is-visible' : ''}`}
                  viewBox="0 0 160 100"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id={`activeWaveGrad-${cap.num}`} x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#167C80" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#83DDE2" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#83DDE2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 40 100 C 80 90 115 70 138 40 C 148 26 154 14 160 0 L 160 100 Z"
                    fill={`url(#activeWaveGrad-${cap.num})`}
                  />
                  <path
                    d="M 30 100 C 75 92 112 72 136 42 C 145 30 152 16 160 4"
                    stroke="#83DDE2"
                    strokeWidth="1.5"
                    strokeOpacity="0.55"
                    fill="none"
                  />
                </svg>

                {/* Top Row: Capability Number */}
                <div className="cap-card-top">
                  <span className="cap-card-num">{cap.num}</span>
                </div>

                {/* Bespoke Illustration Area */}
                <div className="cap-card-visual-wrapper">
                  {cap.visual}
                </div>

                {/* Bottom Content: Heading, Description & Link */}
                <div className="cap-card-body">
                  <h3 className="cap-card-title">{cap.title}</h3>
                  <p className="cap-card-desc">{cap.description}</p>
                  <Link
                    to={cap.route}
                    className="cap-card-link-wrap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="cap-card-link-text">{cap.linkText}</span>
                    <ArrowRight size={15} className="cap-card-link-arrow" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
