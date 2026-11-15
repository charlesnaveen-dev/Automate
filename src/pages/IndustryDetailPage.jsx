import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from '../router/RouterContext';
import { Link } from '../router/Router';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useGsapContext } from '../animations/useGsapContext';
import gsap from 'gsap';
import Button from '../components/Button';
import { INDUSTRIES_DATA } from '../data/industriesData';
import './IndustryDetailPage.css';

// 12 Curated Industry Configurations
// Natural writing, real-world operational bottlenecks, practical automation systems, and clear Before / After outcomes.
const INDUSTRY_DETAILS = {
  legal: {
    heroHeadline: 'Intelligent Client Intake & Practice Automation for Law Firms',
    heroSubhead: 'Capture prospective matters 24/7, pre-screen conflict parameters, and automate retainer workflows so attorneys focus on billable casework.',
    heroAlign: 'left',
    challengeHeadline: 'Everyday operational bottlenecks that cost law firms billable time',
    challenges: [
      {
        title: 'Unanswered case enquiries',
        desc: 'Prospective clients calling with urgent legal matters often reach voicemail when attorneys are in court, depositions, or client conferences. Callers rarely leave detailed messages and immediately ring competing firms.'
      },
      {
        title: 'Intake and conflict checking delays',
        desc: 'Staff spend valuable hours manually gathering case facts and cross-referencing party names against active matter databases before consultations can even be scheduled.'
      },
      {
        title: 'Routine status inquiries',
        desc: 'Clients frequently call asking for basic hearing dates, filing confirmations, or document status, pulling paralegals away from active casework.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for law firms',
    deliverables: [
      {
        title: '24/7 client intake and screening',
        desc: 'Answers prospective client calls and web enquiries within two rings, gathering matter details, incident timelines, and caller contact information. Formats a clear case summary and immediately alerts the intake coordinator or relevant attorney.',
        compatibility: 'Connects with your existing practice management software, calendar, and phone system, so your team can work within their familiar tools.'
      },
      {
        title: 'Consultation scheduling and retainer preparation',
        desc: 'Coordinates initial consultations based on real-time attorney calendar availability and prepares standardized engagement agreements upon approval. Helps firms secure new casework faster without days of administrative back-and-forth.',
        compatibility: 'Fits into the document signing and calendar platforms your firm already uses, keeping your client onboarding process smooth.'
      },
      {
        title: 'Client status and matter updates',
        desc: 'Provides verified answers to routine client questions regarding case filing milestones, upcoming court dates, and required document checklists. Keeps clients informed while protecting attorneys\' focused working hours.',
        compatibility: 'Works alongside your existing client communication channels and case records without requiring any software replacement.'
      }
    ],
    valueHeadline: 'What changes for your firm',
    beforeAfter: [
      {
        before: 'Urgent prospective client calls reach voicemail during court appearances and after hours.',
        after: 'Prospective matters receive an immediate, professional response day or night.'
      },
      {
        before: 'Staff spend hours manually typing caller notes and cross-referencing conflict databases.',
        after: 'Attorneys receive pre-screened matter briefs with consultation appointments booked on live calendars.'
      },
      {
        before: 'Retainer agreements require days of drafting, back-and-forth emails, and manual follow-ups.',
        after: 'Standard engagement letters are generated and dispatched promptly upon consultation approval.'
      },
      {
        before: 'Paralegals lose valuable hours answering routine status check-ins from existing clients.',
        after: 'Routine updates are shared automatically, keeping clients informed while freeing staff for billable work.'
      }
    ]
  },

  'real-estate': {
    heroHeadline: 'Instant Lead Capture & Showing Coordination for Real Estate Teams',
    heroSubhead: 'Engage portal inquiries and yard-sign calls within seconds. Automate buyer qualification, financing verification, and private viewing schedules.',
    heroAlign: 'left',
    challengeHeadline: 'Common operational bottlenecks that slow down real estate teams',
    challenges: [
      {
        title: 'Lead leakage outside business hours',
        desc: 'Buyers calling from property yard signs or online listings after hours frequently reach voicemail. Most call competing listing agents rather than waiting for a callback.'
      },
      {
        title: 'Repetitive property availability questions',
        desc: 'Agents spend hours each week answering identical questions about price reductions, HOA restrictions, and open house schedules instead of negotiating active deals.'
      },
      {
        title: 'Showing coordination delays',
        desc: 'Coordinating private viewing times between prospective buyers, buyer agents, and homeowners involves endless phone tag and calendar conflicts.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for real estate teams',
    deliverables: [
      {
        title: '24/7 buyer and seller enquiry assistant',
        desc: 'Answers listing calls and digital enquiries within seconds, day or night. Answers common property questions, qualifies buyer timelines and financing, and routes serious prospects directly to the listing agent.',
        compatibility: 'Connects with your existing real estate CRM, email, and phone system so leads populate directly where your team works.'
      },
      {
        title: 'Automated property showing coordinator',
        desc: 'Checks agent and property availability to book private viewings and open house visits automatically. Sends immediate calendar confirmations, directions, and access instructions to confirmed visitors.',
        compatibility: 'Syncs directly with your current scheduling software and calendar tools without requiring manual data entry.'
      },
      {
        title: 'CRM updates and lead follow-up pipeline',
        desc: 'Automatically logs conversation notes, buyer preferences, and property criteria directly into your database. Dispatches relevant new property alerts to keep prospective buyers engaged.',
        compatibility: 'Works with your existing contact management and messaging tools, keeping your pipeline organized in real time.'
      }
    ],
    valueHeadline: 'What changes for your real estate team',
    beforeAfter: [
      {
        before: 'Evening and weekend listing enquiries often reach voicemail and turn cold.',
        after: 'Every prospective buyer receives immediate answers and viewing options 24/7.'
      },
      {
        before: 'Agents spend hours each week repeating basic property details and HOA guidelines.',
        after: 'Common questions are answered automatically, freeing agents to focus on client negotiations.'
      },
      {
        before: 'Private showing schedules require repeated phone tag between buyers and property owners.',
        after: 'Viewings are coordinated and confirmed automatically based on live availability.'
      },
      {
        before: 'Lead details and caller notes are manually typed into the CRM when agents find spare time.',
        after: 'Complete prospect criteria and conversation summaries are synchronized into your CRM immediately.'
      }
    ]
  },

  healthcare: {
    heroHeadline: 'Patient Communication & Intake Automation for Modern Practices',
    heroSubhead: 'Reduce front-desk telephone volume, streamline patient intake, and coordinate appointment scheduling with privacy-conscious workflows.',
    heroAlign: 'left',
    challengeHeadline: 'Daily operational bottlenecks that burden clinic front-desk teams',
    challenges: [
      {
        title: 'High telephone volume at reception',
        desc: 'Receptionists are tied up on the phone answering routine questions about clinic hours, directions, and parking while patients waiting in the clinic stand in line.'
      },
      {
        title: 'Unfilled appointment cancellations',
        desc: 'When patients cancel last minute, administrative staff rarely have time to manually contact waitlisted patients, leaving expensive clinical provider hours empty.'
      },
      {
        title: 'Waiting room paperwork delays',
        desc: 'Patients arriving and filling out paper intake clipboards causes appointment start delays and forces staff into repetitive manual data entry.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for healthcare clinics',
    deliverables: [
      {
        title: 'Conversational phone reception assistant',
        desc: 'Answers routine patient telephone enquiries within two rings, providing clinic hours, directions, and pre-visit guidelines. Handles high call volumes during peak morning hours without putting callers on hold.',
        compatibility: 'Connects with your existing phone service and practice software using privacy-conscious, secure connections.'
      },
      {
        title: 'Appointment scheduling and cancellation recovery',
        desc: 'Coordinates appointment bookings within physician availability rules and automatically reaches out to waitlisted patients when cancellations occur. Keeps practitioner calendars booked without front-desk phone tag.',
        compatibility: 'Works with your existing clinic calendar and practice management software without replacing current scheduling tools.'
      },
      {
        title: 'Digital intake and pre-visit preparation',
        desc: 'Dispatches mobile-friendly pre-visit intake forms and insurance verification requests prior to appointment arrival. Collects necessary details beforehand so patients can see their doctor on time.',
        compatibility: 'Integrates with your existing patient records and communication channels via secure APIs.'
      }
    ],
    valueHeadline: 'What changes for your clinic',
    beforeAfter: [
      {
        before: 'Receptionists juggle ringing telephones while in-person patients wait at the front counter.',
        after: 'Routine phone calls are handled automatically, allowing staff to give full attention to patients in the clinic.'
      },
      {
        before: 'Last-minute cancellations leave expensive clinical provider appointment slots empty.',
        after: 'Waitlisted patients are automatically notified of openings, keeping schedules full.'
      },
      {
        before: 'Patients fill out clipboards in the waiting room, causing schedule delays and manual data entry.',
        after: 'Patients complete digital intake before arriving, allowing visits to start promptly.'
      },
      {
        before: 'Front-desk staff spend hours playing phone tag to confirm upcoming appointments.',
        after: 'Multi-channel reminders confirm visits automatically and allow easy conversational rescheduling.'
      }
    ]
  },

  'home-services': {
    heroHeadline: '24/7 Emergency Dispatch & Job Booking for Trade Contractors',
    heroSubhead: 'Never miss an urgent heating, plumbing, or electrical emergency. Qualify caller location, check service territory, and dispatch on-call technicians.',
    heroAlign: 'left',
    challengeHeadline: 'Everyday operational bottlenecks that cost trade contractors revenue',
    challenges: [
      {
        title: 'Missed emergency calls after hours',
        desc: 'Homeowners facing broken heating or burst pipes call after 6 PM. If nobody answers immediately, they dial the next trade business on Google.'
      },
      {
        title: 'Technicians interrupted on active jobs',
        desc: 'Field contractors and lead technicians lose focus and billable time climbing out from crawl spaces or ladders to answer scheduling questions.'
      },
      {
        title: 'Disorganized dispatch and job notes',
        desc: 'Voicemail transcriptions and handwritten notes lead to missing addresses, incomplete job scopes, and scheduling mix-ups.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for trade businesses',
    deliverables: [
      {
        title: '24/7 emergency call triage and dispatch',
        desc: 'Answers incoming emergency calls within two rings day or night, determines the nature of the issue, and captures the service address. Immediately notifies the on-call technician with a concise job brief.',
        compatibility: 'Connects with your existing field service software, phone system, and team messaging channels.'
      },
      {
        title: 'Automated routine booking and territory screening',
        desc: 'Checks caller zip codes against your service area, explains standard diagnostic fees, and books routine arrival windows. Coordinates technician schedules without manual office intervention.',
        compatibility: 'Fits into your current dispatch calendar and CRM platforms via standard webhooks and API connections.'
      },
      {
        title: 'Job completion check-ins and review requests',
        desc: 'Sends friendly follow-up messages once a work order is marked complete, confirming customer satisfaction and requesting Google reviews while the good experience is fresh.',
        compatibility: 'Works with your existing customer records and messaging tools without changing how technicians work on-site.'
      }
    ],
    valueHeadline: 'What changes for your service business',
    beforeAfter: [
      {
        before: 'Urgent evening and weekend emergency calls go to voicemail and callers contact competing contractors.',
        after: 'Emergency calls are answered immediately 24/7, capturing profitable after-hours jobs.'
      },
      {
        before: 'Field technicians are repeatedly interrupted by phone calls while on active job sites.',
        after: 'Office and scheduling calls are handled automatically so technicians stay focused on billable work.'
      },
      {
        before: 'Incomplete customer voicemails cause address errors and dispatch confusion.',
        after: 'Detailed service notes, zip codes, and arrival preferences are logged cleanly into your dispatch software.'
      },
      {
        before: 'Asking for customer reviews happens haphazardly when the office finds spare time.',
        after: 'Automated satisfaction follow-ups generate consistent positive reviews from happy customers.'
      }
    ]
  },

  'financial-services': {
    heroHeadline: 'Document Collection & Client Workflow Automation for Financial Firms',
    heroSubhead: 'Eliminate manual tax-season document chasing, automate client onboarding reminders, and synchronize accounting ledgers in real time.',
    heroAlign: 'left',
    challengeHeadline: 'Daily administrative bottlenecks that burden financial and accounting teams',
    challenges: [
      {
        title: 'Time-consuming document chasing',
        desc: 'Accountants spend valuable hours during peak seasons sending repetitive emails reminding clients to submit tax forms, receipts, and bank statements.'
      },
      {
        title: 'Manual data re-entry into ledgers',
        desc: 'Copying numbers between client statements, spreadsheets, and accounting software takes hours and creates opportunities for clerical errors.'
      },
      {
        title: 'Fragmented client status inquiries',
        desc: 'Clients repeatedly email and call asking whether their files were received or when their return will be ready, interrupting focused advisory work.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for financial practices',
    deliverables: [
      {
        title: 'Automated client document collection',
        desc: 'Tracks missing tax documents and sends scheduled, polite reminders with secure upload links. Verifies file formats automatically so your team doesn\'t spend hours chasing paperwork.',
        compatibility: 'Connects with your existing document management tools, practice software, and client communication channels.'
      },
      {
        title: 'Statement parsing and ledger synchronization',
        desc: 'Extracts relevant line items, invoice details, and receipts from client uploads and matches them against open ledger entries. Highlights exceptions for human review instead of requiring full manual data entry.',
        compatibility: 'Fits into your current bookkeeping and accounting software ecosystem via secure APIs.'
      },
      {
        title: 'Client status and deadline assistant',
        desc: 'Answers frequent client questions regarding filing deadlines, documentation checklists, and processing stages. Keeps clients informed while protecting advisors\' focused working hours.',
        compatibility: 'Works with your existing client email, messaging, and practice portals without requiring platform migration.'
      }
    ],
    valueHeadline: 'What changes for your financial team',
    beforeAfter: [
      {
        before: 'Advisors spend hours sending manual reminder emails for missing tax documents and statements.',
        after: 'Automated reminders collect required client files weeks ahead of statutory filing deadlines.'
      },
      {
        before: 'Staff manually type numbers from invoices and bank statements into accounting ledgers.',
        after: 'Uploaded documents are parsed and reconciled automatically, with staff only reviewing exceptions.'
      },
      {
        before: 'Clients send repetitive emails asking whether their documents were received or when returns will be ready.',
        after: 'Clients receive clear automated confirmations and status updates as work moves through milestones.'
      },
      {
        before: 'Tax season creates extreme administrative overtime and burnout for senior accounting staff.',
        after: 'Repetitive administrative chase work is eliminated, allowing accountants to focus on advisory clients.'
      }
    ]
  },

  insurance: {
    heroHeadline: 'Intelligent Intake & Policy Renewal Automation for Insurance Agencies',
    heroSubhead: 'Streamline First Notice of Loss (FNOL) intake, automate proactive policy renewal reminders, and collect quote parameters around the clock.',
    heroAlign: 'left',
    challengeHeadline: 'Operational bottlenecks that slow down insurance agency growth',
    challenges: [
      {
        title: 'Unanswered calls during peak claim events',
        desc: 'Policyholders calling to report accident or storm damage encounter busy lines or hold times, causing frustration during high-stress situations.'
      },
      {
        title: 'Slow pre-quote information gathering',
        desc: 'Agents spend significant phone time manually collecting vehicle VINs, property square footage, and driver histories before running underwriting quotes.'
      },
      {
        title: 'Silent policyholder churn at renewal',
        desc: 'Clients whose policies approach renewal shop elsewhere because the agency lacked the administrative time to reach out proactively with updated options.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for insurance agencies',
    deliverables: [
      {
        title: 'First notice of loss (FNOL) intake assistant',
        desc: 'Gathers claim details with structured, calm conversational dialogue around the clock. Collects incident dates, police report references, and caller details, preparing an organized claim summary for adjusters.',
        compatibility: 'Connects with your existing agency management system, phone platform, and email notifications.'
      },
      {
        title: 'Pre-quote intake and risk parameter collection',
        desc: 'Collects property specifications, driver records, and coverage limits conversationally before quoting. Structures the data cleanly so agents can review and submit policies without repetitive data gathering.',
        compatibility: 'Fits into the agency management software and rating platforms your team already uses.'
      },
      {
        title: 'Proactive policy renewal pipeline',
        desc: 'Identifies policies reaching expiration dates and dispatches personalized review check-ins automatically. Gathers updated coverage needs and schedules review calls before clients look elsewhere.',
        compatibility: 'Works with your existing customer database and messaging channels without disrupting daily agency operations.'
      }
    ],
    valueHeadline: 'What changes for your insurance agency',
    beforeAfter: [
      {
        before: 'Policyholders reporting urgent claims wait on hold during major regional weather events.',
        after: 'Every claim call receives an immediate, structured intake with full notes forwarded to agents.'
      },
      {
        before: 'Producers spend hours on basic data collection before they can begin underwriting quotes.',
        after: 'Pre-validated risk parameters arrive ready for rating, allowing producers to close more policies.'
      },
      {
        before: 'Policies renew quietly or lapse without proactive outreach, losing valuable agency book value.',
        after: 'Proactive check-ins contact policyholders 45 days in advance, strengthening long-term retention.'
      },
      {
        before: 'Client notes and policy numbers are scattered across voicemails, sticky notes, and inboxes.',
        after: 'All customer communications and intake records are synced directly into client files.'
      }
    ]
  },

  construction: {
    heroHeadline: 'Field-to-Office Coordination & Documentation for Commercial Builders',
    heroSubhead: 'Connect job-site superintendents with back-office accounting. Automate RFI logging, subcontractor compliance verification, and delivery slip matching.',
    heroAlign: 'left',
    challengeHeadline: 'Operational friction points between job sites and construction offices',
    challenges: [
      {
        title: 'Field RFIs lost in text messages',
        desc: 'Superintendents text urgent technical questions from job sites, which get buried in project manager inboxes, causing trade delays on-site.'
      },
      {
        title: 'Subcontractor compliance and insurance lapses',
        desc: 'Subcontractors arriving on-site with expired certificates of insurance expose general contractors to liability and potential stop-work notices.'
      },
      {
        title: 'Missing job-site delivery slips',
        desc: 'Paper delivery slips left in job trailers cause delayed billing reconciliations, disputed material invoices, and inaccurate job costing.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for general contractors',
    deliverables: [
      {
        title: 'Voice-to-RFI field capture',
        desc: 'Allows superintendents to speak field questions and scope clarifications directly on-site. Transcribes notes, extracts drawing spec references, and formats formal RFIs for project manager review.',
        compatibility: 'Connects with your existing construction management platform, messaging tools, and email.'
      },
      {
        title: 'Automated subcontractor compliance tracking',
        desc: 'Monitors insurance certificate and license expiration dates across all active trades. Automatically dispatches renewal requests 30 days before expiration to maintain site compliance.',
        compatibility: 'Fits into your existing vendor records and document management systems without manual administrative overhead.'
      },
      {
        title: 'Delivery slip and invoice reconciliation',
        desc: 'Captures photos of field delivery receipts, extracts supplier item quantities, and matches them against purchase orders before vendor invoices are approved for payment.',
        compatibility: 'Works alongside your existing accounting and construction software via standard integrations.'
      }
    ],
    valueHeadline: 'What changes for your construction company',
    beforeAfter: [
      {
        before: 'Critical job-site questions get lost in text chains, holding up trade crews for days.',
        after: 'Field RFIs are transcribed, formatted, and delivered to project managers immediately.'
      },
      {
        before: 'Subcontractors arrive on-site with expired insurance policies, creating liability risks.',
        after: 'Automated expiration tracking alerts trade partners well before policies expire.'
      },
      {
        before: 'Paper delivery tickets get crumpled or lost in job trailers, delaying accurate job costing.',
        after: 'Receipts photographed in the field are digitized and reconciled with purchase orders in real time.'
      },
      {
        before: 'Project managers spend evenings typing up job notes and compiling daily logs manually.',
        after: 'Field notes and logs are organized automatically, keeping office and field teams synchronized.'
      }
    ]
  },

  'property-management': {
    heroHeadline: '24/7 Tenant Maintenance Triage & Leasing Coordination',
    heroSubhead: 'Triage urgent tenant maintenance requests day or night, page emergency vendors, and automate prospective tenant self-guided showing bookings.',
    heroAlign: 'left',
    challengeHeadline: 'Everyday operational bottlenecks that overwhelm property managers',
    challenges: [
      {
        title: 'Late-night maintenance phone overload',
        desc: 'Property managers are interrupted after hours for minor non-urgent issues like squeaky doors instead of genuine plumbing or heating emergencies.'
      },
      {
        title: 'Endless vendor and tenant scheduling phone tag',
        desc: 'Coordinating contractor repair visits requires repeated back-and-forth calls between tenants, maintenance staff, and property managers.'
      },
      {
        title: 'Unanswered prospective renter inquiries',
        desc: 'Potential tenants calling about open units during busy office hours reach voicemail, increasing days on market and delaying lease revenue.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for property management',
    deliverables: [
      {
        title: '24/7 maintenance triage and emergency escalation',
        desc: 'Distinguishes true maintenance emergencies from routine service requests day or night. Captures photos and issue descriptions, guides tenants through initial troubleshooting, and alerts on-call vendors when necessary.',
        compatibility: 'Connects with your existing property management platform, phone system, and vendor notification channels.'
      },
      {
        title: 'Autonomous leasing tour coordinator',
        desc: 'Answers questions regarding unit pricing, pet rules, and utility policies 24/7. Pre-screens applicant move-in timelines and books self-guided or agent-led showing appointments automatically.',
        compatibility: 'Syncs directly with your current leasing calendars and listing management software.'
      },
      {
        title: 'Work order dispatch and vendor coordination',
        desc: 'Automatically generates categorized work orders from tenant requests, notifies approved contractors, and collects confirmation updates upon job completion.',
        compatibility: 'Fits into the property management systems your team already relies on without requiring software migration.'
      }
    ],
    valueHeadline: 'What changes for your property management team',
    beforeAfter: [
      {
        before: 'Managers get woken up by late-night phone calls for minor non-urgent maintenance issues.',
        after: 'Emergencies are routed to on-call contractors, while routine repairs are logged cleanly for morning review.'
      },
      {
        before: 'Coordinating repair access requires endless phone calls between tenants and vendors.',
        after: 'Work orders and access windows are coordinated automatically, keeping everyone informed.'
      },
      {
        before: 'Prospective renters calling about vacancies reach voicemail and browse competing listings.',
        after: 'Inquiries receive immediate answers with viewing appointments booked on live calendars 24/7.'
      },
      {
        before: 'Maintenance notes and tenant communications are scattered across voicemails and text messages.',
        after: 'Every tenant request, photo, and work order update is logged permanently in your property software.'
      }
    ]
  },

  'professional-services': {
    heroHeadline: 'Lead Qualification & Project Onboarding for Advisory Firms',
    heroSubhead: 'Pre-screen inbound prospective clients, automate proposal generation, and provision new project workspaces the moment agreements are executed.',
    heroAlign: 'left',
    challengeHeadline: 'Operational bottlenecks that drain billable hours in advisory firms',
    challenges: [
      {
        title: 'Senior consultants bogged down by unqualified calls',
        desc: 'Partners spend billable hours on initial discovery calls with prospects whose budgets, timelines, or requirements do not match firm services.'
      },
      {
        title: 'Proposal and scope of work delays',
        desc: 'Preparing standard proposals and engagement scopes takes days of back-and-forth editing, slowing down sales momentum on high-intent deals.'
      },
      {
        title: 'Slow project onboarding administration',
        desc: 'Once a client signs an agreement, manually setting up communication channels, project folders, and billing records delays project kickoff meetings.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for advisory firms',
    deliverables: [
      {
        title: 'Consultative inbound lead qualification',
        desc: 'Pre-screens prospective clients against firm criteria, gathering project scope, timeline, and budget parameters conversationally. Routes qualified opportunities to the right practice partner with a structured brief.',
        compatibility: 'Connects with your existing CRM, calendar tools, and internal communication channels.'
      },
      {
        title: 'Automated proposal and agreement generation',
        desc: 'Converts discovery meeting summaries and standard scope templates into formatted client proposals. Prepares engagement documents for partner review and dispatch within minutes.',
        compatibility: 'Fits into your existing document signing tools and project software via standard APIs.'
      },
      {
        title: 'Contract-to-kickoff workspace provisioning',
        desc: 'Signed client contracts automatically trigger initial workspace setup, project templates, and kickoff scheduling with key stakeholders.',
        compatibility: 'Works with your existing project management, storage, and communication platforms without disruption.'
      }
    ],
    valueHeadline: 'What changes for your consultancy',
    beforeAfter: [
      {
        before: 'Partners spend billable hours on introductory calls with unqualified leads.',
        after: 'Pre-screening ensures partners spend time only with qualified prospective clients who fit firm criteria.'
      },
      {
        before: 'Drafting proposals and scopes of work takes days of administrative back-and-forth.',
        after: 'Standard proposals are assembled and dispatched promptly, keeping client momentum high.'
      },
      {
        before: 'Setting up client folders, boards, and channels delays project start dates by days.',
        after: 'Signed agreements immediately trigger organized project workspaces ready for kickoff.'
      },
      {
        before: 'Discovery notes and client background details are lost during handoffs from sales to delivery teams.',
        after: 'Delivery teams receive complete, organized intake context before their first client meeting.'
      }
    ]
  },

  automotive: {
    heroHeadline: 'Service Booking & Real-Time Vehicle Status Automation',
    heroSubhead: 'Fill your service bays around the clock. Answer repair inquiries, coordinate calendar bookings, and send automated vehicle status updates to customers.',
    heroAlign: 'left',
    challengeHeadline: 'Daily operational bottlenecks that overwhelm service drive teams',
    challenges: [
      {
        title: 'Service advisors constantly interrupted by ringing phones',
        desc: 'Advisors get pulled away while greeting walk-in customers and writing up repair estimates at the service counter.'
      },
      {
        title: 'Customers repeatedly calling for vehicle status updates',
        desc: 'Drivers anxiously call throughout the day asking if their vehicle is ready, taking technicians away from active repair work.'
      },
      {
        title: 'Unanswered after-hours repair enquiries',
        desc: 'Drivers whose check engine lights illuminate on evenings or weekends call for appointments and reach closed shop voicemails.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for automotive service centers',
    deliverables: [
      {
        title: '24/7 phone service booking assistant',
        desc: 'Answers customer calls within two rings day or night, gathers vehicle make, model, year, and service needs, and books drop-off arrival windows.',
        compatibility: 'Connects with your existing shop management software and calendar dispatch systems.'
      },
      {
        title: 'Automated vehicle status and estimate approvals',
        desc: 'Keeps vehicle owners updated with clear SMS inspection milestones and sends digital estimate approval links directly to their phones.',
        compatibility: 'Fits into the shop software and messaging channels your team already uses.'
      },
      {
        title: 'Scheduled maintenance and recall outreach',
        desc: 'Contacts past customers when recommended mileage intervals or seasonal services are approaching, offering quick one-tap booking.',
        compatibility: 'Works with your existing customer databases and communication tools without changing shop floor routines.'
      }
    ],
    valueHeadline: 'What changes for your service center',
    beforeAfter: [
      {
        before: 'Service writers juggle ringing telephones while walk-in customers wait at the service counter.',
        after: 'Routine appointment booking calls are handled automatically, giving advisors time for customers in the shop.'
      },
      {
        before: 'Customers call repeatedly asking for updates, pulling technicians away from active repair bays.',
        after: 'Proactive milestone text messages keep customers informed as vehicles move through service stages.'
      },
      {
        before: 'Weekend and evening service appointment inquiries go to voicemail and callers look for other shops.',
        after: 'Service drop-off slots are booked 24/7, keeping morning repair bays operating at full capacity.'
      },
      {
        before: 'Reviewing paper inspection sheets and calling customers for repair authorizations takes hours.',
        after: 'Customers receive digital inspection summaries and approve additional work quickly on their phones.'
      }
    ]
  },

  'it-services': {
    heroHeadline: 'Tier-1 Support Triage & Client Ticket Automation for MSPs',
    heroSubhead: 'Categorize incoming support requests, automate password reset and access workflows, and escalate critical outages to on-call engineers.',
    heroAlign: 'left',
    challengeHeadline: 'Operational bottlenecks that consume managed service provider bandwidth',
    challenges: [
      {
        title: 'Senior engineers drowning in Tier-1 tickets',
        desc: 'High-salary systems engineers spend valuable hours handling routine password resets, basic access requests, and recurring setup questions.'
      },
      {
        title: 'Tickets submitted without necessary diagnostic context',
        desc: 'Users send vague support emails like "the network is slow", requiring technicians to spend hours asking follow-up questions before troubleshooting can begin.'
      },
      {
        title: 'Off-hours outage escalation gaps',
        desc: 'Critical client server or network alerts occurring over weekends risk exceeding SLA response commitments if email notifications are overlooked.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for IT and managed service providers',
    deliverables: [
      {
        title: 'Autonomous Tier-1 support and diagnostic assistant',
        desc: 'Gathers device names, error codes, and screenshots conversationally. Gathers complete diagnostic context before generating a pre-formatted ticket for the helpdesk.',
        compatibility: 'Connects with your existing PSA software, ticketing tools, and team communication channels.'
      },
      {
        title: 'SOP and runbook knowledge assistant',
        desc: 'Allows technicians to query client-specific network documentation, IP tables, and configuration runbooks in natural language with verified citations.',
        compatibility: 'Fits into your existing documentation platforms and internal knowledge bases securely.'
      },
      {
        title: 'SLA-gated critical outage escalation',
        desc: 'Monitors incoming priority alert webhooks and support calls, verifying outage criteria and alerting the on-call engineer via phone and SMS when SLAs are at risk.',
        compatibility: 'Works with your current on-call schedules and alert systems without requiring new software.'
      }
    ],
    valueHeadline: 'What changes for your MSP',
    beforeAfter: [
      {
        before: 'Senior engineers lose hours each day handling repetitive Tier-1 questions and password resets.',
        after: 'Common requests are handled automatically, freeing engineers for billable project work.'
      },
      {
        before: 'Support tickets arrive missing basic device details, operating system versions, and error codes.',
        after: 'Every ticket arrives pre-formatted with full diagnostic context ready for immediate troubleshooting.'
      },
      {
        before: 'Weekend outage alerts risk sitting unacknowledged in general email queues.',
        after: 'Critical SLA-impacting incidents trigger immediate escalation to on-call technicians.'
      },
      {
        before: 'Technicians spend time searching through multiple documentation portals to find client IP schemes.',
        after: 'Verified network runbook details are retrieved in seconds directly within team chat.'
      }
    ]
  },

  'ecommerce-logistics': {
    heroHeadline: 'Order Tracking & Fulfillment Exception Automation',
    heroSubhead: 'Automate "Where is my order?" inquiries, streamline returns processing, and coordinate shipping exception alerts across multiple warehouses.',
    heroAlign: 'left',
    challengeHeadline: 'Daily operational bottlenecks that burden growing e-commerce brands',
    challenges: [
      {
        title: 'Repetitive order status inquiries',
        desc: 'Support inboxes are overwhelmed with routine order status and package tracking questions, slowing down urgent customer inquiries.'
      },
      {
        title: 'High return and exchange processing friction',
        desc: 'Customers seeking size exchanges or return labels email back and forth with staff, creating administrative overhead and return delays.'
      },
      {
        title: 'Delayed carrier exception resolution',
        desc: 'Delivery exceptions and incorrect addresses are identified only after packages are returned to the warehouse, leading to frustrated buyers and re-shipping costs.'
      }
    ],
    deliverHeadline: 'Practical automation systems engineered for online retail',
    deliverables: [
      {
        title: '24/7 order tracking and status assistant',
        desc: 'Provides instant tracking updates, carrier delivery estimates, and address clarifications across chat, email, and messaging without manual staff intervention.',
        compatibility: 'Connects with your existing e-commerce storefront, shipping carriers, and helpdesk tools.'
      },
      {
        title: 'Automated returns and exchange processing',
        desc: 'Guides customers through return reasons, verifies policy eligibility, and generates shipping labels or store credits automatically.',
        compatibility: 'Fits into your existing inventory management and order platforms via standard APIs.'
      },
      {
        title: 'Proactive shipping exception and alert pipeline',
        desc: 'Detects carrier delivery delays or address discrepancies and alerts customers proactively with resolution options before packages bounce.',
        compatibility: 'Works with your current warehouse and customer messaging systems without platform changes.'
      }
    ],
    valueHeadline: 'What changes for your e-commerce operations',
    beforeAfter: [
      {
        before: 'Customer support agents spend most of their day answering repetitive order tracking questions.',
        after: 'Order tracking queries are answered automatically, freeing agents to handle complex customer issues.'
      },
      {
        before: 'Returns and exchange requests require multiple emails to issue return labels and verify items.',
        after: 'Customers initiate and receive return labels self-service in seconds within store policy rules.'
      },
      {
        before: 'Shipping exceptions go unnoticed until upset customers reach out to inquire about late packages.',
        after: 'Proactive tracking updates notify customers of carrier delays before they have to ask.'
      },
      {
        before: 'Peak holiday volume creates massive support backlogs and slow customer response times.',
        after: 'Influxes of seasonal questions are absorbed automatically without needing temporary customer service hires.'
      }
    ]
  }
};

export default function IndustryDetailPage({ industryId }) {
  const { currentPath } = useRouter();
  const slug = industryId || currentPath.replace(/^\/industries\//, '').replace(/\/$/, '') || 'legal';
  const pageRef = useRef(null);

  const industryMeta = INDUSTRIES_DATA.find((item) => item.id === slug) || INDUSTRIES_DATA[0];
  const config = INDUSTRY_DETAILS[slug] || INDUSTRY_DETAILS.legal;

  usePageMetadata({
    title: `${industryMeta.name} — AI & Automation Systems | Hutomate`,
    description: config.heroSubhead,
    path: `/industries/${slug}`
  });

  useScrollReveal();

  useGsapContext(pageRef, (context, isReducedMotion) => {
    if (isReducedMotion) {
      gsap.set('.ind-detail-hero-content > *', { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.ind-detail-breadcrumb',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4 }
    )
      .fromTo(
        '.ind-detail-hero-headline',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.65 },
        '-=0.25'
      )
      .fromTo(
        '.ind-detail-hero-subhead',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      )
      .fromTo(
        '.ind-detail-hero-actions',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      );
  }, [slug]);

  return (
    <div className="ind-detail-page" ref={pageRef}>
      {/* =========================================================================
          SECTION 01: HERO — FULL-COVER PHOTOGRAPHY WITH METICULOUS OVERLAY
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
          SECTION 02: THE OPERATIONAL CHALLENGE
          Three horizontal editorial rows with thin dividers and clear typography
          ========================================================================= */}
      <section className="ind-detail-challenge-section" aria-label="The Operational Challenge">
        <div className="container">
          <div className="ind-detail-section-header reveal-on-scroll">
            <span className="ind-detail-kicker">THE OPERATIONAL CHALLENGE</span>
            <h2 className="ind-detail-heading">
              {config.challengeHeadline}
            </h2>
          </div>

          <div className="ind-challenge-editorial-list reveal-on-scroll">
            {config.challenges.map((ch, idx) => (
              <div key={idx} className="ind-challenge-row">
                <span className="ind-challenge-num">0{idx + 1}</span>
                <h3 className="ind-challenge-title">{ch.title}</h3>
                <p className="ind-challenge-desc">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: WHAT WE DELIVER
          Three vertically stacked, fully visible service rows (open by default)
          with natural software compatibility messaging
          ========================================================================= */}
      <section className="ind-detail-deliver-section" aria-label="What We Deliver">
        <div className="container">
          <div className="ind-detail-section-header reveal-on-scroll">
            <span className="ind-detail-kicker">WHAT WE DELIVER</span>
            <h2 className="ind-detail-heading">
              {config.deliverHeadline}
            </h2>
          </div>

          <div className="ind-deliver-editorial-list reveal-on-scroll">
            {config.deliverables.map((item, idx) => (
              <div key={idx} className="ind-deliver-row">
                <div className="ind-deliver-left">
                  <span className="ind-deliver-num">0{idx + 1}</span>
                  <h3 className="ind-deliver-title">{item.title}</h3>
                </div>
                <div className="ind-deliver-body">
                  <p className="ind-deliver-desc">{item.desc}</p>
                  <p className="ind-deliver-compatibility">
                    <span className="ind-compat-label">Software compatibility: </span>
                    {item.compatibility}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: PRACTICAL BUSINESS VALUE
          Simple two-column Before / After comparison with aligned points
          ========================================================================= */}
      <section className="ind-detail-value-section" aria-label="Practical Business Value">
        <div className="container">
          <div className="ind-detail-section-header reveal-on-scroll">
            <span className="ind-detail-kicker">PRACTICAL BUSINESS VALUE</span>
            <h2 className="ind-detail-heading">
              {config.valueHeadline}
            </h2>
          </div>

          <div className="ind-comparison-table reveal-on-scroll">
            <div className="ind-comparison-headers">
              <div className="ind-comp-col-header ind-comp-before-head">Before</div>
              <div className="ind-comp-col-header ind-comp-after-head">After</div>
            </div>

            <div className="ind-comparison-rows">
              {config.beforeAfter.map((item, idx) => (
                <div key={idx} className="ind-comparison-row">
                  <div className="ind-comp-cell ind-comp-before">
                    <span className="ind-comp-mobile-tag" aria-hidden="true">Before</span>
                    <p className="ind-comp-text">{item.before}</p>
                  </div>
                  <div className="ind-comp-cell ind-comp-after">
                    <span className="ind-comp-mobile-tag" aria-hidden="true">After</span>
                    <p className="ind-comp-text">{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
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
              Let&apos;s build a smarter way to run your {industryMeta.name.toLowerCase()} operations.
            </h2>
            <p className="ind-detail-final-desc">
              Share your current workflow and software tools with our engineering team. We&apos;ll evaluate where intelligent automation can eliminate manual friction and drive immediate efficiency.
            </p>
            <div className="ind-detail-final-actions">
              <Button variant="primary" size="lg" arrow href="/start-project">
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
