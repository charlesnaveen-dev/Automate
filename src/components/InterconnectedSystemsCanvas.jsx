import React, { useEffect, useRef } from 'react';

/**
 * InterconnectedSystemsCanvas
 * =============================================================================
 * High-performance, battery-conscious HTML5 canvas animation rendering
 * Hutomate's signature "Interconnected Systems" particle environment:
 * - Subtle glowing nodes (Electric Cyan #83DDE2, Deep Teal #167C80, Mist #E2EAEC)
 * - Gently moving network lines with dynamic proximity alpha
 * - Subtle traveling data packets evoking live workflows & deterministic events
 * - Automatic pause via IntersectionObserver when scrolled out of view
 * - Respects prefers-reduced-motion with single static constellation render
 * - HiDPI (Retina) crisp rendering capped at DPR 2
 * =============================================================================
 */
export default function InterconnectedSystemsCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId = null;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Node colors derived directly from Hutomate brand tokens
    const NODE_PALETTE = [
      { r: 131, g: 221, b: 226, type: 'cyan' },     // Electric Cyan (#83DDE2)
      { r: 131, g: 221, b: 226, type: 'cyan' },     // Weighted towards Cyan
      { r: 22,  g: 124, b: 128, type: 'teal' },     // Deep Teal (#167C80)
      { r: 226, g: 234, b: 236, type: 'mist' },     // Mist Grey (#E2EAEC)
    ];

    let nodes = [];
    let pulses = [];
    const mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999, active: false };

    // Setup dimensions and HiDPI buffer
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      initNodes();

      if (prefersReducedMotion) {
        renderStaticFrame();
      }
    };

    // Initialize nodes based on viewport size (restrained density)
    const initNodes = () => {
      if (width === 0 || height === 0) return;

      const isMobile = width < 768;
      const count = isMobile ? 22 : 46;

      nodes = [];
      for (let i = 0; i < count; i++) {
        const palette = NODE_PALETTE[Math.floor(Math.random() * NODE_PALETTE.length)];
        const isAccent = palette.type === 'cyan' && Math.random() > 0.65;

        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.4),
          vy: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.4),
          radius: isAccent ? 2.4 : Math.random() * 1.2 + 1.2,
          color: palette,
          isAccent,
          alpha: Math.random() * 0.4 + 0.45,
          pulseOffset: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          wobbleOffset: Math.random() * Math.PI * 2,
          wobbleSpeed: Math.random() * 0.015 + 0.008,
          wobbleAmp: Math.random() * 0.4 + 0.2,
        });
      }

      // Initialize occasional traveling data pulses between nodes
      pulses = [];
      const pulseCount = isMobile ? 3 : 6;
      for (let p = 0; p < pulseCount; p++) {
        pulses.push({
          sourceIdx: Math.floor(Math.random() * count),
          targetIdx: Math.floor(Math.random() * count),
          progress: Math.random(),
          speed: Math.random() * 0.006 + 0.003,
          active: false,
          color: { r: 131, g: 221, b: 226 },
        });
      }
    };

    // Render static frame for prefers-reduced-motion
    const renderStaticFrame = () => {
      if (!ctx || width === 0 || height === 0) return;
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const maxDist = width < 768 ? 95 : 130;

      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(131, 221, 226, ${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${node.alpha.toFixed(2)})`;
        ctx.fill();
      }

      ctx.restore();
    };

    // Main animation loop
    let lastTime = performance.now();

    const animate = (time) => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      const delta = Math.min((time - lastTime) / 16.666, 2.0);
      lastTime = time;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const maxDist = isMobile ? 95 : 135;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Harmonic organic drift (smooth subtle wave)
        node.wobbleOffset += node.wobbleSpeed * delta;
        const wobbleX = Math.cos(node.wobbleOffset) * node.wobbleAmp;
        const wobbleY = Math.sin(node.wobbleOffset) * node.wobbleAmp;

        node.x += (node.vx + wobbleX) * delta;
        node.y += (node.vy + wobbleY) * delta;

        // Gentle edge wrap with margin
        const pad = 20;
        if (node.x < -pad) node.x = width + pad;
        if (node.x > width + pad) node.x = -pad;
        if (node.y < -pad) node.y = height + pad;
        if (node.y > height + pad) node.y = -pad;

        // Subtle interactive mouse repulsion (restrained & damped)
        if (mouse.active) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mdist = Math.hypot(mdx, mdy);
          const mouseRadius = 140;
          if (mdist < mouseRadius && mdist > 0) {
            const force = (1 - mdist / mouseRadius) * 0.8 * delta;
            node.x += (mdx / mdist) * force;
            node.y += (mdy / mdist) * force;
          }
        }

        // Breathing pulse
        node.pulseOffset += node.pulseSpeed * delta;
        const pulseFactor = 0.85 + Math.sin(node.pulseOffset) * 0.15;
        const currentAlpha = Math.min(1, Math.max(0.1, node.alpha * pulseFactor));

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${currentAlpha.toFixed(3)})`;
        ctx.fill();

        // Subtle outer glow for key accent nodes
        if (node.isAccent) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(131, 221, 226, ${(currentAlpha * 0.18).toFixed(3)})`;
          ctx.fill();
        }
      }

      // Draw connecting lines between nearby points
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const distRatio = 1 - dist / maxDist;
            const lineAlpha = distRatio * 0.22;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            // Subtle gradient stroke between node colors
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(${a.color.r}, ${a.color.g}, ${a.color.b}, ${lineAlpha.toFixed(3)})`);
            grad.addColorStop(1, `rgba(${b.color.r}, ${b.color.g}, ${b.color.b}, ${lineAlpha.toFixed(3)})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = distRatio > 0.7 ? 0.9 : 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw traveling micro-data packets (interconnected systems workflow pulses)
      for (let p = 0; p < pulses.length; p++) {
        const pulse = pulses[p];
        const src = nodes[pulse.sourceIdx];
        const dst = nodes[pulse.targetIdx];

        if (!src || !dst) continue;

        const dist = Math.hypot(dst.x - src.x, dst.y - src.y);

        // Only pulse if connected within maxDist
        if (dist < maxDist && dist > 10) {
          pulse.progress += pulse.speed * delta;
          if (pulse.progress >= 1) {
            pulse.progress = 0;
            pulse.sourceIdx = pulse.targetIdx;
            // Pick a new connected target
            const candidates = [];
            for (let c = 0; c < nodes.length; c++) {
              if (c !== pulse.sourceIdx) {
                const cDist = Math.hypot(nodes[c].x - nodes[pulse.sourceIdx].x, nodes[c].y - nodes[pulse.sourceIdx].y);
                if (cDist < maxDist) candidates.push(c);
              }
            }
            pulse.targetIdx = candidates.length > 0
              ? candidates[Math.floor(Math.random() * candidates.length)]
              : Math.floor(Math.random() * nodes.length);
          }

          const px = src.x + (dst.x - src.x) * pulse.progress;
          const py = src.y + (dst.y - src.y) * pulse.progress;
          const pAlpha = Math.sin(pulse.progress * Math.PI) * 0.75;

          ctx.beginPath();
          ctx.arc(px, py, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(131, 221, 226, ${pAlpha.toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, 3.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(131, 221, 226, ${(pAlpha * 0.22).toFixed(3)})`;
          ctx.fill();
        } else {
          // If nodes drift apart, re-bind pulse to a connected pair
          pulse.sourceIdx = Math.floor(Math.random() * nodes.length);
          pulse.targetIdx = Math.floor(Math.random() * nodes.length);
          pulse.progress = 0;
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Mouse listeners for subtle organic interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Resize handling via ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(canvas);

    // Pause animation when scrolled offscreen to conserve CPU / GPU
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId && !prefersReducedMotion) {
            lastTime = performance.now();
            animationFrameId = requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(canvas);

    // Initial resize & start
    resize();
    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`interconnected-systems-canvas ${className}`}
      aria-hidden="true"
    />
  );
}
