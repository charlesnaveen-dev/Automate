import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Bot,
  GitBranch,
  Mic,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  PhoneCall,
  Database,
  Lock,
  Layers,
  Server,
  Workflow
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from '../router/Router';
import './CapabilitiesSection.css';

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  {
    id: 'ai-agents',
    num: '01',
    title: 'AI Agents',
    categoryBadge: 'AUTONOMOUS REASONING & EXECUTION',
    tagline: 'Intelligent systems that understand, decide and execute tasks.',
    overview:
      'Deploy intelligent software agents that interpret business requests, retrieve relevant information, interact with connected tools and execute authorised multi-step tasks with appropriate human oversight.',
    features: [
      'Grounded Knowledge Retrieval',
      'Multi-Tool Execution',
      'Intelligent Task Orchestration',
      'Human Approval and Escalation',
    ],
    route: '/capabilities/ai-agents',
    icon: Bot,
    telemetry: {
      type: 'Agent Orchestration Loop',
      latency: '180ms response',
      safety: 'SOC-2 Type II Sandbox',
    },
  },
  {
    id: 'workflow-automation',
    num: '02',
    title: 'Workflow Automation',
    categoryBadge: 'CONNECTED BUSINESS OPERATIONS',
    tagline: 'Connect your tools. Simplify the way work gets done.',
    overview:
      'Automate repetitive business processes, connect your applications and build intelligent workflows that keep information moving across your operations.',
    features: [
      'Application Integrations',
      'Conditional Workflows',
      'CRM Synchronization',
      'Automated Notifications and Follow-ups',
    ],
    route: '/capabilities/workflow-automation',
    icon: GitBranch,
    telemetry: {
      type: 'Event-Driven Pipeline',
      latency: 'Sub-second event sync',
      safety: 'Atomic transactions & logs',
    },
  },
  {
    id: 'voice-ai',
    num: '03',
    title: 'Voice AI',
    categoryBadge: 'INTELLIGENT VOICE INTERACTIONS',
    tagline: 'Intelligent conversations that keep business moving.',
    overview:
      'Build voice-powered experiences that handle customer enquiries, qualify leads, schedule appointments and connect conversations with your business operations.',
    features: [
      'Inbound and Outbound Calling',
      'AI Receptionists',
      'Appointment Scheduling',
      'CRM Integration and Call Escalation',
    ],
    route: '/capabilities/voice-ai',
    icon: Mic,
    telemetry: {
      type: 'Streaming Voice Gateway',
      latency: '<280ms audio roundtrip',
      safety: 'PCI & HIPAA compliant audio',
    },
  },
  {
    id: 'custom-ai',
    num: '04',
    title: 'Custom AI Solutions',
    categoryBadge: 'PURPOSE-BUILT INTELLIGENCE',
    tagline: 'Technology designed around your business.',
    overview:
      'Develop tailored AI-powered applications and intelligent systems that solve specific operational challenges and fit your existing business environment.',
    features: [
      'Custom AI Applications',
      'Intelligent Internal Tools',
      'API and System Integrations',
      'Data and Document Intelligence',
    ],
    route: '/capabilities/custom-ai-solutions',
    icon: Cpu,
    telemetry: {
      type: 'Bespoke Software Engine',
      latency: '42ms API response',
      safety: 'Isolated client VPC sandbox',
    },
  },
];

/* --------------------------------------------------------------------------
   Bespoke Visual 01: AI Agents Interactive Orchestrator (Living System Animation)
   -------------------------------------------------------------------------- */
