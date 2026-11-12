import React from 'react';
import { Sliders, Layers, ShieldCheck, Check } from 'lucide-react';
import './DesignedAroundBusiness.css';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Built Around Your Business',
    desc: 'We adapt automation to your existing processes instead of forcing you into a fixed system.',
    icon: Sliders,
  },
  {
    num: '02',
    title: 'Works With Your Existing Tools',
    desc: 'Keep the tools your team already relies on and connect them where needed.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Designed With Care',
    desc: 'Every solution is planned around your requirements, with reliability and usability in mind.',
    icon: ShieldCheck,
  },
];

export default function DesignedAroundBusiness() {
  return (
    <section className="designed-around-section" id="designed-around-business">
      <div className="container">
        <div className="designed-split-layout">
          {/* ------------------------------------------------------------------
              LEFT COLUMN: Editorial Heading & Architecture Narrative
              ------------------------------------------------------------------ */}
          <div className="designed-left-col reveal-on-scroll">
            <div className="designed-eyebrow-pill">
              <span className="designed-eyebrow-dot" />
              <span className="designed-eyebrow-text">ENGINEERING PHILOSOPHY</span>
            </div>

            <h2 className="designed-main-title">
              Designed Around <br />
              <span className="designed-title-accent">Your Business.</span>
            </h2>

            <p className="designed-main-desc">
              Off-the-shelf software forces your team to bend around rigid constraints. We take the reverse approach: studying your operational realities, existing stack, and human expertise to engineer systems that integrate invisibly and perform predictably.
            </p>

            {/* Architectural Trust Points */}
            <div className="designed-pillars-list">
              <div className="designed-pillar-item">
                <div className="designed-pillar-check">
                  <Check size={14} />
                </div>
                <div>
                  <h4 className="designed-pillar-name">Client-Owned Systems</h4>
                  <p className="designed-pillar-desc">You retain 100% ownership of your code, workflows, and schemas.</p>
                </div>
              </div>

              <div className="designed-pillar-item">
                <div className="designed-pillar-check">
                  <Check size={14} />
                </div>
                <div>
                  <h4 className="designed-pillar-name">Private &amp; Secure VPC</h4>
                  <p className="designed-pillar-desc">Zero-retention policies ensure your company data remains private.</p>
                </div>
              </div>

              <div className="designed-pillar-item">
                <div className="designed-pillar-check">
                  <Check size={14} />
                </div>
                <div>
                  <h4 className="designed-pillar-name">Deterministic Reliability</h4>
                  <p className="designed-pillar-desc">Strict validation guards wrapped around every probabilistic model.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------
              RIGHT COLUMN: Three Key Principles (Editorial Typography & Whitespace)
              ------------------------------------------------------------------ */}
          <div className="designed-right-col reveal-on-scroll reveal-delay-2">
            <div className="designed-principles-stack">
              {PRINCIPLES.map((item) => {
                const IconComp = item.icon;

                return (
                  <article key={item.num} className="designed-principle-entry">
                    {/* Header Row: Number + Icon */}
                    <div className="principle-meta-row">
                      <span className="principle-index">{item.num}</span>
                      <div className="principle-icon-badge" aria-hidden="true">
                        <IconComp size={18} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="principle-body">
                      <h3 className="principle-title">{item.title}</h3>
                      <p className="principle-desc">{item.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
