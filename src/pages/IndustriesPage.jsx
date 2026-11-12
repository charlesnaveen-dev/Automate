import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, X, Sparkles, Building2 } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import { Link } from '../router/Router';
import { INDUSTRIES_DATA, INDUSTRY_CATEGORIES } from '../data/industriesData';
import './IndustriesPage.css';

export default function IndustriesPage() {
  usePageMetadata({
    title: 'Industries We Serve — Sector-Specific AI Implementation | Hutomate',
    description: 'Explore tailored AI agents, voice receptionists, and automation pipelines engineered for legal, healthcare, real estate, trades, and 12 core business sectors.',
    path: '/industries',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

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
      {/* ----------------------------------------------------------------------
          1. Hero & Discovery Canvas (Smith.ai Inspired Architecture)
          ---------------------------------------------------------------------- */}
      <section className="industries-hero-canvas">
        <div className="container">
          <div className="industries-hero-header reveal-on-scroll">
            <div className="industries-badge-row">
              <span className="industries-eyebrow-pill">
                <span className="industries-pill-beacon" />
                SPECIALIZED SECTORS · INDUSTRY DIRECTORY
              </span>
              <span className="industries-count-tag">12 Sectors Active</span>
            </div>

            <h1 className="industries-main-headline">
              AI &amp; automation engineered for the specific demands of your industry.
            </h1>

            <p className="industries-main-desc">
              Every industry operates with specialized compliance rules, proprietary software stacks, and distinct client communication cadences. We architect custom autonomous agents, voice receptionists, and system workflows tailored to the tools you already rely on.
            </p>

            {/* Seamless Integrated Search & Category Navigation */}
            <div className="industries-discovery-bar">
              <div className="industries-search-box">
                <Search size={18} className="industries-search-icon" />
                <input
                  type="text"
                  className="industries-search-input"
                  placeholder="Search industries, software stacks, or challenges (e.g. Legal, Clio, HVAC, HIPAA)..."
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

              <div className="industries-category-tabs" role="tablist" aria-label="Industry Categories">
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
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          2. Directory Section (Photo-Led Magazine Grid)
          ---------------------------------------------------------------------- */}
      <section className="industries-directory-section">
        <div className="container">
          {/* Results Count Meta */}
          <div className="industries-results-meta">
            <span>Showing {filteredIndustries.length} of {INDUSTRIES_DATA.length} specialized industry sectors</span>
            {searchQuery && (
              <span className="industries-search-indicator">
                matching &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {/* Industry Grid — Photo-Led Editorial Cards */}
          {filteredIndustries.length > 0 ? (
            <div className="industries-directory-grid">
              {filteredIndustries.map((ind, idx) => {
                const IconComponent = ind.icon || Building2;
                return (
                  <article
                    key={ind.id}
                    id={ind.id}
                    className={`industry-dir-card reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
                  >
                    {/* Professional Industry Photography */}
                    <div className="ind-card-img-wrap">
                      <img
                        src={ind.image}
                        alt={`${ind.name} operations setting`}
                        className="ind-card-img"
                        loading="lazy"
                      />
                      <div className="ind-card-cat-badge">
                        <IconComponent size={14} />
                        <span>{ind.categoryLabel}</span>
                      </div>
                    </div>

                    <div className="ind-card-content">
                      <h2 className="industry-dir-title">{ind.name}</h2>
                      <p className="industry-dir-tag">{ind.tag}</p>

                      <div className="industry-dir-block">
                        <span className="industry-dir-block-label industry-dir-block-label--challenge">
                          Primary Operational Bottleneck
                        </span>
                        <p className="industry-dir-block-text">{ind.challenges[0]}</p>
                      </div>

                      {/* Stack Tags */}
                      <div className="ind-card-stack">
                        {ind.stack?.slice(0, 3).map((st, i) => (
                          <span key={i} className="ind-card-stack-pill">
                            {st}
                          </span>
                        ))}
                        {ind.stack?.length > 3 && (
                          <span className="ind-card-stack-pill ind-card-stack-pill--more">
                            +{ind.stack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Direct Page Link */}
                      <div className="industry-dir-footer">
                        <Link
                          to={`/industries/${ind.id}`}
                          className="industry-dir-page-link"
                        >
                          <span>Explore {ind.name} Architecture</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="industries-empty-state">
              <Sparkles size={36} color="#167C80" />
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
                Discuss Custom Sector Architecture
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          3. Final CTA Banner
          ---------------------------------------------------------------------- */}
      <CtaBanner
        title="Don't see your specific industry or workflow?"
        description="We evaluate technical feasibility and design bespoke automation pipelines for specialized sectors. Discuss your workflow requirements with our team."
        buttonText="Discuss Your Industry"
        buttonHref="/contact"
        secondaryButtonText="Explore Capabilities"
        secondaryButtonHref="/capabilities"
      />
    </div>
  );
}