function AiAgentsVisual() {
  const [stage, setStage] = useState(1);

  // Progressive 5-stage AI execution cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cap-visual-box ai-agents-visual">
      {/* Console Top Bar */}
      <div className="visual-console-topbar">
        <div className="visual-console-badge">
          <Bot size={15} className="console-accent-icon" />
          <span className="console-title">Agent Orchestration Loop</span>
          <span className="console-thread-id">#agt-842</span>
        </div>
        <div className="visual-console-telemetry">
          <span className={`telemetry-pulse-dot ${stage === 5 ? 'is-complete' : 'is-running'}`} />
          <span className="telemetry-label">
            {stage === 1 && 'Ingesting · 45ms'}
            {stage === 2 && 'RAG Citations · 112ms'}
            {stage === 3 && 'Invoking Tools · 158ms'}
            {stage === 4 && 'Safety Verified · 180ms'}
            {stage === 5 && 'Cycle Completed · 180ms'}
          </span>
        </div>
      </div>

      {/* Main Orchestration Interface */}
      <div className="visual-console-body">
        {/* Stage 01: Intake */}
        <div
          className={`orchestrator-card trigger-card ${stage === 1 ? 'stage-active' : ''}`}
          onClick={() => setStage(1)}
          role="button"
          tabIndex={0}
        >
          <div className="orchestrator-card-header">
            <span className="step-tag">01 INTAKE</span>
            <span className={`step-badge ${stage === 1 ? 'badge-pulse-cyan' : ''}`}>
              {stage === 1 ? '● Processing Inbound Event...' : 'Inbound Customer Event'}
            </span>
          </div>
          <div className="trigger-message">
            <span className="trigger-quote">"Urgent contract amendment: update renewal terms and sync approved addendum to Salesforce."</span>
          </div>
        </div>

        {/* Stage 02: Grounding */}
        <div
          className={`orchestrator-card vector-card ${stage === 2 ? 'stage-active' : ''}`}
          onClick={() => setStage(2)}
          role="button"
          tabIndex={0}
        >
          <div className="orchestrator-card-header">
            <span className="step-tag">02 GROUNDING</span>
            <span className="step-badge-green">
              {stage === 2 ? '● Vector Match 98.4% (Active Query)' : 'Vector Match 98.4%'}
            </span>
          </div>
          <div className="vector-queries">
            <div className={`vector-query-item ${stage === 2 ? 'item-highlight' : ''}`}>
              <Database size={13} className="query-icon" />
              <span>Query: "Standard SLA clause §4.2 amendments" → 3 verified citations retrieved</span>
            </div>
            <div className="vector-query-item">
              <ShieldCheck size={13} className="query-icon-teal" />
              <span>Deterministic validation: Zero policy violations detected</span>
            </div>
          </div>
        </div>

        {/* Stage 03: Tool Invocation */}
        <div
          className={`orchestrator-card execution-card ${stage === 3 ? 'stage-active' : ''}`}
          onClick={() => setStage(3)}
          role="button"
          tabIndex={0}
        >
          <div className="orchestrator-card-header">
            <span className="step-tag">03 TOOL INVOCATION</span>
            <span className="step-badge-cyan">Sandbox API</span>
          </div>
          <div className="tool-calls-grid">
            <div className={`tool-call-pill ${stage >= 3 ? 'pill-active' : ''}`}>
              <span className="tool-fn">salesforce.updateOpportunity()</span>
              <span className="tool-status">{stage >= 3 ? '200 OK ✓' : 'Queued'}</span>
            </div>
            <div className={`tool-call-pill ${stage >= 3 ? 'pill-active' : ''}`}>
              <span className="tool-fn">slack.notifyChannel('#contracts')</span>
              <span className="tool-status">{stage >= 3 ? 'Dispatched ✓' : 'Pending'}</span>
            </div>
          </div>
        </div>

        {/* Stage 04: Confidence & Human Gate */}
        <div
          className={`orchestrator-card gate-card ${stage === 4 ? 'stage-active' : ''}`}
          onClick={() => setStage(4)}
          role="button"
          tabIndex={0}
        >
          <div className="gate-metrics">
            <div className="gate-metric-item">
              <span className="gate-metric-lbl">Confidence Score</span>
              <span className="gate-metric-val">96.8%</span>
            </div>
            <div className="gate-divider" />
            <div className="gate-metric-item">
              <span className="gate-metric-lbl">Threshold Gate</span>
              <span className="gate-metric-val-green">Passed (&gt;85%)</span>
            </div>
            <div className="gate-divider" />
            <div className="gate-metric-item">
              <span className="gate-metric-lbl">Human Review</span>
              <span className="gate-metric-val-dim">Auto-Authorized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stage 05: Completion Console Footer */}
      <div className="visual-console-footer">
        <div className="footer-meta-tag">
          <ShieldCheck size={13} />
          <span>SOC-2 Type II Sandbox · Zero-Retention Privacy</span>
        </div>
        <div className={`footer-status-pill ${stage === 5 ? 'status-complete-glow' : ''}`}>
          <span>{stage === 5 ? '✓ Loop Cycle Completed' : 'Pipeline Active'}</span>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Bespoke Visual 02: Workflow Automation Event-Driven Pipeline (Living Animation)
   -------------------------------------------------------------------------- */
