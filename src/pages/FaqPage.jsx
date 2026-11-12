import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './FaqPage.css';

export default function FaqPage() {
  usePageMetadata({
    title: 'Frequently Asked Questions — Hutomate AI Implementation',
    description: 'Answers to common questions about our capabilities, technical process, security guardrails, pricing transparency, and project timelines.',
    path: '/faq',
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'capabilities', label: 'About & Capabilities' },
    { id: 'process', label: 'Process & Timelines' },
    { id: 'security', label: 'Security & Privacy' },
    { id: 'pricing', label: 'Pricing & Engagement' },
  ];

  const faqs = [
    {
      id: 'faq-1',
      category: 'capabilities',
      question: 'What does Hutomate do, exactly?',
      answer: (
        <>
          <p>
            Hutomate is an AI automation and implementation partner. We work with operational leaders to identify repetitive, high-drag business tasks, connect disparate software tools via APIs, and build purpose-engineered AI agents and automated workflows.
          </p>
          <p>
            We don't sell generic software licenses; we deliver working, maintainable production systems tailored to your specific operational workflows.
          </p>
        </>
      ),
    },
    {
      id: 'faq-2',
      category: 'capabilities',
      question: 'How is Hutomate different from no-code tools like Zapier or Make?',
      answer: (
        <>
          <p>
            While Zapier and Make are excellent for simple linear triggers (e.g. "when row added, send email"), complex business operations quickly hit walls: handling unstructured documents, multi-step semantic reasoning, complex error recovery, private knowledge retrieval (RAG), and strict compliance guardrails.
          </p>
          <p>
            Hutomate designs custom software architectures incorporating advanced LLMs, vision models, low-latency telephony, and robust custom API middleware that off-the-shelf no-code tools cannot reliably support.
          </p>
        </>
      ),
    },
    {
      id: 'faq-3',
      category: 'capabilities',
      question: 'Are you a software vendor or a consulting agency?',
      answer: (
        <p>
          We operate as an engineering implementation partner with a hybrid model. We deliver bespoke automation architectures for client projects, while continuously identifying repeatable patterns across businesses that evolve into modular, reusable components.
        </p>
      ),
    },
    {
      id: 'faq-4',
      category: 'capabilities',
      question: 'What is an "AI agent" and how is it different from a chatbot?',
      answer: (
        <p>
          A chatbot merely generates conversational text in response to user prompts. An AI agent, by contrast, is engineered to reason, plan, and take actions within authorized systems. It queries databases, extracts structured entities, executes API calls, validates results against schema rules, and escalates edge cases to human operators.
        </p>
      ),
    },
    {
      id: 'faq-5',
      category: 'process',
      question: 'How long does a typical implementation take?',
      answer: (
        <p>
          Implementation timelines depend on scope. A focused Phase 1 Process Audit is typically completed in 1 to 2 weeks. A scoped workflow automation or AI agent pilot generally requires 4 to 8 weeks from architecture sign-off to parallel testing and production cutover.
        </p>
      ),
    },
    {
      id: 'faq-6',
      category: 'process',
      question: 'What is required from our internal team during the project?',
      answer: (
        <p>
          We design our process to minimize disruption to your core team. In the discovery phase, we need 2-3 hours with key workflow stakeholders to map current steps. During build, we require authorized API credentials or sandbox access. Finally, during user acceptance testing, designated operators spend 1-2 weeks reviewing outputs in parallel.
        </p>
      ),
    },
    {
      id: 'faq-7',
      category: 'process',
      question: 'What happens if an automation breaks or a third-party API changes?',
      answer: (
        <p>
          We build with defensive engineering: automated retry queues, rate-limit backoffs, and immediate error alerting. Under our Monitored Maintenance & SLA Support retainers, our team monitors live telemetry, detects external API deprecations or schema changes, and deploys fixes proactively before operational disruption occurs.
        </p>
      ),
    },
    {
      id: 'faq-8',
      category: 'process',
      question: 'Can you work with our existing legacy or on-premise systems?',
      answer: (
        <p>
          Yes. While modern cloud SaaS APIs are easiest to connect, we regularly engineer secure middleware, SFTP drop listeners, and read-only SQL database replicas to connect older ERPs, CRM databases, or custom on-premise tools without requiring a costly total system replacement.
        </p>
      ),
    },
    {
      id: 'faq-9',
      category: 'security',
      question: 'Will our company data be used to train public AI models?',
      answer: (
        <p>
          No. Never. We configure all model integrations using enterprise API agreements with OpenAI, Anthropic, Google, and cloud providers that strictly enforce zero-retention and zero-training policies. Your confidential data and business documents remain entirely your intellectual property.
        </p>
      ),
    },
    {
      id: 'faq-10',
      category: 'security',
      question: 'How do you ensure AI agents do not hallucinate or make embarrassing mistakes?',
      answer: (
        <p>
          We enforce three layers of defense: deterministic JSON schemas that strictly constrain model output formats, grounding via Retrieval-Augmented Generation (RAG) referencing only verified company documents, and confidence threshold gates that automatically flag ambiguous decisions for human sign-off before committing actions.
        </p>
      ),
    },
    {
      id: 'faq-11',
      category: 'security',
      question: 'Where is our data hosted and processed?',
      answer: (
        <p>
          Data processing occurs within compliant, regionally appropriate cloud infrastructure (AWS, Google Cloud, or Supabase) with TLS 1.3 encryption in transit and AES-256 at rest. We accommodate regional data residency requirements for US, UK, and European clients.
        </p>
      ),
    },
    {
      id: 'faq-12',
      category: 'pricing',
      question: 'How much does an AI implementation project cost?',
      answer: (
        <p>
          Because every business environment involves different tools, data complexity, and operational volume, we do not believe in arbitrary one-size-fits-all pricing. After an initial discovery audit, we deliver a fixed-scope milestone proposal detailing exact deliverables, timelines, and transparent cloud infrastructure cost projections.
        </p>
      ),
    },
    {
      id: 'faq-13',
      category: 'pricing',
      question: 'What is the first step to get started with Hutomate?',
      answer: (
        <p>
          The simplest starting point is to submit a project inquiry via our Start a Project page or schedule an introductory discovery call. We’ll discuss the specific operational tasks causing friction and evaluate whether automation is a viable, high-ROI solution for your team.
        </p>
      ),
    },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="faq-page">
      <PageHeader
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        badgeText="Common Inquiries"
        badgeType="teal"
        title="Everything you need to know about working with Hutomate."
        description="Clear, honest answers to common questions about our technical capabilities, implementation methodology, security guardrails, and commercial models."
      >
        <Button variant="primary" size="md" arrow href="/start-project">
          Ask a Custom Question
        </Button>
        <Button variant="secondary" size="md" href="/contact">
          Contact Our Team
        </Button>
      </PageHeader>

      <section className="section detail-section">
        <div className="container">
          <div className="faq-categories-nav">
            {categories.map((c) => (
              <button
                key={c.id}
                className={`faq-cat-btn ${activeCategory === c.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="faq-list">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div key={faq.id} className="faq-item card">
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon-wrapper">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-panel">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Still have an unanswered question?"
        description="Our engineering team is happy to review your technical environment, compliance questions, or project timeline."
        buttonText="Get in Touch"
        buttonHref="/contact"
        secondaryButtonText="Start a Project"
        secondaryButtonHref="/start-project"
      />
    </div>
  );
}
