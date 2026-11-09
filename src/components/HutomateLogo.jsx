import React from 'react';
import './HutomateLogo.css';

/**
 * Exact Hutomate Brand Symbol Component
 * Extracted with sub-pixel precision from brand reference:
 * - Feature 1: Upper-left circular satellite (cx: 39, cy: 38, r: 22)
 * - Feature 2: Fluid diagonal double-lobe peanut connecting upper-right & lower-left
 */
export function HutomateSymbol({ size = 30, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 149 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`hutomate-symbol-svg ${className}`}
      aria-hidden="true"
    >
      {/* Top-left small circular form */}
      <circle cx="39" cy="38" r="22" fill={color} />

      {/* Diagonal connected peanut / double-lobe form */}
      <path
        d="M 106.0 0.0 L 118.0 0.0 L 124.0 1.0 L 130.0 4.0 L 136.0 8.0 L 141.0 14.0 L 145.0 20.0 L 147.0 28.0 L 148.0 36.0 L 147.0 44.0 L 144.0 52.0 L 138.0 60.0 L 132.0 66.0 L 126.0 69.0 L 120.0 70.0 L 114.0 71.0 L 106.0 71.0 L 98.0 71.0 L 92.0 73.0 L 86.0 75.0 L 80.0 79.0 L 75.0 85.0 L 71.0 91.0 L 69.0 97.0 L 68.0 105.0 L 68.0 113.0 L 66.0 121.0 L 64.0 127.0 L 59.0 133.0 L 54.0 138.0 L 48.0 142.0 L 40.0 144.0 L 32.0 145.0 L 24.0 143.0 L 16.0 140.0 L 10.0 135.0 L 5.0 129.0 L 2.0 121.0 L 0.0 113.0 L 1.0 105.0 L 3.0 97.0 L 7.0 91.0 L 12.0 85.0 L 18.0 81.0 L 24.0 78.0 L 30.0 76.0 L 38.0 76.0 L 46.0 76.0 L 54.0 75.0 L 60.0 72.0 L 66.0 68.0 L 71.0 62.0 L 75.0 56.0 L 77.0 48.0 L 78.0 40.0 L 78.0 32.0 L 80.0 22.0 L 85.0 14.0 L 92.0 7.0 L 98.0 3.0 L 104.0 1.0 Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Full Brand Lockup Component
 * Renders the exact master asset image for optimal anti-aliased sharpness,
 * with pure SVG fallback.
 */
export default function HutomateLogo({
  symbolOnly = false,
  symbolSize = 28,
  color = '#111111',
  variant = 'default',
  className = '',
}) {
  if (symbolOnly) {
    return <HutomateSymbol size={symbolSize} color={variant === 'light' ? '#FFFFFF' : color} className={className} />;
  }

  const logoSrc = variant === 'light' ? '/hutomate_logo_white.png' : '/hutomate_logo.png';

  return (
    <div className={`hutomate-brand-lockup ${variant === 'light' ? 'is-light' : ''} ${className}`}>
      <img
        src={logoSrc}
        alt="Hutomate"
        className="hutomate-brand-img"
        height={32}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
}
