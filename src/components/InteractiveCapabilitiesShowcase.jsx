import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Bot,
  PhoneCall,
  Cpu,
  Check,
  ArrowRight,
  Zap,
  ShieldCheck,
  Calendar,
  Database,
  Clock,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  ArrowUpRight
} from 'lucide-react';
import { Link } from '../router/Router';
import { CAPABILITIES_DATA } from '../data/capabilitiesData';
import './InteractiveCapabilitiesShowcase.css';

/**
 * Visual SVG / Graphics for each of the 4 Carousel Cards
 */
function CardVisualGraphic({ id }) {
  if (id === 'ai-agents') {
    return (
      <div className="cap-card-graphic cap-graphic-agents">
        <svg viewBox="0 0 160 110" className="cap-graphic-svg" fill="none">
          <circle cx="80" cy="55" r="42" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="80" cy="55" r="30" fill="url(#blueGradCard)" opacity="0.1" />
          <circle cx="80" cy="55" r="22" stroke="#2563EB" strokeWidth="2" />
          <circle cx="80" cy="55" r="8" fill="#2563EB" />
          {/* Orbital Nodes */}
          <circle cx="45" cy="40" r="5" fill="#3B82F6" />
          <circle cx="115" cy="40" r="5" fill="#60A5FA" />
          <circle cx="95" cy="85" r="4" fill="#93C5FD" />
          <path d="M 45 40 L 80 55 M 115 40 L 80 55 M 95 85 L 80 55" stroke="rgba(37, 99, 235, 0.35)" strokeWidth="1.5" strokeDasharray="2 2" />
          <defs>
            <radialGradient id="blueGradCard" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (id === 'voice-ai') {
    return (
      <div className="cap-card-graphic cap-graphic-voice">
        <svg viewBox="0 0 160 110" className="cap-graphic-svg" fill="none">
          <circle cx="80" cy="55" r="36" fill="rgba(37, 99, 235, 0.05)" />
          {/* Waveform bars */}
          <rect x="36" y="50" width="4" height="12" rx="2" fill="rgba(37, 99, 235, 0.3)" />
          <rect x="48" y="44" width="4" height="24" rx="2" fill="rgba(37, 99, 235, 0.5)" />
          <rect x="60" y="36" width="4" height="40" rx="2" fill="#2563EB" />
          <rect x="72" y="28" width="4" height="54" rx="2" fill="#1D4ED8" />
          <rect x="84" y="32" width="4" height="48" rx="2" fill="#2563EB" />
          <rect x="96" y="40" width="4" height="32" rx="2" fill="rgba(37, 99, 235, 0.7)" />
          <rect x="108" y="46" width="4" height="20" rx="2" fill="rgba(37, 99, 235, 0.4)" />
          <rect x="120" y="51" width="4" height="10" rx="2" fill="rgba(37, 99, 235, 0.25)" />
        </svg>
      </div>
    );
  }

  if (id === 'workflow-automation') {
    return (
      <div className="cap-card-graphic cap-graphic-workflow">
        <svg viewBox="0 0 160 110" className="cap-graphic-svg" fill="none">
          {/* Connected Step Tiles */}
          <rect x="25" y="38" width="28" height="28" rx="6" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
          <path d="M 39 46 L 39 58 M 33 52 L 45 52" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
          
          <rect x="66" y="24" width="30" height="30" rx="6" fill="#2563EB" />
          <polygon points="78,34 88,39 78,44" fill="#FFFFFF" />

          <rect x="108" y="46" width="28" height="28" rx="6" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
          <circle cx="122" cy="60" r="5" fill="#3B82F6" />

          {/* Connection Curves */}
          <path d="M 53 52 C 60 52, 60 39, 66 39" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 96 39 C 102 39, 102 60, 108 60" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      </div>
    );
  }

  // custom-ai
  return (
    <div className="cap-card-graphic cap-graphic-custom">
      <svg viewBox="0 0 160 110" className="cap-graphic-svg" fill="none">
        {/* Isometric / Mesh Geometry */}
        <polygon points="80,20 115,40 80,60 45,40" fill="rgba(37, 99, 235, 0.08)" stroke="#2563EB" strokeWidth="1.5" />
        <polygon points="45,40 80,60 80,95 45,75" fill="rgba(37, 99, 235, 0.15)" stroke="#2563EB" strokeWidth="1.5" />
        <polygon points="115,40 80,60 80,95 115,75" fill="rgba(37, 99, 235, 0.22)" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="80" cy="58" r="4" fill="#2563EB" />
        <circle cx="45" cy="40" r="3" fill="#60A5FA" />
        <circle cx="115" cy="40" r="3" fill="#60A5FA" />
      </svg>
    </div>
  );
}

/**
 * Right Column Interactive Visual 1: AI Agents Laptop with live task stream & floating cards
 */
function VisualAiAgents() {
  return (
    <div className="cap-visual-display cap-visual-agents">
      {/* Laptop Frame */}
      <div className="cap-laptop-mockup">
        {/* Laptop Top Bezel / Camera */}
        <div className="laptop-bezel">
          <div className="laptop-camera-dot"></div>
        </div>

        {/* Laptop Screen */}
        <div className="laptop-screen">
          {/* App Header */}
          <div className="agent-ui-header">
            <div className="agent-ui-header-left">
              <div className="agent-ui-avatar">
                <Bot size={14} />
              </div>
              <span className="agent-ui-name">AI Agent</span>
              <span className="agent-ui-status-pill">Active</span>
            </div>
            <div className="agent-ui-header-right">
              <span className="agent-ui-tools-count">5 tools connected</span>
            </div>
          </div>

          {/* Chat / Execution Area */}
          <div className="agent-ui-chat-body">
            {/* User Request Bubble */}
            <div className="agent-msg agent-msg--user">
              <p>Find new leads from our website and add them to our CRM</p>
            </div>

            {/* Agent Live Processing Card */}
            <div className="agent-msg agent-msg--agent">
              <div className="agent-working-header">
                <span className="agent-pulse-dot"></span>
                <strong>Working on it...</strong>
              </div>
              <ul className="agent-task-checklist">
                <li className="agent-task-item is-done">
                  <Check size={13} className="task-chk" />
                  <span>Scanning website leads</span>
                </li>
                <li className="agent-task-item is-done">
                  <Check size={13} className="task-chk" />
                  <span>Validating business email &amp; company</span>
                </li>
                <li className="agent-task-item is-done">
                  <Check size={13} className="task-chk" />
                  <span>Adding qualified contact to CRM</span>
                </li>
                <li className="agent-task-item is-complete">
                  <Check size={13} className="task-chk" />
                  <span className="task-highlight">Task completed • 14 leads processed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Base */}
        <div className="laptop-base">
          <div className="laptop-trackpad"></div>
        </div>
      </div>

      {/* Floating Connected Tool Badges (Matching Reference) */}
      <div className="floating-tool-badge tool-slack" title="Slack Integration">
        <span className="tool-icon">#</span>
        <span className="tool-name">Slack</span>
      </div>
      <div className="floating-tool-badge tool-notion" title="Notion Integration">
        <span className="tool-icon">N</span>
        <span className="tool-name">Notion</span>
      </div>
      <div className="floating-tool-badge tool-sheets" title="Google Sheets Integration">
        <span className="tool-icon">田</span>
        <span className="tool-name">Sheets</span>
      </div>
      <div className="floating-tool-badge tool-hubspot" title="HubSpot CRM Integration">
        <span className="tool-icon">●</span>
        <span className="tool-name">HubSpot</span>
      </div>
      <div className="floating-tool-badge tool-gmail" title="Gmail Integration">
        <span className="tool-icon">M</span>
        <span className="tool-name">Gmail</span>
      </div>

      {/* Stacked Floating Information Cards (Matching Reference) */}
      <div className="floating-cards-column">
        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <Zap size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Takes Action</h4>
            <p className="feature-card-desc">Executes actual work in your tools</p>
          </div>
        </div>

        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <Database size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Uses Your Data</h4>
            <p className="feature-card-desc">Connects to CRM, Sheets, Databases</p>
          </div>
        </div>

        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <Clock size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Works 24/7</h4>
            <p className="feature-card-desc">No manual intervention required</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Right Column Interactive Visual 2: AI Receptionists Telephony & Calendar System
 */
function VisualAiReceptionists() {
  return (
    <div className="cap-visual-display cap-visual-voice">
      <div className="cap-telephony-mockup">
        {/* Call Banner */}
        <div className="call-live-header">
          <div className="call-status-badge">
            <span className="call-pulse-dot"></span>
            <span>INBOUND CALL • LIVE</span>
          </div>
          <span className="call-latency-pill">Latency: 280ms</span>
        </div>

        {/* Caller Info */}
        <div className="caller-profile-card">
          <div className="caller-avatar">SJ</div>
          <div className="caller-details">
            <span className="caller-name">Dr. Sarah Jenkins</span>
            <span className="caller-number">+1 (555) 234-8900 • Patient ID #4829</span>
          </div>
        </div>

        {/* Live Audio Waveform */}
        <div className="call-waveform-box" aria-label="Audio Waveform">
          <div className="soundwave-bar bar-1"></div>
          <div className="soundwave-bar bar-2"></div>
          <div className="soundwave-bar bar-3"></div>
          <div className="soundwave-bar bar-4"></div>
          <div className="soundwave-bar bar-5"></div>
          <div className="soundwave-bar bar-6"></div>
          <div className="soundwave-bar bar-7"></div>
          <div className="soundwave-bar bar-8"></div>
        </div>

        {/* Real-time Transcription Stream */}
        <div className="call-transcript-stream">
          <div className="transcript-row caller-row">
            <span className="transcript-speaker">Caller:</span>
            <p>&ldquo;Hi, I&rsquo;d like to reschedule my consultation to Thursday at 2 PM.&rdquo;</p>
          </div>
          <div className="transcript-row agent-row">
            <span className="transcript-speaker">AI Receptionist:</span>
            <p>&ldquo;I have Thursday at 2:00 PM open. I&rsquo;ve reserved that slot and sent your confirmation.&rdquo;</p>
          </div>
        </div>

        {/* Confirmation Action */}
        <div className="call-confirmation-badge">
          <Check size={14} className="conf-icon" />
          <span>Calendar Slot Confirmed: Thursday 2:00 PM • Google Calendar Synced</span>
        </div>
      </div>

      {/* Floating Tool Badges */}
      <div className="floating-tool-badge tool-slack" title="Twilio Voice">
        <span className="tool-icon">📞</span>
        <span className="tool-name">Twilio</span>
      </div>
      <div className="floating-tool-badge tool-notion" title="Google Calendar">
        <span className="tool-icon">📅</span>
        <span className="tool-name">Calendar</span>
      </div>
      <div className="floating-tool-badge tool-sheets" title="Outlook 365">
        <span className="tool-icon">✉️</span>
        <span className="tool-name">Outlook</span>
      </div>

      {/* Stacked Floating Information Cards */}
      <div className="floating-cards-column">
        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <PhoneCall size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Zero Missed Calls</h4>
            <p className="feature-card-desc">Answers 100% of inquiries 24/7/365</p>
          </div>
        </div>

        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <Calendar size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Direct Calendar Sync</h4>
            <p className="feature-card-desc">Books appointments with conflict check</p>
          </div>
        </div>

        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <ShieldCheck size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Warm Transfer</h4>
            <p className="feature-card-desc">Escalates complex calls to staff</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Right Column Interactive Visual 3: Workflow Automation Connected Node Pipeline
 */
function VisualWorkflowAutomation() {
  return (
    <div className="cap-visual-display cap-visual-pipeline">
      <div className="cap-pipeline-mockup">
        <div className="pipeline-header">
          <div className="pipeline-title-group">
            <span className="pipeline-indicator"></span>
            <span className="pipeline-title">EVENT PIPELINE: ACTIVE RUN</span>
          </div>
          <span className="pipeline-metric">Latency: 118ms • 0 Errors</span>
        </div>

        {/* 4 Connected Stages */}
        <div className="pipeline-stages-list">
          <div className="pipe-stage-item is-done">
            <div className="pipe-step-num">1</div>
            <div className="pipe-step-content">
              <span className="pipe-step-label">Webhook Trigger</span>
              <span className="pipe-step-val">Lead Form Submitted (Typeform)</span>
            </div>
            <span className="pipe-step-badge">Received</span>
          </div>

          <div className="pipe-stage-item is-done">
            <div className="pipe-step-num">2</div>
            <div className="pipe-step-content">
              <span className="pipe-step-label">Data Normalization</span>
              <span className="pipe-step-val">Schema validation &amp; enrichment</span>
            </div>
            <span className="pipe-step-badge">Validated</span>
          </div>

          <div className="pipe-stage-item is-done">
            <div className="pipe-step-num">3</div>
            <div className="pipe-step-content">
              <span className="pipe-step-label">Action Execution</span>
              <span className="pipe-step-val">Update HubSpot CRM + Stripe invoice</span>
            </div>
            <span className="pipe-step-badge">Executed</span>
          </div>

          <div className="pipe-stage-item is-complete">
            <div className="pipe-step-num">4</div>
            <div className="pipe-step-content">
              <span className="pipe-step-label">Team Notification</span>
              <span className="pipe-step-val">Post to Slack #ops + email client</span>
            </div>
            <span className="pipe-step-badge">Delivered</span>
          </div>
        </div>
      </div>

      {/* Floating Tool Badges */}
      <div className="floating-tool-badge tool-slack" title="Stripe">
        <span className="tool-icon">S</span>
        <span className="tool-name">Stripe</span>
      </div>
      <div className="floating-tool-badge tool-notion" title="HubSpot">
        <span className="tool-icon">H</span>
        <span className="tool-name">HubSpot</span>
      </div>
      <div className="floating-tool-badge tool-sheets" title="Airtable">
        <span className="tool-icon">A</span>
        <span className="tool-name">Airtable</span>
      </div>

      {/* Stacked Floating Information Cards */}
      <div className="floating-cards-column">
        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <GitBranch size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Multi-Tool Sync</h4>
            <p className="feature-card-desc">Zero copy-pasting across applications</p>
          </div>
        </div>

        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <Zap size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Real-Time Triggers</h4>
            <p className="feature-card-desc">Event-driven execution in milliseconds</p>
          </div>
        </div>

        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <ShieldCheck size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Fault-Tolerant</h4>
            <p className="feature-card-desc">Automatic retries &amp; deduplication</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Right Column Interactive Visual 4: Integrations & Custom Architecture Blueprint
 */
function VisualCustomAi() {
  return (
    <div className="cap-visual-display cap-visual-architecture">
      <div className="cap-arch-mockup">
        <div className="arch-header">
          <div className="arch-title-group">
            <Cpu size={15} className="arch-icon" />
            <span className="arch-title">ENTERPRISE SYSTEM ARCHITECTURE</span>
          </div>
          <span className="arch-badge">SOC2-Ready • Private VPC</span>
        </div>

        {/* 3-Tier Layered Architecture Diagram */}
        <div className="arch-layers-stack">
          {/* Layer 1: Ingestion */}
          <div className="arch-layer-box">
            <span className="arch-layer-name">Tier 1: Business Tool Ingestion</span>
            <div className="arch-layer-pills">
              <span className="arch-pill">Salesforce</span>
              <span className="arch-pill">QuickBooks</span>
              <span className="arch-pill">Legacy SQL</span>
              <span className="arch-pill">Custom Webhooks</span>
            </div>
          </div>

          <div className="arch-connector-line">
            <span className="arch-con-arrow">↓ 256-bit TLS Encrypted Pipeline</span>
          </div>

          {/* Layer 2: Hutomate Core Gateway */}
          <div className="arch-layer-box arch-layer-box--core">
            <span className="arch-layer-name">Tier 2: Hutomate Integration Gateway</span>
            <div className="arch-layer-pills">
              <span className="arch-pill-core">Auth &amp; Token Mgmt</span>
              <span className="arch-pill-core">Schema Transform</span>
              <span className="arch-pill-core">Rate Limiting</span>
              <span className="arch-pill-core">Audit Trails</span>
            </div>
          </div>

          <div className="arch-connector-line">
            <span className="arch-con-arrow">↓ Deterministic Execution Handshake</span>
          </div>

          {/* Layer 3: Production LLM & Data Stores */}
          <div className="arch-layer-box">
            <span className="arch-layer-name">Tier 3: Enterprise Data &amp; Models</span>
            <div className="arch-layer-pills">
              <span className="arch-pill">Vector Embeddings</span>
              <span className="arch-pill">Private VPC LLM</span>
              <span className="arch-pill">Downstream ERP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tool Badges */}
      <div className="floating-tool-badge tool-slack" title="AWS Infrastructure">
        <span className="tool-icon">☁️</span>
        <span className="tool-name">AWS</span>
      </div>
      <div className="floating-tool-badge tool-notion" title="PostgreSQL">
        <span className="tool-icon">🐘</span>
        <span className="tool-name">Postgres</span>
      </div>
      <div className="floating-tool-badge tool-sheets" title="Snowflake">
        <span className="tool-icon">❄️</span>
        <span className="tool-name">Snowflake</span>
      </div>

      {/* Stacked Floating Information Cards */}
      <div className="floating-cards-column">
        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <Cpu size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Bespoke Systems</h4>
            <p className="feature-card-desc">Engineered around your exact schema</p>
          </div>
        </div>

        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <ShieldCheck size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Data Sovereignty</h4>
            <p className="feature-card-desc">Private VPC with zero model training</p>
          </div>
        </div>

        <div className="floating-feature-card">
          <div className="feature-card-icon-box">
            <Database size={18} />
          </div>
          <div className="feature-card-text">
            <h4 className="feature-card-title">Legacy Compatible</h4>
            <p className="feature-card-desc">Bridges systems without modern APIs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Main Interactive Capabilities Showcase Component
 * Features:
 * - Reference-exact horizontal carousel cards with active blue borders, glow, and clean graphics
 * - Sticky scroll-controlled experience on desktop that naturally progresses and releases
 * - Full touch-swiping, arrows, and keyboard support
 * - Rich two-column detail section with laptop/telephony/pipeline interfaces
 */
export default function InteractiveCapabilitiesShowcase({
  defaultActiveId = 'ai-agents',
  showHeader = true,
  heading,
  supportText,
  eyebrow = 'CAPABILITIES',
}) {
  const [activeId, setActiveId] = useState(defaultActiveId);
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 1024 : true));
  const carouselTrackRef = useRef(null);
  const isFirstMountRef = useRef(true);

  // Active Index
  const activeIdx = CAPABILITIES_DATA.findIndex((c) => c.id === activeId) !== -1
    ? CAPABILITIES_DATA.findIndex((c) => c.id === activeId)
    : 0;

  // Screen size check for mobile/desktop layout
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport, { passive: true });
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Smooth navigation to corresponding capability section without scroll locking
  const handleSelectCapability = useCallback((id) => {
    setActiveId(id);

    if (typeof window !== 'undefined') {
      const targetEl = document.getElementById(`cap-section-${id}`);
      if (targetEl) {
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  // Sync active card in selector with currently visible section in natural document scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = CAPABILITIES_DATA.map((cap) =>
      document.getElementById(`cap-section-${cap.id}`)
    ).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const foundId = entry.target.id.replace('cap-section-', '');
            setActiveId(foundId);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-60px 0px -40% 0px',
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const goToNext = useCallback(() => {
    const nextIdx = (activeIdx + 1) % CAPABILITIES_DATA.length;
    handleSelectCapability(CAPABILITIES_DATA[nextIdx].id);
  }, [activeIdx, handleSelectCapability]);

  const goToPrev = useCallback(() => {
    const prevIdx = (activeIdx - 1 + CAPABILITIES_DATA.length) % CAPABILITIES_DATA.length;
    handleSelectCapability(CAPABILITIES_DATA[prevIdx].id);
  }, [activeIdx, handleSelectCapability]);

  // Touch swiping handlers for mobile carousel selector
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Scroll carousel container horizontally when active card changes (without jumping page vertically)
  useEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      return;
    }
    if (!isDesktop && carouselTrackRef.current) {
      const activeCardEl = carouselTrackRef.current.children[activeIdx];
      if (activeCardEl) {
        const track = carouselTrackRef.current;
        const cardLeft = activeCardEl.offsetLeft;
        const cardWidth = activeCardEl.offsetWidth;
        const trackWidth = track.offsetWidth;
        track.scrollTo({
          left: cardLeft - trackWidth / 2 + cardWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [activeIdx, isDesktop]);

  // Render detail visual corresponding to capability ID
  const renderVisualForCapability = (id) => {
    switch (id) {
      case 'ai-agents':
        return <VisualAiAgents />;
      case 'voice-ai':
        return <VisualAiReceptionists />;
      case 'workflow-automation':
        return <VisualWorkflowAutomation />;
      case 'custom-ai':
        return <VisualCustomAi />;
      default:
        return <VisualAiAgents />;
    }
  };

  return (
    <div className="capabilities-master-container">
      <div className="capabilities-content-wrapper">
        {/* =========================================================================
            TOP SECTION: HEADER (Matching Reference)
            ========================================================================= */}
        {showHeader && (
          <div className="cap-top-header reveal-on-scroll">
            <div className="cap-top-header-left">
              <div className="cap-eyebrow-pill">
                <span className="cap-eyebrow-dot"></span>
                <span>{eyebrow}</span>
              </div>
              <h2 className="cap-main-heading">
                {heading || 'Intelligence that works with your business.'}
              </h2>
            </div>

            <div className="cap-top-header-right">
              <p className="cap-header-support-text">
                {supportText || 'Explore our core capabilities. Select a capability to discover how Hutomate can help your business operate smarter.'}
              </p>
            </div>
          </div>
        )}

        {/* =========================================================================
            CAROUSEL ROW: 4 HORIZONTAL CARDS + CONTROLS (Top Capability Selector)
            ========================================================================= */}
        <div
          className="cap-carousel-wrapper reveal-on-scroll reveal-delay-1"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            className="cap-nav-arrow cap-nav-arrow--left"
            onClick={goToPrev}
            aria-label="Previous capability"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards Track */}
          <div ref={carouselTrackRef} className="cap-cards-track" role="tablist">
            {CAPABILITIES_DATA.map((cap) => {
              const isActive = activeId === cap.id;
              return (
                <div
                  key={cap.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  className={`cap-horizon-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleSelectCapability(cap.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSelectCapability(cap.id);
                    }
                  }}
                >
                  {/* Card Top: Number + subtle line */}
                  <div className="cap-card-num-row">
                    <span className="cap-card-number">{cap.num}</span>
                    <span className="cap-card-dash"></span>
                  </div>

                  {/* Card Visual Graphic */}
                  <CardVisualGraphic id={cap.id} />

                  {/* Card Bottom: Service Name */}
                  <div className="cap-card-bottom">
                    <h3 className="cap-card-title">{cap.navTitle}</h3>
                  </div>

                  {/* Active Indicator Border / Glow */}
                  {isActive && <div className="cap-card-active-glow" />}
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="cap-nav-arrow cap-nav-arrow--right"
            onClick={goToNext}
            aria-label="Next capability"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Segmented Progress Indicators */}
        <div className="cap-progress-indicator-row" role="tablist" aria-label="Capability indicators">
          {CAPABILITIES_DATA.map((cap) => {
            const isActive = activeId === cap.id;
            return (
              <button
                key={cap.id}
                type="button"
                className={`cap-indicator-seg ${isActive ? 'is-active' : ''}`}
                onClick={() => handleSelectCapability(cap.id)}
                aria-label={`Jump to capability ${cap.num} - ${cap.navTitle}`}
              />
            );
          })}
        </div>

        {/* =========================================================================
            SEQUENTIAL DETAIL SECTIONS: NATURAL DOCUMENT FLOW (All 4 Accessible)
            ========================================================================= */}
        <div className="cap-sections-flow-container">
          {CAPABILITIES_DATA.map((cap, idx) => (
            <React.Fragment key={cap.id}>
              <section
                id={`cap-section-${cap.id}`}
                className="cap-detail-showcase reveal-on-scroll"
              >
                {/* Left Column: Rich Editorial Content & CTAs */}
                <div className="cap-detail-narrative-col">
                  <div className="cap-detail-eyebrow">
                    <span className="cap-detail-dot"></span>
                    <span>{cap.eyebrow}</span>
                  </div>

                  <h3 className="cap-detail-heading">{cap.heading}</h3>
                  <p className="cap-detail-desc">{cap.desc}</p>

                  {/* 4 Practical Benefits with Blue Checkmarks */}
                  <ul className="cap-detail-benefits-list">
                    {cap.benefits.map((b, i) => (
                      <li key={i} className="cap-benefit-item">
                        <div className="benefit-check-circle">
                          <Check size={14} strokeWidth={2.8} />
                        </div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Workflow Pipeline Step Sequence */}
                  <div className="cap-detail-workflow-box">
                    <span className="workflow-box-label">End-to-End Workflow:</span>
                    <div className="workflow-steps-pills">
                      {cap.workflowSteps.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="wf-step-pill">{step}</span>
                          {sIdx < cap.workflowSteps.length - 1 && (
                            <span className="wf-step-arrow">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="cap-detail-actions-row">
                    <Link to={cap.ctaPrimaryHref} className="cap-primary-cta-btn">
                      <span>{cap.ctaPrimary}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link to={cap.ctaSecondaryHref} className="cap-secondary-link">
                      <span>{cap.ctaSecondary}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Code-Based Interactive Visual with Laptop/Telephony + Floating Cards */}
                <div className="cap-detail-visual-col">
                  {renderVisualForCapability(cap.id)}
                </div>
              </section>

              {/* Clean Visual Divider Between Sections */}
              {idx < CAPABILITIES_DATA.length - 1 && (
                <div className="cap-section-divider" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
