import React from 'react';
import { Bot, Mic, Workflow, Cpu, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import { Link } from '../router/Router';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CtaBanner from '../components/CtaBanner';
import InteractiveCapabilitiesShowcase from '../components/InteractiveCapabilitiesShowcase';
import './CapabilitiesPage.css';

export default function CapabilitiesPage() {
  usePageMetadata({
    title: 'Our Capabilities — AI Agents, Workflows & Custom Systems',
    description: 'Explore Hutomate’s implementation capabilities: AI agents, workflow automation, voice AI systems, and custom AI solutions engineered around your business operations.',
    path: '/capabilities',
  });

  useScrollReveal();

  const deepDives = [
    {
      id: 'ai-agents',
      title: 'AI Agents',
      route: '/capabilities/ai-agents',
      icon: Bot,
      eyebrow: 'Autonomous Task Execution',
      summary: 'Software agents capable of interpreting natural language, retrieving verified internal knowledge, and executing multi-step workflows with human-in-the-loop escalation.',
      badge: 'Reasoning & Actions',
      highlight: 'RAG • Tool Orchestration • Guardrails',
    },
    {
      id: 'voice-ai',
      title: 'AI Receptionists',
      route: '/capabilities/voice-ai',
      icon: Mic,
      eyebrow: 'Conversational Voice AI',
      summary: 'Sub-second conversational voice workflows that answer incoming phone calls, qualify caller intent, and book appointments directly into your calendar 24/7/365.',
      badge: 'Sub-300ms Telephony',
      highlight: '24/7 Inbound • Calendar Negotiation • CRM Sync',
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      route: '/capabilities/workflow-automation',
      icon: Workflow,
      eyebrow: 'System Pipelines',
      summary: 'Connected, event-driven pipelines that synchronize data across compatible SaaS tools, forms, and databases with zero manual copy-pasting or duplicate entry.',
      badge: 'Multi-Tool Pipelines',
      highlight: 'Event Webhooks • Automatic Retries • Deduplication',
    },
    {
      id: 'custom-ai',
      title: 'Integrations & Custom Systems',
      route: '/capabilities/custom-ai',
      icon: Cpu,
      eyebrow: 'Bespoke Architecture',
      summary: 'Domain-tuned models, private VPC inferences, and custom integration adapters engineered when off-the-shelf tools cannot satisfy complex security requirements.',
      badge: 'Proprietary Architecture',
      highlight: '100+ Connectors • Private VPC • Custom APIs',
    },
  ];

  const selectionCriteria = [
    {
      title: 'Task Characteristics',
      desc: 'Does the workflow require strict deterministic rules (best for workflow automation) or conversational reasoning and unstructured text interpretation (best for AI agents)?',
      icon: Layers,
    },
    {
      title: 'System Compatibility',
      desc: 'Do your current tools provide documented REST APIs, webhooks, or database access? We evaluate technical feasibility before committing to a build.',
      icon: Zap,
    },
    {
      title: 'Failure Tolerance & Oversight',
      desc: 'What is the consequence of an edge-case error? We design explicit human approval checkpoints wherever critical financial or client data is involved.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="capabilities-page">
      {/* Main Interactive Capabilities Showcase (Exact reference layout: header + cards + details) */}
      <section className="cap-interactive-section">
        <div className="container">
          <InteractiveCapabilitiesShowcase
            defaultActiveId="ai-agents"
            showHeader={true}
            eyebrow="CAPABILITIES"
            heading="Intelligent capabilities. Practical outcomes."
            supportText="From autonomous AI agents to connected workflows and custom intelligent systems, we build technology around the way businesses operate."
          />
        </div>
      </section>

      {/* Deep Dive Explorer Cards */}
      <section className="cap-deepdives-section">
        <div className="container">
          <div className="cap-section-header reveal-on-scroll">
            <span className="cap-section-eyebrow reveal-on-scroll reveal-delay-1">TECHNICAL SPECIFICATIONS</span>
            <h2 className="cap-section-title reveal-on-scroll reveal-delay-2">Explore individual capability architectures</h2>
            <p className="cap-section-desc reveal-on-scroll reveal-delay-3">
              Inspect in-depth data flows, security boundaries, and sample integration blueprints for each implementation domain.
            </p>
          </div>

          <div className="cap-deepdives-grid">
            {deepDives.map((dd, index) => {
              const IconComp = dd.icon;
              return (
                <Link
                  key={dd.id}
                  to={dd.route}
                  className={`cap-deepdive-card reveal-on-scroll reveal-delay-${(index % 4) + 1}`}
                >
                  <div className="cap-dd-top">
                    <div className="cap-dd-icon">
                      <IconComp size={22} strokeWidth={2.2} />
                    </div>
                    <span className="cap-dd-badge">{dd.badge}</span>
                  </div>

                  <span className="cap-dd-eyebrow">{dd.eyebrow}</span>
                  <h3 className="cap-dd-title">{dd.title}</h3>
                  <p className="cap-dd-summary">{dd.summary}</p>

                  <div className="cap-dd-footer">
                    <span className="cap-dd-highlight">{dd.highlight}</span>
                    <span className="cap-dd-link">
                      Detailed Breakdown <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selection Framework Section */}
      <section className="cap-criteria-section">
        <div className="container">
          <div className="cap-criteria-card reveal-on-scroll">
            <div className="criteria-header reveal-on-scroll">
              <span className="cap-section-eyebrow reveal-on-scroll reveal-delay-1">SELECTION METHODOLOGY</span>
              <h2 className="criteria-title reveal-on-scroll reveal-delay-2">How we select the right automation approach for your operations</h2>
              <p className="criteria-body reveal-on-scroll reveal-delay-3">
                We do not apply AI blindly. Every engagement begins with assessing whether an operational problem is best solved by deterministic automation, conversational telephony, an autonomous agent, or an integration pipeline.
              </p>
            </div>

            <div className="criteria-grid">
              {selectionCriteria.map((crit, idx) => {
                const IconComp = crit.icon;
                return (
                  <div key={idx} className={`criteria-item reveal-on-scroll reveal-delay-${idx + 1}`}>
                    <div className="criteria-icon-wrap">
                      <IconComp size={20} />
                    </div>
                    <h3 className="criteria-item-title">{crit.title}</h3>
                    <p className="criteria-item-desc">{crit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to evaluate your team's automation opportunities?"
        description="Share your current operational workflows with our engineering team. We assess technical feasibility, software compatibility, and projected ROI."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
        secondaryButtonText="Explore Use Cases"
        secondaryButtonHref="/use-cases"
      />
    </div>
  );
}
