import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.resolve(distDir, 'index.html');
const ssrDir = path.resolve(__dirname, '../dist-ssr');
const ssrBundlePath = path.resolve(ssrDir, 'App.js');

const BASE_URL = 'https://automat-ten.vercel.app';

const ROUTES = [
  {
    path: '/',
    title: 'Hutomate — International AI Automation & Intelligent Systems',
    description: 'Hutomate engineers AI agents, workflow automation, voice systems and custom AI solutions for businesses across the USA, UK, Australia and worldwide.',
  },
  {
    path: '/capabilities',
    title: 'Core Capabilities — Enterprise AI & Automation | Hutomate',
    description: "Explore Hutomate's core technical capabilities: Autonomous AI Agents, Workflow Automation, Voice AI & Telephony, and Custom Enterprise AI Solutions.",
  },
  {
    path: '/capabilities/ai-agents',
    title: 'Autonomous AI Agents — Enterprise Intelligence | Hutomate',
    description: 'Deploy multi-step autonomous AI agents that reason, plan, and execute across your enterprise software stack with human oversight.',
  },
  {
    path: '/capabilities/workflow-automation',
    title: 'Intelligent Workflow Automation — Connected Systems | Hutomate',
    description: 'Connect your CRM, ERP, and communication platforms with intelligent workflow pipelines that eliminate operational friction and manual data entry.',
  },
  {
    path: '/capabilities/voice-ai',
    title: 'Voice AI & Telephony — Autonomous Voice Agents | Hutomate',
    description: 'Sub-second conversational voice agents for inbound support, outbound qualification, and intelligent call routing integrated with your systems.',
  },
  {
    path: '/capabilities/custom-ai-solutions',
    title: 'Custom AI Solutions — Bespoke Intelligence Systems | Hutomate',
    description: 'Proprietary AI systems engineered for your domain: specialized LLM fine-tuning, RAG pipelines, and automated intelligence engines.',
  },
  {
    path: '/capabilities/custom-ai',
    title: 'Custom AI Solutions — Bespoke Intelligence Systems | Hutomate',
    description: 'Proprietary AI systems engineered for your domain: specialized LLM fine-tuning, RAG pipelines, and automated intelligence engines.',
  },
  {
    path: '/use-cases',
    title: 'AI Automation Use Cases — Enterprise Solutions | Hutomate',
    description: 'Explore production AI automation use cases across lead qualification, support operations, data reconciliation, document processing, and internal workflows.',
  },
  {
    path: '/industries',
    title: 'Industries We Serve — AI Automation by Sector | Hutomate',
    description: 'Discover how Hutomate designs and deploys custom AI automation for financial services, healthcare, logistics, e-commerce, professional services, and SaaS.',
  },
  {
    path: '/process',
    title: 'Our 5-Phase Implementation Process | Hutomate',
    description: 'From discovery audit to scalable enterprise deployment: discover how Hutomate designs, builds, and maintains custom AI automation systems.',
  },
  {
    path: '/about',
    title: 'About Hutomate — Intelligent Systems Partner',
    description: 'Learn about Hutomate, our mission to eliminate operational friction, our engineering principles, and how we build AI automation for international businesses.',
  },
  {
    path: '/blueprints',
    title: 'Automation Blueprints — Architectural Patterns | Hutomate',
    description: "Explore Hutomate's production architectural patterns and blueprints for autonomous AI agents, workflow pipelines, and enterprise integrations.",
  },
  {
    path: '/integrations',
    title: 'Connected Ecosystem & Integrations | Hutomate',
    description: "Seamlessly connect your CRM, communications, database, and custom tools with Hutomate's enterprise AI automation pipelines.",
  },
  {
    path: '/engagement',
    title: 'Engagement Models & Partnership | Hutomate',
    description: 'Flexible engagement models for enterprise AI implementation: fixed-scope sprints, dedicated automation squads, and enterprise retainers.',
  },
  {
    path: '/security',
    title: 'Enterprise Security & Privacy Standards | Hutomate',
    description: "Learn about Hutomate's enterprise-grade security practices, zero-retention data privacy guarantees, SOC-2 compliance alignment, and encryption standards.",
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions | Hutomate',
    description: "Find answers to common questions about Hutomate's AI automation services, implementation timelines, data privacy, security, and pricing models.",
  },
  {
    path: '/start-project',
    title: 'Start Your Project — Custom AI Automation Scoping | Hutomate',
    description: 'Tell us about your operational bottlenecks and get a tailored AI automation architecture proposal within 48 hours.',
  },
  {
    path: '/contact',
    title: 'Contact Hutomate — Start Your Automation Journey',
    description: "Get in touch with Hutomate's AI automation engineers to discuss your operational challenges and explore intelligent systems solutions.",
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Hutomate',
    description: "Hutomate's privacy policy outlining how we handle data, maintain zero-retention privacy guarantees, and protect client information.",
  },
  {
    path: '/terms',
    title: 'Terms of Service | Hutomate',
    description: "Terms of service governing use of Hutomate's website, consulting services, and custom AI automation implementations.",
  },
];

