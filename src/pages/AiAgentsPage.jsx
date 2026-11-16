import React, { useRef } from 'react';
import {
  MessageSquare,
  UserCheck,
  Calendar,
  FileText,
  Workflow,
  RefreshCw,
  Zap,
  Brain,
  ShieldCheck,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import WhyItMattersSection from '../components/WhyItMattersSection';
import './AiAgentsPage.css';

const SIX_CAPABILITIES = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Answer Customer Questions',
    desc: 'Responds instantly to common enquiries using your business data, policies, and documents.',
  },
  {
    num: '02',
    icon: UserCheck,
    title: 'Qualify & Capture Leads',
    desc: 'Engages website or chat visitors, collects key details, and routes qualified leads.',
  },
  {
    num: '03',
    icon: Calendar,
    title: 'Book Appointments',
    desc: 'Checks availability, schedules meetings or service visits, and sends confirmations.',
  },
  {
    num: '04',
    icon: FileText,
    title: 'Work With Your Business Data',
    desc: 'Finds answers from internal PDFs, contracts, handbooks, and databases.',
  },
  {
    num: '05',
    icon: Workflow,
    title: 'Automate Routine Tasks',
    desc: 'Handles repetitive actions across your tools, including sales, support, and operations.',
  },
  {
    num: '06',
    icon: RefreshCw,
    title: 'Keep Records Up to Date',
    desc: 'Updates CRM, creates tickets, and keeps your business information in sync.',
  },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Too Many Repetitive Questions',
    desc: 'Your team repeatedly answers common customer and employee questions instead of focusing on more important work.',
  },
  {
    num: '02',
    title: 'Information Across Different Tools',
    desc: 'Company policies, customer details and documents are stored in different systems, making information difficult to find.',
  },
  {
    num: '03',
    title: 'Manual Work Slows Teams Down',
    desc: 'Copying information, updating records and routing requests manually creates unnecessary delays.',
  },
  {
    num: '04',
    title: 'Inaccurate AI Responses',
    desc: 'Generic AI tools without access to reliable company information can provide inaccurate answers. Businesses need controlled access to information and human oversight.',
  },
];

const WHY_IT_MATTERS_BENEFITS = [
  {
    num: '01',
    icon: Zap,
    title: 'Faster Customer Responses',
    desc: 'Agents handle common questions instantly and route complex issues to the right team, so customers receive timely assistance.',
  },
  {
    num: '02',
    icon: Brain,
    title: 'Context-Aware Decisions',
    desc: 'By understanding your business data and context, agents provide relevant answers and take appropriate actions.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Consistent Business Operations',
    desc: 'Automate routine tasks, reduce repetitive work, and maintain reliable processes across your business.',
  },
];

