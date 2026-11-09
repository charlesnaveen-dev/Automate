import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Info } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import { Link } from '../router/Router';
import './UseCasesPage.css';

/**
 * Interactive Workflow Stage Component for Use Cases
 */
function InteractiveUseCaseWorkflow({ stages, defaultActiveIdx = 0 }) {
  const [activeStageIdx, setActiveStageIdx] = useState(defaultActiveIdx);

  const activeStage = stages[activeStageIdx] || stages[0];

  return (
    <div className="uc-interactive-flow-box">
      <div className="uc-flow-header">
        <span className="uc-flow-label">INTERACTIVE WORKFLOW PIPELINE</span>
        <span className="uc-flow-hint">Click any stage to inspect execution</span>
      </div>

      {/* Connected Interactive Stage Nodes */}
      <div className="uc-stages-rail" role="tablist">
        {stages.map((stage, idx) => {
          const isActive = activeStageIdx === idx;
          return (
            <React.Fragment key={idx}>
              <button
                type="button"
                className={`uc-stage-node reveal-node reveal-node-delay-${idx + 1} ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveStageIdx(idx)}
                role="tab"
                aria-selected={isActive}
              >
                <span className="uc-node-step">0{idx + 1}</span>
                <span className="uc-node-title">{stage.name}</span>
                {isActive && <span className="uc-node-active-bar" />}
              </button>

              {idx < stages.length - 1 && (
                <div className="uc-connector-track" aria-hidden="true">
                  <span className="uc-connector-line"></span>
                  <span className="uc-connector-pulse"></span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Expanded Stage Explanation Display */}
      <div className="uc-stage-detail-panel">
        <div className="uc-stage-detail-heading">
          <Info size={14} color="#7657E8" />
          <span className="uc-detail-title">
            Stage 0{activeStageIdx + 1}: {activeStage.name}
          </span>
          <span className="uc-detail-status">{activeStage.status || 'Automated Step'}</span>
        </div>
        <p className="uc-stage-detail-desc">{activeStage.description}</p>
      </div>
    </div>
  );
}

export default function UseCasesPage() {
  usePageMetadata({
    title: 'Practical AI Use Cases — Real Operational Applications',
    description: 'Explore practical implementations of AI agents, voice receptionists, and workflow pipelines solving tangible business bottlenecks.',
    path: '/use-cases',
  });

  const [activeCategory, setActiveCategory] = useState('all');

  useScrollReveal(activeCategory);

  const categories = [
    { id: 'all', label: 'All Use Cases' },
    { id: 'inbound', label: 'Inbound & Voice' },
    { id: 'sales', label: 'Sales & Qualification' },
    { id: 'operations', label: 'Operations & Sync' },
  ];

  const useCases = [
    {
      id: 'uc-inquiry',
      num: '01',
      category: 'inbound',
      categoryLabel: 'Inbound & Voice',
      title: 'Never miss an inquiry',
      subtitle: 'Inbound call, voicemail & form triage 24/7/365',
      problem: 'Inbound callers rarely leave voicemails when directed to an answering machine or placed on indefinite hold. High-intent prospects quickly look elsewhere.',
      solution: 'Our Voice AI receptionists and multi-channel bots pick up inbound calls within seconds. They understand natural speech, qualify caller intent, answer specific FAQs, and record structured details directly into your CRM.',
      stages: [
        {
          name: 'Inbound Lead / Call',
          status: 'Trigger Event',
          description: 'A customer calls the main business line or submits an urgent web inquiry form at any hour of the day or weekend.',
        },
        {
          name: 'Sub-Second AI Answer',
          status: 'Voice Synthesis',
          description: 'Hutomate Voice AI answers with natural, conversational voice synthesis in under 200ms latency without robot pauses.',
        },
        {
          name: 'Intent & FAQ Triage',
          status: 'Knowledge Query',
          description: 'The agent identifies customer requirements, answers business FAQs from verified company knowledge, and verifies location.',
        },
        {
          name: 'Calendar & CRM Sync',
          status: 'Multi-System Action',
          description: 'Directly reserves an appointment in Google Calendar/Outlook and writes structured call notes into your CRM.',
        },
      ],
      impacts: [
        'Zero missed client inquiries with 24/7/365 operational availability',
        'Sub-15-second response time across phone, form, and chat channels',
        'Immediate SMS confirmations and calendar invitations dispatched',
      ],
      stack: ['Voice AI Telephony', 'Twilio', 'HubSpot CRM', 'Google Calendar', 'Webhooks'],
      ctaText: 'Discuss Inbound Automation',
      ctaHref: '/contact',
    },
    {
      id: 'uc-qualification',
      num: '02',
      category: 'sales',
      categoryLabel: 'Sales & Qualification',
      title: 'Qualify leads automatically',
      subtitle: 'Automated lead research, ICP scoring & dynamic routing',
      problem: 'Sales teams lose critical time manually vetting inbound inquiries, checking company details, and chasing dead ends instead of having high-value discovery conversations.',
      solution: 'Intelligent screening agents evaluate incoming submissions against your Ideal Customer Profile (ICP). They enrich contact records using firmographic databases and assign instant priority tiers so high-value opportunities receive immediate attention.',
      stages: [
        {
          name: 'Inbound Submission',
          status: 'Form / Email Trigger',
          description: 'A prospective client submits a demo request or project scoping form on your website.',
        },
        {
          name: 'Firmographic Enrichment',
          status: 'API Enrichment',
          description: 'Agent automatically queries Clearbit and corporate databases to append company size, revenue, tech stack, and industry.',
        },
        {
          name: 'Algorithmic ICP Scoring',
          status: 'Reasoning Engine',
          description: 'Calculates an ICP match score (0-100) based on your custom criteria: budget, timeline, and operational complexity.',
        },
        {
          name: 'VIP AE Routing',
          status: 'CRM & Slack Action',
          description: 'High-score leads trigger a VIP Slack alert and route straight to a Senior AE calendar; other tiers receive automated nurture.',
        },
      ],
      impacts: [
        'Substantially increased sales rep capacity for closing revenue',
        'Rapid qualification turnaround time on inbound inquiries',
        'Consistent CRM data hygiene and reliable lead scoring',
      ],
      stack: ['AI Agents', 'Clearbit API', 'HubSpot', 'Salesforce', 'Slack'],
      ctaText: 'Discuss Lead Qualification',
      ctaHref: '/contact',
    },
    {
      id: 'uc-booking',
      num: '03',
      category: 'inbound',
      categoryLabel: 'Inbound & Voice',
      title: 'Book appointments seamlessly',
      subtitle: 'Real-time calendar negotiation & no-show reduction',
      problem: 'Back-and-forth scheduling emails cause significant deal drop-off, with many warm prospects abandoning inquiries before a meeting time is ever finalized.',
      solution: 'Voice and chat agents query real-time calendar availability directly during the conversation. They present available slots, confirm bookings in Google Calendar or Outlook, and dispatch automated SMS/email reminders to eliminate no-shows.',
      stages: [
        {
          name: 'Booking Intent Detected',
          status: 'Conversational NLP',
          description: 'The caller or chat user expresses interest in scheduling a consultation, service visit, or demo.',
        },
        {
          name: 'Real-Time Calendar Query',
          status: 'API Availability',
          description: 'Agent queries Google Calendar or Microsoft Outlook 365 API to find unbooked slots respecting buffer intervals.',
        },
        {
          name: 'Slot Negotiation',
          status: 'Interactive Choice',
          description: 'The agent offers two clean options, handles timezone conversions, and confirms caller preference.',
        },
        {
          name: 'Invite & SMS Reminder',
          status: 'Automated Dispatch',
          description: 'Calendar event created with video link, and an automated SMS confirmation with a 24-hr reminder workflow is queued.',
        },
      ],
      impacts: [
        'Eliminate manual back-and-forth appointment scheduling',
        'Prevent forgotten bookings via automated multi-channel SMS confirmations',
        'Instant timezone translation and two-way calendar sync',
      ],
      stack: ['AI Receptionists', 'Google Calendar', 'Outlook 365', 'Twilio SMS', 'Calendly'],
      ctaText: 'Discuss Automated Scheduling',
      ctaHref: '/contact',
    },
    {
      id: 'uc-sync',
      num: '04',
      category: 'operations',
      categoryLabel: 'Operations & Sync',
      title: 'Keep systems updated in real time',
      subtitle: 'CRM, database & ERP bidirectional synchronization',
      problem: 'Sales, support, and billing teams operate out of siloed platforms with conflicting records because manual cross-system data entry is delayed, neglected, or full of human errors.',
      solution: 'We construct robust event-driven data pipelines that listen to system updates, normalize schemas, and synchronize contact, transaction, and operational records across your entire technology stack instantly.',
      stages: [
        {
          name: 'System Event Fired',
          status: 'Webhook Trigger',
          description: 'A customer signs a contract, completes a payment, or updates their profile in any connected tool.',
        },
        {
          name: 'Schema Normalization',
          status: 'Ingestion Pipeline',
          description: 'Pipeline ingests data, strips duplicates, validates phone and address formatting, and ensures schema compliance.',
        },
        {
          name: 'Field Mapping & Conflict Check',
          status: 'Orchestration Hub',
          description: 'Evaluates matching records in HubSpot, PostgreSQL, and accounting software, resolving timestamps deterministically.',
        },
        {
          name: 'Multi-System Commit',
          status: 'Bidirectional Sync',
          description: 'Writes clean records across all databases with full audit logging and automated retry mechanisms.',
        },
      ],
      impacts: [
        'Zero manual data re-entry required across departments',
        '100% CRM and database parity in real time',
        'Audit-logged execution traces with zero data loss guarantee',
      ],
      stack: ['Workflow Automation', 'PostgreSQL', 'HubSpot', 'Salesforce', 'Airtable'],
      ctaText: 'Connect Your Stack',
      ctaHref: '/contact',
    },
    {
      id: 'uc-followup',
      num: '05',
      category: 'sales',
      categoryLabel: 'Sales & Qualification',
      title: 'Automate follow-ups without sounding automated',
      subtitle: 'Contextual, personalized nurture sequences driven by AI',
      problem: 'Generic drip sequences feel robotic, alienate high-value clients, and ignore specific objections, questions, or timeline constraints discussed in previous conversations.',
      solution: 'Context-aware nurture agents ingest call transcripts and meeting notes to generate hyper-personalized follow-up emails. Each message speaks directly to the client\'s stated concerns and custom solution requirements.',
      stages: [
        {
          name: 'Call Transcript Ingested',
          status: 'Post-Meeting Event',
          description: 'Raw audio or notes from a client discovery meeting are securely ingested into the processing pipeline.',
        },
        {
          name: 'Topic & Objection Extraction',
          status: 'Semantic NLP',
          description: 'AI extracts specific customer questions, timeline constraints, budget figures, and primary objections.',
        },
        {
          name: 'Contextual Draft Generated',
          status: 'Generative Synthesis',
          description: 'A customized, professional follow-up is synthesized referencing the exact discussion points and tailored solutions.',
        },
        {
          name: 'Timed Outreach Dispatch',
          status: 'Email & CRM Delivery',
          description: 'Message is dispatched or queued for human rep one-click approval before landing in the client\'s inbox.',
        },
      ],
      impacts: [
        'High-conversion personalized messaging based on real conversation points',
        'Zero delay in post-meeting summary and next-step delivery',
        'Optional human-in-the-loop review before dispatch',
      ],
      stack: ['AI Agents', 'Custom AI Models', 'Gmail API', 'Outlook', 'HubSpot CRM'],
      ctaText: 'Discuss Contextual Follow-ups',
      ctaHref: '/contact',
    },
    {
      id: 'uc-triage',
      num: '06',
      category: 'operations',
      categoryLabel: 'Operations & Sync',
      title: 'Route inquiries to the right person every time',
      subtitle: 'Intelligent urgency triage & warm escalation',
      problem: 'Misrouted support tickets and misassigned enterprise inquiries frustrate customers, cause severe response delays, and burn senior staff time manually redirecting tickets.',
      solution: 'Natural language triage agents analyze query urgency, technical domain, language, and customer account value. Inquiries are routed immediately to the correct department with an executive-level summary and recommended next steps.',
      stages: [
        {
          name: 'Inbound Ticket / Message',
          status: 'Multi-Channel Trigger',
          description: 'A customer submits a support request via email, web form, Zendesk, or Slack community channel.',
        },
        {
          name: 'NLP Urgency & Domain Analysis',
          status: 'Intent Classification',
          description: 'Agent evaluates technical complexity, emotional sentiment, customer SLA tier, and problem domain.',
        },
        {
          name: 'Priority Routing Matrix',
          status: 'Routing Rules',
          description: 'Matches the request against team member schedules, skill competencies, and open capacity.',
        },
        {
          name: 'Warm Assignment & Summary',
          status: 'Ticket Dispatch',
          description: 'Ticket is assigned to the correct engineer with an AI summary of root cause and recommended resolution.',
        },
      ],
      impacts: [
        'Sub-minute intelligent triage for incoming priority requests',
        'Rapid routing for urgent operational issues',
        'Zero misrouted inquiries across departments',
      ],
      stack: ['AI Agents', 'Zendesk', 'Slack', 'Linear', 'PagerDuty'],
      ctaText: 'Discuss Intelligent Triage',
      ctaHref: '/contact',
    },
  ];

  const filteredCases = activeCategory === 'all'
    ? useCases
    : useCases.filter((uc) => uc.category === activeCategory);

  return (
    <div className="use-cases-page">
      <PageHeader
        eyebrow="PRACTICAL USE CASES"
        badgeText="Operational Applications"
        badgeType="purple"
        title="Where intelligent automation meets everyday business."
        description="Explore concrete examples of how scoped AI agents, voice receptionists, and workflow pipelines eliminate everyday bottlenecks across sales, support, and operations."
      >
        <Button variant="primary" size="md" arrow href="/contact">
          Discuss Your Project
        </Button>
        <Button variant="secondary" size="md" href="/capabilities">
          Explore Capabilities
        </Button>
      </PageHeader>

      <section className="use-cases-content-section">
        <div className="use-cases-container">
          {/* Functional Category Filter Strip */}
          <div className="use-cases-filter-strip reveal-on-scroll" role="tablist" aria-label="Use Case Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`use-case-filter-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Editorial Alternating Layout with Background Rhythm */}
          <div className="use-cases-alternating-list">
            {filteredCases.map((uc, index) => {
              const isEven = index % 2 === 0;
              const bgClass = isEven ? 'uc-bg-ivory' : 'uc-bg-lavender';

              return (
                <article
                  key={uc.id}
                  id={uc.id}
                  className={`use-case-section-item ${bgClass} ${isEven ? 'layout-normal' : 'layout-reversed'} reveal-on-scroll`}
                >
                  <div className="uc-item-inner">
                    {/* Column 1: Narrative Block */}
                    <div className="uc-narrative-column">
                      <div className="uc-header-meta">
                        <span className="uc-num-tag">USE CASE {uc.num}</span>
                        <span className="uc-dot-sep">•</span>
                        <span className="uc-cat-tag">{uc.categoryLabel}</span>
                      </div>

                      <h2 className="uc-main-title">{uc.title}</h2>
                      <p className="uc-main-subtitle">{uc.subtitle}</p>

                      {/* Problem & Solution */}
                      <div className="uc-problem-solution-stack">
                        <div className="uc-narrative-block uc-block--problem">
                          <span className="uc-block-eyebrow uc-eyebrow--danger">The Painful Reality</span>
                          <p className="uc-block-text">{uc.problem}</p>
                        </div>

                        <div className="uc-narrative-block uc-block--solution">
                          <span className="uc-block-eyebrow uc-eyebrow--solution">How Hutomate Solves It</span>
                          <p className="uc-block-text">{uc.solution}</p>
                        </div>
                      </div>

                      {/* Quantified Business Impact (Pale Green) */}
                      <div className="uc-impact-summary-card">
                        <div className="uc-impact-title-row">
                          <TrendingUp size={15} color="#059669" />
                          <span>Quantified Business Outcomes</span>
                        </div>
                        <ul className="uc-impact-list">
                          {uc.impacts.map((imp, impIdx) => (
                            <li key={impIdx} className="uc-impact-item">
                              <CheckCircle2 size={14} color="#10B981" />
                              <span>{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stack Pills & CTA */}
                      <div className="uc-action-bar">
                        <div className="uc-tech-stack-pills">
                          {uc.stack.map((stk, stIdx) => (
                            <span key={stIdx} className="uc-tech-pill">{stk}</span>
                          ))}
                        </div>

                        <Link to={uc.ctaHref} className="uc-primary-link-btn">
                          <span>{uc.ctaText}</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>

                    {/* Column 2: Code-based Functional Workflow Visualization */}
                    <div className="uc-visual-column">
                      <InteractiveUseCaseWorkflow stages={uc.stages} defaultActiveIdx={0} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Don’t see your exact operational challenge?"
        description="Every organization operates with specialized constraints. We assess your exact manual bottlenecks during our initial scoping consultation."
        buttonText="Discuss Your Process"
        buttonHref="/contact"
        secondaryButtonText="Explore How We Work"
        secondaryButtonHref="/process"
      />
    </div>
  );
}
