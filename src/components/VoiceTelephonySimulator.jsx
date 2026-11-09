import React, { useState, useEffect } from 'react';
import {
  PhoneForwarded,
  RotateCcw,
  Calendar,
  Clock,
  CheckCircle2,
  Volume2,
  Bot,
  User,
  Zap,
  ShieldCheck
} from 'lucide-react';
import './VoiceTelephonySimulator.css';

const CALL_TURNS = [
  {
    turn: 1,
    time: '00:03',
    speaker: 'agent',
    speakerLabel: 'Hutomate Voice Agent',
    text: "Good afternoon, thank you for calling Northstar Dental & Orthodontics. I'm an AI assistant on behalf of the clinic. How can I help you today?",
    intent: 'Greeting & Transparent AI Disclosure',
    systemAction: 'Session started · Webhook session #tc_8842 · Latency: 180ms'
  },
  {
    turn: 2,
    time: '00:09',
    speaker: 'caller',
    speakerLabel: 'Caller (David Miller)',
    text: "Hi there! I chipped a molar while eating lunch today and I have a sharp pain when drinking anything cold. Do you have any emergency appointments available tomorrow?",
    intent: 'Emergency Triage & Availability Query',
    systemAction: 'VAD silence detected (80ms) · Transcribed audio stream via neural STT'
  },
  {
    turn: 3,
    time: '00:15',
    speaker: 'agent',
    speakerLabel: 'Hutomate Voice Agent',
    text: "I'm sorry to hear that, David. We can definitely get you in to have Dr. Reynolds examine that molar tomorrow. We have an opening at 10:30 AM or at 2:15 PM. Would either of those work for you?",
    intent: 'Calendar Query & Slot Negotiation',
    systemAction: 'Queried Google Calendar API · Retrieved 2 open emergency slots'
  },
  {
    turn: 4,
    time: '00:22',
    speaker: 'caller',
    speakerLabel: 'Caller (David Miller)',
    text: "The 2:15 PM slot tomorrow afternoon works much better for me. Can you book that?",
    intent: 'Slot Selection Confirmation',
    systemAction: 'Resolved slot: 2026-11-07T14:15:00 · Lock placed on calendar slot'
  },
  {
    turn: 5,
    time: '00:28',
    speaker: 'agent',
    speakerLabel: 'Hutomate Voice Agent',
    text: "You're all set for 2:15 PM tomorrow with Dr. Reynolds. I've sent an instant SMS confirmation to this number with directions and a medical pre-check link. Is there anything else I can assist with?",
    intent: 'Tool Commit & Multi-Channel Wrap-up',
    systemAction: 'Created EHR appointment · Dispatched Twilio SMS confirmation'
  },
  {
    turn: 6,
    time: '00:34',
    speaker: 'caller',
    speakerLabel: 'Caller (David Miller)',
    text: "No, that's everything! Thanks so much for your help.",
    intent: 'Call Resolution & Sign-off',
    systemAction: 'Session finalized · Call audio & transcript committed to compliance store'
  }
];

