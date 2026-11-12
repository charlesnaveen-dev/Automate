import React, { useState } from 'react';
import {
  Bot,
  GitBranch,
  Mic,
  Cpu,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from '../router/Router';
import AgentArchitectureDiagram from '../components/diagrams/AgentArchitectureDiagram';
import WorkflowProcessDiagram from '../components/diagrams/WorkflowProcessDiagram';
import VoiceIntelligenceDiagram from '../components/diagrams/VoiceIntelligenceDiagram';
import CustomSystemArchitectureDiagram from '../components/diagrams/CustomSystemArchitectureDiagram';
import './CapabilitiesSection.css';

const CAPABILITIES = [
  {
    id: 'ai-agents',
    num: '01',
    title: 'AI Agents',
    categoryBadge: 'AUTONOMOUS REASONING & EXECUTION',
    tagline: 'Intelligent systems that interpret context, make decisions, and execute tasks.',
    overview:
      'Deploy intelligent software agents that interpret customer requests, query internal knowledge bases, interface with business software, and execute authorized multi-step actions with human oversight checkpoints.',
    features: [
      'Grounded enterprise context retrieval with zero hallucination',
      'Multi-tool and API invocation within permissioned boundaries',
      'Intelligent task triage, intent parsing, and execution',
      'Deterministic human approval checkpoints for critical operations',
    ],
    route: '/capabilities/ai-agents',
    icon: Bot,
    diagram: AgentArchitectureDiagram,
  },
  {
    id: 'workflow-automation',
    num: '02',
    title: 'Workflow Automation',
    categoryBadge: 'CONNECTED BUSINESS OPERATIONS',
    tagline: 'Connect your software stack. Eliminate manual data handoffs.',
    overview:
      'Unite fragmented applications into deterministic, event-driven pipelines. Move data in real time between your CRM, communications, booking calendars, and ERPs without manual effort.',
    features: [
      'Sub-second bidirectional synchronization across SaaS tools',
      'Conditional business logic routing and schema validation',
      'Automated error handling, retries, and audit logging',
      'Elimination of manual copy-paste administrative drag',
    ],
    route: '/capabilities/workflow-automation',
    icon: GitBranch,
    diagram: WorkflowProcessDiagram,
  },
  {
    id: 'voice-ai',
    num: '03',
    title: 'Voice AI',
    categoryBadge: 'CONVERSATIONAL TELEPHONY',
    tagline: 'Intelligent inbound and outbound telephony that never puts clients on hold.',
    overview:
      'Architect sub-300ms conversational voice agents that answer customer calls 24/7, qualify inquiries, negotiate calendar appointments, and warm-transfer complex callers to human specialists.',
    features: [
      'Ultra-low latency streaming neural speech recognition',
      'Real-time calendar negotiation and appointment booking',
      'Automatic call summarization and CRM contact updating',
      'Seamless human agent transfer with live context briefings',
    ],
    route: '/capabilities/voice-ai',
    icon: Mic,
    diagram: VoiceIntelligenceDiagram,
  },
  {
    id: 'custom-ai',
    num: '04',
    title: 'Custom AI Solutions',
    categoryBadge: 'PURPOSE-BUILT ENTERPRISE INTELLIGENCE',
    tagline: 'Proprietary intelligence engineered around your business model.',
    overview:
      'Develop private, domain-tuned models and specialized operational copilots deployed inside isolated VPC boundaries with strict zero-data-retention security guarantees.',
    features: [
      'Private VPC deployment with complete data sovereignty',
      'Domain-calibrated RAG engines over proprietary documentation',
      'Bespoke internal copilot applications for frontline operators',
      'Strict SOC-2 and HIPAA compliance readiness',
    ],
    route: '/capabilities/custom-ai-solutions',
    icon: Cpu,
    diagram: CustomSystemArchitectureDiagram,
  },
];

export default function CapabilitiesSection() {
  const [activeId, setActiveId] = useState('ai-agents');
  const activeCap = CAPABILITIES.find((c) => c.id === activeId) || CAPABILITIES[0];
  const ActiveDiagram = activeCap.diagram;

  return (
    <section className="capabilities-section" id="capabilities" aria-label="Core Capabilities">
      <div className="container">
        {/* Section Header */}
        <div className="capabilities-header reveal-on-scroll">
          <div className="capabilities-badge">
            <span className="capabilities-badge-dot" />
            <span className="capabilities-badge-text">CORE CAPABILITIES</span>
          </div>

          <h2 className="capabilities-headline">
            Engineered around the way your{' '}
            <span className="headline-teal-accent">business works.</span>
          </h2>

          <p className="capabilities-subtext">
            We replace manual administrative drag with four specialized automation pillars. Each system is custom-scoped, deterministic, and built on your existing software tools.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="capabilities-tabs-bar" role="tablist" aria-label="Capabilities Selection">
          {CAPABILITIES.map((cap) => {
            const IconComp = cap.icon;
            const isActive = activeId === cap.id;
            return (
              <button
                key={cap.id}
                type="button"
                role="tab"
                id={`home-cap-tab-${cap.id}`}
                aria-selected={isActive}
                aria-controls={`home-cap-panel-${cap.id}`}
                className={`capability-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveId(cap.id)}
              >
                <div className="tab-btn-top">
                  <span className="tab-num">{cap.num}</span>
                  <IconComp size={18} className="tab-icon" />
                </div>
                <div className="tab-title-text">{cap.title}</div>
                {isActive && <span className="tab-active-indicator" />}
              </button>
            );
          })}
        </div>

        {/* Active Capability Display Canvas */}
        <div
          className="capabilities-canvas"
          id={`home-cap-panel-${activeCap.id}`}
          role="tabpanel"
          aria-labelledby={`home-cap-tab-${activeCap.id}`}
        >
          <div className="cap-canvas-grid">
            {/* Left: Capability Content & Features */}
            <div className="cap-content-col">
              <div className="cap-category-pill">
                <span>{activeCap.categoryBadge}</span>
              </div>

              <h3 className="cap-active-title">{activeCap.title}</h3>
              <p className="cap-active-tagline">{activeCap.tagline}</p>
              <p className="cap-active-overview">{activeCap.overview}</p>

              <div className="cap-features-list">
                <span className="cap-features-heading">CORE SYSTEM CAPABILITIES</span>
                {activeCap.features.map((feat, idx) => (
                  <div key={idx} className="cap-feature-row">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="cap-action-row">
                <Button variant="primary" size="md" arrow href={activeCap.route}>
                  Deep Dive into {activeCap.title}
                </Button>
                <Button variant="secondary" size="md" href="/contact">
                  Assess Feasibility
                </Button>
              </div>
            </div>

            {/* Right: Real Purposeful Architecture Diagram */}
            <div className="cap-diagram-col">
              <div className="cap-diagram-canvas-wrap">
                <ActiveDiagram />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Capabilities Link Bar */}
        <div className="capabilities-footer-callout">
          <span>Looking to combine multiple capabilities into a unified operational pipeline?</span>
          <Link to="/capabilities" className="capabilities-explore-all">
            <span>Explore Complete Capabilities Architecture</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
