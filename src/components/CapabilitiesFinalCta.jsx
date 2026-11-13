import React from 'react';
import { Clock, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { Link } from '../router/Router';
import './CapabilitiesFinalCta.css';

export default function CapabilitiesFinalCta() {
  return (
    <section className="cap-cta-section" id="capabilities-cta" aria-label="Start Your Project">
      {/* Background radial teal bloom */}
      <div className="cap-cta-bloom" aria-hidden="true" />
      <div className="cap-cta-grid-lines" aria-hidden="true" />

      <div className="container">
        <div className="cap-cta-card reveal-on-scroll">
          <div className="cap-cta-split">
            {/* ------------------------------------------------------------------
                LEFT COLUMN: Headline, Supporting Text & Action Buttons
                ------------------------------------------------------------------ */}
            <div className="cap-cta-copy-col">
              <div className="cap-cta-badge">
                <span className="cap-cta-beacon" aria-hidden="true" />
                <span>START YOUR TRANSFORMATION</span>
              </div>

              <h2 className="cap-cta-headline">
                Ready to automate <br />
                <span className="cap-cta-headline-accent">what slows you down?</span>
              </h2>

              <p className="cap-cta-subhead">
                Let&apos;s explore how intelligent automation can make your business work smarter.
              </p>

              {/* Action Buttons */}
              <div className="cap-cta-actions">
                <Link to="/contact" className="cap-cta-btn cap-cta-btn--primary">
                  <span>Discuss Your Project</span>
                  <ArrowRight size={16} className="cap-cta-btn-arrow" />
                </Link>

                <Link to="/process" className="cap-cta-btn cap-cta-btn--secondary">
                  <span>See Our Process</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="cap-cta-trust-row">
                <div className="cap-trust-item">
                  <Clock size={13} className="cap-trust-icon" aria-hidden="true" />
                  <span>24-Hour Review</span>
                </div>
                <span className="cap-trust-divider" aria-hidden="true">•</span>
                <div className="cap-trust-item">
                  <ShieldCheck size={13} className="cap-trust-icon" aria-hidden="true" />
                  <span>Zero-Retention Privacy</span>
                </div>
                <span className="cap-trust-divider" aria-hidden="true">•</span>
                <div className="cap-trust-item">
                  <Cpu size={13} className="cap-trust-icon" aria-hidden="true" />
                  <span>Client-Owned Code</span>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------------
                RIGHT COLUMN: Layered Hutomate Brand Visual
                ------------------------------------------------------------------ */}
            <div className="cap-cta-visual-col" aria-hidden="true">
              <div className="cap-brand-visual-canvas">
                {/* Back ambient radial glow */}
                <div className="cap-brand-backglow" />

                {/* Layer 1: Concentric SVG Orbital Rings */}
                <svg
                  className="cap-brand-orbital-svg"
                  viewBox="0 0 340 340"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="170"
                    cy="170"
                    r="150"
                    stroke="#167C80"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    strokeOpacity="0.45"
                  />
                  <circle
                    cx="170"
                    cy="170"
                    r="115"
                    stroke="#83DDE2"
                    strokeWidth="1.2"
                    strokeDasharray="6 12"
                    strokeOpacity="0.55"
                  />
                  <circle
                    cx="170"
                    cy="170"
                    r="80"
                    stroke="#167C80"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                  {/* Orbital tick dots */}
                  <circle cx="170" cy="20" r="3" fill="#83DDE2" />
                  <circle cx="285" cy="170" r="3" fill="#83DDE2" />
                  <circle cx="170" cy="320" r="3" fill="#167C80" />
                  <circle cx="55" cy="170" r="3" fill="#167C80" />
                </svg>

                {/* Layer 2: Tilted Back Glass Plate */}
                <div className="cap-brand-plate-back" />

                {/* Layer 3: Focal Glass Plate with Authentic Hutomate Wordmark */}
                <div className="cap-brand-plate-focal">
                  <div className="cap-brand-wordmark-wrap">
                    <img
                      src="/hutomate_wordmark_white.png"
                      alt="Hutomate"
                      className="cap-focal-wordmark-img"
                      height={30}
                    />
                  </div>
                  <div className="cap-brand-label-lockup">
                    <span className="cap-brand-tagline">INTELLIGENT SYSTEMS</span>
                  </div>
                </div>

                {/* Layer 4: Floating Satellite Badge (Top Right) */}
                <div className="cap-brand-chip cap-brand-chip--top">
                  <span className="cap-chip-dot" />
                  <span className="cap-chip-text">System Active</span>
                </div>

                {/* Layer 5: Floating Satellite Badge (Bottom Left) */}
                <div className="cap-brand-chip cap-brand-chip--bottom">
                  <ShieldCheck size={13} className="cap-chip-icon" />
                  <span className="cap-chip-text">Deterministic Guardrails</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
