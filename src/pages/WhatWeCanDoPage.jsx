import { useState, useRef } from 'react';
import {
  Box, Container, Typography, Button, Stack, Chip, Grid,
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

/* ── Animated SVG Icons ── */
const AnimatedIcon = ({ type, color, size = 28 }) => {
  const c = color || '#097C87';
  const icons = {
    scheduling: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="20" rx="3" stroke={c} strokeWidth="1.8" fill="none">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </rect>
        <line x1="3" y1="11" x2="25" y2="11" stroke={c} strokeWidth="1.5" />
        <line x1="9" y1="5" x2="9" y2="2" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="19" y1="5" x2="19" y2="2" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="17" r="1.5" fill={c}>
          <animate attributeName="r" values="1.5;2.2;1.5" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="18" cy="17" r="1.5" fill={c}>
          <animate attributeName="r" values="1.5;2.2;1.5" dur="2s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="14" cy="21" r="1.5" fill={c}>
          <animate attributeName="r" values="1.5;2.2;1.5" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    voice: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <path d="M14 3C11.2 3 9 5.2 9 8v5c0 2.8 2.2 5 5 5s5-2.2 5-5V8c0-2.8-2.2-5-5-5z" stroke={c} strokeWidth="1.8" fill="none" />
        <path d="M5 12v1c0 5 4 9 9 9s9-4 9-9v-1" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <line x1="14" y1="22" x2="14" y2="26" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="10" y1="26" x2="18" y2="26" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
        {/* Sound wave bars */}
        <line x1="2" y1="10" x2="2" y2="14" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
          <animate attributeName="y1" values="10;8;10" dur="1s" repeatCount="indefinite" />
          <animate attributeName="y2" values="14;16;14" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="26" y1="10" x2="26" y2="14" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
          <animate attributeName="y1" values="10;7;10" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="y2" values="14;17;14" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.2s" repeatCount="indefinite" />
        </line>
      </svg>
    ),
    referral: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <circle cx="8" cy="8" r="4" stroke={c} strokeWidth="1.8" fill="none" />
        <circle cx="20" cy="8" r="4" stroke={c} strokeWidth="1.8" fill="none" />
        <path d="M12 8h4" stroke={c} strokeWidth="1.8" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
        <polyline points="15,6 17,8 15,10" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </polyline>
        <path d="M3 22c0-4 3-7 7-7h8c4 0 7 3 7 7" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none">
          <animate attributeName="stroke-dashoffset" values="40;0" dur="2s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="40" dur="2s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    surgery: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <rect x="6" y="3" width="16" height="22" rx="3" stroke={c} strokeWidth="1.8" fill="none" />
        <line x1="6" y1="8" x2="22" y2="8" stroke={c} strokeWidth="1.5" />
        <line x1="14" y1="3" x2="14" y2="8" stroke={c} strokeWidth="1.5" />
        {/* Heartbeat line */}
        <polyline points="9,17 11,17 12,13 14,21 16,15 17,17 19,17" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="stroke-dashoffset" values="30;0" dur="2s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="30" dur="2s" repeatCount="indefinite" />
        </polyline>
        <circle cx="14" cy="5.5" r="1" fill={c}>
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    orders: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <rect x="4" y="2" width="20" height="24" rx="2" stroke={c} strokeWidth="1.8" fill="none" />
        <line x1="9" y1="9" x2="19" y2="9" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="9" y1="14" x2="16" y2="14" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="9" y1="19" x2="17" y2="19" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        {/* Animated checkmark */}
        <circle cx="21" cy="21" r="5" fill={c} opacity="0.15">
          <animate attributeName="r" values="4;5.5;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <polyline points="18.5,21 20.5,23 24,19" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="stroke-dashoffset" values="10;0" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="10" dur="1.5s" repeatCount="indefinite" />
        </polyline>
      </svg>
    ),
    emergency: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <polygon points="14,2 26,24 2,24" stroke={c} strokeWidth="1.8" strokeLinejoin="round" fill="none">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
        </polygon>
        <line x1="14" y1="10" x2="14" y2="17" stroke={c} strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
        </line>
        <circle cx="14" cy="20.5" r="1.2" fill={c}>
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    patient: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="5" stroke={c} strokeWidth="1.8" fill="none" />
        <path d="M4 25c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Pulse rings */}
        <circle cx="14" cy="9" r="7" stroke={c} strokeWidth="0.8" fill="none" opacity="0">
          <animate attributeName="r" values="7;12;7" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    insurance: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <path d="M14 2L4 7v6c0 7 4.3 13.5 10 15 5.7-1.5 10-8 10-15V7L14 2z" stroke={c} strokeWidth="1.8" fill="none">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </path>
        <polyline points="10,14 13,17 18,11" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="stroke-dashoffset" values="12;0" dur="2s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="12" dur="2s" repeatCount="indefinite" />
        </polyline>
      </svg>
    ),
    care: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <path d="M14 24s-9-5.5-9-12c0-3.3 2.7-6 6-6 1.8 0 3 1 3 1s1.2-1 3-1c3.3 0 6 2.7 6 6 0 6.5-9 12-9 12z" stroke={c} strokeWidth="1.8" fill="none">
          <animate attributeName="d" values="M14 24s-9-5.5-9-12c0-3.3 2.7-6 6-6 1.8 0 3 1 3 1s1.2-1 3-1c3.3 0 6 2.7 6 6 0 6.5-9 12-9 12z;M14 23s-8.5-5-8.5-11.5c0-3 2.5-5.5 5.5-5.5 1.6 0 3 1 3 1s1.4-1 3-1c3 0 5.5 2.5 5.5 5.5 0 6.5-8.5 11.5-8.5 11.5z;M14 24s-9-5.5-9-12c0-3.3 2.7-6 6-6 1.8 0 3 1 3 1s1.2-1 3-1c3.3 0 6 2.7 6 6 0 6.5-9 12-9 12z" dur="2s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    analytics: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <rect x="3" y="18" width="4" height="8" rx="1" fill={c} opacity="0.6">
          <animate attributeName="height" values="8;5;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="y" values="18;21;18" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="9" y="12" width="4" height="14" rx="1" fill={c} opacity="0.7">
          <animate attributeName="height" values="14;9;14" dur="2s" begin="0.3s" repeatCount="indefinite" />
          <animate attributeName="y" values="12;17;12" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="15" y="8" width="4" height="18" rx="1" fill={c} opacity="0.8">
          <animate attributeName="height" values="18;12;18" dur="2s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" values="8;14;8" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="21" y="4" width="4" height="22" rx="1" fill={c} opacity="0.9">
          <animate attributeName="height" values="22;16;22" dur="2s" begin="0.9s" repeatCount="indefinite" />
          <animate attributeName="y" values="4;10;4" dur="2s" begin="0.9s" repeatCount="indefinite" />
        </rect>
      </svg>
    ),
    sdoh: (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <circle cx="9" cy="10" r="4" stroke={c} strokeWidth="1.8" fill="none" />
        <circle cx="19" cy="10" r="4" stroke={c} strokeWidth="1.8" fill="none" />
        {/* Handshake arc */}
        <path d="M6 20c0-2.5 1.5-4.5 4-5h8c2.5.5 4 2.5 4 5" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M11 22c1 1.5 2 2 3 2s2-0.5 3-2" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none">
          <animate attributeName="d" values="M11 22c1 1.5 2 2 3 2s2-0.5 3-2;M11 23c1 1 2 1.5 3 1.5s2-0.5 3-1.5;M11 22c1 1.5 2 2 3 2s2-0.5 3-2" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Pulse of connection */}
        <circle cx="14" cy="10" r="2" fill={c} opacity="0">
          <animate attributeName="r" values="2;8;2" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  };
  return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: size, height: size }}>{icons[type]}</Box>;
};

