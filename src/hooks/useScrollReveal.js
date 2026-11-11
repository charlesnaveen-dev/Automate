import { useEffect } from 'react';

/**
 * Custom hook for smooth, performant scroll-triggered reveals
 * Automatically handles cleanup, threshold detection, reduced motion preferences,
 * automated crawler/headless inspection compatibility, and safety fallbacks.
 */
export function useScrollReveal(trigger) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isAutomated =
      Boolean(window.navigator?.webdriver) ||
      /bot|googlebot|crawler|spider|headless|phantom|lighthouse|pagespeed|bingbot|yandex|slurp|baiduspider|inspection|preview|prerender/i.test(
        navigator.userAgent || ''
      );

    // Check prefers-reduced-motion or automated crawler environments
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || isAutomated) {
      document.documentElement.classList.remove('js-scroll-enabled');
      document.querySelectorAll('.reveal-on-scroll, .reveal-group, .reveal-node').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Enable JS scroll animation styles for interactive browsers
    document.documentElement.classList.add('js-scroll-enabled');

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-group, .reveal-node').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    let observer;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              // Unobserve once revealed so it stays permanently visible and does not flicker
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.02,
          rootMargin: '60px 0px 60px 0px',
        }
      );
    } catch {
      // Fallback if IntersectionObserver creation fails
      document.querySelectorAll('.reveal-on-scroll, .reveal-group, .reveal-node').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-group, .reveal-node');
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 800;

    elements.forEach((el) => {
      // If element is already in or near viewport on mount, reveal it immediately
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportHeight * 1.15) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    // Resilience Guarantee: Reveal any remaining unrevealed elements after 1.5 seconds
    // to guarantee that automated inspection tools, slow devices, or inactive users never miss content
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll:not(.is-revealed), .reveal-group:not(.is-revealed), .reveal-node:not(.is-revealed)').forEach((el) => {
        el.classList.add('is-revealed');
      });
    }, 1500);

    return () => {
      clearTimeout(fallbackTimer);
      elements.forEach((el) => {
        try {
          observer?.unobserve(el);
        } catch {}
      });
      try {
        observer?.disconnect();
      } catch {}
    };
  }, [trigger]);
}
