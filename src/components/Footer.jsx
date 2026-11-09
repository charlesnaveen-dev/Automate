import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { Link } from '../router/Router';
import HutomateLogo, { HutomateSymbol } from './HutomateLogo';
import './Footer.css';

export function FooterBrandSymbol({ size = 30, className = '' }) {
  return <HutomateSymbol size={size} color="#FFFFFF" className={className} />;
}

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site Footer">
      <div className="footer-container">
        {/* 4-Column Grid on Desktop */}
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col footer-col--brand">
            <Link to="/" className="footer-brand" aria-label="Hutomate home">
              <HutomateLogo variant="light" symbolSize={30} />
            </Link>

            <p className="footer-description">
              An intelligent systems partner helping businesses operate smarter through AI, automation and connected technology.
            </p>

            <div className="footer-region-badge">
              <Globe size={14} className="footer-badge-icon" aria-hidden="true" />
              <span>Serving USA, UK, Australia &amp; Worldwide</span>
            </div>
          </div>

          {/* Column 2: CAPABILITIES */}
          <nav className="footer-col" aria-label="Capabilities Links">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/capabilities/ai-agents" className="footer-link">AI Agents</Link>
              </li>
              <li>
                <Link to="/capabilities/workflow-automation" className="footer-link">Workflow Automation</Link>
              </li>
              <li>
                <Link to="/capabilities/voice-ai" className="footer-link">Voice AI</Link>
              </li>
              <li>
                <Link to="/capabilities/custom-ai-solutions" className="footer-link">Custom AI Solutions</Link>
              </li>
              <li>
                <Link to="/capabilities" className="footer-link">All Capabilities Overview →</Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: SOLUTIONS & COMPANY */}
          <div className="footer-col" aria-label="Company Links">
            <h4 className="footer-col-title">Solutions</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/use-cases" className="footer-link">Use Cases</Link>
              </li>
              <li>
                <Link to="/industries" className="footer-link">Industries</Link>
              </li>
              <li>
                <Link to="/process" className="footer-link">Our 5-Phase Process</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Hutomate</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH & LEGAL */}
          <div className="footer-col" aria-label="Contact and Legal Links">
            <h4 className="footer-col-title">Get In Touch</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/contact" className="footer-link">Discuss Your Project →</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
            </ul>

            <h4 className="footer-col-title footer-col-title--sub">Legal</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {CURRENT_YEAR} Hutomate. All rights reserved. Custom AI Automation &amp; Systems Implementation.
          </p>

          <div className="footer-bottom-actions">
            <div className="footer-status-pill">
              <span className="footer-status-dot" aria-hidden="true" />
              <span>Custom Implementations Scoped &amp; Built to Order</span>
            </div>

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
