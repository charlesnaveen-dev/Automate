/**
 * Hutomate Design System - useGsapContext Hook
 * -----------------------------------------------------------------------------
 * Custom React hook for safely orchestrating GSAP animations within React's lifecycle.
 * - Creates a scoped gsap.context attached to a target container ref
 * - Automatically handles cleanup (ctx.revert()) on unmount or deps change
 * - Detects and respects prefers-reduced-motion
 * - Exposes the GSAP context instance for external control and dynamic tweens
 */

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion, isAutomatedEnvironment } from './motionConfig'

// Use layoutEffect on client to prevent layout shifts, fallback to useEffect on server/SSR
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * useGsapContext
 *
 * @param {import('react').RefObject<HTMLElement> | HTMLElement | string} scopeRef - React ref or scope element
 * @param {(context: gsap.Context, isReducedMotion: boolean) => void | (() => void)} animationCallback - Animation builder callback
 * @param {import('react').DependencyList} [deps=[]] - Dependency array to re-trigger context lifecycle
 * @returns {gsap.Context | null} The active GSAP context instance for external control
 *
 * @example
 * ```jsx
 * const containerRef = useRef(null)
 * const ctx = useGsapContext(containerRef, (self, isReduced) => {
 *   if (isReduced) {
 *     gsap.set('.card', { opacity: 1 })
 *     return
 *   }
 *   gsap.from('.card', {
 *     opacity: 0,
 *     y: 30,
 *     stagger: 0.1,
 *     duration: 0.6,
 *     ease: 'power3.out'
 *   })
 * }, [])
 * ```
 */
export function useGsapContext(scopeRef, animationCallback, deps = []) {
  const [context, setContext] = useState(null)
  const ctxRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    // Resolve scope: either a React ref object or a direct DOM node/selector
    const scopeElement =
      scopeRef && typeof scopeRef === 'object' && 'current' in scopeRef
        ? scopeRef.current
        : scopeRef

    // If scope element is not yet attached, skip
    if (!scopeElement || typeof animationCallback !== 'function') {
      return undefined
    }

    const isReduced = prefersReducedMotion() || isAutomatedEnvironment();

    // Create GSAP context scoped to container
    let ctx;
    try {
      ctx = gsap.context((self) => {
        animationCallback(self, isReduced)
      }, scopeElement)
    } catch (err) {
      console.warn('GSAP context initialization failed gracefully:', err);
    }

    ctxRef.current = ctx
    setContext(ctx)

    // Revert context on cleanup (kills animations, resets inline styles, clears scroll triggers)
    return () => {
      ctx.revert()
      ctxRef.current = null
    }
  }, deps)

  return context
}

export default useGsapContext
