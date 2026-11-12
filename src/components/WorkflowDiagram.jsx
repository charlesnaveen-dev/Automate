import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Globe, Bot, GitBranch, Mic, Cpu } from 'lucide-react';
import { BrandSymbol } from './Header';
import './WorkflowDiagram.css';

const INCOMING_CHANNELS = [
  {
    id: 'emails',
    label: 'Emails',
    sublabel: 'Inbound & triage',
    pill: 'Direct & API',
    Icon: Mail,
    color: '#4389F5',
    lightBg: 'rgba(67, 137, 245, 0.1)',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    sublabel: 'Customer messaging',
    pill: '24/7 Webhooks',
    Icon: MessageSquare,
    color: '#25A86A',
    lightBg: 'rgba(37, 168, 106, 0.1)',
  },
  {
    id: 'phone',
    label: 'Phone Calls',
    sublabel: 'Voice streams',
    pill: 'Live Audio',
    Icon: Phone,
    color: '#E89A42',
    lightBg: 'rgba(232, 154, 66, 0.1)',
  },
  {
    id: 'website',
    label: 'Website Leads',
    sublabel: 'Forms & enquiries',
    pill: 'Instant Capture',
    Icon: Globe,
    color: '#167C80',
    lightBg: 'rgba(118, 87, 232, 0.1)',
  },
];

const CORE_SERVICES = [
  {
    id: 'ai-agents',
    label: 'AI Agents',
    sublabel: 'Autonomous Decisions & Tasks',
    pill: 'Reasoning',
    Icon: Bot,
    color: '#167C80',
    lightBg: 'rgba(118, 87, 232, 0.1)',
  },
  {
    id: 'workflow-auto',
    label: 'Workflow Automation',
    sublabel: 'End-to-End System Sync',
    pill: 'Orchestration',
    Icon: GitBranch,
    color: '#25A86A',
    lightBg: 'rgba(37, 168, 106, 0.1)',
  },
  {
    id: 'voice-ai',
    label: 'Voice AI',
    sublabel: 'Natural Voice & Call Handling',
    pill: 'Conversational',
    Icon: Mic,
    color: '#4389F5',
    lightBg: 'rgba(67, 137, 245, 0.1)',
  },
  {
    id: 'custom-ai',
    label: 'Custom AI Solutions',
    sublabel: 'Bespoke Model Architecture',
    pill: 'Tailored',
    Icon: Cpu,
    color: '#E89A42',
    lightBg: 'rgba(232, 154, 66, 0.1)',
  },
];

