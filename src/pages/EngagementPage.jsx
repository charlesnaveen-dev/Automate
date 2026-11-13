import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './EngagementPage.css';

export default function EngagementPage() {
  usePageMetadata({
    title: 'Engagement Models & Pricing Transparency | Hutomate',
    description: 'Transparent engagement structures built around real project outcomes. How we partner with clients, what each model includes, and cost drivers.',
    path: '/engagement',
  });

  useScrollReveal();

  const models = [
    {
      tag: 'Model 01',
      structure: 'Fixed Scope & Price',
      title: 'Process Audit & Feasibility Assessment',
      desc: 'An intensive discovery sprint to evaluate your operational workflows, score automation viability, and deliver an actionable technical blueprint before writing code.',
      inclusions: [
        'Detailed mapping of high-friction manual operational tasks',
        'API audit and technical compatibility scorecard for existing tools',
        'Data hygiene and context readiness review',
        'Prioritised implementation roadmap with high-confidence ROI estimates',
        'Formal technical architecture specification document',
      ],
      idealFor: 'Teams that recognise operational drag but want a rigorous technical evaluation before committing to build.',
    },
    {
      tag: 'Model 02',
      structure: 'Milestone-Based Fixed Delivery',
      title: 'Scoped Implementation Project',
      desc: 'End-to-end design, construction, testing, and production deployment of a specific automation pipeline, AI agent, or custom workflow system.',
      inclusions: [
        'Full architecture design and custom API connector engineering',
        'Sandbox environment prototyping using sanitized real-world data',
        'Human-in-the-loop review interface configuration',
        'Parallel UAT run with operator training and SOP documentation',
        'Production cutover and 30-day post-launch warranty support',
      ],
      idealFor: 'Well-defined automations, AI agents, or system integrations with clear operational inputs and outputs.',
    },
    {
      tag: 'Model 03',
      structure: 'Monthly Engineering Capacity',
      title: 'Dedicated Automation Retainer',
      desc: 'Ongoing dedicated engineering allocation to continuously design, build, and optimize automation workflows across evolving operational needs.',
      inclusions: [
        'Guaranteed monthly engineering hours and technical priority',
        'Iterative prompt tuning, model upgrades, and new tool connectors',
        'Continuous performance optimization and latency reduction',
        'Bi-weekly roadmap planning and sprint demo sessions',
        'Direct Slack/Teams channel with our engineering team',
      ],
      idealFor: 'Growing businesses with an active, expanding backlog of automation and integration initiatives.',
    },
    {
      tag: 'Model 04',
      structure: 'Monthly SLA Guarantee',
      title: 'Monitored Maintenance & SLA Support',
      desc: 'Active system health management to ensure mission-critical automation pipelines maintain zero downtime and zero data degradation.',
      inclusions: [
        'Real-time uptime and error rate telemetry monitoring',
        'Continuous model drift observation and schema update fixes',
        'Third-party API deprecation monitoring and break-fix response',
        'Scheduled database indexing and vector store optimization',
        'Contractually guaranteed incident response times',
      ],
      idealFor: 'Deployed production systems supporting critical customer-facing or financial workflows.',
    },
  ];

  const costFactors = [
    {
      num: '01',
      title: 'Integration Complexity',
      desc: 'Modern REST APIs with clear webhooks require significantly less development time than legacy on-premise systems or bespoke SQL schemas.',
    },
    {
      num: '02',
      title: 'Data Hygiene & Structuring',
      desc: 'Workflows relying on clean, structured databases take less effort than pipelines requiring complex OCR parsing from messy multi-format PDFs.',
    },
    {
      num: '03',
      title: 'Inference Volume & Model Tier',
      desc: 'High-throughput pipelines requiring real-time sub-second voice synthesis or multi-million token processing have different unit economics than daily batch tasks.',
    },
    {
      num: '04',
      title: 'Human Review Interfaces',
      desc: 'Automations operating via standard Slack or email approval webhooks are simpler to deliver than custom multi-user internal web dashboards.',
    },
    {
      num: '05',
      title: 'Regulatory & Security Requirements',
      desc: 'Projects requiring strict HIPAA/GDPR isolation, private tenant infrastructure, or comprehensive SOC2 compliance documentation require specialized architecture.',
    },
    {
      num: '06',
      title: 'Deployment & Telemetry Scope',
      desc: 'Mission-critical systems requiring redundant fallbacks and real-time observability dashboards involve additional engineering rigor.',
    },
  ];

  return (
    <div className="engagement-page">
      <PageHeader
        eyebrow="ENGAGEMENT MODELS"
        badgeText="Fair &amp; Transparent"
        badgeType="teal"
        title="Transparent engagement structures built around real project outcomes."
        description="Because every AI automation project involves unique system architectures, data environments, and integration requirements, we provide scoped proposals after our initial discovery audit. Below is our transparent engagement framework."
      >
        <Button variant="primary" size="md" arrow href="/start-project">
          Request Scoped Proposal
        </Button>
        <Button variant="secondary" size="md" href="/process">
          Explore Delivery Process
        </Button>
      </PageHeader>

      <section className="section detail-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-label">Engagement Options</span>
            <h2 className="section-heading">How we partner with client teams</h2>
            <p className="section-body">
              Choose the delivery model that matches your operational maturity and technical scope.
            </p>
          </div>

          <div className="models-grid">
            {models.map((m, i) => (
              <div key={i} className={`model-card card reveal-on-scroll reveal-delay-${(i % 2) + 1}`}>
                <div className="model-header">
                  <span className="model-tag">{m.tag}</span>
                  <span className="model-structure">{m.structure}</span>
                </div>

                <h3 className="model-title">{m.title}</h3>
                <p className="model-desc">{m.desc}</p>

                <ul className="model-inclusions-list">
                  {m.inclusions.map((inc, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="model-ideal-for">
                  <strong>Ideal for:</strong> {m.idealFor}
                </div>
              </div>
            ))}
          </div>

          <div className="cost-factors-box reveal-on-scroll">
            <div className="cost-factors-header">
              <span className="section-label">Cost Drivers</span>
              <h3 className="cost-factors-title">What factors determine project investment?</h3>
              <p className="section-body">
                We believe in total transparency. Project scope and ongoing costs are driven by these concrete technical variables:
              </p>
            </div>

            <div className="factors-grid">
              {costFactors.map((f, i) => (
                <div key={i} className="factor-item">
                  <span className="factor-num">{f.num}</span>
                  <div className="factor-content">
                    <h4 className="factor-title">{f.title}</h4>
                    <p className="factor-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to discuss an engagement for your team?"
        description="Schedule a 30-minute discovery call to map out your operational requirements and receive a transparent feasibility summary."
        buttonText="Book Discovery Call"
        buttonHref="/start-project"
        secondaryButtonText="Read Client FAQs"
        secondaryButtonHref="/faq"
      />
    </div>
  );
}
