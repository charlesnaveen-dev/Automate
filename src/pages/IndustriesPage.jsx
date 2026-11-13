import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import { Link } from '../router/Router';
import { INDUSTRIES_DATA } from '../data/industriesData';
import './IndustriesPage.css';

// Short, clear, business-friendly descriptions for each of the 12 industries
const INDUSTRY_DESCRIPTIONS = {
  legal: 'Autonomous intake, conflict screening, and retainer generation engineered to capture prospective casework 24/7 without consuming billable attorney hours.',
  'real-estate': 'Instant buyer inquiry triage, financing pre-qualification, and automated showing coordination integrated directly with your CRM and calendar.',
  healthcare: 'HIPAA-conscious phone receptionists, automated appointment scheduling, and digital intake routing that streamline clinic front-desk operations.',
  'home-services': '24/7 emergency dispatch and call triage that capture job requests, quote details, and book technician arrival windows directly into field software.',
  'financial-services': 'Event-driven document verification, client onboarding pipelines, and automated bookkeeping extraction that eliminate clerical data entry.',
  insurance: 'Conversational intake agents that gather policy requirements upfront, pre-fill carrier rating platforms, and automate policy document retrieval.',
  construction: 'Site-to-office communication automation with real-time RFI logging, subcontractor compliance tracking, and field receipt reconciliation.',
  'property-management': '24/7 tenant maintenance triage that separates emergencies from routine repairs, dispatches approved vendors, and automates tour bookings.',
  'professional-services': 'Automated proposal generation, consultative lead qualification, and immediate client workspace provisioning upon contract execution.',
  automotive: 'Voice AI service scheduling, automatic status updates, and digital repair authorization workflows that keep service bays operating at capacity.',
  'it-services': 'Autonomous Tier-1 ticket triage, SOP knowledge retrieval, and SLA-governed outage escalation integrated with PSA and RMM stacks.',
  'ecommerce-logistics': 'Real-time order tracking resolution, automated returns management, and proactive shipping exception alerts across multiple warehouses.',
};

export default function IndustriesPage() {
  const pageRef = useRef(null);

  usePageMetadata({
    title: 'Industries — Sector-Specific AI & Automation Engineering | Hutomate',
    description: 'Technology engineered for your industry. Discover how Hutomate adapts autonomous AI agents, voice receptionists, and workflow automation to 12 core business sectors.',
    path: '/industries',
  });

  useScrollReveal();

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.ind-editorial-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.ind-editorial-kicker',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      .fromTo(
        '.ind-editorial-headline',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.35'
      )
      .fromTo(
        '.ind-editorial-intro',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
  }, []);

  return (
    <div className="industries-editorial-page" ref={pageRef}>
      {/* =========================================================================
          HERO SECTION — MODERN LIGHT EDITORIAL COMPOSITION
          Retains the exact required headline: "Technology engineered for your industry."
          ========================================================================= */}
      <section className="ind-editorial-hero-section" aria-label="Industries Overview">
        <div className="container">
          <div className="ind-editorial-hero-content">
            <span className="ind-editorial-kicker">SECTOR SPECIALIZATION</span>
            <h1 className="ind-editorial-headline">
              Technology engineered for your industry.
            </h1>
            <p className="ind-editorial-intro">
              Every sector operates with distinct communication rhythms, compliance demands, and specialized software stacks. Hutomate designs, integrates, and deploys autonomous AI agents and automated workflows tailored to the exact operational realities of your business.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRY CARDS COLLECTION — 12 CARDS IN ONE CONSISTENT DESIGN SYSTEM
          Layout: 3 columns desktop, 2 columns tablet, 1 column mobile
          ========================================================================= */}
      <section className="ind-editorial-grid-section" aria-label="Industry Solutions Collection">
        <div className="container">
          <div className="ind-editorial-grid">
            {INDUSTRIES_DATA.map((item, idx) => {
              const description = INDUSTRY_DESCRIPTIONS[item.id] || item.solution;

              return (
                <Link
                  key={item.id}
                  to={`/industries/${item.id}`}
                  className={`ind-editorial-card reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
                  aria-label={`Explore ${item.name} automation solutions`}
                >
                  <div className="ind-card-media">
                    <img
                      src={item.image}
                      alt={`${item.name} workplace environment`}
                      className="ind-card-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="ind-card-body">
                    <h2 className="ind-card-title">{item.name}</h2>
                    <p className="ind-card-desc">{description}</p>
                    <div className="ind-card-link-row">
                      <span className="ind-card-link-text">Explore industry</span>
                      <ArrowRight size={16} className="ind-card-link-arrow" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING SECTION — REFINED EDITORIAL CONSULTATION BAND
          ========================================================================= */}
      <section className="ind-editorial-cta-section" aria-label="Discuss Your Industry Project">
        <div className="container">
          <div className="ind-editorial-cta-box reveal-on-scroll">
            <div className="ind-editorial-cta-text">
              <span className="ind-editorial-kicker">BESPOKE ARCHITECTURES</span>
              <h2 className="ind-editorial-cta-heading">
                Have a specialized industry or custom operating model?
              </h2>
              <p className="ind-editorial-cta-subhead">
                Our engineers design custom automation pipelines and integrations for proprietary systems, niche business workflows, and hybrid environments.
              </p>
            </div>
            <div className="ind-editorial-cta-actions">
              <Button variant="primary" size="lg" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/capabilities">
                Explore Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
