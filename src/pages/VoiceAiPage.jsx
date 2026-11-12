import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import './VoiceAiPage.css';

const VOICE_DELIVERABLES = [
  {
    id: 'inbound-receptionist',
    num: '01',
    title: '24/7 Autonomous Inbound Receptionist',
    category: 'Inbound Telephony',
    lead: 'Answers every call within two rings with natural inflection and clear service guidance.',
    desc: 'Greets callers warmly, clarifies inquiry details, answers complex business FAQs using verified company documentation, and gathers required caller intake data without placing callers on hold.',
    specs: [
      { label: 'Turnaround Latency', value: '<300ms streaming speech synthesis' },
      { label: 'Speech Model', value: 'Neural conversational voice engine' },
      { label: 'Telephony Standard', value: 'SIP trunk, WebRTC, direct PBX forwarding' },
    ],
    systems: ['Twilio Voice', 'Vonage', 'Amazon Chime', 'Custom PBX'],
  },
  {
    id: 'calendar-booking',
    num: '02',
    title: 'Conversational Calendar Booking Engine',
    category: 'Appointment Scheduling',
    lead: 'Negotiates available appointment slots conversationally over the phone.',
    desc: 'Checks live practitioner or representative availability in real time, suggests open slots that fit caller preferences, confirms appointments, and immediately dispatches SMS and email calendar invites.',
    specs: [
      { label: 'Calendar Sync', value: 'Live bidirectional availability lookup' },
      { label: 'Timezone Handling', value: 'Automatic caller area-code detection' },
      { label: 'Confirmation', value: 'Instant SMS invite with rescheduling link' },
    ],
    systems: ['Google Calendar', 'Outlook 365', 'Clio', 'ServiceTitan', 'Calendly'],
  },
  {
    id: 'emergency-transfer',
    num: '03',
    title: 'Emergency Triage & Warm Live Transfer',
    category: 'Safety & Escalation',
    lead: 'Identifies high-urgency callers and seamlessly connects them to live on-duty staff.',
    desc: 'Calibrated intent classifiers detect emergency keywords, distress, or complex edge cases. Reassures the caller and executes a warm SIP transfer with spoken context to on-call technicians or attorneys.',
    specs: [
      { label: 'Triage Speed', value: 'Immediate heuristic priority routing' },
      { label: 'Transfer Mode', value: 'Warm transfer with whispered context brief' },
      { label: 'Fallback Logic', value: 'Simultaneous SMS and push alerting if line busy' },
    ],
    systems: ['Twilio SIP', 'RingCentral', 'Dialpad', 'PagerDuty'],
  },
  {
    id: 'crm-transcript-logging',
    num: '04',
    title: 'Post-Call CRM & Transcript Logging',
    category: 'Data Extraction',
    lead: 'Dispatches structured summaries and extracted entity fields to your CRM seconds after hangup.',
    desc: 'Every call generates a timestamped audio transcript, bulleted executive summary, extracted client intent, and categorized action items pushed directly into your CRM contact record.',
    specs: [
      { label: 'Output Schema', value: 'Structured JSON with sentiment tags' },
      { label: 'Delivery Time', value: '<5 seconds post-call webhook execution' },
      { label: 'Compliance', value: 'Optional automated PII redaction' },
    ],
    systems: ['HubSpot', 'Salesforce', 'Slack', 'Zendesk', 'PostgreSQL'],
  },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'The Voicemail Abandonment Abyss',
    desc: 'Over 80% of prospective clients who reach voicemail hang up immediately and dial your direct competitor instead.',
  },
  {
    num: '02',
    title: 'Front-Desk Interruption & Burnout',
    desc: 'Staff waste hours answering repetitive inquiries about hours, directions, and pricing instead of serving in-person clients.',
  },
  {
    num: '03',
    title: 'After-Hours Emergency Blindspots',
    desc: 'High-value inquiries arriving evenings or weekends are missed entirely or wake off-duty team members for non-urgent questions.',
  },
];

