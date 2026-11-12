import React from 'react';
import {
  Cpu,
  Database,
  Lock,
  ShieldCheck,
  Server,
  FileText,
  Key,
  Terminal,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import CustomSystemArchitectureDiagram from '../components/diagrams/CustomSystemArchitectureDiagram';
import { CAPABILITIES_DATA } from '../data/capabilitiesData';
import './CustomAiPage.css';

export default function CustomAiPage() {
  const capData = CAPABILITIES_DATA.find((c) => c.id === 'custom-ai-solutions' || c.id === 'custom-ai') || CAPABILITIES_DATA[3];

  usePageMetadata({
    title: 'Custom AI Solutions — Enterprise AI Systems | Hutomate',
    description: 'Bespoke AI architectures, private VPC model deployments, custom document intelligence pipelines, and proprietary enterprise software copilots.',
    path: '/capabilities/custom-ai-solutions',
  });

  useScrollReveal();

  const customSolutions = [
    {
      title: 'Proprietary Internal Copilots',
      desc: 'Bespoke web applications and workflow tools tailored to your frontline operators, combining proprietary data schemas with real-time model reasoning.',
      icon: Terminal,
    },
    {
      title: 'Unstructured Document Intelligence',
      desc: 'End-to-end extraction pipelines for complex multi-page contracts, technical blueprints, and invoices with automatic normalization directly into your ERP.',
      icon: FileText,
    },
    {
      title: 'Private Enterprise Vector Engines',
      desc: 'High-security hybrid search engines combining sparse and dense embeddings over confidential company repositories with granular role-based access control.',
      icon: Database,
    },
  ];

  const securityPillars = [
    {
      title: 'Zero Data Retention',
      desc: 'All API integrations enforce strict zero-data-retention agreements. Your confidential client data is never used to train public models.',
    },
    {
      title: 'Private VPC Isolation',
      desc: 'Deploy custom models in your own dedicated AWS, GCP, or Azure Virtual Private Cloud, retaining complete network perimeter control.',
    },
    {
      title: '100% Client Ownership',
      desc: 'You own all custom schemas, prompts, adapter weights, and pipeline code. Zero restrictive vendor lock-in or proprietary traps.',
    },
    {
      title: 'SOC-2 Aligned Protocols',
      desc: 'Role-based access control, cryptographic key storage, immutable audit logging, and regular vulnerability scanning baked in.',
    },
  ];

  return (
    <div className="custom-ai-page">
      {/* 1. Custom Hero */}
      <section className="custom-hero-section" aria-label="Custom AI Overview">
        <div className="container">
          <div className="custom-hero-content reveal-on-scroll">
            <div className="custom-eyebrow-row">
              <span className="custom-tag">PURPOSE-BUILT INTELLIGENCE // 04</span>
              <div className="custom-badge">
                <span className="custom-badge-dot" />
                <span>Private VPC &amp; Data Sovereign Architecture</span>
              </div>
            </div>

            <h1 className="custom-hero-title">
              Custom AI systems engineered around your exact operations.
            </h1>

            <p className="custom-hero-desc">
              When off-the-shelf software falls short, we engineer bespoke AI systems, custom document extraction pipelines, and private copilots deployed inside your security perimeter.
            </p>

            <div className="custom-hero-actions">
              <Button variant="cinematic-primary" size="lg" arrow href="/contact">
                Discuss Your Custom Architecture
              </Button>
              <Button variant="cinematic-secondary" size="lg" href="/capabilities">
                Explore All Capabilities
              </Button>
            </div>

            {/* Performance Indicators */}
            <div className="custom-metrics-strip">
              {capData.heroMetrics?.map((m, idx) => (
                <div key={idx} className="custom-metric-item">
                  <span className="custom-metric-val">{m.value}</span>
                  <span className="custom-metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Custom Architecture Diagram (Data -> Systems -> Outputs) */}
      <section className="custom-arch-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker">ENTERPRISE SYSTEM MAP</span>
            <h2 className="section-main-heading">
              Data Assets → Private VPC Boundary → Intelligent Endpoints
            </h2>
            <p className="section-main-body">
              How enterprise databases and unstructured assets interface with specialized models inside isolated VPC security boundaries.
            </p>
          </div>

          <div className="reveal-on-scroll">
            <CustomSystemArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* 3. Bespoke Solutions Grid */}
      <section className="custom-solutions-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker">SPECIALIZED SOLUTIONS</span>
            <h2 className="section-main-heading">
              Engineered for problems generic SaaS cannot solve
            </h2>
            <p className="section-main-body">
              Every enterprise has distinct data schemas, compliance restrictions, and specialized team workflows. We build systems to fit your business, not the other way around.
            </p>
          </div>

          <div className="custom-solutions-grid reveal-on-scroll">
            {customSolutions.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <div key={idx} className="custom-solution-card">
                  <div className="solution-icon-box">
                    <IconComp size={22} />
                  </div>
                  <h3 className="solution-title">{sol.title}</h3>
                  <p className="solution-desc">{sol.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Data Sovereignty & Enterprise Security Matrix */}
      <section className="custom-security-section">
        <div className="container">
          <div className="section-editorial-intro reveal-on-scroll">
            <span className="section-kicker" style={{ color: 'var(--color-accent-cyan, #83DDE2)' }}>
              DATA SOVEREIGNTY
            </span>
            <h2 className="section-main-heading" style={{ color: '#FFFFFF' }}>
              Your data remains completely yours. Always.
            </h2>
            <p className="section-main-body" style={{ color: 'var(--color-mist-grey, #E2EAEC)' }}>
              We enforce strict cryptographic isolation and contractual zero-retention policies across every layer of the software stack.
            </p>
          </div>

          <div className="custom-security-grid reveal-on-scroll">
            {securityPillars.map((sec, idx) => (
              <div key={idx} className="custom-sec-card">
                <h3 className="sec-card-title">{sec.title}</h3>
                <p className="sec-card-desc">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing Call to Action */}
      <CtaBanner
        title="Ready to engineer a custom intelligent system?"
        description="Schedule a technical consultation with our engineering team to review your data schemas, security requirements, and development roadmap."
        buttonText="Discuss Custom Engineering"
        buttonHref="/contact"
        secondaryButtonText="Explore Industries"
        secondaryButtonHref="/industries"
      />
    </div>
  );
}
