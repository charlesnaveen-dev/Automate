import React from 'react';
import './CapabilitiesPageHero.css';

/**
 * Redesigned Capabilities Page Hero
 * Sophisticated Monochromatic Technical Hero:
 * - High-contrast editorial typography
 * - Architectural grid pattern and monospace specs
 * - Key performance indicators ribbon
 */
export default function CapabilitiesPageHero() {
  const specs = [
    { value: '99.4%', label: 'Intent Classification Accuracy' },
    { value: '< 1.2s', label: 'Grounded Execution Loop' },
    { value: '100%', label: 'Client-Owned Code & Schemas' },
    { value: 'SOC-2', label: 'Aligned Enterprise Security' },
  ];

  return (
    <section className="cap-hero-section" aria-label="Core Capabilities">
      {/* Background architectural grid */}
      <div className="cap-hero-grid-bg" aria-hidden="true" />

      <div className="container">
        <div className="cap-hero-content reveal-on-scroll">
          <div className="cap-hero-badge">
            <span className="cap-hero-dot" />
            <span className="cap-hero-badge-text">CORE CAPABILITIES // 04 DISCIPLINES</span>
          </div>

          <h1 className="cap-hero-headline">
            Intelligence built around the <span className="cap-hero-accent">way you work.</span>
          </h1>

          <p className="cap-hero-subhead">
            We architect and deploy practical intelligent systems that eliminate administrative drag, integrate fragmented software tools, and help your enterprise scale efficiently with strict human oversight.
          </p>

          {/* Architectural Metrics Bar */}
          <div className="cap-hero-specs-grid">
            {specs.map((item, idx) => (
              <div key={idx} className="cap-hero-spec-item">
                <span className="cap-hero-spec-val">{item.value}</span>
                <span className="cap-hero-spec-lbl">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
