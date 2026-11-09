import React, { useState } from 'react';
import {
  FileText,
  Cpu,
  Layers,
  CheckCircle2,
  Database,
  BarChart3,
  Shield,
  Code2,
  FileCheck2,
  Server
} from 'lucide-react';
import './CustomAiConsole.css';

const SAMPLES = [
  {
    id: 'contract',
    title: 'Cross-Border Logistics MSA (PDF)',
    type: 'Legal & Procurement',
    pages: '38 pages',
    size: '4.2 MB',
    extractedEntities: {
      contract_parties: {
        principal: 'TransGlobal Supply Chains Inc. (Delaware)',
        counterparty: 'Nordic Marine Logistics A/S (Copenhagen)'
      },
      effective_date: '2026-01-01',
      term_duration_months: 36,
      sla_penalty_clauses: [
        { clause: '7.2(a)', condition: 'Port demurrage > 12 hrs', liability: '$12,500/day capped at $150k' },
        { clause: '14.1', condition: 'Cold chain temperature deviation > 2°C', liability: '100% cargo replacement value' }
      ],
      governing_law: 'Maritime Arbitration Commission, London (LMAA)',
      esg_compliance_certified: true
    },
    executiveBrief: `### Automated Legal Briefing
- **Commercial Risk Assessment:** Moderate-Low. Liquidated damages clauses in §7.2 conform to standard maritime standards.
- **Critical Action Required:** §14.1 temperature telemetry requires IoT sensor integration with real-time exception webhooks before cargo loading.
- **Payment Terms:** Net-45 with 1.5% discount for settlement within 10 days. Zero dispute escalation triggers identified.`,
    databaseCommit: {
      table: 'procurement_contracts_v2',
      record_id: 'ctr_lmaa_88301',
      status: 'COMMITTED',
      indexed_chunks: 142,
      latency: '820ms',
      rag_cluster: 'prod-us-east-1-rag'
    }
  },
  {
    id: 'medical',
    title: 'Multi-Clinic EHR Billing Audit (Batch)',
    type: 'Healthcare & Compliance',
    pages: '1,240 records',
    size: '18.7 MB',
    extractedEntities: {
      batch_id: 'batch_med_q3_901',
      total_claims_parsed: 1240,
      discrepancy_count: 8,
      audited_categories: [
        { cpt_code: '99214', name: 'Office Outpatient Visit', accuracy_rate: '99.4%' },
        { cpt_code: '71046', name: 'Chest Radiography 2-View', accuracy_rate: '100%' },
        { cpt_code: '80053', name: 'Comprehensive Metabolic Panel', accuracy_rate: '98.9%' }
      ],
      compliance_certification: 'HIPAA & HITECH Zero-Retention Confirmed',
      projected_denial_prevention: '$48,200 USD'
    },
    executiveBrief: `### Medical Coding Audit Summary
- **Audit Volume:** 1,240 outpatient claim entries cross-referenced against CMS billing guidelines.
- **Preventative Flags:** 8 unbundled billing entries caught and flagged before claim transmission to clearinghouses.
- **Projected Denial Prevention:** Estimated $48,200 in prevented claim rejections and appeals admin overhead.`,
    databaseCommit: {
      table: 'claims_validation_ledger',
      record_id: 'clm_audit_99182',
      status: 'COMMITTED',
      indexed_chunks: 390,
      latency: '1,140ms',
      rag_cluster: 'prod-hipaa-isolated-vpc'
    }
  }
];

