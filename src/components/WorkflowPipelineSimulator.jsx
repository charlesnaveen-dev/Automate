import React, { useState, useEffect } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  GitBranch,
  Globe,
  UserCheck,
  Database,
  MessageSquare,
  Send,
  Zap
} from 'lucide-react';
import './WorkflowPipelineSimulator.css';

const NODES = [
  {
    id: 'node-1',
    step: '01',
    title: 'Website Enquiry',
    sub: 'Inbound Webhook',
    icon: Globe,
    system: 'Hutomate Ingestion Gateway',
    status: 'Webhook Received (200 OK)',
    latency: '18ms',
    data: {
      event: 'form_submission',
      form_id: 'enterprise_quote_v3',
      fields: {
        lead_name: 'Elena Rostova',
        work_email: 'elena@novapharma.com',
        company: 'NovaPharma Solutions',
        estimated_seats: '120',
        inquiry: 'Need multi-system synchronization between Veeva CRM and SAP ERP.'
      },
      headers: {
        'x-hm-signature': 'sha256=d3b07384d113edec...',
        'content-type': 'application/json'
      }
    },
    actionSummary: 'Payload received, TLS handshake verified, dispatched to asynchronous queue buffer with UUID trace_9942a.'
  },
  {
    id: 'node-2',
    step: '02',
    title: 'Lead Qualification',
    sub: 'Algorithmic Triage',
    icon: UserCheck,
    system: 'Enrichment & Scoring Engine',
    status: 'Enriched & Scored (High Priority)',
    latency: '84ms',
    data: {
      firmographic_enrichment: {
        domain: 'novapharma.com',
        industry: 'Biotechnology & Life Sciences',
        headcount_range: '50-250',
        estimated_annual_revenue: '$25M - $50M',
        headquarters: 'Boston, MA, USA'
      },
      evaluation: {
        icp_fit_score: '96/100 (Tier 1)',
        routing_priority: 'Urgent — Immediate SDR notification',
        estimated_arr: '$42,000 USD'
      }
    },
    actionSummary: 'Contact enriched against verified corporate records. Automated ICP scoring scored lead at 96% fit.'
  },
  {
    id: 'node-3',
    step: '03',
    title: 'CRM Entry',
    sub: 'Bidirectional Commit',
    icon: Database,
    system: 'HubSpot Enterprise API',
    status: 'Record Created (201 Created)',
    latency: '122ms',
    data: {
      crm_action: 'POST /crm/v3/objects/contacts',
      contact_id: 'hs_contact_8831094',
      deal_id: 'deal_4920194',
      fields_committed: {
        lifecycle_stage: 'Marketing Qualified Lead (MQL)',
        lead_source: 'Organic Web Scoping',
        assigned_owner: 'Rachel Morris (Senior SDR, North America East)',
        pipeline_stage: 'Discovery Scheduled'
      },
      idempotency_key: 'idem_elena_novapharma_202611'
    },
    actionSummary: 'Contact and deal records atomically created in HubSpot. Idempotency key verified to prevent duplicate accounts.'
  },
  {
    id: 'node-4',
    step: '04',
    title: 'Team Notification',
    sub: 'Real-Time Dispatch',
    icon: MessageSquare,
    system: 'Slack Enterprise Grid Webhook',
    status: 'Channel Alert Dispatched',
    latency: '45ms',
    data: {
      slack_target: '#inbound-tier1-leads',
      message_blocks: {
        header: '⚡ New Tier-1 Enterprise Opportunity: NovaPharma Solutions',
        summary: 'Elena Rostova (120 seats, Biotech) requested Veeva <-> SAP pipeline automation.',
        quick_actions: ['[Claim Account]', '[Open HubSpot Record]', '[Draft Brief]']
      },
      escalation_policy: 'SLA timer started: 15-minute first response window'
    },
    actionSummary: 'Rich operational alert dispatched to sales channel with direct deep links and one-click ownership claiming.'
  },
  {
    id: 'node-5',
    step: '05',
    title: 'Automated Follow-Up',
    sub: 'Direct Outreach Queue',
    icon: Send,
    system: 'Custom Communications Gateway',
    status: 'Sequences Queued',
    latency: '62ms',
    data: {
      outbound_email: {
        to: 'elena@novapharma.com',
        template: 'enterprise_discovery_intro_v2',
        personalized_booking_link: 'https://hutomate.com/meet/rachel?ref=hs_8831094',
        status: 'Sent (Delivered)'
      },
      sms_notification: {
        status: 'Deferred pending calendar booking confirmation',
        cadence: 'T+2 hours follow-up if unscheduled'
      }
    },
    actionSummary: 'Personalized introduction email dispatched within 2 seconds of form completion. Automated sequence logged.'
  }
];