const faqCategories = [
  {
    category: 'AI Scheduling & Resource Optimization',
    iconType: 'scheduling',
    description: 'Intelligent scheduling that understands clinical context, resource constraints, and patient preferences.',
    color: '#097C87',
    stat: '70%',
    statLabel: 'Less scheduler workload',
    faqs: [
      {
        q: 'Can Configural analyze historical appointments and EMR data to find scheduling gaps and recommend changes?',
        a: 'Yes. Our AI/ML-powered analytics platform comes prebuilt with every KPI to track practice efficiency. Pre-trained models detect inefficiencies — underutilized time slots, provider template mismatches, peak hour bottlenecks — and recommend specific changes: physician template adjustments, proactive resource constraint alerts, and optimal scheduling patterns. No configuration required.',
      },
      {
        q: 'How does AI-powered scheduling optimization work?',
        a: 'The AI analyzes historical data, patient preferences, provider availability, resource utilization, no-show patterns, travel times, appointment dependencies, and operational constraints to suggest optimal scheduling. It prevents conflicts, maximizes efficiency, and optimizes patient satisfaction — all while respecting clinical protocols and resource constraints.',
      },
      {
        q: 'Can it optimize infusion chair scheduling and nursing ratios?',
        a: 'Yes. The AI Infusion Room Manager creates dynamic chair templates that adapt to treatment durations, nursing ratios, and patient acuity in real-time. It staggers start times to balance nursing workload, accounts for drug prep time, and manages chair turnover — resulting in 30% more patients per chair per day without increasing staff.',
      },
      {
        q: 'Does Configural handle room and equipment conflicts?',
        a: 'Absolutely. The AI Resource Optimizer tracks every exam room, procedure suite, imaging machine, and shared resource in real-time. When conflicts arise — a provider running late, a machine going down, a room double-booked — it instantly reroutes patients and resources. It also forecasts utilization patterns to prevent conflicts before they happen.',
      },
      {
        q: 'Can it manage staff scheduling across multiple locations?',
        a: 'Yes. The AI Staff Coordinator handles intelligent staff scheduling across all locations, optimizing shifts based on patient volume forecasts, credential requirements, and staff preferences. It handles swap requests, PTO coverage, and credential-aware task assignment — delivering 4x coordinator throughput.',
      },
      {
        q: 'How does the waitlist management work?',
        a: 'The AI Waitlist Manager monitors cancellations in real-time, scores waitlisted patients by clinical urgency, appointment fit, and travel distance, then fills open slots via automated outreach — all within minutes. It even predicts no-shows 48 hours in advance and pre-identifies backup patients. Result: 92% same-day cancellation fill rate.',
      },
      {
        q: 'Can it predict no-shows and proactively recover slots?',
        a: 'Yes. The AI behavior model analyzes patient history, transportation issues, and appointment patterns to flag patients with high no-show probability. It triggers proactive outreach 48 hours before the appointment and pre-identifies a backup patient from the waitlist. If the patient no-shows, the backup arrives and the slot is recovered with zero idle time.',
      },
      {
        q: 'How does Configural handle multi-day treatment protocols like physical therapy, dialysis, or wound care?',
        a: 'The AI understands recurring treatment protocols across all specialties. For a 12-week physical therapy plan (3x/week), it generates all 36 appointments upfront — respecting the patient\'s preferred times, therapist continuity, and equipment needs. For dialysis (3x/week, 4-hour sessions), it locks in consistent chair assignments and nursing staff. If a session is missed, the AI automatically extends the plan and adjusts downstream appointments. Same logic applies to wound care series, cardiac rehab, speech therapy, and any multi-visit protocol.',
      },
      {
        q: 'Can it coordinate multi-specialty treatment plans — like cardiology + pulmonology + physical therapy?',
        a: 'Yes. When a patient needs coordinated care across multiple specialties, the AI maps the full dependency chain. For example: a cardiac surgery patient needs a pre-op pulmonary function test → cardiology clearance → surgery date → post-op PT series. The AI sequences everything, respects timing gaps (e.g., PFT results needed 48hrs before clearance), books across different providers and locations, and sends the patient one consolidated schedule. If any appointment shifts, all downstream appointments auto-adjust.',
      },
      {
        q: 'Can Configural handle pre-procedure requirements like labs, imaging, and medication holds?',
        a: 'Yes. When any procedure is scheduled — a colonoscopy, a joint injection, a cardiac catheterization — the AI automatically generates the pre-procedure checklist: fasting requirements, medication holds (blood thinners 5 days before, metformin 48hrs before), required labs (CBC, metabolic panel), and clearance visits. It schedules labs with correct lead times, sends patients personalized prep instructions, and flags incomplete requirements 72 hours before the procedure. No procedure happens without everything in place.',
      },
      {
        q: 'Does it manage procedure room and equipment scheduling for different duration appointments?',
        a: 'Absolutely. The AI maintains real-time awareness of every procedure room, exam room, and shared equipment — each with different capabilities and turnaround times. A 15-minute follow-up, a 45-minute ultrasound, and a 2-hour infusion all get optimally placed. It accounts for room setup/teardown time, equipment sterilization gaps, and staff transitions. When a procedure runs long, it dynamically adjusts subsequent bookings and notifies affected patients.',
      },
      {
        q: 'Can it handle intelligent appointment rescheduling with dependency awareness?',
        a: 'Yes. When a patient needs to reschedule, the AI doesn\'t just move one appointment — it understands the full chain. Rescheduling a pre-op consult means the surgery date may shift, which means post-op follow-ups shift, which means PT sessions shift. The AI calculates the entire cascade, presents the patient with new options that keep all dependencies intact, and rebooks the full chain in one interaction. No orphaned appointments, no broken sequences.',
      },
      {
        q: 'How does Configural handle complex chemotherapy and infusion scheduling?',
        a: 'This is one of our flagship capabilities for oncology practices. The AI parses multi-cycle protocols (R-CHOP, FOLFOX, AC-T), calculates exact cycle dates with rest periods, resolves the full appointment chain per cycle (labs → consult → pharmacy prep → infusion), allocates chairs by duration and acuity, and staggers nursing assignments to prevent overload. It manages pre-medications, hydration time, observation periods, and post-treatment monitoring — all while optimizing chair turnover so practices can treat 30% more patients per day.',
      },
      {
        q: 'Can it schedule around low patient count days to maximize efficiency?',
        a: 'Yes. The AI analyzes historical volume patterns and identifies low-census days — Fridays, holiday weeks, summer months. It proactively consolidates appointments, suggests provider template changes (half-day instead of full-day), and fills gaps by pulling forward patients from overbooked days. For infusion centers, it can consolidate chair assignments to free up nursing staff for other duties. The result: consistent daily volume, predictable staffing, and no wasted resources.',
      },
      {
        q: 'Can Configural operate with minimal or no human schedulers?',
        a: 'Yes. For simple appointments (follow-ups, labs, imaging, routine check-ups), the AI handles the entire workflow end-to-end: patient calls in or a provider places an order → the AI offers available slots → the patient confirms → appointment is booked, confirmation sent, prep instructions delivered. No human touches it. For complex cases (multi-step procedures, surgery coordination), the AI builds a complete scheduling plan and presents it to a scheduler for one-click approval. Practices using Configural reduce scheduler workload by 70% or more.',
      },
      {
        q: 'How does it handle post-treatment and post-procedure follow-up scheduling?',
        a: 'The AI automatically generates follow-up schedules based on the procedure type and clinical guidelines. After a knee replacement: 2-week wound check → 6-week X-ray + ortho visit → 3-month functional assessment → 1-year follow-up. After chemotherapy completion: surveillance labs and imaging per NCCN guidelines. After a cardiac stent: medication check at 1 month → stress test at 3 months → annual cardiology follow-up. Every follow-up is pre-scheduled, the patient is reminded, and overdue follow-ups are flagged automatically.',
      },
    ],
  },
  {
    category: 'AI Voice Agents & Patient Communication',
    iconType: 'voice',
    description: 'Voice-powered AI that makes and receives calls, schedules appointments, and communicates naturally.',
    color: '#FCA47C',
    stat: '40%',
    statLabel: 'Reduced call volume',
    faqs: [
      {
        q: 'Does Configural have AI voice agents that can make and receive phone calls?',
        a: 'Yes. Configural is the only platform with voice-powered AI agents that make and receive calls on behalf of your practice. The AI voice agent handles appointment confirmations, rescheduling, pre-visit prep calls, post-treatment check-ins, and basic triage — speaking naturally and understanding clinical context like a trained coordinator. It reduces call center volume by 40%+.',
      },
      {
        q: 'Can the AI voice agent schedule appointments over the phone?',
        a: 'Yes. When a patient calls the scheduling line, the AI voice agent identifies the patient (name + DOB verification), pulls their full context (history, protocol, preferences), and offers available slots conversationally: "I have Tuesday at 9am or Thursday at 2pm..." The patient confirms, the appointment is booked in real-time, and a confirmation is sent via SMS — all without a human scheduler.',
      },
      {
        q: 'How does the AI know when to handle something vs. escalate to a human?',
        a: 'This is a key intelligence feature. For simple requests — rescheduling a PET scan, booking a lab, confirming a follow-up — the AI handles it end-to-end with no human involvement. But for complex scenarios — rescheduling a chemo infusion with pharmacy prep, chair allocation, and linked appointments — the AI automatically creates a task for your scheduling team with full context and urgency level. The patient is told: "I\'ll have our scheduling team call you back within 2 hours."',
      },
      {
        q: 'What patient communication channels does Configural support?',
        a: 'Multi-channel communication including AI voice calls, SMS, email, patient portal messaging, and automated sequences. Appointment reminders are sent at 7 days, 3 days, and 1 day before — with personalized prep instructions (fasting, meds to hold, what to bring). For multi-appointment days, patients receive one consolidated guide covering all appointments, locations, and prep steps.',
      },
      {
        q: 'How does it handle patients who don\'t respond?',
        a: 'Configural uses intelligent escalation. If a patient doesn\'t respond to SMS, it tries a voice call. If voice doesn\'t connect, it escalates to portal and then to staff for manual outreach — with full context so the staff member knows exactly what\'s been tried. No patient falls through the cracks.',
      },
    ],
  },
  {
    category: 'Referral Management & New Patients',
    iconType: 'referral',
    description: 'From fax to first visit — automated referral processing, matching, and tracking.',
    color: '#23CED9',
    stat: '~0%',
    statLabel: 'Referral leakage',
    faqs: [
      {
        q: 'How does Configural process incoming referrals?',
        a: 'The AI Referral Coordinator uses OCR to read faxes, FHIR messages, and electronic referrals — extracting diagnosis, referring physician, insurance, and urgency. It creates or matches patient records, then matches the patient to the best physician based on specialty, availability, location, and insurance. Multiple match options are ranked and presented to the scheduler for confirmation.',
      },
      {
        q: 'Can it handle second opinion requests?',
        a: 'Yes. The AI distinguishes between a second opinion and a transfer of care. For second opinions, it finds providers who handle second opinions for the specific diagnosis, ensures the selected provider is different from the original physician, initiates external records retrieval in parallel, and books with a second opinion-specific visit type. The referring physician is notified automatically.',
      },
      {
        q: 'Can it reduce referral leakage?',
        a: 'Yes. Configural tracks every referral from the moment it arrives. If a referral stalls — patient doesn\'t schedule, insurance isn\'t verified, authorization is pending — the system escalates automatically. Practices see near-zero referral leakage compared to the industry average of 20-30%. Referral source tracking also powers network retention analytics.',
      },
      {
        q: 'Does it handle referrals from multiple sources and formats?',
        a: 'Yes. Whether referrals come via fax, HL7 messages, FHIR APIs, e-referral portals, or even handwritten notes — Configural\'s AI reads, interprets, and processes them all into a unified workflow. No manual data entry needed.',
      },
    ],
  },
  {
    category: 'Surgery & Complex Procedure Coordination',
    iconType: 'surgery',
    description: 'Cross-practice surgery scheduling, document tracking, and multi-system coordination.',
    color: '#097C87',
    stat: '20+',
    statLabel: 'EMR integrations',
    faqs: [
      {
        q: 'Can Configural coordinate surgery across multiple practices and systems?',
        a: 'Yes. This is one of our most powerful capabilities. For example, for a breast surgery case, the AI calls the radiology practice to book a pre-surgery seed/wire localization, calls the hospital OR scheduling to reserve the operating room and anesthesia team, and calls the plastic surgeon\'s office to book a post-surgery reconstructive consult. It sequences everything correctly: pre-injection → surgery → follow-up. The patient receives one consolidated prep guide covering all 3 appointments at 3 locations.',
      },
      {
        q: 'How does it handle complex chemotherapy orders?',
        a: 'When a physician places a complex order like R-CHOP (6 cycles, 21-day intervals), the AI parses the full protocol, generates the complete appointment chain (labs, consult, infusion), resolves dependencies (labs ≥1hr before consult, consult before chemo), calculates resource requirements (chemo chair duration, certified nurse, pharmacy prep), and pre-allocates future cycles. This scheduling plan goes to the scheduler for review and approval — only after approval does the AI contact the patient.',
      },
      {
        q: 'What about pre-surgical documentation — does it track missing records?',
        a: 'Yes. When surgery is scheduled, the AI generates a required document checklist (surgical clearance, imaging, labs, consent, pre-auth), checks which docs exist, and sends automated FHIR requests to relevant practices for missing items. A dashboard shows green/yellow/red status per document. 7 days before surgery, everything is either all-clear or escalated. On surgery day, the surgeon has a complete packet — no delays.',
      },
      {
        q: 'Can the AI coordinate across different EMR systems?',
        a: 'Yes. Configural coordinates across 20+ EMR systems via HL7, FHIR R4, and direct integrations with Epic, Cerner, Athena, and others. For inter-practice communication, the AI uses voice calls — just like a human scheduler would — when electronic channels aren\'t available. If a practice can\'t be reached, the AI creates a task for your scheduler with full context and urgency level.',
      },
    ],
  },
  {
    category: 'Physician Orders & Treatment Protocols',
    iconType: 'orders',
    description: 'Automated order processing — from simple labs to complex multi-step treatment chains.',
    color: '#FCA47C',
    stat: '0',
    statLabel: 'Scheduler touches for simple orders',
    faqs: [
      {
        q: 'How does Configural handle physician orders from the EMR?',
        a: 'The AI reads orders directly from the EMR and classifies them as SIMPLE (single appointment, standard resources — like labs, imaging, follow-ups) or COMPLEX (chemo, infusion, multi-appointment chains, pharmacy prep). Simple orders are auto-scheduled by the AI agent with zero scheduler involvement. Complex orders generate a full scheduling plan that goes to the scheduler for review before any patient contact.',
      },
      {
        q: 'Can it auto-schedule simple orders without any human involvement?',
        a: 'Yes. For simple orders — follow-up visits, lab work, imaging, referral consults — the AI agent calls the patient directly, offers available slots, books the appointment, sends confirmation and prep instructions, and updates the order status in the EMR. No scheduler touches it. This frees schedulers to focus on complex cases that actually need them.',
      },
      {
        q: 'How does the treatment chain work for complex protocols?',
        a: 'For a Docetaxel Cycle 1 order, the AI identifies the full chain: pre-treatment labs, physician consult, infusion appointment, and education session. It resolves timing dependencies (labs ≥1hr before consult), calculates resource needs (chemo chair for 2hrs, certified nurse, pharmacy prep), and generates a scheduling plan. The scheduler reviews and approves. Then the AI contacts the patient and books the entire chain in one call.',
      },
    ],
  },
  {
    category: 'Emergency Scenarios & Disruption Management',
    iconType: 'emergency',
    description: 'Automatic cascade rescheduling for physician absences, equipment failures, and closures.',
    color: '#23CED9',
    stat: 'Minutes',
    statLabel: 'Not hours to reschedule',
    faqs: [
      {
        q: 'What happens when a physician has an emergency day off?',
        a: 'Configural automatically detects the disruption and coordinates every schedule change with affected patients. It rebooks appointments by priority and clinical urgency, notifies patients via SMS, voice, and portal, reallocates resources across remaining providers, and adjusts downstream dependencies like lab orders and imaging. Your staff doesn\'t lift a finger.',
      },
      {
        q: 'How does it handle same-day cancellations?',
        a: 'When a patient cancels (e.g., a 2-hour chemo slot for tomorrow), the AI immediately detects the open slot, queries the waitlist for matching patients (slot type, duration, chair type), ranks candidates by treatment urgency, proximity, and preference, and contacts the top 3 candidates via automated phone/SMS outreach. The first patient to confirm gets the slot — resources are re-assigned and the scheduler is notified of the successful backfill.',
      },
      {
        q: 'Can it handle equipment breakdowns or room closures?',
        a: 'Yes. When a resource goes offline — an MRI machine down for maintenance, a procedure room closed — the AI immediately identifies all affected appointments, finds alternative resources or time slots, and re-routes patients. It handles the cascade of changes across linked appointments, notifies all affected patients, and updates the resource schedule. Schedulers see a summary of all changes made.',
      },
      {
        q: 'What about weather emergencies or practice closures?',
        a: 'Configural can execute mass rescheduling when a practice closure occurs. The AI prioritizes patients by clinical urgency, contacts them through their preferred channels, and rebooks across available dates — handling hundreds of appointments in minutes. Once the practice reopens, it optimizes the catch-up schedule to minimize wait times.',
      },
    ],
  },
  {
    category: 'Patient 360° View & Clinical Intelligence',
    iconType: 'patient',
    description: 'Complete patient context — history, meds, labs, imaging, care team — in one unified view.',
    color: '#097C87',
    stat: '360°',
    statLabel: 'Patient visibility',
    faqs: [
      {
        q: 'What patient information does Configural provide?',
        a: 'A complete Patient 360° view: medical history, current medications with interaction checking, allergies with severity indicators, lab results with trending, imaging studies, treatment plans, appointment history, insurance information, care team assignments, emergency contacts, family history, and preventive care tracking — all in a unified interface.',
      },
      {
        q: 'Does it support medication management and safety alerts?',
        a: 'Yes. Current medication lists with dosages, drug interaction checking, allergy alerts, prescription history, medication adherence tracking, refill management, pharmacy integration, medication reconciliation, and automated safety alerts for contraindications.',
      },
      {
        q: 'How does care coordination work across the team?',
        a: 'Care team member assignments (primary physician, specialists, nurses, therapists), communication threads between providers, shared care plans, referral tracking, collaborative notes, care transitions, and discharge planning — all with role-based access controls. Every agent shares a unified patient context, so when one workflow changes, every dependent workflow adapts instantly.',
      },
    ],
  },
  {
    category: 'Insurance, Prior Auth & Billing',
    iconType: 'insurance',
    description: 'Automated eligibility checks, prior auth submissions, and denial management.',
    color: '#FCA47C',
    stat: '99%',
    statLabel: 'Clean claim rate',
    faqs: [
      {
        q: 'Can Configural automate prior authorizations?',
        a: 'Yes. The AI Prior Auth Agent handles the entire cycle — automated submission with clinical evidence packaging, real-time status tracking, and automatic denial appeal generation. No more auth-related appointment cancellations.',
      },
      {
        q: 'Does it verify insurance eligibility before appointments?',
        a: 'Yes. The AI Insurance Verifier runs pre-visit eligibility checks during the booking process — before the patient commits to a slot. It verifies benefits, coverage limits, and detects coverage gaps, preventing claim denials before they happen. Result: 99% clean claim rate.',
      },
      {
        q: 'How does it handle insurance changes or lapses?',
        a: 'Configural continuously monitors patient insurance status. When coverage changes, lapses, or new benefits become available, the system alerts your billing team, updates authorization requirements, and adjusts financial counseling workflows automatically.',
      },
    ],
  },
  {
    category: 'Active Care, Survivorship & Care Gaps',
    iconType: 'care',
    description: 'Guideline-based surveillance, care gap detection, and chronic care management at scale.',
    color: '#23CED9',
    stat: '95%',
    statLabel: 'Care gap closure rate',
    faqs: [
      {
        q: 'Can Configural handle the entire referral-to-survivorship journey without manual intervention?',
        a: 'Absolutely. From the moment a referral fax arrives, Configural reads it via OCR, matches the patient, verifies insurance, schedules the appointment, sends pre-visit prep, monitors active care with real-time symptom tracking, automates post-treatment follow-ups, and manages long-term survivorship surveillance per NCCN/ASCO guidelines — all autonomously.',
      },
      {
        q: 'Does it support CCM and PCM billing?',
        a: 'Yes. Configural automates Chronic Care Management (CCM) and Principal Care Management (PCM) programs at scale — tracking time, documenting interactions, and ensuring compliance. Practices capture up to $523 per patient per month in CCM/PCM revenue that was previously left on the table.',
      },
      {
        q: 'How does survivorship surveillance work?',
        a: 'The AI Survivorship Agent maintains guideline-based surveillance schedules — imaging, labs, symptom check-ins, and wellness assessments per NCCN/ASCO protocols. It automatically schedules follow-ups, sends reminders, and flags overdue patients. Zero patients are lost to follow-up.',
      },
      {
        q: 'Can it track care gaps across the patient population?',
        a: 'Yes. The AI continuously scans your entire patient population against evidence-based guidelines to identify care gaps — missed screenings, overdue labs, lapsed follow-ups, incomplete treatment courses. It achieves a 95% care gap closure rate by automatically generating outreach and scheduling interventions.',
      },
    ],
  },
  {
    category: 'Analytics, Dashboards & Practice Intelligence',
    iconType: 'analytics',
    description: 'Pre-built KPIs, predictive models, and real-time dashboards for every metric that matters.',
    color: '#097C87',
    stat: 'Real-time',
    statLabel: 'Practice visibility',
    faqs: [
      {
        q: 'What kind of analytics does Configural provide?',
        a: 'A comprehensive AI/ML analytics platform prebuilt with all KPIs — provider utilization, patient throughput, referral conversion, no-show patterns, revenue per slot, care gap rates, chair utilization, peak hour capacity, insurance authorization delays, and more. Pre-trained models identify trends, predict bottlenecks, and recommend operational changes automatically.',
      },
      {
        q: 'Can it predict patient volume and staffing needs?',
        a: 'Yes. Using historical data, seasonal patterns, referral pipeline, and external factors, Configural forecasts patient volume weeks in advance and recommends staffing levels, room allocations, and supply orders.',
      },
      {
        q: 'What does the Practice Overview Dashboard show?',
        a: 'Real-time tracking of appointments, active patients, chair utilization, new referrals, provider utilization, average wait times, automated calls, no-show rates, room utilization, and system alerts with severity levels. Multi-location comparison, trend sparklines, and actionable insights — all filterable by time period.',
      },
      {
        q: 'Can it provide task management for the scheduling team?',
        a: 'Yes. Tasks are organized by priority, department, due dates, and staff assignments. The AI creates tasks automatically from complex orders and escalations — each with full patient context, urgency level, and recommended actions. Staff see exactly what needs attention and why, with no manual triage needed.',
      },
    ],
  },
  {
    category: 'Social Determinants & Health Equity',
    iconType: 'sdoh',
    description: 'SDOH screening, community resource matching, and transportation barrier resolution.',
    color: '#FCA47C',
    stat: '100%',
    statLabel: 'SDOH screening rate',
    faqs: [
      {
        q: 'Can Configural screen for social determinants of health?',
        a: 'Yes. The AI SDOH Navigator automates screening using standardized Z-codes, matches patients to community resources for food, housing, and transportation, generates referrals to support services, and tracks health equity gaps — achieving 100% SDOH screening completion.',
      },
      {
        q: 'Does it help with transportation barriers?',
        a: 'Yes. When transportation is identified as a barrier, Configural coordinates ride services, adjusts appointment times to align with public transit schedules, offers telehealth alternatives, and factors transportation constraints into scheduling decisions. The AI agent even accounts for a patient\'s earliest available arrival time when offering slots.',
      },
    ],
  },
];