export default function CustomAiConsole() {
  const [selectedSampleIdx, setSelectedSampleIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('json'); // 'json', 'brief', 'db'

  const sample = SAMPLES[selectedSampleIdx];

  return (
    <div className="custom-console-card">
      {/* Top Header */}
      <div className="custom-console-topbar">
        <div className="custom-console-topbar-left">
          <span className="custom-console-indicator"></span>
          <span className="custom-console-title">Hutomate Bespoke AI Processing Architecture</span>
          <span className="custom-console-badge">Enterprise Console</span>
        </div>

        <div className="custom-console-topbar-right">
          <span className="custom-console-stat">
            <Shield size={13} /> Zero-Retention Guarantee
          </span>
          <span className="custom-console-stat">
            <Server size={13} /> Private VPC Inference
          </span>
        </div>
      </div>

      {/* Pipeline Visual Header */}
      <div className="custom-pipeline-strip">
        <div className="pipeline-pill is-active">
          <FileText size={13} />
          <span>1. Ingestion &amp; OCR</span>
        </div>
        <div className="pipeline-arrow">→</div>
        <div className="pipeline-pill is-active">
          <Layers size={13} />
          <span>2. Semantic RAG Chunking</span>
        </div>
        <div className="pipeline-arrow">→</div>
        <div className="pipeline-pill is-active">
          <Cpu size={13} />
          <span>3. Multi-Model Extraction</span>
        </div>
        <div className="pipeline-arrow">→</div>
        <div className="pipeline-pill is-active">
          <Database size={13} />
          <span>4. Schema Commit</span>
        </div>
      </div>

      <div className="custom-console-body">
        {/* Left Column: Sample Selector & Ingestion Metadata */}
        <div className="custom-console-sidebar">
          <div className="custom-sidebar-heading">Select Ingestion Sample</div>

          <div className="custom-sample-list">
            {SAMPLES.map((s, idx) => {
              const isSelected = idx === selectedSampleIdx;
              return (
                <button
                  key={s.id}
                  type="button"
                  className={`custom-sample-btn ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedSampleIdx(idx)}
                >
                  <div className="custom-sample-icon">
                    <FileCheck2 size={16} />
                  </div>
                  <div className="custom-sample-info">
                    <span className="custom-sample-title">{s.title}</span>
                    <div className="custom-sample-meta">
                      <span>{s.type}</span>
                      <span>•</span>
                      <span>{s.pages}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="custom-sidebar-tech-note">
            <div className="custom-tech-note-title">
              <Shield size={13} /> Architecture Safeguards
            </div>
            <p className="custom-tech-note-text">
              Proprietary contracts and medical records never enter public model training sets. All models run in customer-isolated VPC environments with end-to-end KMS encryption.
            </p>
          </div>
        </div>

        {/* Right Column: Output Viewers */}
        <div className="custom-console-main">
          {/* Tab Navigation */}
          <div className="custom-output-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'json'}
              className={`custom-tab-btn ${activeTab === 'json' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('json')}
            >
              <Code2 size={14} />
              <span>Structured JSON Schema</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'brief'}
              className={`custom-tab-btn ${activeTab === 'brief' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('brief')}
            >
              <BarChart3 size={14} />
              <span>Executive Intelligence Brief</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'db'}
              className={`custom-tab-btn ${activeTab === 'db' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('db')}
            >
              <Database size={14} />
              <span>Database Sync Telemetry</span>
            </button>
          </div>

          {/* Tab Panels */}
          <div className="custom-output-content">
            {activeTab === 'json' && (
              <div className="custom-tab-pane">
                <div className="custom-json-meta">
                  <span>Deterministic Strict JSON Schema</span>
                  <span className="custom-json-badge">Validation Passed</span>
                </div>
                <pre className="custom-json-view">
                  {JSON.stringify(sample.extractedEntities, null, 2)}
                </pre>
              </div>
            )}

            {activeTab === 'brief' && (
              <div className="custom-tab-pane custom-brief-pane">
                <div className="custom-brief-card">
                  <div className="custom-brief-header">
                    <span className="custom-brief-tag">Grounded RAG Synthesis</span>
                    <span className="custom-brief-source">{sample.title}</span>
                  </div>
                  <div className="custom-brief-text">
                    {sample.executiveBrief.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'db' && (
              <div className="custom-tab-pane">
                <div className="custom-db-grid">
                  <div className="custom-db-item">
                    <span className="custom-db-label">Target Table</span>
                    <span className="custom-db-val">{sample.databaseCommit.table}</span>
                  </div>
                  <div className="custom-db-item">
                    <span className="custom-db-label">Committed Record ID</span>
                    <span className="custom-db-val custom-db-val--cyan">{sample.databaseCommit.record_id}</span>
                  </div>
                  <div className="custom-db-item">
                    <span className="custom-db-label">Vector Chunks Indexed</span>
                    <span className="custom-db-val">{sample.databaseCommit.indexed_chunks} semantic chunks</span>
                  </div>
                  <div className="custom-db-item">
                    <span className="custom-db-label">Pipeline Processing Latency</span>
                    <span className="custom-db-val">{sample.databaseCommit.latency}</span>
                  </div>
                  <div className="custom-db-item">
                    <span className="custom-db-label">Isolated Cluster</span>
                    <span className="custom-db-val">{sample.databaseCommit.rag_cluster}</span>
                  </div>
                  <div className="custom-db-item">
                    <span className="custom-db-label">Write Status</span>
                    <span className="custom-db-val custom-db-val--ok">
                      <CheckCircle2 size={13} /> {sample.databaseCommit.status}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
