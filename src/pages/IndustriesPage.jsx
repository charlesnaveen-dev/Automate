import React, { useState, useRef, useMemo } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import { Link } from '../router/Router';
import { INDUSTRIES_DATA, INDUSTRY_CATEGORIES } from '../data/industriesData';
import './IndustriesPage.css';

// 4 Universal Operational Challenges (Relatable, human, grounded in real business experience)
const COMMON_CHALLENGES = [
  {
    num: '01',
    title: 'Missed opportunities',
    desc: 'When prospective client calls or web inquiries arrive while your team is in consultations, on job sites, or after business hours, clients often reach out to another provider before morning.',
  },
  {
    num: '02',
    title: 'Repetitive manual work',
    desc: 'Skilled professionals spend hours every week re-keying customer information, drafting standard intake files, and moving data manually between spreadsheets and CRMs.',
  },
  {
    num: '03',
    title: 'Delayed customer responses',
    desc: 'Clients expect quick answers. Inboxes backlogged with routine inquiries slow down appointment bookings, quote approvals, and customer communication.',
  },
  {
    num: '04',
    title: 'Disconnected business operations',
    desc: 'Specialized industry software tools that do not communicate automatically create manual handoffs, mismatched client records, and invisible coordination bottlenecks.',
  },
];

// Featured Industry Highlights (Refined editorial presentation)
const FEATURED_SLUGS = ['legal', 'healthcare', 'home-services'];