async function runPrerender() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}. Run "vite build" first.`);
  }

  if (!fs.existsSync(ssrBundlePath)) {
    throw new Error(`SSR bundle not found at ${ssrBundlePath}. Run "vite build --ssr src/App.jsx" first.`);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf8');
  const { default: App } = await import(ssrBundlePath);

  console.log(`Starting static prerendering for ${ROUTES.length} routes...`);

  for (const route of ROUTES) {
    const routeUrl = `${BASE_URL}${route.path === '/' ? '/' : route.path}`;
    const appHtml = renderToString(React.createElement(App, { initialPath: route.path }));

    let pageHtml = rawTemplate;

    // 1. Update <title>
    pageHtml = pageHtml.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${route.title}</title>`
    );

    // 2. Update meta description
    pageHtml = pageHtml.replace(
      /<meta[\s]+name="description"[\s]+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // 3. Ensure canonical URL
    if (pageHtml.includes('rel="canonical"')) {
      pageHtml = pageHtml.replace(
        /<link[\s]+rel="canonical"[\s]+href="[^"]*"\s*\/?>/i,
        `<link rel="canonical" href="${routeUrl}" />`
      );
    } else {
      pageHtml = pageHtml.replace(
        /<\/head>/i,
        `  <link rel="canonical" href="${routeUrl}" />\n  </head>`
      );
    }

    // 4. Update Open Graph tags
    pageHtml = pageHtml.replace(
      /<meta[\s]+property="og:title"[\s]+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta[\s]+property="og:description"[\s]+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta[\s]+property="og:url"[\s]+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${routeUrl}" />`
    );

    // 5. Update Twitter card tags
    pageHtml = pageHtml.replace(
      /<meta[\s]+name="twitter:title"[\s]+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta[\s]+name="twitter:description"[\s]+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // 6. Inject prerendered content into #root
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // 7. Write to target directory
    if (route.path === '/') {
      const outputFilePath = path.join(distDir, 'index.html');
      fs.writeFileSync(outputFilePath, pageHtml, 'utf8');
      console.log(`✓ Prerendered / -> index.html (${(pageHtml.length / 1024).toFixed(1)} KB)`);
    } else {
      const cleanPath = route.path.replace(/^\/+/, '');
      const routeDir = path.join(distDir, cleanPath);
      fs.mkdirSync(routeDir, { recursive: true });

      const dirIndexHtml = path.join(routeDir, 'index.html');
      const cleanHtmlFile = path.join(distDir, `${cleanPath}.html`);

      fs.writeFileSync(dirIndexHtml, pageHtml, 'utf8');
      // Also write clean .html file for edge servers/cleanUrls compatibility
      fs.mkdirSync(path.dirname(cleanHtmlFile), { recursive: true });
      fs.writeFileSync(cleanHtmlFile, pageHtml, 'utf8');

      console.log(`✓ Prerendered ${route.path} -> ${cleanPath}/index.html & ${cleanPath}.html (${(pageHtml.length / 1024).toFixed(1)} KB)`);
    }
  }

  // Remove temporary SSR directory
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
    console.log('✓ Cleaned up dist-ssr/');
  }

  console.log(`\n🎉 All ${ROUTES.length} routes successfully prerendered!`);
}

runPrerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
