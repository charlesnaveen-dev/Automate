import React, { useRef } from 'react';
import Button from '../components/Button';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import {
  SlackIcon,
  GmailIcon,
  WhatsAppIcon,
  HubSpotIcon,
  ZapierIcon,
  GoogleSheetsIcon,
  SalesforceIcon,
  NotionIcon,
} from '../components/IntegrationIcons';
import './HeroSection.css';

/**
 * HeroSection Component — Cinematic Dark Technology & Editorial Redesign
 * 
 * Features:
 * - Full-bleed flowing abstract teal/navy artwork as primary visual foundation
 * - Multi-layer ambient lighting: deep navy gradient, subtle cyan bloom, violet accent
 * - Pure editorial composition: bold typography, balanced negative space, zero fake dashboards
 * - Refined headline with cyan/lavender treatment: "Make your business work smarter. Not harder."
 * - Dual conversion CTAs with white primary pill and glass secondary button
 * - Grounded bottom integration strip with muted monochrome marks
 * - Guaranteed first-viewport impression across 1366x768, 1440x900, and 1536x864
 */
export default function HeroSection() {
  const heroRef = useRef(null);

  // Guarantee page loads at top viewport on initial navigation
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const integrations = [
    { name: 'Slack', Icon: SlackIcon },
    { name: 'Gmail', Icon: GmailIcon },
    { name: 'WhatsApp', Icon: WhatsAppIcon },
    { name: 'HubSpot', Icon: HubSpotIcon },
    { name: 'Zapier', Icon: ZapierIcon },
    { name: 'Google Sheets', Icon: GoogleSheetsIcon },
    { name: 'Salesforce', Icon: SalesforceIcon },
    { name: 'Notion', Icon: NotionIcon },
  ];

  useGsapContext(heroRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set(
        [
          '.hero-bg-layer',
          '.hero-eyebrow-pill',
          '.hero-headline',
          '.hero-word-1',
          '.hero-word-2',
          '.hero-subtext',
          '.hero-cta-actions',
          '.hero-integrations-dock',
        ],
        { opacity: 1, y: 0, scale: 1 }
      );
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Slow, cinematic entrance of background and content
    tl.fromTo(
      '.hero-bg-img',
      { scale: 1.05, opacity: 0.8 },
      { scale: 1.0, opacity: 1, duration: 1.6, ease: 'power2.out' }
    )
      .fromTo(
        '.hero-eyebrow-pill',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=1.3'
      )
      .fromTo(
        '.hero-word-1',
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
        '-=1.0'
      )
      .fromTo(
        '.hero-word-2',
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.hero-subtext',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.45'
      )
      .fromTo(
        '.hero-cta-actions',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.45'
      )
      .fromTo(
        '.hero-integrations-dock',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.35'
      );
  }, []);

  return (
    <section className="hero-section hero-cinematic" id="hero" ref={heroRef} aria-label="Hutomate Hero Section">
      {/* 1. Full-bleed flowing abstract teal artwork background */}
      <div className="hero-bg-layer" aria-hidden="true">
        <img
          src="/images/hutomate-hero-background.jpg"
          alt=""
          className="hero-bg-img"
          loading="eager"
          decoding="sync"
        />
        {/* Carefully controlled overlays: deep navy/black readability gradient */}
        <div className="hero-overlay-readability" />
        {/* Subtle cyan ambient bloom */}
        <div className="hero-overlay-cyan-bloom" />
        {/* Restrained violet accent glow */}
        <div className="hero-overlay-violet-accent" />
        {/* Gentle edge darkening and seamless transition to subsequent section */}
        <div className="hero-overlay-vignette" />
      </div>

      <div className="hero-container">
        {/* 2. Hero Editorial Composition (Pure typography & negative space) */}
        <div className="hero-editorial-wrap">
          {/* Introductory label */}
          <div className="hero-eyebrow-pill">
            <span className="eyebrow-beacon" aria-hidden="true" />
            <span className="eyebrow-text">AI SYSTEMS · INTELLIGENT AUTOMATION</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            <span className="hero-headline-word hero-word-1">
              <span className="headline-accent-cyan">AI-Powered.</span>
            </span>{' '}
            <span className="hero-headline-word hero-word-2">
              <span className="headline-accent-white">Business-Engineered.</span>
            </span>
          </h1>

          {/* Supporting content */}
          <p className="hero-subtext">
            Intelligent automation and AI-driven solutions designed to transform business operations, streamline workflows, and accelerate growth.
          </p>

          {/* Dual Call-to-Action Group */}
          <div className="hero-cta-actions">
            <Button
              variant="cinematic-primary"
              size="md"
              arrow
              href="#contact"
            >
              Discuss Your Project
            </Button>
            <Button
              variant="cinematic-secondary"
              size="md"
              href="/capabilities"
            >
              Explore Our Capabilities
            </Button>
          </div>
        </div>

        {/* 6. Integration Strip positioned towards the bottom of the Hero */}
        <div className="hero-integrations-dock" aria-label="Integrated platforms">
          <div className="integrations-dock-inner">
            <span className="dock-caption">Works seamlessly with</span>
            <div className="dock-logos-track">
              {integrations.map((item, idx) => {
                const { Icon } = item;
                return (
                  <React.Fragment key={item.name}>
                    {idx > 0 && <span className="dock-separator" aria-hidden="true" />}
                    <div className="dock-item" title={item.name}>
                      <span className="dock-icon-box" aria-hidden="true">
                        <Icon size={15} />
                      </span>
                      <span className="dock-item-label">{item.name}</span>
                    </div>
                  </React.Fragment>
                );
              })}
              <span className="dock-separator" aria-hidden="true" />
              <div className="dock-more-pill">
                <span>and 200+ more platforms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
