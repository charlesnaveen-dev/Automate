import React from 'react';
import { RefreshCw, GitBranch, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import './DiagramStyles.css';

/**
 * Clean Conceptual Process Flow Diagram for Workflow Automation
 * Visualizes deterministic, event-driven pipelines across software systems.
 */
export default function WorkflowProcessDiagram() {
  return (
    <div className="diagram-container diagram-workflow" aria-label="Workflow Automation Process Flow">
      <div className="diagram-header">
        <div className="diagram-badge">
          <span className="diagram-pulse-dot" />
          <span>Event-Driven Pipeline Architecture</span>
        </div>
        <span className="diagram-caption">Deterministic Rules · Idempotent Retries · Multi-System Sync</span>
      </div>

      <div className="diagram-flow-grid">
        {/* Step 1: Trigger */}
        <div className="diagram-node-card">
          <div className="diagram-node-eyebrow">STEP 01 · TRIGGER</div>
          <h4 className="diagram-node-title">Event Ingestion</h4>
          <p className="diagram-node-desc">Sub-second webhook catches contract signature, payment authorization, or form submission.</p>
          <div className="diagram-spec-row">
            <Zap size={14} className="diagram-spec-icon" />
            <span>&lt; 50ms Ingestion Latency</span>
          </div>
        </div>

        {/* Connector */}
        <div className="diagram-connector-track" aria-hidden="true">
          <div className="diagram-signal-dot" />
          <svg className="diagram-arrow-svg" viewBox="0 0 40 24" fill="none">
            <path d="M0 12 H36 M28 4 L36 12 L28 20" stroke="#83DDE2" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Step 2: Processing Gate */}
        <div className="diagram-node-card diagram-node-card--core">
          <div className="diagram-node-eyebrow diagram-node-eyebrow--cyan">STEP 02 · ORCHESTRATION</div>
          <h4 className="diagram-node-title">Validation &amp; Routing</h4>
          <p className="diagram-node-desc">Normalizes data payload, strips duplicate records, and applies conditional business routing.</p>
          <div className="diagram-core-specs">
            <div className="diagram-spec-row">
              <RefreshCw size={14} className="diagram-spec-icon" />
              <span>Idempotent Deduplication</span>
            </div>
            <div className="diagram-spec-row">
              <GitBranch size={14} className="diagram-spec-icon" />
              <span>Conditional Logic Branching</span>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="diagram-connector-track" aria-hidden="true">
          <div className="diagram-signal-dot" style={{ animationDelay: '0.8s' }} />
          <svg className="diagram-arrow-svg" viewBox="0 0 40 24" fill="none">
            <path d="M0 12 H36 M28 4 L36 12 L28 20" stroke="#83DDE2" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Step 3: Propagation */}
        <div className="diagram-node-card">
          <div className="diagram-node-eyebrow">STEP 03 · EXECUTION</div>
          <h4 className="diagram-node-title">System Synchronization</h4>
          <p className="diagram-node-desc">Simultaneously updates CRM records, provisions workspaces, and triggers team notifications.</p>
          <div className="diagram-outcome-branches">
            <div className="diagram-branch diagram-branch--auto">
              <CheckCircle2 size={14} />
              <span>CRM &amp; ERP Bidirectional Sync</span>
            </div>
            <div className="diagram-branch diagram-branch--auto">
              <ShieldCheck size={14} />
              <span>Automatic Retry Shield</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
