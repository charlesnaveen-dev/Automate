import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Cpu, Network } from 'lucide-react';
import Button from '../components/Button';
import InterconnectedSystemsCanvas from '../components/InterconnectedSystemsCanvas';
import { useGsapContext } from '../animations/useGsapContext';
import './BrandIntroSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function BrandIntroSection() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const pinBoxRef = useRef(null);

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
    // If user prefers reduced motion, render in static accessible layout without scroll-locking
    if (isReducedMotion) {
      gsap.set(['.phrase-1', '.phrase-2', '.phrase-3', '.phrase-4', '.phrase-5'], {
        opacity: 1,
        y: 0,
      });
      gsap.set('.statement-cyan-accent', {
        color: '#83DDE2',
      });
      gsap.set('.statement-cyan-accent-line', {
        scaleX: 1,
      });
      gsap.set('.brand-term-accent', {
        color: '#83DDE2',
      });
      gsap.set('.phrase-5', {
        opacity: 1,
        pointerEvents: 'auto',
      });
      return;
    }

    sectionRef.current?.classList.add('is-scroll-ready');

    // Initial state for scroll-driven reveals (clean, legible baseline, ready to illuminate on scroll)
    gsap.set('.phrase-1', { opacity: 0.65, y: 0 });
    gsap.set('.phrase-2', { opacity: 0.60, y: 0 });
    gsap.set('.phrase-3', { opacity: 0.50, y: 0 });
    gsap.set('.phrase-4', { opacity: 0.45, y: 0 });
    gsap.set('.phrase-5', { opacity: 0.85, pointerEvents: 'auto' });

    gsap.set('.statement-cyan-accent', {
      color: '#83DDE2',
      textShadow: '0 0 16px rgba(131, 221, 226, 0.35)',
    });
    gsap.set('.statement-cyan-accent-line', {
      scaleX: 0.5,
      transformOrigin: 'left center',
    });
    gsap.set('.brand-term-accent', {
      color: '#83DDE2',
    });

    // Pinned Scroll-Driven Scrollytelling Sequence (compact, controlled duration)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stageRef.current,
        start: 'top top',
        end: '+=45%',
        pin: pinBoxRef.current,
        pinSpacing: true,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const actions = pinBoxRef.current?.querySelector('.phrase-5');
          if (actions) {
            actions.style.pointerEvents = 'auto';
          }
        },
      },
    });

    // 1. Line 1: "Business operations deserve" illuminates to crisp pure white
    tl.to(
      '.phrase-1',
      {
        opacity: 1,
        duration: 0.25,
        ease: 'power1.inOut',
      },
      0
    );

    // 2. Line 2: "better technology." illuminates and blooms into Electric Cyan
    tl.to(
      '.phrase-2',
      {
        opacity: 1,
        duration: 0.25,
        ease: 'power1.inOut',
      },
      0.18
    );

    tl.to(
      '.statement-cyan-accent',
      {
        color: '#83DDE2',
        textShadow: '0 0 24px rgba(131, 221, 226, 0.55)',
        duration: 0.25,
        ease: 'power1.inOut',
      },
      0.22
    );

    tl.to(
      '.statement-cyan-accent-line',
      {
        scaleX: 1,
        duration: 0.25,
        ease: 'power2.out',
      },
      0.25
    );

    // 3. Line 3: "Enterprises worldwide lose thousands of productive hours..."
    tl.to(
      '.phrase-3',
      {
        opacity: 1,
        duration: 0.25,
        ease: 'power1.inOut',
      },
      0.44
    );

    // 4. Line 4: "Hutomate unites modern AI agents..."
    tl.to(
      '.phrase-4',
      {
        opacity: 1,
        duration: 0.25,
        ease: 'power1.inOut',
      },
      0.64
    );

    tl.to(
      '.brand-term-accent',
      {
        color: '#83DDE2',
        duration: 0.2,
        stagger: 0.05,
        ease: 'power1.inOut',
      },
      0.70
    );

    // 5. Line 5: CTA Action buttons smoothly fade in and activate
    tl.to(
      '.phrase-5',
      {
        opacity: 1,
        duration: 0.18,
        ease: 'power1.inOut',
      },
      0.82
    );

    // Ruled Architectural Manifesto reveals smoothly as user continues into foundations
    gsap.fromTo(
      '.pillar-architectural-row',
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.brand-manifesto-stage',
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section
      className="brand-intro-section"
      id="intro"
      ref={sectionRef}
      aria-label="Our Philosophy"
    >
      {/* Part 1: Scrollytelling Statement Stage with Interconnected Systems Canvas */}
      <div className="brand-statement-scroll-stage" ref={stageRef}>
        <div className="brand-statement-pin-box" ref={pinBoxRef}>
          {/* Animated interconnected system nodes & lines background */}
          <div className="brand-intro-canvas-backdrop" aria-hidden="true">
            <InterconnectedSystemsCanvas />
            <div className="brand-intro-bloom-overlay" />
          </div>

          <div className="container brand-statement-container">
            {/* Monospace Eyebrow Badge */}
            <div className="intro-badge statement-eyebrow">
              <span className="intro-badge-dot" />
              <span className="intro-badge-text">ENGINEERING PHILOSOPHY</span>
            </div>

            {/* Progressive Display Statement Headline */}
            <h2 className="statement-display-headline">
              <span className="statement-phrase phrase-1">Business operations deserve</span>
              <span className="statement-phrase phrase-2">
                <span className="statement-cyan-accent">
                  better technology.
                  <span className="statement-cyan-accent-line" aria-hidden="true" />
                </span>
              </span>
            </h2>

            {/* Progressive Narrative Body */}
            <div className="statement-narrative-block">
              <p className="statement-phrase phrase-3">
                Enterprises worldwide lose thousands of productive hours to fragmented tools and administrative overhead.
              </p>
              <p className="statement-phrase phrase-4">
                Hutomate unites modern <span className="brand-term-accent">AI agents</span>,{' '}
                <span className="brand-term-accent">voice intelligence</span>, and{' '}
                <span className="brand-term-accent">workflow engineering</span> to build operational systems that scale cleanly without adding headcount.
              </p>
            </div>

            {/* Dual Conversion CTA Actions */}
            <div className="statement-actions-row phrase-5">
              <Button variant="primary" size="md" arrow href="/about">
                Our Vision &amp; Architecture
              </Button>
              <Button variant="secondary" size="md" href="/capabilities">
                Explore Core Capabilities
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Ruled Architectural Manifesto (03 Foundations) */}
      <div className="brand-manifesto-stage">
        <div className="container">
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
      </div>
    </section>
  );
}
