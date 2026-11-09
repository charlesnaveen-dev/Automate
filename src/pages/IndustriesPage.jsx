import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, CheckCircle2, ShieldCheck, X, Sparkles } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import { Link } from '../router/Router';
import { INDUSTRIES_DATA, INDUSTRY_CATEGORIES } from '../data/industriesData';
import './IndustriesPage.css';

export default function IndustriesPage() {
  usePageMetadata({
    title: 'Industries We Serve — Sector-Specific AI Implementation',
    description: 'Explore tailored AI agents, voice receptionists, and automation pipelines engineered for legal, healthcare, real estate, trades, and 12 core business sectors.',
    path: '/industries',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  useScrollReveal(activeCategory);

  // Filtered industries based on category and live search query
  const filteredIndustries = useMemo(() => {
    return INDUSTRIES_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.solution.toLowerCase().includes(q) ||
        item.challenges.some((c) => c.toLowerCase().includes(q)) ||
        item.stack.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="industries-page">
      <PageHeader
        eyebrow="INDUSTRY SECTOR DIRECTORY"
        badgeText="Specialized Sectors"
        badgeType="purple"
        title="Intelligence for the industries that keep business moving."
        description="Every industry operates with specialized software, compliance rules, and client communication patterns. We design bespoke autonomous agents and workflows tailored to the tools you already use."
      >
        <Button variant="primary" size="md" arrow href="/contact">
          Discuss Your Industry
        </Button>
        <Button variant="secondary" size="md" href="/capabilities">
          Explore Capabilities
        </Button>
      </PageHeader>

      <section className="industries-directory-section">
        <div className="industries-directory-container">
          {/* Smith.ai-inspired Live Search & Filter Bar */}
          <div className="industries-controls-bar reveal-on-scroll">
            {/* Search Input */}
            <div className="industries-search-box">
              <Search size={18} className="industries-search-icon" />
              <input
                type="text"
                className="industries-search-input"
                placeholder="Find your industry (e.g. Legal, Real Estate, HVAC, Healthcare...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search industries"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="industries-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="industries-category-tabs" role="tablist">
              {INDUSTRY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`industries-cat-tab ${activeCategory === cat.id ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="industries-results-meta">
            <span>Showing {filteredIndustries.length} of {INDUSTRIES_DATA.length} specialized industries</span>
            {searchQuery && (
              <span className="industries-search-indicator">
                matching &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {/* Industry Grid */}
          {filteredIndustries.length > 0 ? (
            <div className="industries-directory-grid">
              {filteredIndustries.map((ind, idx) => {
                const IconComponent = ind.icon;
                return (
                  <article
                    key={ind.id}
                    id={ind.id}
                    className={`industry-dir-card reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
                    onClick={() => setSelectedIndustry(ind)}
                  >
                    <div className="industry-dir-header">
                      <div className="industry-dir-icon-box">
                        <IconComponent size={24} strokeWidth={2.2} />
                      </div>
                      <span className="industry-dir-cat-tag">{ind.categoryLabel}</span>
                    </div>

                    <h2 className="industry-dir-title">{ind.name}</h2>
                    <p className="industry-dir-tag">{ind.tag}</p>

                    <div className="industry-dir-block">
                      <span className="industry-dir-block-label industry-dir-block-label--challenge">
                        Primary Bottleneck
                      </span>
                      <p className="industry-dir-block-text">{ind.challenges[0]}</p>
                    </div>

                    <div className="industry-dir-block">
                      <span className="industry-dir-block-label industry-dir-block-label--solution">
                        Hutomate Implementation
                      </span>
                      <p className="industry-dir-block-text">{ind.solution}</p>
                    </div>

                    <div className="industry-dir-footer">
                      <button
                        type="button"
                        className="industry-dir-expand-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedIndustry(ind);
                        }}
                      >
                        <span>View Architecture &amp; Workflow</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="industries-empty-state">
              <Sparkles size={36} color="#7657E8" />
              <h3>No direct industry match found</h3>
              <p>
                We build universal automation architectures for any sector with repetitive communication, scheduling, or data workflows.
              </p>
              <Button
                variant="primary"
                size="md"
                arrow
                href={`/start-project?industry=${encodeURIComponent(searchQuery)}`}
              >
                Discuss {searchQuery || 'Your Industry'}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Expanded Detail Modal / Drawer for Selected Industry */}
      {selectedIndustry && (
        <div
          className="industry-modal-overlay"
          onClick={() => setSelectedIndustry(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-industry-title"
        >
          <div
            className="industry-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="industry-modal-close"
              onClick={() => setSelectedIndustry(null)}
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="industry-modal-header">
              <div className="industry-modal-icon-row">
                <div className="industry-dir-icon-box">
                  {React.createElement(selectedIndustry.icon, { size: 28, strokeWidth: 2.2 })}
                </div>
                <div className="industry-modal-meta">
                  <span className="industry-modal-cat">{selectedIndustry.categoryLabel}</span>
                  <h3 id="modal-industry-title" className="industry-modal-title">
                    {selectedIndustry.name}
                  </h3>
                  <span className="industry-modal-subtag">{selectedIndustry.tag}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="industry-modal-body">
              {/* Challenges */}
              <div className="industry-modal-section">
                <h4 className="industry-modal-sec-title industry-modal-sec-title--danger">
                  Industry-Specific Friction Points
                </h4>
                <ul className="industry-modal-list">
                  {selectedIndustry.challenges.map((ch, i) => (
                    <li key={i} className="industry-modal-list-item">
                      <span className="industry-modal-bullet">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="industry-modal-section">
                <h4 className="industry-modal-sec-title industry-modal-sec-title--solution">
                  How Hutomate Transforms This Sector
                </h4>
                <p className="industry-modal-text">{selectedIndustry.solution}</p>
              </div>

              {/* Typical Workflow */}
              <div className="industry-modal-section">
                <h4 className="industry-modal-sec-title">Typical Automated Workflow</h4>
                <div className="industry-modal-workflow-box">
                  <div className="industry-modal-wf-flow">{selectedIndustry.workflow}</div>
                </div>
              </div>

              {/* Stack & Impact */}
              <div className="industry-modal-grid">
                <div className="industry-modal-subblock">
                  <span className="industry-modal-subblock-title">Common Integrations</span>
                  <div className="industry-modal-tags">
                    {selectedIndustry.stack.map((stk, sIdx) => (
                      <span key={sIdx} className="industry-modal-tag">{stk}</span>
                    ))}
                  </div>
                </div>

                <div className="industry-modal-subblock">
                  <span className="industry-modal-subblock-title">Projected Impact</span>
                  <div className="industry-modal-impact-badge">
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>{selectedIndustry.impact}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer with Prefilled CTA */}
            <div className="industry-modal-footer">
              <div className="industry-modal-security">
                <ShieldCheck size={16} color="#71717A" />
                <span>Enterprise encryption &amp; zero-retention model configurations</span>
              </div>

              <Link
                to="/contact"
                className="industry-modal-cta"
              >
                <span>Discuss {selectedIndustry.name} Implementation</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <CtaBanner
        title="Operating in a specialized sector not listed here?"
        description="Repetitive communication, intake forms, scheduling, and cross-system sync exist in every business. We map and automate unique client workflows during our technical scoping phase."
        buttonText="Discuss Your Industry"
        buttonHref="/contact"
        secondaryButtonText="Explore Capabilities"
        secondaryButtonHref="/capabilities"
      />
    </div>
  );
}
