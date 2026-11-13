import React from 'react';
import './HutomateLogo.css';

/**
 * Pure Brand Wordmark Component
 * Renders ONLY the exact original Hutomate wordmark (preserving typography, letterforms, proportions),
 * with the old graphical logo symbol completely removed.
 */
export default function HutomateLogo({
  symbolOnly = false,
  symbolSize = 28,
  color = '#111111',
  variant = 'default',
  className = '',
}) {
  if (symbolOnly) {
    return null;
  }

  // Variant 'header' renders both light and navy wordmarks stacked for seamless GPU-accelerated CSS crossfade
  if (variant === 'header') {
    return (
      <div className={`hutomate-brand-lockup is-header-brand ${className}`}>
        <img
          src="/hutomate_wordmark_white.png"
          alt="Hutomate"
          className="hutomate-brand-img hutomate-wordmark-light"
          height={26}
          loading="eager"
          decoding="sync"
        />
        <img
          src="/hutomate_wordmark_navy.png"
          alt="Hutomate"
          className="hutomate-brand-img hutomate-wordmark-navy"
          height={26}
          loading="eager"
          decoding="sync"
        />
      </div>
    );
  }

  const logoSrc =
    variant === 'light'
      ? '/hutomate_wordmark_white.png'
      : variant === 'navy'
      ? '/hutomate_wordmark_navy.png'
      : '/hutomate_wordmark.png';

  return (
    <div className={`hutomate-brand-lockup ${variant === 'light' ? 'is-light' : variant === 'navy' ? 'is-navy' : ''} ${className}`}>
      <img
        src={logoSrc}
        alt="Hutomate"
        className="hutomate-brand-img"
        height={26}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
}

/**
 * Backward compatibility export
 */
export function HutomateSymbol({ size = 30, color = 'currentColor', className = '' }) {
  return null;
}

