import {
  Box, Container, Typography, Grid, Chip, Button, Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import GlowCard from '../components/GlowCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RouteIcon from '@mui/icons-material/Route';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupsIcon from '@mui/icons-material/Groups';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

const solutions = [
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 32 }} />,
    color: '#097C87',
    title: 'Intelligent Scheduling',
    tagline: 'Scheduling as clinical intelligence, not calendar management',
    problem: 'Healthcare scheduling requires orchestrating 6+ complex dimensions simultaneously — inter-appointment dependencies, dynamic resources, physician preferences, clinical decisions, insurance, and protocol-driven cycles. Legacy schedulers are appointment books, not clinical tools.',
    solution: 'Configural\'s six interconnected AI engines solve scheduling as a multi-constraint optimization problem. Decision Support, Predictive Analytics, Slot Recommendation, Configuration, Intelligent Waitlist, and Smart Reminders work in concert.',
    results: [
      '85% reduction in scheduling time',
      '80%+ resource utilization (from 62%)',
      '40% no-show reduction',
      '60% self-scheduling rate',
      '65% less manual work',
      '$1.8M annual savings per location',
    ],
    phases: [
      { name: 'Learn', desc: '12 weeks read-only observation and AI calibration', color: '#097C87' },
      { name: 'Automate', desc: 'Live AI-assisted scheduling with write-back to EMR', color: '#065A62' },
      { name: 'Scale', desc: 'Patient self-scheduling and automated waitlist', color: '#065A62' },
    ],
  },
  {
    icon: <EventRepeatIcon sx={{ fontSize: 32 }} />,
    color: '#065A62',
    title: 'Intelligent Waitlist Resolution',
    tagline: 'Every open slot is revenue recovered',
    problem: 'Unfilled appointment slots represent the single largest source of lost revenue in healthcare. Cancellations, no-shows, and scheduling gaps leave chairs empty while patients wait weeks for availability. Manual phone trees are slow, and by the time staff reach a waitlisted patient, the slot is gone.',
    solution: 'Configural\'s AI continuously monitors your schedule for open slots and instantly matches them against waitlisted patients based on clinical compatibility, appointment chain requirements, insurance, and patient preferences. Outreach happens in seconds — not hours — via the patient\'s preferred channel.',
    results: [
      '95%+ slot fill rate for cancellations',
      '<30 seconds from cancellation to patient contact',
      'Chain-aware matching (labs → consult → infusion)',
      'Predictive no-show pre-filling before slots open',
      'Priority-based queuing by clinical urgency',
      '30%+ capacity recovered from unused slots',
    ],
    phases: [
      { name: 'Monitor', desc: 'Real-time schedule gap detection and no-show prediction', color: '#065A62' },
      { name: 'Match', desc: 'AI matches waitlist patients by clinical fit and chain compatibility', color: '#097C87' },
      { name: 'Fill', desc: 'Instant multi-channel outreach and automated confirmation', color: '#065A62' },
    ],
  },
  {
    icon: <RouteIcon sx={{ fontSize: 32 }} />,
    color: '#065A62',
    title: 'Referral Management',
    tagline: 'Zero referrals lost. 3-minute processing.',
    problem: 'Referrals arrive via fax, email, EHR, and phone. Each requires manual data entry, insurance verification, specialist matching, and scheduling. Most practices lose 15-30% of referrals in the process.',
    solution: 'AI-powered OCR extraction, automatic patient matching against your master patient index, real-time insurance verification, and intelligent routing to the right specialist. Complete lifecycle tracking ensures zero leakage.',
    results: [
      '3-minute referral to first contact',
      '100% referral tracking and accountability',
      'Zero referrals lost in process',
      'Automated insurance verification',
      'Intelligent specialist matching',
      'Complete audit trail per referral',
    ],
    phases: [
      { name: 'Ingest', desc: 'OCR extraction and patient matching', color: '#065A62' },
      { name: 'Verify', desc: 'Insurance, network, and authorization checks', color: '#097C87' },
      { name: 'Route', desc: 'Scheduling, notification, and tracking', color: '#065A62' },
    ],
  },
  {
    icon: <MonitorHeartIcon sx={{ fontSize: 32 }} />,
    color: '#097C87',
    title: 'Complex Care Management',
    tagline: 'AI makes 5 minutes of human review worth 25 minutes of manual work',
    problem: 'CCM and PCM programs require 20-30 minutes of documented human clinical staff time per patient per month. Without AI, a coordinator manages 15-20 patients. The math doesn\'t scale.',
    solution: 'AI conducts structured check-ins, scores symptoms, drafts care plans, and assembles billing packets. Clinical staff spends 5-10 minutes reviewing AI summaries. Same coordinator manages 60-80 patients. All CMS-compliant.',
    results: [
      '4x coordinator throughput',
      '$8,220/month per 100 patients (PCM)',
      'Up to $523/patient/month stacked',
      '100% CMS-compliant billing',
      'Audit-ready by design',
      '$3.14M annual revenue at 500 patients',
    ],
    phases: [
      { name: 'AI Check-in', desc: 'Automated symptom assessment & PRO scoring', color: '#097C87' },
      { name: 'Staff Review', desc: 'Clinical review of AI summaries (5-8 min)', color: '#065A62' },
      { name: 'Bill', desc: 'Auto-assembled billing packet with code recommendation', color: '#065A62' },
    ],
  },
  {
    icon: <NotificationsActiveIcon sx={{ fontSize: 32 }} />,
    color: '#065A62',
    title: 'Patient Engagement',
    tagline: '24/7 conversational AI with full clinical context',
    problem: 'Patients call with questions. Staff spend hours on hold, callbacks, and message relay. Prep instructions are forgotten. Appointment changes create cascading confusion.',
    solution: 'Sandy AI — your practice\'s conversational intelligence — communicates via voice, SMS, and app. Sandy knows the entire patient journey: treatment history, medications, allergies, lab results, appointments, and physician orders.',
    results: [
      '24/7 patient availability',
      '<1 minute response time',
      '100% context awareness',
      '35% no-show reduction via smart reminders',
      'Proactive prep instructions',
      'Multi-channel communication (voice, SMS, app)',
    ],
    phases: [
      { name: 'Connect', desc: 'Patient communicates via preferred channel', color: '#065A62' },
      { name: 'Understand', desc: 'AI processes with full clinical context', color: '#065A62' },
      { name: 'Act', desc: 'Automated response or clinical escalation', color: '#097C87' },
    ],
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
    color: '#097C87',
    title: 'Value-Based Care',
    tagline: 'Unlock $500K+ in annual revenue already in your patient panel',
    problem: 'CMS now reimburses for between-visit care across 9 distinct programs. Most practices capture zero of this revenue because they lack the infrastructure to identify eligible patients, manage workflows, and assemble compliant billing.',
    solution: 'Configural identifies eligible patients, manages consent workflows, automates AI check-ins, routes staff reviews, and assembles audit-ready billing packets. 9 programs: PCM, CCM, RPM, BHI, RTM, PIN, CHI, APCM, TCM.',
    results: [
      '$523/patient/month maximum stack',
      '$627K/year at 100 patients',
      '$3.14M/year at 500 patients',
      '9 CMS programs automated',
      '90-day revenue activation',
      'Net positive ROI in 4 months',
    ],
    phases: [
      { name: 'Identify', desc: 'AI scans panel for eligible patients per program', color: '#097C87' },
      { name: 'Enroll', desc: 'Consent capture, workflow configuration, staff training', color: '#065A62' },
      { name: 'Revenue', desc: 'Monthly billing cycles across all stacked programs', color: '#065A62' },
    ],
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 32 }} />,
    color: '#097C87',
    title: 'Document Ingestion & Intelligence',
    tagline: 'Every document becomes actionable data in seconds',
    problem: 'Clinical documents arrive in every format — faxes, PDFs, scanned images, HL7 messages. Staff manually extract data, enter it into systems, and route to the right person. It\'s slow, error-prone, and expensive.',
    solution: 'AI processes multi-format documents in under a minute. Clinical NLP extracts diagnoses, medications, lab values, and procedures. Data routes automatically to the correct workflow — referral, scheduling, care management, or chart.',
    results: [
      '99% extraction accuracy',
      '<1 minute processing time',
      '20+ document types supported',
      'Automatic workflow routing',
      'Duplicate detection and deduplication',
      'Complete audit trail',
    ],
    phases: [
      { name: 'Ingest', desc: 'Multi-format document capture and OCR', color: '#097C87' },
      { name: 'Extract', desc: 'Clinical NLP for structured data extraction', color: '#065A62' },
      { name: 'Route', desc: 'Intelligent workflow routing and validation', color: '#065A62' },
    ],
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
    color: '#065A62',
    title: 'Pre-Appointment Intelligence',
    tagline: 'Physicians never start from a blank page',
    problem: 'Physicians see 25-30 patients/day. There is no systematic way to capture evidence, review symptom trends, or prepare documentation before the visit. Revenue is left on the table.',
    solution: 'AI agents monitor patients between visits — symptom check-ins, lab trends, PRO scores. Before each visit, AI generates a Pre-Visit Intelligence Brief with trends, flags, draft documentation, and billing recommendations (including Modifier -25).',
    results: [
      '$60-$150 per captured Modifier -25 event',
      '100+ opportunities per physician per month',
      'Zero blank-page encounters',
      'AI-drafted EMR documentation',
      'Audit-ready evidence trail',
      '2-week symptom trend visibility',
    ],
    phases: [
      { name: 'Monitor', desc: 'Between-visit symptom tracking and lab analysis', color: '#065A62' },
      { name: 'Flag', desc: 'Toxicity detection and Modifier -25 alerts', color: '#065A62' },
      { name: 'Brief', desc: 'Pre-visit intelligence brief with draft documentation', color: '#097C87' },
    ],
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32 }} />,
    color: '#097C87',
    title: 'Inter-Practice Coordination',
    tagline: 'Unified context across every provider and system',
    problem: 'Patients see multiple specialists, each with their own EMR. No one has the complete picture. When treatment changes in one system, others don\'t know.',
    solution: 'Configural\'s unified patient database aggregates data from 20+ EMR systems via HL7, FHIR, CCD/C-CDA, and X12 EDI. Master Patient Index maintains a single source of truth. When one workflow changes, every dependent workflow adapts.',
    results: [
      '20+ EMR integrations',
      'Single patient view across all systems',
      'Real-time cross-system synchronization',
      'Master Patient Index',
      'Automatic workflow cascading',
      'One patient, one platform, one truth',
    ],
    phases: [
      { name: 'Connect', desc: 'EMR connector configuration and data ingestion', color: '#097C87' },
      { name: 'Unify', desc: 'Master Patient Index and data reconciliation', color: '#065A62' },
      { name: 'Orchestrate', desc: 'Cross-system workflow automation', color: '#065A62' },
    ],
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 32 }} />,
    color: '#065A62',
    title: 'Survivorship Planning',
    tagline: 'Zero patients lost to follow-up',
    problem: 'After active treatment ends, patients transition to surveillance. Without systematic tracking, patients fall through the cracks. Missed follow-ups can mean missed recurrences.',
    solution: 'Automated surveillance scheduling per ASCO guidelines, long-term symptom monitoring, late-effect screening, and care gap identification. Every patient has a survivorship care plan with automated milestone tracking.',
    results: [
      'Zero patients lost to follow-up',
      '100% surveillance compliance',
      '95% care gap closure rate',
      'ASCO-guideline care plans',
      'Automated screening reminders',
      'Late-effect monitoring',
    ],
    phases: [
      { name: 'Plan', desc: 'Survivorship care plan generation per guidelines', color: '#065A62' },
      { name: 'Track', desc: 'Automated surveillance scheduling and monitoring', color: '#097C87' },
      { name: 'Engage', desc: 'Patient outreach for screenings and follow-ups', color: '#065A62' },
    ],
  },
  {
    icon: <HomeWorkIcon sx={{ fontSize: 32 }} />,
    color: '#097C87',
    title: 'SDOH & Community Health',
    tagline: 'Address the barriers that derail treatment',
    problem: 'Social determinants — transportation, food insecurity, housing, language barriers — cause missed appointments, treatment delays, and worse outcomes. Most practices don\'t systematically screen.',
    solution: 'AI screens every patient for SDOH barriers, connects them to community resources, coordinates transportation, and manages CHI (Community Health Integration) billing. $88/month per qualifying patient.',
    results: [
      '$88/month CHI revenue per patient',
      '100% patient SDOH screening',
      '73% barrier resolution rate',
      'Community resource matching',
      'Transportation coordination',
      'Language accommodation',
    ],
    phases: [
      { name: 'Screen', desc: 'Automated SDOH assessment for every patient', color: '#097C87' },
      { name: 'Connect', desc: 'Community resource matching and referral', color: '#065A62' },
      { name: 'Resolve', desc: 'Barrier resolution tracking and CHI billing', color: '#065A62' },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <Box>
      <SEO
        title="Healthcare Automation Solutions"
        description="Configural solves healthcare operations challenges with AI-powered intelligent scheduling, automated care management, referral coordination, prior authorization, and patient engagement."
        keywords="healthcare solutions, medical scheduling automation, care management software, referral coordination, prior authorization automation, patient engagement platform"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Configural",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Web",
          "description": "AI-powered healthcare automation platform for scheduling, referrals, care management, and practice operations.",
          "offers": {
            "@type": "Offer",
            "category": "Enterprise Healthcare Software"
          }
        }}
      />
      {/* HERO */}
      <Box
        sx={{
          pt: { xs: 12, md: 14 },
          pb: { xs: 6, md: 8 },
          background: '#097C87',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#F8FAFB',
                mb: 2,
                fontFamily: '"Cormorant Garamond Variable", serif',
                fontWeight: 300,
              }}
            >
              Solutions for Every{' '}
              <Box component="span" sx={{ color: '#F8FAFB', fontWeight: 400 }}>
                Healthcare Workflow
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                maxWidth: 700,
                mx: 'auto',
                color: 'rgba(248,250,251,0.8)',
                fontFamily: '"DM Sans Variable", sans-serif',
                fontWeight: 300,
              }}
            >
              Not bolt-on fixes. Ground-up solutions designed for the hardest problems in healthcare administration.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* SOLUTIONS */}
      {solutions.map((sol, i) => (
        <SectionWrapper key={sol.title} dark={i % 2 === 1}>
          <Grid container spacing={4} alignItems="center" direction={i % 2 === 1 ? 'row-reverse' : 'row'}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box sx={{ color: sol.color }}>{sol.icon}</Box>
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        color: '#065A62',
                        fontFamily: '"Cormorant Garamond Variable", serif',
                        fontWeight: 400,
                      }}
                    >
                      {sol.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#097C87',
                        fontFamily: '"DM Sans Variable", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {sol.tagline}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#065A62',
                    fontFamily: '"DM Sans Variable", sans-serif',
                    fontWeight: 400,
                    mb: 1.5,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  The Problem
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    color: '#065A62',
                    fontFamily: '"DM Sans Variable", sans-serif',
                    fontWeight: 300,
                  }}
                >
                  {sol.problem}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#097C87',
                    fontFamily: '"DM Sans Variable", sans-serif',
                    fontWeight: 400,
                    mb: 1.5,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  The Solution
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    color: '#065A62',
                    fontFamily: '"DM Sans Variable", sans-serif',
                    fontWeight: 300,
                  }}
                >
                  {sol.solution}
                </Typography>
              </MotionBox>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, x: i % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GlowCard>
                  <Typography
                    variant="overline"
                    sx={{
                      mb: 1.5,
                      display: 'block',
                      color: '#097C87',
                      fontFamily: '"DM Sans Variable", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Results
                  </Typography>
                  {sol.results.map((result, j) => (
                    <Box key={j} sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center' }}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: '#097C87' }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#065A62',
                          fontFamily: '"DM Sans Variable", sans-serif',
                          fontWeight: 500,
                        }}
                      >
                        {result}
                      </Typography>
                    </Box>
                  ))}
                  <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(9,124,135,0.12)' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#065A62',
                        mb: 1.5,
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontFamily: '"DM Sans Variable", sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      How It Works
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      {sol.phases.map((phase, j) => (
                        <Chip
                          key={j}
                          label={phase.name}
                          size="small"
                          sx={{
                            background: `${phase.color}15`,
                            color: phase.color,
                            fontFamily: '"DM Sans Variable", sans-serif',
                            fontWeight: 500,
                            border: `1px solid ${phase.color}30`,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </GlowCard>
              </MotionBox>
            </Grid>
          </Grid>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#F8FAFB', position: 'relative' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#065A62',
                mb: 2,
                fontFamily: '"Cormorant Garamond Variable", serif',
                fontWeight: 300,
              }}
            >
              See Which Solutions Fit Your Practice
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: '1rem',
                maxWidth: 600,
                mx: 'auto',
                color: '#065A62',
                fontFamily: '"DM Sans Variable", sans-serif',
                fontWeight: 300,
              }}
            >
              Every practice is different. Let us show you exactly which workflows will benefit most from AI — and the ROI you can expect.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              component={Link}
              to="/demo"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '0.95rem',
                fontFamily: '"DM Sans Variable", sans-serif',
                fontWeight: 500,
                background: '#097C87',
                color: '#F8FAFB',
                borderRadius: '4px',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  background: '#065A62',
                  boxShadow: 'none',
                },
              }}
            >
              Book a Demo
            </Button>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
