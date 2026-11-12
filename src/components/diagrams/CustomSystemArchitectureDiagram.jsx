import React from 'react';
import { Cpu, Database, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';
import './DiagramStyles.css';

/**
 * Clean Conceptual Architecture Illustration for Custom AI Solutions
 * Highlights private VPC boundaries, custom schemas, and zero data retention.
 */
export default function CustomSystemArchitectureDiagram() {
  return (
    <div className="diagram-container diagram-custom" aria-label="Custom AI Architecture Diagram">
      <div className="diagram-header">
        <div className="diagram-badge">
          <span className="diagram-pulse-dot" />
          <span>Enterprise VPC Architecture</span>
        </div>
        <span className="diagram-caption">Zero Data Retention · Private VPC Deployment · Domain-Tuned Inference</span>
      </div>

      <div className="diagram-flow-grid">
        {/* Layer 1: Enterprise Data */}
        <div className="diagram-node-card">
          <div className="diagram-node-eyebrow">LAYER 01 · DATA ASSETS</div>
          <h4 className="diagram-node-title">Enterprise Data Layer</h4>
          <p className="diagram-node-desc">Proprietary schemas, SQL databases, and internal document repositories remain securely on-prem or in your cloud.</p>
          <div className="diagram-spec-row">
            <Database size={14} className="diagram-spec-icon" />
            <span>Legacy &amp; Modern SQL Warehouses</span>
          </div>
        </div>

        {/* Connector */}
        <div className="diagram-connector-track" aria-hidden="true">
          <div className="diagram-signal-dot" />
          <svg className="diagram-arrow-svg" viewBox="0 0 40 24" fill="none">
            <path d="M0 12 H36 M28 4 L36 12 L28 20" stroke="#83DDE2" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Layer 2: Private VPC & Model Gate */}
        <div className="diagram-node-card diagram-node-card--core">
          <div className="diagram-node-eyebrow diagram-node-eyebrow--cyan">LAYER 02 · PRIVATE BOUNDARY</div>
          <h4 className="diagram-node-title">Isolated Inference VPC</h4>
          <p className="diagram-node-desc">Custom RAG pipelines and calibrated models process requests under strict zero-retention compliance.</p>
          <div className="diagram-core-specs">
            <div className="diagram-spec-row">
              <ShieldCheck size={14} className="diagram-spec-icon" />
              <span>Zero-Retention Data Sovereign Gate</span>
            </div>
            <div className="diagram-spec-row">
              <Cpu size={14} className="diagram-spec-icon" />
              <span>Specialized Domain-Calibrated Models</span>
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

        {/* Layer 3: Endpoints */}
        <div className="diagram-node-card">
          <div className="diagram-node-eyebrow">LAYER 03 · ENDPOINTS</div>
          <h4 className="diagram-node-title">Intelligent Systems</h4>
          <p className="diagram-node-desc">Delivers custom internal copilots, automated reporting engines, and high-security API adapters.</p>
          <div className="diagram-outcome-branches">
            <div className="diagram-branch diagram-branch--auto">
              <Terminal size={14} />
              <span>Internal Operations Copilots</span>
            </div>
            <div className="diagram-branch diagram-branch--auto">
              <CheckCircle2 size={14} />
              <span>Automated Executive Synthesizers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
