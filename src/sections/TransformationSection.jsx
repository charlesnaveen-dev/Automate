import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Table,
  Phone,
  MessageSquare,
  FileText,
  Keyboard,
  Bot,
  Workflow,
  Mic,
  Cpu,
  ArrowRight
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import './TransformationSection.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scattered items representing disconnected manual business processes (BEFORE)
 */
const SCATTERED_ITEMS = [
  {
    id: 'emails',
    name: 'Emails',
    meta: 'Unsorted inbox triage',
    Icon: Mail,
    rotation: -2.5,
    scale: 1.0,
    opacity: 1,
    zIndex: 4,
    badge: 'Scattered'
  },
  {
    id: 'spreadsheets',
    name: 'Spreadsheets',
    meta: 'VLOOKUPs & exports',
    Icon: Table,
    rotation: 2.2,
    scale: 0.98,
    opacity: 0.95,
    zIndex: 3,
    badge: 'Manual'
  },
  {
    id: 'calls',
    name: 'Phone Calls',
    meta: 'Missed customer leads',
    Icon: Phone,
    rotation: -1.6,
    scale: 0.96,
    opacity: 0.92,
    zIndex: 2,
    badge: 'Delayed'
  },
  {
    id: 'messages',
    name: 'Messages',
    meta: 'Slack & WhatsApp pings',
    Icon: MessageSquare,
    rotation: 2.8,
    scale: 1.01,
    opacity: 1,
    zIndex: 4,
    badge: 'Fragmented'
  },
  {
    id: 'documents',
    name: 'Documents',
    meta: 'PDF & invoice parsing',
    Icon: FileText,
    rotation: -2.0,
    scale: 0.95,
    opacity: 0.9,
    zIndex: 1,
    badge: 'Slow',
    hideOnMobile: true
  },
  {
    id: 'data-entry',
    name: 'Manual Data Entry',
    meta: 'Duplicate CRM re-keying',
    Icon: Keyboard,
    rotation: 1.5,
    scale: 0.97,
    opacity: 0.94,
    zIndex: 2,
    badge: 'Repetitive',
    hideOnMobile: true
  }
];

/**
 * Connected services representing Hutomate's unified AI platform (AFTER)
 */
const CONNECTED_SERVICES = [
  {
    id: 'agents',
    name: 'AI Agents',
    color: '#7657E8',
    colorVar: 'var(--color-accent-purple, #7657E8)',
    badgeBg: 'rgba(118, 87, 232, 0.08)',
    Icon: Bot,
    tag: 'Autonomous',
    desc: 'Autonomous lead triage & decision execution'
  },
  {
    id: 'workflow',
    name: 'Workflow Automation',
    color: '#25A86A',
    colorVar: 'var(--color-accent-green, #25A86A)',
    badgeBg: 'rgba(37, 168, 106, 0.08)',
    Icon: Workflow,
    tag: '24/7 Flow',
    desc: 'Cross-tool data sync & zero manual steps'
  },
  {
    id: 'voice',
    name: 'Voice AI',
    color: '#4389F5',
    colorVar: 'var(--color-accent-blue, #4389F5)',
    badgeBg: 'rgba(67, 137, 245, 0.08)',
    Icon: Mic,
    tag: 'Instant',
    desc: 'Smart call intake & automated calendar booking'
  },
  {
    id: 'custom',
    name: 'Custom AI Solutions',
    color: '#E89A42',
    colorVar: 'var(--color-accent-orange, #E89A42)',
    badgeBg: 'rgba(232, 154, 66, 0.08)',
    Icon: Cpu,
    tag: 'Tailored',
    desc: 'Bespoke models trained on your specific data'
  }
];

/**
 * Problem narratives detailing core business pain points before automation
 */
const PROBLEM_NARRATIVES = [
  {
    id: '01',
    number: '01',
    title: 'Repetitive work',
    description: 'Hours spent on tasks that could be automated.'
  },
  {
    id: '02',
    number: '02',
    title: 'Disconnected tools',
    description: 'Important data spread across multiple platforms.'
  },
  {
    id: '03',
    number: '03',
    title: 'Missed enquiries',
    description: 'Customer calls and leads that need timely attention.'
  },
  {
    id: '04',
    number: '04',
    title: 'Slower operations',
    description: 'Manual processes that make growth harder to manage.'
  }
];

/**
 * TransformationSection (Section 2)
 * Shows the transformation from scattered manual processes into a connected, intelligent system.
 */
