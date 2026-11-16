import React, { useRef } from 'react';
import {
  PhoneCall,
  MessageSquare,
  UserCheck,
  Calendar,
  PhoneForwarded,
  BellRing,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import WhyItMattersSection from '../components/WhyItMattersSection';
import './VoiceAiPage.css';

const SIX_VOICE_CAPABILITIES = [
  {
    num: '01',
    icon: PhoneCall,
    title: 'Answer Inbound Calls',
    desc: 'Picks up instantly, answers questions warmly, and provides 24/7 front-desk coverage.',
  },
  {
    num: '02',
    icon: MessageSquare,
    title: 'Handle Customer Enquiries',
    desc: 'Responds to FAQs about pricing, business hours, services, and location with verified details.',
  },
  {
    num: '03',
    icon: UserCheck,
    title: 'Qualify Incoming Leads',
    desc: 'Collects caller needs, timeline, and budget, directing high-priority prospects to sales teams.',
  },
  {
    num: '04',
    icon: Calendar,
    title: 'Book & Schedule Appointments',
    desc: 'Coordinates calendar availability in real time, reserves slots, and sends instant calendar invitations.',
  },
  {
    num: '05',
    icon: PhoneForwarded,
    title: 'Transfer Calls to Teams',
    desc: 'Identifies urgent inquiries and smoothly routes callers to on-duty specialists with contextual briefing.',
  },
  {
    num: '06',
    icon: BellRing,
    title: 'Send Follow-ups & Notifications',
    desc: 'Logs call notes to CRM, dispatches confirmation texts or emails, and triggers necessary tasks.',
  },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Missed Calls During Busy Hours',
    desc: 'When your phone lines are occupied, prospective clients hang up rather than waiting on hold or leaving a voicemail.',
  },
  {
    num: '02',
    title: 'Front Desk Interrupted by Routine Questions',
    desc: 'Staff spend hours answering common questions about hours, services, and pricing instead of serving in-person clients.',
  },
  {
    num: '03',
    title: 'After-Hours Inquiries Go Unanswered',
    desc: 'Calls received in the evening or over weekends often go to voicemail, causing urgent requests and high-value leads to go cold.',
  },
  {
    num: '04',
    title: 'Inconsistent Call Notes & Delayed Follow-Up',
    desc: 'Important details from telephone conversations are easily forgotten or entered into your CRM with delays and errors.',
  },
];

const WHY_IT_MATTERS_BENEFITS = [
  {
    num: '01',
    icon: PhoneCall,
    title: 'Always-On Call Handling',
    desc: 'Respond to incoming calls and customer enquiries even when your team is unavailable.',
  },
  {
    num: '02',
    icon: UserCheck,
    title: 'Fewer Missed Opportunities',
    desc: 'Capture customer details, understand enquiries, and route potential leads to the right team.',
  },
  {
    num: '03',
    icon: Calendar,
    title: 'Faster Appointment Scheduling',
    desc: 'Check availability, arrange appointments, and send confirmations without unnecessary back-and-forth.',
  },
];

