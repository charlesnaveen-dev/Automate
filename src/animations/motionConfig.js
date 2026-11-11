/**
 * Hutomate Design System - Motion & GSAP Animation Configuration
 * -----------------------------------------------------------------------------
 * Centralized easing formulas, timing constants, stagger intervals,
 * ScrollTrigger defaults, reduced-motion detection, and GSAP animation presets.
 */

/**
 * Standard Easing Curves
 * GSAP string easings and corresponding CSS cubic-beziers.
 */
export const EASING = {
  // Primary fluid curve for Hutomate UI animations
  smooth: 'power3.out',
  // Snappy transition for interactive micro-actions
  sharp: 'power2.inOut',
  // Expressive overshoot for playful accents and badges
  bounce: 'back.out(1.7)',
  // Natural acceleration/deceleration
  smoothIn: 'power3.in',
  smoothOut: 'power3.out',
  expoOut: 'expo.out',
  linear: 'none',

  // CSS cubic-bezier counterparts for CSS transitions
  css: {
    smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
}

/**
 * Standard Duration Constants (in seconds for GSAP)
 */
export const DURATION = {
  fast: 0.3,
  medium: 0.6,
  slow: 1.0,
  xslow: 1.5,
}

/**
 * Stagger Durations between sequential sibling elements
 */
export const STAGGER = {
  fast: 0.05,
  medium: 0.1,
  slow: 0.18,
  cards: 0.12,
  list: 0.08,
  words: 0.04,
}

/**
 * Default ScrollTrigger Configuration
 * Ensures unified scroll-triggered reveals across sections.
 */
export const SCROLL_TRIGGER_DEFAULTS = {
  start: 'top 85%',
  end: 'bottom 20%',
  toggleActions: 'play none none none',
  once: true,
  scrub: false,
}

/**
 * Detects whether the user prefers reduced motion via operating system settings.
 *
 * @returns {boolean} True if prefers-reduced-motion is active
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Detects whether the execution environment is an automated browser, crawler, or headless tool.
 *
 * @returns {boolean} True if running under automation or crawler environment
 */
export const isAutomatedEnvironment = () => {
  if (typeof window === 'undefined') return true;
  if (window.navigator?.webdriver) return true;
  const ua = window.navigator?.userAgent || '';
  return /bot|crawler|spider|headless|phantom|lighthouse|pagespeed|bingbot|yandex|slurp|baiduspider|inspection|preview|prerender/i.test(ua);
}

/**
 * GSAP Animation Presets
 * Each preset provides paired 'from' and 'to' parameters.
 */
export const ANIMATION_PRESETS = {
  // Reveal element moving subtly upward
  fadeUp: {
    from: { opacity: 0, y: 32 },
    to: {
      opacity: 1,
      y: 0,
      duration: DURATION.medium,
      ease: EASING.smooth,
      clearProps: 'transform',
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1, duration: 0.2, clearProps: 'all' },
    },
  },

  // Simple clean opacity fade
  fadeIn: {
    from: { opacity: 0 },
    to: {
      opacity: 1,
      duration: DURATION.medium,
      ease: EASING.smooth,
      clearProps: 'opacity',
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1, duration: 0.2, clearProps: 'all' },
    },
  },

  // Scale in from 94% with slight elevation
  scaleIn: {
    from: { opacity: 0, scale: 0.94 },
    to: {
      opacity: 1,
      scale: 1,
      duration: DURATION.medium,
      ease: EASING.smooth,
      clearProps: 'transform',
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1, duration: 0.2, clearProps: 'all' },
    },
  },

  // Slide in from right to left
  slideLeft: {
    from: { opacity: 0, x: 40 },
    to: {
      opacity: 1,
      x: 0,
      duration: DURATION.medium,
      ease: EASING.smooth,
      clearProps: 'transform',
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1, duration: 0.2, clearProps: 'all' },
    },
  },

  // Slide in from left to right
  slideRight: {
    from: { opacity: 0, x: -40 },
    to: {
      opacity: 1,
      x: 0,
      duration: DURATION.medium,
      ease: EASING.smooth,
      clearProps: 'transform',
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1, duration: 0.2, clearProps: 'all' },
    },
  },
}

/**
 * Helper to retrieve preset config, honoring reduced-motion preferences.
 *
 * @param {keyof typeof ANIMATION_PRESETS} presetName
 * @param {object} [customOverrides] Additional GSAP vars to blend into 'to'
 * @returns {{ from: object, to: object }}
 */
export const getPresetConfig = (presetName, customOverrides = {}) => {
  const isReduced = prefersReducedMotion()
  const preset = ANIMATION_PRESETS[presetName] || ANIMATION_PRESETS.fadeUp

  if (isReduced) {
    return {
      from: { ...preset.reducedMotion.from },
      to: { ...preset.reducedMotion.to, ...customOverrides },
    }
  }

  return {
    from: { ...preset.from },
    to: { ...preset.to, ...customOverrides },
  }
}

export default {
  EASING,
  DURATION,
  STAGGER,
  SCROLL_TRIGGER_DEFAULTS,
  ANIMATION_PRESETS,
  prefersReducedMotion,
  getPresetConfig,
}
