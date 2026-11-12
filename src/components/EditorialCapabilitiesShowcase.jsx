import React, { useState } from 'react';
import {
  Bot,
  Workflow,
  Mic,
  Cpu,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { CAPABILITIES_DATA } from '../data/capabilitiesData';
import AgentArchitectureDiagram from './diagrams/AgentArchitectureDiagram';
import WorkflowProcessDiagram from './diagrams/WorkflowProcessDiagram';
import VoiceIntelligenceDiagram from './diagrams/VoiceIntelligenceDiagram';
import CustomSystemArchitectureDiagram from './diagrams/CustomSystemArchitectureDiagram';
import Button from './Button';
import './EditorialCapabilitiesShowcase.css';

export default function EditorialCapabilitiesShowcase() {
  const [activeId, setActiveId] = useState('ai-agents');

  const activeCapability = CAPABILITIES_DATA.find((c) => c.id === activeId) || CAPABILITIES_DATA[0];

  const renderDiagram = (id) => {
    switch (id) {
      case 'ai-agents':
        return <AgentArchitectureDiagram />;
      case 'workflow-automation':
        return <WorkflowProcessDiagram />;
      case 'voice-ai':
        return <VoiceIntelligenceDiagram />;
      case 'custom-ai-solutions':
      case 'custom-ai':
        return <CustomSystemArchitectureDiagram />;
      default:
        return <AgentArchitectureDiagram />;
    }
  };

  const getIconForId = (id) => {
    switch (id) {
      case 'ai-agents':
        return Bot;
      case 'workflow-automation':
        return Workflow;
      case 'voice-ai':
        return Mic;
      case 'custom-ai-solutions':
      case 'custom-ai':
        return Cpu;
      default:
        return Bot;
    }
  };

  return (
    <div className="editorial-cap-showcase">
      {/* ----------------------------------------------------------------------
          1. Editorial Capability Selector Bar
          ---------------------------------------------------------------------- */}
      <div className="editorial-cap-nav-wrap">
        <div className="container">
          <div className="editorial-cap-tabs" role="tablist" aria-label="Core Capabilities">
            {CAPABILITIES_DATA.map((cap) => {
              const IconComp = getIconForId(cap.id);
              const isActive = activeId === cap.id;
              return (
                <button
                  key={cap.id}
                  type="button"
                  role="tab"
                  id={`tab-${cap.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${cap.id}`}
                  className={`editorial-cap-tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveId(cap.id)}
                >
                  <span className="editorial-tab-num">{cap.num}</span>
                  <div className="editorial-tab-text">
                    <span className="editorial-tab-title">
                      {cap.navTitle}
                      {IconComp && <IconComp size={14} className="editorial-tab-icon" />}
                    </span>
                    <span className="editorial-tab-sub">{cap.tagline}</span>
                  </div>
                  {isActive && <span className="editorial-tab-glow" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------
          2. Active Capability Content Canvas
          ---------------------------------------------------------------------- */}
      <div
        className="editorial-cap-panel"
        id={`panel-${activeCapability.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeCapability.id}`}
      >
        <div className="container">
          {/* Proposition Header */}
          <div className="editorial-panel-header reveal-on-scroll">
            <div className="editorial-badge-row">
              <span className="editorial-pill">
                <span className="editorial-pill-dot" />
                {activeCapability.heroBadge}
              </span>
              <span className="editorial-domain-index">{activeCapability.num} / 04</span>
            </div>

            <h2 className="editorial-panel-headline">{activeCapability.heroHeadline}</h2>
            <p className="editorial-panel-desc">{activeCapability.heroDescription}</p>

            {/* Metrics Ribbon */}
            <div className="editorial-metrics-ribbon">
              {activeCapability.heroMetrics?.map((m, idx) => (
                <div key={idx} className="editorial-metric-block">
                  <span className="editorial-metric-value">{m.value}</span>
                  <span className="editorial-metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bespoke Visual Storytelling Diagram (No fake dashboards!) */}
          <div className="editorial-diagram-section reveal-on-scroll">
            {renderDiagram(activeCapability.id)}
          </div>

          {/* Operational Problem Breakdown */}
          <div className="editorial-story-section reveal-on-scroll">
            <div className="editorial-section-intro">
              <span className="editorial-kicker">THE OPERATIONAL PROBLEM</span>
              <h3 className="editorial-section-title">{activeCapability.businessProblem?.lead}</h3>
            </div>

            <div className="editorial-challenges-grid">
              {activeCapability.businessProblem?.challenges?.map((ch, idx) => (
                <div key={idx} className="editorial-challenge-item">
                  <div className="editorial-challenge-header">
                    <AlertCircle size={18} className="editorial-alert-icon" />
                    <h4 className="editorial-challenge-title">{ch.title}</h4>
                  </div>
                  <p className="editorial-challenge-p">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What Hutomate Actually Builds */}
          <div className="editorial-builds-section reveal-on-scroll">
            <div className="editorial-section-intro">
              <span className="editorial-kicker">WHAT HUTOMATE BUILDS</span>
              <h3 className="editorial-section-title">Engineered modules tailored to your operations</h3>
            </div>

            <div className="editorial-modules-grid">
              {activeCapability.whatWeBuild?.map((bld, idx) => {
                const IconComp = bld.icon || CheckCircle2;
                return (
                  <div key={idx} className="editorial-module-card">
                    <div className="editorial-module-icon">
                      <IconComp size={20} />
                    </div>
                    <h4 className="editorial-module-title">{bld.title}</h4>
                    <p className="editorial-module-desc">{bld.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action & Ecosystem Footer */}
          <div className="editorial-panel-footer reveal-on-scroll">
            <div className="editorial-ecosystem-block">
              <span className="editorial-eco-label">Supported Software &amp; APIs:</span>
              <div className="editorial-eco-pills">
                {activeCapability.integrations?.map((tool, idx) => (
                  <span key={idx} className="editorial-eco-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="editorial-action-block">
              <Button
                variant="primary"
                size="md"
                arrow
                href={activeCapability.route}
              >
                Explore {activeCapability.title} Technical Architecture
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="/contact"
              >
                Discuss Scoping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
