import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  Workflow,
  Mic,
  Cpu,
  Building,
  ChevronRight
} from 'lucide-react';
import { useRouter } from '../router/RouterContext';
import { Link } from '../router/Router';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import { INDUSTRIES_DATA } from '../data/industriesData';
import './IndustryDetailPage.css';

export default function IndustryDetailPage({ industryId }) {
  const { currentPath } = useRouter();

  // Extract slug from URL if not passed explicitly as prop
  const slug = industryId || currentPath.replace(/^\/industries\//, '').replace(/\/$/, '');
  const industry = INDUSTRIES_DATA.find((item) => item.id === slug) || INDUSTRIES_DATA[0];

  const [activeStepIdx, setActiveStepIdx] = useState(0);

  usePageMetadata({
    title: `${industry.name} AI & Automation Solutions | Hutomate`,
    description: industry.heroSubhead || industry.solution,
    path: `/industries/${industry.id}`,
  });

  useScrollReveal();

  const IconComp = industry.icon || Building;

  const getCapabilityIcon = (capName) => {
    switch (capName) {
      case 'Voice AI':
        return Mic;
      case 'Workflow Automation':
        return Workflow;
      case 'AI Agents':
        return Bot;
      case 'Custom AI Solutions':
        return Cpu;
      default:
        return Zap;
    }
  };

  const getCapabilityRoute = (capName) => {
    switch (capName) {
      case 'Voice AI':
        return '/capabilities/voice-ai';
      case 'Workflow Automation':
        return '/capabilities/workflow-automation';
      case 'AI Agents':
        return '/capabilities/ai-agents';
      case 'Custom AI Solutions':
        return '/capabilities/custom-ai-solutions';
      default:
        return '/capabilities';
    }
  };

  return (
    <div className="industry-detail-page">
      {/* ----------------------------------------------------------------------
          Section 1 — Industry-Specific Hero with Professional Photography
          ---------------------------------------------------------------------- */}
      <section className="ind-hero-section">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="ind-breadcrumb" aria-label="Breadcrumb">
            <Link to="/industries" className="ind-breadcrumb-link">Industries</Link>
            <ChevronRight size={14} className="ind-breadcrumb-sep" />
            <span className="ind-breadcrumb-current">{industry.name}</span>
          </nav>

          <div className="ind-hero-grid">
            <div className="ind-hero-content reveal-on-scroll">
              <div className="ind-hero-badge">
                <IconComp size={16} className="ind-badge-icon" />
                <span>{industry.categoryLabel} · {industry.name}</span>
              </div>

              <h1 className="ind-hero-title">{industry.heroHeadline}</h1>
              <p className="ind-hero-subhead">{industry.heroSubhead}</p>

              <div className="ind-hero-actions">
                <Button
                  variant="primary"
                  size="md"
                  arrow
                  href={`/start-project?industry=${industry.id}`}
                >
                  Discuss Your Firm's Automation
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href="/capabilities"
                >
                  Explore Capabilities
                </Button>
              </div>

              {/* Verified Metrics Row */}
              <div className="ind-hero-metrics">
                {industry.heroMetrics?.map((m, idx) => (
                  <div key={idx} className="ind-metric-card">
                    <span className="ind-metric-val">{m.value}</span>
                    <span className="ind-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Resolution Industry Photography */}
            <div className="ind-hero-media reveal-on-scroll">
              <div className="ind-hero-img-wrap">
                <img
                  src={industry.image}
                  alt={`${industry.name} modern professional setting`}
                  className="ind-hero-img"
                  loading="eager"
                />
                <div className="ind-hero-img-overlay" />
                <div className="ind-hero-floating-pill">
                  <span className="ind-pulse-dot" />
                  <span>Production-Grade Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          Section 2 — Industry Operational Challenges
          ---------------------------------------------------------------------- */}
      <section className="section ind-section bg-secondary-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Sector Friction</span>
            <h2 className="section-heading">Operational challenges in {industry.name}</h2>
            <p className="section-body section-body-center">
              Specialized sectors face unique compliance requirements, client response pressures, and manual data transcription drag.
            </p>
          </div>

          <div className="ind-challenges-grid">
            {industry.challenges?.map((ch, idx) => (
              <div key={idx} className="ind-challenge-card">
                <div className="ind-ch-num">0{idx + 1}</div>
                <div className="ind-ch-body">
                  <h3 className="ind-ch-title">Operational Bottleneck</h3>
                  <p className="ind-ch-desc">{ch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          Section 3 — How Hutomate Helps
          ---------------------------------------------------------------------- */}
      <section className="section ind-section">
        <div className="container">
          <div className="ind-solution-spotlight">
            <div className="ind-solution-badge">
              <Sparkles size={16} />
              <span>Tailored Implementation Architecture</span>
            </div>
            <h2 className="ind-solution-title">How Hutomate transforms {industry.name}</h2>
            <p className="ind-solution-p">{industry.solution}</p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          Section 4 — Solutions We Can Implement
          ---------------------------------------------------------------------- */}
      <section className="section ind-section bg-secondary-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Engineered Deliverables</span>
            <h2 className="section-heading">What we build for {industry.name}</h2>
            <p className="section-body section-body-center">
              Targeted automation modules designed to integrate directly with your existing industry software.
            </p>
          </div>

          <div className="ind-solutions-grid">
            {industry.detailedSolutions?.map((sol, idx) => {
              const CapIcon = getCapabilityIcon(sol.capability);
              return (
                <div key={idx} className="ind-sol-card">
                  <div className="ind-sol-top">
                    <span className="ind-sol-cap-badge">
                      <CapIcon size={14} />
                      {sol.capability}
                    </span>
                  </div>
                  <h3 className="ind-sol-title">{sol.title}</h3>
                  <p className="ind-sol-desc">{sol.desc}</p>
                  <Link
                    to={getCapabilityRoute(sol.capability)}
                    className="ind-sol-link"
                  >
                    View capability specs <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          Section 5 — Visual Sequential Workflow Pipeline
          ---------------------------------------------------------------------- */}
      <section className="section ind-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label section-label-green">Workflow Pipeline</span>
            <h2 className="section-heading">How the automated process flows</h2>
            <p className="section-body section-body-center">
              Click through the execution stages to inspect how inbound events are received, processed, and logged into your systems.
            </p>
          </div>

          <div className="ind-workflow-pipeline-box">
            {/* Interactive Stage Selectors */}
            <div className="ind-pipeline-nav" role="tablist">
              {industry.workflowSteps?.map((st, i) => (
                <button
                  key={st.step}
                  type="button"
                  role="tab"
                  aria-selected={activeStepIdx === i}
                  className={`ind-pipeline-tab ${activeStepIdx === i ? 'is-active' : ''}`}
                  onClick={() => setActiveStepIdx(i)}
                >
                  <span className="ind-pipe-step-num">{st.step}</span>
                  <span className="ind-pipe-step-title">{st.title}</span>
                </button>
              ))}
            </div>

            {/* Active Stage Details */}
            {industry.workflowSteps && industry.workflowSteps[activeStepIdx] && (
              <div className="ind-pipeline-stage-view">
                <div className="ind-stage-header">
                  <span className="ind-stage-badge">Stage {industry.workflowSteps[activeStepIdx].step} / 0{industry.workflowSteps.length}</span>
                  <span className="ind-stage-status">
                    <span className="ind-stage-live-dot" />
                    Autonomous Trigger Active
                  </span>
                </div>
                <h3 className="ind-stage-title">{industry.workflowSteps[activeStepIdx].title}</h3>
                <p className="ind-stage-desc">{industry.workflowSteps[activeStepIdx].desc}</p>

                <div className="ind-stage-controls">
                  <button
                    type="button"
                    className="ind-stage-btn"
                    disabled={activeStepIdx === 0}
                    onClick={() => setActiveStepIdx((prev) => Math.max(0, prev - 1))}
                  >
                    Previous Step
                  </button>
                  <button
                    type="button"
                    className="ind-stage-btn ind-stage-btn--next"
                    disabled={activeStepIdx === industry.workflowSteps.length - 1}
                    onClick={() => setActiveStepIdx((prev) => Math.min(industry.workflowSteps.length - 1, prev + 1))}
                  >
                    Next Stage <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          Section 6 & 7 — Relevant Integrations & Expected Business Outcomes
          ---------------------------------------------------------------------- */}
      <section className="section ind-section bg-secondary-section">
        <div className="container">
          <div className="ind-two-col-grid">
            {/* Integrations */}
            <div className="ind-integrations-panel">
              <span className="section-label">Supported Software</span>
              <h3 className="ind-sub-heading">Compatible Tech Stack</h3>
              <p className="ind-sub-desc">
                We integrate directly with the platforms already running inside your business.
              </p>
              <div className="ind-stack-tags">
                {industry.stack?.map((tool, idx) => (
                  <span key={idx} className="ind-stack-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Expected Business Outcomes */}
            <div className="ind-outcomes-panel">
              <span className="section-label section-label-green">Verified Impact</span>
              <h3 className="ind-sub-heading">Expected Business Outcomes</h3>
              <p className="ind-sub-desc">
                Defensible return on investment based on production enterprise deployments.
              </p>
              <div className="ind-impact-box">
                <p className="ind-impact-text">{industry.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          Section 8 — Related Capabilities
          ---------------------------------------------------------------------- */}
      <section className="section ind-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Core Capabilities</span>
            <h2 className="section-heading">Core intelligent systems powering {industry.name}</h2>
            <p className="section-body section-body-center">
              Explore the technical implementation domains behind our industry solutions.
            </p>
          </div>

          <div className="ind-caps-links-grid">
            <Link to="/capabilities/voice-ai" className="ind-cap-link-card">
              <div className="ind-cap-icon-box">
                <Mic size={22} />
              </div>
              <h3 className="ind-cap-title">Voice AI &amp; Telephony</h3>
              <p className="ind-cap-desc">24/7 conversational receptionists, appointment scheduling, and caller qualification.</p>
              <span className="ind-cap-cta">Inspect Voice AI <ArrowRight size={14} /></span>
            </Link>

            <Link to="/capabilities/workflow-automation" className="ind-cap-link-card">
              <div className="ind-cap-icon-box">
                <Workflow size={22} />
              </div>
              <h3 className="ind-cap-title">Workflow Automation</h3>
              <p className="ind-cap-desc">Event-driven pipelines that sync data across CRMs, ERPs, and document stores.</p>
              <span className="ind-cap-cta">Inspect Workflows <ArrowRight size={14} /></span>
            </Link>

            <Link to="/capabilities/ai-agents" className="ind-cap-link-card">
              <div className="ind-cap-icon-box">
                <Bot size={22} />
              </div>
              <h3 className="ind-cap-title">Autonomous AI Agents</h3>
              <p className="ind-cap-desc">Scoped reasoning agents that retrieve grounded facts and execute tasks with guardrails.</p>
              <span className="ind-cap-cta">Inspect Agents <ArrowRight size={14} /></span>
            </Link>

            <Link to="/capabilities/custom-ai-solutions" className="ind-cap-link-card">
              <div className="ind-cap-icon-box">
                <Cpu size={22} />
              </div>
              <h3 className="ind-cap-title">Custom AI Solutions</h3>
              <p className="ind-cap-desc">Proprietary VPC deployments, specialized OCR extraction, and tuned models.</p>
              <span className="ind-cap-cta">Inspect Custom AI <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          Section 9 — Final Industry-Specific CTA
          ---------------------------------------------------------------------- */}
      <CtaBanner
        title={`Ready to automate your ${industry.name} operations?`}
        description={`Discuss your current software stack and operational friction with our engineering team. We'll map out a dedicated implementation architecture for your firm.`}
        buttonText={`Discuss ${industry.name} Automation`}
        buttonHref={`/start-project?industry=${industry.id}`}
        secondaryButtonText="Explore All Industries"
        secondaryButtonHref="/industries"
      />
    </div>
  );
}
