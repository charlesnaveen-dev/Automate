import React from 'react';
import { Globe, Compass, Target, ShieldCheck, Zap, Layers, Lock } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './AboutPage.css';

export default function AboutPage() {
  usePageMetadata({
    title: 'About Hutomate — Building a Smarter Way to Work',
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
        badgeType="purple"
        title="Building a smarter way to work."
        description="Hutomate is an AI automation and implementation partner helping businesses connect existing tools, automate repetitive operations, and build custom intelligent systems."
      >
        <Button variant="primary" size="md" arrow href="/contact">
          Discuss Your Project
        </Button>
        <Button variant="secondary" size="md" href="/process">
          Explore Delivery Process
        </Button>
      </PageHeader>

      <section className="section detail-section">
        <div className="container">
          {/* Vision & Mission Cards */}
          <div className="about-vm-grid reveal-on-scroll">
            <div className="about-vm-card card">
              <div className="about-vm-icon-box">
                <Compass size={22} color="#7657E8" />
              </div>
              <span className="about-vm-label">Our Vision</span>
              <h3 className="about-vm-title">Liberating human talent from mechanical routines.</h3>
              <p className="about-vm-desc">
                We believe talented teams shouldn’t spend their days copying data between tabs, answering repetitive phone FAQs, or manually dispatching internal reminders. We envision a future where business operations flow seamlessly in the background, freeing professionals to focus on high-judgment, creative, and relationship-driven work.
              </p>
            </div>

            <div className="about-vm-card card">
              <div className="about-vm-icon-box">
                <Target size={22} color="#10B981" />
              </div>
              <span className="about-vm-label" style={{ color: '#10B981' }}>Our Mission</span>
              <h3 className="about-vm-title">Engineering practical, resilient intelligence.</h3>
              <p className="about-vm-desc">
                Our mission is to bridge the gap between frontier artificial intelligence and everyday business execution. We do this by designing, engineering, and deploying custom AI agents, voice telephony systems, and connected workflow pipelines that deliver measurable operational efficiency without disrupting existing workflows.
              </p>
            </div>
          </div>

          {/* Hybrid Approach Section */}
          <div className="about-intro-grid reveal-on-scroll" style={{ marginTop: '60px' }}>
            <h2 className="about-intro-title reveal-on-scroll reveal-delay-1">
              A hybrid delivery model: tailored consulting meets disciplined software engineering.
            </h2>
            <div className="about-intro-text reveal-on-scroll reveal-delay-2">
              <p>
                Hutomate is an early-stage AI automation and implementation partner. We work directly with founders, operations leaders, and department heads to analyze manual bottlenecks and engineer production-grade AI pipelines.
              </p>
              <p>
                Our approach blends deep operational consulting with senior software engineering. We don’t just recommend tools; we write the code, configure the API integrations, test the edge cases, and maintain the live pipelines so your team achieves effortless execution.
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="section-header reveal-on-scroll" style={{ marginTop: '60px' }}>
            <span className="section-label reveal-on-scroll reveal-delay-1">Core Philosophy</span>
            <h2 className="section-heading reveal-on-scroll reveal-delay-2">The 5 pillars that guide our engineering</h2>
            <p className="section-body reveal-on-scroll reveal-delay-3">
              How we evaluate every client opportunity, architecture decision, and system integration.
            </p>
          </div>

          <div className="principles-grid">
            {philosophyPillars.map((pr, idx) => {
              const IconComp = pr.icon;
              return (
                <div key={pr.num} className={`principle-card card reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span className="principle-num">{pr.num}</span>
                    <IconComp size={18} color="#7657E8" />
                  </div>
                  <h3 className="principle-title">{pr.title}</h3>
                  <p className="principle-desc">{pr.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Global Reach */}
          <div className="global-reach-box reveal-on-scroll">
            <div className="global-reach-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Globe size={20} className="section-label-blue" />
                <h3 style={{ margin: 0 }}>Global Operational Delivery</h3>
              </div>
              <p>
                Hutomate partners with forward-thinking organizations across international markets, aligning with regional compliance standards, timezones, and communication cadences.
              </p>
            </div>

            <div className="regions-tags">
              <span className="region-tag">United States</span>
              <span className="region-tag">United Kingdom</span>
              <span className="region-tag">Australia</span>
              <span className="region-tag">India</span>
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
