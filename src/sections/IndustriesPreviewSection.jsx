import React, { useState, useRef, useMemo } from 'react';
import {
  Scale,
  Building2,
  HeartPulse,
  Wrench,
  Landmark,
  Package,
  HardHat,
  Server,
  Briefcase,
  Home,
  Car,
  Shield,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from '../router/Router';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import './IndustriesPreviewSection.css';

/**
 * Exact 12 Industries from Hutomate ecosystem
 * Formatted with exact slugs, official metadata, and geometric anchor points
 * for the 760x640 orbital coordinate space (cx: 380, cy: 320, rCenter: 88, rOrbit: 175)
 */
const INDUSTRIES = [
  {
    id: 'legal',
    name: 'Legal Practices',
    lines: ['Legal Practices'],
    tag: 'REGULATED ADVISORY',
    highlight: 'Automated client intake, conflict checking & Clio sync',
    workflow: 'Inbound Call → AI Urgency Triage & Conflict Check → Retainer Drafted → Consultation Booked in Clio',
    icon: Scale,
    deg: -90,
    anchorX: 380,
    anchorY: 76,
    pillAlign: 'bottom-center',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    lines: ['Real Estate &', 'Property'],
    tag: 'TRANSACTIONS & LEASING',
    highlight: 'Instant listing responder & viewing calendar coordinator',
    workflow: 'Portal Lead / Call → Instant Budget & Pre-Approval Qualification → Automated Showing Booked',
    icon: Building2,
    deg: -56,
    anchorX: 520,
    anchorY: 114,
    pillAlign: 'left-center',
  },
  {
    id: 'healthcare',
    name: 'Healthcare Practices',
    lines: ['Healthcare', 'Practices'],
    tag: 'CLINICAL OPERATIONS',
    highlight: 'Intake automation & clinical calendar sync',
    workflow: 'Patient Inquiry → HIPAA-Conscious Triage → Intake Forms Dispatched → EHR Calendar Synced',
    icon: HeartPulse,
    deg: -26,
    anchorX: 575,
    anchorY: 225,
    pillAlign: 'left-center',
  },
  {
    id: 'home-services',
    name: 'Home Services & Contractors',
    lines: ['Home Services &', 'Contractors'],
    tag: 'FIELD DISPATCH',
    highlight: '24/7 Voice call answering & field dispatch sync',
    workflow: 'Emergency Call → Voice AI Diagnostic Triage → Window Scheduled → ServiceTitan / Jobber Synced',
    icon: Wrench,
    deg: 0,
    anchorX: 590,
    anchorY: 320,
    pillAlign: 'left-center',
  },
  {
    id: 'financial-services',
    name: 'Financial Services & Wealth',
    lines: ['Financial Services', '& Wealth'],
    tag: 'WEALTH & ADVISORY',
    highlight: 'KYC extraction & portfolio meeting preparation',
    workflow: 'Client Onboarding → Automated KYC Document Parsing → Wealthbox / QuickBooks Synced',
    icon: Landmark,
    deg: 26,
    anchorX: 575,
    anchorY: 415,
    pillAlign: 'left-center',
  },
  {
    id: 'ecommerce-logistics',
    name: 'E-Commerce & Logistics',
    lines: ['E-Commerce &', 'Logistics'],
    tag: 'SUPPLY CHAIN & FULFILLMENT',
    highlight: 'Omnichannel support triage & ERP inventory sync',
    workflow: 'Order / Tracking Query → Proactive Exception Check → Return Ticket Triaged → ERP Synced',
    icon: Package,
    deg: 56,
    anchorX: 520,
    anchorY: 526,
    pillAlign: 'left-center',
  },
  {
    id: 'construction',
    name: 'Manufacturing & Building',
    lines: ['Manufacturing', '& Building'],
    tag: 'PROJECT & JOBSITE OPS',
    highlight: 'Site-to-office RFI logging & compliance tracking',
    workflow: 'Subcontractor RFI / Daily Log → Voice AI Transcription → Procore Project Record Synced',
    icon: HardHat,
    deg: 90,
    anchorX: 380,
    anchorY: 564,
    pillAlign: 'top-center',
  },
  {
    id: 'it-services',
    name: 'IT & Managed Services',
    lines: ['IT & Managed', 'Services'],
    tag: 'TECHNICAL INFRASTRUCTURE',
    highlight: 'Tier-1 ticket triage & SLA outage escalation',
    workflow: 'Inbound Alert / Ticket → AI Diagnostic Classification → Runbook Retrieval → ConnectWise Escalation',
    icon: Server,
    deg: 124,
    anchorX: 240,
    anchorY: 526,
    pillAlign: 'right-center',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    lines: ['Professional', 'Services'],
    tag: 'STRATEGY & OPERATIONS',
    highlight: 'Proposal generation & consultative lead qualification',
    workflow: 'Discovery Inquiry → Consultative Scope Extraction → Dynamic Proposal Drafted → CRM Provisioned',
    icon: Briefcase,
    deg: 154,
    anchorX: 185,
    anchorY: 415,
    pillAlign: 'right-center',
  },
  {
    id: 'property-management',
    name: 'Property Management',
    lines: ['Property', 'Management'],
    tag: 'ASSET OPERATIONS',
    highlight: '24/7 tenant maintenance triage & vendor dispatch',
    workflow: 'Tenant Maintenance Call → Emergency Classification → Approved Contractor Dispatched → AppFolio Synced',
    icon: Home,
    deg: 180,
    anchorX: 170,
    anchorY: 320,
    pillAlign: 'right-center',
  },
  {
    id: 'automotive',
    name: 'Automotive & Repair',
    lines: ['Automotive &', 'Repair'],
    tag: 'SERVICE BAYS & DEALERS',
    highlight: 'Voice AI service scheduling & repair authorizations',
    workflow: 'Driver Phone Call → Vehicle Diagnostic Intake → Service Bay Slot Booked → Tekmetric Synced',
    icon: Car,
    deg: 206,
    anchorX: 185,
    anchorY: 225,
    pillAlign: 'right-center',
  },
  {
    id: 'insurance',
    name: 'Insurance Agencies',
    lines: ['Insurance', 'Agencies'],
    tag: 'POLICY UNDERWRITING',
    highlight: 'Intake agents & carrier rating sync',
    workflow: 'Coverage Inquiry → Preliminary Risk Triage → Carrier Form Auto-Population → Agent Dossier Drafted',
    icon: Shield,
    deg: 236,
    anchorX: 240,
    anchorY: 114,
    pillAlign: 'right-center',
  },
];

export default function IndustriesPreviewSection() {
  const [activeSlug, setActiveSlug] = useState(null);
  const sectionRef = useRef(null);

  // Geometric center and radiuses for desktop orbital coordinate system
  const CX = 380;
  const CY = 320;
  const R_CENTER = 88;
  const R_ORBIT = 175;

  // Compute exact collinear ray geometry for each industry
  const orbitCalculations = useMemo(() => {
    return INDUSTRIES.map((ind) => {
      const rad = Math.atan2(ind.anchorY - CY, ind.anchorX - CX);
      const startX = Math.round(CX + R_CENTER * Math.cos(rad));
      const startY = Math.round(CY + R_CENTER * Math.sin(rad));
      const dotX = Math.round(CX + R_ORBIT * Math.cos(rad));
      const dotY = Math.round(CY + R_ORBIT * Math.sin(rad));

      // CSS pill transform offsets based on alignment anchor
      let tx = '0%';
      let ty = '-50%';
      if (ind.pillAlign === 'bottom-center') {
        tx = '-50%';
        ty = '-100%';
      } else if (ind.pillAlign === 'top-center') {
        tx = '-50%';
        ty = '0%';
      } else if (ind.pillAlign === 'right-center') {
        tx = '-100%';
        ty = '-50%';
      }

      return {
        ...ind,
        startX,
        startY,
        dotX,
        dotY,
        tx,
        ty,
      };
    });
  }, []);

  // GSAP Orchestrated Scroll Entry Sequence
  useGsapContext(sectionRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set(
        [
          '.ind-bg-grid',
          '.ind-topographic-path',
          '.ind-hub-core',
          '.ind-orbit-ring',
          '.ind-guide-ring',
          '.ind-connector-line',
          '.ind-orbit-dot',
          '.ind-orbit-pill',
          '.ind-editorial-col > *',
        ],
        { opacity: 1, scale: 1, strokeDashoffset: 0 }
      );
      return;
    }

    // Scroll trigger intersection observer
    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          observer.disconnect();

          const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

          // 1. Left editorial content staggered reveal
          tl.fromTo(
            '.ind-editorial-eyebrow-row',
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 }
          )
            .fromTo(
              '.ind-editorial-headline',
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.65 },
              '-=0.3'
            )
            .fromTo(
              '.ind-editorial-desc',
              { opacity: 0, y: 16 },
              { opacity: 1, y: 0, duration: 0.55 },
              '-=0.35'
            )
            .fromTo(
              '.ind-editorial-cta-wrap',
              { opacity: 0, y: 12 },
              { opacity: 1, y: 0, duration: 0.5 },
              '-=0.3'
            );

          // 2. Architectural Grid progressive fade-in
          tl.fromTo(
            '.ind-bg-grid',
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: 'linear' },
            0.1
          );

          // 3. Topographic contour lines progressive draw
          tl.fromTo(
            '.ind-topographic-path',
            { strokeDashoffset: 1200, opacity: 0 },
            {
              strokeDashoffset: 0,
              opacity: 1,
              duration: 1.4,
              stagger: 0.08,
              ease: 'power2.inOut',
            },
            0.2
          );

          // 4. Central Hutomate Identity disk appears with subtle scale and opacity
          tl.fromTo(
            '.ind-hub-core',
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.2)' },
            0.4
          );

          // 5. Main orbital path & guide circles draw progressively
          tl.fromTo(
            ['.ind-orbit-ring', '.ind-guide-ring'],
            { strokeDashoffset: 1400, opacity: 0 },
            {
              strokeDashoffset: 0,
              opacity: 1,
              duration: 1.1,
              stagger: 0.12,
              ease: 'power2.inOut',
            },
            0.5
          );

          // 6. Twelve connection indicators (dots) emerge in controlled sequence
          tl.fromTo(
            '.ind-orbit-dot',
            { scale: 0, opacity: 0, transformOrigin: 'center center' },
            { scale: 1, opacity: 1, duration: 0.35, stagger: 0.03 },
            0.8
          );

          // 7. Connector lines radiate outward
          tl.fromTo(
            '.ind-connector-line',
            { strokeDashoffset: 400, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1, duration: 0.5, stagger: 0.025 },
            0.9
          );

          // 8. Twelve industry pill labels emerge around orbit with staggered timing
          tl.fromTo(
            '.ind-orbit-pill',
            { opacity: 0, scale: 0.9, y: 10 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.035,
              ease: 'power2.out',
            },
            1.0
          );
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="industries-preview-section"
      id="industries"
      aria-label="Industries We Serve"
      ref={sectionRef}
    >
      {/* Background Architectural Grid & Topographic Contour Vectors */}
      <div className="ind-bg-canvas" aria-hidden="true">
        {/* Technical Grid Pattern */}
        <div className="ind-bg-grid" />

        {/* Topographic Contour Waveform SVG */}
        <svg
          className="ind-bg-topographic-svg"
          viewBox="0 0 1440 820"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="ind-topographic-cluster ind-topo-top-left">
            <path
              className="ind-topographic-path"
              d="M -60,20 C 140,50 260,140 420,110 C 510,90 570,30 640,-10"
              stroke="rgba(8, 127, 131, 0.32)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M -60,60 C 150,90 280,180 450,150 C 540,130 600,60 680,20"
              stroke="rgba(8, 127, 131, 0.24)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M -60,100 C 160,130 300,220 480,190 C 570,170 630,90 720,50"
              stroke="rgba(8, 127, 131, 0.18)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M -60,140 C 170,170 320,260 510,230 C 600,210 660,120 760,80"
              stroke="rgba(8, 127, 131, 0.12)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
          </g>

          <g className="ind-topographic-cluster ind-topo-bottom-left">
            <path
              className="ind-topographic-path"
              d="M -60,780 C 160,760 300,690 460,730 C 580,760 670,810 750,860"
              stroke="rgba(8, 127, 131, 0.28)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M -60,740 C 150,720 280,650 430,690 C 550,720 640,780 720,830"
              stroke="rgba(8, 127, 131, 0.22)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M -60,700 C 140,680 260,610 400,650 C 520,680 610,750 690,800"
              stroke="rgba(8, 127, 131, 0.16)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M -60,660 C 130,640 240,570 370,610 C 490,640 580,710 660,770"
              stroke="rgba(8, 127, 131, 0.1)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
          </g>

          <g className="ind-topographic-cluster ind-topo-bottom-right">
            <path
              className="ind-topographic-path"
              d="M 960,840 C 1040,760 1170,720 1290,750 C 1370,770 1440,820 1520,850"
              stroke="rgba(8, 127, 131, 0.32)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M 920,810 C 1000,730 1130,690 1250,720 C 1330,740 1410,800 1490,830"
              stroke="rgba(8, 127, 131, 0.24)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M 880,780 C 960,700 1090,660 1210,690 C 1290,710 1380,780 1460,810"
              stroke="rgba(8, 127, 131, 0.18)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M 840,750 C 920,670 1050,630 1170,660 C 1250,680 1350,760 1430,790"
              stroke="rgba(8, 127, 131, 0.12)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
            <path
              className="ind-topographic-path"
              d="M 800,720 C 880,640 1010,600 1130,630 C 1210,650 1320,740 1400,770"
              stroke="rgba(8, 127, 131, 0.08)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="1200"
            />
          </g>

          {/* Architectural Alignment Crosshairs (+) */}
          <g className="ind-grid-crosshairs" stroke="rgba(8, 127, 131, 0.35)" strokeWidth="1">
            <path d="M 120,75 L 120,85 M 115,80 L 125,80" />
            <path d="M 360,235 L 360,245 M 355,240 L 365,240" />
            <path d="M 680,65 L 680,75 M 675,70 L 685,70" />
            <path d="M 140,555 L 140,565 M 135,560 L 145,560" />
            <path d="M 1320,535 L 1320,545 M 1315,540 L 1325,540" />
            <path d="M 1390,175 L 1390,185 M 1385,180 L 1395,180" />
          </g>
        </svg>
      </div>

      <div className="container ind-section-container">
        {/* Main Desktop/Tablet Split Composition */}
        <div className="ind-split-layout">
          {/* Left Column: Editorial Content */}
          <div className="ind-editorial-col">
            <div className="ind-editorial-eyebrow-row">
              <span className="ind-editorial-eyebrow">INDUSTRIES WE SERVE</span>
              <span className="ind-editorial-eyebrow-rule" aria-hidden="true" />
              <span className="ind-editorial-crosshair" aria-hidden="true">+</span>
            </div>

            <h2 className="ind-editorial-headline">
              Intelligence that <br />
              works <span className="ind-teal-highlight">across <br />industries.</span>
            </h2>

            <p className="ind-editorial-desc">
              From customer interactions to complex business operations, we build AI-powered
              solutions that adapt to the way your industry works.
            </p>

            <div className="ind-editorial-cta-wrap">
              <Button variant="primary" size="md" arrow href="/industries">
                Explore All Industries
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Circular Industry Orbit System */}
          <div className="ind-orbit-col" aria-label="Interactive Industry Ecosystem">
            <div className="ind-orbit-stage">
              {/* Underlying SVG Orbit Geometry */}
              <svg
                className="ind-orbit-svg"
                viewBox="0 0 760 640"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Secondary Guide Rings */}
                <circle
                  cx={CX}
                  cy={CY}
                  r="108"
                  className="ind-guide-ring"
                  stroke="rgba(8, 127, 131, 0.12)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <circle
                  cx={CX}
                  cy={CY}
                  r="230"
                  className="ind-guide-ring"
                  stroke="rgba(11, 48, 56, 0.05)"
                  strokeWidth="1"
                />

                {/* Primary Circular Orbital Path */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={R_ORBIT}
                  className="ind-orbit-ring"
                  stroke="rgba(8, 127, 131, 0.28)"
                  strokeWidth="1.5"
                  strokeDasharray="1200"
                />

                {/* Radial Connector Spokes */}
                {orbitCalculations.map((ind) => {
                  const isActive = activeSlug === ind.id;
                  return (
                    <g key={`spoke-${ind.id}`} className="ind-spoke-group">
                      {/* Resting Spoke Line */}
                      <line
                        x1={ind.startX}
                        y1={ind.startY}
                        x2={ind.anchorX}
                        y2={ind.anchorY}
                        className={`ind-connector-line ${isActive ? 'is-active' : ''}`}
                        stroke={isActive ? '#087F83' : 'rgba(8, 127, 131, 0.2)'}
                        strokeWidth={isActive ? 2 : 1}
                        strokeDasharray={isActive ? 'none' : 'none'}
                      />

                      {/* Active Illuminated Beam & Telemetry Wave */}
                      {isActive && (
                        <line
                          x1={ind.startX}
                          y1={ind.startY}
                          x2={ind.anchorX}
                          y2={ind.anchorY}
                          className="ind-active-glow-line"
                          stroke="#83DDE2"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      )}
                    </g>
                  );
                })}

                {/* 12 Orbital Connection Dots */}
                {orbitCalculations.map((ind) => {
                  const isActive = activeSlug === ind.id;
                  return (
                    <g key={`dot-${ind.id}`} className="ind-dot-group">
                      {/* Outer pulse wave on hover */}
                      {isActive && (
                        <circle
                          cx={ind.dotX}
                          cy={ind.dotY}
                          r="14"
                          className="ind-dot-ping"
                          fill="rgba(8, 127, 131, 0.25)"
                        />
                      )}

                      {/* Base Connection Dot */}
                      <circle
                        cx={ind.dotX}
                        cy={ind.dotY}
                        r={isActive ? 7 : 5}
                        className={`ind-orbit-dot ${isActive ? 'is-active' : ''}`}
                        fill="#087F83"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Central Hutomate Brand Identity Element */}
              <div className="ind-hub-core" aria-label="Hutomate Central System">
                <div className="ind-hub-inner">
                  {/* Official Hutomate Master Symbol Asset */}
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 149 146"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ind-hub-symbol-svg"
                    aria-hidden="true"
                  >
                    <circle cx="39" cy="38" r="22" fill="#087F83" />
                    <path
                      d="M 106.0 0.0 L 118.0 0.0 L 124.0 1.0 L 130.0 4.0 L 136.0 8.0 L 141.0 14.0 L 145.0 20.0 L 147.0 28.0 L 148.0 36.0 L 147.0 44.0 L 144.0 52.0 L 138.0 60.0 L 132.0 66.0 L 126.0 69.0 L 120.0 70.0 L 114.0 71.0 L 106.0 71.0 L 98.0 71.0 L 92.0 73.0 L 86.0 75.0 L 80.0 79.0 L 75.0 85.0 L 71.0 91.0 L 69.0 97.0 L 68.0 105.0 L 68.0 113.0 L 66.0 121.0 L 64.0 127.0 L 59.0 133.0 L 54.0 138.0 L 48.0 142.0 L 40.0 144.0 L 32.0 145.0 L 24.0 143.0 L 16.0 140.0 L 10.0 135.0 L 5.0 129.0 L 2.0 121.0 L 0.0 113.0 L 1.0 105.0 L 3.0 97.0 L 7.0 91.0 L 12.0 85.0 L 18.0 81.0 L 24.0 78.0 L 30.0 76.0 L 38.0 76.0 L 46.0 76.0 L 54.0 75.0 L 60.0 72.0 L 66.0 68.0 L 71.0 62.0 L 75.0 56.0 L 77.0 48.0 L 78.0 40.0 L 78.0 32.0 L 80.0 22.0 L 85.0 14.0 L 92.0 7.0 L 98.0 3.0 L 104.0 1.0 Z"
                      fill="#087F83"
                    />
                  </svg>

                  {/* Brand Wordmark */}
                  <span className="ind-hub-wordmark">Hutomate</span>
                </div>
              </div>

              {/* 12 Industry Pill Nodes (Pure Semantic HTML Links) */}
              {orbitCalculations.map((ind) => {
                const IconComponent = ind.icon;
                const isActive = activeSlug === ind.id;
                const isDimmed = activeSlug !== null && !isActive;

                return (
                  <Link
                    key={ind.id}
                    to={`/industries/${ind.id}`}
                    className={`ind-orbit-pill ${isActive ? 'is-active' : ''} ${
                      isDimmed ? 'is-dimmed' : ''
                    }`}
                    style={{
                      left: `${ind.anchorX}px`,
                      top: `${ind.anchorY}px`,
                      '--tx': ind.tx,
                      '--ty': ind.ty,
                    }}
                    onMouseEnter={() => setActiveSlug(ind.id)}
                    onMouseLeave={() => setActiveSlug(null)}
                    onFocus={() => setActiveSlug(ind.id)}
                    onBlur={() => setActiveSlug(null)}
                    aria-label={`${ind.name} - View tailored automation`}
                  >
                    <div className="ind-pill-icon-box" aria-hidden="true">
                      <IconComponent size={17} strokeWidth={2.2} />
                    </div>

                    <div className="ind-pill-text-wrap">
                      {ind.lines.map((line, idx) => (
                        <span key={idx} className="ind-pill-line">
                          {line}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dedicated Mobile Ecosystem (< 768px Viewport) */}
        <div className="ind-mobile-ecosystem">
          {/* Central Hutomate Mobile Brand Node */}
          <div className="ind-mobile-brand-node">
            <div className="ind-mobile-brand-icon">
              <svg
                width="34"
                height="34"
                viewBox="0 0 149 146"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="39" cy="38" r="22" fill="#087F83" />
                <path
                  d="M 106.0 0.0 L 118.0 0.0 L 124.0 1.0 L 130.0 4.0 L 136.0 8.0 L 141.0 14.0 L 145.0 20.0 L 147.0 28.0 L 148.0 36.0 L 147.0 44.0 L 144.0 52.0 L 138.0 60.0 L 132.0 66.0 L 126.0 69.0 L 120.0 70.0 L 114.0 71.0 L 106.0 71.0 L 98.0 71.0 L 92.0 73.0 L 86.0 75.0 L 80.0 79.0 L 75.0 85.0 L 71.0 91.0 L 69.0 97.0 L 68.0 105.0 L 68.0 113.0 L 66.0 121.0 L 64.0 127.0 L 59.0 133.0 L 54.0 138.0 L 48.0 142.0 L 40.0 144.0 L 32.0 145.0 L 24.0 143.0 L 16.0 140.0 L 10.0 135.0 L 5.0 129.0 L 2.0 121.0 L 0.0 113.0 L 1.0 105.0 L 3.0 97.0 L 7.0 91.0 L 12.0 85.0 L 18.0 81.0 L 24.0 78.0 L 30.0 76.0 L 38.0 76.0 L 46.0 76.0 L 54.0 75.0 L 60.0 72.0 L 66.0 68.0 L 71.0 62.0 L 75.0 56.0 L 77.0 48.0 L 78.0 40.0 L 78.0 32.0 L 80.0 22.0 L 85.0 14.0 L 92.0 7.0 L 98.0 3.0 L 104.0 1.0 Z"
                  fill="#087F83"
                />
              </svg>
            </div>
            <div className="ind-mobile-brand-meta">
              <span className="ind-mobile-brand-title">Hutomate Intelligence Mesh</span>
              <span className="ind-mobile-brand-count">12 Specialized Industries Connected</span>
            </div>
          </div>

          {/* 12 Mobile Cards Grid */}
          <div className="ind-mobile-grid">
            {orbitCalculations.map((ind) => {
              const IconComponent = ind.icon;
              const isActive = activeSlug === ind.id;

              return (
                <Link
                  key={`mobile-${ind.id}`}
                  to={`/industries/${ind.id}`}
                  className={`ind-mobile-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveSlug(ind.id)}
                  aria-label={`${ind.name} - View sector detail`}
                >
                  <div className="ind-mobile-card-top">
                    <div className="ind-mobile-card-icon" aria-hidden="true">
                      <IconComponent size={18} strokeWidth={2.2} />
                    </div>
                    <span className="ind-mobile-card-arrow" aria-hidden="true">
                      <ArrowRight size={14} />
                    </span>
                  </div>

                  <span className="ind-mobile-card-title">{ind.name}</span>
                  <span className="ind-mobile-card-tag">{ind.tag}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
