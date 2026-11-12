import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CapabilitiesCardGrid from '../components/CapabilitiesCardGrid';
import HowItWorksTogether from '../components/HowItWorksTogether';
import DesignedAroundBusiness from '../components/DesignedAroundBusiness';
import CapabilitiesFinalCta from '../components/CapabilitiesFinalCta';
import './CapabilitiesPage.css';

export default function CapabilitiesPage() {
  usePageMetadata({
    title: 'Capabilities — AI Agents, Workflow Automation & Intelligent Systems | Hutomate',
    description: 'Intelligence built around the way your business works. Explore Hutomate’s core capabilities: AI Agents, Workflow Automation, Voice AI, and Custom AI Solutions.',
    path: '/capabilities',
  });

  useScrollReveal();

  return (
    <div className="capabilities-page-view">
      {/* ----------------------------------------------------------------------
          SECTION 01: HERO & FOUR CORE CAPABILITY CARDS
          ---------------------------------------------------------------------- */}
      <section className="cap-overview-hero-section" aria-label="Capabilities Introduction">
        {/* Subtle decorative bottom wave ribbon */}
        <div className="cap-hero-wave-wrap" aria-hidden="true">
          <svg
            className="cap-hero-wave-svg"
            viewBox="0 0 1440 240"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="capHeroWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#167C80" stopOpacity="0.14" />
                <stop offset="60%" stopColor="#83DDE2" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#83DDE2" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M -60 240 C 180 180 340 220 540 180 C 740 140 880 200 1100 240 Z"
              fill="url(#capHeroWaveGrad)"
            />
          </svg>
        </div>

        <div className="container cap-overview-container">
          {/* Header Copy */}
          <div className="cap-hero-text-block reveal-on-scroll">
            <div className="cap-hero-eyebrow-pill">
              <span className="cap-hero-eyebrow-dot" />
              <span className="cap-hero-eyebrow-text">CAPABILITIES</span>
            </div>

            <h1 className="cap-hero-title">
              Intelligence built around the <br className="cap-hero-br" />
              way your <span className="cap-hero-title-accent">business works.</span>
            </h1>

            <p className="cap-hero-desc">
              Hutomate brings AI, automation and intelligent systems together to simplify operations, connect your tools and help your business move forward.
            </p>
          </div>

          {/* Four Capability Cards */}
          <div className="reveal-on-scroll reveal-delay-2">
            <CapabilitiesCardGrid />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 02: HOW IT ALL WORKS TOGETHER
          Flowing curved animated SVG path across 4 integrated stages:
          01 Capture -> 02 Automate -> 03 Execute -> 04 Grow
          ---------------------------------------------------------------------- */}
      <HowItWorksTogether />

      {/* ----------------------------------------------------------------------
          SECTION 03: DESIGNED AROUND YOUR BUSINESS
          Editorial split composition presenting the 3 foundational principles:
          Tailored Solutions • Seamless Integrations • Human-Guided
          ---------------------------------------------------------------------- */}
      <DesignedAroundBusiness />

      {/* ----------------------------------------------------------------------
          SECTION 04: FINAL CLOSING CTA SECTION
          Wide horizontal composition with layered Hutomate brand visual
          ---------------------------------------------------------------------- */}
      <CapabilitiesFinalCta />
    </div>
  );
}
