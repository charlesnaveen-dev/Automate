import React, { useRef, useEffect, useState } from 'react';
import Button from './Button';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import './CapabilitiesHero3D.css';

/**
 * CapabilitiesHero3D Component
 * Premium 3D Abstract Architectural Product Sculpture Hero
 * - Split composition: Confident editorial copy on left, precision 3D architectural sculpture on right
 * - Multi-layered geometric structure: solid deep teal, matte white porcelain, translucent cyan glass
 * - Central Hutomate master brand core
 * - Genuinely animated with progressive entry reveal, gentle continuous floating, and mouse parallax
 */
export default function CapabilitiesHero3D() {
  const heroRef = useRef(null);
  const stageRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Mouse Parallax tracking with smooth damping
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x, y });
    };

    const handleMouseLeave = () => {
      setMouseOffset({ x: 0, y: 0 });
    };

    const node = heroRef.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove, { passive: true });
      node.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    return () => {
      if (node) {
        node.removeEventListener('mousemove', handleMouseMove);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // GSAP Entry Reveal & Continuous Motion Orchestration
  useGsapContext(heroRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set(
        [
          '.cap-3d-eyebrow-row',
          '.cap-3d-headline',
          '.cap-3d-desc',
          '.cap-3d-cta-wrap',
          '.cap-sculpture-layer',
          '.cap-sculpture-core',
        ],
        { opacity: 1, transform: 'none' }
      );
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Left Editorial Typography Sequence
    tl.fromTo(
      '.cap-3d-eyebrow-row',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      .fromTo(
        '.cap-3d-headline',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.35'
      )
      .fromTo(
        '.cap-3d-desc',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.cap-3d-cta-wrap',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.35'
      );

    // 2. 3D Architectural Sculpture Progressive Assembly
    tl.fromTo(
      '.cap-layer-plinth',
      { opacity: 0, scale: 0.9, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power2.out' },
      0.3
    )
      .fromTo(
        '.cap-layer-teal-block',
        { opacity: 0, z: -80, x: -20 },
        { opacity: 1, z: 0, x: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.cap-layer-white-monolith',
        { opacity: 0, z: -60, y: -20 },
        { opacity: 1, z: 0, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.cap-layer-glass-blade',
        { opacity: 0, z: -40, rotationY: 20 },
        { opacity: 1, z: 0, rotationY: 0, duration: 0.85 },
        '-=0.6'
      )
      .fromTo(
        '.cap-layer-orbit-rings',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.75 },
        '-=0.5'
      )
      .fromTo(
        '.cap-sculpture-core',
        { opacity: 0, scale: 0.75, z: 120 },
        { opacity: 1, scale: 1, z: 80, duration: 0.8, ease: 'back.out(1.4)' },
        '-=0.5'
      );
  }, []);

  // Compute live parallax rotation angles
  const rotX = 14 + mouseOffset.y * -9;
  const rotY = -22 + mouseOffset.x * 12;

  return (
    <section className="cap-3d-hero-section" ref={heroRef} aria-label="Capabilities Hero">
      {/* Background Architectural Grid and Technical Ambient Light */}
      <div className="cap-3d-bg-canvas" aria-hidden="true">
        <div className="cap-3d-grid-pattern" />
        <div className="cap-3d-ambient-light" />
        <svg
          className="cap-3d-bg-crosshairs"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <g stroke="rgba(8, 127, 131, 0.35)" strokeWidth="1">
            <path d="M 120,60 L 120,70 M 115,65 L 125,65" />
            <path d="M 640,40 L 640,50 M 635,45 L 645,45" />
            <path d="M 1320,80 L 1320,90 M 1315,85 L 1325,85" />
            <path d="M 180,480 L 180,490 M 175,485 L 185,485" />
            <path d="M 1280,460 L 1280,470 M 1275,465 L 1285,465" />
          </g>
        </svg>
      </div>

      <div className="container cap-3d-container">
        <div className="cap-3d-split-layout">
          {/* Left Column: Confident Editorial Typography */}
          <div className="cap-3d-editorial-col">
            <div className="cap-3d-eyebrow-row">
              <span className="cap-3d-eyebrow">CAPABILITIES</span>
              <span className="cap-3d-eyebrow-rule" aria-hidden="true" />
              <span className="cap-3d-eyebrow-crosshair" aria-hidden="true">+</span>
            </div>

            <h1 className="cap-3d-headline">
              Intelligence that <br />
              moves business <span className="cap-3d-teal">forward.</span>
            </h1>

            <p className="cap-3d-desc">
              We combine AI, automation and intelligent systems to build connected solutions
              that help businesses operate smarter, faster and more efficiently.
            </p>

            <div className="cap-3d-cta-wrap">
              <Button
                variant="primary"
                size="md"
                arrow
                href="#capabilities-content"
                aria-label="Explore Our Capabilities"
              >
                Explore Our Capabilities
              </Button>
            </div>
          </div>

          {/* Right Column: Custom 3D Architectural Product Sculpture */}
          <div className="cap-3d-sculpture-col" aria-hidden="true">
            <div className="cap-3d-viewport">
              <div
                className="cap-3d-stage"
                ref={stageRef}
                style={{
                  transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
                }}
              >
                {/* Layer 0: Ground Foundation Plinth with Technical Laser Markings */}
                <div className="cap-sculpture-layer cap-layer-plinth">
                  <div className="cap-plinth-face">
                    <div className="cap-plinth-grid" />
                    <div className="cap-plinth-marker top-left">+ 01</div>
                    <div className="cap-plinth-marker top-right">SYS // ARCH</div>
                    <div className="cap-plinth-marker bottom-left">HUTOMATE.CORP</div>
                    <div className="cap-plinth-marker bottom-right">3D.00</div>
                  </div>
                </div>

                {/* Layer 1: Solid Deep Teal Structural Cantilever Block */}
                <div className="cap-sculpture-layer cap-layer-teal-block">
                  <div className="cap-teal-block-top">
                    <span className="cap-teal-spec-label">INTELLIGENCE MATRIX</span>
                  </div>
                  <div className="cap-teal-block-front" />
                  <div className="cap-teal-block-side" />
                </div>

                {/* Layer 2: Intersecting Matte White Monolithic Pillar */}
                <div className="cap-sculpture-layer cap-layer-white-monolith">
                  <div className="cap-white-monolith-top" />
                  <div className="cap-white-monolith-front">
                    <div className="cap-monolith-hairline" />
                  </div>
                  <div className="cap-white-monolith-side" />
                </div>

                {/* Layer 3: Translucent Electric Cyan / Teal Refractive Blade */}
                <div className="cap-sculpture-layer cap-layer-glass-blade">
                  <div className="cap-glass-inner">
                    <div className="cap-glass-sheen" />
                  </div>
                </div>

                {/* Layer 4: Geometric Precision Orbital Rings */}
                <div className="cap-sculpture-layer cap-layer-orbit-rings">
                  <svg
                    className="cap-orbit-svg"
                    viewBox="0 0 320 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="160"
                      cy="160"
                      r="135"
                      stroke="rgba(8, 127, 131, 0.35)"
                      strokeWidth="1.2"
                      strokeDasharray="6 6"
                    />
                    <circle
                      cx="160"
                      cy="160"
                      r="95"
                      stroke="rgba(131, 221, 226, 0.45)"
                      strokeWidth="1.5"
                    />
                    <circle cx="295" cy="160" r="4.5" fill="#83DDE2" />
                    <circle cx="65" cy="160" r="4.5" fill="#087F83" />
                    <circle cx="160" cy="25" r="4.5" fill="#83DDE2" />
                  </svg>
                </div>

                {/* Layer 5: Apex Hutomate Master Identity Medallion */}
                <div className="cap-sculpture-core">
                  <div className="cap-core-disc">
                    <div className="cap-core-bezel" />
                    <div className="cap-core-inner">
                      <img
                        src="/hutomate_wordmark_navy.png"
                        alt="Hutomate"
                        className="cap-core-wordmark-img"
                        height={24}
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
