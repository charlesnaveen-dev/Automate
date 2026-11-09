import React from 'react';
import { ShieldCheck, Clock, Globe } from 'lucide-react';
import Button from '../components/Button';
import './FinalCtaSection.css';

export default function FinalCtaSection() {
  return (
    <section className="final-cta-section" id="final-cta" aria-label="Start Your Project">
      {/* Background cinematic radial bloom */}
      <div className="final-cta-bloom" aria-hidden="true" />
      <div className="final-cta-mesh" aria-hidden="true" />

      <div className="container">
        <div className="final-cta-card reveal-on-scroll">
          <div className="final-cta-content">
            <div className="final-cta-badge">
              <span className="cta-beacon" aria-hidden="true" />
              <span>START A CONVERSATION</span>
            </div>

            <h2 className="final-cta-headline">
              Let&apos;s make your business{' '}
              <span className="final-headline-accent">work smarter.</span>
            </h2>

            <p className="final-cta-subhead">
              Tell us what you want to improve. We&apos;ll explore how AI, automation and connected systems can help your business eliminate manual friction and scale.
            </p>

            <div className="final-cta-actions">
              <Button variant="cinematic-primary" size="lg" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="cinematic-secondary" size="lg" href="/capabilities">
                Explore Our Capabilities
              </Button>
            </div>

            {/* Trust & Region Badges */}
            <div className="final-cta-trust-strip">
              <div className="trust-item">
                <Clock size={14} className="trust-icon" aria-hidden="true" />
                <span>24-Hour Engineering Review</span>
              </div>
              <span className="trust-divider" aria-hidden="true">•</span>
              <div className="trust-item">
                <Globe size={14} className="trust-icon" aria-hidden="true" />
                <span>Serving USA, UK, Australia &amp; Worldwide</span>
              </div>
              <span className="trust-divider" aria-hidden="true">•</span>
              <div className="trust-item">
                <ShieldCheck size={14} className="trust-icon" aria-hidden="true" />
                <span>Zero-Retention Privacy Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
