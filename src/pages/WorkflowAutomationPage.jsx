import React from 'react';
import { RefreshCw, GitFork, CheckSquare, Zap, AlertOctagon, Layers, ShieldCheck } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import WorkflowPipelineSimulator from '../components/WorkflowPipelineSimulator';
import './CapabilityDetailPage.css';

export default function WorkflowAutomationPage() {
  usePageMetadata({
    title: 'Workflow Automation — Connected Operations & System Pipelines',
    description: 'Connect existing business tools and eliminate manual operational bottlenecks with robust, event-driven workflow automation.',
    path: '/capabilities/workflow-automation',
  });

  useScrollReveal();

  const useCases = [
    {
      title: 'Cross-Platform Data Synchronisation',
      desc: 'Synchronise records seamlessly between CRMs, ERPs, accounting software, and billing engines without repetitive manual entry.',
      icon: RefreshCw,
    },
    {
      title: 'Automated Invoice & Document Routing',
      desc: 'Ingest incoming financial files, extract key line items, validate vendor IDs, and route directly into accounting ledgers for sign-off.',
      icon: Layers,
    },
    {
      title: 'Customer Onboarding Sequences',
      desc: 'Trigger multi-system setup sequences the instant a contract is signed—creating workspaces, provisioning accounts, and dispatching welcome briefs.',
      icon: GitFork,
    },
    {
      title: 'Multi-Department Approval Flows',
      desc: 'Coordinate reviews across Slack, Teams, or email with interactive approval buttons that automatically advance status across core systems.',
      icon: CheckSquare,
    },
    {
      title: 'Inventory & Order Alerting',
      desc: 'Monitor stock thresholds across e-commerce channels and notify procurement systems automatically before fulfillment bottlenecks occur.',
      icon: Zap,
    },
    {
      title: 'Incident & Exception Escalation',
      desc: 'Detect system timeouts, billing failures, or client discrepancies and instantly route alert payloads to on-call operational leads.',
      icon: AlertOctagon,
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'Event Trigger Capture', desc: 'A webhook, schedule, or API event triggers the workflow immediately upon an action occurring in an upstream tool.' },
    { step: '02', title: 'Data Normalisation & Validation', desc: 'Inbound payloads are scrubbed, schema-validated, and mapped into standardized business entities.' },
    { step: '03', title: 'Rule Evaluation & Branching', desc: 'Configurable logic evaluates conditional paths based on contract value, customer tier, or risk score.' },
    { step: '04', title: 'Target Execution via APIs', desc: 'Idempotent API calls commit state updates to downstream endpoints, ensuring zero duplicated records.' },
    { step: '05', title: 'Automated Retry & Fallback', desc: 'Transient third-party API outages trigger exponential backoff retries with graceful alert notifications.' },
    { step: '06', title: 'Audit Trail & Telemetry', desc: 'Every transaction payload and delivery status is recorded in centralized logs for full operational visibility.' },
  ];

  const architecturalPillars = [
    { title: 'Idempotent Operations', desc: 'Workflows are engineered with idempotency keys so that duplicated webhooks or network retries never generate double charges or duplicated records.' },
    { title: 'Deterministic Retry Strategies', desc: 'When downstream SaaS services experience temporary downtime, automated queuing buffers requests and applies exponential backoff.' },
    { title: 'Strict Field Validation', desc: 'Data passing between systems is validated against schema definitions to prevent corrupted records from propagating through your pipeline.' },
    { title: 'Unified Operational Telemetry', desc: 'Real-time alerting and error logs give internal teams rapid diagnosis if an API key expires or a destination schema changes.' },
  ];

  return (
    <div className="capability-detail-page">
      <PageHeader
        eyebrow="CAPABILITIES · WORKFLOW AUTOMATION"
        badgeText="Event-Driven Operations"
        badgeType="green"
        title="Less repetitive work. Better-connected operations."
        description="Automate repetitive multi-step processes across systems so your team spends less time copying data, chasing updates, and running manual operational routines. Hutomate connects modern and legacy tools into resilient, automated pipelines."
      >
        <Button variant="primary" size="md" arrow href="/contact">
          Discuss Your Project
        </Button>
        <Button variant="secondary" size="md" href="/capabilities">
          Explore Capabilities
        </Button>
      </PageHeader>

      {/* Interactive Visual Pipeline Section */}
      <section className="section detail-section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label section-label-green">Interactive Demonstration</span>
            <h2 className="section-heading">Inspect an automated lead-to-fulfillment pipeline</h2>
            <p className="section-body section-body-center">
              Click through the 5 connected stages below to observe data transformations, schema validation, and multi-system API dispatch in real time.
            </p>
          </div>

          <WorkflowPipelineSimulator />
        </div>
      </section>

      {/* Applications Section */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Integration Scenarios</span>
            <h2 className="section-heading">Everyday workflows ripe for automated execution</h2>
            <p className="section-body">
              Eliminate manual data handoffs between your operational tools. We architect resilient background pipelines that sync data with millisecond reliability.
            </p>
          </div>

          <div className="detail-cards-grid">
            {useCases.map((uc, i) => {
              const IconComp = uc.icon;
              return (
                <div key={i} className="detail-card card">
                  <div className="detail-card-icon-wrap" style={{ color: '#10B981' }}>
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
            <span className="section-label section-label-green">Technical Architecture</span>
            <h2 className="section-heading">How our automated pipelines execute</h2>
            <p className="section-body section-body-center">
              Built on battle-tested architectural principles that prioritize zero data loss, idempotent retries, and comprehensive auditability.
            </p>
          </div>

          <div className="timeline-steps-grid">
            {workflowSteps.map((st) => (
              <div key={st.step} className="timeline-step-card card">
                <span className="timeline-step-number" style={{ color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}>
                  {st.step}
                </span>
                <h3 className="timeline-step-title">{st.title}</h3>
                <p className="timeline-step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label-blue">Enterprise Resilience</span>
            <h2 className="section-heading">Engineering standards built into every pipeline</h2>
            <p className="section-body">
              Automations shouldn’t fail silently when an external API hiccups. We implement defensive patterns that guarantee operational stability.
            </p>
          </div>

          <div className="boundaries-grid">
            {architecturalPillars.map((b, i) => (
              <div key={i} className="boundary-card card">
                <ShieldCheck size={20} className="boundary-icon" />
                <h3 className="boundary-title">{b.title}</h3>
                <p className="boundary-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to automate repetitive system handoffs?"
        description="Let’s map out your tool stack and identify the manual copy-pasting tasks that can be permanently replaced by resilient automated pipelines."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
        secondaryButtonText="Explore Capabilities"
        secondaryButtonHref="/capabilities"
      />
    </div>
  );
}
