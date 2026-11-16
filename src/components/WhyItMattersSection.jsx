import React from 'react';
import './WhyItMattersSection.css';

/**
 * WhyItMattersSection — Shared editorial business impact component across capability pages.
 *
 * @param {Object} props
 * @param {string} [props.kicker="WHY IT MATTERS"] - Section eyebrow text
 * @param {string} props.heading - Primary bold section headline
 * @param {string} props.subhead - Editorial supporting paragraph
 * @param {Array<{num: string, title: string, desc: string, icon: React.ComponentType}>} props.benefits - Exactly 3 business-impact benefits
 */
export default function WhyItMattersSection({
  kicker = 'WHY IT MATTERS',
  heading,
  subhead,
  benefits = [],
}) {
  return (
    <section className="matters-section" aria-label={heading || kicker}>
      <div className="container">
        {/* Editorial Two-Column Introduction */}
        <div className="matters-header reveal-on-scroll">
          <span className="matters-kicker">{kicker}</span>
          <div className="matters-header-split">
            <h2 className="matters-heading">{heading}</h2>
            <p className="matters-subhead">{subhead}</p>
          </div>
        </div>

        {/* Three Business-Impact Editorial Columns */}
        <div className="matters-grid reveal-on-scroll">
          {benefits.map((ben, idx) => {
            const IconComp = ben.icon;
            return (
              <article key={idx} className="matters-column">
                <div className="matters-col-top">
                  {IconComp && (
                    <div className="matters-icon-box" aria-hidden="true">
                      <IconComp size={20} className="matters-icon" />
                    </div>
                  )}
                  <span className="matters-num">{ben.num}</span>
                </div>

                <h3 className="matters-title">{ben.title}</h3>
                <p className="matters-desc">{ben.desc}</p>

                <div className="matters-accent-bar" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
