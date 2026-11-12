import React from 'react';
import {
  Layers,
  ShieldCheck,
  Globe,
  Check,
  Code2,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './AboutPage.css';

const PROBLEMS_SOLVED = [
  {
    num: '01',
    title: 'Manual Data Re-Entry',
    problem: 'Teams lose valuable hours every week manually copying information between CRMs, email, spreadsheets, and accounting tools.',
    solution: 'We build direct, automated bridges between your tools so data moves instantly and accurately without manual copy-pasting.',
  },
  {
    num: '02',
    title: 'Delayed Customer Communication',
    problem: 'Inbound inquiries, appointment requests, and support questions sit waiting during peak hours and weekends.',
    solution: 'We deploy voice and conversational AI systems that respond immediately, qualify leads, and route details straight to your team.',
  },
  {
    num: '03',
    title: 'Inconsistent Multi-Step Workflows',
    problem: 'Multi-stage business operations often slow down or experience errors when handoffs rely on individual memory and manual checklists.',
    solution: 'We engineer structured automation pipelines with validation rules and built-in human escalation for sensitive checkpoints.',
  },
];

const HOW_WE_HELP = [
  {
    title: 'Works With Your Current Tools',
    lead: 'No need to rebuild your software stack or migrate away from what already works.',
    desc: 'We connect directly into the platforms your team relies on daily—your CRM, internal databases, customer communication channels, and specialized software.',
    icon: Layers,
  },
  {
    title: 'Engineered for Real Reliability',
    lead: 'Practical systems designed with strict validation and built-in human oversight.',
    desc: 'Automation should reduce risk, not introduce uncertainty. We design clear validation checks and explicit human checkpoints so your people remain in control of key decisions.',
    icon: ShieldCheck,
  },
  {
    title: '100% Client Ownership',
    lead: 'You own every workflow, integration, and custom code asset we build.',
    desc: 'We believe in complete client independence. There are no black boxes or proprietary vendor lock-ins. You retain full ownership of your code, schemas, and documentation.',
    icon: Code2,
  },
];

const GUIDING_PRINCIPLES = [
  {
    num: '01',
    title: 'Solve Real Bottlenecks First',
    desc: 'We prioritize automations that deliver immediate operational relief and measurable time savings, rather than building technology for its own sake.',
  },
  {
    num: '02',
    title: 'Keep Humans in Control',
    desc: 'Autonomous does not mean unsupervised. High-stakes actions, sensitive approvals, and edge cases always feature clear escalation paths to your team.',
  },
  {
    num: '03',
    title: 'Protect Your Business Privacy',
    desc: 'Your internal data, documents, and customer communications are never used to train public models. We enforce strict enterprise zero-retention policies.',
  },
  {
    num: '04',
    title: 'Build for Long-Term Durability',
    desc: 'Every system includes comprehensive documentation, operator training, and live telemetry so your workflows remain reliable as your business grows.',
  },
];

export default function AboutPage() {
  usePageMetadata({
    title: 'About Hutomate — AI Automation & Implementation Partner',
    description:
      'Hutomate is an AI automation and implementation partner helping businesses connect existing tools, automate repetitive tasks, and deploy reliable intelligent systems.',
    path: '/about',
  });

  useScrollReveal();

  return (
    <div className="about-page-view">
      {/* ----------------------------------------------------------------------
          1. HERO SECTION: Positioning & Purpose
          ---------------------------------------------------------------------- */}
      <section className="about-hero-section" aria-label="About Hutomate">
        <div className="about-hero-ambient" aria-hidden="true" />

        <div className="container about-hero-container">
          <div className="about-hero-grid">
            <div className="about-hero-text reveal-on-scroll">
              <div className="about-eyebrow-pill">
                <span className="about-eyebrow-dot" />
                <span className="about-eyebrow-text">ABOUT HUTOMATE</span>
              </div>

              <h1 className="about-hero-title">
                An AI automation partner for{' '}
                <span className="about-title-accent">growing businesses.</span>
              </h1>

              <p className="about-hero-lead">
                Hutomate helps companies modernize how work gets done. We build practical AI systems and automated workflows that connect the tools you already use, reduce repetitive manual tasks, and give your team more time to focus on high-judgment work.
              </p>

              <div className="about-hero-actions">
                <Button variant="primary" size="md" arrow href="/contact">
                  Start a Conversation
                </Button>
                <Button variant="secondary" size="md" href="/capabilities">
                  Explore Capabilities
                </Button>
              </div>
            </div>

            <div className="about-hero-media reveal-on-scroll reveal-delay-2">
              <div className="about-hero-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Engineering team collaborating in modern office"
                  className="about-hero-image"
                  loading="eager"
                />
                <div className="about-image-card-caption">
                  <span className="caption-dot" />
                  <span>Practical AI engineering &amp; implementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          2. CORE MISSION: What Hutomate Solves
          ---------------------------------------------------------------------- */}
      <section className="about-mission-section" aria-label="What We Solve">
        <div className="container">
          <div className="about-section-header reveal-on-scroll">
            <span className="about-section-kicker">WHAT WE SOLVE</span>
            <h2 className="about-section-title">
              Most teams lose hours every day to fragmented tools and repetitive admin.
            </h2>
            <p className="about-section-desc">
              Work rarely slows down because people lack talent. It slows down because software tools operate in silos, inquiries wait in queues, and skilled operators spend their days manually transferring data between different systems.
            </p>
          </div>

          <div className="about-problems-grid">
            {PROBLEMS_SOLVED.map((item, idx) => (
              <div key={item.num} className={`about-problem-card reveal-on-scroll reveal-delay-${idx + 1}`}>
                <div className="problem-card-top">
                  <span className="problem-num">{item.num}</span>
                  <span className="problem-tag">Common Bottleneck</span>
                </div>
                <h3 className="problem-title">{item.title}</h3>
                <div className="problem-comparison">
                  <div className="problem-point problem-point--issue">
                    <span className="comparison-label">The Challenge</span>
                    <p>{item.problem}</p>
                  </div>
                  <div className="problem-point problem-point--solve">
                    <span className="comparison-label comparison-label--teal">How We Solve It</span>
                    <p>{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          3. HOW WE HELP: Distinctive Implementation Approach
          ---------------------------------------------------------------------- */}
      <section className="about-help-section" aria-label="How We Help Businesses">
        <div className="container">
          <div className="about-section-header reveal-on-scroll">
            <span className="about-section-kicker">HOW WE HELP</span>
            <h2 className="about-section-title">
              Practical automation designed around your business realities.
            </h2>
            <p className="about-section-desc">
              We do not ask your team to adapt to rigid software or abandon what works. We build solutions that integrate quietly into your existing operating rhythm.
            </p>
          </div>

          <div className="about-pillars-grid">
            {HOW_WE_HELP.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div key={pillar.title} className={`about-pillar-card reveal-on-scroll reveal-delay-${idx + 1}`}>
                  <div className="pillar-icon-box">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="pillar-card-title">{pillar.title}</h3>
                  <p className="pillar-card-lead">{pillar.lead}</p>
                  <p className="pillar-card-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          4. WHY WORK WITH HUTOMATE: Editorial Split Narrative
          ---------------------------------------------------------------------- */}
      <section className="about-why-section" aria-label="Why Work With Hutomate">
        <div className="container">
          <div className="about-why-layout">
            <div className="about-why-media reveal-on-scroll">
              <div className="about-why-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern architectural workspace"
                  className="about-why-image"
                  loading="lazy"
                />
                <div className="about-why-overlay" />
                <div className="about-why-tagline">
                  <div className="tagline-dot" />
                  <span>Disciplined Engineering Over Speculative Hype</span>
                </div>
              </div>
            </div>

            <div className="about-why-content reveal-on-scroll reveal-delay-2">
              <span className="about-section-kicker">WHY HUTOMATE</span>
              <h2 className="about-why-heading">
                Engineering discipline over speculative hype.
              </h2>

              <p className="about-why-text">
                The market is filled with generic AI chatbots and flashy demos that look impressive on the surface, but struggle the moment they encounter real-world exceptions, messy inputs, or complex business logic.
              </p>

              <p className="about-why-text">
                We take an engineering-first approach. We map your actual operational pathways, test prototypes in safe staging environments using real scenarios, and run parallel verifications alongside your team before cutover.
              </p>

              <div className="about-why-checklist">
                <div className="why-check-item">
                  <div className="check-box">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="check-title">Clear Business Outcomes</h4>
                    <p className="check-desc">We identify clear operational metrics before writing code—measuring time saved and error reductions.</p>
                  </div>
                </div>

                <div className="why-check-item">
                  <div className="check-box">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="check-title">Direct Engineering Access</h4>
                    <p className="check-desc">You collaborate directly with engineers who understand system architecture and operational workflows.</p>
                  </div>
                </div>

                <div className="why-check-item">
                  <div className="check-box">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="check-title">Full Training &amp; Enablement</h4>
                    <p className="check-desc">We ensure your staff are fully trained and comfortable overseeing the new systems from day one.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          5. HOW WE APPROACH OUR WORK: Guiding Principles
          ---------------------------------------------------------------------- */}
      <section className="about-principles-section" aria-label="Our Guiding Principles">
        <div className="container">
          <div className="about-section-header reveal-on-scroll">
            <span className="about-section-kicker">OUR APPROACH</span>
            <h2 className="about-section-title">
              Four principles that guide every solution we engineer.
            </h2>
            <p className="about-section-desc">
              How we evaluate every engagement, architect system integrations, and protect client interests.
            </p>
          </div>

          <div className="principles-editorial-grid">
            {GUIDING_PRINCIPLES.map((gp, idx) => (
              <div key={gp.num} className={`principle-editorial-item reveal-on-scroll reveal-delay-${idx + 1}`}>
                <span className="gp-num">{gp.num}</span>
                <h3 className="gp-title">{gp.title}</h3>
                <p className="gp-desc">{gp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          6. GLOBAL ENGAGEMENT: International Delivery
          ---------------------------------------------------------------------- */}
      <section className="about-global-section" aria-label="Global Client Reach">
        <div className="container">
          <div className="about-global-card reveal-on-scroll">
            <div className="global-card-header">
              <div className="global-icon-badge">
                <Globe size={22} />
              </div>
              <h3 className="global-title">Supporting forward-thinking businesses worldwide</h3>
              <p className="global-lead">
                Hutomate works with clients across the United States, United Kingdom, Australia, and internationally. We align with your timezones, compliance standards, and communication cadence.
              </p>
            </div>

            <div className="global-regions-strip">
              <span className="region-chip">United States</span>
              <span className="region-chip">United Kingdom</span>
              <span className="region-chip">Australia</span>
              <span className="region-chip">Canada</span>
              <span className="region-chip">Worldwide Remote</span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          7. CLOSING CTA BANNER
          ---------------------------------------------------------------------- */}
      <CtaBanner
        title="Ready to make your operations work smarter?"
        description="Let's discuss where repetitive work is slowing your team down and explore how practical AI automation can help."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
        secondaryButtonText="Explore Delivery Process"
        secondaryButtonHref="/process"
      />
    </div>
  );
}
