import {
  Scale,
  Home,
  HeartPulse,
  Wrench,
  DollarSign,
  Shield,
  HardHat,
  Building2,
  Briefcase,
  Car,
  Server,
  Package
} from 'lucide-react';

export const INDUSTRY_CATEGORIES = [
  { id: 'all', label: 'All Industries' },
  { id: 'professional', label: 'Professional & Legal' },
  { id: 'property', label: 'Property & Trades' },
  { id: 'health', label: 'Health & Care' },
  { id: 'tech-logistics', label: 'Tech, Auto & Commerce' },
];

export const INDUSTRIES_DATA = [
  {
    id: 'legal',
    name: 'Legal Practices',
    tag: 'Law Firms, Solo Practitioners & Corporate Counsel',
    category: 'professional',
    categoryLabel: 'Professional & Legal',
    icon: Scale,
    image: '/images/industries/legal.jpg',
    heroHeadline: 'AI Phone Answering, Intake & Case Automation for Modern Law Practices',
    heroSubhead: 'Capture prospective clients around the clock, screen conflict parameters instantly, and automate retainer workflows so attorneys focus on billable casework.',
    heroMetrics: [
      { value: '0', label: 'Missed Client Inquiries' },
      { value: '< 300ms', label: 'Voice Response Latency' },
      { value: '4+ hrs', label: 'Saved Weekly / Attorney' }
    ],
    challenges: [
      'Urgent prospective client calls missed while attorneys are in court, depositions, or client consultations.',
      'Manual conflict-of-interest checking and lengthy intake questionnaires delaying retainer agreement execution.',
      'High partner billing rates consumed by standard legal correspondence, status calls, and document retrieval.'
    ],
    solution: 'Deploy 24/7 Voice AI receptionists to qualify prospective matters, screen conflict parameters against internal records, and book consultations directly into Clio or PracticePanther with zero attorney friction.',
    detailedSolutions: [
      {
        title: '24/7 Voice AI Legal Receptionist',
        capability: 'Voice AI',
        desc: 'Answers urgent prospective client calls anytime, asks preliminary qualification questions, and captures structured incident summaries.'
      },
      {
        title: 'Automated Conflict & Intake Screening',
        capability: 'AI Agents',
        desc: 'Cross-checks prospective party names against active matter databases, flags potential conflicts, and dispatches dynamic intake forms.'
      },
      {
        title: 'Instant Retainer & Calendar Sync',
        capability: 'Workflow Automation',
        desc: 'Generates engagement agreements via DocuSign upon intake approval and schedules initial consultations directly in Clio or PracticePanther.'
      },
      {
        title: 'Confidential Document Parsing',
        capability: 'Custom AI Solutions',
        desc: 'Extracts critical case dates, court filings, and opposing counsel details from scanned PDFs into your case management system.'
      }
    ],
    workflow: 'Inbound Call or Web Lead → AI Urgency Triage & Conflict Check → Retainer Drafted → Consultation Booked in Clio',
    workflowSteps: [
      { step: '01', title: 'Inbound Inquiry', desc: 'Prospective client calls the firm or submits an urgent case evaluation form.' },
      { step: '02', title: 'AI Triage & Conflict Check', desc: 'Voice agent identifies matter type, gathers key details, and queries database for party conflicts.' },
      { step: '03', title: 'Retainer Generation', desc: 'Qualified leads receive pre-filled engagement documentation via DocuSign automatically.' },
      { step: '04', title: 'Practice Management Sync', desc: 'Matter record is opened in Clio/PracticePanther and a consult is locked into the calendar.' }
    ],
    stack: ['Clio', 'PracticePanther', 'DocuSign', 'Twilio Voice AI', 'HubSpot'],
    impact: '0 missed client inquiries • Instant conflict pre-screening • 4+ hours saved weekly per attorney'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Brokerages',
    tag: 'Commercial Agencies, Residential Teams & Brokerages',
    category: 'property',
    categoryLabel: 'Property & Trades',
    icon: Home,
    image: '/images/industries/real-estate.jpg',
    heroHeadline: 'Instant Inbound Lead Capture & Showing Automation for Real Estate Teams',
    heroSubhead: 'Convert portal leads and drive-by inquiries within seconds. AI agents qualify buyer budgets, verify financing status, and book private showings 24/7.',
    heroMetrics: [
      { value: 'Immediate', label: 'Lead Response Time' },
      { value: 'Higher', label: 'Showing Conversion Rate' },
      { value: 'Consistent', label: 'CRM Record Hygiene' }
    ],
    challenges: [
      'Lead leakage from Zillow, Realtor.com, and lawn signage outside business hours when buyers call hot.',
      'Agents inundated with repetitive questions on property availability, HOA restrictions, and price terms.',
      'Fragmented client tracking between listing agents, buyer representatives, and escrow coordinators.'
    ],
    solution: 'Voice and conversational AI agents answer property inquiries within seconds, verify buyer budget and financing status, and book private showings directly into agent calendars.',
    detailedSolutions: [
      {
        title: 'Instant Sign & Portal Lead Dispatcher',
        capability: 'Voice AI',
        desc: 'Connects with hot buyers dialing from yard signs or submitting Zillow queries within seconds to answer listing questions.'
      },
      {
        title: 'Autonomous Showing Scheduler',
        capability: 'Workflow Automation',
        desc: 'Coordinates showing access windows between buyer agents and homeowner schedules, syncing directly with Google Calendar and Follow Up Boss.'
      },
      {
        title: 'Pre-Approval & Criteria Qualifier',
        capability: 'AI Agents',
        desc: 'Identifies pre-approval status, purchase timeline, and specific property criteria before handing off high-intent buyers.'
      },
      {
        title: 'Listing Document Intelligence',
        capability: 'Custom AI Solutions',
        desc: 'Indexes HOA bylaws, disclosures, and floorplans so AI assistants answer hyper-specific property inquiries accurately.'
      }
    ],
    workflow: 'Portal Lead or Call → Instant AI Pre-Qualification → Private Showing Slot Offered → Confirmed Tour Logged to Follow Up Boss',
    workflowSteps: [
      { step: '01', title: 'Hot Inquiry Received', desc: 'Buyer calls property sign or submits a lead from Zillow, Realtor.com, or brokerage site.' },
      { step: '02', title: 'Autonomous Qualification', desc: 'AI verifies financing pre-approval, timeline, and answers listing specs.' },
      { step: '03', title: 'Showing Coordination', desc: 'Interactive calendar negotiation proposes verified agent showing windows.' },
      { step: '04', title: 'CRM & Alert Dispatch', desc: 'Tour details and buyer summary are committed to Follow Up Boss with instant SMS to agent.' }
    ],
    stack: ['Follow Up Boss', 'KvCORE', 'Google Calendar', 'Twilio SMS', 'Zillow API'],
    impact: 'Immediate lead intake • Higher showing conversion • Consistent CRM record hygiene'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    tag: 'Dental, Physical Therapy, MedSpas & Outpatient Practices',
    category: 'health',
    categoryLabel: 'Health & Care',
    icon: HeartPulse,
    image: '/images/industries/healthcare.jpg',
    heroHeadline: 'HIPAA-Conscious Patient Scheduling & Front Desk Automation for Clinics',
    heroSubhead: 'Relieve front desk telephone burnout. AI voice assistants manage patient bookings, dispatch digital intake forms, and reduce appointment no-shows.',
    heroMetrics: [
      { value: '80%', label: 'Fewer Phone Interruptions' },
      { value: '40%', label: 'No-Show Reduction' },
      { value: '0', label: 'Manual Intake Entry' }
    ],
    challenges: [
      'Front desk staff constantly interrupted by phone inquiries for scheduling, cancellations, and directions.',
      'Up to 25% appointment no-show rate due to absent or delayed multi-channel confirmation workflows.',
      'Tedious manual transcription of paper intake forms into electronic health records (EHR).'
    ],
    solution: 'A HIPAA-conscious AI phone assistant handles routine clinic calls 24/7, negotiates calendar openings, answers clinic FAQs, and dispatches automated digital intake links before the appointment.',
    detailedSolutions: [
      {
        title: '24/7 Clinic Call Answering & Booking',
        capability: 'Voice AI',
        desc: 'Handles routine patient calls, clinic direction inquiries, and slot bookings without placing callers on hold.'
      },
      {
        title: 'Digital Pre-Visit Intake Automation',
        capability: 'Workflow Automation',
        desc: 'Dispatches secure mobile intake links via SMS upon booking, parsing patient insurance and history into practice records.'
      },
      {
        title: 'Conversational No-Show Prevention',
        capability: 'AI Agents',
        desc: 'Sends automated two-way confirmation requests 48h and 24h prior, instantly re-booking canceled slots to waiting lists.'
      },
      {
        title: 'Encrypted EHR Integration Gateway',
        capability: 'Custom AI Solutions',
        desc: 'Safely syncs scheduling metadata with AthenaHealth, Kareo, or custom practice databases under strict zero-retention parameters.'
      }
    ],
    workflow: 'Patient Inbound Call → Routine Triage & Slot Offered → Practice Management Booking → Automated SMS Reminders & Intake Link',
    workflowSteps: [
      { step: '01', title: 'Patient Inbound Call', desc: 'Patient dials clinic seeking appointment, directions, or cancellation.' },
      { step: '02', title: 'Voice Triage & Booking', desc: 'AI queries provider schedule availability and books requested treatment slot.' },
      { step: '03', title: 'Digital Intake Dispatch', desc: 'System transmits secure medical history and insurance upload link via SMS.' },
      { step: '04', title: 'Practice Management Sync', desc: 'EHR schedule updates in AthenaHealth/Kareo with automated pre-visit reminders.' }
    ],
    stack: ['AthenaHealth', 'Kareo', 'Google Calendar', 'Twilio Voice', 'HIPAA Secure Gateway'],
    impact: '80% fewer phone interruptions • 40% reduction in patient no-shows • Zero handwritten intake data entry'
  },
  {
    id: 'home-services',
    name: 'Home Services & Trades',
    tag: 'HVAC, Plumbing, Electrical & Roofing Contractors',
    category: 'property',
    categoryLabel: 'Property & Trades',
    icon: Wrench,
    image: '/images/industries/home-services.jpg',
    heroHeadline: '24/7 Emergency Dispatch & Job Booking for Field Service Contractors',
    heroSubhead: 'Never miss an emergency repair call while technicians are on the job. Autonomous voice agents identify issues, verify addresses, and dispatch directly into ServiceTitan.',
    heroMetrics: [
      { value: '24/7', label: 'Inbound Calls Answered' },
      { value: 'Direct', label: 'Emergency Dispatch' },
      { value: 'Real-Time', label: 'Work Order Creation' }
    ],
    challenges: [
      'Technicians in crawl spaces or on rooftops cannot answer ringing phones, losing urgent high-ticket jobs to rivals.',
      'Disorganized dispatching leading to scheduling overlaps and inefficient drive-time across service territories.',
      'Delayed invoice dispatch and forgotten review collection after service completion.'
    ],
    solution: 'Autonomous voice dispatch agents capture emergency repair calls 24/7, record the service address and issue description, and book technician arrival windows directly into ServiceTitan or Jobber.',
    detailedSolutions: [
      {
        title: '24/7 Emergency Repair Receptionist',
        capability: 'Voice AI',
        desc: 'Answers urgent homeowner calls instantly, distinguishes burst pipes from routine maintenance, and calms stressed callers.'
      },
      {
        title: 'ServiceTitan / Jobber Work Order Booking',
        capability: 'Workflow Automation',
        desc: 'Extracts customer name, service address, and equipment symptoms to generate dispatch-ready jobs in real time.'
      },
      {
        title: 'On-Call Technician Escalation',
        capability: 'AI Agents',
        desc: 'Triggers priority mobile push notifications or warm phone calls to on-duty techs only for confirmed urgent emergencies.'
      },
      {
        title: 'Post-Job Review & Invoice Trigger',
        capability: 'Workflow Automation',
        desc: 'Sends automated customer SMS follow-ups upon job completion to capture Google reviews and deliver instant payment links.'
      }
    ],
    workflow: 'Emergency Inbound Call → AI Identifies Issue & Service Address → Emergency Job Created in ServiceTitan → Customer Receives Tech ETA SMS',
    workflowSteps: [
      { step: '01', title: 'Emergency Call Received', desc: 'Homeowner calls with urgent furnace failure, leak, or electrical outage.' },
      { step: '02', title: 'Issue Triage & Address Verification', desc: 'AI captures symptom details, confirms service address, and assesses urgency.' },
      { step: '03', title: 'Job Creation in FSM', desc: 'New work order logged in ServiceTitan/Jobber with technician arrival window.' },
      { step: '04', title: 'Automated ETA Dispatch', desc: 'Customer receives confirmation SMS with tech details while on-call crew is alerted.' }
    ],
    stack: ['ServiceTitan', 'Jobber', 'Housecall Pro', 'Twilio Voice AI', 'QuickBooks'],
    impact: '0 lost emergency service calls • Dynamic technician routing • Instant customer SMS status updates'
  },
  {
    id: 'financial-services',
    name: 'Financial Services & Accounting',
    tag: 'CPAs, Wealth Management, Tax Preparers & Bookkeeping',
    category: 'professional',
    categoryLabel: 'Professional & Legal',
    icon: DollarSign,
    image: '/images/industries/financial-services.jpg',
    heroHeadline: 'Intelligent Document Chasing, OCR Extraction & Client Intake for CPAs',
    heroSubhead: 'Eliminate peak-season document bottlenecks. Automated agents chase missing tax files, parse line items with computer vision, and update ledgers without manual typing.',
    heroMetrics: [
      { value: '90%', label: 'Less Chasing Overhead' },
      { value: 'Sub-minute', label: 'Invoice OCR Extraction' },
      { value: '100%', label: 'Audit Trail Coverage' }
    ],
    challenges: [
      'Chasing clients for missing receipts, bank statements, and 1099 forms during high-stress tax and audit periods.',
      'Manual line-item entry of vendor invoices and tax documents into QuickBooks, Xero, or general ledgers.',
      'Phone lines overwhelmed with routine client calls asking for filing status updates.'
    ],
    solution: 'Event-driven document chasing agents systematically verify client upload checklists, send polite automated reminders, and run intelligent OCR pipelines to extract invoice data with zero manual typing.',
    detailedSolutions: [
      {
        title: 'Intelligent Tax Document Chasing',
        capability: 'AI Agents',
        desc: 'Monitors client portal submissions against required checklist items, sending automated, courteous reminders for missing forms.'
      },
      {
        title: 'Vision OCR Ledger Pipeline',
        capability: 'Custom AI Solutions',
        desc: 'Parses complex multi-page invoices and receipts, matching line items to chart-of-accounts codes in Xero and QuickBooks.'
      },
      {
        title: '24/7 Client Status Answering',
        capability: 'Voice AI',
        desc: 'Answers client phone calls regarding tax filing status or receipt confirmation by verifying caller PIN and querying internal records.'
      },
      {
        title: 'Reconciliation Gate Automation',
        capability: 'Workflow Automation',
        desc: 'Flags bank reconciliation discrepancies automatically and stages clean transaction batches for CPA review.'
      }
    ],
    workflow: 'Client Uploads Documents → Vision OCR Parses Line Items → Automated Reconciliation Gate → Xero/QuickBooks Ledger Updated',
    workflowSteps: [
      { step: '01', title: 'Document Uploaded', desc: 'Client submits tax documents, bank statements, or invoices via portal or email.' },
      { step: '02', title: 'Vision OCR Extraction', desc: 'AI parses line items, tax IDs, dates, and amounts into structured data models.' },
      { step: '03', title: 'Validation & Checklist Gate', desc: 'System checks against required engagement checklist and flags discrepancies.' },
      { step: '04', title: 'Ledger Synchronization', desc: 'Reconciled entries push directly to QuickBooks/Xero with full audit trail attached.' }
    ],
    stack: ['Xero', 'QuickBooks', 'AWS Textract', 'Google Workspace', 'Stripe'],
    impact: '90% reduction in document chasing overhead • Sub-minute invoice extraction • Complete audit trail'
  },
  {
    id: 'insurance',
    name: 'Insurance Agencies',
    tag: 'Independent Brokers, Commercial Lines & Claims Teams',
    category: 'professional',
    categoryLabel: 'Professional & Legal',
    icon: Shield,
    image: '/images/industries/insurance.jpg',
    heroHeadline: '24/7 First Notice of Loss (FNOL) & Underwriting Automation for Agencies',
    heroSubhead: 'Accelerate quote turnarounds and provide instant policy service. Conversational intake agents gather rating details, log claims, and orchestrate renewals.',
    heroMetrics: [
      { value: '24/7', label: 'Instant FNOL Logging' },
      { value: '60%', label: 'Faster Quote Assembly' },
      { value: '45-Day', label: 'Proactive Renewal Triggers' }
    ],
    challenges: [
      'Slow quote turnaround while manually gathering property, vehicle, or liability details across multiple carrier portals.',
      'Policyholders calling repeatedly for basic policy declaration pages, insurance cards, and claims status updates.',
      'Dropped renewal retention rates due to lack of timely, structured pre-renewal reviews.'
    ],
    solution: 'Conversational intake agents gather underwriting requirements upfront, pre-fill carrier rating systems, and provide 24/7 self-service policy document lookups and First Notice of Loss (FNOL) logging.',
    detailedSolutions: [
      {
        title: 'Instant 24/7 FNOL Claim Capture',
        capability: 'Voice AI',
        desc: 'Takes policyholder incident reports over the phone, captures photos and vehicle details via SMS link, and stages immediate claim records.'
      },
      {
        title: 'Pre-Underwriting Intake Orchestrator',
        capability: 'AI Agents',
        desc: 'Gathers commercial property specifications and driver schedules upfront, assembling standardized rating packages for brokers.'
      },
      {
        title: 'Self-Service Policy Document Delivery',
        capability: 'Workflow Automation',
        desc: 'Verifies caller credentials and dispatches auto insurance cards or certificates of insurance (COIs) to policyholders in seconds.'
      },
      {
        title: 'Predictive Renewal Retention Flow',
        capability: 'Workflow Automation',
        desc: 'Scans upcoming policy expirations 45 days in advance, requesting updated revenue or asset sheets to prepare re-marketing packages.'
      }
    ],
    workflow: 'Policy Inquiry or Claim Call → Intake Verification & Entity Extraction → Carrier Quoting API / FNOL Form Pushed → Agent Alerted with Full File',
    workflowSteps: [
      { step: '01', title: 'Policyholder Inbound', desc: 'Client calls regarding new commercial coverage or reports a motor incident.' },
      { step: '02', title: 'Intake Verification', desc: 'AI captures policy number, location, vehicle specs, and incident description.' },
      { step: '03', title: 'Carrier & FNOL Routing', desc: 'Data is validated and pushed into agency management system (Applied Epic/AMS360).' },
      { step: '04', title: 'Broker Brief Prepared', desc: 'Producer receives prioritized file summary with action items ready for review.' }
    ],
    stack: ['Applied Epic', 'AMS360', 'HubSpot', 'Twilio Voice AI', 'Zapier/Make'],
    impact: 'Instant 24/7 FNOL claim capture • 60% faster quote assembly • Proactive 45-day renewal outreach'
  },
  {
    id: 'construction',
    name: 'Construction & Contracting',
    tag: 'General Contractors, Commercial Builders & Specialty Subs',
    category: 'property',
    categoryLabel: 'Property & Trades',
    icon: HardHat,
    image: '/images/industries/construction.jpg',
    heroHeadline: 'Field-to-Office RFI, Change Order & Subcontractor Compliance Automation',
    heroSubhead: 'Eliminate project standstills. AI agents triage site RFIs, verify subcontractor certificates of insurance, and reconcile job delivery tickets against purchase orders.',
    heroMetrics: [
      { value: '75%', label: 'Faster RFI Turnaround' },
      { value: 'Automated', label: 'Sub Compliance Tracking' },
      { value: 'Real-Time', label: 'Job Cost Reconciliation' }
    ],
    challenges: [
      'Requests for Information (RFIs) and change orders bottlenecked in email threads, causing costly project standstills.',
      'Subcontractor insurance certificates, licenses, and safety compliance expiring unnoticed.',
      'Discrepancies between field delivery slips and original purchase order invoices.'
    ],
    solution: 'Centralize site-to-office communication with automated RFI logging, subcontractor compliance verification, and instant 3-way matching between job tickets and accounting systems.',
    detailedSolutions: [
      {
        title: 'Voice & SMS Field RFI Logger',
        capability: 'AI Agents',
        desc: 'Job superintendents record audio notes from the jobsite; AI extracts blueprint references and drafts formatted RFIs in Procore.'
      },
      {
        title: 'Automated Subcontractor Compliance Auditing',
        capability: 'Workflow Automation',
        desc: 'Monitors subcontractor COI, OSHA, and worker comp expiration dates, triggering automated renewal notices before site bans.'
      },
      {
        title: 'Delivery Slip 3-Way Matching Engine',
        capability: 'Custom AI Solutions',
        desc: 'OCR scans photographed delivery tickets from job sites and matches quantities against POs and vendor invoices.'
      },
      {
        title: 'Subcontractor Change Order Gateway',
        capability: 'Workflow Automation',
        desc: 'Routes field change requests through structured pricing approvals and logs approved amendments into project accounting.'
      }
    ],
    workflow: 'Field RFI Submitted → AI Classifies Specs & Blueprints → Subcontractor Routing → Procore Change Order Updated',
    workflowSteps: [
      { step: '01', title: 'Site Field Update', desc: 'Superintendent dictates jobsite condition or RFI inquiry via mobile voice or SMS.' },
      { step: '02', title: 'Specification Classification', desc: 'AI references project specs, blueprint sheets, and drafts technical inquiry.' },
      { step: '03', title: 'Engineer / Architect Dispatch', desc: 'Target design team notified with exact drawing callouts and required response date.' },
      { step: '04', title: 'Procore System Sync', desc: 'Resolved RFI is archived into Procore with schedule impact logged to superintendent.' }
    ],
    stack: ['Procore', 'Buildertrend', 'Autodesk Construction Cloud', 'Google Drive', 'Slack'],
    impact: '75% faster RFI turnaround • Zero non-compliant subcontractors on site • Real-time project cost tracking'
  },
  {
    id: 'property-management',
    name: 'Property Management',
    tag: 'Residential Portfolios, Commercial Assets & HOA Communities',
    category: 'property',
    categoryLabel: 'Property & Trades',
    icon: Building2,
    image: '/images/industries/property-management.jpg',
    heroHeadline: '24/7 Tenant Maintenance Triage & Leasing Tour Automation',
    heroSubhead: 'Protect property managers from after-hours phone fatigue. AI agents classify maintenance emergencies, dispatch pre-approved vendors, and book prospect tours in AppFolio.',
    heroMetrics: [
      { value: '24/7', label: 'Emergency Maintenance Dispatch' },
      { value: '60%', label: 'Fewer False Alarms' },
      { value: '3x', label: 'Faster Tour Booking' }
    ],
    challenges: [
      'After-hours maintenance emergency calls waking property managers for non-urgent routine inquiries.',
      'Extended vacancy cycles due to sluggish response times on rental listing inquiries and self-guided tour bookings.',
      'Tenant payment reminders and lease renewal notices handled through disconnected manual spreadsheets.'
    ],
    solution: 'An intelligent 24/7 maintenance dispatcher assesses genuine emergencies (burst pipes vs routine squeaks), alerts vetted on-call contractors, and automatically logs work orders in AppFolio or Buildium.',
    detailedSolutions: [
      {
        title: 'Emergency Maintenance Voice Triage',
        capability: 'Voice AI',
        desc: 'Distinguishes genuine hazards (water leaks, furnace failure) from routine repairs, dispatching emergency contractors on call.'
      },
      {
        title: 'Leasing Inquiry & Self-Tour Scheduler',
        capability: 'AI Agents',
        desc: 'Answers prospective renter questions on pet policies, rent terms, and utilities, booking self-guided or guided tours instantly.'
      },
      {
        title: 'AppFolio / Buildium Work Order Gateway',
        capability: 'Workflow Automation',
        desc: 'Generates detailed work orders with tenant contact info, unit entry permissions, and uploaded photos in management software.'
      },
      {
        title: 'Automated Lease Renewal Pipeline',
        capability: 'Workflow Automation',
        desc: 'Sends phased renewal proposals 90, 60, and 30 days prior to lease termination, collecting digital intent confirmations.'
      }
    ],
    workflow: 'Tenant Call or Text → AI Assesses Urgency (Water/Power vs Routine) → Dispatches Preferred Vendor if Emergency → AppFolio Work Order Generated',
    workflowSteps: [
      { step: '01', title: 'Tenant Report Received', desc: 'Resident dials maintenance line or texts issue regarding their rental unit.' },
      { step: '02', title: 'Urgency & Permission Assessment', desc: 'AI identifies severity, safety hazards, and confirms unit entry authorization.' },
      { step: '03', title: 'Vendor Dispatch if Emergency', desc: 'For verified emergencies, preferred plumbing/HVAC vendor is alerted immediately.' },
      { step: '04', title: 'AppFolio Work Order Logged', desc: 'Complete transcript and issue ticket recorded into property management software.' }
    ],
    stack: ['AppFolio', 'Buildium', 'Yardi', 'Twilio Voice & SMS', 'Slack'],
    impact: 'Instant 24/7 emergency dispatch • 60% reduction in after-hours false alarms • Faster lease turnaround'
  },
  {
    id: 'professional-services',
    name: 'Professional Services & Consulting',
    tag: 'Management Consultancies, Creative Agencies & Engineering Firms',
    category: 'professional',
    categoryLabel: 'Professional & Legal',
    icon: Briefcase,
    image: '/images/industries/professional-services.jpg',
    heroHeadline: 'Client Discovery Synthesis, SOW Generation & Project Provisioning',
    heroSubhead: 'Accelerate proposal velocity and eliminate delivery handoff friction. AI systems synthesize discovery calls, assemble scoped SOWs, and auto-provision project workspaces.',
    heroMetrics: [
      { value: '4x', label: 'Faster SOW Generation' },
      { value: 'Zero', label: 'Client Onboarding Delays' },
      { value: 'Structured', label: 'Delivery Scope Alignment' }
    ],
    challenges: [
      'Senior consultants spending up to 20% of their time assembling SOWs, engagement proposals, and client meeting notes.',
      'Disjointed handoffs between sales discovery, account directors, and project delivery teams.',
      'Unchecked scope creep because client change requests stay buried in Slack or email messages.'
    ],
    solution: 'Automate post-discovery workflows: AI agents summarize requirements, generate formatted SOW drafts, and provision project workspaces (Linear, Asana, Notion) upon contract signature.',
    detailedSolutions: [
      {
        title: 'Discovery Call Intelligence Synthesizer',
        capability: 'AI Agents',
        desc: 'Extracts core deliverables, technical dependencies, and risk assumptions from discovery calls to produce structured engagement briefs.'
      },
      {
        title: 'Automated SOW & Proposal Assembler',
        capability: 'Custom AI Solutions',
        desc: 'Merges scoped deliverables into branded Statement of Work agreements with pre-calculated hour allocations and milestones.'
      },
      {
        title: 'Instant Contract-to-Workspace Provisioning',
        capability: 'Workflow Automation',
        desc: 'Upon DocuSign signature, automatically provisions client Slack channels, Asana or Linear project boards, and Notion wikis.'
      },
      {
        title: 'Scope Creep Alert Monitor',
        capability: 'AI Agents',
        desc: 'Analyzes client communication against the approved SOW, flagging out-of-scope requests before work commences.'
      }
    ],
    workflow: 'Client Discovery Call → AI Generates Scoped SOW & Timeline → DocuSign Signature Captured → Asana Board & Slack Channel Auto-Provisioned',
    workflowSteps: [
      { step: '01', title: 'Discovery Session Recorded', desc: 'Consulting team conducts client discovery workshop or requirements call.' },
      { step: '02', title: 'Scope & Deliverable Extraction', desc: 'AI drafts formal SOW, pricing breakdown, and milestone schedule.' },
      { step: '03', title: 'Contract Signature Captured', desc: 'Client executes agreement via DocuSign with instant deposit collection via Stripe.' },
      { step: '04', title: 'Workspace Provisioned', desc: 'Linear/Asana project, client Slack connect channel, and Notion portal automatically created.' }
    ],
    stack: ['DocuSign', 'Notion', 'Asana', 'Linear', 'HubSpot CRM', 'Slack'],
    impact: '4x faster proposal generation • Zero onboarding delays • Automated contract-to-project provisioning'
  },
  {
    id: 'automotive',
    name: 'Automotive & Repair Centers',
    tag: 'Dealerships, Collision Centers & Independent Service Bays',
    category: 'tech-logistics',
    categoryLabel: 'Tech, Auto & Commerce',
    icon: Car,
    image: '/images/industries/automotive.jpg',
    heroHeadline: '24/7 Service Bay Scheduling & Automated Vehicle Status Updates',
    heroSubhead: 'Maximize bay utilization and stop phone interruptions. Voice AI agents book service appointments in your DMS, qualify repairs, and send SMS inspection updates.',
    heroMetrics: [
      { value: '24/7', label: 'Service Bay Scheduling' },
      { value: '50%', label: 'Fewer Advisor Interruptions' },
      { value: 'Full', label: 'After-Hours Lead Capture' }
    ],
    challenges: [
      'Service advisors constantly interrupted by phone inquiries for vehicle repair status updates and inspection reports.',
      'Lost vehicle sales when evening and weekend test drive requests go uncontacted until Monday morning.',
      'Low service bay utilization due to manual booking processes and forgotten routine service intervals.'
    ],
    solution: 'Voice AI agents handle inbound service bookings 24/7, integrate directly with Dealer Management Systems (DMS), and send automated vehicle completion alerts via SMS to keep service advisors focused on repair quality.',
    detailedSolutions: [
      {
        title: '24/7 Service Appointment Scheduler',
        capability: 'Voice AI',
        desc: 'Interviews callers regarding vehicle year, make, mileage, and symptoms, booking open bay slots directly in your DMS.'
      },
      {
        title: 'Automated Status & Inspection SMS Alerts',
        capability: 'Workflow Automation',
        desc: 'Triggers instant vehicle readiness alerts and digital multi-point inspection summaries to customers via text.'
      },
      {
        title: 'After-Hours Sales Lead Qualifier',
        capability: 'Voice AI',
        desc: 'Captures weekend car shoppers calling about inventory, answering window sticker specs and scheduling test drives.'
      },
      {
        title: 'Recall & Recommended Service Outreach',
        capability: 'AI Agents',
        desc: 'Scans maintenance histories and automatically invites past clients to schedule seasonal service intervals.'
      }
    ],
    workflow: 'Service Booking Call → Vehicle VIN / Problem Extracted → Bay Slot Booked in DMS → Customer Receives Calendar SMS & Drop-off Instructions',
    workflowSteps: [
      { step: '01', title: 'Customer Booking Call', desc: 'Driver calls dealership or repair shop seeking brake service, oil change, or diagnosis.' },
      { step: '02', title: 'Vehicle & Symptom Capture', desc: 'AI queries vehicle history, mileage, issue description, and requests customer drop-off time.' },
      { step: '03', title: 'DMS Bay Slot Confirmed', desc: 'Appointment locked into CDK Global, Reynolds & Reynolds, or Shop-Ware.' },
      { step: '04', title: 'Automated SMS Confirmation', desc: 'Customer receives directions, drop-off instructions, and calendar invite via SMS.' }
    ],
    stack: ['CDK Global', 'Reynolds & Reynolds', 'Shop-Ware', 'Twilio Voice', 'HubSpot'],
    impact: '24/7 service bay appointment scheduling • 50% fewer phone calls for service advisors • Higher customer retention'
  },
  {
    id: 'it-services',
    name: 'IT & Managed Service Providers',
    tag: 'MSPs, Cloud Consultancies & Technical Support Teams',
    category: 'tech-logistics',
    categoryLabel: 'Tech, Auto & Commerce',
    icon: Server,
    image: '/images/industries/it-services.jpg',
    heroHeadline: 'Tier-1 Ticket Triage, Autonomous Runbooks & User Provisioning for MSPs',
    heroSubhead: 'Protect engineers from ticket volume overwhelm. AI agents authenticate users, resolve routine Tier-1 requests, and escalate critical outages with full diagnostic telemetry.',
    heroMetrics: [
      { value: 'Fast', label: 'Tier-1 Resolution' },
      { value: 'Reduced', label: 'Ticket Volume Overhead' },
      { value: 'Monitored', label: 'SLA Tracking & Compliance' }
    ],
    challenges: [
      'Helpdesk engineers overwhelmed by repetitive Tier-1 tickets (password resets, VPN access, software provisioning).',
      'SLA breach risks when critical infrastructure alerts get lost inside noisy, unprioritized ticket queues.',
      'Manual onboarding and offboarding workflows across Google Workspace, Microsoft 365, and IAM systems.'
    ],
    solution: 'Autonomous Tier-1 support agents authenticate users, execute approved diagnostic and provisioning runbooks, and intelligently correlate infrastructure alerts to route only high-priority incidents to on-call engineers.',
    detailedSolutions: [
      {
        title: 'Autonomous Tier-1 Support Agent',
        capability: 'AI Agents',
        desc: 'Verifies user identity, diagnoses workstation or email access issues, and executes approved self-healing runbooks.'
      },
      {
        title: 'Automated Employee Onboarding & Offboarding',
        capability: 'Workflow Automation',
        desc: 'Provisions Microsoft 365 licenses, Google Workspace mailboxes, and security groups upon HR ticket creation.'
      },
      {
        title: 'Alert De-Duplication & Escalation Router',
        capability: 'Custom AI Solutions',
        desc: 'Correlates noisy monitoring alarms from Datto or ConnectWise, routing genuine outages to PagerDuty with root-cause insights.'
      },
      {
        title: 'Conversational Knowledge Retrieval Engine',
        capability: 'AI Agents',
        desc: 'Empowers engineers to query thousands of internal standard operating procedures and client network diagrams in plain English.'
      }
    ],
    workflow: 'Inbound Ticket / Slack Request → Identity & Urgency Scored → Automated Runbook or Fast Triage → Ticket Auto-Closed or Warm Escalated',
    workflowSteps: [
      { step: '01', title: 'Ticket Ingested', desc: 'User submits issue via email, portal, or Slack bot requesting access or reporting problem.' },
      { step: '02', title: 'Authentication & Triage', desc: 'AI verifies user permissions, scores urgency, and categorizes issue type.' },
      { step: '03', title: 'Automated Runbook Execution', desc: 'For standard Tier-1 issues (MFA reset, license grant), safe automated runbook runs.' },
      { step: '04', title: 'PSA Resolution / Escalation', desc: 'ConnectWise/Jira ticket updated and closed, or warm-escalated with diagnostic log.' }
    ],
    stack: ['ConnectWise', 'Datto', 'Jira Service Management', 'PagerDuty', 'Microsoft 365 API'],
    impact: 'Sub-2-minute Tier-1 resolution • 45% reduction in ticket volume for human staff • Zero missed SLA targets'
  },
  {
    id: 'ecommerce-logistics',
    name: 'E-commerce & Logistics',
    tag: 'D2C Brands, Omnichannel Retailers & 3PL Warehouses',
    category: 'tech-logistics',
    categoryLabel: 'Tech, Auto & Commerce',
    icon: Package,
    image: '/images/industries/ecommerce-logistics.jpg',
    heroHeadline: 'Automated Order Support, 3PL Sync & Returns Resolution for Retailers',
    heroSubhead: 'Turn order support into an effortless automated flow. AI agents answer tracking inquiries, generate return labels, and synchronize warehouse stock across storefronts in real time.',
    heroMetrics: [
      { value: '70%', label: 'Automated WISMO Resolution' },
      { value: 'Real-Time', label: 'Multi-Storefront Stock Sync' },
      { value: '24/7', label: 'Instant Customer Self-Service' }
    ],
    challenges: [
      'Support inboxes inundated with "Where is my order?" (WISMO) and return policy queries during peak sales spikes.',
      'Inventory synchronization delays between warehouse databases, Shopify, and Amazon causing overselling cancellations.',
      'Manual shipping label preparation and customs document compilation for international freight.'
    ],
    solution: 'Multi-channel AI support agents resolve tracking inquiries, generate return labels in Gorgias or Zendesk, and run real-time bidirectional inventory sync pipelines between 3PL warehouses and digital storefronts.',
    detailedSolutions: [
      {
        title: 'Autonomous WISMO & Order Support Agent',
        capability: 'AI Agents',
        desc: 'Instantly authenticates customer order numbers, provides live carrier tracking status, and resolves delivery exceptions.'
      },
      {
        title: 'Self-Service Automated Returns Portal',
        capability: 'Workflow Automation',
        desc: 'Generates pre-paid return shipping labels in ShipStation and initiates exchange orders in Shopify without agent touch.'
      },
      {
        title: 'Multi-Warehouse Inventory Sync Pipeline',
        capability: 'Custom AI Solutions',
        desc: 'Maintains live stock parity between 3PL WMS databases, Shopify Plus, Amazon, and ERP systems to stop overselling.'
      },
      {
        title: 'Automated Customs & Freight Documentation',
        capability: 'Workflow Automation',
        desc: 'Extracts HS tariff codes and compiles compliant commercial invoices for international cross-border shipments.'
      }
    ],
    workflow: 'Order Ingested → Multi-Warehouse Stock Verified → Automated Shipping Label & 3PL API Dispatch → Tracking Link Dispatched to Customer',
    workflowSteps: [
      { step: '01', title: 'Customer Query or Order Event', desc: 'Shopper inquiries on delivery ETA or submits return request online.' },
      { step: '02', title: 'Carrier & WMS Verification', desc: 'AI queries ShipStation/Shopify API to retrieve package GPS and status history.' },
      { step: '03', title: 'Resolution & Label Dispatch', desc: 'Live tracking summary delivered or pre-paid return label automatically generated.' },
      { step: '04', title: 'Inventory & Storefront Sync', desc: 'Gorgias/Zendesk ticket closed and inventory reconciles across sales channels.' }
    ],
    stack: ['Shopify Plus', 'ShipStation', 'Gorgias', 'Klaviyo', 'PostgreSQL'],
    impact: '70% automated resolution of WISMO tickets • Real-time inventory sync • 24/7 instant customer tracking'
  }
];
