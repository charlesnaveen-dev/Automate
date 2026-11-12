import {
  Bot,
  Workflow,
  Mic,
  Cpu,
  Database,
  PhoneCall,
  Calendar,
  ShieldCheck,
  GitBranch,
  Layers,
  FileText,
  UserCheck,
  CheckCircle2,
  RefreshCw,
  Terminal,
  BarChart3
} from 'lucide-react';

export const CAPABILITIES_DATA = [
  {
    id: 'ai-agents',
    num: '01',
    navTitle: 'AI Agents',
    title: 'AI Agents',
    eyebrow: '01 / AI AGENTS',
    route: '/capabilities/ai-agents',
    icon: Bot,
    tagline: 'Autonomous Task Execution & Grounded Reasoning',
    heroBadge: 'AUTONOMOUS REASONING & EXECUTION',
    heroHeadline: 'AI agents that understand context, make decisions, and execute business tasks.',
    heroDescription: 'We build autonomous software agents that interpret natural language, retrieve verified company knowledge, and execute complex multi-step workflows across your business tools—with strict human-in-the-loop oversight.',
    heroMetrics: [
      { value: '99.4%', label: 'Intent Classification' },
      { value: '< 1.2s', label: 'Reasoning Execution Loop' },
      { value: '100%', label: 'Auditable Guardrails' }
    ],
    businessProblem: {
      lead: 'Knowledge work is weighed down by repetitive manual triage, disconnected information, and delayed responses.',
      challenges: [
        {
          title: 'Manual Inquiry Triage Drag',
          desc: 'High-salary teams spend hours each day reading, classifying, and routing customer or internal requests instead of focusing on high-value casework.'
        },
        {
          title: 'Information Trapped in Silos',
          desc: 'Critical company policies, product documentation, and customer histories live in disparate databases, making accurate answers slow to retrieve.'
        },
        {
          title: 'Error-Prone Manual Form Entry',
          desc: 'Copying unstructured data from customer emails and PDFs into internal databases leads to frequent clerical errors and slow turnarounds.'
        },
        {
          title: 'Unchecked AI Hallucination Risks',
          desc: 'Deploying off-the-shelf generative chat tools without bounded permissions and human checkpoints introduces unacceptable operational liabilities.'
        }
      ]
    },
    whatWeBuild: [
      {
        title: 'Inbound Inquiry & Triage Agents',
        desc: 'Interprets inbound client emails or portal tickets, extracts key entities, checks client records, and stages formatted draft replies or routes to the proper specialist.',
        icon: UserCheck
      },
      {
        title: 'Grounded Knowledge Retrieval Copilots',
        desc: 'Private vector-search agents that index proprietary manuals, SOPs, and documentation to answer employee questions with precise line-item source citations.',
        icon: Database
      },
      {
        title: 'Intelligent Document Extraction Pipelines',
        desc: 'Parses complex multi-page PDFs, contracts, and receipts, extracting structured key-value schemas directly into your ERP or CRM.',
        icon: FileText
      },
      {
        title: 'Action-Executing Operations Agents',
        desc: 'Sandboxed agents authorized to trigger specific business tools—such as provisioning accounts, updating status flags, and drafting calendar invites.',
        icon: CheckCircle2
      }
    ],
    howItWorks: {
      summary: 'Every agent operates within a disciplined execution loop: ground truth retrieval, deterministic schema validation, and explicit confidence thresholds.',
      steps: [
        { step: '01', title: 'Receive Request', desc: 'An incoming customer email, webhook, form submission, or ticket invokes the agent.' },
        { step: '02', title: 'Retrieve Context', desc: 'The agent queries permission-filtered vector stores and databases for verified facts.' },
        { step: '03', title: 'Interpret & Reason', desc: 'Identifies intent, maps required data fields, and formulates an action plan.' },
        { step: '04', title: 'Execute Tool Action', desc: 'Performs approved operations via sandboxed APIs (CRM update, ticket dispatch, email draft).' },
        { step: '05', title: 'Confidence Gate', desc: 'If confidence drops below threshold (e.g. 95%), execution halts for human approval.' },
        { step: '06', title: 'Audit & Conclude', desc: 'All prompt traces, reasoning logs, and data outputs are saved for compliance review.' }
      ]
    },
    practicalApplications: [
      {
        title: 'Customer Support & Ticket Triage',
        domain: 'Support Operations',
        desc: 'Classifies incoming inquiries, resolves frequent technical questions from documentation, and stages escalations with full historical context.'
      },
      {
        title: 'Lead Qualification & Follow-up',
        domain: 'Sales & Inbound',
        desc: 'Analyzes prospect web inquiries, scores match against ideal client criteria, and drafts personalized follow-up briefs for account executives.'
      },
      {
        title: 'Internal Knowledge Assistants',
        domain: 'Corporate Knowledge',
        desc: 'Allows engineers and staff to query thousands of pages of internal SOPs, security guidelines, and architectural specs in natural language.'
      },
      {
        title: 'Client Onboarding Verification',
        domain: 'Client Operations',
        desc: 'Reviews client-submitted documents for required fields, verifies completeness, and notifies client managers of missing items.'
      }
    ],
    businessBenefits: [
      { title: '24/7 Task Execution', desc: 'Processes requests, classifies documents, and logs tickets around the clock with zero backlog.' },
      { title: 'Zero Hallucination Tolerance', desc: 'Answers strictly grounded in your verified documentation with clickable source references.' },
      { title: 'Complete Human Control', desc: 'Staff retain approval checkpoints on sensitive decisions, financial records, and client emails.' },
      { title: 'Full Auditability', desc: 'Every reasoning trace, input prompt, and executed tool call is logged in tamper-evident audit trails.' }
    ],
    integrations: ['Slack', 'Notion', 'HubSpot', 'Salesforce', 'Zendesk', 'Google Workspace', 'PostgreSQL', 'Linear'],
    ctaPrimary: 'Discuss AI Agent Solutions',
    ctaPrimaryHref: '/start-project?service=ai-agents',
    ctaSecondary: 'View AI Agent Specifications',
    ctaSecondaryHref: '/capabilities/ai-agents'
  },
  {
    id: 'workflow-automation',
    num: '02',
    navTitle: 'Workflow Automation',
    title: 'Workflow Automation',
    eyebrow: '02 / WORKFLOW AUTOMATION',
    route: '/capabilities/workflow-automation',
    icon: Workflow,
    tagline: 'Connected Operations & Reliable System Pipelines',
    heroBadge: 'CONNECTED OPERATIONS & SYSTEM PIPELINES',
    heroHeadline: 'Connect business tools and eliminate manual operational bottlenecks.',
    heroDescription: 'We architect robust, event-driven automation pipelines that eliminate manual data re-entry, coordinate multi-system processes, and keep your software stack synchronized in real time.',
    heroMetrics: [
      { value: '100%', label: 'Data Accuracy' },
      { value: '< 500ms', label: 'Event Trigger Latency' },
      { value: '0', label: 'Manual Copy-Pasting' }
    ],
    businessProblem: {
      lead: 'Modern businesses use dozens of specialized SaaS tools, but the data handoffs between them are manual, sluggish, and error-prone.',
      challenges: [
        {
          title: 'Manual Copy-Paste Drag',
          desc: 'Employees spend valuable hours copying names, billing details, and contract files between CRMs, spreadsheets, and billing tools.'
        },
        {
          title: 'Disconnected Operational Silos',
          desc: 'Sales closes a deal, but fulfillment and billing teams operate on separate systems with delayed or mismatched records.'
        },
        {
          title: 'Silent Failures & Lost Leads',
          desc: 'Fragile DIY automations break silently when API schemas change, causing missed customer inquiries and billing discrepancies.'
        },
        {
          title: 'Slow Hand-offs and Bottlenecks',
          desc: 'Critical customer requests sit waiting in employee inboxes for manual approvals, slowing down operational cycle times.'
        }
      ]
    },
    whatWeBuild: [
      {
        title: 'Bidirectional CRM & ERP Sync',
        desc: 'Continuous real-time data sync between Salesforce, HubSpot, QuickBooks, and databases with automatic deduplication.',
        icon: RefreshCw
      },
      {
        title: 'Automated Client Onboarding Flows',
        desc: 'Contract signature triggers instant account provisioning, invoice generation, team Slack channel creation, and welcome emails.',
        icon: GitBranch
      },
      {
        title: 'Financial & Invoice Reconciliation',
        desc: 'Matches incoming bank transactions and Stripe payments against open accounting ledger invoices with automatic exception alerts.',
        icon: Layers
      },
      {
        title: 'Multi-Stage Approval Workflows',
        desc: 'Interactive Slack and email approval buttons that route high-value expenditures or change orders to stakeholders with audit trails.',
        icon: ShieldCheck
      }
    ],
    howItWorks: {
      summary: 'Event-driven architecture with automatic retries, data sanitation, and deduplication guarantees.',
      steps: [
        { step: '01', title: 'Event Trigger', desc: 'A customer signs a contract, pays an invoice, or submits a portal form.' },
        { step: '02', title: 'Data Validation', desc: 'System parses payload, sanitizes inputs, and verifies schema integrity.' },
        { step: '03', title: 'Conditional Routing', desc: 'Rules evaluate deal size, geography, or urgency to select execution path.' },
        { step: '04', title: 'System Propagation', desc: 'Updates CRM, creates project workspace, and registers billing entries.' },
        { step: '05', title: 'Retry & Error Shield', desc: 'Automatic exponential backoff prevents dropped events during third-party downtime.' },
        { step: '06', title: 'Notification & Audit', desc: 'Alerts operations team via Slack or email and logs completed pipeline transaction.' }
      ]
    },
    practicalApplications: [
      {
        title: 'Lead Routing & Instant CRM Enrichment',
        domain: 'Revenue Operations',
        desc: 'Enriches incoming web leads with company size and industry data, assigning them to the correct territory rep within 2 seconds.'
      },
      {
        title: 'Contract-to-Project Workspace Setup',
        domain: 'Delivery Operations',
        desc: 'DocuSign execution triggers automatic creation of Asana/Linear boards, Google Drive folders, and client Slack connect channels.'
      },
      {
        title: 'Billing & AR Chasing Pipelines',
        domain: 'Financial Operations',
        desc: 'Monitors unpaid invoices, sending staged, personalized email and SMS reminders before auto-escalating to financial managers.'
      },
      {
        title: 'Inventory & Fulfillment Alerts',
        domain: 'Supply Chain',
        desc: 'Syncs warehouse stock levels with e-commerce storefronts, triggering re-order purchase orders when safety thresholds are breached.'
      }
    ],
    businessBenefits: [
      { title: 'Zero Data Entry Overhead', desc: 'Completely eliminates manual copy-pasting between systems and human clerical error.' },
      { title: 'Sub-Second Event Propagation', desc: 'Events trigger immediate actions across all connected platforms in real time.' },
      { title: 'Built-in Fault Tolerance', desc: 'Automated retries, dead-letter queues, and health checks prevent lost transactions.' },
      { title: 'Observable Architecture', desc: 'Centralized dashboards display status, latency, and throughput across every pipeline.' }
    ],
    integrations: ['Zapier', 'Make', 'HubSpot', 'Salesforce', 'Stripe', 'QuickBooks', 'DocuSign', 'PostgreSQL'],
    ctaPrimary: 'Explore Automation Solutions',
    ctaPrimaryHref: '/start-project?service=workflow-automation',
    ctaSecondary: 'View Workflow Specifications',
    ctaSecondaryHref: '/capabilities/workflow-automation'
  },
  {
    id: 'voice-ai',
    num: '03',
    navTitle: 'Voice AI',
    title: 'Voice AI & Telephony',
    eyebrow: '03 / VOICE AI & TELEPHONY',
    route: '/capabilities/voice-ai',
    icon: Mic,
    tagline: 'Conversational Phone & Autonomous Telephony Systems',
    heroBadge: 'SUB-300MS CONVERSATIONAL TELEPHONY',
    heroHeadline: 'Intelligent voice systems that handle natural phone conversations.',
    heroDescription: 'Sub-second conversational voice workflows that answer incoming phone calls, qualify caller intent, answer complex questions, and book appointments directly into your calendar 24/7/365.',
    heroMetrics: [
      { value: '100%', label: 'Inbound Call Answer Rate' },
      { value: '< 300ms', label: 'Natural Conversational Latency' },
      { value: '24/7/365', label: 'Uninterrupted Coverage' }
    ],
    businessProblem: {
      lead: 'Every unanswered business call is lost revenue, yet staffing front-desk phones around the clock is economically impossible.',
      challenges: [
        {
          title: 'Missed Calls Equal Lost Revenue',
          desc: 'High-intent prospective clients rarely leave voicemails; if nobody answers, they immediately call a rival business.'
        },
        {
          title: 'Front-Desk Phone Burnout',
          desc: 'Staff spend hours answering repetitive inquiries (hours, directions, basic pricing) instead of attending to in-person clients.'
        },
        {
          title: 'After-Hours Emergency Blindspots',
          desc: 'Businesses in trades, property, or healthcare miss urgent after-hours emergencies or wake staff for non-urgent inquiries.'
        },
        {
          title: 'Slow Appointment Coordination',
          desc: 'Playing phone tag back and forth to book or reschedule consultations creates friction and leads to higher no-show rates.'
        }
      ]
    },
    whatWeBuild: [
      {
        title: '24/7 Autonomous Inbound Receptionist',
        desc: 'Answers every call within two rings, greets callers with natural human inflection, answers FAQs, and captures caller details.',
        icon: PhoneCall
      },
      {
        title: 'Conversational Calendar Booking',
        desc: 'Negotiates available appointment slots conversationally over the phone and sends instant SMS calendar invites with confirmations.',
        icon: Calendar
      },
      {
        title: 'Emergency Triage & Warm Transfer',
        desc: 'Identifies high-urgency callers, provides empathetic reassurance, and seamlessly transfers the live call to on-duty staff.',
        icon: UserCheck
      },
      {
        title: 'Post-Call CRM & Transcript Logging',
        desc: 'Generates structured bullet-point summaries, extracted entity fields, and sentiment tags pushed directly into your CRM.',
        icon: FileText
      }
    ],
    howItWorks: {
      summary: 'State-of-the-art voice pipelines pairing sub-second speech-to-text, fast LLM reasoning, and natural neural voice synthesis.',
      steps: [
        { step: '01', title: 'Inbound Call Answered', desc: 'Voice agent answers within 2 rings with branded, friendly greeting.' },
        { step: '02', title: 'Speech-to-Text Stream', desc: 'Whisper streaming engine transcribes speech with ultra-low latency.' },
        { step: '03', title: 'Intent & Entity Triage', desc: 'Language model classifies caller intent and extracts name, phone, and requirements.' },
        { step: '04', title: 'System Lookup & Booking', desc: 'Queries live calendar availability and books preferred appointment window.' },
        { step: '05', title: 'Warm Escalation if Needed', desc: 'Transfers call to human specialist if complex edge cases arise.' },
        { step: '06', title: 'SMS & CRM Confirmation', desc: 'Dispatches confirmation SMS to caller and logs full call transcript in CRM.' }
      ]
    },
    practicalApplications: [
      {
        title: 'Dental & Clinic Reception',
        domain: 'Healthcare Practices',
        desc: 'Answers patient calls 24/7, books routine checkup appointments, answers insurance FAQs, and coordinates cancellation reschedules.'
      },
      {
        title: 'Home Services Dispatch',
        domain: 'Contractors & Trades',
        desc: 'Captures emergency heating or plumbing calls outside business hours, captures address details, and alerts on-call technicians.'
      },
      {
        title: 'Legal Practice Intake',
        domain: 'Law Firms',
        desc: 'Pre-screens prospective callers for case criteria, screens preliminary conflicts, and books consultations directly into Clio.'
      },
      {
        title: 'Real Estate Inbound Response',
        domain: 'Brokerages & Property',
        desc: 'Answers buyer calls dialing from property signs, provides listing specs, and schedules private agent showings.'
      }
    ],
    businessBenefits: [
      { title: 'Zero Missed Calls', desc: 'Answers 100% of inbound phone inquiries immediately, capturing leads that competitors miss.' },
      { title: 'Sub-300ms Human Latency', desc: 'Natural voice cadence and conversational pauses that feel professional and respectful.' },
      { title: 'Direct Calendar Sync', desc: 'Books appointments straight into Google Calendar, Outlook, or specialized practice software.' },
      { title: 'Fail-Safe Human Transfer', desc: 'Seamlessly forwards sensitive or escalated callers to on-duty team members.' }
    ],
    integrations: ['Twilio Voice', 'Google Calendar', 'Outlook 365', 'Clio', 'ServiceTitan', 'HubSpot', 'Salesforce', 'Zendesk'],
    ctaPrimary: 'Discuss Voice AI Solutions',
    ctaPrimaryHref: '/start-project?service=voice-ai',
    ctaSecondary: 'View Voice AI Specifications',
    ctaSecondaryHref: '/capabilities/voice-ai'
  },
  {
    id: 'custom-ai-solutions',
    num: '04',
    navTitle: 'Custom AI Solutions',
    title: 'Custom AI Solutions',
    eyebrow: '04 / CUSTOM AI SOLUTIONS',
    route: '/capabilities/custom-ai-solutions',
    icon: Cpu,
    tagline: 'Tailored Enterprise AI Architectures & Proprietary Systems',
    heroBadge: 'PROPRIETARY ARCHITECTURES & TUNED MODELS',
    heroHeadline: 'Tailored AI systems engineered around specific business requirements.',
    heroDescription: 'When off-the-shelf software cannot satisfy complex operational requirements, security constraints, or proprietary workflows, we engineer bespoke AI systems, specialized RAG pipelines, and private VPC solutions.',
    heroMetrics: [
      { value: 'Zero', label: 'Data Retention Guarantee' },
      { value: 'Private VPC', label: 'Enterprise Security' },
      { value: '100+', label: 'Supported System Connectors' }
    ],
    businessProblem: {
      lead: 'Generic SaaS tools fail when businesses handle sensitive customer data, non-standard workflows, or legacy systems.',
      challenges: [
        {
          title: 'Off-the-Shelf Tools Lack Domain Context',
          desc: 'Generic AI chatbots provide vague, generic answers because they do not understand your proprietary workflows or data schemas.'
        },
        {
          title: 'Strict Security & Compliance Barriers',
          desc: 'Regulated organizations cannot upload sensitive client records or financial data to public cloud AI tools without violating compliance.'
        },
        {
          title: 'Legacy Enterprise Software Lock-in',
          desc: 'Older on-premise ERPs, SQL databases, and internal software lack modern APIs, creating an innovation bottleneck.'
        },
        {
          title: 'High Complexity Document Schemas',
          desc: 'Standard OCR tools stumble on complex nested tables, blueprints, legal clauses, and multi-lingual technical schematics.'
        }
      ]
    },
    whatWeBuild: [
      {
        title: 'Domain-Specific Retrieval Systems (RAG)',
        desc: 'Advanced hybrid search combining dense semantic vectors and sparse lexical search over millions of internal documents with source citations.',
        icon: Database
      },
      {
        title: 'Private VPC & Zero-Retention Deployments',
        desc: 'Self-hosted model inference and secure data gateways ensuring customer data is never cached or used for external model training.',
        icon: ShieldCheck
      },
      {
        title: 'Legacy Database AI Adapters',
        desc: 'Intelligent natural language query layers built on top of older SQL databases and proprietary on-premise systems.',
        icon: Terminal
      },
      {
        title: 'Bespoke Executive Intelligence Engines',
        desc: 'Transforms fragmented operational data across multiple ERPs into concise, automated weekly executive briefs and anomaly reports.',
        icon: BarChart3
      }
    ],
    howItWorks: {
      summary: 'Bespoke engineering tailored to your exact database schema, compliance mandates, and operational logic.',
      steps: [
        { step: '01', title: 'Data & Architecture Audit', desc: 'Analyze data structures, API endpoints, and enterprise compliance requirements.' },
        { step: '02', title: 'Pipeline & Schema Design', desc: 'Engineer specialized data ingestion, chunking, and validation pipelines.' },
        { step: '03', title: 'Model Selection & Tuning', desc: 'Select and calibrate frontier models, small language models, or fine-tuned weights.' },
        { step: '04', title: 'VPC Security Deployment', desc: 'Deploy within isolated cloud VPCs with strict zero-retention data boundaries.' },
        { step: '05', title: 'Integration Layer Bridge', desc: 'Connect modern intelligent interfaces directly to legacy internal software.' },
        { step: '06', title: 'Continuous Monitoring', desc: 'Telemetry monitors accuracy, latency, and drift with automated alerting.' }
      ]
    },
    practicalApplications: [
      {
        title: 'Proprietary Document Intelligence',
        domain: 'Legal & Engineering',
        desc: 'Extracts critical structural specs from technical blueprints and lengthy regulatory filings into validated JSON databases.'
      },
      {
        title: 'Private Enterprise Knowledge Portals',
        domain: 'Enterprise Operations',
        desc: 'Empowers thousands of corporate employees to query internal documentation securely without risking data leakage.'
      },
      {
        title: 'Automated Regulatory Compliance Audits',
        domain: 'Financial & Insurance',
        desc: 'Continuously monitors transaction records and communications for compliance adherence, flagging anomalies for review.'
      },
      {
        title: 'Custom Internal Operations Copilots',
        domain: 'Internal Software',
        desc: 'Custom web interfaces that guide staff through complex quoting, underwriting, or engineering workflows.'
      }
    ],
    businessBenefits: [
      { title: 'Total Data Sovereignty', desc: 'Your data stays within your private VPC boundary with zero third-party retention.' },
      { title: 'Engineered for Your Schemas', desc: 'Bespoke systems built around your specific data structures rather than generic molds.' },
      { title: 'Modernize Without Replacing', desc: 'Adds modern conversational AI capabilities to legacy software without expensive rebuilds.' },
      { title: 'Measurable Operational ROI', desc: 'Focused on solving your single largest operational bottleneck with engineered precision.' }
    ],
    integrations: ['AWS VPC', 'Azure Enterprise', 'PostgreSQL', 'Snowflake', 'SAP', 'Salesforce', 'REST / GraphQL APIs', 'Docker'],
    ctaPrimary: 'Discuss Custom Architecture',
    ctaPrimaryHref: '/start-project?service=custom-ai',
    ctaSecondary: 'View Custom AI Specifications',
    ctaSecondaryHref: '/capabilities/custom-ai-solutions'
  }
];