export default function WhatWeCanDoPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const categoryRefs = useRef({});

  const scrollToCategory = (idx) => {
    setActiveCategory(idx);
    categoryRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box>
      <SEO
        title="What Configural Can Do | AI Healthcare Automation"
        description="Discover everything Configural's AI platform can do — from intelligent scheduling and surgery coordination to AI voice agents, referral management, and practice analytics."
        keywords="healthcare AI capabilities, medical scheduling automation, referral management, patient engagement, care coordination, practice analytics, surgery scheduling, AI voice agent"
      />

      {/* HERO */}
      <Box
        sx={{
          background: 'linear-gradient(160deg, #021E22 0%, #043D43 30%, #065A62 60%, #097C87 100%)',
          color: '#FFFFFF',
          pt: { xs: 16, md: 22 },
          pb: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Box sx={{
            position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(252,164,124,0.1) 0%, transparent 70%)',
            top: '-15%', right: '-10%',
          }} />
          <Box sx={{
            position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(35,206,217,0.08) 0%, transparent 70%)',
            bottom: '-15%', left: '5%',
          }} />
        </Box>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography variant="overline" sx={{ color: '#FCA47C', mb: 1, display: 'block', letterSpacing: '0.2em' }}>
              Capabilities
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              Everything Configural Can Do
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(248,250,251,0.85)', maxWidth: 650, mx: 'auto', fontSize: '1.15rem', mb: 5 }}>
              From coordinating surgery across 3 different practices to predicting no-shows 48 hours in advance — our AI handles every stage of the patient journey and every operational challenge in between.
            </Typography>

            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/demo"
              sx={{
                background: '#F8FAFB',
                color: '#065A62',
                px: 5,
                py: 1.8,
                fontWeight: 700,
                '&:hover': { background: '#FFFFFF' },
              }}
            >
              Book a Demo
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* CATEGORY NAVIGATION STRIP */}
      <Box
        sx={{
          background: '#FFFFFF',
          borderBottom: '1px solid rgba(9,124,135,0.1)',
          py: 2.5,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            pb: 0.5,
            '&::-webkit-scrollbar': { height: 0 },
            scrollbarWidth: 'none',
          }}>
            {faqCategories.map((cat, idx) => (
              <Chip
                key={idx}
                icon={<AnimatedIcon type={cat.iconType} color={activeCategory === idx ? '#FFFFFF' : '#065A62'} size={18} />}
                label={cat.category}
                onClick={() => scrollToCategory(idx)}
                sx={{
                  flexShrink: 0,
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  py: 2.2,
                  px: 0.5,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeCategory === idx ? cat.color : 'rgba(9,124,135,0.06)',
                  color: activeCategory === idx ? '#FFFFFF' : '#065A62',
                  border: `1px solid ${activeCategory === idx ? cat.color : 'rgba(9,124,135,0.1)'}`,
                  '&:hover': {
                    background: activeCategory === idx ? cat.color : 'rgba(9,124,135,0.12)',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* FAQ CATEGORIES */}
      {faqCategories.map((cat, catIdx) => (
        <Box
          key={catIdx}
          ref={(el) => (categoryRefs.current[catIdx] = el)}
          sx={{
            background: catIdx % 2 === 0 ? '#F8FAFB' : '#FFFFFF',
            py: { xs: 8, md: 10 },
            scrollMarginTop: '80px',
          }}
        >
          <Container maxWidth="md">
            {/* CATEGORY HEADER CARD */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              sx={{ mb: 4 }}
            >
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #021E22 0%, #065A62 100%)',
                  borderRadius: '16px',
                  p: { xs: 3, md: 4 },
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative accent */}
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${cat.color}20 0%, transparent 70%)`,
                  transform: 'translate(30%, -30%)',
                }} />
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '4px',
                  width: '80px',
                  background: cat.color,
                  borderRadius: '2px',
                  ml: { xs: 3, md: 4 },
                  mb: 0,
                }} />

                <Grid container spacing={3} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
                  <Grid item xs={12} md={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                      <Box sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `${cat.color}20`,
                        borderRadius: '12px',
                        flexShrink: 0,
                      }}>
                        <AnimatedIcon type={cat.iconType} color={cat.color} size={28} />
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                          color: '#F8FAFB',
                          fontSize: { xs: '1.5rem', md: '1.8rem' },
                        }}
                      >
                        {cat.category}
                      </Typography>
                    </Box>
                    <Typography sx={{
                      color: 'rgba(248,250,251,0.7)',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      lineHeight: 1.6,
                      ml: 8,
                    }}>
                      {cat.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: { xs: 'left', md: 'right' }, ml: { xs: 8, md: 0 } }}>
                      <Typography sx={{
                        fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 700,
                        color: cat.color,
                        lineHeight: 1,
                      }}>
                        {cat.stat}
                      </Typography>
                      <Typography sx={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'rgba(248,250,251,0.5)',
                        mt: 0.5,
                      }}>
                        {cat.statLabel}
                      </Typography>
                      <Chip
                        label={`${cat.faqs.length} questions`}
                        size="small"
                        sx={{
                          mt: 1.5,
                          background: 'rgba(248,250,251,0.1)',
                          color: 'rgba(248,250,251,0.7)',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          height: 24,
                          border: '1px solid rgba(248,250,251,0.1)',
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </MotionBox>

            {/* FAQ ACCORDIONS */}
            {cat.faqs.map((faq, i) => (
              <MotionBox
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <Accordion
                  sx={{
                    background: catIdx % 2 === 0 ? '#FFFFFF' : '#F8FAFB',
                    border: '1px solid rgba(9,124,135,0.08)',
                    borderRadius: '12px !important',
                    mb: 1.5,
                    boxShadow: 'none',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      border: `1px solid ${cat.color}30`,
                      boxShadow: `0 4px 24px ${cat.color}08`,
                    },
                    transition: 'all 0.25s ease',
                  }}
                  disableGutters
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: cat.color, fontSize: 22 }} />}
                    sx={{ px: 3, py: 1.2 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Typography sx={{
                        color: cat.color,
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        fontFamily: '"DM Sans Variable", sans-serif',
                        minWidth: 28,
                        height: 28,
                        borderRadius: '8px',
                        background: `${cat.color}10`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        mt: 0.2,
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </Typography>
                      <Typography sx={{ color: '#065A62', fontWeight: 600, fontSize: '1rem', lineHeight: 1.5 }}>
                        {faq.q}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3, pl: 7.5 }}>
                    <Typography sx={{ color: '#065A62', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 500, opacity: 0.8 }}>
                      {faq.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </MotionBox>
            ))}
          </Container>
        </Box>
      ))}

      {/* FINAL CTA */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #021E22 0%, #065A62 50%, #097C87 100%)',
          py: { xs: 10, md: 14 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(252,164,124,0.08) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#F8FAFB',
                mb: 2,
                fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
              }}
            >
              Ready to See It in Action?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(248,250,251,0.8)', mb: 4 }}>
              Book a personalized demo and see how Configural transforms your practice operations.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/demo"
                sx={{
                  background: '#F8FAFB',
                  color: '#065A62',
                  px: 5,
                  py: 1.8,
                  fontWeight: 700,
                  '&:hover': { background: '#FFFFFF' },
                }}
              >
                Book a Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/platform"
                sx={{
                  borderColor: 'rgba(248,250,251,0.4)',
                  color: '#F8FAFB',
                  px: 5,
                  py: 1.8,
                  fontWeight: 600,
                  '&:hover': { borderColor: '#F8FAFB', background: 'rgba(248,250,251,0.05)' },
                }}
              >
                Explore Platform
              </Button>
            </Stack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
