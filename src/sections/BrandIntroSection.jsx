import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Shield, Cpu, Network } from 'lucide-react';
import Button from '../components/Button';
import { useGsapContext } from '../animations/useGsapContext';
import './BrandIntroSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function BrandIntroSection() {
  const sectionRef = useRef(null);

  const pillars = [
    {
      num: '01',
      tag: 'DETERMINISTIC & AUTONOMOUS',
      title: 'Eliminate Repetitive Operational Friction',
      desc: 'Free human operators from copy-pasting data between tabs, triaging routine inboxes, and reconciling disconnected systems. We implement deterministic rules and autonomous agents where manual effort adds zero business leverage.',
      icon: Cpu,
    },
    {
      num: '02',
      tag: 'UNIFIED ARCHITECTURE',
      title: 'Bridge Fragmented Software Stacks',
      desc: 'Connect your CRM, telephony, ERP, and customer messaging into one cohesive, event-driven ecosystem. Information synchronizes instantaneously, ensuring decisions are based on real-time operational truth.',
      icon: Network,
    },
    {
      num: '03',
      tag: 'HUMAN AGENCY FIRST',
      title: 'Preserve Governance & Human Judgment',
      desc: 'Autonomy without auditability is unacceptable. Every system we build enforces strict confidence scoring, immutable activity logs, and human approval checkpoints for critical actions.',
      icon: Shield,
    },
  ];

  useGsapContext(sectionRef, (context, isReducedMotion) => {
    if (isReducedMotion) return;

    gsap.fromTo(
      '.intro-reveal-line',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.brand-intro-editorial',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.pillar-architectural-row',
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.intro-pillars-manifesto',
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section className="brand-intro-section" id="intro" ref={sectionRef} aria-label="Our Philosophy">
      <div className="container">
        {/* Editorial Statement */}
        <div className="brand-intro-editorial">
          <div className="intro-badge intro-reveal-line">
            <span className="intro-badge-dot" />
            <span className="intro-badge-text">ENGINEERING PHILOSOPHY</span>
          </div>

          <h2 className="intro-headline intro-reveal-line">
            Business operations deserve{' '}
            <span className="intro-headline-highlight">better technology.</span>
          </h2>

          <p className="intro-body intro-reveal-line">
            Enterprises worldwide lose thousands of productive hours to fragmented tools and administrative overhead. Hutomate unites modern AI agents, voice intelligence, and workflow engineering to build operational systems that scale cleanly without adding headcount.
          </p>

          <div className="intro-cta-wrap intro-reveal-line">
            <Button variant="primary" size="md" arrow href="/about">
              Our Vision &amp; Architecture
            </Button>
            <Button variant="secondary" size="md" href="/capabilities">
              Explore Core Capabilities
            </Button>
          </div>
        </div>

        {/* Ruled Architectural Manifesto (No repetitive boxes) */}
        <div className="intro-pillars-manifesto">
          <div className="manifesto-header">
            <span className="manifesto-label">CORE PRINCIPLES</span>
            <span className="manifesto-count">03 FOUNDATIONS</span>
          </div>

          <div className="manifesto-list">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.num} className="pillar-architectural-row">
                  <div className="pillar-num-cell">
                    <span className="pillar-num-text">{pillar.num}</span>
                  </div>

                  <div className="pillar-content-cell">
                    <div className="pillar-meta-row">
                      <span className="pillar-tag-badge">{pillar.tag}</span>
                      <IconComp size={16} className="pillar-meta-icon" />
                    </div>
                    <h3 className="pillar-row-title">{pillar.title}</h3>
                    <p className="pillar-row-desc">{pillar.desc}</p>
                  </div>

                  <div className="pillar-action-cell">
                    <span className="pillar-indicator" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