export default function VoiceTelephonySimulator() {
  const [activeTurnIdx, setActiveTurnIdx] = useState(0);
  const [isCalling, setIsCalling] = useState(true);
  const callDuration = 34;
  const [isEscalated, setIsEscalated] = useState(false);

  // Auto-progress simulation
  useEffect(() => {
    let interval;
    if (isCalling && !isEscalated) {
      interval = setInterval(() => {
        setActiveTurnIdx((prev) => {
          if (prev >= CALL_TURNS.length - 1) {
            return prev;
          }
          return prev + 1;
        });
      }, 3200);
    }
    return () => clearInterval(interval);
  }, [isCalling, isEscalated]);

  const activeTurn = CALL_TURNS[activeTurnIdx];

  const handleReset = () => {
    setActiveTurnIdx(0);
    setIsCalling(true);
    setIsEscalated(false);
  };

  const handleEscalate = () => {
    setIsEscalated(true);
    setIsCalling(false);
  };

  return (
    <div className="voice-sim-card">
      {/* Top Banner with Startup Credibility Note */}
      <div className="voice-sim-topbar">
        <div className="voice-sim-topbar-left">
          <span className="voice-sim-pulse-dot"></span>
          <span className="voice-sim-title">Hutomate Low-Latency Voice Telephony</span>
          <span className="voice-sim-demo-badge">Interactive Illustrative Demonstration</span>
        </div>

        <div className="voice-sim-topbar-right">
          <span className="voice-sim-telephony-stat">
            <Zap size={13} /> Sub-220ms Latency
          </span>
          <span className="voice-sim-telephony-stat">
            <ShieldCheck size={13} /> Strict Guardrails
          </span>
          <button
            type="button"
            className="voice-sim-reset-btn"
            onClick={handleReset}
            title="Replay from start"
          >
            <RotateCcw size={13} /> Replay
          </button>
        </div>
      </div>

      <div className="voice-sim-layout">
        {/* Left Column: Phone Console UI */}
        <div className="voice-sim-phone-pane">
          <div className="voice-call-status-box">
            <div className="voice-call-caller-info">
              <div className="voice-caller-avatar">
                <User size={22} />
              </div>
              <div>
                <h4 className="voice-caller-name">David Miller</h4>
                <span className="voice-caller-num">+1 (415) 890-2341 · Inbound Line</span>
              </div>
            </div>

            <div className="voice-call-timer">
              <Clock size={14} />
              <span>00:{callDuration < 10 ? `0${callDuration}` : callDuration}</span>
              <span className="voice-call-badge-live">
                {isEscalated ? 'WARM TRANSFER' : isCalling ? 'CALL ACTIVE' : 'CALL ENDED'}
              </span>
            </div>
          </div>

          {/* Oscillating Audio Waveform Visual */}
          <div className="voice-waveform-container" aria-label="Audio stream activity">
            <div className="voice-waveform-bars">
              {[40, 65, 30, 85, 95, 55, 75, 45, 90, 100, 60, 40, 80, 50, 70, 90, 60, 45, 85, 35].map((h, i) => (
                <div
                  key={i}
                  className={`voice-waveform-bar ${isCalling && !isEscalated ? 'is-animating' : ''}`}
                  style={{
                    height: isCalling && !isEscalated ? `${h}%` : '20%',
                    animationDelay: `${(i % 5) * 0.15}s`
                  }}
                />
              ))}
            </div>
            <div className="voice-audio-meta">
              <span className="voice-audio-codec">Opus 24kHz · Neural Synthesis</span>
              <span className="voice-audio-status">
                {isCalling && !isEscalated ? 'Streaming Duplex Audio' : 'Stream Closed'}
              </span>
            </div>
          </div>

          {/* Real-Time Live Intent Extraction Card */}
          <div className="voice-intent-card">
            <div className="voice-intent-label">Real-Time Intent Detection</div>
            <div className="voice-intent-value">{activeTurn.intent}</div>
            <div className="voice-intent-meta">
              <span>Confidence: 99.4%</span>
              <span className="voice-intent-sep">•</span>
              <span>Model: Claude 3.5 Sonnet / Whisper</span>
            </div>
          </div>

          {/* Action Trigger Card */}
          <div className="voice-action-trigger-card">
            <div className="voice-action-label">Dynamic System Action</div>
            <div className="voice-action-val">
              <Bot size={14} color="#7657E8" />
              <span>{activeTurn.systemAction}</span>
            </div>
          </div>

          {/* Call Controls */}
          <div className="voice-call-controls">
            {!isEscalated ? (
              <button
                type="button"
                className="voice-ctrl-btn voice-ctrl-btn--escalate"
                onClick={handleEscalate}
              >
                <PhoneForwarded size={14} />
                <span>Simulate Warm Transfer to Human</span>
              </button>
            ) : (
              <div className="voice-escalated-alert">
                <CheckCircle2 size={16} />
                <span>Call transferred to On-Call Clinic Coordinator with live brief transcript.</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Live Conversational Transcript */}
        <div className="voice-sim-transcript-pane">
          <div className="voice-transcript-header">
            <div className="voice-trans-title">
              <Volume2 size={15} />
              <span>Live Conversational Audio Transcript</span>
            </div>
            <span className="voice-trans-hint">Click any turn to jump</span>
          </div>

          <div className="voice-transcript-scroll">
            {CALL_TURNS.map((t, idx) => {
              const isActive = idx === activeTurnIdx;
              const isPast = idx <= activeTurnIdx;
              const isAgent = t.speaker === 'agent';

              return (
                <div
                  key={t.turn}
                  className={`voice-turn-bubble ${isAgent ? 'is-agent' : 'is-caller'} ${isActive ? 'is-active-turn' : ''} ${isPast ? 'is-visible' : 'is-pending'}`}
                  onClick={() => {
                    setActiveTurnIdx(idx);
                    setIsEscalated(false);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="voice-turn-header">
                    <span className="voice-turn-speaker">
                      {isAgent ? <Bot size={13} /> : <User size={13} />}
                      {t.speakerLabel}
                    </span>
                    <span className="voice-turn-time">{t.time}</span>
                  </div>
                  <p className="voice-turn-text">{t.text}</p>
                </div>
              );
            })}
          </div>

          <div className="voice-transcript-footer">
            <div className="voice-footer-pill">
              <Calendar size={13} />
              <span>Slot Booked: 2:15 PM Tomorrow (Dr. Reynolds)</span>
            </div>
            <div className="voice-footer-pill voice-footer-pill--ok">
              <CheckCircle2 size={13} />
              <span>SMS Dispatched</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