function WorkflowAutomationVisual() {
  const [wfStage, setWfStage] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setWfStage((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cap-visual-box workflow-visual">
      {/* Console Top Bar */}
      <div className="visual-console-topbar">
        <div className="visual-console-badge">
          <GitBranch size={15} className="console-accent-icon" />
          <span className="console-title">Event-Driven Automation Pipeline</span>
          <span className="console-thread-id">#wf-sync-102</span>
        </div>
        <div className="visual-console-telemetry">
          <span className="telemetry-pulse-dot is-running" />
          <span className="telemetry-label">
            {wfStage === 1 && 'Ingesting Webhook · 12ms'}
            {wfStage === 2 && 'Evaluating Rules · 48ms'}
            {wfStage === 3 && 'Syncing Targets · 120ms'}
            {wfStage === 4 && 'All Targets Synced · 185ms'}
          </span>
        </div>
      </div>

      {/* Visual Pipeline Nodes */}
      <div className="visual-console-body">
        {/* Node 1: Inbound Webhook */}
        <div className={`pipeline-node-row ${wfStage === 1 ? 'node-active' : ''}`}>
          <div className="node-marker start-node">
            <Zap size={14} />
          </div>
          <div className="node-content-box">
            <div className="node-header">
              <span className="node-title">HubSpot CRM Webhook</span>
              <span className={`node-pill-tag ${wfStage === 1 ? 'badge-pulse-cyan' : ''}`}>
                {wfStage === 1 ? '● Inbound Event Active' : 'Inbound Trigger'}
              </span>
            </div>
            <p className="node-meta-text">Trigger: Deal Stage updated to 'Closed-Won' · ID #HT-8491</p>
          </div>
        </div>

        {/* Conduit Line with Pulse */}
        <div className="pipeline-conduit">
          <div className="conduit-line" />
          <div className="conduit-pulse" />
        </div>

        {/* Node 2: Transform & Condition */}
        <div className={`pipeline-node-row ${wfStage >= 2 ? 'node-active' : ''}`}>
          <div className="node-marker process-node">
            <Layers size={14} />
          </div>
          <div className="node-content-box">
            <div className="node-header">
              <span className="node-title">Payload Sanitizer &amp; Condition Filter</span>
              <span className="node-pill-tag green">Condition Met ✓</span>
            </div>
            <p className="node-meta-text">Validation passed · Deal Value ($48,000) &gt;= $10,000 threshold</p>
          </div>
        </div>

        {/* Conduit Line */}
        <div className="pipeline-conduit">
          <div className="conduit-line" />
          <div className="conduit-pulse delay" />
        </div>

        {/* Node 3: Parallel Dispatch */}
        <div className="pipeline-branch-cluster">
          <div className={`branch-item ${wfStage >= 3 ? 'branch-active' : ''}`}>
            <span className="branch-dot" />
            <div className="branch-details">
              <span className="branch-title">Salesforce Enterprise</span>
              <span className="branch-sub">Sync record &amp; license allocation</span>
            </div>
            <span className="branch-status">{wfStage >= 3 ? '200 OK ✓' : 'Queued'}</span>
          </div>

          <div className={`branch-item ${wfStage >= 3 ? 'branch-active' : ''}`}>
            <span className="branch-dot" />
            <div className="branch-details">
              <span className="branch-title">Executive Slack Alert</span>
              <span className="branch-sub">Dispatched to #deals-won</span>
            </div>
            <span className="branch-status">{wfStage >= 3 ? 'Delivered ✓' : 'Pending'}</span>
          </div>

          <div className={`branch-item ${wfStage >= 3 ? 'branch-active' : ''}`}>
            <span className="branch-dot" />
            <div className="branch-details">
              <span className="branch-title">PostgreSQL Audit Trail</span>
              <span className="branch-sub">Cryptographically signed commit</span>
            </div>
            <span className="branch-status">{wfStage >= 3 ? 'Committed ✓' : 'Pending'}</span>
          </div>
        </div>
      </div>

      {/* Console Bottom Bar */}
      <div className="visual-console-footer">
        <div className="footer-meta-tag">
          <Workflow size={13} />
          <span>Exponential Backoff · 100% Guaranteed Delivery SLA</span>
        </div>
        <div className={`footer-status-pill ${wfStage === 4 ? 'status-complete-glow' : ''}`}>
          <span>{wfStage === 4 ? '✓ 3 of 3 Targets Synced' : '3 Targets In Progress'}</span>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Bespoke Visual 03: Voice AI Telephony & Conversation Stream (Living Animation)
   -------------------------------------------------------------------------- */
function VoiceAiVisual() {
  const [seconds, setSeconds] = useState(102);
  const [activeBubble, setActiveBubble] = useState(2);

  // Live timer tick
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Conversational cadence simulation
  useEffect(() => {
    const bubbleTimer = setInterval(() => {
      setActiveBubble((b) => (b >= 3 ? 1 : b + 1));
    }, 2800);
    return () => clearInterval(bubbleTimer);
  }, []);

  const formatTime = (totalSec) => {
    const m = Math.floor(totalSec / 60).toString().padStart(2, '0');
    const s = (totalSec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="cap-visual-box voice-visual">
      {/* Console Top Bar */}
      <div className="visual-console-topbar">
        <div className="visual-console-badge">
          <PhoneCall size={15} className="console-accent-icon" />
          <span className="console-title">Streaming Voice Gateway</span>
          <span className="console-thread-id">#call-v924</span>
        </div>
        <div className="visual-console-telemetry">
          <span className="telemetry-pulse-dot voice-live" />
          <span className="telemetry-label">Live Call · 240ms Latency</span>
        </div>
      </div>

      {/* Caller Details & Live Waveform */}
      <div className="visual-console-body">
        <div className="voice-caller-panel">
          <div className="caller-info">
            <span className="caller-name">Sarah Jenkins</span>
            <span className="caller-meta">VP Operations · Meridian Health · Inbound Call</span>
          </div>
          <div className="call-timer-box">
            <span className="call-duration">{formatTime(seconds)}</span>
            <span className="call-codec">Opus 48kHz</span>
          </div>
        </div>

        {/* Animated Sound Waveform */}
        <div className="voice-waveform-container" aria-label="Live Voice Frequency Waveform">
          <div className="waveform-bar h-4 bar-anim-1" />
          <div className="waveform-bar h-8 bar-anim-2" />
          <div className="waveform-bar h-14 bar-anim-3" />
          <div className="waveform-bar h-20 bar-anim-4" />
          <div className="waveform-bar h-12 bar-anim-2" />
          <div className="waveform-bar h-24 bar-anim-5" />
          <div className="waveform-bar h-16 bar-anim-3" />
          <div className="waveform-bar h-28 bar-anim-6" />
          <div className="waveform-bar h-22 bar-anim-4" />
          <div className="waveform-bar h-14 bar-anim-2" />
          <div className="waveform-bar h-18 bar-anim-5" />
          <div className="waveform-bar h-8 bar-anim-1" />
          <div className="waveform-bar h-16 bar-anim-3" />
          <div className="waveform-bar h-24 bar-anim-4" />
          <div className="waveform-bar h-12 bar-anim-2" />
          <div className="waveform-bar h-6 bar-anim-1" />
        </div>

        {/* Live Conversation Stream */}
        <div className="voice-transcript-stream">
          <div className={`transcript-bubble caller ${activeBubble === 1 ? 'bubble-focus' : ''}`}>
            <span className="bubble-speaker">Sarah:</span>
            <span className="bubble-text">"Hi, I need to reschedule our implementation kickoff meeting to Thursday."</span>
          </div>

          <div className={`transcript-bubble agent ${activeBubble === 2 ? 'bubble-focus' : ''}`}>
            <span className="bubble-speaker">Hutomate Voice AI:</span>
            <span className="bubble-text">"I can take care of that right now, Sarah. I have slots open Thursday at 2:00 PM or 3:30 PM EST. Which works best?"</span>
          </div>

          <div className={`transcript-bubble caller ${activeBubble === 3 ? 'bubble-focus' : ''}`}>
            <span className="bubble-speaker">Sarah:</span>
            <span className="bubble-text">"Thursday at 2:00 PM EST works perfectly. Thank you!"</span>
          </div>
        </div>

        {/* Real-time Entity Extraction & Calendar Booking */}
        <div className="voice-action-card">
          <div className="action-card-header">
            <span className="action-tag">INTENT CLASSIFIED</span>
            <span className="action-badge">Confidence 99.2%</span>
          </div>
          <div className="action-card-details">
            <div className="action-detail-item">
              <span className="action-lbl">Intent:</span>
              <span className="action-val">Reschedule Consultation</span>
            </div>
            <div className="action-detail-item">
              <span className="action-lbl">Slot Confirmed:</span>
              <span className="action-val-cyan">Thursday, 2:00 PM EST</span>
            </div>
            <div className="action-detail-item">
              <span className="action-lbl">Calendar Sync:</span>
              <span className="action-val-green">Updated &amp; SMS Dispatched ✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Console Bottom Bar */}
      <div className="visual-console-footer">
        <div className="footer-meta-tag">
          <ShieldCheck size={13} />
          <span>HIPAA &amp; PCI-Compliant Audio Stream · Real-Time Operator Fallback</span>
        </div>
        <div className="footer-status-pill status-complete-glow">
          <span>Appointment Secured</span>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Bespoke Visual 04: Custom AI Solutions Enterprise Architecture (Living Animation)
   -------------------------------------------------------------------------- */
function CustomAiVisual() {
  const [activeTier, setActiveTier] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTier((t) => (t >= 3 ? 1 : t + 1));
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cap-visual-box custom-ai-visual">
      {/* Console Top Bar */}
      <div className="visual-console-topbar">
        <div className="visual-console-badge">
          <Cpu size={15} className="console-accent-icon" />
          <span className="console-title">Enterprise Custom AI Topology</span>
          <span className="console-thread-id">#arch-vpc-prod</span>
        </div>
        <div className="visual-console-telemetry">
          <span className="telemetry-pulse-dot is-running" />
          <span className="telemetry-label">Isolated VPC · 42ms</span>
        </div>
      </div>

      {/* Multi-Tier Architecture Diagram */}
      <div className="visual-console-body">
        {/* Tier 1: Client Interfaces */}
        <div className={`arch-tier-box ${activeTier === 1 ? 'tier-active' : ''}`}>
          <div className="arch-tier-header">
            <span className="tier-tag">TIER 1</span>
            <span className="tier-title">Client Access Layer</span>
          </div>
          <div className="arch-services-grid">
            <div className="arch-service-pill pill-pulse">Internal Ops Portal</div>
            <div className="arch-service-pill">Mobile Field App</div>
            <div className="arch-service-pill">Partner REST / GraphQL</div>
          </div>
        </div>

        {/* Tier Connector */}
        <div className="arch-tier-connector">
          <span className="tier-line" />
          <span className="tier-label">TLS 1.3 Encrypted Traffic</span>
        </div>

        {/* Tier 2: Secure API Gateway */}
        <div className={`arch-tier-box gateway ${activeTier === 2 ? 'tier-active' : ''}`}>
          <div className="arch-tier-header">
            <span className="tier-tag">TIER 2</span>
            <span className="tier-title">API Gateway &amp; Governance</span>
          </div>
          <div className="arch-gateway-features">
            <span className="feat-chip">OAuth 2.0 / JWT Auth</span>
            <span className="feat-chip">Token Rate Limiting</span>
            <span className="feat-chip">Audit Logging</span>
            <span className="feat-chip">Zero-Retention Gateway</span>
          </div>
        </div>

        {/* Tier Connector */}
        <div className="arch-tier-connector">
          <span className="tier-line" />
          <span className="tier-label">Private VPC Peering</span>
        </div>

        {/* Tier 3: Private AI Model Inference & Vectors */}
        <div className={`arch-tier-box model-tier ${activeTier === 3 ? 'tier-active' : ''}`}>
          <div className="arch-tier-header">
            <span className="tier-tag">TIER 3</span>
            <span className="tier-title">Private Inference &amp; Storage</span>
          </div>
          <div className="arch-infra-grid">
            <div className="infra-card">
              <Server size={14} className="infra-icon" />
              <div className="infra-text">
                <span className="infra-name">vLLM Inference Cluster</span>
                <span className="infra-desc">Fine-tuned domain model</span>
              </div>
            </div>
            <div className="infra-card">
              <Database size={14} className="infra-icon" />
              <div className="infra-text">
                <span className="infra-name">Qdrant Vector DB</span>
                <span className="infra-desc">2.4M Grounded Vectors</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Console Bottom Bar */}
      <div className="visual-console-footer">
        <div className="footer-meta-tag">
          <Lock size={13} />
          <span>Client Data Sovereignty · Dedicated Private VPC Sandbox</span>
        </div>
        <div className="footer-status-pill status-complete-glow">
          <span>99.99% Uptime SLA</span>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Main Core Capabilities Section Component
   -------------------------------------------------------------------------- */
export default function CapabilitiesSection() {
  const [activeNavId, setActiveNavId] = useState('ai-agents');
  const capRef = useRef(null);

  // Dedicated refs for the cinematic scroll-driven EffectiveSoft introduction
  const introRef = useRef(null);
  const orbRef = useRef(null);
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subheadRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check prefers-reduced-motion or automated crawler/inspection environment
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isAutomated =
      Boolean(window.navigator?.webdriver) ||
      /bot|googlebot|crawler|spider|headless|phantom|lighthouse|pagespeed|bingbot|yandex|slurp|baiduspider|inspection|preview|prerender/i.test(
        navigator.userAgent || ''
      );

    if (prefersReduced || isAutomated || !introRef.current) return;

    let ctx;
    try {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top top',
            end: '+=110%',
            pin: true,
            pinSpacing: true,
            scrub: 0.9,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Initial State: Orb scales & ascends into center, Eyebrow enters
        tl.fromTo(
          orbRef.current,
          { scale: 0.6, y: 130, opacity: 0.2 },
          { scale: 1.15, y: 0, opacity: 0.95, ease: 'power2.out', duration: 0.35 }
        )
        .fromTo(
          eyebrowRef.current,
          { y: 25, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out', duration: 0.25 },
          0.05
        )
        // 2. Progressive Line 1 Reveal (mask translation up)
        .fromTo(
          line1Ref.current,
          { y: 65, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power3.out', duration: 0.35 },
          0.15
        )
        // 3. Progressive Line 2 Accent Reveal
        .fromTo(
          line2Ref.current,
          { y: 55, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power3.out', duration: 0.35 },
          0.28
        )
        // 4. Orb descends through the text, providing dynamic illumination exactly like EffectiveSoft
        .to(
          orbRef.current,
          { y: 160, scale: 1.25, opacity: 0.75, ease: 'power1.inOut', duration: 0.5 },
          0.35
        )
        // 5. Supporting Description reveals smoothly in coordination
        .fromTo(
          subheadRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out', duration: 0.4 },
          0.42
        )
        // 6. Settle & Hold phase before unpinning
        .to({}, { duration: 0.15 });
      }, introRef);
    } catch (err) {
      console.warn('Capabilities GSAP animation initialized gracefully with fallback:', err);
    }

    return () => {
      try {
        ctx?.revert();
      } catch {}
    };
  }, []);

  // Synchronize active navigation indicator with scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -40% 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const capId = entry.target.getAttribute('data-cap-id');
          if (capId) {
            setActiveNavId(capId);
          }
        }
      });
    }, observerOptions);

    CAPABILITIES.forEach((cap) => {
      const el = document.getElementById(`capability-${cap.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle clicking a navigation tab: smoothly scroll to the target capability row
  const handleNavClick = (id) => {
    setActiveNavId(id);
    const targetEl = document.getElementById(`capability-${id}`);
    if (targetEl) {
      const navOffset = 140; // account for sticky nav height and header
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleNavKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIdx = (index + 1) % CAPABILITIES.length;
      handleNavClick(CAPABILITIES[nextIdx].id);
      document.getElementById(`cap-nav-${CAPABILITIES[nextIdx].id}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIdx = (index - 1 + CAPABILITIES.length) % CAPABILITIES.length;
      handleNavClick(CAPABILITIES[prevIdx].id);
      document.getElementById(`cap-nav-${CAPABILITIES[prevIdx].id}`)?.focus();
    }
  };

  const renderVisualForCap = (capId) => {
    switch (capId) {
      case 'ai-agents':
        return <AiAgentsVisual />;
      case 'workflow-automation':
        return <WorkflowAutomationVisual />;
      case 'voice-ai':
        return <VoiceAiVisual />;
      case 'custom-ai':
        return <CustomAiVisual />;
      default:
        return <AiAgentsVisual />;
    }
  };

  return (
    <section className="capabilities-home-section" id="capabilities" ref={capRef} aria-label="Core Capabilities">
      {/* ----------------------------------------------------------------------
          A. Cinematic Scroll-Driven Capabilities Introduction (EffectiveSoft Motion Reference)
          - Scroll-controlled GSAP + ScrollTrigger pinned sequence
          - Progressive line-by-line masked typography reveal
          - Dynamic radial orb expansion and downward illumination translation
          - Coordinated description glide and settling
          ---------------------------------------------------------------------- */}
      <div className="cap-intro-experience" ref={introRef}>
        <div className="cap-radial-visual" ref={orbRef} aria-hidden="true" />

        <div className="container">
          <div className="cap-home-header">
            <div className="cap-home-eyebrow" ref={eyebrowRef}>
              <span className="cap-eyebrow-beacon" aria-hidden="true" />
              <span className="cap-eyebrow-text">CORE CAPABILITIES</span>
            </div>

            <h2 className="cap-home-headline">
              <span className="cap-headline-line-wrap">
                <span className="cap-headline-line" ref={line1Ref}>
                  Intelligence built around the
                </span>
              </span>
              <span className="cap-headline-line-wrap">
                <span className="cap-headline-line cap-headline-accent" ref={line2Ref}>
                  way you work.
                </span>
              </span>
            </h2>

            <p className="cap-home-subhead" ref={subheadRef}>
              We architect and deploy practical intelligent systems that eliminate administrative drag, connect your software tools, and help your business scale efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------
          B. Main Service Showcase Canvas (EffectiveSoft-Inspired Two-Column Vertical Flow)
          - Synchronized Sticky 4-Capability Navigation Rail
          - Four Vertically Arranged Continuous Capability Sections
          - Interactive Large Left Visual with "View More ↗" Hover Reveal
          - Dedicated Page Routing for every capability
          ---------------------------------------------------------------------- */}
      <div className="cap-showcase-canvas">
        <div className="container">
          {/* Rootstrap-inspired Enterprise Architecture Trust Indicators */}
          <div className="cap-trust-indicators">
            <span className="trust-item"><span className="trust-bullet">•</span> SOC-2 COMPLIANT ARCHITECTURE</span>
            <span className="trust-item"><span className="trust-bullet">•</span> ZERO-RETENTION PRIVACY</span>
            <span className="trust-item"><span className="trust-bullet">•</span> YOU OWN THE CODE &amp; WORKFLOWS</span>
          </div>

          {/* Synchronized Four-Capability Sticky Navigation Rail */}
          <div className="cap-sticky-nav-wrapper">
            <nav className="cap-horizontal-selector" role="tablist" aria-label="Core Capabilities Navigation">
              {CAPABILITIES.map((cap, idx) => {
                const isActive = cap.id === activeNavId;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    role="tab"
                    id={`cap-nav-${cap.id}`}
                    aria-controls={`capability-${cap.id}`}
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    className={`cap-selector-tab ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleNavClick(cap.id)}
                    onKeyDown={(e) => handleNavKeyDown(e, idx)}
                  >
                    <span className="tab-number">{cap.num}</span>
                    <span className="tab-title">{cap.title}</span>
                    {isActive && <span className="tab-active-indicator" aria-hidden="true" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Continuous Vertical Two-Column Service Showcase (EffectiveSoft Reference) */}
          <div className="cap-vertical-showcase-flow">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                id={`capability-${cap.id}`}
                data-cap-id={cap.id}
                className="cap-service-row"
              >
                {/* Left Side: Large Interactive Visual with View More Hover Interaction */}
                <div className="cap-service-visual-col">
                  <Link
                    to={cap.route}
                    className="cap-visual-card-interactive"
                    aria-label={`View More about ${cap.title}`}
                  >
                    <div className="cap-visual-inner">
                      {renderVisualForCap(cap.id)}
                    </div>

                    {/* EffectiveSoft-inspired View More Hover Overlay */}
                    <div className="cap-visual-hover-overlay" aria-hidden="true">
                      <div className="cap-view-more-badge">
                        <span>View More</span>
                        <ArrowUpRight size={18} className="view-more-arrow" />
                      </div>
                    </div>

                    {/* Touch device indicator */}
                    <div className="cap-mobile-touch-badge" aria-hidden="true">
                      <span>View More</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </Link>
                </div>

                {/* Right Side: Service Information */}
                <div className="cap-service-info-col">
                  <div className="cap-service-category-badge">
                    <span className="category-badge-dot" aria-hidden="true" />
                    <span>{cap.categoryBadge}</span>
                  </div>

                  <h3 className="cap-service-title">{cap.title}</h3>
                  <p className="cap-service-tagline">{cap.tagline}</p>
                  <p className="cap-service-desc">{cap.overview}</p>

                  <div className="cap-service-highlights">
                    <h4 className="highlights-heading">Key Technical Highlights</h4>
                    <ul className="highlights-list" role="list">
                      {cap.features.map((feat, fIdx) => (
                        <li key={fIdx} className="highlight-item">
                          <span className="highlight-check-box" aria-hidden="true">
                            <CheckCircle2 size={16} className="highlight-check" />
                          </span>
                          <span className="highlight-text">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="cap-service-actions">
                    <Button variant="primary" size="md" href="#contact" className="cap-action-btn">
                      Discuss Your Project
                    </Button>
                    <Link to={cap.route} className="cap-row-view-more-link">
                      <span>Explore {cap.title} Details</span>
                      <ArrowUpRight size={17} className="view-more-arrow" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
