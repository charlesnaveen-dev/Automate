import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroSection from '../sections/HeroSection';
import BrandIntroSection from '../sections/BrandIntroSection';
import CapabilitiesSection from '../sections/CapabilitiesSection';
import IndustriesPreviewSection from '../sections/IndustriesPreviewSection';
import ProcessPreviewSection from '../sections/ProcessPreviewSection';
import FinalCtaSection from '../sections/FinalCtaSection';
import './HomePage.css';

export default function HomePage() {
  usePageMetadata({
    title: 'Hutomate — International AI Automation & Intelligent Systems',
    description: 'Hutomate engineers AI agents, workflow automation, voice systems and custom AI solutions for businesses across the USA, UK, Australia and worldwide.',
    path: '/',
  });

  useScrollReveal();

  return (
    <div className="home-page-view">
      {/* Section 01: Existing Cinematic Dark Hero (Strictly preserved) */}
      <HeroSection />

      {/* Section 02: Brand Introduction ("Business operations deserve better technology") */}
      <BrandIntroSection />

      {/* Section 03: Core Capabilities ("Intelligence built around the way you work") */}
      <CapabilitiesSection />

      {/* Section 04: Industries Preview ("Technology that adapts to your industry") */}
      <IndustriesPreviewSection />


      {/* Section 06: Process Preview ("From the first idea to real-world implementation") */}
      <ProcessPreviewSection />

      {/* Section 07: Final Closing CTA ("Let's make your business work smarter") */}
      <FinalCtaSection />
    </div>
  );
}
