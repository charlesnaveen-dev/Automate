import React from 'react';
import Button from '../components/Button';
import './BrandIntroSection.css';

/**
 * Section 02 — Our Philosophy
 * 
 * Editorial Three-Card Layout matching Rootstrap reference:
 * - Differentiated dark surfaces with subtle borders and 20px rounded corners
 * - High-contrast readable typography (crisp white titles and light slate descriptions)
 * - Three-column desktop, two-column tablet, single-column mobile
 * - Preserves exact original philosophy content and numbered principles
 */
export default function BrandIntroSection() {
  const pillars = [
    {
      id: 'friction',
      num: '01',
      title: '01 — Eliminate Repetitive Friction',
      desc: 'Free human teams from repetitive data entry, email triaging, and manual system syncing.',
    },
    {
      id: 'tools',
      num: '02',
      title: '02 — Connect Fragmented Tools',
      desc: 'Create seamless data bridges between your CRM, communications, booking calendars, and databases.',
    },
    {
      id: 'agency',
      num: '03',
      title: '03 — Preserve Human Agency',
      desc: 'Autonomous does not mean unsupervised. We design strict confidence thresholds and human approval gates.',
    },
  ];

  return (
    <section className="brand-intro-section" id="intro" aria-label="Our Philosophy">
      {/* Subtle atmospheric ambient glow */}
      <div className="brand-intro-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Heading & Editorial Introduction */}
        <div className="brand-intro-editorial reveal-on-scroll">
          <div className="intro-badge">
            <span className="intro-badge-text">OUR PHILOSOPHY</span>
          </div>

          <h2 className="intro-headline">
            Business operations deserve{' '}
            <span className="intro-headline-accent">better technology.</span>
          </h2>

          <p className="intro-body">
            From repetitive processes to disconnected systems, businesses face operational challenges that consume valuable time. Hutomate brings AI, automation and software engineering together to make everyday operations more intelligent and connected.
          </p>

          <div className="intro-cta-wrap">
            <Button variant="cinematic-primary" size="md" arrow href="/about">
              Our Vision &amp; Philosophy
            </Button>
            <Button variant="cinematic-secondary" size="md" href="/capabilities">
              Explore Our Capabilities
            </Button>
          </div>
        </div>

        {/* Three-Column Philosophy Cards Grid */}
        <div className="intro-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`intro-pillar-card reveal-on-scroll reveal-delay-${idx + 1}`}
            >
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
