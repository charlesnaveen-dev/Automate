import React from 'react';
import { Shield, CheckCircle2, UserCheck, Database, Terminal, FileText, Filter } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import AiAgentSimulator from '../components/AiAgentSimulator';
import './CapabilityDetailPage.css';

export default function AiAgentsPage() {
  usePageMetadata({
    title: 'AI Agent Development — Scoped Business Automation',
    description: 'Custom AI agents designed to handle defined business tasks, retrieve verified company knowledge, and escalate decisions that require human judgment.',
    path: '/capabilities/ai-agents',
  });

  useScrollReveal();

  const useCases = [
    {
      title: 'Classifying & Routing Enquiries',
      desc: 'Interpret incoming customer requests across channels, detect intent, extract relevant entities, and dispatch to the correct department.',
      icon: Filter,
    },
    {
      title: 'Grounded Knowledge Retrieval',
      desc: 'Search approved company knowledge bases and documentation to answer repetitive technical or policy questions with verified citations.',
      icon: Database,
    },
    {
      title: 'Document Data Extraction',
      desc: 'Parse structured fields from PDFs, forms, and client uploads, converting raw text into clean database entries with validation rules.',
      icon: FileText,
    },
    {
      title: 'Lead Qualification Assistance',
      desc: 'Evaluate prospective client inquiries against pre-set operational criteria, score intent, and draft customized follow-up briefs for sales teams.',
      icon: UserCheck,
    },
    {
      title: 'Structured Summary Preparation',
      desc: 'Condense long meeting transcripts, email threads, or client case files into standardized summaries formatted for team review.',
      icon: Terminal,
    },
    {
      title: 'Triggering Approved System Actions',
      desc: 'Execute verified actions via connected SaaS APIs—such as creating calendar appointments, opening tickets, or updating CRM statuses.',
      icon: CheckCircle2,
    },
  ];

  const agentSteps = [
    { step: '01', title: 'Receive Request or Trigger', desc: 'An incoming customer email, webhook event, form submission, or scheduled job invokes the agent.' },
    { step: '02', title: 'Retrieve Authorised Context', desc: 'The agent queries permission-filtered vector stores, internal databases, or client history to establish ground truth.' },
    { step: '03', title: 'Interpret & Reason', desc: 'Using structured system prompts and deterministic schemas, the agent identifies intent and outlines the required action path.' },
    { step: '04', title: 'Perform Approved Task', desc: 'The agent executes the defined operation (drafting, field extraction, or calling a sandboxed tool).' },
    { step: '05', title: 'Validate Output Against Rules', desc: 'Outputs are cross-checked against business rules, data formatting requirements, and confidence thresholds.' },
    { step: '06', title: 'Escalate or Conclude', desc: 'High-confidence results are committed to the system; uncertain, sensitive, or edge-case decisions are routed to a staff member.' },
  ];

  const boundaries = [
    { title: 'Strict Permission Scoping', desc: 'Agents receive read/write permissions only for the specific tools and data fields required for their assigned task.' },
    { title: 'Deterministic Fallbacks', desc: 'If confidence falls below a configured threshold (e.g. 95%), the workflow halts execution and alerts team members.' },
    { title: 'Comprehensive Audit Logs', desc: 'Every prompt input, retrieved context snippet, reasoning trace, and executed action is logged for compliance review.' },
    { title: 'Isolated Staging Evaluation', desc: 'All agent prompts and tool calls are evaluated against synthetic edge-case test suites before production deployment.' },
  ];

  return (
    <div className="capability-detail-page">
      <PageHeader
        eyebrow="CAPABILITIES · AUTONOMOUS AGENTS"
        badgeText="Scoped Reasoning &amp; Execution"
        badgeType="purple"
        title="AI agents that move work forward."
        description="Autonomous AI agents designed to handle defined operational tasks, query company knowledge bases with verified citations, and execute multi-step tools within strictly enforced human-in-the-loop guardrails."
      >
        <Button variant="primary" size="md" arrow href="/contact">
          Discuss Your Project
        </Button>
        <Button variant="secondary" size="md" href="/use-cases">
          Explore Use Cases
        </Button>
      </PageHeader>

      {/* Interactive Execution Simulator Section */}
      <section className="section detail-section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Interactive Demonstration</span>
            <h2 className="section-heading">Inspect an AI agent execution loop in action</h2>
            <p className="section-body section-body-center">
              Watch how a bounded Hutomate agent receives an inbound task, retrieves contextual memory, applies deterministic business rules, calls authorized APIs, and records an auditable resolution.
            </p>
          </div>

          <AiAgentSimulator />
        </div>
      </section>

      {/* Applications Section */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Potential Applications</span>
            <h2 className="section-heading">Where AI agents can assist your team</h2>
            <p className="section-body">
              We focus on narrow, well-bounded applications where automated reasoning eliminates manual drag while keeping human judgment firmly in control.
            </p>
          </div>

          <div className="detail-cards-grid">
            {useCases.map((uc, i) => {
              const IconComp = uc.icon;
              return (
                <div key={i} className="detail-card card">
                  <div className="detail-card-icon-wrap">
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

      {/* 6-Step Workflow Lifecycle */}
      <section className="section detail-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label section-label-green">Lifecycle Architecture</span>
            <h2 className="section-heading">How a proposed agent workflow operates</h2>
            <p className="section-body section-body-center">
              Every agent we engineer follows a disciplined, predictable execution loop designed to minimize hallucination and prevent unapproved actions.
            </p>
          </div>

          <div className="timeline-steps-grid">
            {agentSteps.map((st) => (
              <div key={st.step} className="timeline-step-card card">
                <span className="timeline-step-number">{st.step}</span>
                <h3 className="timeline-step-title">{st.title}</h3>
                <p className="timeline-step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designed with Boundaries */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label-blue">Safety &amp; Reliability</span>
            <h2 className="section-heading">Designed with strict operational boundaries</h2>
            <p className="section-body">
              Autonomous does not mean unsupervised. We build guardrails directly into the software architecture to ensure your systems remain transparent, secure, and predictable.
            </p>
          </div>

          <div className="boundaries-grid">
            {boundaries.map((b, i) => (
              <div key={i} className="boundary-card card">
                <Shield size={20} className="boundary-icon" />
                <h3 className="boundary-title">{b.title}</h3>
                <p className="boundary-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Summary */}
      <section className="section detail-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Delivery Framework</span>
            <h2 className="section-heading">Our AI Agent implementation approach</h2>
            <p className="section-body section-body-center">
              From initial task assessment to monitored production cutover, here is how we build custom agents for client teams.
            </p>
          </div>

          <div className="process-mini-strip">
            <div className="mini-step">
              <span className="mini-step-num">01</span>
              <span className="mini-step-name">Task Discovery</span>
              <span className="mini-step-sub">Evaluate task boundaries &amp; feasibility</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">02</span>
              <span className="mini-step-name">Context &amp; Data Setup</span>
              <span className="mini-step-sub">Clean documentation &amp; vector embeddings</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">03</span>
              <span className="mini-step-name">Prompt &amp; Tool Engineering</span>
              <span className="mini-step-sub">Implement schemas, fallbacks &amp; API calls</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">04</span>
              <span className="mini-step-name">Staging Evaluation</span>
              <span className="mini-step-sub">Benchmark against historical edge cases</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">05</span>
              <span className="mini-step-name">Monitored Rollout</span>
              <span className="mini-step-sub">Deploy with live telemetry &amp; support</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to explore an AI agent for your business?"
        description="Let’s review the specific tasks your team spends time on and evaluate whether an autonomous agent is the right technical and commercial fit."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
        secondaryButtonText="Explore Use Cases"
        secondaryButtonHref="/use-cases"
      />
    </div>
  );
}
