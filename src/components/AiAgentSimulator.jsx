import React, { useState, useEffect } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Bot,
  Database,
  Cpu,
  Wrench,
  Send,
  CheckSquare
} from 'lucide-react';
import './AiAgentSimulator.css';

const STAGES = [
  {
    id: 'incoming',
    step: '01',
    name: 'Incoming Task',
    shortName: 'Intake',
    icon: Send,
    badge: 'Event Trigger',
    summary: 'Customer request arrives via Zendesk webhook with order attachment.',
    details: {
      source: 'Inbound Webhook: Zendesk #HT-8491',
      payload: {
        customer: 'Marcus Reed (marcus.reed@apexventures.io)',
        order_id: 'ORD-98421',
        issue: 'Product arrived with broken display assembly. Requesting replacement.',
        timestamp: '2026-11-06T14:22:18Z'
      },
      log: 'Webhook received from Zendesk. Verified cryptographic signature SHA256. Spawning agent worker thread #w-749.'
    }
  },
  {
    id: 'context',
    step: '02',
    name: 'Context Retrieval',
    shortName: 'Context',
    icon: Database,
    badge: 'Vector & DB Query',
    summary: 'Queries order database, return policy vectors, and customer SLA tier.',
    details: {
      queries: [
        'Shopify Orders API: GetOrder(ORD-98421)',
        'Vector Store: SearchPolicy("damaged shipment electronics replacement window")',
        'Customer Health DB: GetAccountTier(marcus.reed@apexventures.io)'
      ],
      retrievedContext: {
        order_status: 'Delivered 3 days ago ($189.00 USD)',
        policy_rule: '30-day no-friction damage replacement guaranteed',
        account_tier: 'Enterprise Priority SLA'
      },
      log: 'Grounded retrieval completed in 142ms. 3 semantic chunks retrieved with 0.94 cosine similarity score.'
    }
  },
  {
    id: 'reasoning',
    step: '03',
    name: 'Reasoning & Intent',
    shortName: 'Reasoning',
    icon: Cpu,
    badge: 'Structured LLM',
    summary: 'Evaluates eligibility against deterministic business rules and safety guardrails.',
    details: {
      evaluation: {
        intent: 'Damage Claim & Replacement Dispatch',
        confidence: 0.988,
        within_replacement_window: true,
        requires_human_escalation: false,
        fraud_risk_score: '0.02 (Low)'
      },
      decision_path: 'Auto-approve replacement dispatch under Enterprise SLA tier. Zero deductible required.',
      log: 'Evaluated intent and constraints against prompt schema. Guardrails check passed with zero hallucinations.'
    }
  },
  {
    id: 'tool_selection',
    step: '04',
    name: 'Tool Selection',
    shortName: 'Tools',
    icon: Wrench,
    badge: 'Function Calling',
    summary: 'Agent binds approved sandboxed functions with strictly validated arguments.',
    details: {
      selected_tools: [
        { name: 'shopify_create_replacement_order', args: { original_order: 'ORD-98421', sku: 'DISP-PRO-02' } },
        { name: 'zendesk_append_internal_note', args: { ticket_id: 8491, status: 'replacement_queued' } },
        { name: 'slack_post_warehouse_alert', args: { channel: '#fulfillment-urgent', priority: 'high' } }
      ],
      permission_scope: 'Scoped read-write access to fulfillment sandbox.',
      log: 'Constructed deterministic JSON function arguments. Validated types against JSON schema definitions.'
    }
  },
  {
    id: 'execution',
    step: '05',
    name: 'Task Execution',
    shortName: 'Execute',
    icon: Bot,
    badge: 'API Action Commit',
    summary: 'Executes API calls idempotently and monitors target service responses.',
    details: {
      api_calls: [
        { service: 'Shopify Fulfillment API', status: '201 Created', order: 'ORD-98421-R', tracking: 'UPS-1Z99999' },
        { service: 'Zendesk Support API', status: '200 OK', update: 'Internal note & customer reply posted' },
        { service: 'Slack Webhook', status: '200 OK', channel: '#fulfillment-urgent' }
      ],
      idempotency_key: 'idem_94821_repl_20261106',
      log: 'All 3 downstream tool calls executed successfully with zero retries needed. Transaction committed.'
    }
  },
  {
    id: 'completion',
    step: '06',
    name: 'Completion & Handoff',
    shortName: 'Complete',
    icon: CheckSquare,
    badge: 'Audit & Resolution',
    summary: 'Customer notified, ticket resolved, and full audit trace stored.',
    details: {
      result: 'Customer received branded replacement confirmation with tracking link in 1.4 seconds total execution time.',
      audit: {
        agent_id: 'agent_returns_v2.4',
        duration_ms: 1420,
        token_usage: 640,
        human_intervention: 'None required (confidence > 0.95)'
      },
      log: 'Task complete. Full prompt input, retrieved context, and tool output committed to audit data lake.'
    }
  }
];

