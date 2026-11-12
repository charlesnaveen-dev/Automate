import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../sections/CapabilitiesSection.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Locked Capabilities Page Hero
 * STRICTLY LOCKED APPROVED DESIGN:
 * - Headline: "Intelligence built around the way you work."
 * - Cyan-to-lavender gradient
 * - Atmospheric dark navy background with descending radial orb
 * - Pinned scroll GSAP animation sequence
 */
export default function LockedCapabilitiesHero() {
  const introRef = useRef(null);
  const orbRef = useRef(null);
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subheadRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isAutomated =
      Boolean(window.navigator?.webdriver) ||
      /bot|googlebot|crawler|spider|headless|phantom|lighthouse|pagespeed|bingbot|yandex|slurp|baiduspider|inspection|preview|prerender/i.test(
        navigator.userAgent || ''
      );

    if (prefersReduced || isAutomated || !introRef.current) return;

    let ctx;
    try {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top top',
            end: '+=100%',
            pin: true,
            pinSpacing: true,
            scrub: 0.9,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        tl.fromTo(
          eyebrowRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out', duration: 0.3 },
          0.1
        )
        .fromTo(
          line1Ref.current,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: 'power3.out', duration: 0.45 },
          0.2
        )
        .fromTo(
          line2Ref.current,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: 'power3.out', duration: 0.45 },
          0.28
        )
        .to(
          orbRef.current,
          { y: 160, scale: 1.25, opacity: 0.75, ease: 'power1.inOut', duration: 0.5 },
          0.35
        )
        .fromTo(
          subheadRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out', duration: 0.4 },
          0.42
        )
        .to({}, { duration: 0.15 });
      }, introRef);
    } catch (err) {
      console.warn('Capabilities locked hero GSAP fallback:', err);
    }

    return () => {
      try {
        ctx?.revert();
      } catch {}
    };
  }, []);

  return (
    <section className="capabilities-home-section" aria-label="Core Capabilities">
      <div className="cap-intro-experience" ref={introRef}>
        <div className="cap-radial-visual" ref={orbRef} aria-hidden="true" />

        <div className="container">
          <div className="cap-home-header">
            <div className="cap-home-eyebrow" ref={eyebrowRef}>
              <span className="cap-eyebrow-beacon" aria-hidden="true" />
              <span className="cap-eyebrow-text">CORE CAPABILITIES</span>
            </div>

            <h2 className="cap-home-headline">
              <span className="cap-headline-line-wrap">
                <span className="cap-headline-line" ref={line1Ref}>
                  Intelligence built around the
                </span>
              </span>
              <span className="cap-headline-line-wrap">
                <span className="cap-headline-line cap-headline-accent" ref={line2Ref}>
                  way you work.
                </span>
              </span>
            </h2>

            <p className="cap-home-subhead" ref={subheadRef}>
              We architect and deploy practical intelligent systems that eliminate administrative drag, connect your software tools, and help your business scale efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
