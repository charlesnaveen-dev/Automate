import React from 'react';
import { Bot, Database, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';
import './DiagramStyles.css';

/**
 * Clean Conceptual Architecture Diagram for Autonomous AI Agents
 * Replaces fake dashboards with a real architectural dataflow:
 * Trigger -> Grounded Reasoning & Context -> Sandboxed Actions & Human Gate
 */
export default function AgentArchitectureDiagram() {
  return (
    <div className="diagram-container diagram-agent" aria-label="AI Agent Architecture Diagram">
      <div className="diagram-header">
        <div className="diagram-badge">
          <span className="diagram-pulse-dot" />
          <span>Autonomous Execution Architecture</span>
        </div>
        <span className="diagram-caption">Grounded Reasoning · Tool Orchestration · Auditable Guardrails</span>
      </div>

      <div className="diagram-flow-grid">
        {/* Step 1: Input Ingestion */}
        <div className="diagram-node-card">
          <div className="diagram-node-eyebrow">STAGE 01 · INGESTION</div>
          <h4 className="diagram-node-title">Operational Inbound</h4>
          <p className="diagram-node-desc">Unstructured emails, webhook events, and portal inquiries enter the ingestion gateway.</p>
          <ul className="diagram-node-tags">
            <li>Customer Inquiries</li>
            <li>ERP Webhooks</li>
            <li>Document Uploads</li>
          </ul>
        </div>

        {/* Connector 1 */}
        <div className="diagram-connector-track" aria-hidden="true">
          <div className="diagram-signal-dot" />
          <svg className="diagram-arrow-svg" viewBox="0 0 40 24" fill="none">
            <path d="M0 12 H36 M28 4 L36 12 L28 20" stroke="#83DDE2" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Step 2: Reasoning Core */}
        <div className="diagram-node-card diagram-node-card--core">
          <div className="diagram-node-eyebrow diagram-node-eyebrow--cyan">STAGE 02 · REASONING CORE</div>
          <h4 className="diagram-node-title">Grounded Agent Loop</h4>
          <p className="diagram-node-desc">Queries permission-filtered company knowledge and evaluates structured operational schemas.</p>
          <div className="diagram-core-specs">
            <div className="diagram-spec-row">
              <Database size={14} className="diagram-spec-icon" />
              <span>Vector Context Retrieval</span>
            </div>
            <div className="diagram-spec-row">
              <ShieldCheck size={14} className="diagram-spec-icon" />
              <span>Confidence Threshold &gt; 95%</span>
            </div>
            <div className="diagram-spec-row">
              <Bot size={14} className="diagram-spec-icon" />
              <span>Zero-Hallucination Guardrails</span>
            </div>
          </div>
        </div>

        {/* Connector 2 */}
        <div className="diagram-connector-track" aria-hidden="true">
          <div className="diagram-signal-dot" style={{ animationDelay: '0.8s' }} />
          <svg className="diagram-arrow-svg" viewBox="0 0 40 24" fill="none">
            <path d="M0 12 H36 M28 4 L36 12 L28 20" stroke="#83DDE2" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Step 3: Execution & Gate */}
        <div className="diagram-node-card">
          <div className="diagram-node-eyebrow">STAGE 03 · OUTCOME</div>
          <h4 className="diagram-node-title">Verified Task Execution</h4>
          <p className="diagram-node-desc">Executes authorized actions via sandboxed APIs or routes edge cases to human specialists.</p>
          <div className="diagram-outcome-branches">
            <div className="diagram-branch diagram-branch--auto">
              <CheckCircle2 size={14} />
              <span>Automated API Mutation</span>
            </div>
            <div className="diagram-branch diagram-branch--human">
              <UserCheck size={14} />
              <span>Human Approval Checkpoint</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
