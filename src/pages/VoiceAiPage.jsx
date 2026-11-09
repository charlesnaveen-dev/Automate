import React from 'react';
import { PhoneCall, Calendar, UserCheck, Clock, PhoneForwarded, FileText, CheckCircle2 } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import VoiceTelephonySimulator from '../components/VoiceTelephonySimulator';
import './CapabilityDetailPage.css';

export default function VoiceAiPage() {
  usePageMetadata({
    title: 'Voice AI Agents — Conversational Phone & Telephony Systems',
    description: 'Natural voice AI designed to answer calls, qualify inbound leads, schedule appointments, and route complex inquiries with transparent human fallbacks.',
    path: '/capabilities/voice-ai',
  });

  useScrollReveal();

  const useCases = [
    {
      title: 'Inbound Call Answering & FAQs',
      desc: 'Answer incoming customer calls with zero queue wait times, providing instant verified answers to common operational questions.',
      icon: PhoneCall,
    },
    {
      title: 'After-Hours Triage & Dispatch',
      desc: 'Capture urgent service requests when your office is closed, categorize urgency, and trigger emergency on-call notifications.',
      icon: Clock,
    },
    {
      title: 'Automated Calendar Scheduling',
      desc: 'Coordinate appointment times conversationally over the phone, cross-reference calendar availability, and send SMS confirmations.',
      icon: Calendar,
    },
    {
      title: 'Pre-Screening & Lead Qualification',
      desc: 'Engage inbound callers with structured qualification questions, recording intent and budget parameters before escalating to sales staff.',
      icon: UserCheck,
    },
    {
      title: 'Order Status & Tracking Enquiries',
      desc: 'Look up shipping numbers and delivery updates securely by authenticating caller phone numbers or reference codes.',
      icon: FileText,
    },
    {
      title: 'Warm Human Call Escalation',
      desc: 'When callers request a human or voice sentiment indicates distress, cleanly transfer the call with a live briefing summary to a staff member.',
      icon: PhoneForwarded,
    },
  ];

  const pipelineSteps = [
    { step: '01', title: 'Audio Ingestion & VAD', desc: 'Real-time Voice Activity Detection (VAD) monitors caller speech with sub-100ms silence detection to handle natural interruptions.' },
    { step: '02', title: 'Streaming Speech-to-Text', desc: 'Inbound audio packets are transcribed in real time using ultra-low-latency neural speech recognition models.' },
    { step: '03', title: 'Context & Prompt Evaluation', desc: 'LLM reasoning models evaluate caller intent within conversational guardrails, querying business knowledge bases via function calling.' },
    { step: '04', title: 'Streaming Neural Voice Synthesis', desc: 'Natural voice models stream generated audio tokens back to the caller in milliseconds, ensuring a fluid conversational rhythm.' },
    { step: '05', title: 'Deterministic Tool Commit', desc: 'Appointments, CRM notes, or support tickets are committed via secure APIs during or immediately following the call.' },
    { step: '06', title: 'Call Transcript & Human Summary', desc: 'A structured recap, audio recording, and compliance transcript are archived and dispatched to your team.' },
  ];

  const safetyPrinciples = [
    { title: 'Transparent AI Identification', desc: 'Our voice agents always disclose their AI nature at the start of every call. We do not design deceptive synthetic personas.' },
    { title: 'Instant Human Escalation', desc: 'Callers can request a human specialist at any point. The agent immediately executes a warm transfer or schedules an immediate callback.' },
    { title: 'PCI & Privacy Guardrails', desc: 'Voice agents do not collect sensitive payment data over plain phone audio without specialized tokenized interactive voice response (IVR).' },
    { title: 'Deterministic Script Adherence', desc: 'For regulated industries, the agent stays strictly within approved conversational scripts and never speculates on legal or financial matters.' },
  ];

  return (
    <div className="capability-detail-page">
      <PageHeader
        eyebrow="CAPABILITIES · VOICE AI"
        badgeText="Conversational Telephony"
        badgeType="blue"
        title="Every conversation can move business forward."
        description="Natural conversational voice AI designed to answer calls, qualify inbound leads, schedule appointments, and route complex inquiries with transparent human fallbacks."
      >
        <Button variant="primary" size="md" arrow href="/contact">
          Discuss Your Project
        </Button>
        <Button variant="secondary" size="md" href="/capabilities">
          Explore Capabilities
        </Button>
      </PageHeader>

      {/* Interactive Telephony Simulator Section */}
      <section className="section detail-section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label section-label-blue">Live Telephony Experience</span>
            <h2 className="section-heading">Experience natural conversational voice in action</h2>
            <p className="section-body section-body-center">
              Inspect how an incoming emergency call is answered in sub-250ms, evaluated against scheduling rules, and confirmed via SMS while preserving immediate warm human escalation.
            </p>
          </div>

          <VoiceTelephonySimulator />
        </div>
      </section>

      {/* Applications Section */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Telephony Applications</span>
            <h2 className="section-heading">Where voice agents solve everyday operational strain</h2>
            <p className="section-body">
              Never let a high-value customer slip to voicemail. We engineer responsive voice pipelines that handle calls 24/7 with zero hold times.
            </p>
          </div>

          <div className="detail-cards-grid">
            {useCases.map((uc, i) => {
              const IconComp = uc.icon;
              return (
                <div key={i} className="detail-card card">
                  <div className="detail-card-icon-wrap" style={{ color: '#0284C7' }}>
                    <IconComp size={20} />
                  </div>
                  <h3 className="detail-card-title">{uc.title}</h3>
                  <p className="detail-card-desc">{uc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audio Pipeline Architecture */}
      <section className="section detail-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label section-label-green">Technical Pipeline</span>
            <h2 className="section-heading">How our real-time voice pipeline operates</h2>
            <p className="section-body section-body-center">
              Achieving conversational fluency requires sub-300ms round-trip latency, low-latency streaming endpoints, and intelligent interruption handling.
            </p>
          </div>

          <div className="timeline-steps-grid">
            {pipelineSteps.map((st) => (
              <div key={st.step} className="timeline-step-card card">
                <span className="timeline-step-number" style={{ color: '#0284C7', backgroundColor: 'rgba(2, 132, 199, 0.08)' }}>
                  {st.step}
                </span>
                <h3 className="timeline-step-title">{st.title}</h3>
                <p className="timeline-step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Human Escalation */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label-blue">Ethics &amp; Reliability</span>
            <h2 className="section-heading">Voice engineering built on strict transparency</h2>
            <p className="section-body">
              We never deceive callers. Transparent disclosures, deterministic guardrails, and instant warm human transfers protect your brand reputation.
            </p>
          </div>

          <div className="boundaries-grid">
            {safetyPrinciples.map((b, i) => (
              <div key={i} className="boundary-card card">
                <CheckCircle2 size={20} className="boundary-icon" style={{ color: '#0284C7' }} />
                <h3 className="boundary-title">{b.title}</h3>
                <p className="boundary-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to automate inbound calls and scheduling?"
        description="Let’s review your incoming call volume, common inquiries, and calendar booking workflow to build a tailored conversational voice agent."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
        secondaryButtonText="Explore Capabilities"
        secondaryButtonHref="/capabilities"
      />
    </div>
  );
}
