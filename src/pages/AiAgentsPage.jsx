import React from 'react';
import {
  ShieldCheck,
  Lock,
  FileCode,
  CheckCircle2,
  ArrowRight,
  Database,
  Terminal,
  UserCheck,
  Zap,
  Bot
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import AgentArchitectureDiagram from '../components/diagrams/AgentArchitectureDiagram';
import { CAPABILITIES_DATA } from '../data/capabilitiesData';
import { Link } from '../router/Router';
import './AiAgentsPage.css';

export default function AiAgentsPage() {
  const capData = CAPABILITIES_DATA.find((c) => c.id === 'ai-agents') || CAPABILITIES_DATA[0];

  usePageMetadata({
    title: 'Autonomous AI Agents — Enterprise Intelligence | Hutomate',
    description: 'Deploy multi-step autonomous AI agents that reason, plan, and execute across your enterprise software stack with human oversight.',
    path: '/capabilities/ai-agents',
  });

  useScrollReveal();

  const safetyGuarantees = [
    {
      title: 'Isolated Execution Sandboxes',
      desc: 'Agents never execute unstructured shell commands or mutate databases without prior schema whitelisting and scoped authentication tokens.',
      icon: Lock,
    },
    {
      title: 'Deterministic Confidence Gates',
      desc: 'Whenever intent uncertainty exceeds our calibrated threshold (>95%), execution halts instantly and routes the case to human operators.',
      icon: ShieldCheck,
    },
    {
      title: 'Immutable Audit Telemetry',
      desc: 'Every prompt token, grounding citation, API payload, and mutation record is logged permanently for compliance and security audit.',
      icon: FileCode,
    },
  ];

  return (
    <div className="ai-agents-page">
      {/* 1. Dedicated Executive Hero */}
      <section className="cap-page-hero" aria-label="AI Agents Overview">
        <div className="container">
          <div className="cap-hero-inner reveal-on-scroll">
            <div className="cap-hero-eyebrow-row">
              <span className="cap-hero-tag">AUTONOMOUS INTELLIGENCE // 01</span>
              <div className="cap-hero-badge">
                <span className="cap-hero-dot" />
                <span>Deterministic Execution &amp; Reasoning</span>
              </div>
            </div>

            <h1 className="cap-page-hero-title">
              AI agents that understand context, make decisions, and execute business tasks.
            </h1>

            <p className="cap-page-hero-desc">
              We engineer autonomous software agents that interpret natural language, retrieve verified company knowledge, and execute multi-step workflows across your business tools—with strict human-in-the-loop oversight.
            </p>

            <div className="cap-hero-actions">
              <Button variant="cinematic-primary" size="lg" arrow href="/contact">
                Discuss Your Agent Architecture
              </Button>
              <Button variant="cinematic-secondary" size="lg" href="/industries">
                Explore Industry Implementations
              </Button>
            </div>

            {/* Performance Indicators */}
            <div className="cap-hero-metrics-strip">
              {capData.heroMetrics?.map((m, idx) => (
                <div key={idx} className="cap-metric-item">
                  <span className="cap-metric-val">{m.value}</span>
                  <span className="cap-metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Architecture Section (Context -> Reasoning -> Action) */}
      <section className="agent-arch-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker">SYSTEM ARCHITECTURE</span>
            <h2 className="section-main-heading">
              Context → Reasoning → Sandboxed Execution
            </h2>
            <p className="section-main-body">
              Unlike unpredictable conversational chatbots, our agents operate inside a rigorous three-stage pipeline. Grounded knowledge retrieval feeds a calibrated reasoning core that only executes authorized mutations.
            </p>
          </div>

          <div className="reveal-on-scroll">
            <AgentArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* 3. The Operational Problem (Asymmetric Two-Column Editorial) */}
      <section className="agent-problem-section">
        <div className="container">
          <div className="problem-editorial-grid">
            <div className="problem-editorial-left reveal-on-scroll">
              <span className="section-kicker">THE OPERATIONAL CEILING</span>
              <h2 className="section-main-heading">
                Knowledge teams spend 40% of their workday acting as human routers.
              </h2>
              <p className="section-main-body">
                Without structured agency and guardrails, operators waste hours copying text between client inboxes, checking internal PDF manuals, and manually keying records into CRMs.
              </p>
            </div>

            <div className="problem-editorial-right reveal-on-scroll">
              {capData.businessProblem?.challenges?.map((ch, idx) => (
                <div key={idx} className="problem-editorial-card">
                  <div className="problem-card-header">
                    <span className="problem-card-num">0{idx + 1}</span>
                    <h3 className="problem-card-title">{ch.title}</h3>
                  </div>
                  <p className="problem-card-desc">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Execution Lifecycle Ruled List */}
      <section className="agent-lifecycle-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker">THE REASONING CYCLE</span>
            <h2 className="section-main-heading">
              Disciplined 6-point agent operational lifecycle
            </h2>
            <p className="section-main-body">
              How our autonomous agents process requests from inbound event capture to verified task completion.
            </p>
          </div>

          <div className="lifecycle-stages-list reveal-on-scroll">
            {capData.howItWorks?.steps?.map((step) => (
              <div key={step.step} className="lifecycle-stage-row">
                <span className="stage-num-cell">{step.step}</span>
                <div className="stage-main-cell">
                  <h3 className="stage-title">{step.title}</h3>
                  <p className="stage-desc">{step.desc}</p>
                </div>
                <div className="stage-tag-cell">
                  <span className="stage-tag-pill">Verified Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Enterprise Safety & Governance */}
      <section className="agent-safety-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker" style={{ color: 'var(--color-accent-cyan, #83DDE2)' }}>
              SAFETY &amp; GOVERNANCE
            </span>
            <h2 className="section-main-heading" style={{ color: '#FFFFFF' }}>
              Built for enterprise risk tolerances
            </h2>
            <p className="section-main-body" style={{ color: 'var(--color-mist-grey, #E2EAEC)' }}>
              Autonomy without deterministic guardrails is unacceptable for enterprise business operations.
            </p>
          </div>

          <div className="safety-grid reveal-on-scroll">
            {safetyGuarantees.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="safety-card">
                  <IconComp size={24} className="safety-icon" />
                  <h3 className="safety-title">{item.title}</h3>
                  <p className="safety-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Closing Call to Action */}
      <CtaBanner
        title="Ready to evaluate agent opportunities for your business?"
        description="Share your current operational workflows with our engineering team. We assess technical feasibility, software stack compatibility, and projected ROI."
        buttonText="Discuss Your Agent Architecture"
        buttonHref="/contact"
        secondaryButtonText="Explore Workflow Automation"
        secondaryButtonHref="/capabilities/workflow-automation"
      />
    </div>
  );
}
