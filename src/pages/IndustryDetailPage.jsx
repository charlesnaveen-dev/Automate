import React, { useState, useRef } from 'react';
import {
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useRouter } from '../router/RouterContext';
import { Link } from '../router/Router';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import { INDUSTRIES_DATA } from '../data/industriesData';
import './IndustryDetailPage.css';

// 12 Curated Industry Configurations (Genuinely distinct content, realistic business challenges, real software stacks)
const INDUSTRY_DETAILS = {
  legal: {
    archetype: 'editorial',
    heroHeadline: 'Intelligent Client Intake & Practice Automation for Law Firms.',
    heroSubhead: 'Capture prospective matters 24/7, pre-screen conflict parameters, and automate retainer workflows so attorneys focus on billable casework.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Missed Inbound Case Enquiries',
        desc: 'Urgent prospective client calls arrive while attorneys are in court, depositions, or client meetings. Callers rarely leave voicemails and quickly contact competing firms.',
      },
      {
        title: 'Conflict Checking & Intake Delays',
        desc: 'Manual conflict-of-interest checking and lengthy intake questionnaires delay retainer agreements by days, slowing down case onboarding.',
      },
      {
        title: 'Non-Billable Administrative Drag',
        desc: 'Senior attorneys and paralegals spend valuable hours answering routine status calls, copying document dates into practice systems, and chasing signatures.',
      },
    ],
    deliverables: [
      {
        id: 'voice-receptionist',
        title: '24/7 Voice AI Legal Receptionist',
        lead: 'Answers prospective client calls within two rings with natural professional cadence.',
        desc: 'Captures caller details, matter type, and preliminary incident facts. Formats a structured brief and immediately alerts the intake team or on-duty attorney.',
        stack: ['Twilio Voice', 'Clio', 'PracticePanther', 'Slack'],
      },
      {
        id: 'conflict-screening',
        title: 'Automated Conflict & Intake Screening',
        lead: 'Cross-checks prospective party names against active matter databases instantly.',
        desc: 'Flags potential conflict parameters before consultations occur and dispatches custom digital intake questionnaires tailored to the specific practice area.',
        stack: ['Clio', 'LexisNexis', 'Custom DB', 'Email'],
      },
      {
        id: 'retainer-dispatch',
        title: 'Instant Retainer Generation & Practice Sync',
        lead: 'Pre-fills engagement documentation and locks consultations into calendars.',
        desc: 'Upon attorney approval, automatically generates retainer agreements via DocuSign and creates new matter files with all collected caller notes in your practice management software.',
        stack: ['DocuSign', 'Clio Manage', 'Outlook 365', 'Google Calendar'],
      },
    ],
    benefits: [
      { title: 'Zero Missed Case Opportunities', desc: 'Every prospective caller is greeted professionally, capturing high-intent matters around the clock.' },
      { title: 'Faster Time-to-Retainer', desc: 'Pre-screened intakes and automated agreement generation reduce client acquisition friction.' },
      { title: 'More Billable Attorney Hours', desc: 'Staff spend less time answering routine status questions and more time focusing on client casework.' },
      { title: 'Airtight Practice Records', desc: 'Complete caller summaries, intake transcripts, and signed documents logged directly into your case file.' },
    ],
  },
  'real-estate': {
    archetype: 'spacious',
    heroHeadline: 'Instant Lead Capture & Showing Coordination for Real Estate Teams.',
    heroSubhead: 'Engage portal inquiries and yard-sign calls within seconds. Automate buyer qualification, financing verification, and private viewing schedules.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Lead Leakage Outside Business Hours',
        desc: 'High-intent buyers calling from property yard signs or Zillow listings outside business hours dial competing listing agents when unanswered.',
      },
      {
        title: 'Repetitive Property Availability Questions',
        desc: 'Agents lose hours each week repeating basic pricing, HOA terms, and open house times instead of negotiating active offers.',
      },
      {
        title: 'Fragmented Showing Coordination',
        desc: 'Playing phone tag between prospective buyers, buyer agents, and listing homeowners creates scheduling friction and missed viewings.',
      },
    ],
    deliverables: [
      {
        id: 'buyer-triage',
        title: 'Instant Buyer & Seller Qualification',
        lead: 'Answers property calls and portal inquiries within 10 seconds 24/7.',
        desc: 'Inquires about buyer timeline, pre-approval status, and price range. Scores buyer intent and stages hot prospects directly for immediate agent call-back.',
        stack: ['Twilio Voice', 'Follow Up Boss', 'Salesforce', 'Gmail'],
      },
      {
        id: 'showing-coordinator',
        title: 'Conversational Viewing Coordinator',
        lead: 'Negotiates property showing times directly against agent availability.',
        desc: 'Checks live calendar slots, sends address confirmation via SMS with lockbox or parking instructions, and coordinates reschedule requests automatically.',
        stack: ['Google Calendar', 'Outlook 365', 'ShowingTime', 'SMS'],
      },
      {
        id: 'crm-enrichment',
        title: 'Automated CRM Record Hygiene & MLS Alerts',
        lead: 'Synchronizes buyer preferences with automated MLS listing feeds.',
        desc: 'Logs full call transcripts and buyer criteria into Follow Up Boss or kvCORE, triggering automated property match updates with zero manual data entry.',
        stack: ['Follow Up Boss', 'kvCORE', 'HubSpot', 'Zapier'],
      },
    ],
    benefits: [
      { title: 'Immediate Response Advantage', desc: 'Engage prospective buyers while their interest is at peak, before they browse other listings.' },
      { title: 'Higher Showing Conversion', desc: 'Frictionless calendar scheduling leads to more confirmed private showings and open house attendees.' },
      { title: 'Clean, Consistent CRM Pipeline', desc: 'Every caller note, budget parameter, and viewing appointment automatically populated in your CRM.' },
      { title: 'More Time in Front of Clients', desc: 'Eliminate administrative phone tag so agents can focus on showings, listings, and closing deals.' },
    ],
  },
  healthcare: {
    archetype: 'reassuring',
    heroHeadline: 'Patient Communication & Intake Automation for Modern Practices.',
    heroSubhead: 'Reduce front-desk telephone volume, streamline patient intake, and coordinate appointment scheduling with privacy-conscious workflows.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Front-Desk Phone Burnout',
        desc: 'Receptionists are constantly interrupted by routine calls for business hours, driving directions, and basic service inquiries while patients wait at the counter.',
      },
      {
        title: 'Patient No-Shows & Last-Minute Drops',
        desc: 'Unfilled cancellations leave practitioner calendars empty because manual patient recall calling is time-consuming and inconsistent.',
      },
      {
        title: 'Manual Paperwork & Intake Delays',
        desc: 'Patients filling out paper forms in the waiting room delays provider schedules and requires staff to manually transcribe insurance details into the EHR.',
      },
    ],
    deliverables: [
      {
        id: 'patient-receptionist',
        title: '24/7 Patient Phone Receptionist',
        lead: 'Handles routine patient inquiries and scheduling calls within two rings.',
        desc: 'Answers practice FAQs, gathers insurance details, and guides callers through appointment options with calm, natural conversational cadence.',
        stack: ['Twilio Voice', 'AthenaHealth', 'Epic', 'Kareo'],
      },
      {
        id: 'appointment-booking',
        title: 'Self-Service Booking & Cancellation Recovery',
        lead: 'Coordinates calendar slots directly with practice scheduling software.',
        desc: 'Books appointments into provider schedules and automatically contacts waitlisted patients via SMS when cancellations open new appointment slots.',
        stack: ['Google Calendar', 'AthenaHealth', 'DrChrono', 'SMS'],
      },
      {
        id: 'digital-intake',
        title: 'Automated Digital Intake Dispatch',
        lead: 'Dispatches secure digital intake links prior to the appointment window.',
        desc: 'Sends pre-visit questionnaires and collects photo IDs before patients arrive, pushing verified medical history directly into your practice records.',
        stack: ['DocuSign', 'Jotform HIPAA', 'EHR Direct Sync'],
      },
    ],
    benefits: [
      { title: 'Front-Desk Staff Relief', desc: 'Free receptionists from repetitive telephone calls so they can provide attentive care to in-person patients.' },
      { title: 'Lower No-Show Rates', desc: 'Automated multi-channel appointment confirmations and easy conversational rescheduling prevent empty calendar slots.' },
      { title: 'Smoother Clinic Flow', desc: 'Pre-visit digital intake completion eliminates waiting room paperwork bottlenecks and provider delays.' },
      { title: 'Strict Privacy Standards', desc: 'All conversational and document pipelines engineered with confidential zero-data-retention boundaries.' },
    ],
  },
  'home-services': {
    archetype: 'practical',
    heroHeadline: '24/7 Emergency Dispatch & Job Booking for Trade Contractors.',
    heroSubhead: 'Never miss an urgent heating, plumbing, or electrical emergency. Qualify caller location, check service territory, and dispatch on-call technicians.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Urgent After-Hours Emergency Leakage',
        desc: 'Homeowners with bursting pipes or failed heating call after 6 PM. If nobody answers, they immediately call the next contractor on Google.',
      },
      {
        title: 'Technicians Interrupted on Job Sites',
        desc: 'Owner-operators and technicians waste billable time answering phone calls while under sinks, on roofs, or inside electrical panels.',
      },
      {
        title: 'Manual Dispatch Transcription Drag',
        desc: 'Copying job notes, addresses, and equipment model numbers from voicemail into dispatch software leads to clerical errors and scheduling conflicts.',
      },
    ],
    deliverables: [
      {
        id: 'emergency-dispatch',
        title: '24/7 Emergency Voice Receptionist',
        lead: 'Answers urgent homeowner calls within two rings day or night.',
        desc: 'Determines whether the issue is an emergency, gathers the service address, and immediately alerts your on-call technician roster with a concise spoken brief.',
        stack: ['Twilio Voice', 'ServiceTitan', 'Housecall Pro', 'Slack'],
      },
      {
        id: 'routine-booking',
        title: 'Conversational Job Booking & Calendar Sync',
        lead: 'Books routine estimates and tune-ups directly into dispatch software.',
        desc: 'Checks zip code territory coverage, quotes standard diagnostic fees, and schedules appointment arrival windows straight into ServiceTitan or Jobber.',
        stack: ['ServiceTitan', 'Housecall Pro', 'Jobber', 'Google Calendar'],
      },
      {
        id: 'post-service-followup',
        title: 'Automated Job Follow-Up & Review Request',
        lead: 'Triggers customer satisfaction check-ins and review generation.',
        desc: 'Sends automated SMS check-ins once a technician completes a work order, inviting satisfied homeowners to leave Google reviews while the experience is fresh.',
        stack: ['ServiceTitan', 'Twilio SMS', 'Google Business Profile'],
      },
    ],
    benefits: [
      { title: 'Capture High-Margin Emergency Jobs', desc: 'Answer every after-hours call promptly and book emergency revenue that rivals miss.' },
      { title: 'Uninterrupted Field Technicians', desc: 'Technicians stay focused on billable on-site repairs without constant phone distractions.' },
      { title: 'Direct Field Software Integration', desc: 'Every service address, customer note, and appointment booked directly into your dispatch board.' },
      { title: 'Higher Review Generation', desc: 'Automated post-job review requests build strong local search reputation consistently.' },
    ],
  },
  'financial-services': {
    archetype: 'editorial',
    heroHeadline: 'Document Collection & Client Workflow Automation for Financial Firms.',
    heroSubhead: 'Eliminate manual tax-season document chasing, automate client onboarding reminders, and synchronize accounting ledgers in real time.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Tax Season Document Chasing Drag',
        desc: 'Accountants lose hundreds of hours sending repetitive emails reminding clients to upload missing W-2s, 1099s, and bank statements.',
      },
      {
        title: 'Manual Data Re-Entry into Ledgers',
        desc: 'Re-keying invoice numbers, payroll summaries, and expense receipts between client portals and accounting tools introduces errors and slows turnarounds.',
      },
      {
        title: 'Fragmented Client Communication',
        desc: 'Client questions about filing status and estimated tax deadlines get lost across email threads, text messages, and phone voicemails.',
      },
    ],
    deliverables: [
      {
        id: 'document-collection',
        title: 'Automated Client Document Chasing Pipeline',
        lead: 'Intelligent multi-channel reminders tailored to missing tax items.',
        desc: 'Identifies missing client files, sends scheduled polite SMS and email upload links, and verifies file formats before notifying the CPA.',
        stack: ['Karbon', 'Canopy', 'DocuSign', 'AWS S3'],
      },
      {
        id: 'ledger-reconciliation',
        title: 'Invoice Extraction & Ledger Reconciliation',
        lead: 'Extracts line items from invoices and matches accounting entries.',
        desc: 'Parses complex multi-page PDF statements, matches transactions against open accounting ledgers, and flags reconciliation exceptions automatically.',
        stack: ['QuickBooks Online', 'Xero', 'Stripe', 'PostgreSQL'],
      },
      {
        id: 'client-status-copilot',
        title: 'Client Status & Deadline Communication Assistant',
        lead: 'Answers frequent client status inquiries with verified account facts.',
        desc: 'Grounded copilot that answers client questions regarding tax filing deadlines, required documentation checklists, and appointment openings.',
        stack: ['Google Workspace', 'Outlook 365', 'Slack', 'Internal CRM'],
      },
    ],
    benefits: [
      { title: 'Faster Document Turnaround', desc: 'Automated reminders collect required tax and advisory files weeks ahead of filing deadlines.' },
      { title: 'Reduced Clerical Re-Entry', desc: 'Extract and validate financial figures directly from client PDFs without manual transcription.' },
      { title: 'Defensible Audit Records', desc: 'Every document upload, client confirmation, and ledger reconciliation logged permanently.' },
      { title: 'Tax Season Sanity for Staff', desc: 'Remove repetitive administrative chase work so CPAs can focus on high-value advisory services.' },
    ],
  },
  insurance: {
    archetype: 'analytical',
    heroHeadline: 'Intelligent Intake & Policy Renewal Automation for Insurance Agencies.',
    heroSubhead: 'Streamline First Notice of Loss (FNOL) intake, automate proactive policy renewal reminders, and collect quote parameters around the clock.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'High Call Volumes During Claim Events',
        desc: 'Policyholders reporting accidents or property damage encounter long hold times, creating anxiety and frustration during stressful moments.',
      },
      {
        title: 'Time-Consuming Pre-Quote Applications',
        desc: 'Agents spend significant time collecting basic vehicle VINs, property square footage, and driver histories instead of comparing and closing policies.',
      },
      {
        title: 'Silent Policyholder Lapse & Churn',
        desc: 'Clients whose policies are up for renewal shop elsewhere because the agency failed to reach out proactively with updated rate options.',
      },
    ],
    deliverables: [
      {
        id: 'fnol-intake',
        title: '24/7 First Notice of Loss (FNOL) Voice Assistant',
        lead: 'Captures claim details with compassionate, structured conversational dialogue.',
        desc: 'Records date of incident, police report numbers, photos, and caller contact details, staging an organized claim file for immediate adjuster review.',
        stack: ['Twilio Voice', 'Applied Epic', 'AMS360', 'Email'],
      },
      {
        id: 'quote-gathering',
        title: 'Pre-Quote Intake & Risk Parameter Collection',
        lead: 'Gathers required policy application details conversationally.',
        desc: 'Collects driver histories, property specs, and prior coverage limits via phone or web assistant, pushing validated schemas directly into your rating tool.',
        stack: ['EZLynx', 'Applied Epic', 'HawkSoft', 'HubSpot'],
      },
      {
        id: 'renewal-pipeline',
        title: 'Automated Policy Renewal Outreach Pipeline',
        lead: 'Proactively contacts policyholders 45 days prior to expiration.',
        desc: 'Reviews upcoming renewals, sends personalized check-in messages, identifies coverage changes, and schedules review consultations automatically.',
        stack: ['Applied Epic', 'Twilio SMS', 'Outlook 365', 'Calendly'],
      },
    ],
    benefits: [
      { title: 'Immediate Incident Support', desc: 'Policyholders receive calm, structured claim intake within two rings, even during major regional storms.' },
      { title: 'Accelerated Quote Turnarounds', desc: 'Agents receive complete, pre-validated risk parameters ready for underwriting submission.' },
      { title: 'Higher Book Retention', desc: 'Proactive renewal check-ins protect valuable client relationships before policyholders shop elsewhere.' },
      { title: 'Agency Management System Sync', desc: 'All caller transcripts, policy numbers, and incident briefs automatically appended to client records.' },
    ],
  },
  construction: {
    archetype: 'practical',
    heroHeadline: 'Field-to-Office Coordination & Documentation for Commercial Builders.',
    heroSubhead: 'Connect job-site superintendents with back-office accounting. Automate RFI logging, subcontractor compliance verification, and delivery slip matching.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Field RFIs Lost in Text Messages',
        desc: 'Superintendents text critical architectural questions from the job site, resulting in delayed project manager responses and costly schedule delays.',
      },
      {
        title: 'Subcontractor Insurance Compliance Risks',
        desc: 'Subcontractors arriving on-site with expired certificates of insurance (COI) expose general contractors to severe liability and stop-work orders.',
      },
      {
        title: 'Lost Material Delivery Slips',
        desc: 'Paper delivery receipts left in job trailers cause delayed billing reconciliations, disputed vendor invoices, and inaccurate job-costing reports.',
      },
    ],
    deliverables: [
      {
        id: 'field-rfi',
        title: 'Voice-to-RFI Field Capture Pipeline',
        lead: 'Superintendents dictate RFIs directly from their smartphone.',
        desc: 'Transcribes field voice notes, extracts drawing spec numbers, attaches site photos, and logs formal RFIs directly into Procore or Buildertrend.',
        stack: ['Procore', 'Buildertrend', 'Twilio Voice', 'Slack'],
      },
      {
        id: 'subcontractor-compliance',
        title: 'Automated Subcontractor Compliance Tracking',
        lead: 'Tracks COI expiration dates and dispatches renewal requests.',
        desc: 'Monitors subcontractor insurance and license deadlines, alerts sub-tier vendors 30 days before expiration, and updates site access clearance automatically.',
        stack: ['Procore', 'Email', 'Airtable', 'DocuSign'],
      },
      {
        id: 'delivery-matching',
        title: 'Delivery Slip & Material Invoice Reconciliation',
        lead: 'Matches scanned job-site delivery tickets against supplier invoices.',
        desc: 'Field staff photograph delivery receipts, which are parsed and matched against purchase orders in accounting to verify material quantities before payment.',
        stack: ['QuickBooks Enterprise', 'Sage 300', 'Procore', 'AWS S3'],
      },
    ],
    benefits: [
      { title: 'Faster Job-Site Decisions', desc: 'Superintendents capture critical field questions in seconds, eliminating communication bottlenecks with architects.' },
      { title: 'Airtight Subcontractor Compliance', desc: 'Never risk project liability or audit fines from expired subcontractor insurance certificates.' },
      { title: 'Accurate Real-Time Job Costing', desc: 'Material delivery slips reconciled promptly to maintain precise project budget visibility.' },
      { title: 'Seamless Construction Stack Sync', desc: 'Direct bidirectional sync across Procore, accounting ledgers, and field communication channels.' },
    ],
  },
  'property-management': {
    archetype: 'operations',
    heroHeadline: '24/7 Tenant Maintenance Triage & Leasing Coordination.',
    heroSubhead: 'Triage urgent tenant maintenance requests day or night, page emergency vendors, and automate prospective tenant self-guided showing bookings.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Nighttime Emergency Phone Overload',
        desc: 'Property managers are woken up by late-night phone calls for minor non-urgent issues like blown lightbulbs instead of genuine water or gas leaks.',
      },
      {
        title: 'Vendor Coordination Delays',
        desc: 'Dispatching maintenance contractors requires endless back-and-forth calling between tenants, vendors, and property managers to confirm access windows.',
      },
      {
        title: 'Unanswered Prospective Tenant Inquiries',
        desc: 'Prospective renters calling about open listings during work hours get voicemail, resulting in high vacancy days and lost lease revenue.',
      },
    ],
    deliverables: [
      {
        id: 'maintenance-triage',
        title: '24/7 Voice & SMS Maintenance Triage',
        lead: 'Differentiates true property emergencies from routine repairs.',
        desc: 'Guides tenants through troubleshooting (e.g., garbage disposal resets), captures photos via SMS, and pages emergency vendors only when urgent thresholds are met.',
        stack: ['Twilio Voice', 'AppFolio', 'Buildium', 'SMS'],
      },
      {
        id: 'leasing-booking',
        title: 'Autonomous Leasing Tour & Inbound Coordinator',
        lead: 'Books prospective tenant viewings directly into leasing calendars.',
        desc: 'Answers pricing, pet policy, and parking questions from listing callers, pre-screens applicant move-in dates, and schedules self-guided or agent-led tours.',
        stack: ['AppFolio', 'Google Calendar', 'Tenant Turner', 'SMS'],
      },
      {
        id: 'vendor-dispatch',
        title: 'Automated Work Order & Vendor Dispatch',
        lead: 'Pushes categorized work orders directly to approved contractor rosters.',
        desc: 'Creates formal work orders in AppFolio or Buildium with tenant notes, notifies approved vendors with spending caps, and requests completion photos.',
        stack: ['AppFolio', 'Buildium', 'Yardi', 'Email'],
      },
    ],
    benefits: [
      { title: 'Peaceful Nights for Managers', desc: 'True emergencies are routed to on-call contractors, while routine repair requests are logged for morning review.' },
      { title: 'Faster Tenant Issue Resolution', desc: 'Structured maintenance triage and automated vendor dispatch reduce tenant ticket turnaround times.' },
      { title: 'Shorter Unit Vacancy Times', desc: 'Every prospective renter inquiry answered immediately with frictionless viewing scheduling.' },
      { title: 'Complete Property Management Record', desc: 'Every tenant call transcript, photo, and work order permanently stored in your property software.' },
    ],
  },
  'professional-services': {
    archetype: 'editorial',
    heroHeadline: 'Lead Qualification & Project Onboarding for Advisory Firms.',
    heroSubhead: 'Pre-screen inbound prospective clients, automate proposal generation, and provision new project workspaces the moment agreements are executed.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Partners Bogged Down by Unqualified Calls',
        desc: 'Senior consultants spend billable hours on discovery calls with prospective clients whose budgets, timelines, or scopes fall outside firm criteria.',
      },
      {
        title: 'Proposal & Scope of Work Bottlenecks',
        desc: 'Drafting standard proposals and statements of work takes days of back-and-forth email editing, stalling momentum on hot deals.',
      },
      {
        title: 'Disjointed Project Kickoff Administration',
        desc: 'Once a contract is signed, project managers manually create Slack channels, Notion workspaces, and billing accounts, delaying kickoff meetings.',
      },
    ],
    deliverables: [
      {
        id: 'inbound-screening',
        title: 'Consultative Inbound Lead Qualification Assistant',
        lead: 'Screens inbound prospective clients against firm capability criteria.',
        desc: 'Gathers prospect business challenges, estimated budgets, and project timelines. Routes qualified opportunities to the appropriate practice partner.',
        stack: ['HubSpot', 'Salesforce', 'Typeform', 'Slack'],
      },
      {
        id: 'sow-automation',
        title: 'Automated SOW & Proposal Generation',
        lead: 'Transforms discovery intake summaries into structured proposals.',
        desc: 'Extracts agreed project deliverables, standard terms, and pricing tables into formatted client agreements for partner review and DocuSign dispatch.',
        stack: ['DocuSign', 'PandaDoc', 'Google Docs', 'HubSpot'],
      },
      {
        id: 'workspace-provisioning',
        title: 'Contract-to-Kickoff Workspace Provisioning',
        lead: 'Signed agreements trigger instant client workspace creation.',
        desc: 'Automatically provisions Slack Connect channels, creates Asana or Linear project boards from templates, and schedules kickoff calls with stakeholders.',
        stack: ['Slack', 'Asana', 'Linear', 'Notion', 'Google Drive'],
      },
    ],
    benefits: [
      { title: 'More Billable Partner Time', desc: 'Filter out mismatched inquiries so partners invest their time only on high-value, qualified client prospects.' },
      { title: 'Faster Deal-to-Kickoff Speed', desc: 'Pre-filled proposals and automated contract signing eliminate days of administrative turnaround.' },
      { title: 'Consistent Client Onboarding Experience', desc: 'Every client receives prompt, polished, and standardized project setups from day one.' },
      { title: 'Zero Administrative Handoff Gaps', desc: 'Project managers step into pre-configured workspaces with complete discovery context ready to execute.' },
    ],
  },
  automotive: {
    archetype: 'practical',
    heroHeadline: 'Service Booking & Real-Time Vehicle Status Automation.',
    heroSubhead: 'Fill your service bays around the clock. Answer repair inquiries, coordinate calendar bookings, and send automated vehicle status updates to customers.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Service Advisors Overwhelmed by Phone Calls',
        desc: 'Advisors are constantly interrupted by phone inquiries while greeting walk-in customers and writing up repair estimates at the service counter.',
      },
      {
        title: 'Customers Anxiously Calling for Repair Updates',
        desc: 'Vehicle owners repeatedly call throughout the afternoon asking if their car is ready, pulling technicians away from active repair bays.',
      },
      {
        title: 'Missed After-Hours Service Inquiries',
        desc: 'Commuters whose check engine lights come on in the evening or over the weekend call for appointments and reach closed voicemails.',
      },
    ],
    deliverables: [
      {
        id: 'service-scheduler',
        title: '24/7 Automotive Phone Service Scheduler',
        lead: 'Answers repair and maintenance calls within two rings day or night.',
        desc: 'Gathers vehicle make, model, year, and service concern (oil change, brake inspection, diagnostics). Books available service drop-off windows.',
        stack: ['Twilio Voice', 'Tekmetric', 'Shop-Ware', 'Mitchell 1'],
      },
      {
        id: 'vehicle-status-sms',
        title: 'Automated Vehicle Status & Authorization SMS',
        lead: 'Sends real-time inspection updates and digital approval links.',
        desc: 'Notifies customers when diagnostic inspections are complete, sends links to approve repair estimates, and texts pickup notifications when vehicles are ready.',
        stack: ['Twilio SMS', 'Tekmetric', 'Shop-Ware'],
      },
      {
        id: 'service-recall',
        title: 'Preventative Maintenance & Service Recall Assistant',
        lead: 'Contacts past customers when seasonal service is due.',
        desc: 'Analyzes historical service records and dispatches personalized reminders for mileage milestones (tire rotations, brake checks, fluids).',
        stack: ['Shop Management Sync', 'Twilio SMS', 'Email'],
      },
    ],
    benefits: [
      { title: 'Higher Service Bay Utilization', desc: 'Capture drop-off appointments around the clock so morning service schedules are fully booked.' },
      { title: 'Advisors Focused on Customers', desc: 'Free service writers from constant phone interruptions so they can focus on in-shop customer relationships.' },
      { title: 'Faster Estimate Approvals', desc: 'Digital estimate links with clear photos and descriptions enable customers to approve repairs quickly.' },
      { title: 'Transparent Customer Experience', desc: 'Automated repair milestone notifications keep customers informed and build lasting shop loyalty.' },
    ],
  },
  'it-services': {
    archetype: 'analytical',
    heroHeadline: 'Tier-1 Support Triage & Client Ticket Automation for MSPs.',
    heroSubhead: 'Categorize incoming support requests, automate password reset and access workflows, and escalate critical outages to on-call engineers.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Senior Engineers Drowning in Tier-1 Tickets',
        desc: 'High-salary systems engineers spend hours each day handling routine password resets, software access requests, and basic email setup issues.',
      },
      {
        title: 'Unformatted Tickets Missing Critical Context',
        desc: 'Users submit vague tickets like "my computer isn\'t working", requiring technicians to spend hours asking follow-up questions before troubleshooting can begin.',
      },
      {
        title: 'Off-Hours Outage Escalation Gaps',
        desc: 'Critical client server or network downtimes occurring on weekends risk breaching SLA commitments if email alerts go unnoticed.',
      },
    ],
    deliverables: [
      {
        id: 'tier1-copilot',
        title: 'Autonomous Tier-1 Inbound Support Assistant',
        lead: 'Gathers device IDs, error codes, and issue details conversationally.',
        desc: 'Interviews users via phone or chat to capture structured diagnostic context, attempts automated resolution for common workflows, or routes pre-formatted tickets.',
        stack: ['ConnectWise Manage', 'Autotask', 'Zendesk', 'Slack'],
      },
      {
        id: 'knowledge-retrieval',
        title: 'Internal SOP & Client Runbook Copilot',
        lead: 'Queries thousands of pages of client network architecture documentation.',
        desc: 'Enables helpdesk technicians to query client-specific IP schemes, VPN setups, and vendor contacts in natural language with verified source citations.',
        stack: ['IT Glue', 'Hudu', 'Notion', 'Internal Vector DB'],
      },
      {
        id: 'sla-escalation',
        title: 'SLA-Gated Emergency Outage Escalation',
        lead: 'Directly pages on-call engineering rosters for priority incidents.',
        desc: 'Monitors inbound ticket urgency and monitoring webhooks, alerting on-call technicians via phone call and SMS when priority thresholds are breached.',
        stack: ['PagerDuty', 'Opsgenie', 'Slack', 'ConnectWise'],
      },
    ],
    benefits: [
      { title: 'Drastically Lower Tier-1 Ticket Volume', desc: 'Routine access requests and common questions resolved automatically without technician touches.' },
      { title: 'Higher Technician Retention & Morale', desc: 'Engineers focus on complex infrastructure projects rather than answering repetitive password reset calls.' },
      { title: 'Guaranteed SLA Adherence', desc: 'Structured intake and automated escalation ensure critical client outages are acknowledged within minutes.' },
      { title: 'PSA Stack Synchronization', desc: 'Every user interaction, diagnostic trace, and resolution note logged directly into ConnectWise or Autotask.' },
    ],
  },
  'ecommerce-logistics': {
    archetype: 'spacious',
    heroHeadline: 'Order Tracking & Fulfillment Exception Automation.',
    heroSubhead: 'Automate "Where is my order?" inquiries, streamline returns processing, and coordinate shipping exception alerts across multiple warehouses.',
    heroAlign: 'left',
    challenges: [
      {
        title: 'Support Queues Flooded with Tracking Requests',
        desc: 'Up to 60% of customer support volume during peak shopping periods consists of routine questions asking for package tracking numbers and delivery estimates.',
      },
      {
        title: 'Friction in Returns & Exchanges',
        desc: 'Customers asking for returns wait days for support representatives to look up orders, generate return labels, and explain return window policies.',
      },
      {
        title: 'Carrier Shipping Exceptions Discovered Too Late',
        desc: 'Packages stuck in transit or damaged by carriers are noticed only after angry customers reach out to complain, increasing refund and chargeback rates.',
      },
    ],
    deliverables: [
      {
        id: 'order-tracking',
        title: 'Instant Order Status & Tracking Assistant',
        lead: 'Answers customer delivery questions in seconds across web and phone.',
        desc: 'Queries live carrier tracking APIs (FedEx, UPS, USPS, DHL) and order systems to provide real-time location, delivery dates, and carrier links.',
        stack: ['Shopify', 'ShipStation', 'Gorgias', 'Zendesk'],
      },
      {
        id: 'returns-portal',
        title: 'Automated Returns & Exchange Coordinator',
        lead: 'Guides customers through return policy verification and label generation.',
        desc: 'Checks purchase eligibility, generates prepaid return shipping labels via ShipStation, and logs return inventory manifests into warehouse management.',
        stack: ['Shopify', 'ShipStation', 'Loop Returns', 'Klaviyo'],
      },
      {
        id: 'exception-alerting',
        title: 'Proactive Shipping Exception Detection',
        lead: 'Monitors transit delays and alerts customers before they complain.',
        desc: 'Tracks package delivery exceptions in real time, automatically emailing customers with updated delivery timelines and support reassurance.',
        stack: ['AfterShip', 'Shopify', 'Klaviyo', 'Twilio SMS'],
      },
    ],
    benefits: [
      { title: 'Zero Wait Times for Order Inquiries', desc: 'Customers receive immediate, verified package tracking status 24 hours a day with zero support backlog.' },
      { title: 'Frictionless Returns & Exchange Flow', desc: 'Pre-validated return policies and automated label generation preserve client trust and encourage repeat purchases.' },
      { title: 'Lower Support Payroll Overheads', desc: 'Handle seasonal order surges and holiday shopping peaks without hiring temporary support staff.' },
      { title: 'Full E-commerce Ecosystem Integration', desc: 'Direct synchronization across Shopify, Gorgias, ShipStation, and customer communication channels.' },
    ],
  },
};