const BENEFITS = [
  {
    num: '01',
    metric: 'Instant',
    title: 'Zero Hold Times & Instant Answering',
    desc: 'Every call is answered within two rings around the clock, capturing high-intent prospects before they look elsewhere.',
  },
  {
    num: '02',
    metric: '<300ms',
    title: 'Natural Conversational Cadence',
    desc: 'Sub-second neural voice synthesis and turn-taking that feels respectful, clear, and professional without robotic stutter.',
  },
  {
    num: '03',
    metric: 'Automated',
    title: 'Direct Calendar & CRM Sync',
    desc: 'Appointments booked directly into your schedule with structured call notes logged into your CRM before you speak.',
  },
];

export default function VoiceAiPage() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const pageRef = useRef(null);

  usePageMetadata({
    title: 'Voice AI & Conversational Telephony | Hutomate',
    description: 'Sub-300ms neural voice agents for 24/7 inbound reception, appointment booking, and seamless live human handoffs.',
    path: '/capabilities/voice-ai',
  });

  useScrollReveal();

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.voice-hero-bg, .voice-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.voice-hero-bg',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        '.voice-hero-label',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.8'
      )
      .fromTo(
        '.voice-hero-headline',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.45'
      )
      .fromTo(
        '.voice-hero-desc',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.voice-hero-ctas',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      );
  }, []);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="voice-page-redesign" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO — FULL-COVER PHOTOGRAPHY
          ========================================================================= */}
      <section className="voice-hero-section" aria-label="Voice AI Hero">
        <div className="voice-hero-bg-wrapper" aria-hidden="true">
          <img
            src="/images/hero-voice-ai.jpg"
            alt=""
            className="voice-hero-bg"
            loading="eager"
            decoding="sync"
          />
          <div className="voice-hero-overlay" />
          <div className="voice-hero-vignette" />
        </div>

        <div className="container voice-hero-container">
          <div className="voice-hero-content">
            <div className="voice-hero-label">
              <span className="voice-hero-beacon" aria-hidden="true" />
              <span>CAPABILITY 03 // CONVERSATIONAL TELEPHONY</span>
            </div>

            <h1 className="voice-hero-headline">
              Intelligent voice systems that handle natural phone conversations.
            </h1>

            <p className="voice-hero-desc">
              Conversational voice workflows that answer incoming phone calls, qualify caller intent, answer complex questions, and book appointments directly into your calendar around the clock.
            </p>

            <div className="voice-hero-ctas">
              <Button variant="primary" size="lg" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/process">
                See Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: THE CHALLENGE — EDITORIAL SPLIT
          ========================================================================= */}
      <section className="voice-challenge-section" aria-label="The Challenge">
        <div className="container">
          <div className="voice-challenge-grid">
            <div className="voice-challenge-left reveal-on-scroll">
              <span className="voice-section-kicker">THE SILENT LOSS</span>
              <h2 className="voice-challenge-heading">
                Every unanswered phone call is an immediate transfer to your competitor.
              </h2>
              <p className="voice-challenge-lead">
                Prospective clients rarely leave voicemails. If their call is placed on hold or goes to a voicemail machine, they immediately hang up and call the next provider on Google.
              </p>
              <div className="voice-challenge-callout">
                <span className="voice-callout-num">80%+</span>
                <span className="voice-callout-text">
                  Of prospective business callers hang up without leaving a voicemail when unanswered.
                </span>
              </div>
            </div>

            <div className="voice-challenge-right reveal-on-scroll">
              {CHALLENGES.map((ch, idx) => (
                <div key={idx} className="voice-challenge-card">
                  <div className="voice-challenge-header">
                    <span className="voice-challenge-num">{ch.num}</span>
                    <h3 className="voice-challenge-title">{ch.title}</h3>
                  </div>
                  <p className="voice-challenge-desc">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT WE DELIVER — INTERACTIVE VOICE ACCORDION
          ========================================================================= */}
      <section className="voice-deliver-section" aria-label="What We Deliver">
        <div className="container">
          <div className="voice-deliver-header reveal-on-scroll">
            <span className="voice-section-kicker">WHAT WE DELIVER</span>
            <h2 className="voice-section-heading">
              Enterprise telephony with sub-second conversational cadence.
            </h2>
            <p className="voice-section-subhead">
              Speech recognition, intent triage, and appointment booking engineered for natural, low-latency phone dialogue.
            </p>
          </div>

          <div className="voice-accordion-wrap reveal-on-scroll">
            {VOICE_DELIVERABLES.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`voice-accordion-item ${isExpanded ? 'is-active' : ''}`}
                >
                  <button
                    type="button"
                    className="voice-accordion-trigger"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isExpanded}
                    aria-controls={`voice-deliverable-${item.id}`}
                  >
                    <div className="voice-accordion-trigger-left">
                      <span className="voice-item-num">{item.num}</span>
                      <div className="voice-item-title-wrap">
                        <span className="voice-item-cat">{item.category}</span>
                        <h3 className="voice-item-title">{item.title}</h3>
                      </div>
                    </div>
                    <div className="voice-accordion-icon-wrap" aria-hidden="true">
                      <ChevronDown
                        size={20}
                        className={`voice-chevron ${isExpanded ? 'is-rotated' : ''}`}
                      />
                    </div>
                  </button>

                  <div
                    id={`voice-deliverable-${item.id}`}
                    className={`voice-accordion-drawer ${isExpanded ? 'is-open' : ''}`}
                  >
                    <div className="voice-drawer-inner">
                      <div className="voice-drawer-grid">
                        <div className="voice-drawer-main">
                          <p className="voice-drawer-lead">{item.lead}</p>
                          <p className="voice-drawer-desc">{item.desc}</p>

                          <div className="voice-drawer-systems">
                            <span className="voice-systems-label">Telephony &amp; App Integration:</span>
                            <div className="voice-systems-tags">
                              {item.systems.map((sys, sIdx) => (
                                <span key={sIdx} className="voice-sys-pill">
                                  {sys}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="voice-drawer-specs">
                          <span className="voice-specs-title">Telephony Specifications</span>
                          {item.specs.map((sp, spIdx) => (
                            <div key={spIdx} className="voice-spec-row">
                              <span className="voice-spec-key">{sp.label}</span>
                              <span className="voice-spec-val">{sp.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: WHY IT MATTERS — 3-COLUMN EDITORIAL CARDS
          ========================================================================= */}
      <section className="voice-matters-section" aria-label="Why It Matters">
        <div className="container">
          <div className="voice-matters-header reveal-on-scroll">
            <span className="voice-section-kicker">WHY IT MATTERS</span>
            <h2 className="voice-section-heading">
              Immediate call capture that converts inquiries into scheduled appointments.
            </h2>
            <p className="voice-section-subhead">
              We eliminate missed calls and reduce front-desk telephone load while maintaining a warm, professional customer experience.
            </p>
          </div>

          <div className="voice-pillars-grid reveal-on-scroll">
            {BENEFITS.map((ben, idx) => (
              <div key={idx} className="voice-pillar-card">
                <div className="voice-pillar-top">
                  <span className="voice-pillar-num">0{idx + 1}</span>
                  <span className="voice-pillar-metric">{ben.metric}</span>
                </div>
                <h3 className="voice-pillar-title">{ben.title}</h3>
                <p className="voice-pillar-desc">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: FINAL CTA — PREMIUM DARK NAVY COMPOSITION
          ========================================================================= */}
      <section className="voice-final-cta-section" aria-label="Discuss Your Voice AI Project">
        <div className="voice-final-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="voice-final-cta-inner reveal-on-scroll">
            <span className="voice-final-kicker">UPGRADE YOUR PHONE OPERATIONS</span>
            <h2 className="voice-final-heading">
              Ready to capture every call and automate appointment booking?
            </h2>
            <p className="voice-final-desc">
              Schedule a consultation with our voice engineering team. We review your call flows, phone setup, and calendar integration needs.
            </p>
            <div className="voice-final-actions">
              <Button variant="primary" size="lg" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/process">
                See Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
