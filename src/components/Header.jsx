import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Bot, GitBranch, Mic, Cpu } from 'lucide-react';
import { Link } from '../router/Router';
import { useRouter } from '../router/RouterContext';
import HutomateLogo, { HutomateSymbol } from './HutomateLogo';
import Button from './Button';
import './Header.css';

/**
 * Backward compatibility export
 */
export function BrandSymbol({ size = 30, className = '' }) {
  return <HutomateSymbol size={size} className={className} />;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isMobileCapabilitiesOpen, setIsMobileCapabilitiesOpen] = useState(false);
  const toggleBtnRef = useRef(null);
  const dropdownRef = useRef(null);
  const { currentPath } = useRouter();

  // Monitor scroll for subtle frosted-glass background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCapabilitiesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isMenuOpen) {
          setIsMenuOpen(false);
          if (toggleBtnRef.current) toggleBtnRef.current.focus();
        }
        setIsCapabilitiesOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const capabilitySublinks = [
    { label: 'AI Agents', href: '/capabilities/ai-agents', desc: 'Autonomous tasks & decision support', icon: Bot },
    { label: 'Workflow Automation', href: '/capabilities/workflow-automation', desc: 'End-to-end tool integration', icon: GitBranch },
    { label: 'Voice AI', href: '/capabilities/voice-ai', desc: 'Inbound customer communication', icon: Mic },
    { label: 'Custom AI Solutions', href: '/capabilities/custom-ai-solutions', desc: 'Bespoke systems & data processing', icon: Cpu },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsCapabilitiesOpen(false);
  };

  const isCapabilitiesActive = currentPath === '/capabilities' || currentPath.startsWith('/capabilities/');
  const isDarkHero = currentPath === '/';

  return (
    <header className={`site-header ${isDarkHero ? 'site-header--cinematic' : ''} ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container">
        {/* Left: Exact Hutomate Brand Logo (White variant on cinematic home hero, dark variant on light internal pages) */}
        <Link to="/" className="header-brand" aria-label="Hutomate home" onClick={handleLinkClick}>
          <HutomateLogo symbolSize={28} variant={isDarkHero ? 'light' : 'dark'} />
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation" role="navigation">
          <ul className="nav-list">
            {/* Capabilities Dropdown */}
            <li
              className={`nav-item nav-item-dropdown ${isCapabilitiesActive ? 'is-active' : ''}`}
              ref={dropdownRef}
              onMouseEnter={() => setIsCapabilitiesOpen(true)}
              onMouseLeave={() => setIsCapabilitiesOpen(false)}
            >
              <div className="nav-dropdown-trigger-wrap">
                <Link
                  to="/capabilities"
                  className={`nav-link ${isCapabilitiesActive ? 'nav-link-active' : ''}`}
                  onClick={() => setIsCapabilitiesOpen(false)}
                >
                  Capabilities
                </Link>
                <button
                  type="button"
                  className="dropdown-chevron-btn"
                  aria-expanded={isCapabilitiesOpen}
                  aria-label="Toggle capabilities submenu"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCapabilitiesOpen((prev) => !prev);
                  }}
                >
                  <ChevronDown size={14} className={`chevron-icon ${isCapabilitiesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              <div className={`nav-dropdown-menu ${isCapabilitiesOpen ? 'is-open' : ''}`}>
                <div className="nav-dropdown-inner">
                  <div className="dropdown-overview-link">
                    <Link to="/capabilities" className="dropdown-overview-anchor" onClick={handleLinkClick}>
                      <span className="overview-title">Capabilities Overview →</span>
                      <span className="overview-sub">Explore our complete range of implementation services</span>
                    </Link>
                  </div>
                  <div className="dropdown-divider" />
                  <ul className="dropdown-sublinks-grid">
                    {capabilitySublinks.map((sub) => {
                      const IconComp = sub.icon;
                      return (
                        <li key={sub.href}>
                          <Link to={sub.href} className="dropdown-sublink-item" onClick={handleLinkClick}>
                            <div className="sublink-icon-wrap">
                              <IconComp size={16} />
                            </div>
                            <div className="sublink-text-wrap">
                              <span className="sublink-label">{sub.label}</span>
                              <span className="sublink-desc">{sub.desc}</span>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link
                to="/use-cases"
                className={`nav-link ${currentPath === '/use-cases' ? 'nav-link-active' : ''}`}
              >
                Use Cases
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/industries"
                className={`nav-link ${currentPath === '/industries' ? 'nav-link-active' : ''}`}
              >
                Industries
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/process"
                className={`nav-link ${currentPath === '/process' ? 'nav-link-active' : ''}`}
              >
                Process
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${currentPath === '/about' ? 'nav-link-active' : ''}`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="header-actions">
          <div className="desktop-cta-wrap">
            <Button variant="primary" size="sm" arrow href="/contact">
              Discuss Your Project
            </Button>
          </div>

          {/* Hamburger button for mobile */}
          <button
            ref={toggleBtnRef}
            type="button"
            className={`mobile-menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            <span className="hamburger-line top-line" />
            <span className="hamburger-line mid-line" />
            <span className="hamburger-line bot-line" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-backdrop ${isMenuOpen ? 'is-active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside
        id="mobile-nav-panel"
        className={`mobile-nav-panel ${isMenuOpen ? 'is-open' : ''}`}
        aria-modal="true"
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-nav-inner">
          <div className="mobile-nav-header">
            <span className="brand-wordmark mobile-brand">Hutomate</span>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile links">
            <ul className="mobile-link-list">
              {/* Mobile Capabilities with Accordion */}
              <li className="mobile-link-item mobile-item-accordion">
                <div className="mobile-accordion-row">
                  <Link
                    to="/capabilities"
                    className="mobile-nav-link"
                    onClick={handleLinkClick}
                  >
                    Capabilities
                  </Link>
                  <button
                    type="button"
                    className="mobile-accordion-btn"
                    aria-label="Toggle capabilities subpages"
                    aria-expanded={isMobileCapabilitiesOpen}
                    onClick={() => setIsMobileCapabilitiesOpen((prev) => !prev)}
                  >
                    <ChevronDown size={18} className={`chevron-icon ${isMobileCapabilitiesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {isMobileCapabilitiesOpen && (
                  <ul className="mobile-sublinks-list">
                    <li>
                      <Link to="/capabilities" className="mobile-sublink" onClick={handleLinkClick}>
                        Overview
                      </Link>
                    </li>
                    {capabilitySublinks.map((sub) => (
                      <li key={sub.href}>
                        <Link to={sub.href} className="mobile-sublink" onClick={handleLinkClick}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="mobile-link-item">
                <Link to="/use-cases" className="mobile-nav-link" onClick={handleLinkClick}>
                  Use Cases
                </Link>
              </li>

              <li className="mobile-link-item">
                <Link to="/industries" className="mobile-nav-link" onClick={handleLinkClick}>
                  Industries
                </Link>
              </li>

              <li className="mobile-link-item">
                <Link to="/process" className="mobile-nav-link" onClick={handleLinkClick}>
                  Process
                </Link>
              </li>

              <li className="mobile-link-item">
                <Link to="/about" className="mobile-nav-link" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <Button
              variant="primary"
              size="md"
              arrow
              href="/contact"
              className="mobile-cta-btn"
              onClick={handleLinkClick}
            >
              Discuss Your Project
            </Button>
            <p className="mobile-nav-caption">
              AI automation for global businesses
            </p>
          </div>
        </div>
      </aside>
    </header>
  );
}
