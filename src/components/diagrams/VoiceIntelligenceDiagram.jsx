import React from 'react';
import { Mic, Calendar, UserCheck, Zap } from 'lucide-react';
import './DiagramStyles.css';

/**
 * Clean Conceptual Telephony & Voice Processing Diagram
 * STRICTLY NO FAKE CALL DASHBOARD.
 * Displays refined audio waveforms and intent processing dataflow.
 */
export default function VoiceIntelligenceDiagram() {
  return (
    <div className="diagram-container diagram-voice" aria-label="Voice AI Intelligence Diagram">
      <div className="diagram-header">
        <div className="diagram-badge">
          <span className="diagram-pulse-dot" />
          <span>Sub-300ms Conversational Telephony</span>
        </div>
        <span className="diagram-caption">Neural Speech Synthesis · Real-Time Intent Triage · Calendar Negotiation</span>
      </div>

      <div className="diagram-flow-grid">
        {/* Stage 1: Audio Inbound & Waveform */}
        <div className="diagram-node-card">
          <div className="diagram-node-eyebrow">PHASE 01 · AUDIO STREAM</div>
          <h4 className="diagram-node-title">Carrier Telephony</h4>
          <p className="diagram-node-desc">Inbound voice stream received via enterprise SIP trunks with zero hold music delay.</p>

          {/* Refined SVG Audio Waveform */}
          <div className="diagram-waveform-wrap" aria-hidden="true">
            <svg viewBox="0 0 180 36" className="diagram-waveform-svg" fill="none">
              <rect x="10" y="14" width="3" height="8" rx="1.5" fill="#40545C" />
              <rect x="20" y="10" width="3" height="16" rx="1.5" fill="#83DDE2" />
              <rect x="30" y="6" width="3" height="24" rx="1.5" fill="#83DDE2" />
              <rect x="40" y="12" width="3" height="12" rx="1.5" fill="#40545C" />
              <rect x="50" y="4" width="3" height="28" rx="1.5" fill="#83DDE2" />
              <rect x="60" y="8" width="3" height="20" rx="1.5" fill="#167C80" />
              <rect x="70" y="2" width="3" height="32" rx="1.5" fill="#83DDE2" />
              <rect x="80" y="10" width="3" height="16" rx="1.5" fill="#40545C" />
              <rect x="90" y="4" width="3" height="28" rx="1.5" fill="#83DDE2" />
              <rect x="100" y="12" width="3" height="12" rx="1.5" fill="#167C80" />
              <rect x="110" y="6" width="3" height="24" rx="1.5" fill="#83DDE2" />
              <rect x="120" y="10" width="3" height="16" rx="1.5" fill="#40545C" />
              <rect x="130" y="14" width="3" height="8" rx="1.5" fill="#40545C" />
              <rect x="140" y="8" width="3" height="20" rx="1.5" fill="#83DDE2" />
              <rect x="150" y="12" width="3" height="12" rx="1.5" fill="#167C80" />
              <rect x="160" y="14" width="3" height="8" rx="1.5" fill="#40545C" />
            </svg>
          </div>
          <span className="diagram-waveform-label">&lt; 300ms Conversational Latency</span>
        </div>

        {/* Connector */}
        <div className="diagram-connector-track" aria-hidden="true">
          <div className="diagram-signal-dot" />
          <svg className="diagram-arrow-svg" viewBox="0 0 40 24" fill="none">
            <path d="M0 12 H36 M28 4 L36 12 L28 20" stroke="#83DDE2" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Stage 2: Intent & Reasoning */}
        <div className="diagram-node-card diagram-node-card--core">
          <div className="diagram-node-eyebrow diagram-node-eyebrow--cyan">PHASE 02 · INTENT ENGINE</div>
          <h4 className="diagram-node-title">Conversational Logic</h4>
          <p className="diagram-node-desc">Understands caller nuance, extracts entity parameters, and maintains conversational context.</p>
          <div className="diagram-core-specs">
            <div className="diagram-spec-row">
              <Mic size={14} className="diagram-spec-icon" />
              <span>Streaming Neural Speech-to-Text</span>
            </div>
            <div className="diagram-spec-row">
              <Zap size={14} className="diagram-spec-icon" />
              <span>Real-Time Intent Classification</span>
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

        {/* Stage 3: Dynamic Action & Handoff */}
        <div className="diagram-node-card">
          <div className="diagram-node-eyebrow">PHASE 03 · EXECUTION</div>
          <h4 className="diagram-node-title">Action &amp; Handoff</h4>
          <p className="diagram-node-desc">Directly reserves calendar slots, updates CRM contacts, or transfers complex callers to staff.</p>
          <div className="diagram-outcome-branches">
            <div className="diagram-branch diagram-branch--auto">
              <Calendar size={14} />
              <span>Autonomous Calendar Booking</span>
            </div>
            <div className="diagram-branch diagram-branch--human">
              <UserCheck size={14} />
              <span>Warm Transfer with Live Brief</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
