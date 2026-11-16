import React, { useRef } from 'react';
import {
  RefreshCw,
  GitMerge,
  FileText,
  ArrowRightLeft,
  Receipt,
  CheckSquare,
  CheckCircle2,
  Activity,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import WhyItMattersSection from '../components/WhyItMattersSection';
import './WorkflowAutomationPage.css';

const SIX_WORKFLOW_CAPABILITIES = [
  {
    num: '01',
    icon: RefreshCw,
    title: 'Cross-Platform Data Synchronization',
    desc: 'Synchronizes records across your CRM, ERP, and internal databases in real time without human intervention.',
  },
  {
    num: '02',
    icon: GitMerge,
    title: 'Multi-Step Onboarding Triggers',
    desc: 'Triggers account provisioning, welcome sequences, contract requests, and setup steps when new clients sign up.',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Automated Document Generation',
    desc: 'Populates contracts, proposals, NDAs, and receipts from business inputs and stages them for electronic signature.',
  },
  {
    num: '04',
    icon: ArrowRightLeft,
    title: 'Lead Routing & Assignment',
    desc: 'Parses incoming enquiries from web forms or email, evaluates territory rules, and assigns them to the right reps.',
  },
  {
    num: '05',
    icon: Receipt,
    title: 'Invoice & Payment Workflows',
    desc: 'Automatically matches invoices to purchase orders, triggers payment reminders, and logs reconciliation in accounting tools.',
  },
  {
    num: '06',
    icon: CheckSquare,
    title: 'Notifications & Task Management',
    desc: 'Alerts team members in Slack or Teams when milestones occur and creates structured tracking tickets automatically.',
  },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Repetitive Data Re-entry',
    desc: 'Employees spend valuable hours manually copying data from emails, forms, and spreadsheets into your CRM and billing tools.',
  },
  {
    num: '02',
    title: 'Delayed Hand-offs Between Teams',
    desc: 'When sales closes a deal or a customer signs a contract, operational steps stall while waiting for manual email forwarding.',
  },
  {
    num: '03',
    title: 'Human Copy-Paste Mistakes',
    desc: 'Manual data transcription inevitably leads to typos, wrong client details, missed invoices, and mismatched operational records.',
  },
  {
    num: '04',
    title: 'Fragile DIY Automations',
    desc: 'Simple no-code automations often fail silently when software updates, leaving your team to diagnose and repair broken workflows unexpectedly.',
  },
];

const WHY_IT_MATTERS_BENEFITS = [
  {
    num: '01',
    icon: ArrowRightLeft,
    title: 'Faster Operations',
    desc: 'Automate repetitive tasks and eliminate manual data entry across your business tools.',
  },
  {
    num: '02',
    icon: CheckCircle2,
    title: 'Better Data Accuracy',
    desc: 'Keep customer records and business information consistent across connected platforms.',
  },
  {
    num: '03',
    icon: Activity,
    title: 'Real-Time Execution',
    desc: 'Trigger actions automatically when events occur and keep workflows moving without unnecessary delays.',
  },
];