export default function AiAgentSimulator() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveIdx((prev) => {
          if (prev >= STAGES.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2400);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeStage = STAGES[activeIdx];
  const IconComp = activeStage.icon;

  const handleReset = () => {
    setIsPlaying(false);
    setActiveIdx(0);
  };

  const handlePlayToggle = () => {
    if (activeIdx >= STAGES.length - 1) {
      setActiveIdx(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="agent-sim-card">
      {/* Console Header Bar */}
      <div className="agent-sim-topbar">
        <div className="agent-sim-topbar-left">
          <span className="agent-sim-dot agent-sim-dot--red"></span>
          <span className="agent-sim-dot agent-sim-dot--yellow"></span>
          <span className="agent-sim-dot agent-sim-dot--green"></span>
          <span className="agent-sim-title">Hutomate Agent Execution Telemetry</span>
          <span className="agent-sim-mode-tag">Illustrative Simulator</span>
        </div>

        <div className="agent-sim-topbar-right">
          <span className="agent-sim-guardrail-badge">
            <ShieldCheck size={14} /> Guardrails Active
          </span>
          <div className="agent-sim-controls">
            <button
              type="button"
              className={`agent-sim-ctrl-btn ${isPlaying ? 'is-active' : ''}`}
              onClick={handlePlayToggle}
              title={isPlaying ? 'Pause simulation' : 'Run automated simulation'}
            >
              <Play size={13} fill={isPlaying ? 'currentColor' : 'none'} />
              <span>{isPlaying ? 'Pause' : 'Simulate Task'}</span>
            </button>
            <button
              type="button"
              className="agent-sim-ctrl-btn agent-sim-ctrl-btn--icon"
              onClick={handleReset}
              title="Reset to step 1"
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* 6-Stage Interactive Stepper Track */}
      <div className="agent-sim-stepper" role="tablist">
        {STAGES.map((st, idx) => {
          const isActive = idx === activeIdx;
          const isDone = idx < activeIdx;
          const StepIcon = st.icon;

          return (
            <button
              key={st.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`agent-sim-step-tab ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}`}
              onClick={() => {
                setIsPlaying(false);
                setActiveIdx(idx);
              }}
            >
              <div className="agent-step-pill">
                {isDone ? (
                  <CheckCircle2 size={13} className="agent-step-check" />
                ) : (
                  <span className="agent-step-num">{st.step}</span>
                )}
                <StepIcon size={14} className="agent-step-icon" />
              </div>
              <span className="agent-step-name">{st.name}</span>
            </button>
          );
        })}
      </div>

      {/* Stage Detail + Console Viewport */}
      <div className="agent-sim-body">
        {/* Left: Stage Visual & Explanation */}
        <div className="agent-sim-stage-desc">
          <div className="agent-stage-header">
            <div className="agent-stage-badge">
              <IconComp size={15} />
              <span>{activeStage.badge}</span>
            </div>
            <span className="agent-stage-counter">Stage 0{activeIdx + 1} of 06</span>
          </div>

          <h3 className="agent-stage-name">{activeStage.name}</h3>
          <p className="agent-stage-summary">{activeStage.summary}</p>

          <div className="agent-stage-data-box">
            <div className="agent-data-box-label">Structured Stage Output</div>
            <pre className="agent-data-json">
              {JSON.stringify(activeStage.details.payload || activeStage.details.retrievedContext || activeStage.details.evaluation || activeStage.details.selected_tools || activeStage.details.api_calls || activeStage.details.audit, null, 2)}
            </pre>
          </div>
        </div>

        {/* Right: Live Terminal Log Stream */}
        <div className="agent-sim-terminal">
          <div className="terminal-header">
            <Terminal size={14} />
            <span>Agent Kernel Audit Log</span>
            <span className="terminal-live-badge">Live Trace</span>
          </div>

          <div className="terminal-logs-window">
            <div className="terminal-line terminal-line--meta">
              <span className="t-time">14:22:18.012</span>
              <span className="t-src">[kernel]</span>
              <span className="t-msg">Session initialized for agent_returns_v2.4</span>
            </div>

            {STAGES.slice(0, activeIdx + 1).map((st, i) => (
              <div key={st.id} className="terminal-line terminal-line--active">
                <span className="t-time">14:22:18.{120 + i * 210}</span>
                <span className="t-src">[{st.shortName.toLowerCase()}]</span>
                <span className="t-msg">{st.details.log}</span>
              </div>
            ))}

            <div className="terminal-line terminal-line--cursor">
              <span className="t-time">14:22:19.450</span>
              <span className="t-src">[telemetry]</span>
              <span className="t-msg">Status: <span className="t-status">SUCCESS</span> (Confidence: 98.8%)</span>
              <span className="t-cursor">█</span>
            </div>
          </div>

          <div className="terminal-footer">
            <div className="terminal-stat">
              <span className="stat-label">Execution Time</span>
              <span className="stat-val">{activeIdx >= 4 ? '1,420 ms' : `${(activeIdx + 1) * 230} ms`}</span>
            </div>
            <div className="terminal-stat">
              <span className="stat-label">Deterministic Rules</span>
              <span className="stat-val">100% Verified</span>
            </div>
            <div className="terminal-stat">
              <span className="stat-label">Model Guardrail</span>
              <span className="stat-val stat-val--ok">Passed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
