import React from 'react';
import {
  Mic,
  PhoneCall,
  Calendar,
  UserCheck,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import VoiceIntelligenceDiagram from '../components/diagrams/VoiceIntelligenceDiagram';
import { CAPABILITIES_DATA } from '../data/capabilitiesData';
import './VoiceAiPage.css';

export default function VoiceAiPage() {
  const capData = CAPABILITIES_DATA.find((c) => c.id === 'voice-ai') || CAPABILITIES_DATA[2];

  usePageMetadata({
    title: 'Voice AI & Conversational Telephony | Hutomate',
    description: 'Sub-300ms neural voice agents for 24/7 inbound reception, appointment booking, and seamless live human handoffs.',
    path: '/capabilities/voice-ai',
  });

  useScrollReveal();

  const playbooks = [
    {
      num: 'PLAYBOOK 01',
      title: 'Inbound Emergency Intake & Dispatch',
      desc: 'Handles after-hours emergency calls for field contractors and trades. Extracts caller address, verifies service agreement, and dispatches on-call technician immediately.',
      tags: ['Home Services', 'Property Management', 'Commercial HVAC'],
    },
    {
      num: 'PLAYBOOK 02',
      title: 'Clinic & Dental Appointment Negotiation',
      desc: 'Answers patient inquiries, verifies insurance eligibility, inspects doctor calendar availability, and coordinates booking without ever leaving patients on hold.',
      tags: ['Dental Clinics', 'Medical Centers', 'Physiotherapy'],
    },
    {
      num: 'PLAYBOOK 03',
      title: 'Legal Practice Intake & Conflict Screening',
      desc: 'Screens prospective clients against firm practice areas, gathers initial case facts, performs conflict check intake, and schedules consults with attorneys.',
      tags: ['Law Firms', 'Immigration Counsel', 'Corporate Advisory'],
    },
  ];

  return (
    <div className="voice-ai-page">
      {/* 1. Telephony Hero */}
      <section className="voice-hero-section" aria-label="Voice AI Overview">
        <div className="container">
          <div className="voice-hero-content reveal-on-scroll">
            <div className="voice-eyebrow-row">
              <span className="voice-tag">CONVERSATIONAL TELEPHONY // 03</span>
              <div className="voice-badge">
                <span className="voice-badge-dot" />
                <span>Sub-300ms Streaming Audio Architecture</span>
              </div>
            </div>

            <h1 className="voice-hero-title">
              Intelligent conversations that keep business moving 24/7.
            </h1>

            <p className="voice-hero-desc">
              We engineer sub-300ms conversational voice agents that answer inbound calls, qualify inquiries, negotiate calendar appointments, and warm-transfer complex callers to human staff.
            </p>

            <div className="voice-hero-actions">
              <Button variant="cinematic-primary" size="lg" arrow href="/contact">
                Discuss Your Voice Architecture
              </Button>
              <Button variant="cinematic-secondary" size="lg" href="/capabilities">
                Explore All Capabilities
              </Button>
            </div>

            {/* Performance Indicators */}
            <div className="voice-metrics-strip">
              {capData.heroMetrics?.map((m, idx) => (
                <div key={idx} className="voice-metric-item">
                  <span className="voice-metric-val">{m.value}</span>
                  <span className="voice-metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Voice Architecture Diagram (Voice -> Understanding -> Action) */}
      <section className="voice-arch-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker">STREAMING TELEPHONY DATAFLOW</span>
            <h2 className="section-main-heading">
              Acoustic Stream → Intent Triage → Calendar &amp; CRM Mutation
            </h2>
            <p className="section-main-body">
              How audio packets travel from enterprise SIP trunks through streaming speech-to-text, intent classification, and instant business tool execution.
            </p>
          </div>

          <div className="reveal-on-scroll">
            <VoiceIntelligenceDiagram />
          </div>
        </div>
      </section>

      {/* 3. Real-World Telephony Playbooks */}
      <section className="voice-playbooks-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker">DEPLOYED PLAYBOOKS</span>
            <h2 className="section-main-heading">
              Engineered for real operational calling scenarios
            </h2>
            <p className="section-main-body">
              Our voice agents are not generic chatbots with a voice skin. They are custom-tuned telephony specialists trained on specific industry protocols.
            </p>
          </div>

          <div className="voice-playbooks-grid reveal-on-scroll">
            {playbooks.map((pb, idx) => (
              <div key={idx} className="voice-playbook-card">
                <span className="playbook-num">{pb.num}</span>
                <h3 className="playbook-title">{pb.title}</h3>
                <p className="playbook-desc">{pb.desc}</p>
                <div className="playbook-tags-list">
                  {pb.tags.map((t, i) => (
                    <span key={i} className="playbook-tag-item">✓ {t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Warm-Transfer Briefing Protocol */}
      <section className="voice-transfer-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker" style={{ color: 'var(--color-accent-cyan, #83DDE2)' }}>
              HUMAN OVERSIGHT
            </span>
            <h2 className="section-main-heading" style={{ color: '#FFFFFF' }}>
              Warm-transfer with instant operator briefing
            </h2>
          </div>

          <div className="voice-transfer-card reveal-on-scroll">
            <div className="transfer-left">
              <h3 className="transfer-title">Never make callers repeat themselves</h3>
              <p className="transfer-desc">
                When a caller requires senior human judgment, our system whispers a 3-bullet briefing into the operator&apos;s headset before connecting the audio: caller identity, primary issue, and verified account history.
              </p>
            </div>

            <div className="transfer-preview-box">
              <div className="transfer-preview-header">
                <span>INCOMING WARM TRANSFER PROTOCOL</span>
                <span>PRIORITY 01</span>
              </div>
              <div className="transfer-preview-body">
                <p style={{ margin: '0 0 8px 0' }}>• Caller: Dr. Sarah Jenkins (Mercy Health Practice)</p>
                <p style={{ margin: '0 0 8px 0' }}>• Intent: Urgent medical record transfer &amp; referral sync</p>
                <p style={{ margin: 0 }}>• Action Staged: HIPAA consent logged, EHR draft updated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing Call to Action */}
      <CtaBanner
        title="Ready to upgrade your business phone operations?"
        description="Share your current call volume, typical customer questions, and calendar software. We'll design a custom telephony architecture for your business."
        buttonText="Discuss Your Voice Agent"
        buttonHref="/contact"
        secondaryButtonText="Explore Custom AI Solutions"
        secondaryButtonHref="/capabilities/custom-ai-solutions"
      />
    </div>
  );
}