export default function WorkflowAutomationPage() {
  const pageRef = useRef(null);

  usePageMetadata({
    title: 'Workflow Automation & Connected Operations | Hutomate',
    description: 'Connect your business software stack and eliminate manual friction with resilient, enterprise-grade automated workflows.',
    path: '/capabilities/workflow-automation',
  });

  useScrollReveal();

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.wf-hero-bg, .wf-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.wf-hero-bg',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        '.wf-hero-label',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.8'
      )
      .fromTo(
        '.wf-hero-headline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        '.wf-hero-lead',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.wf-hero-actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );
  });

  return (
    <div className="wf-page" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO SECTION
          ========================================================================= */}
      <section className="wf-hero-section" aria-label="Workflow Automation Hero">
        <div className="wf-hero-bg-container" aria-hidden="true">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-workflow-automation-mobile.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-workflow-automation-mobile.jpg"
              type="image/jpeg"
            />
            <source
              srcSet="/images/hero-workflow-automation.webp"
              type="image/webp"
            />
            <img
              src="/images/hero-workflow-automation.jpg"
              alt="Hutomate enterprise workflow automation architecture"
              className="wf-hero-bg"
              width="1920"
              height="1080"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="wf-hero-overlay" />
        </div>

        <div className="container wf-hero-container">
          <div className="wf-hero-content">
            <div className="wf-hero-label">
              <span>WORKFLOW AUTOMATION</span>
            </div>

            <h1 className="wf-hero-headline">
              Automated workflows that connect your software and eliminate manual tasks.
            </h1>

            <p className="wf-hero-lead">
              We connect your CRM, billing, project management, and communication tools into reliable, automated pipelines. Information flows instantly between teams without manual data re-entry.
            </p>

            <div className="wf-hero-actions">
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
      <section className="wf-challenge-section" aria-label="The Challenge">
        <div className="container">
          <div className="wf-challenge-grid">
            <div className="wf-challenge-left reveal-on-scroll">
              <span className="wf-section-kicker">THE CHALLENGE</span>
              <h2 className="wf-challenge-heading">
                Disconnected software tools create costly manual delays between your teams.
              </h2>
              <p className="wf-challenge-lead">
                Most businesses rely on separate software for sales, invoicing, project management, and customer support. When these tools do not communicate with each other, staff waste hours re-entering data and chasing status updates.
              </p>
              <div className="wf-challenge-benefit">
                <div className="wf-benefit-header">
                  <span className="wf-benefit-badge" aria-hidden="true" />
                  <span className="wf-benefit-title">Automated Multi-System Coordination</span>
                </div>
                <p className="wf-benefit-text">
                  Connected workflows pass information instantly between your software tools, eliminating manual data entry and preventing human handoff errors.
                </p>
              </div>
            </div>

            <div className="wf-challenge-right reveal-on-scroll">
              {CHALLENGES.map((ch, idx) => (
                <div key={idx} className="wf-challenge-card">
                  <span className="wf-challenge-num">{ch.num}</span>
                  <h3 className="wf-challenge-title">{ch.title}</h3>
                  <p className="wf-challenge-desc">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT WORKFLOW AUTOMATION CAN DO — 6-CARD CAPABILITY GRID
          ========================================================================= */}
      <section className="wf-showcase-section" aria-label="What Workflow Automation Can Do">
        <div className="container">
          <div className="wf-showcase-header reveal-on-scroll">
            <span className="wf-section-kicker">WHAT WORKFLOW AUTOMATION CAN DO</span>
            <div className="wf-showcase-header-split">
              <h2 className="wf-section-heading">
                Connected Systems, Handled Automatically
              </h2>
              <p className="wf-section-subhead">
                Connect your tools and automate routine steps, so work moves forward without manual delay.
              </p>
            </div>
          </div>

          <div className="wf-six-grid reveal-on-scroll">
            {SIX_WORKFLOW_CAPABILITIES.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <article key={idx} className="wf-six-card">
                  <div className="wf-six-card-top">
                    <div className="wf-six-icon-box" aria-hidden="true">
                      <IconComp size={22} className="wf-six-icon" />
                    </div>
                    <span className="wf-six-num">{cap.num}</span>
                  </div>
                  <h3 className="wf-six-title">{cap.title}</h3>
                  <p className="wf-six-desc">{cap.desc}</p>
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
        heading="Operational speed without manual data friction."
        subhead="Connect your business tools, reduce repetitive data entry, and automate routine processes so information moves between systems reliably."
        benefits={WHY_IT_MATTERS_BENEFITS}
      />

      {/* =========================================================================
          SECTION 05: FINAL CTA
          ========================================================================= */}
      <section className="wf-final-cta-section" aria-label="Discuss Your Automation Project">
        <div className="wf-final-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="wf-final-cta-inner reveal-on-scroll">
            <span className="wf-final-kicker">AUTOMATE YOUR WORKFLOWS</span>
            <h2 className="wf-final-heading">
              Ready to eliminate repetitive data re-entry across your tools?
            </h2>
            <p className="wf-final-desc">
              Share your current software stack and manual handoffs with our engineering team. We'll identify where automated pipelines can save your staff hours each week.
            </p>
            <div className="wf-final-actions">
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