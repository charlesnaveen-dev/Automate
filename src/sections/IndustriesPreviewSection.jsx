import React from 'react';
import { ArrowRight, Wrench, HeartPulse, Briefcase, Building2, ShoppingBag, UtensilsCrossed } from 'lucide-react';
import Button from '../components/Button';
import { Link } from '../router/Router';
import './IndustriesPreviewSection.css';

const INDUSTRIES_PREVIEW = [
  {
    id: 'home-services',
    name: 'Home Services & Field Operations',
    desc: 'HVAC, plumbing, roofing and electrical companies dispatching technicians and capturing emergency after-hours calls.',
    highlight: '24/7 Voice call answering & field dispatch sync',
    icon: Wrench,
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    desc: 'Dental practices, wellness clinics and private health centers managing patient appointment bookings and intake queries.',
    highlight: 'HIPAA-conscious appointment booking & FAQ assistant',
    icon: HeartPulse,
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    desc: 'Law firms, accounting practices and consultancies coordinating high-touch client intake and document reviews.',
    highlight: 'Automated lead qualification & document extraction',
    icon: Briefcase,
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    desc: 'Agencies and property managers capturing listing inquiries, scheduling viewings, and managing tenant maintenance.',
    highlight: 'Instant listing responder & viewing calendar coordinator',
    icon: Building2,
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    desc: 'Direct-to-consumer brands and omnichannel merchants resolving order tracking, returns, and inventory synchronization.',
    highlight: 'Omnichannel support triage & CRM order sync',
    icon: ShoppingBag,
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Venues',
    desc: 'Boutique hotels, event venues and dining establishments handling reservation confirmations and guest inquiries.',
    highlight: 'Conversational reservation handling & instant FAQ replies',
    icon: UtensilsCrossed,
  },
];

export default function IndustriesPreviewSection() {
  return (
    <section className="industries-preview-section" id="industries" aria-label="Industries Preview">
      <div className="container">
        {/* Section Header */}
        <div className="ind-preview-header reveal-on-scroll">
          <div className="ind-header-intro">
            <span className="ind-preview-eyebrow">SECTOR EXPERTISE</span>
            <h2 className="ind-preview-headline">
              Technology that adapts to{' '}
              <span className="ind-headline-accent">your industry.</span>
            </h2>
          </div>
          <div className="ind-header-desc">
            <p className="ind-preview-body">
              Every vertical operates with specialized software, communication cadence, and customer expectations. We engineer workflows that integrate directly into the tools your team already relies upon.
            </p>
            <div className="ind-header-cta">
              <Button variant="secondary" size="md" arrow href="/industries">
                Explore All Industries
              </Button>
            </div>
          </div>
        </div>

        {/* 6-Industry Grid */}
        <div className="ind-cards-grid">
          {INDUSTRIES_PREVIEW.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.id}
                to={`/industries#${ind.id}`}
                className={`ind-preview-card card-hover-lift reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
              >
                <div className="ind-card-icon-box" aria-hidden="true">
                  <Icon size={20} />
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