export default function WorkflowPipelineSimulator() {
  const [activeNodeIdx, setActiveNodeIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveNodeIdx((prev) => {
          if (prev >= NODES.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeNode = NODES[activeNodeIdx];
  const ActiveIcon = activeNode.icon;

  const handlePlayToggle = () => {
    if (activeNodeIdx >= NODES.length - 1) {
      setActiveNodeIdx(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveNodeIdx(0);
  };

  return (
    <div className="flow-pipe-card">
      {/* Top Header */}
      <div className="flow-pipe-topbar">
        <div className="flow-pipe-topbar-left">
          <span className="flow-pipe-dot flow-pipe-dot--cyan"></span>
          <span className="flow-pipe-title">Automated Event Pipeline Simulator</span>
          <span className="flow-pipe-badge">5-Node Operational Flow</span>
        </div>

        <div className="flow-pipe-topbar-right">
          <span className="flow-pipe-metric">
            <Zap size={13} /> Avg. Latency: 331ms
          </span>
          <div className="flow-pipe-controls">
            <button
              type="button"
              className={`flow-pipe-btn ${isPlaying ? 'is-active' : ''}`}
              onClick={handlePlayToggle}
              title={isPlaying ? 'Pause pipeline' : 'Play pipeline sequence'}
            >
              <Play size={13} fill={isPlaying ? 'currentColor' : 'none'} />
              <span>{isPlaying ? 'Pause' : 'Simulate Pipeline'}</span>
            </button>
            <button
              type="button"
              className="flow-pipe-btn flow-pipe-btn--icon"
              onClick={handleReset}
              title="Reset to step 1"
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* 5-Node Interactive Visual Pipeline Track */}
      <div className="flow-pipe-track" role="tablist">
        {NODES.map((node, idx) => {
          const isActive = idx === activeNodeIdx;
          const isDone = idx < activeNodeIdx;
          const NodeIcon = node.icon;

          return (
            <React.Fragment key={node.id}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`flow-pipe-node-btn ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}`}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveNodeIdx(idx);
                }}
              >
                <div className="flow-node-badge">
                  {isDone ? (
                    <CheckCircle2 size={13} className="flow-node-check" />
                  ) : (
                    <span className="flow-node-step">{node.step}</span>
                  )}
                  <NodeIcon size={14} className="flow-node-icon" />
                </div>
                <div className="flow-node-text">
                  <span className="flow-node-title">{node.title}</span>
                  <span className="flow-node-sub">{node.sub}</span>
                </div>
                {isActive && <div className="flow-node-active-bar" />}
              </button>

              {idx < NODES.length - 1 && (
                <div className={`flow-pipe-connector ${idx < activeNodeIdx ? 'is-pulsing' : ''}`} aria-hidden="true">
                  <div className="flow-pipe-connector-line"></div>
                  <div className="flow-pipe-connector-particle"></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Main Inspection Pane */}
      <div className="flow-pipe-pane">
        {/* Left Column: Node Overview */}
        <div className="flow-pane-left">
          <div className="flow-pane-node-header">
            <div className="flow-pane-icon-box">
              <ActiveIcon size={20} />
            </div>
            <div>
              <div className="flow-pane-phase">Stage 0{activeNodeIdx + 1} of 05</div>
              <h3 className="flow-pane-title">{activeNode.title}</h3>
            </div>
          </div>

          <div className="flow-pane-meta-grid">
            <div className="flow-meta-item">
              <span className="flow-meta-label">Target System</span>
              <span className="flow-meta-val">{activeNode.system}</span>
            </div>
            <div className="flow-meta-item">
              <span className="flow-meta-label">Execution Status</span>
              <span className="flow-meta-val flow-meta-val--ok">{activeNode.status}</span>
            </div>
            <div className="flow-meta-item">
              <span className="flow-meta-label">Response Latency</span>
              <span className="flow-meta-val">{activeNode.latency}</span>
            </div>
            <div className="flow-meta-item">
              <span className="flow-meta-label">Reliability Mode</span>
              <span className="flow-meta-val">Idempotent + Auto-Retry</span>
            </div>
          </div>

          <div className="flow-pane-summary">
            <p>{activeNode.actionSummary}</p>
          </div>
        </div>

        {/* Right Column: Live Data Payload Console */}
        <div className="flow-pane-right">
          <div className="flow-code-header">
            <GitBranch size={14} />
            <span>Structured Payload Inspection</span>
            <span className="flow-code-format">JSON schema validated</span>
          </div>

          <pre className="flow-code-block">
            {JSON.stringify(activeNode.data, null, 2)}
          </pre>

          <div className="flow-code-footer">
            <span className="flow-footer-dot"></span>
            <span>Zero manual data entry · Idempotent commit complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
