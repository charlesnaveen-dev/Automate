import React from 'react';
import { MessageSquare, UserCheck, Calendar, RefreshCw, GitMerge, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import './UseCasesPreviewSection.css';

const PREVIEW_USE_CASES = [
  {
    id: 'enquiry-handling',
    category: 'Inbound & Voice',
    title: 'AI-Powered Customer Enquiry Handling',
    problem: 'Frontline staff overwhelmed by repetitive inquiries across email, web forms, and chat channels.',
    solution: 'Autonomous intent classification extracts key entities and answers verified policy queries or escalates complex tickets.',
    impact: 'Sub-minute initial response times without adding support headcount.',
    icon: MessageSquare,
  },
  {
    id: 'lead-qualification',
    category: 'Sales & Qualification',
    title: 'Automated Lead Qualification',
    problem: 'Sales teams spend valuable hours reviewing unqualified inquiries that fail operational criteria.',
    solution: 'Intelligent multi-step questionnaire evaluates budget, timeline, and requirements before routing to account executives.',
    impact: 'Qualified leads receive instant prioritization; sales reps focus only on high-intent deals.',
    icon: UserCheck,
  },
  {
    id: 'appointment-scheduling',
    category: 'Inbound & Voice',
    title: '24/7 Voice & Chat Appointment Scheduling',
    problem: 'Prospective clients calling after-hours or on weekends encounter voicemail and book with competitors.',
    solution: 'Conversational voice AI answers calls instantly, negotiates calendar openings, and confirms bookings directly in the calendar.',
    impact: 'Captures high-value appointment bookings 24/7/365 with zero hold time.',
    icon: Calendar,
  },
  {
    id: 'crm-updates',
    category: 'Operations & Sync',
    title: 'Intelligent CRM & Pipeline Updates',
    problem: 'Account updates, call notes, and status changes are inconsistently logged across sales and ops tools.',
    solution: 'Event-driven webhooks parse call transcripts and email threads to update deal stages and notify account owners.',
    impact: 'Complete CRM data hygiene without manual data entry from sales reps.',
    icon: RefreshCw,
  },
  {
    id: 'connected-workflows',
    category: 'Operations & Sync',
    title: 'Connected Business Workflows',
    problem: 'Invoices, onboarding documents, and client requests require manual copy-pasting across disparate SaaS platforms.',
    solution: 'Multi-tool pipeline syncs data between CRM, accounting software, Google Sheets, and team Slack channels.',
    impact: 'Zero data silos, faster project onboarding, and eliminated human transcription errors.',
    icon: GitMerge,
  },
  {
    id: 'knowledge-assistance',
    category: 'Operations & Sync',
    title: 'Internal Knowledge & SOP Assistance',
    problem: 'Team members waste hours hunting through dense internal documentation, PDF manuals, and drive folders.',
    solution: 'Grounded retrieval assistant queries verified company documentation to deliver precise, citation-backed answers.',
    impact: 'Empowers employees to find answers to operational policies in seconds.',
    icon: BookOpen,
  },
];

export default function UseCasesPreviewSection() {
  return (
    <section className="uc-preview-section" id="use-cases" aria-label="Use Cases Preview">
      <div className="container">
        {/* Section Header */}
        <div className="uc-preview-header reveal-on-scroll">
          <div className="uc-preview-intro">
            <span className="uc-preview-eyebrow">PRACTICAL IMPLEMENTATIONS</span>
            <h2 className="uc-preview-headline">
              Real business challenges.{' '}
              <span className="uc-headline-accent">Intelligent solutions.</span>
            </h2>
          </div>
          <div className="uc-preview-desc">
            <p className="uc-preview-body">
              Explore concrete examples of how our intelligent agents, voice systems, and automated pipelines turn everyday operational friction into reliable, scalable speed.
            </p>
            <div className="uc-header-cta">
              <Button variant="secondary" size="md" arrow href="/use-cases">
                View All Use Cases
              </Button>
            </div>
          </div>
        </div>

        {/* 6 Editorial Use Case Cards Grid */}
        <div className="uc-cards-grid">
          {PREVIEW_USE_CASES.map((uc, idx) => {
            const IconComp = uc.icon;
            return (
              <div
                key={uc.id}
                className={`uc-card card-hover-lift reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
              >
                <div className="uc-card-top">
                  <span className="uc-card-category">{uc.category}</span>
                  <div className="uc-card-icon-box" aria-hidden="true">
                    <IconComp size={18} />
                  </div>
                </div>

                <h3 className="uc-card-title">{uc.title}</h3>

                <div className="uc-card-block">
                  <span className="uc-block-label">Operational Challenge</span>
                  <p className="uc-block-text">{uc.problem}</p>
                </div>

                <div className="uc-card-block">
                  <span className="uc-block-label">Intelligent Automation</span>
                  <p className="uc-block-text">{uc.solution}</p>
                </div>

                <div className="uc-card-footer">
                  <div className="uc-impact-badge">
                    <span className="impact-dot" aria-hidden="true" />
                    <span className="impact-text">{uc.impact}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
