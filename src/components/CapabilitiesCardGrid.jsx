import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../router/Router';
import './CapabilitiesCardGrid.css';

/**
 * 01 - AI Agents Visual
 * Layered translucent tilted cards with glowing central sparkle star
 */
export function AiAgentsVisual() {
  return (
    <div className="cap-visual-box cap-visual-box--agents" aria-hidden="true">
      <svg
        className="cap-svg cap-svg--agents"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gridAgentGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#83DDE2" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient id="gridAgentGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#83DDE2" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="gridAgentGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#83DDE2" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.45" />
          </linearGradient>
          <filter id="gridStarGlow" x="-50%" y="-50%" width="200%" height="200%">
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
            fill="url(#gridAgentGrad1)"
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
            fill="url(#gridAgentGrad2)"
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
            fill="url(#gridAgentGrad3)"
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
              filter="url(#gridStarGlow)"
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
export function WorkflowAutomationVisual() {
  return (
    <div className="cap-visual-box cap-visual-box--workflow" aria-hidden="true">
      <svg
        className="cap-svg cap-svg--workflow"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gridNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22ABB0" />
            <stop offset="100%" stopColor="#167C80" />
          </linearGradient>
          <filter id="gridNodeGlow" x="-30%" y="-30%" width="160%" height="160%">
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
        <g className="workflow-node workflow-node--1" filter="url(#gridNodeGlow)">
          <rect x="24" y="60" width="24" height="24" rx="7" fill="url(#gridNodeGrad)" />
          <circle cx="36" cy="72" r="3" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Node 2 (Upper Middle) */}
        <g className="workflow-node workflow-node--2" filter="url(#gridNodeGlow)">
          <rect x="74" y="22" width="24" height="24" rx="7" fill="url(#gridNodeGrad)" />
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
        <g className="workflow-node workflow-node--3" filter="url(#gridNodeGlow)">
          <rect x="112" y="22" width="24" height="24" rx="7" fill="url(#gridNodeGrad)" />
          <circle cx="124" cy="34" r="3" fill="#FFFFFF" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

/**
 * 03 - Voice AI Visual
 * Symmetrical vertical audio waveform bars with hover animation
 */
export function VoiceAiVisual() {
  return (
    <div className="cap-visual-box cap-visual-box--voice" aria-hidden="true">
      <svg
        className="cap-svg cap-svg--voice"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gridWaveBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22ABB0" />
            <stop offset="100%" stopColor="#167C80" />
          </linearGradient>
          <filter id="gridVoiceGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#167C80" floodOpacity="0.2" />
          </filter>
        </defs>

        <g className="voice-wave-group" filter="url(#gridVoiceGlow)">
          <rect className="voice-bar voice-bar--1" x="38" y="52" width="6" height="16" rx="3" fill="url(#gridWaveBarGrad)" />
          <rect className="voice-bar voice-bar--2" x="52" y="44" width="6" height="32" rx="3" fill="url(#gridWaveBarGrad)" />
          <rect className="voice-bar voice-bar--3" x="66" y="36" width="6" height="48" rx="3" fill="url(#gridWaveBarGrad)" />
          <rect className="voice-bar voice-bar--4" x="80" y="28" width="6" height="64" rx="3" fill="url(#gridWaveBarGrad)" />
          <rect className="voice-bar voice-bar--5" x="94" y="36" width="6" height="48" rx="3" fill="url(#gridWaveBarGrad)" />
          <rect className="voice-bar voice-bar--6" x="108" y="44" width="6" height="32" rx="3" fill="url(#gridWaveBarGrad)" />
          <rect className="voice-bar voice-bar--7" x="122" y="52" width="6" height="16" rx="3" fill="url(#gridWaveBarGrad)" />
        </g>
      </svg>
    </div>
  );
}

/**
 * 04 - Custom AI Solutions Visual
 * Layered geometric isometric glass plates stacked with elevation
 */
export function CustomAiVisual() {
  return (
    <div className="cap-visual-box cap-visual-box--custom" aria-hidden="true">
      <svg
        className="cap-svg cap-svg--custom"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gridIsoGradBottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#167C80" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0B3038" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="gridIsoGradMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22ABB0" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gridIsoGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#83DDE2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#167C80" stopOpacity="0.6" />
          </linearGradient>
          <filter id="gridPlateShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#071923" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* Base shadow */}
        <ellipse cx="82" cy="94" rx="42" ry="16" fill="rgba(11, 48, 56, 0.12)" />

        {/* Bottom Plate */}
        <g className="iso-plate iso-plate--bottom" filter="url(#gridPlateShadow)">
          <path
            d="M 82 62 L 122 80 L 82 98 L 42 80 Z"
            fill="url(#gridIsoGradBottom)"
            stroke="rgba(22, 124, 128, 0.4)"
            strokeWidth="1.2"
          />
        </g>

        {/* Middle Plate */}
        <g className="iso-plate iso-plate--mid" filter="url(#gridPlateShadow)">
          <path
            d="M 82 48 L 122 66 L 82 84 L 42 66 Z"
            fill="url(#gridIsoGradMid)"
            stroke="rgba(34, 171, 176, 0.6)"
            strokeWidth="1.2"
          />
        </g>

        {/* Top Plate */}
        <g className="iso-plate iso-plate--top" filter="url(#gridPlateShadow)">
          <path
            d="M 82 34 L 122 52 L 82 70 L 42 52 Z"
            fill="url(#gridIsoGradTop)"
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

const CAPABILITIES_LIST = [
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

export default function CapabilitiesCardGrid() {
  return (
    <div className="cap-cards-grid-wrap">
      <div className="cap-cards-grid-row">
        {CAPABILITIES_LIST.map((cap) => (
          <Link
            key={cap.num}
            to={cap.route}
            className="cap-overview-card"
            aria-label={`${cap.title} — ${cap.linkText}`}
          >
            {/* Dynamic ethereal ambient glow & corner ribbon on hover/focus */}
            <div className="cap-dark-ambient-wave" aria-hidden="true" />
            <svg
              className="cap-dark-corner-wave"
              viewBox="0 0 160 100"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id={`gridActiveWaveGrad-${cap.num}`} x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#167C80" stopOpacity="0.45" />
                  <stop offset="60%" stopColor="#83DDE2" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#83DDE2" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 40 100 C 80 90 115 70 138 40 C 148 26 154 14 160 0 L 160 100 Z"
                fill={`url(#gridActiveWaveGrad-${cap.num})`}
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
              <div className="cap-card-link-wrap">
                <span className="cap-card-link-text">{cap.linkText}</span>
                <ArrowRight size={15} className="cap-card-link-arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
