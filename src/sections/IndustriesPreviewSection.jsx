import React from 'react';
import { ArrowRight, Scale, Building2, HeartPulse, Wrench, Landmark, Truck } from 'lucide-react';
import Button from '../components/Button';
import { Link } from '../router/Router';
import './IndustriesPreviewSection.css';

const FEATURED_SECTORS = [
  {
    slug: 'legal',
    name: 'Legal Practices',
    tag: 'REGULATED ADVISORY',
    desc: 'Confidential client intake, conflict-checking workflows, document extraction, and case management synchronization.',
    highlight: 'Automated client intake & matter onboarding',
    icon: Scale,
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & Property',
    tag: 'TRANSACTIONS & LEASING',
    desc: 'Instant buyer and tenant inquiry response, viewing scheduler, lease document processing, and maintenance dispatch.',
    highlight: 'Instant listing responder & viewing calendar coordinator',
    icon: Building2,
  },
  {
    slug: 'healthcare',
    name: 'Healthcare Practices',
    tag: 'CLINICAL OPERATIONS',
    desc: 'Patient intake automation, appointment triage, referral coordination, and EHR record synchronization.',
    highlight: 'Intake automation & clinical calendar sync',
    icon: HeartPulse,
  },
  {
    slug: 'home-services',
    name: 'Home Services & Contractors',
    tag: 'FIELD DISPATCH',
    desc: '24/7 conversational call answering, emergency job triage, dynamic technician dispatching, and invoicing sync.',
    highlight: '24/7 Voice call answering & field dispatch sync',
    icon: Wrench,
  },
  {
    slug: 'financial-services',
    name: 'Financial Services & Wealth',
    tag: 'WEALTH & ADVISORY',
    desc: 'Client onboarding pipelines, KYC document extraction, quarterly report generation, and meeting prep dossiers.',
    highlight: 'KYC extraction & portfolio meeting preparation',
    icon: Landmark,
  },
  {
    slug: 'ecommerce-logistics',
    name: 'E-Commerce & Logistics',
    tag: 'SUPPLY CHAIN & FULFILLMENT',
    desc: 'Order tracking deflection, return authorization triage, warehouse ERP synchronization, and inventory exception routing.',
    highlight: 'Omnichannel support triage & ERP inventory sync',
    icon: Truck,
  },
];

export default function IndustriesPreviewSection() {
  return (
    <section className="industries-preview-section" id="industries" aria-label="Industries Preview">
      <div className="container">
        {/* Section Header */}
        <div className="ind-preview-header reveal-on-scroll">
          <div className="ind-header-intro">
            <span className="ind-preview-eyebrow">SECTOR EXPERTISE // 12 INDUSTRIES</span>
            <h2 className="ind-preview-headline">
              Technology engineered for <span className="ind-headline-accent">your industry.</span>
            </h2>
          </div>
          <div className="ind-header-desc">
            <p className="ind-preview-body">
              Every vertical operates with specialized software, compliance mandates, and operational cadence. We engineer workflows that integrate directly into the specialized tools your team already relies upon.
            </p>
            <div className="ind-header-cta">
              <Button variant="primary" size="md" arrow href="/industries">
                Explore All 12 Industries
              </Button>
            </div>
          </div>
        </div>

        {/* 6-Industry Grid */}
        <div className="ind-cards-grid">
          {FEATURED_SECTORS.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className={`ind-preview-card reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
              >
                <div className="ind-card-top">
                  <div className="ind-card-icon-box" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <span className="ind-card-tag">{ind.tag}</span>
                </div>
                <h3 className="ind-card-name">{ind.name}</h3>
                <p className="ind-card-desc">{ind.desc}</p>
                <div className="ind-card-footer">
                  <span className="ind-highlight-pill">{ind.highlight}</span>
                  <span className="ind-arrow-link" aria-hidden="true">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
