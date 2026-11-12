import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './BlueprintsPage.css';

export default function BlueprintsPage() {
  usePageMetadata({
    title: 'System Blueprints — Architectural Concepts & Workflows',
    description: 'Explore conceptual architecture blueprints illustrating data flows, model boundaries, and human oversight gates for common operational automations.',
    path: '/blueprints',
  });

  useScrollReveal();

  const blueprints = [
    {
      num: '01',
      title: 'Omnichannel Inbound Enquiry Triage Engine',
      desc: 'An automated routing pipeline that ingests customer messages from multiple channels, extracts core entities, scores urgency, and routes them to specialized teams.',
      nodes: [
        { stage: 'Stage 1: Ingestion', title: 'Multi-Channel Ingest', items: 'Webhooks from Email, Web forms, Zendesk, WhatsApp & Intercom.' },
        { stage: 'Stage 2: Parsing', title: 'Entity & Sentiment Extraction', items: 'Classifies intent, parses order IDs, and calculates sentiment/urgency score.' },
        { stage: 'Stage 3: Routing', title: 'Conditional Dispatch', items: 'Routes high-priority issues to Slack/PagerDuty; standard tickets to specialized queues.' },
        { stage: 'Stage 4: Escalation', title: 'Human Oversight Gate', items: 'Low-confidence queries (<90%) routed to staff inbox with pre-drafted response.' },
      ],
      stack: 'Zendesk API, OpenAI Function Calling, Pinecone, Slack Webhooks',
      safeguard: 'Zero automated destructive actions; automated drafting only until confidence thresholds are proven.',
    },
    {
      num: '02',
      title: 'Grounded Knowledge Retrieval & Copilot (RAG)',
      desc: 'A domain-specific internal search and drafting copilot that queries approved company documentation to give accurate, citation-backed answers.',
      nodes: [
        { stage: 'Stage 1: Ingestion', title: 'Document Sync Pipeline', items: 'Scheduled workers sync Notion, Google Docs, Confluence & PDF manuals.' },
        { stage: 'Stage 2: Processing', title: 'Chunking & Embedding', items: 'Recursive text chunking with metadata tagging and vector embeddings.' },
        { stage: 'Stage 3: Retrieval', title: 'Semantic Search & Reranking', items: 'Hybrid keyword + dense vector retrieval with cross-encoder reranking.' },
        { stage: 'Stage 4: Generation', title: 'Citation Grounding', items: 'LLM generates response strictly referencing retrieved source snippets.' },
      ],
      stack: 'Qdrant Vector DB, Cohere Rerank, Claude 3.5 Sonnet / GPT-4o, Custom Web UI',
      safeguard: 'Strict hallucination guardrails: if retrieved relevance score is insufficient, the system explicitly states it lacks the required knowledge.',
    },
    {
      num: '03',
      title: 'Intelligent Accounts Payable & Invoice Processing',
      desc: 'An automated pipeline converting incoming vendor PDFs into structured bookkeeping entries with 3-way matching and human approval sign-off.',
      nodes: [
        { stage: 'Stage 1: Ingestion', title: 'Billing Inbox Ingestion', items: 'IMAP / Webhook monitors billing@ inbox for attached invoice documents.' },
        { stage: 'Stage 2: Extraction', title: 'Vision OCR Extraction', items: 'Extracts vendor details, VAT/tax IDs, line items, and bank account numbers.' },
        { stage: 'Stage 3: Verification', title: '3-Way Match Validation', items: 'Cross-checks total and line items against issued Purchase Orders in ERP.' },
        { stage: 'Stage 4: Execution', title: 'Draft Bill & Approval', items: 'Creates draft bill in Xero/QuickBooks with one-click Slack approval button.' },
      ],
      stack: 'AWS Textract, Python ETL, Xero Accounting API, Slack Interactive Buttons',
      safeguard: 'Bank payouts are never automated. The system only populates draft bills; humans retain final authorization.',
    },
    {
      num: '04',
      title: 'Voice AI Inbound Screening & Appointment Coordination',
      desc: 'A low-latency conversational telephony agent that answers inbound calls, resolves frequent operational inquiries, and schedules appointments directly into staff calendars.',
      nodes: [
        { stage: 'Stage 1: Telephony', title: 'SIP / PSTN Audio Trunk', items: 'Twilio Voice stream connects caller with Voice Activity Detection (VAD).' },
        { stage: 'Stage 2: Streaming', title: 'Real-time STT & Dialog', items: 'Sub-200ms speech-to-text streams caller audio into conversational LLM.' },
        { stage: 'Stage 3: Tool Call', title: 'Calendar & CRM Commit', items: 'Agent checks availability via API and reserves requested consultation slot.' },
        { stage: 'Stage 4: Fallback', title: 'Warm Human Transfer', items: 'Caller can request human transfer at any point with live context briefing.' },
      ],
      stack: 'Twilio Voice, Deepgram Nova-2, Cartesia Sonic, Google Calendar API',
      safeguard: 'Always self-identifies as an AI assistant. Immediate failover to live voicemail or call transfer if audio degrades.',
    },
  ];

  return (
    <div className="blueprints-page">
      <PageHeader
        eyebrow="SYSTEM BLUEPRINTS"
        badgeText="Conceptual System Flows"
        badgeType="teal"
        title="System blueprints: how modern AI workflows are assembled."
        description="Explore conceptual architecture blueprints illustrating data flows, component interactions, model boundaries, and human oversight gates for common operational automations."
      >
        <Button variant="primary" size="md" arrow href="/start-project">
          Commission a Custom Blueprint
        </Button>
        <Button variant="secondary" size="md" href="/integrations">
          View Supported Tools
        </Button>
      </PageHeader>

      <section className="section detail-section">
        <div className="container">
          <div className="blueprints-container">
            {blueprints.map((bp) => (
              <div key={bp.num} className="blueprint-card card card-hover-lift reveal-on-scroll">
                <div className="blueprint-header-row">
                  <span className="blueprint-num">BLUEPRINT {bp.num}</span>
                  <span className="blueprint-badge">
                    <ShieldCheck size={14} /> Conceptual System Architecture — Custom Engineered Per Client
                  </span>
                </div>

                <h2 className="blueprint-title">{bp.title}</h2>
                <p className="blueprint-desc">{bp.desc}</p>

                <div className="blueprint-flow-diagram">
                  {bp.nodes.map((node, i) => (
                    <div key={i} className="flow-node">
                      <span className="node-stage">{node.stage}</span>
                      <h4 className="node-title">{node.title}</h4>
                      <p className="node-items">{node.items}</p>
                    </div>
                  ))}
                </div>

                <div className="blueprint-details-row">
                  <div className="blueprint-detail-block">
                    <span className="detail-label">Underlying Technology Stack</span>
                    <span className="detail-val">{bp.stack}</span>
                  </div>
                  <div className="blueprint-detail-block">
                    <span className="detail-label">Built-in Safety Guardrails</span>
                    <span className="detail-val">{bp.safeguard}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need an architecture blueprint for your unique workflow?"
        description="We evaluate your specific technical requirements, internal tools, and compliance needs to engineer a custom system blueprint."
        buttonText="Request an Architecture Review"
        buttonHref="/start-project"
        secondaryButtonText="Explore Capabilities"
        secondaryButtonHref="/capabilities"
      />
    </div>
  );
}
