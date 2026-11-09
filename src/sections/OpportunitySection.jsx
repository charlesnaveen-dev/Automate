import React from 'react';
import {
  MessageSquareX,
  Clock,
  Calendar,
  Layers,
  UserMinus,
  Bot,
  PhoneCall,
  GitBranch,
  Cpu,
  Zap,
  CheckCircle2,
  Target,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Button from '../components/Button';
import './OpportunitySection.css';

/**
 * OpportunitySection Component
 * 
 * Simplified, business-owner focused overview that clearly articulates:
 * 01 — Business Challenges: Everyday friction teams face.
 * 02 — What Hutomate Does: How intelligent systems solve the friction.
 * 03 — Business Benefits: Practical outcomes businesses experience.
 */
export default function OpportunitySection() {
  const challenges = [
    { text: 'Missing customer enquiries', icon: MessageSquareX },
    { text: 'Spending too much time on repetitive tasks', icon: Clock },
    { text: 'Manually managing appointments and follow-ups', icon: Calendar },
    { text: 'Information scattered across different tools', icon: Layers },
    { text: 'Losing potential customers because of slow responses', icon: UserMinus },
  ];

  const solutions = [
    {
      title: 'AI Agents',
      desc: 'AI agents handle repetitive business tasks',
      detail: 'Free your team from routine data lookups, drafting, and ticket triage.',
      icon: Bot,
    },
    {
      title: 'Voice AI',
      desc: 'Voice AI answers calls and manages customer conversations',
      detail: 'Never miss an inbound phone call, customer question, or booking request.',
      icon: PhoneCall,
    },
    {
      title: 'Workflow Automation',
      desc: 'Workflow automation connects tools and processes',
      detail: 'Keep your CRM, emails, forms, and spreadsheets in continuous sync.',
      icon: GitBranch,
    },
    {
      title: 'Custom AI Solutions',
      desc: 'Custom AI solutions streamline business operations',
      detail: 'Tailored systems built around your unique proprietary operations.',
      icon: Cpu,
    },
  ];

  const benefits = [
    { text: 'Faster customer responses', icon: Zap },
    { text: 'Less manual work', icon: CheckCircle2 },
    { text: 'Better lead management', icon: Target },
    { text: 'More organized operations', icon: TrendingUp },
    { text: 'More time to focus on growing the business', icon: Sparkles },
  ];

  return (
    <section className="opportunity-section" id="opportunity" aria-labelledby="opportunity-title">
      <div className="opportunity-container">
        {/* Editorial Section Header */}
        <header className="opp-header reveal-on-scroll">
          <div className="opp-header-intro">
            <div className="opp-eyebrow">
              <span className="opp-eyebrow-dot" aria-hidden="true" />
              <span>THE OPPORTUNITY</span>
            </div>
            <h2 id="opportunity-title" className="opp-headline">
              Work is moving faster.
              <br />
              <span className="opp-headline-accent">Your processes should too.</span>
            </h2>
          </div>

          <div className="opp-header-desc">
            <p className="opp-subhead">
              Every growing business reaches a point where manual administration, missed enquiries, and disconnected tools create unnecessary drag. Here is how modern automation turns day-to-day friction into reliable speed.
            </p>
          </div>
        </header>

        {/* 3-Part Operational Progression: Challenges -> Solutions -> Outcomes */}
        <div className="opp-transformation-grid">
          {/* ===================================================================
              PART 01: BUSINESS CHALLENGES
              =================================================================== */}
          <div className="opp-pillar opp-pillar--challenges reveal-on-scroll reveal-delay-1">
            <div className="opp-pillar-header">
              <div className="opp-pillar-tag opp-tag--challenge">
                <span className="opp-tag-num">01</span>
                <span className="opp-tag-label">Business Challenges</span>
              </div>
              <h3 className="opp-pillar-title">Where Teams Lose Time</h3>
              <p className="opp-pillar-lead">
                Familiar operational roadblocks that slow down growing businesses:
              </p>
            </div>

            <ul className="opp-list opp-list--challenges" role="list">
              {challenges.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <li key={idx} className="opp-list-item opp-item--challenge">
                    <div className="opp-item-icon-box opp-icon--challenge" aria-hidden="true">
                      <IconComponent size={17} strokeWidth={2.2} />
                    </div>
                    <span className="opp-item-text">{item.text}</span>
                  </li>
                );
              })}
            </ul>

            <div className="opp-pillar-footer opp-footer--challenge">
              <span className="opp-footer-dot" aria-hidden="true" />
              <span>The impact: Lost revenue, delays, and overworked staff</span>
            </div>
          </div>

          {/* Desktop Visual Connector 1 -> 2 */}
          <div className="opp-grid-connector connector-1-2" aria-hidden="true">
            <div className="opp-connector-line" />
            <div className="opp-connector-node">
              <span>SOLVED BY</span>
              <ArrowRight size={13} />
            </div>
          </div>

          {/* ===================================================================
              PART 02: WHAT HUTOMATE DOES
              =================================================================== */}
          <div className="opp-pillar opp-pillar--solutions reveal-on-scroll reveal-delay-2">
            <div className="opp-pillar-header">
              <div className="opp-pillar-tag opp-tag--solution">
                <span className="opp-tag-num">02</span>
                <span className="opp-tag-label">What Hutomate Does</span>
              </div>
              <h3 className="opp-pillar-title">Intelligent Systems</h3>
              <p className="opp-pillar-lead">
                Practical automation working smoothly in the background:
              </p>
            </div>

            <div className="opp-solutions-stack">
              {solutions.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="opp-solution-row">
                    <div className="opp-item-icon-box opp-icon--solution" aria-hidden="true">
                      <IconComponent size={18} strokeWidth={2.2} />
                    </div>
                    <div className="opp-solution-content">
                      <h4 className="opp-solution-title">{item.desc}</h4>
                      <p className="opp-solution-detail">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="opp-pillar-footer opp-footer--solution">
              <span className="opp-footer-dot opp-dot--purple" aria-hidden="true" />
              <span>The engine: Reliable software working in the background 24/7</span>
            </div>
          </div>

          {/* Desktop Visual Connector 2 -> 3 */}
          <div className="opp-grid-connector connector-2-3" aria-hidden="true">
            <div className="opp-connector-line" />
            <div className="opp-connector-node">
              <span>DELIVERS</span>
              <ArrowRight size={13} />
            </div>
          </div>

          {/* ===================================================================
              PART 03: BUSINESS BENEFITS
              =================================================================== */}
          <div className="opp-pillar opp-pillar--benefits reveal-on-scroll reveal-delay-3">
            <div className="opp-pillar-header">
              <div className="opp-pillar-tag opp-tag--benefit">
                <span className="opp-tag-num">03</span>
                <span className="opp-tag-label">Business Benefits</span>
              </div>
              <h3 className="opp-pillar-title">Practical Outcomes</h3>
              <p className="opp-pillar-lead">
                Tangible operational results your business sees from day one:
              </p>
            </div>

            <ul className="opp-list opp-list--benefits" role="list">
              {benefits.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <li key={idx} className="opp-list-item opp-item--benefit">
                    <div className="opp-item-icon-box opp-icon--benefit" aria-hidden="true">
                      <IconComponent size={17} strokeWidth={2.4} />
                    </div>
                    <span className="opp-item-text opp-text--benefit">{item.text}</span>
                  </li>
                );
              })}
            </ul>

            <div className="opp-pillar-footer opp-footer--benefit">
              <span className="opp-footer-dot opp-dot--green" aria-hidden="true" />
              <span>The result: Scalable operations, lower overhead, and faster growth</span>
            </div>
          </div>
        </div>

        {/* Bottom Takeaway & Call to Action */}
        <div className="opp-takeaway-card reveal-on-scroll">
          <div className="opp-takeaway-content">
            <span className="opp-takeaway-eyebrow">The Bottom Line</span>
            <p className="opp-takeaway-message">
              You don&apos;t have to replace your team or completely overhaul your tech stack. We design intelligent workflows that plug directly into the tools you already use, eliminating repetitive friction so you can focus on building your business.
            </p>
          </div>
          <div className="opp-takeaway-cta">
            <Button variant="primary" size="md" arrow href="#contact">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