export default function VoiceAiPage() {
  const pageRef = useRef(null);

  usePageMetadata({
    title: 'Enterprise Voice AI Agents — Sub-Second Telephony | Hutomate',
    description: 'Deploy conversational Voice AI agents with low latency, natural cadence, and seamless appointment booking across your phone systems.',
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
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.8'
      )
      .fromTo(
        '.voice-hero-headline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        '.voice-hero-lead',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.voice-hero-actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );
  });

  return (
    <div className="voice-page" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO SECTION
          ========================================================================= */}
      <section className="voice-hero-section" aria-label="Voice AI Hero">
        <div className="voice-hero-bg-container" aria-hidden="true">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-voice-ai-mobile.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-voice-ai-mobile.jpg"
              type="image/jpeg"
            />
            <source
              srcSet="/images/hero-voice-ai.webp"
              type="image/webp"
            />
            <img
              src="/images/hero-voice-ai.jpg"
              alt="Hutomate enterprise Voice AI communications center"
              className="voice-hero-bg"
              width="1920"
              height="1080"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="voice-hero-overlay" />
        </div>

        <div className="container voice-hero-container">
          <div className="voice-hero-content">
            <div className="voice-hero-label">
              <span>AI RECEPTIONISTS</span>
            </div>

            <h1 className="voice-hero-headline">
              Conversational voice agents that speak naturally and handle phone calls.
            </h1>

            <p className="voice-hero-lead">
              We engineer low-latency Voice AI systems that answer inbound phone inquiries, qualify callers, schedule calendar appointments, and route urgent cases to on-call specialists—24/7 with zero hold times.
            </p>

            <div className="voice-hero-actions">
              <Button variant="primary" size="lg" arrow href="/start-project">
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
          SECTION 02: THE CHALLENGE
          ========================================================================= */}
      <section className="voice-challenge-section" aria-label="The Challenge">
        <div className="container">
          <div className="voice-challenge-grid">
            <div className="voice-challenge-left reveal-on-scroll">
              <span className="voice-section-kicker">THE CHALLENGE</span>
              <h2 className="voice-challenge-heading">
                Missed phone calls mean missed revenue and frustrated customers.
              </h2>
              <p className="voice-challenge-lead">
                When customers call, they expect immediate answers. Busy phone lines, long hold times, and after-hours voicemail often mean prospective clients hang up and call a competitor instead.
              </p>
              <div className="voice-challenge-benefit">
                <div className="voice-benefit-header">
                  <span className="voice-benefit-badge" aria-hidden="true" />
                  <span className="voice-benefit-title">Every Call Answered Instantly</span>
                </div>
                <p className="voice-benefit-text">
                  Voice AI ensures callers speak with an intelligent representative immediately, answering questions and booking consultations 24 hours a day.
                </p>
              </div>
            </div>

            <div className="voice-challenge-right reveal-on-scroll">
              {CHALLENGES.map((ch, idx) => (
                <div key={idx} className="voice-challenge-card">
                  <span className="voice-challenge-num">{ch.num}</span>
                  <h3 className="voice-challenge-title">{ch.title}</h3>
                  <p className="voice-challenge-desc">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT OUR AI RECEPTIONISTS CAN DO — 6-CARD CAPABILITY GRID
          ========================================================================= */}
      <section className="voice-showcase-section" aria-label="What Our AI Receptionists Can Do">
        <div className="container">
          <div className="voice-showcase-header reveal-on-scroll">
            <span className="voice-section-kicker">WHAT OUR AI RECEPTIONISTS CAN DO</span>
            <div className="voice-showcase-header-split">
              <h2 className="voice-section-heading">
                Real Calls, Handled by AI
              </h2>
              <p className="voice-section-subhead">
                Let AI answer incoming calls and schedule appointments, so your team never misses an opportunity.
              </p>
            </div>
          </div>

          <div className="voice-six-grid reveal-on-scroll">
            {SIX_VOICE_CAPABILITIES.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <article key={idx} className="voice-six-card">
                  <div className="voice-six-card-top">
                    <div className="voice-six-icon-box" aria-hidden="true">
                      <IconComp size={22} className="voice-six-icon" />
                    </div>
                    <span className="voice-six-num">{cap.num}</span>
                  </div>
                  <h3 className="voice-six-title">{cap.title}</h3>
                  <p className="voice-six-desc">{cap.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: WHY IT MATTERS — MINIMAL BUSINESS BENEFITS
          ========================================================================= */}
      <WhyItMattersSection
        kicker="WHY IT MATTERS"
        heading="Every conversation deserves a timely response."
        subhead="AI receptionists help businesses handle incoming calls, respond to enquiries, qualify opportunities, and schedule appointments without depending entirely on manual availability."
        benefits={WHY_IT_MATTERS_BENEFITS}
      />

      {/* =========================================================================
          SECTION 05: FINAL CTA
          ========================================================================= */}
      <section className="voice-final-cta-section" aria-label="Discuss Your Voice AI Project">
        <div className="voice-final-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="voice-final-cta-inner reveal-on-scroll">
            <span className="voice-final-kicker">UPGRADE YOUR TELEPHONY</span>
            <h2 className="voice-final-heading">
              Ready to answer every business call without growing headcount?
            </h2>
            <p className="voice-final-desc">
              Share your current call volume and software tools with our engineering team. We'll evaluate how Voice AI can handle routine inquiries and schedule appointments automatically.
            </p>
            <div className="voice-final-actions">
              <Button variant="primary" size="lg" arrow href="/start-project">
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