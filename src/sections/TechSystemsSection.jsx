import React, { useState } from 'react';
import { Cpu, Globe, Database, Mic, GitBranch, UserCheck } from 'lucide-react';
import Button from '../components/Button';
import './TechSystemsSection.css';

const TECH_LAYERS = [
  {
    id: 'models',
    name: 'Foundation AI Models',
    desc: 'Domain-tuned LLMs & embedding models routed deterministically by reasoning complexity and latency budget.',
    icon: Cpu,
    pill: 'Inference Layer',
    details: 'Dynamic routing across private VPC models and enterprise frontier endpoints with strict zero-retention policies.',
  },
  {
    id: 'voice',
    name: 'Real-Time Voice Streaming',
    desc: 'Sub-350ms streaming speech synthesis, continuous transcription, and live turn-taking telephony engine.',
    icon: Mic,
    pill: 'Telephony Layer',
    details: 'Direct SIP trunk integration with calendar tool calling and automated audio session logging.',
  },
  {
    id: 'orchestration',
    name: 'Workflow Engines & Webhooks',
    desc: 'Fault-tolerant orchestration layers handling asynchronous webhook ingestion, schema validation, and retry queues.',
    icon: GitBranch,
    pill: 'Execution Layer',
    details: 'Atomic transactions with exponential backoff so business events are never lost during API downtimes.',
  },
  {
    id: 'connectors',
    name: 'Business App Connectors',
    desc: 'Production-tested REST, GraphQL, and webhook adapters for CRMs, billing systems, and messaging tools.',
    icon: Globe,
    pill: 'Integration Layer',
    details: 'Bidirectional sync across HubSpot, Salesforce, Slack, Gmail, Google Sheets, and custom enterprise databases.',
  },
  {
    id: 'data',
    name: 'Vector & Relational Storage',
    desc: 'Permission-filtered vector databases for grounded context retrieval (RAG) alongside encrypted operational logs.',
    icon: Database,
    pill: 'Knowledge Layer',
    details: 'Strict client data isolation with role-based access control and encrypted credential management.',
  },
  {
    id: 'governance',
    name: 'Human Oversight & Guardrails',
    desc: 'Confidence thresholds, output validators, and escalation consoles that keep humans in control of critical decisions.',
    icon: UserCheck,
    pill: 'Safety Layer',
    details: 'Automated halting and staff alerts whenever edge-case confidence falls below deterministic thresholds.',
  },
];

export default function TechSystemsSection() {
  const [activeLayerId, setActiveLayerId] = useState('orchestration');

  const activeLayer = TECH_LAYERS.find((l) => l.id === activeLayerId) || TECH_LAYERS[0];
  const ActiveIcon = activeLayer.icon;

  return (
    <section className="tech-systems-section" id="technology" aria-label="Technology & Systems">
      {/* Background atmospheric ambient bloom */}
      <div className="tech-bg-bloom-cyan" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="tech-header reveal-on-scroll">
          <div className="tech-eyebrow">
            <span className="tech-beacon" aria-hidden="true" />
            <span>ENGINEERING RIGOR</span>
          </div>
          <h2 className="tech-headline">
            Connected systems.{' '}
            <span className="tech-headline-accent">Thoughtful engineering.</span>
          </h2>
          <p className="tech-subhead">
            We don&apos;t assemble speculative AI demos. We combine proven enterprise models, robust workflow engines, and strict human guardrails into unified, resilient systems.
          </p>
        </div>

        {/* Interactive Architecture Canvas */}
        <div className="tech-canvas-grid reveal-on-scroll">
          {/* Left: 6 Layer Selector Cards */}
          <div className="tech-layers-rail" role="tablist">
            {TECH_LAYERS.map((layer) => {
              const Icon = layer.icon;
              const isActive = layer.id === activeLayerId;
              return (
                <button
                  key={layer.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`tech-layer-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveLayerId(layer.id)}
                >
                  <div className="layer-card-left">
                    <div className="layer-icon-box" aria-hidden="true">
                      <Icon size={16} />
                    </div>
                    <div className="layer-text-wrap">
                      <span className="layer-name">{layer.name}</span>
                      <span className="layer-pill">{layer.pill}</span>
                    </div>
                  </div>
                  {isActive && <div className="layer-active-indicator" aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          {/* Right: Technical Architecture Console */}
          <div className="tech-console-display" aria-label={`Technical Architecture: ${activeLayer.name}`}>
            <div className="tech-console-top">
              <div className="console-layer-header">
                <div className="console-layer-icon" aria-hidden="true">
                  <ActiveIcon size={20} />
                </div>
                <div>
                  <span className="console-layer-tag">{activeLayer.pill}</span>
                  <h3 className="console-layer-title">{activeLayer.name}</h3>
                </div>
              </div>
              <div className="console-status-live">
                <span className="live-dot" aria-hidden="true" />
                <span>ARCHITECTURAL SPECIFICATION</span>
              </div>
            </div>

            <p className="console-layer-desc">{activeLayer.desc}</p>
            <p className="console-layer-details">{activeLayer.details}</p>

            {/* Architecture Connections Diagram */}
            <div className="architecture-schematic">
              <span className="schematic-label">SYSTEM INTERCONNECTIVITY</span>
              <div className="schematic-flow">
                <div className="schematic-node node--input">
                  <span>Operational Trigger</span>
                </div>
                <div className="schematic-connector">
                  <span className="connector-line" />
                  <span className="connector-pulse" />
                </div>
                <div className="schematic-node node--core">
                  <span>{activeLayer.name}</span>
                </div>
                <div className="schematic-connector">
                  <span className="connector-line" />
                  <span className="connector-pulse" />
                </div>
                <div className="schematic-node node--output">
                  <span>Verified Execution</span>
                </div>
              </div>
            </div>

            <div className="console-cta-row">
              <Button variant="cinematic-primary" size="md" arrow href="/process">
                Explore Implementation Process
              </Button>
              <Button variant="cinematic-secondary" size="md" href="/contact">
                Discuss Your Architecture
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