export default function AiAgentsPage() {
  const pageRef = useRef(null);

  usePageMetadata({
    title: 'Autonomous AI Agents — Enterprise Intelligence | Hutomate',
    description: 'Deploy multi-step autonomous AI agents that reason, plan, and execute across your enterprise software stack with human oversight.',
    path: '/capabilities/ai-agents',
  });

  useScrollReveal();

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.agent-hero-bg, .agent-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.agent-hero-bg',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        '.agent-hero-label',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.8'
      )
      .fromTo(
        '.agent-hero-headline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        '.agent-hero-lead',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.agent-hero-actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );
  });

  return (
    <div className="agent-page" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO SECTION
          ========================================================================= */}
      <section className="agent-hero-section" aria-label="AI Agents Hero">
        <div className="agent-hero-bg-container" aria-hidden="true">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-ai-agents-mobile.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-ai-agents-mobile.jpg"
              type="image/jpeg"
            />
            <source
              srcSet="/images/hero-ai-agents.webp"
              type="image/webp"
            />
            <img
              src="/images/hero-ai-agents.jpg"
              alt="Hutomate autonomous agent technology operations"
              className="agent-hero-bg"
              width="1920"
              height="1080"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="agent-hero-overlay" />
        </div>

        <div className="container agent-hero-container">
          <div className="agent-hero-content">
            <div className="agent-hero-label">
              <span>AI AGENTS</span>
            </div>

            <h1 className="agent-hero-headline">
              AI agents that understand context, make decisions, and execute business tasks.
            </h1>

            <p className="agent-hero-lead">
              We engineer autonomous software agents that interpret natural language, retrieve verified company knowledge, and execute multi-step workflows across your business tools—with strict human-in-the-loop oversight.
            </p>

            <div className="agent-hero-actions">
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
      <section className="agent-challenge-section" aria-label="The Challenge">
        <div className="container">
          <div className="agent-challenge-grid">
            <div className="agent-challenge-left reveal-on-scroll">
              <span className="agent-section-kicker">THE CHALLENGE</span>
              <h2 className="agent-challenge-heading">
                Your team spends too much time answering the same questions and searching for information.
              </h2>
              <p className="agent-challenge-lead">
                Customer enquiries, internal documents and repetitive tasks take valuable time away from your team. Important information is often spread across different tools, making it harder to find answers quickly and respond consistently.
              </p>
              <div className="agent-challenge-benefit">
                <div className="agent-benefit-header">
                  <span className="agent-benefit-badge" aria-hidden="true" />
                  <span className="agent-benefit-title">Controlled Knowledge Access</span>
                </div>
                <p className="agent-benefit-text">
                  AI agents reference your verified internal documents and policies to provide accurate answers, with built-in human review for sensitive requests.
                </p>
              </div>
            </div>

            <div className="agent-challenge-right reveal-on-scroll">
              {CHALLENGES.map((ch, idx) => (
                <div key={idx} className="agent-challenge-card">
                  <span className="agent-challenge-num">{ch.num}</span>
                  <h3 className="agent-challenge-title">{ch.title}</h3>
                  <p className="agent-challenge-desc">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT OUR AI AGENTS CAN DO — 6-CARD CAPABILITY GRID
          ========================================================================= */}
      <section className="agent-showcase-section" aria-label="What Our AI Agents Can Do">
        <div className="container">
          <div className="agent-showcase-header reveal-on-scroll">
            <span className="agent-section-kicker">WHAT OUR AI AGENTS CAN DO</span>
            <div className="agent-showcase-header-split">
              <h2 className="agent-section-heading">
                Real Work, Handled by AI
              </h2>
              <p className="agent-section-subhead">
                Let AI take care of repetitive work, so your team can focus on customers, growth, and bigger goals.
              </p>
            </div>
          </div>

          <div className="agent-six-grid reveal-on-scroll">
            {SIX_CAPABILITIES.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <article key={idx} className="agent-six-card">
                  <div className="agent-six-card-top">
                    <div className="agent-six-icon-box" aria-hidden="true">
                      <IconComp size={22} className="agent-six-icon" />
                    </div>
                    <span className="agent-six-num">{cap.num}</span>
                  </div>
                  <h3 className="agent-six-title">{cap.title}</h3>
                  <p className="agent-six-desc">{cap.desc}</p>
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
        heading="Faster, smarter, more consistent business operations."
        subhead="AI agents help you respond faster, make better decisions with context, and keep your business running smoothly — without the manual grind."
        benefits={WHY_IT_MATTERS_BENEFITS}
      />

      {/* =========================================================================
          SECTION 05: FINAL CTA — PREMIUM DARK NAVY COMPOSITION
          ========================================================================= */}
      <section className="agent-final-cta-section" aria-label="Discuss Your AI Agent Project">
        <div className="agent-final-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="agent-final-cta-inner reveal-on-scroll">
            <span className="agent-final-kicker">EVALUATE YOUR ARCHITECTURE</span>
            <h2 className="agent-final-heading">
              Ready to deploy autonomous agents with enterprise guardrails?
            </h2>
            <p className="agent-final-desc">
              Share your current operational workflows with our engineering team. We assess technical feasibility, software stack compatibility, and projected return on investment.
            </p>
            <div className="agent-final-actions">
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