export default function TransformationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isAutomated =
      Boolean(window.navigator?.webdriver) ||
      /bot|googlebot|crawler|spider|headless|phantom|lighthouse|pagespeed|bingbot|yandex|slurp|baiduspider|inspection|preview|prerender/i.test(
        navigator.userAgent || ''
      );

    if (prefersReduced || isAutomated || !sectionRef.current) return;

    let ctx;
    try {
      ctx = gsap.context(() => {
        // Meaningful scroll-driven transformation storytelling
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            once: true,
          },
        });

      // Step 1: Scattered cards enter with subtle organic dispersion
      tl.from('.scattered-item', {
        opacity: 0.25,
        x: -20,
        y: (i) => (i % 2 === 0 ? -12 : 12),
        stagger: 0.07,
        duration: 0.65,
        ease: 'power2.out',
      });

      // Step 2: Central Hutomate intelligence hub activates
      tl.from(
        '.hub-node',
        {
          scale: 0.88,
          opacity: 0.6,
          duration: 0.55,
          ease: 'back.out(1.4)',
        },
        '-=0.3'
      );

      // Step 3: Inbound connector lines illuminate into the central hub
      tl.from(
        '.connector-path--inbound',
        {
          opacity: 0.2,
          strokeDashoffset: 80,
          stagger: 0.05,
          duration: 0.55,
          ease: 'power2.inOut',
        },
        '-=0.25'
      );

      // Step 4: Outbound connector conduits light up toward the four services
      tl.from(
        '.connector-path--outbound',
        {
          opacity: 0.2,
          strokeDashoffset: 80,
          stagger: 0.05,
          duration: 0.55,
          ease: 'power2.inOut',
        },
        '-=0.2'
      );

      // Step 5: Organized panel activates with the 4 synchronized services
      tl.from(
        '.organized-panel',
        {
          opacity: 0.65,
          scale: 0.98,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.3'
      );

      tl.from(
        '.organized-service-item',
        {
          opacity: 0.35,
          x: 18,
          stagger: 0.07,
          duration: 0.45,
          ease: 'power3.out',
        },
        '-=0.3'
      );

      // Step 6: Problem narratives below enter in a dignified stagger
      tl.from(
        '.problem-item',
        {
          opacity: 0.3,
          y: 18,
          stagger: 0.09,
          duration: 0.55,
          ease: 'power2.out',
        },
        '-=0.15'
      );
    }, sectionRef);
    } catch (err) {
      console.warn('Transformation GSAP animation initialized gracefully with fallback:', err);
    }

    return () => {
      try {
        ctx?.revert();
      } catch {}
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="opportunity"
      className="transformation-section"
      aria-labelledby="transformation-heading"
    >
      <div className="transformation-container">
        {/* ===================================================================
         * SECTION HEADER (Asymmetric Editorial Layout)
         * =================================================================== */}
        <header className="transformation-header">
          <div className="transformation-header-left">
            <div className="transformation-eyebrow-wrap">
              <SectionLabel number="02" text="THE OPPORTUNITY" />
            </div>

            <h2 id="transformation-heading" className="transformation-headline">
              <span className="headline-line headline-line--1">Your business</span>
              <span className="headline-line headline-line--2 headline-indent">
                has better things
              </span>
              <span className="headline-line headline-line--3 headline-accent">
                to do.
              </span>
            </h2>
          </div>

          <div className="transformation-header-right">
            <p className="transformation-subhead">
              Disconnected tools, repetitive tasks, and missed enquiries slow your team down.
              Hutomate brings the right processes together through intelligent automation.
            </p>
          </div>
        </header>

        {/* ===================================================================
         * THE VISUAL TRANSFORMATION SCENE (.transform-visual)
         * Layered composition: LEFT (Before) | MIDDLE (Hub/Lines) | RIGHT (After)
         * =================================================================== */}
        <div
          className="transform-visual"
          data-transform-visual="true"
          role="region"
          aria-label="Interactive visual diagram: Transformation from scattered manual work to connected AI automation"
        >
          {/* Subtle Ambient Background Grids */}
          <div className="transform-visual-backdrop" aria-hidden="true">
            <div className="backdrop-glow backdrop-glow--left" />
            <div className="backdrop-glow backdrop-glow--center" />
            <div className="backdrop-glow backdrop-glow--right" />
          </div>

          <div className="transform-visual-grid">
            {/* -------------------------------------------------------------
             * ZONE 1: LEFT — 'BEFORE — Scattered & Manual'
             * ------------------------------------------------------------- */}
            <div className="transform-zone transform-zone--before">
              <div className="zone-label-wrap">
                <span className="zone-indicator zone-indicator--before" aria-hidden="true" />
                <span className="zone-label">BEFORE — Scattered & Manual</span>
              </div>

              <div
                className="scattered-cards-cluster"
                role="list"
                aria-label="Scattered manual processes"
              >
                {SCATTERED_ITEMS.map((item, index) => {
                  const { Icon } = item;
                  return (
                    <div
                      key={item.id}
                      className={`scattered-item scattered-item--${item.id} ${
                        item.hideOnMobile ? 'scattered-item--hide-mobile' : ''
                      }`}
                      data-scattered-item={item.id}
                      data-scatter-index={index}
                      role="listitem"
                      style={{
                        '--card-rotation': `${item.rotation}deg`,
                        '--card-scale': item.scale,
                        '--card-opacity': item.opacity,
                        '--card-z': item.zIndex
                      }}
                    >
                      <div className="scattered-card-inner">
                        <div className="scattered-icon-wrap" aria-hidden="true">
                          <Icon size={17} strokeWidth={2} className="scattered-icon" />
                        </div>
                        <div className="scattered-text-wrap">
                          <span className="scattered-card-title">{item.name}</span>
                          <span className="scattered-card-meta">{item.meta}</span>
                        </div>
                        <span className="scattered-badge" aria-hidden="true">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* -------------------------------------------------------------
             * ZONE 2: MIDDLE — Transformation Zone (SVG Connectors & Central Hub)
             * ------------------------------------------------------------- */}
            <div className="transform-zone transform-zone--middle">
              {/* DESKTOP CONNECTOR SVG OVERLAY */}
              <svg
                className="connector-svg connector-svg--desktop"
                viewBox="0 0 280 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  {/* Subtle Inbound Neutral-to-Purple Gradient */}
                  <linearGradient id="flowGradIn" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DFDCD4" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="#DFDCD4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#7657E8" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Outbound Gradients to Service Colors */}
                  <linearGradient id="flowOutPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7657E8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7657E8" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="flowOutGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7657E8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#25A86A" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="flowOutBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7657E8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#4389F5" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="flowOutOrange" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7657E8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#E89A42" stopOpacity="1" />
                  </linearGradient>

                  {/* Soft Hub Glow Filter */}
                  <filter id="hubFilterGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="14" floodColor="#7657E8" floodOpacity="0.25" />
                  </filter>
                </defs>

                {/* INBOUND PATHS (Left Scattered Cards -> Center Hub (140, 220)) */}
                {/* Path 1: Top-Left */}
                <path
                  id="pathIn1"
                  className="connector-path connector-path--inbound connector-path--1"
                  d="M 0 54 C 60 54, 85 200, 140 220"
                  stroke="url(#flowGradIn)"
                  strokeWidth="1.6"
                  strokeDasharray="4 6"
                />
                {/* Path 2: Mid-Top Left */}
                <path
                  id="pathIn2"
                  className="connector-path connector-path--inbound connector-path--2"
                  d="M 0 134 C 65 134, 90 205, 140 220"
                  stroke="url(#flowGradIn)"
                  strokeWidth="1.6"
                  strokeDasharray="4 6"
                />
                {/* Path 3: Mid-Bottom Left */}
                <path
                  id="pathIn3"
                  className="connector-path connector-path--inbound connector-path--3"
                  d="M 0 306 C 65 306, 90 235, 140 220"
                  stroke="url(#flowGradIn)"
                  strokeWidth="1.6"
                  strokeDasharray="4 6"
                />
                {/* Path 4: Bottom-Left */}
                <path
                  id="pathIn4"
                  className="connector-path connector-path--inbound connector-path--4"
                  d="M 0 386 C 60 386, 85 240, 140 220"
                  stroke="url(#flowGradIn)"
                  strokeWidth="1.6"
                  strokeDasharray="4 6"
                />

                {/* ANIMATED PULSING SIGNALS (INBOUND) */}
                <circle className="connector-signal connector-signal--in1" r="3" fill="#7657E8">
                  <animateMotion dur="2.4s" repeatCount="indefinite" path="M 0 54 C 60 54, 85 200, 140 220" />
                </circle>
                <circle className="connector-signal connector-signal--in2" r="3" fill="#7657E8">
                  <animateMotion dur="2.8s" begin="0.7s" repeatCount="indefinite" path="M 0 134 C 65 134, 90 205, 140 220" />
                </circle>
                <circle className="connector-signal connector-signal--in3" r="3" fill="#7657E8">
                  <animateMotion dur="2.6s" begin="0.3s" repeatCount="indefinite" path="M 0 306 C 65 306, 90 235, 140 220" />
                </circle>
                <circle className="connector-signal connector-signal--in4" r="3" fill="#7657E8">
                  <animateMotion dur="3.0s" begin="1.1s" repeatCount="indefinite" path="M 0 386 C 60 386, 85 240, 140 220" />
                </circle>

                {/* OUTBOUND PATHS (Center Hub (140, 220) -> Right Panel Services) */}
                {/* Outbound 1 -> AI Agents (Purple) */}
                <path
                  id="pathOut1"
                  className="connector-path connector-path--outbound connector-path--out-purple"
                  d="M 140 220 C 190 205, 215 54, 280 54"
                  stroke="url(#flowOutPurple)"
                  strokeWidth="1.75"
                  strokeDasharray="5 5"
                />
                {/* Outbound 2 -> Workflow Automation (Green) */}
                <path
                  id="pathOut2"
                  className="connector-path connector-path--outbound connector-path--out-green"
                  d="M 140 220 C 195 210, 220 134, 280 134"
                  stroke="url(#flowOutGreen)"
                  strokeWidth="1.75"
                  strokeDasharray="5 5"
                />
                {/* Outbound 3 -> Voice AI (Blue) */}
                <path
                  id="pathOut3"
                  className="connector-path connector-path--outbound connector-path--out-blue"
                  d="M 140 220 C 195 230, 220 306, 280 306"
                  stroke="url(#flowOutBlue)"
                  strokeWidth="1.75"
                  strokeDasharray="5 5"
                />
                {/* Outbound 4 -> Custom AI (Orange) */}
                <path
                  id="pathOut4"
                  className="connector-path connector-path--outbound connector-path--out-orange"
                  d="M 140 220 C 190 235, 215 386, 280 386"
                  stroke="url(#flowOutOrange)"
                  strokeWidth="1.75"
                  strokeDasharray="5 5"
                />

                {/* ANIMATED PULSING SIGNALS (OUTBOUND) */}
                <circle className="connector-signal connector-signal--out1" r="3.2" fill="#7657E8">
                  <animateMotion dur="2.4s" begin="0.4s" repeatCount="indefinite" path="M 140 220 C 190 205, 215 54, 280 54" />
                </circle>
                <circle className="connector-signal connector-signal--out2" r="3.2" fill="#25A86A">
                  <animateMotion dur="2.6s" begin="0.9s" repeatCount="indefinite" path="M 140 220 C 195 210, 220 134, 280 134" />
                </circle>
                <circle className="connector-signal connector-signal--out3" r="3.2" fill="#4389F5">
                  <animateMotion dur="2.5s" begin="1.3s" repeatCount="indefinite" path="M 140 220 C 195 230, 220 306, 280 306" />
                </circle>
                <circle className="connector-signal connector-signal--out4" r="3.2" fill="#E89A42">
                  <animateMotion dur="2.7s" begin="0.2s" repeatCount="indefinite" path="M 140 220 C 190 235, 215 386, 280 386" />
                </circle>
              </svg>

              {/* MOBILE FLOW CONNECTOR (Stacked Vertical Flow) */}
              <div className="mobile-connector-flow" aria-hidden="true">
                <svg
                  className="connector-svg connector-svg--mobile"
                  viewBox="0 0 200 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="connector-path connector-path--mobile-in"
                    d="M 40 0 C 40 30, 90 40, 100 45 M 160 0 C 160 30, 110 40, 100 45"
                    stroke="#7657E8"
                    strokeWidth="1.6"
                    strokeDasharray="4 4"
                  />
                  <path
                    className="connector-path connector-path--mobile-out"
                    d="M 100 45 C 90 60, 40 70, 40 90 M 100 45 C 110 60, 160 70, 160 90"
                    stroke="#7657E8"
                    strokeWidth="1.6"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* CENTRAL HUTOMATE NODE / HUB (.hub-node) */}
              <div
                className="hub-node"
                data-hub-node="central"
                role="figure"
                aria-label="Hutomate Central Intelligence Core"
              >
                {/* Animated Ambient Glow Ring */}
                <div className="hub-pulse-ring" aria-hidden="true" />
                <div className="hub-pulse-ring hub-pulse-ring--outer" aria-hidden="true" />

                <div className="hub-node-card">
                  {/* Brand Monogram Icon */}
                  <div className="hub-logo-mark" aria-hidden="true">
                    <svg
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hub-brand-svg"
                    >
                      <rect width="38" height="38" rx="10" fill="url(#hubMarkGrad)" />
                      {/* Interconnected Neural 'H' Symbol */}
                      <path
                        d="M 11 11 V 27 M 27 11 V 27 M 11 19 H 27"
                        stroke="#FFFFFF"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="11" cy="19" r="2.2" fill="#FFFFFF" />
                      <circle cx="27" cy="19" r="2.2" fill="#FFFFFF" />
                      <circle cx="19" cy="19" r="2.6" fill="#FFFFFF" />
                      <defs>
                        <linearGradient id="hubMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8A6DF6" />
                          <stop offset="100%" stopColor="#7657E8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="hub-node-text">
                    <span className="hub-brand-title">Hutomate</span>
                    <span className="hub-brand-sub">Intelligent Core</span>
                  </div>

                  <div className="hub-node-status">
                    <span className="hub-status-beacon" aria-hidden="true" />
                    <span className="hub-status-label">Active Flow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
             * ZONE 3: RIGHT — 'AFTER — Connected & Efficient'
             * ------------------------------------------------------------- */}
            <div className="transform-zone transform-zone--after">
              <div className="zone-label-wrap">
                <span className="zone-indicator zone-indicator--after" aria-hidden="true" />
                <span className="zone-label">AFTER — Connected & Efficient</span>
              </div>

              {/* ORGANIZED PANEL (.organized-panel) */}
              <div
                className="organized-panel"
                data-organized-panel="services"
                role="region"
                aria-label="Connected and efficient Hutomate AI automation architecture"
              >
                {/* Panel Header */}
                <div className="organized-panel-header">
                  <div className="panel-header-title-group">
                    <h3 className="panel-title">Unified AI Architecture</h3>
                    <span className="panel-badge">
                      <span className="panel-badge-dot" aria-hidden="true" />
                      <span>Synchronized</span>
                    </span>
                  </div>
                  <p className="panel-subtitle">
                    4 specialized systems working in continuous harmony
                  </p>
                </div>

                {/* 4 Connected Services Grid/List */}
                <div className="organized-services-list" role="list">
                  {CONNECTED_SERVICES.map((service, index) => {
                    const { Icon } = service;
                    return (
                      <div
                        key={service.id}
                        className={`organized-service-item organized-service-item--${service.id}`}
                        data-service-id={service.id}
                        data-service-index={index}
                        role="listitem"
                      >
                        <div
                          className="service-accent-dot"
                          style={{ backgroundColor: service.color }}
                          aria-hidden="true"
                        />
                        <div
                          className="service-icon-pill"
                          style={{
                            backgroundColor: service.badgeBg,
                            color: service.color
                          }}
                          aria-hidden="true"
                        >
                          <Icon size={16} strokeWidth={2.2} />
                        </div>
                        <div className="service-info">
                          <div className="service-title-row">
                            <span className="service-name">{service.name}</span>
                            <span
                              className="service-tag"
                              style={{
                                color: service.color,
                                borderColor: `${service.color}33`
                              }}
                            >
                              {service.tag}
                            </span>
                          </div>
                          <p className="service-desc">{service.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Panel Footer / Assurance Pill */}
                <div className="organized-panel-footer">
                  <div className="footer-metric">
                    <span className="footer-metric-highlight">0 min</span>
                    <span className="footer-metric-label">Manual data re-entry</span>
                  </div>
                  <span className="footer-metric-divider" aria-hidden="true">•</span>
                  <div className="footer-metric">
                    <span className="footer-metric-highlight">24/7</span>
                    <span className="footer-metric-label">Autonomous execution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
         * PROBLEM NARRATIVES LIST (Below Visual Scene)
         * 4 items separated by fine dividers (1px #DFDCD4) with interactive hover
         * =================================================================== */}
        <section
          className="problem-narratives"
          aria-labelledby="problem-narratives-title"
        >
          <div className="problem-narratives-header">
            <span className="problem-narratives-eyebrow">OPERATIONAL BOTTLENECKS</span>
            <h3 id="problem-narratives-title" className="problem-narratives-title">
              Common challenges businesses face before intelligent automation
            </h3>
          </div>

          <div
            className="problem-items-container"
            role="list"
            aria-label="Key operational problems solved by Hutomate"
          >
            {PROBLEM_NARRATIVES.map((item) => (
              <article
                key={item.id}
                className="problem-item"
                data-problem-item={item.id}
                tabIndex={0}
                role="listitem"
              >
                <div className="problem-item-left">
                  <span className="problem-num">{item.number}</span>
                  <span className="problem-dash" aria-hidden="true">—</span>
                  <h4 className="problem-title">{item.title}</h4>
                </div>

                <div className="problem-item-right">
                  <p className="problem-desc">{item.description}</p>
                  <div className="problem-arrow-wrap" aria-hidden="true">
                    <ArrowRight size={18} className="problem-arrow" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