export default function IndustriesPage() {
  const pageRef = useRef(null);
  const sliderRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  usePageMetadata({
    title: 'Industries We Serve — Sector-Specific AI Implementation | Hutomate',
    description: 'Explore tailored AI agents, voice receptionists, and automation pipelines engineered for legal, healthcare, real estate, trades, and 12 core business sectors.',
    path: '/industries',
  });

  useScrollReveal(activeCategory);

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.ind-hero-bg, .ind-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.ind-hero-bg',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        '.ind-hero-headline',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.6'
      )
      .fromTo(
        '.ind-hero-copy',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.ind-hero-actions',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      );
  }, []);

  const filteredIndustries = useMemo(() => {
    if (activeCategory === 'all') return INDUSTRIES_DATA;
    return INDUSTRIES_DATA.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const featuredIndustries = useMemo(() => {
    return FEATURED_SLUGS.map((slug) => INDUSTRIES_DATA.find((item) => item.id === slug)).filter(Boolean);
  }, []);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;
    const cardWidth = 380;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToSectors = (e) => {
    e.preventDefault();
    const target = document.getElementById('sectors');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="industries-page-redesign" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO — FULL-COVER PHOTOGRAPHY & EDITORIAL CLARITY
          ========================================================================= */}
      <section className="ind-hero-section" aria-label="Industries Overview">
        <div className="ind-hero-bg-wrapper" aria-hidden="true">
          <img
            src="/images/hero-industries.jpg"
            alt="Modern business workplace environment"
            className="ind-hero-bg"
            loading="eager"
            decoding="sync"
          />
          <div className="ind-hero-overlay" />
        </div>

        <div className="container ind-hero-container">
          <div className="ind-hero-content">
            <h1 className="ind-hero-headline">
              Every Industry Has Its Own Challenges.{' '}
              <span className="ind-headline-teal">We Build Around Them.</span>
            </h1>

            <p className="ind-hero-copy">
              From customer conversations to complex business operations, Hutomate builds intelligent automation around the way your business works.
            </p>

            <div className="ind-hero-actions">
              <a
                href="#sectors"
                className="btn btn-primary btn-lg"
                onClick={scrollToSectors}
              >
                <span className="btn-text">Explore Industry Sectors</span>
                <span className="btn-arrow" aria-hidden="true">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 1.5L13 6M13 6L8.5 10.5M13 6H1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              <Button variant="secondary" size="lg" href="/contact">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: CROSS-INDUSTRY FRICTION — RELATABLE BUSINESS CHALLENGES
          ========================================================================= */}
      <section className="ind-friction-section" aria-label="Common Operational Challenges">
        <div className="container">
          <div className="ind-friction-header reveal-on-scroll">
            <span className="ind-section-kicker">OPERATIONAL REALITY</span>
            <h2 className="ind-section-heading">
              Different Businesses. Similar Operational Challenges.
            </h2>
            <p className="ind-section-subhead">
              Every sector uses different tools and terminology, but the administrative friction that slows down growth and burns staff bandwidth follows four predictable patterns.
            </p>
          </div>

          <div className="ind-friction-grid reveal-on-scroll">
            {COMMON_CHALLENGES.map((ch, idx) => (
              <div key={idx} className="ind-friction-card">
                <span className="ind-friction-num">{ch.num}</span>
                <h3 className="ind-friction-title">{ch.title}</h3>
                <p className="ind-friction-desc">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: FEATURED SECTOR HIGHLIGHTS (Asymmetric Editorial Cards)
          ========================================================================= */}
      <section className="ind-featured-section" aria-label="Featured Industry Solutions">
        <div className="container">
          <div className="ind-featured-header reveal-on-scroll">
            <span className="ind-section-kicker">FEATURED IMPLEMENTATIONS</span>
            <h2 className="ind-section-heading">
              Built for how modern firms actually operate.
            </h2>
            <p className="ind-section-subhead">
              Explore how tailored intelligent systems eliminate specific operational bottlenecks in high-demand business environments.
            </p>
          </div>

          <div className="ind-featured-grid reveal-on-scroll">
            {/* Primary Featured Card: Legal Practices */}
            {featuredIndustries[0] && (
              <div className="ind-highlight-card-primary">
                <div className="ind-highlight-media">
                  <img
                    src={featuredIndustries[0].image}
                    alt={featuredIndustries[0].name}
                    className="ind-highlight-img"
                    loading="lazy"
                  />
                  <div className="ind-highlight-overlay" />
                  <span className="ind-category-pill">{featuredIndustries[0].categoryLabel}</span>
                </div>
                <div className="ind-highlight-body">
                  <span className="ind-highlight-sub">{featuredIndustries[0].tag}</span>
                  <h3 className="ind-highlight-title">{featuredIndustries[0].name}</h3>
                  <p className="ind-highlight-lead">{featuredIndustries[0].solution}</p>

                  <div className="ind-highlight-friction">
                    <span className="ind-friction-label">Primary Challenge:</span>
                    <p className="ind-friction-text">{featuredIndustries[0].challenges[0]}</p>
                  </div>

                  <div className="ind-highlight-footer">
                    <Link
                      to={`/industries/${featuredIndustries[0].id}`}
                      className="ind-highlight-link"
                    >
                      <span>Explore Legal Practices</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary Asymmetric Pair: Healthcare & Home Services */}
            <div className="ind-highlight-pair">
              {featuredIndustries.slice(1).map((item) => (
                <div key={item.id} className="ind-highlight-card-secondary">
                  <div className="ind-highlight-media secondary">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="ind-highlight-img"
                      loading="lazy"
                    />
                    <div className="ind-highlight-overlay" />
                    <span className="ind-category-pill">{item.categoryLabel}</span>
                  </div>
                  <div className="ind-highlight-body secondary">
                    <span className="ind-highlight-sub">{item.tag}</span>
                    <h3 className="ind-highlight-title secondary">{item.name}</h3>
                    <p className="ind-highlight-lead secondary">{item.solution}</p>

                    <div className="ind-highlight-friction compact">
                      <span className="ind-friction-label">Primary Challenge:</span>
                      <p className="ind-friction-text">{item.challenges[0]}</p>
                    </div>

                    <div className="ind-highlight-footer">
                      <Link
                        to={`/industries/${item.id}`}
                        className="ind-highlight-link"
                      >
                        <span>Explore {item.name}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: INTERACTIVE SECTOR SHOWCASE — ALL 12 INDUSTRIES ACCESSIBLE
          ========================================================================= */}
      <section className="ind-directory-section" id="sectors" aria-label="All 12 Industry Sectors">
        <div className="container">
          <div className="ind-directory-header reveal-on-scroll">
            <div className="ind-directory-header-left">
              <span className="ind-section-kicker">SECTOR DIRECTORY</span>
              <h2 className="ind-section-heading">
                Explore All 12 Industry Sectors
              </h2>
              <p className="ind-section-subhead">
                Browse our complete range of specialized industry implementations. Select an industry to review its dedicated architecture and workflows.
              </p>
            </div>

            <div className="ind-slider-controls-wrap">
              <button
                type="button"
                className="ind-nav-arrow-btn"
                onClick={() => scrollSlider('left')}
                aria-label="Scroll left through industries"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="ind-nav-arrow-btn"
                onClick={() => scrollSlider('right')}
                aria-label="Scroll right through industries"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Clean Category Filter Tabs */}
          <div className="ind-filter-bar reveal-on-scroll" role="tablist" aria-label="Filter by sector group">
            {INDUSTRY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`ind-filter-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Horizontal Showcase Slider */}
          <div className="ind-slider-track" ref={sliderRef} tabIndex={0} aria-label="Industries carousel">
            {filteredIndustries.map((item) => (
              <div key={item.id} className="ind-carousel-card">
                <div className="ind-card-photo-box">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="ind-card-photo"
                    loading="lazy"
                  />
                  <div className="ind-photo-gradient" />
                  <span className="ind-card-cat">{item.categoryLabel}</span>
                </div>
                <div className="ind-card-content">
                  <h3 className="ind-card-heading">{item.name}</h3>
                  <p className="ind-card-summary">{item.solution}</p>

                  <div className="ind-card-challenge-pill">
                    <span className="ind-pill-label">Key Challenge:</span>
                    <p className="ind-pill-copy">{item.challenges[0]}</p>
                  </div>

                  <div className="ind-card-action-row">
                    <Link
                      to={`/industries/${item.id}`}
                      className="ind-card-action-link"
                    >
                      <span>Explore Industry Details</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: HOW WE IMPLEMENT FOR YOUR BUSINESS
          (Replacing generic capability repetition with genuine deployment steps)
          ========================================================================= */}
      <section className="ind-process-overview-section" aria-label="Implementation Approach">
        <div className="container">
          <div className="ind-process-header reveal-on-scroll">
            <span className="ind-section-kicker">OUR APPROACH</span>
            <h2 className="ind-section-heading">
              How we deploy automation for your business.
            </h2>
            <p className="ind-section-subhead">
              We do not force generic software onto your operations. Every deployment is architected around your existing software tools, security requirements, and team cadence.
            </p>
          </div>

          <div className="ind-process-steps-grid reveal-on-scroll">
            <div className="ind-process-step-card">
              <span className="ind-step-number">01</span>
              <h3 className="ind-step-title">Workflow Audit &amp; Tool Inspection</h3>
              <p className="ind-step-desc">
                We review how client inquiries, scheduling, and paperwork currently flow through your firm. We identify high-friction manual bottlenecks and map out API compatibility with your existing software stack.
              </p>
            </div>

            <div className="ind-process-step-card">
              <span className="ind-step-number">02</span>
              <h3 className="ind-step-title">Guarded Architecture &amp; Integration</h3>
              <p className="ind-step-desc">
                We engineer intelligent voice systems, document pipelines, or task agents with deterministic confidence thresholds. Staff maintain full approval gates on sensitive customer communication and critical records.
              </p>
            </div>

            <div className="ind-process-step-card">
              <span className="ind-step-number">03</span>
              <h3 className="ind-step-title">Live Testing &amp; Ongoing Optimization</h3>
              <p className="ind-step-desc">
                We conduct sandbox testing with real-world scenarios before going live. Your team receives clear operational guidelines, and continuous telemetry monitors accuracy and turnaround times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: FINAL CTA — IMMERSIVE DARK NAVY COMPOSITION
          ========================================================================= */}
      <section className="ind-final-cta-section" aria-label="Discuss Your Industry Project">
        <div className="ind-final-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="ind-final-cta-inner reveal-on-scroll">
            <span className="ind-final-kicker">LET&apos;S TALK</span>
            <h2 className="ind-final-heading">
              Let&apos;s Build Around Your Business.
            </h2>
            <p className="ind-final-desc">
              Tell us where your business spends too much time. Let&apos;s explore how intelligent automation can make a difference.
            </p>
            <div className="ind-final-actions">
              <Button variant="primary" size="lg" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/capabilities">
                Explore Our Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