export default function WorkflowDiagram() {
  const [activeHoverNode, setActiveHoverNode] = useState(null);

  return (
    <div
      className="workflow-diagram"
      aria-label="Connected workflow architecture diagram showing incoming business channels transforming through Hutomate into autonomous intelligent capabilities"
    >
      {/* =======================================================================
          DESKTOP CONNECTED FLOW (>= 1024px)
          ======================================================================= */}
      <div className="diagram-desktop-stage">
        {/* Left Column: 4 Incoming Business Channels */}
        <div className="diagram-col diagram-col-left">
          <div className="col-header-tag">
            <span className="col-tag-dot col-tag-dot-in" />
            <span>INCOMING CHANNELS</span>
          </div>

          <div className="nodes-vertical-stack">
            {INCOMING_CHANNELS.map((channel) => {
              const { Icon } = channel;
              const isHovered = activeHoverNode === channel.id;
              return (
                <div
                  key={channel.id}
                  className={`wf-node-card wf-node-left wf-node-${channel.id} ${
                    isHovered ? 'is-active-hover' : ''
                  }`}
                  onMouseEnter={() => setActiveHoverNode(channel.id)}
                  onMouseLeave={() => setActiveHoverNode(null)}
                  data-node-id={channel.id}
                >
                  <div
                    className="wf-icon-box"
                    style={{ backgroundColor: channel.lightBg, color: channel.color }}
                  >
                    <Icon size={17} strokeWidth={2.2} />
                  </div>
                  <div className="wf-node-meta">
                    <div className="wf-title-row">
                      <span className="wf-node-name">{channel.label}</span>
                      <span className="wf-micro-pill">{channel.pill}</span>
                    </div>
                    <span className="wf-node-desc">{channel.sublabel}</span>
                  </div>
                  {/* Docking connection port */}
                  <span
                    className="wf-anchor-port port-right"
                    style={{
                      borderColor: channel.color,
                      backgroundColor: isHovered ? channel.color : '#FFFFFF',
                    }}
                  >
                    <span
                      className="wf-port-radar"
                      style={{ borderColor: channel.color }}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Left SVG Conduits: Left Channels -> Engine Ingress */}
        <div className="diagram-conduit-left" aria-hidden="true">
          <svg
            className="wf-conduit-svg"
            viewBox="0 0 160 280"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="inGrad0" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4389F5" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#167C80" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="inGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#25A86A" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#167C80" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="inGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E89A42" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#167C80" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="inGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#167C80" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#167C80" stopOpacity="0.9" />
              </linearGradient>

              <filter id="energyGlowLeft" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Inbound Rail Paths */}
            <path
              d="M 0 50 C 70 50, 100 140, 160 140"
              className={`conduit-wire ${activeHoverNode === 'emails' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'emails' ? '#4389F5' : 'url(#inGrad0)'}
              strokeWidth={activeHoverNode === 'emails' ? '2.5' : '1.5'}
              strokeOpacity={activeHoverNode && activeHoverNode !== 'emails' ? '0.25' : '0.7'}
            />
            <path
              d="M 0 110 C 60 110, 110 140, 160 140"
              className={`conduit-wire ${activeHoverNode === 'whatsapp' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'whatsapp' ? '#25A86A' : 'url(#inGrad1)'}
              strokeWidth={activeHoverNode === 'whatsapp' ? '2.5' : '1.5'}
              strokeOpacity={activeHoverNode && activeHoverNode !== 'whatsapp' ? '0.25' : '0.7'}
            />
            <path
              d="M 0 170 C 60 170, 110 140, 160 140"
              className={`conduit-wire ${activeHoverNode === 'phone' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'phone' ? '#E89A42' : 'url(#inGrad2)'}
              strokeWidth={activeHoverNode === 'phone' ? '2.5' : '1.5'}
              strokeOpacity={activeHoverNode && activeHoverNode !== 'phone' ? '0.25' : '0.7'}
            />
            <path
              d="M 0 230 C 70 230, 100 140, 160 140"
              className={`conduit-wire ${activeHoverNode === 'website' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'website' ? '#167C80' : 'url(#inGrad3)'}
              strokeWidth={activeHoverNode === 'website' ? '2.5' : '1.5'}
              strokeOpacity={activeHoverNode && activeHoverNode !== 'website' ? '0.25' : '0.7'}
            />

            {/* Inbound Traveling Photon Energy Beacons */}
            <circle r="3" fill="#4389F5" filter="url(#energyGlowLeft)">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                path="M 0 50 C 70 50, 100 140, 160 140"
              />
            </circle>
            <circle r="3" fill="#25A86A" filter="url(#energyGlowLeft)">
              <animateMotion
                dur="2.8s"
                begin="0.6s"
                repeatCount="indefinite"
                path="M 0 110 C 60 110, 110 140, 160 140"
              />
            </circle>
            <circle r="3" fill="#E89A42" filter="url(#energyGlowLeft)">
              <animateMotion
                dur="2.6s"
                begin="1.2s"
                repeatCount="indefinite"
                path="M 0 170 C 60 170, 110 140, 160 140"
              />
            </circle>
            <circle r="3" fill="#167C80" filter="url(#energyGlowLeft)">
              <animateMotion
                dur="2.7s"
                begin="1.8s"
                repeatCount="indefinite"
                path="M 0 230 C 70 230, 100 140, 160 140"
              />
            </circle>
          </svg>
        </div>

        {/* Central Core: Commanding Hutomate Engine */}
        <div className="diagram-col diagram-col-center">
          <div className="core-engine-module">
            {/* Concentric Telemetry Orbit Rings */}
            <div className="core-orbit-ring ring-outer-dashed" aria-hidden="true">
              <span className="orbit-satellite sat-1" />
              <span className="orbit-satellite sat-2" />
              <span className="orbit-satellite sat-3" />
            </div>
            <div className="core-orbit-ring ring-mid-precision" aria-hidden="true">
              <span className="radar-crosshair crosshair-n" />
              <span className="radar-crosshair crosshair-e" />
              <span className="radar-crosshair crosshair-s" />
              <span className="radar-crosshair crosshair-w" />
            </div>
            <div className="core-ambient-aura" aria-hidden="true" />

            {/* Core Card Body */}
            <div className="core-card-body">
              {/* Ingress & Egress Precision Ports */}
              <div className="core-dock-port port-ingress" aria-hidden="true">
                <span className="dock-blip-pulse" />
                <span className="dock-blip-core" />
              </div>
              <div className="core-dock-port port-egress" aria-hidden="true">
                <span className="dock-blip-pulse" />
                <span className="dock-blip-core" />
              </div>

              {/* Status Pill */}
              <div className="core-status-pill">
                <span className="core-status-beacon" />
                <span className="core-status-text">Autonomous Core</span>
              </div>

              {/* Brand Symbol inside illuminated lens */}
              <div className="core-symbol-frame">
                <div className="core-symbol-glow" />
                <BrandSymbol size={32} />
              </div>

              {/* Title & Tagline */}
              <div className="core-title-block">
                <span className="core-engine-brand">Hutomate Engine</span>
                <span className="core-engine-tagline">Real-Time Autonomous Sync</span>
              </div>

              {/* 3-Step Live Processing Pipeline */}
              <div className="core-pipeline-tags">
                <span className="tag-step step-1">
                  <span className="step-num">1</span> Intake
                </span>
                <span className="step-arrow">→</span>
                <span className="tag-step step-2">
                  <span className="step-num">2</span> Reason
                </span>
                <span className="step-arrow">→</span>
                <span className="tag-step step-3">
                  <span className="step-num">3</span> Orchestrate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right SVG Conduits: Engine Egress -> Right Capabilities */}
        <div className="diagram-conduit-right" aria-hidden="true">
          <svg
            className="wf-conduit-svg"
            viewBox="0 0 160 280"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="outGrad0" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#167C80" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#167C80" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="outGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#167C80" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#25A86A" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="outGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#167C80" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4389F5" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="outGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#167C80" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E89A42" stopOpacity="0.8" />
              </linearGradient>

              <filter id="energyGlowRight" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outbound Rail Paths */}
            <path
              d="M 0 140 C 60 140, 90 50, 160 50"
              className={`conduit-wire ${activeHoverNode === 'ai-agents' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'ai-agents' ? '#167C80' : 'url(#outGrad0)'}
              strokeWidth={activeHoverNode === 'ai-agents' ? '2.5' : '1.5'}
              strokeOpacity={activeHoverNode && activeHoverNode !== 'ai-agents' ? '0.25' : '0.7'}
            />
            <path
              d="M 0 140 C 50 140, 100 110, 160 110"
              className={`conduit-wire ${activeHoverNode === 'workflow-auto' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'workflow-auto' ? '#25A86A' : 'url(#outGrad1)'}
              strokeWidth={activeHoverNode === 'workflow-auto' ? '2.5' : '1.5'}
              strokeOpacity={activeHoverNode && activeHoverNode !== 'workflow-auto' ? '0.25' : '0.7'}
            />
            <path
              d="M 0 140 C 50 140, 100 170, 160 170"
              className={`conduit-wire ${activeHoverNode === 'voice-ai' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'voice-ai' ? '#4389F5' : 'url(#outGrad2)'}
              strokeWidth={activeHoverNode === 'voice-ai' ? '2.5' : '1.5'}
              strokeOpacity={activeHoverNode && activeHoverNode !== 'voice-ai' ? '0.25' : '0.7'}
            />
            <path
              d="M 0 140 C 60 140, 90 230, 160 230"
              className={`conduit-wire ${activeHoverNode === 'custom-ai' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'custom-ai' ? '#E89A42' : 'url(#outGrad3)'}
              strokeWidth={activeHoverNode === 'custom-ai' ? '2.5' : '1.5'}
              strokeOpacity={activeHoverNode && activeHoverNode !== 'custom-ai' ? '0.25' : '0.7'}
            />

            {/* Outbound Traveling Photon Energy Beacons */}
            <circle r="3" fill="#167C80" filter="url(#energyGlowRight)">
              <animateMotion
                dur="2.4s"
                begin="0.3s"
                repeatCount="indefinite"
                path="M 0 140 C 60 140, 90 50, 160 50"
              />
            </circle>
            <circle r="3" fill="#25A86A" filter="url(#energyGlowRight)">
              <animateMotion
                dur="2.5s"
                begin="0.9s"
                repeatCount="indefinite"
                path="M 0 140 C 50 140, 100 110, 160 110"
              />
            </circle>
            <circle r="3" fill="#4389F5" filter="url(#energyGlowRight)">
              <animateMotion
                dur="2.6s"
                begin="1.5s"
                repeatCount="indefinite"
                path="M 0 140 C 50 140, 100 170, 160 170"
              />
            </circle>
            <circle r="3" fill="#E89A42" filter="url(#energyGlowRight)">
              <animateMotion
                dur="2.7s"
                begin="2.1s"
                repeatCount="indefinite"
                path="M 0 140 C 60 140, 90 230, 160 230"
              />
            </circle>
          </svg>
        </div>

        {/* Right Column: 4 Autonomous Hutomate Capabilities */}
        <div className="diagram-col diagram-col-right">
          <div className="col-header-tag">
            <span className="col-tag-dot col-tag-dot-out" />
            <span>AUTONOMOUS CAPABILITIES</span>
          </div>

          <div className="nodes-vertical-stack">
            {CORE_SERVICES.map((service) => {
              const { Icon } = service;
              const isHovered = activeHoverNode === service.id;
              return (
                <a
                  key={service.id}
                  href="#services"
                  className={`wf-node-card wf-node-right wf-node-${service.id} ${
                    isHovered ? 'is-active-hover' : ''
                  }`}
                  onMouseEnter={() => setActiveHoverNode(service.id)}
                  onMouseLeave={() => setActiveHoverNode(null)}
                  data-node-id={service.id}
                >
                  {/* Docking connection port */}
                  <span
                    className="wf-anchor-port port-left"
                    style={{
                      borderColor: service.color,
                      backgroundColor: isHovered ? service.color : '#FFFFFF',
                    }}
                  >
                    <span
                      className="wf-port-radar"
                      style={{ borderColor: service.color }}
                      aria-hidden="true"
                    />
                  </span>
                  <div
                    className="wf-icon-box"
                    style={{ backgroundColor: service.lightBg, color: service.color }}
                  >
                    <Icon size={17} strokeWidth={2.2} />
                  </div>
                  <div className="wf-node-meta">
                    <div className="wf-title-row">
                      <span className="wf-node-name">{service.label}</span>
                      <span
                        className="wf-service-pill"
                        style={{
                          color: service.color,
                          backgroundColor: service.lightBg,
                          borderColor: `${service.color}40`,
                        }}
                      >
                        {service.pill}
                      </span>
                    </div>
                    <span className="wf-node-desc">{service.sublabel}</span>
                  </div>
                  <span
                    className="wf-accent-edge"
                    style={{ backgroundColor: service.color }}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* =======================================================================
          MOBILE RESPONSIVE WORKFLOW (<= 1023px)
          ======================================================================= */}
      <div className="diagram-mobile-stage" aria-label="Mobile workflow structure">
        {/* Step 1: Channels */}
        <div className="mobile-group">
          <div className="mobile-group-header">
            <span className="mobile-badge-index">01</span>
            <span className="mobile-group-title">Incoming Business Channels</span>
          </div>
          <div className="mobile-nodes-grid">
            {INCOMING_CHANNELS.map((ch) => {
              const { Icon } = ch;
              return (
                <div key={ch.id} className="mobile-node-tile">
                  <div
                    className="mobile-node-icon"
                    style={{ backgroundColor: ch.lightBg, color: ch.color }}
                  >
                    <Icon size={16} strokeWidth={2.2} />
                  </div>
                  <span className="mobile-node-text">{ch.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transition conduit */}
        <div className="mobile-flow-conduit" aria-hidden="true">
          <div className="mobile-flow-line" />
          <div className="mobile-pulse-particle" />
        </div>

        {/* Step 2: Hutomate Core */}
        <div className="mobile-core-card">
          <div className="core-status-pill">
            <span className="core-status-beacon" />
            <span>Autonomous Intelligence Core</span>
          </div>
          <div className="mobile-core-row">
            <div className="mobile-symbol-wrapper">
              <BrandSymbol size={28} />
            </div>
            <div className="mobile-core-text">
              <span className="mobile-core-name">Hutomate Engine</span>
              <span className="mobile-core-sub">Real-Time Autonomous Sync • India & USA</span>
            </div>
          </div>
        </div>

        {/* Transition conduit */}
        <div className="mobile-flow-conduit" aria-hidden="true">
          <div className="mobile-flow-line" />
          <div className="mobile-pulse-particle" />
        </div>

        {/* Step 3: Four Core Capabilities */}
        <div className="mobile-group">
          <div className="mobile-group-header">
            <span className="mobile-badge-index">02</span>
            <span className="mobile-group-title">Autonomous Services Delivered</span>
          </div>
          <div className="mobile-services-grid">
            {CORE_SERVICES.map((srv) => {
              const { Icon } = srv;
              return (
                <a
                  key={srv.id}
                  href="#services"
                  className="mobile-service-tile"
                  style={{ borderLeftColor: srv.color }}
                >
                  <div
                    className="mobile-node-icon"
                    style={{ backgroundColor: srv.lightBg, color: srv.color }}
                  >
                    <Icon size={16} strokeWidth={2.2} />
                  </div>
                  <div className="mobile-service-info">
                    <span className="mobile-service-name">{srv.label}</span>
                    <span className="mobile-service-sub">{srv.sublabel}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
