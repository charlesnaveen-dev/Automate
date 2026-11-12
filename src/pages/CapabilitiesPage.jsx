import React from 'react';
import { ShieldCheck, Zap, Layers } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CtaBanner from '../components/CtaBanner';
import CapabilitiesPageHero from '../components/CapabilitiesPageHero';
import EditorialCapabilitiesShowcase from '../components/EditorialCapabilitiesShowcase';
import './CapabilitiesPage.css';

export default function CapabilitiesPage() {
  usePageMetadata({
    title: 'Core Capabilities — Enterprise AI & Automation | Hutomate',
    description: 'Explore Hutomate’s core technical capabilities: Autonomous AI Agents, Workflow Automation, Voice AI & Telephony, and Custom Enterprise AI Solutions.',
    path: '/capabilities',
  });

  useScrollReveal();

  const selectionCriteria = [
    {
      title: 'Task Characteristics',
      desc: 'Does the workflow require strict deterministic rules (best for workflow automation) or conversational reasoning and unstructured text interpretation (best for AI agents)?',
      icon: Layers,
    },
    {
      title: 'System Compatibility',
      desc: 'Do your current tools provide documented REST APIs, webhooks, or database access? We evaluate technical feasibility before committing to a build.',
      icon: Zap,
    },
    {
      title: 'Failure Tolerance & Oversight',
      desc: 'What is the consequence of an edge-case error? We design explicit human approval checkpoints wherever critical financial or client data is involved.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="capabilities-page">
      {/* ----------------------------------------------------------------------
          1. REDESIGNED MONOCHROMATIC CAPABILITIES HERO
          ---------------------------------------------------------------------- */}
      <CapabilitiesPageHero />

      {/* ----------------------------------------------------------------------
          2. EDITORIAL CAPABILITIES SHOWCASE (NO FAKE DASHBOARDS)
          ---------------------------------------------------------------------- */}
      <EditorialCapabilitiesShowcase />

      {/* ----------------------------------------------------------------------
          3. SELECTION METHODOLOGY SECTION
          ---------------------------------------------------------------------- */}
      <section className="cap-criteria-section">
        <div className="container">
          <div className="cap-criteria-card reveal-on-scroll">
            <div className="criteria-header reveal-on-scroll">
              <span className="cap-section-eyebrow reveal-on-scroll reveal-delay-1">SELECTION METHODOLOGY</span>
              <h2 className="criteria-title reveal-on-scroll reveal-delay-2">How we select the right automation approach for your operations</h2>
              <p className="criteria-body reveal-on-scroll reveal-delay-3">
                We do not apply AI blindly. Every engagement begins with assessing whether an operational problem is best solved by deterministic automation, conversational telephony, an autonomous agent, or an integration pipeline.
              </p>
            </div>

            <div className="criteria-grid">
              {selectionCriteria.map((crit, idx) => {
                const IconComp = crit.icon;
                return (
                  <div key={idx} className={`criteria-item reveal-on-scroll reveal-delay-${idx + 1}`}>
                    <div className="criteria-icon-wrap">
                      <IconComp size={20} />
                    </div>
                    <h3 className="criteria-item-title">{crit.title}</h3>
                    <p className="criteria-item-desc">{crit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          4. FINAL CTA BANNER
          ---------------------------------------------------------------------- */}
      <CtaBanner
        title="Ready to evaluate your team's automation opportunities?"
        description="Share your current operational workflows with our engineering team. We assess technical feasibility, software compatibility, and projected ROI."
        buttonText="Discuss Your Project"
        buttonHref="/contact"
        secondaryButtonText="Explore Industries"
        secondaryButtonHref="/industries"
      />
    </div>
  );
}