export default function IndustryDetailPage({ industryId }) {
  const { currentPath } = useRouter();
  const pageRef = useRef(null);

  // Resolve slug from props or router path
  const slug = industryId || currentPath.replace(/^\/industries\//, '').replace(/\/$/, '');
  const industryMeta = INDUSTRIES_DATA.find((item) => item.id === slug) || INDUSTRIES_DATA[0];
  const config = INDUSTRY_DETAILS[slug] || INDUSTRY_DETAILS.legal;

  const [expandedDeliverable, setExpandedDeliverable] = useState(0);

  usePageMetadata({
    title: `${industryMeta.name} — AI & Automation Solutions | Hutomate`,
    description: config.heroSubhead || industryMeta.solution,
    path: `/industries/${slug}`,
  });

  useScrollReveal();

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.ind-detail-hero-bg, .ind-detail-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.ind-detail-hero-bg',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        '.ind-detail-breadcrumb',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.8'
      )
      .fromTo(
        '.ind-detail-hero-headline',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.45'
      )
      .fromTo(
        '.ind-detail-hero-subhead',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.ind-detail-hero-actions',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      );
  }, [slug]);

  const toggleDeliverable = (idx) => {
    setExpandedDeliverable(expandedDeliverable === idx ? -1 : idx);
  };

  return (
    <div className={`ind-detail-page archetype-${config.archetype}`} ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO — FULL-COVER PHOTOGRAPHY
          ========================================================================= */}
      <section className="ind-detail-hero-section" aria-label={`${industryMeta.name} Overview`}>
        <div className="ind-detail-hero-bg-wrapper" aria-hidden="true">
          <img
            src={industryMeta.image}
            alt={`${industryMeta.name} professional environment`}
            className="ind-detail-hero-bg"
            loading="eager"
            decoding="sync"
          />
          <div className="ind-detail-hero-overlay" />
        </div>

        <div className="container ind-detail-hero-container">
          <div className={`ind-detail-hero-content align-${config.heroAlign || 'left'}`}>
            {/* Clean Breadcrumb Navigation */}
            <nav className="ind-detail-breadcrumb" aria-label="Breadcrumb">
              <Link to="/industries" className="ind-crumb-link">Industries</Link>
              <ChevronRight size={13} className="ind-crumb-sep" aria-hidden="true" />
              <span className="ind-crumb-current">{industryMeta.name}</span>
            </nav>

            <h1 className="ind-detail-hero-headline">
              {config.heroHeadline}
            </h1>

            <p className="ind-detail-hero-subhead">
              {config.heroSubhead}
            </p>

            <div className="ind-detail-hero-actions">
              <Button variant="primary" size="lg" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/industries">
                Explore All Industries
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: THE CHALLENGE — SECTOR OPERATIONAL REALITY
          ========================================================================= */}
      <section className="ind-detail-challenge-section" aria-label="Operational Challenges">
        <div className="container">
          <div className="ind-detail-challenge-header reveal-on-scroll">
            <span className="ind-detail-kicker">THE OPERATIONAL CHALLENGE</span>
            <h2 className="ind-detail-heading">
              Why traditional workflows create friction in {industryMeta.name.toLowerCase()}.
            </h2>
            <p className="ind-detail-lead">
              Businesses in this sector face distinct operational pressures: high client expectations, specialized software tools, and administrative tasks that consume valuable team bandwidth.
            </p>
          </div>

          <div className="ind-detail-challenges-grid reveal-on-scroll">
            {config.challenges.map((ch, idx) => (
              <div key={idx} className="ind-detail-challenge-card">
                <span className="ind-challenge-idx">0{idx + 1}</span>
                <h3 className="ind-challenge-card-title">{ch.title}</h3>
                <p className="ind-challenge-card-desc">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT WE DELIVER — INTERACTIVE SOLUTION MODULES
          ========================================================================= */}
      <section className="ind-detail-deliver-section" aria-label="What We Deliver">
        <div className="container">
          <div className="ind-detail-deliver-header reveal-on-scroll">
            <span className="ind-detail-kicker">WHAT WE DELIVER</span>
            <h2 className="ind-detail-heading">
              Tailored automation systems for {industryMeta.name.toLowerCase()}.
            </h2>
            <p className="ind-detail-lead">
              Explore our core automation architectures designed specifically around your industry&apos;s workflow, software platforms, and communication rules.
            </p>
          </div>

          <div className="ind-detail-accordion-wrap reveal-on-scroll">
            {config.deliverables.map((item, idx) => {
              const isExpanded = expandedDeliverable === idx;
              return (
                <div
                  key={item.id}
                  className={`ind-detail-accordion-item ${isExpanded ? 'is-active' : ''}`}
                >
                  <button
                    type="button"
                    className="ind-detail-accordion-trigger"
                    onClick={() => toggleDeliverable(idx)}
                    aria-expanded={isExpanded}
                    aria-controls={`deliverable-detail-${item.id}`}
                  >
                    <div className="ind-detail-trigger-left">
                      <span className="ind-detail-item-num">0{idx + 1}</span>
                      <h3 className="ind-detail-item-title">{item.title}</h3>
                    </div>
                    <div className="ind-detail-chevron-wrap" aria-hidden="true">
                      <ChevronDown
                        size={20}
                        className={`ind-detail-chevron ${isExpanded ? 'is-rotated' : ''}`}
                      />
                    </div>
                  </button>

                  <div
                    id={`deliverable-detail-${item.id}`}
                    className={`ind-detail-accordion-drawer ${isExpanded ? 'is-open' : ''}`}
                  >
                    <div className="ind-detail-drawer-inner">
                      <p className="ind-drawer-lead">{item.lead}</p>
                      <p className="ind-drawer-desc">{item.desc}</p>

                      <div className="ind-drawer-stack-row">
                        <span className="ind-stack-label">Supported Tech Stack:</span>
                        <div className="ind-stack-tags">
                          {item.stack.map((tool, tIdx) => (
                            <span key={tIdx} className="ind-stack-chip">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: WHY IT MATTERS — MEASURABLE BUSINESS VALUE
          ========================================================================= */}
      <section className="ind-detail-matters-section" aria-label="Why It Matters">
        <div className="container">
          <div className="ind-detail-matters-header reveal-on-scroll">
            <span className="ind-detail-kicker">PRACTICAL BUSINESS VALUE</span>
            <h2 className="ind-detail-heading">
              Measurable operational improvements, zero speculative claims.
            </h2>
            <p className="ind-detail-lead">
              Our systems focus on removing day-to-day friction: faster response times, fewer manual handoffs, and reliable coordination across your software stack.
            </p>
          </div>

          <div className="ind-detail-benefits-grid reveal-on-scroll">
            {config.benefits.map((ben, idx) => (
              <div key={idx} className="ind-detail-benefit-card">
                <div className="ind-benefit-top">
                  <span className="ind-benefit-index">0{idx + 1}</span>
                  <div className="ind-benefit-line" aria-hidden="true" />
                </div>
                <h3 className="ind-benefit-card-title">{ben.title}</h3>
                <p className="ind-benefit-card-desc">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: FINAL CTA — IMMERSIVE DARK NAVY CONVERSION
          ========================================================================= */}
      <section className="ind-detail-final-cta-section" aria-label="Discuss Your Project">
        <div className="ind-detail-cta-bloom" aria-hidden="true" />
        <div className="container">
          <div className="ind-detail-final-cta-inner reveal-on-scroll">
            <span className="ind-detail-final-kicker">GET STARTED</span>
            <h2 className="ind-detail-final-heading">
              Let&apos;s build a smarter way to run your {industryMeta.name.toLowerCase()} business.
            </h2>
            <p className="ind-detail-final-desc">
              Share your current workflow and software tools with our engineering team. We&apos;ll evaluate where intelligent automation can eliminate manual friction and drive immediate efficiency.
            </p>
            <div className="ind-detail-final-actions">
              <Button variant="primary" size="lg" arrow href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/industries">
                Explore Other Industries
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
