import React from 'react';
import Button from './Button';
import './CtaBanner.css';

export default function CtaBanner({
  title = "Ready to discuss your business automation?",
  description = "Tell us about your manual workflows, software stack, and what slows your team down. We'll assess feasibility and propose a clear implementation plan.",
  buttonText = "Discuss Your Project",
  buttonHref = "/start-project",
  secondaryButtonText = "Explore Blueprints",
  secondaryButtonHref = "/blueprints",
}) {
  return (
    <section className="cta-banner-section" aria-label="Call to action">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-banner-inner">
            <div className="cta-banner-eyebrow">
              <span className="cta-dot" aria-hidden="true" />
              <span>PROJECT INITIATION</span>
            </div>
            <h2 className="cta-banner-title">{title}</h2>
            <p className="cta-banner-desc">{description}</p>
            <div className="cta-banner-actions">
              <Button variant="primary" size="lg" arrow href={buttonHref}>
                {buttonText}
              </Button>
              {secondaryButtonText && (
                <Button variant="secondary" size="lg" href={secondaryButtonHref}>
                  {secondaryButtonText}
                </Button>
              )}
            </div>
            <div className="cta-banner-footnote">
              <span>Scoped &amp; built to order</span>
              <span className="dot-divider">•</span>
              <span>No vendor lock-in</span>
              <span className="dot-divider">•</span>
              <span>Working with businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
