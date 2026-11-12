import React from 'react';
import { Globe, Compass, Target, ShieldCheck, Zap, Layers, Lock, Cpu, Server, Check } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './AboutPage.css';

export default function AboutPage() {
  usePageMetadata({
    title: 'About Hutomate — AI Automation & Engineering Partner',
    description: 'Hutomate is an AI automation and implementation partner helping businesses connect existing tools, automate repetitive operations, and build custom intelligent systems.',
    path: '/about',
  });

  useScrollReveal();

  const philosophyPillars = [
    {
      num: '01',
      title: 'Operational Feasibility First',
      desc: 'We never sell speculative AI where a deterministic script, clean webhook, or simple automation rule is faster, cheaper, and more reliable.',
      icon: Target,
    },
    {
      num: '02',
      title: 'Human-in-the-Loop by Design',
      desc: 'Autonomous does not mean unsupervised. We design systems that empower internal teams, escalating edge cases and preserving human agency at critical junctures.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Engineering Rigor Over Hype',
      desc: 'We build credibility through software engineering standards—schema validation, automated retries, rate limiting, and continuous observability—not inflated claims.',
      icon: Zap,
    },
    {
      num: '04',
      title: 'Model & Platform Agnosticism',
      desc: 'We never lock you into a single proprietary vendor. We select the best models and infrastructure for your exact performance, latency, and budget requirements.',
      icon: Layers,
    },
    {
      num: '05',
      title: 'Absolute Data Sovereignty',
      desc: 'Your proprietary data is never used to train public foundational models. All API integrations are configured with zero-retention policies and enterprise privacy guarantees.',
      icon: Lock,
    },
  ];

  return (
    <div className="about-page">
      <PageHeader
        eyebrow="ABOUT HUTOMATE"
        badgeText="Our Foundation"
        badgeType="teal"
        title="Building a smarter way to work."
        description="Hutomate is an AI automation and implementation partner helping forward-looking businesses eliminate friction, automate routine tasks, and deploy production-grade intelligent systems."
      >
        <Button variant="primary" size="md" arrow href="/contact">
          Discuss Your Project
        </Button>
        <Button variant="secondary" size="md" href="/process">
          Explore Delivery Process
        </Button>
      </PageHeader>

      {/* Editorial Storytelling Section */}
      <section className="section about-editorial-section">
        <div className="container">
          <div className="about-editorial-grid">
            <div className="about-editorial-content">
              <span className="about-kicker">Operational Architecture</span>
              <h2 className="about-editorial-heading">
                We believe talented teams shouldn’t spend their days copying data between tabs or answering routine emails.
              </h2>
              <p className="about-editorial-lead">
                Every business carries invisible friction: fragmented software, manual approvals, repetitive data entry, and dropped customer inquiries. Frontier AI offers a solution—but off-the-shelf tools rarely fit the complex realities of production workflows.
              </p>
              <p className="about-editorial-subtext">
                That is why Hutomate exists. We bridge the gap between bleeding-edge machine intelligence and everyday business execution. We don’t sell prepackaged subscriptions; we engineer, integrate, and maintain bespoke automated systems that run seamlessly inside your existing toolstack.
              </p>
            </div>

            <div className="about-editorial-media">
              <div className="about-media-card">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern architectural workspace"
                  className="about-editorial-img"
                  loading="lazy"
                />
                <div className="about-media-overlay" />
                <div className="about-media-caption">
                  <div className="caption-dot" />
                  <span>San Francisco & London Engineering Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section about-vm-section">
        <div className="container">
          <div className="about-vm-grid">
            <div className="about-vm-card">
              <div className="about-vm-icon-box">
                <Compass size={22} color="#167C80" />
              </div>
              <span className="about-vm-label">Our Vision</span>
              <h3 className="about-vm-title">Liberating human talent from mechanical routines.</h3>
              <p className="about-vm-desc">
                We envision organizations where operational execution flows quietly and deterministically in the background, freeing people to focus on high-judgment, creative, and relationship-driven work.
              </p>
            </div>

            <div className="about-vm-card">
              <div className="about-vm-icon-box">
                <Target size={22} color="#167C80" />
              </div>
              <span className="about-vm-label">Our Mission</span>
              <h3 className="about-vm-title">Engineering practical, resilient intelligence.</h3>
              <p className="about-vm-desc">
                Our mission is to translate AI breakthroughs into practical, secure, and production-tested workflows that yield immediate, measurable return on investment without requiring staff to change how they work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Pillars Section */}
      <section className="section about-pillars-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Philosophy</span>
            <h2 className="section-heading">The 5 pillars that guide our engineering</h2>
            <p className="section-body">
              How we evaluate every client opportunity, architecture decision, and system integration.
            </p>
          </div>

          <div className="principles-grid">
            {philosophyPillars.map((pr) => {
              const IconComp = pr.icon;
              return (
                <div key={pr.num} className="principle-card">
                  <div className="principle-top">
                    <span className="principle-num">{pr.num}</span>
                    <div className="principle-icon-wrap">
                      <IconComp size={18} color="#167C80" />
                    </div>
                  </div>
                  <h3 className="principle-title">{pr.title}</h3>
                  <p className="principle-desc">{pr.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Sovereignty & Standards Section */}
      <section className="section about-standards-section">
        <div className="container">
          <div className="about-standards-box">
            <div className="standards-left">
              <span className="standards-badge">ENTERPRISE ASSURANCE</span>
              <h2 className="standards-title">Built on strict security and privacy standards</h2>
              <p className="standards-desc">
                We engineer all AI pipelines to adhere to strict regulatory compliance and enterprise cybersecurity frameworks. You maintain complete sovereignty over your data and code.
              </p>
              <div className="standards-checklist">
                <div className="checklist-item">
                  <Check size={16} color="#83DDE2" />
                  <span>Zero public LLM training on client inputs or proprietary logs</span>
                </div>
                <div className="checklist-item">
                  <Check size={16} color="#83DDE2" />
                  <span>End-to-end encryption in transit (TLS 1.3) and at rest (AES-256)</span>
                </div>
                <div className="checklist-item">
                  <Check size={16} color="#83DDE2" />
                  <span>Isolated VPC / on-premises deployment options available</span>
                </div>
              </div>
            </div>

            <div className="standards-right">
              <div className="standards-metric-card">
                <Server size={28} color="#83DDE2" />
                <span className="metric-title">Private VPC Deployment</span>
                <span className="metric-sub">Dedicated isolated instances across AWS, GCP, or Azure</span>
              </div>
              <div className="standards-metric-card">
                <Cpu size={28} color="#83DDE2" />
                <span className="metric-title">Granular RBAC</span>
                <span className="metric-sub">Role-based access control with detailed audit logs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operational Delivery */}
      <section className="section about-global-section">
        <div className="container">
          <div className="global-reach-box">
            <div className="global-reach-text">
              <div className="global-reach-header">
                <Globe size={22} color="#83DDE2" />
                <h3>Global Operational Delivery</h3>
              </div>
              <p>
                Hutomate partners with forward-thinking organizations across international markets, aligning with regional compliance standards, timezones, and communication cadences.
              </p>
            </div>

            <div className="regions-tags">
              <span className="region-tag">United States</span>
              <span className="region-tag">United Kingdom</span>
              <span className="region-tag">Australia</span>
              <span className="region-tag">Singapore</span>
              <span className="region-tag">Worldwide Remote</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to build practical automation for your team?"
        description="Let’s have an honest discussion about your current operational challenges and how tailored AI architectures can solve them."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
        secondaryButtonText="Explore How We Work"
        secondaryButtonHref="/process"
      />
    </div>
  );
}
