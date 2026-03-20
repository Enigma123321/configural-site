import {
  Box, Container, Typography, Grid, Chip, Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import GlowCard from '../components/GlowCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

const architectureLayers = [
  { title: 'Conversational Interface Layer', desc: 'Natural language processing and multi-modal communication interfaces for voice, text, and structured data input.' },
  { title: 'Agentic AI Orchestration', desc: 'Autonomous agents with decision-making and task execution capabilities that coordinate across complex healthcare scenarios.' },
  { title: 'Task Management Engine', desc: 'Workflow automation, scheduling, and real-time execution monitoring with dynamic priority management.' },
  { title: 'Smart on FHIR Integration', desc: 'Healthcare interoperability and standards-based data exchange with any EHR system supporting FHIR R4.' },
  { title: 'Security & Compliance Foundation', desc: 'HIPAA-compliant infrastructure with enterprise-grade security, encryption, and comprehensive audit logging.' },
];

const schedulingFeatures = [
  {
    title: 'Multi-Day Protocol-Aware Scheduling',
    desc: 'The only scheduler built for complex treatment protocols — automatically chains labs, clearances, infusions, and follow-ups across days and weeks while respecting clinical sequencing rules.',
    highlight: true,
  },
  {
    title: 'Infusion Room Management',
    desc: 'The only AI-powered infusion room manager — driven by predictive analytics and dynamic templates to optimize suite utilization, manage concurrent patients, drug prep timing, and nurse-to-patient ratios in real time.',
    highlight: true,
  },
  {
    title: 'Resource & Shift Planning',
    desc: 'AI-driven staff scheduling, shift optimization, and real-time availability management across providers, rooms, equipment, and support staff.',
    highlight: false,
  },
  {
    title: 'Intelligent Conflict Resolution',
    desc: 'Automatically detects and resolves scheduling conflicts, provider double-bookings, and resource overlaps — then notifies affected patients via their preferred channel.',
    highlight: false,
  },
];

const agenticCapabilities = [
  { title: 'Self-Directed Learning', desc: 'Agents continuously learn from interactions and outcomes, improving performance over time without manual programming updates.' },
  { title: 'Multi-Agent Collaboration', desc: 'Specialized agents work together, sharing information and coordinating actions to handle complex healthcare scenarios.' },
  { title: 'Goal-Oriented Problem Solving', desc: 'Agents understand high-level objectives and autonomously determine the best strategies to achieve desired outcomes.' },
];

const taskFeatures = [
  { title: 'Dynamic Priority Management', desc: 'Tasks are automatically prioritized based on clinical urgency, patient needs, and resource availability with real-time adjustments.' },
  { title: 'Workflow Orchestration', desc: 'Complex multi-step processes are automatically coordinated with dependency management and error recovery mechanisms.' },
  { title: 'Performance Analytics', desc: 'Comprehensive metrics and insights on task execution patterns, bottlenecks, and optimization opportunities.' },
];

const fhirFeatures = [
  { title: 'Real-Time Synchronization', desc: 'Bidirectional data flow ensures all systems stay synchronized with zero latency for critical healthcare information.' },
  { title: 'Universal Compatibility', desc: 'Connect with any EHR system, medical device, or healthcare application that supports FHIR standards.' },
  { title: 'Secure Data Exchange', desc: 'OAuth 2.0 and SMART launch framework ensure secure, authorized access to patient data across systems.' },
];

const conversationFeatures = [
  { title: 'Healthcare Language Understanding', desc: 'Trained on medical terminology, treatment protocols, and healthcare workflows for accurate interpretation of clinical requests.' },
  { title: 'Contextual Memory', desc: 'Maintains conversation context and patient history throughout interactions for more natural and efficient communication.' },
  { title: 'Multi-Modal Input', desc: 'Support for voice, text, and structured data input with seamless switching between communication modes.' },
];

export default function PlatformPage() {
  return (
    <Box>
      <SEO
        title="AI Healthcare Platform — EMR Integration & HIPAA Compliance"
        description="Configural's HIPAA-compliant AI platform integrates with Epic, Cerner, Athena, and 50+ EMR systems via FHIR. Automate workflows and orchestrate the entire patient journey."
        keywords="healthcare platform, EMR integration, FHIR integration, HIPAA compliant, healthcare AI architecture, Epic integration, Cerner integration, healthcare interoperability"
      />
      {/* Hero */}
      <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden', background: '#097C87' }}>
        {/* Floating code snippets background */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
          {[
            { text: '{"agentic": "ai", "status": "learning"}', top: '15%', left: '5%', delay: 0 },
            { text: 'class AutonomousAgent { ... }', top: '25%', right: '8%', delay: 1.5 },
            { text: 'await ai.processTask(context);', top: '60%', left: '10%', delay: 3 },
            { text: '[FHIR] Smart integration ✓', top: '70%', right: '12%', delay: 0.8 },
            { text: 'conversation.understand();', top: '45%', right: '5%', delay: 2.2 },
          ].map((s, i) => (
            <Typography
              key={i}
              sx={{
                position: 'absolute',
                top: s.top,
                left: s.left,
                right: s.right,
                fontFamily: 'monospace',
                fontSize: { xs: '0.65rem', md: '0.75rem' },
                color: 'rgba(248,250,251,0.12)',
                whiteSpace: 'nowrap',
                animation: `codeFloat ${6 + i}s ease-in-out ${s.delay}s infinite`,
                '@keyframes codeFloat': {
                  '0%,100%': { transform: 'translateY(0)', opacity: 0.12 },
                  '50%': { transform: 'translateY(-10px)', opacity: 0.2 },
                },
              }}
            >
              {s.text}
            </Typography>
          ))}
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}
          >
            <Chip
              label="Agentic AI Platform"
              sx={{
                mb: 2,
                background: 'rgba(248,250,251,0.15)',
                border: '1px solid rgba(248,250,251,0.3)',
                color: '#F8FAFB',
                fontWeight: 500,
                py: 2,
                px: 1,
              }}
            />
            <Typography variant="h1" sx={{ color: '#F8FAFB', mb: 2 }}>
              The Future of Healthcare AI
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.15rem',
                maxWidth: 720,
                mx: 'auto',
                color: 'rgba(248,250,251,0.8)',
                fontWeight: 300,
              }}
            >
              Built on cutting-edge agentic AI technology, our platform transforms healthcare operations through intelligent automation, seamless integrations, and natural conversation interfaces.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Intelligent Architecture — Concentric Layer Diagram */}
      <Box sx={{ py: { xs: 8, md: 14 }, background: '#F8FAFB', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
          >
            <Typography variant="overline" sx={{ color: '#097C87', mb: 1, display: 'block' }}>
              Architecture
            </Typography>
            <Typography variant="h2" sx={{ color: '#065A62', mb: 1.5 }}>
              Intelligent Architecture
            </Typography>
            <Typography variant="body1" sx={{ color: '#065A62', maxWidth: 600, mx: 'auto' }}>
              Five integrated layers — each purpose-built for healthcare complexity, working as one unified system.
            </Typography>
          </MotionBox>

          {/* Concentric circles diagram */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              mb: 6,
              background: 'linear-gradient(145deg, #EAF4F7 0%, #F8FAFB 40%, #E8F3F6 100%)',
              borderRadius: 4,
              border: '1px solid rgba(9,124,135,0.12)',
              boxShadow: '0 8px 32px rgba(9,124,135,0.1)',
              py: 5,
              px: 3,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <svg viewBox="0 0 680 680" width="520" height="520" style={{ maxWidth: '100%' }}>
              <defs>
                <style>{`
                  @keyframes dashSpin { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -50; } }
                  .dash-anim { animation: dashSpin 20s linear infinite; }
                  @keyframes glowPulse { 0%,100% { opacity: 0.2; } 50% { opacity: 0.35; } }
                  .glow-pulse { animation: glowPulse 4s ease-in-out infinite; }
                `}</style>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#097C87" stopOpacity="0.12" />
                  <stop offset="70%" stopColor="#065A62" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#F8FAFB" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background glow */}
              <circle cx="340" cy="340" r="300" fill="url(#coreGlow)" className="glow-pulse" />

              {/* Ring 5 — Security (outermost) */}
              <circle cx="340" cy="340" r="318" fill="none" stroke="#097C87" strokeWidth="40" opacity="0.05" />
              <circle cx="340" cy="340" r="318" fill="none" stroke="#097C87" strokeWidth="1" opacity="0.2" strokeDasharray="10 8" className="dash-anim" />

              {/* Ring 4 — FHIR */}
              <circle cx="340" cy="340" r="256" fill="none" stroke="#097C87" strokeWidth="40" opacity="0.06" />
              <circle cx="340" cy="340" r="256" fill="none" stroke="#097C87" strokeWidth="1" opacity="0.25" strokeDasharray="10 8" className="dash-anim" />

              {/* Ring 3 — Task Management */}
              <circle cx="340" cy="340" r="194" fill="none" stroke="#097C87" strokeWidth="40" opacity="0.07" />
              <circle cx="340" cy="340" r="194" fill="none" stroke="#097C87" strokeWidth="1.2" opacity="0.3" strokeDasharray="8 6" className="dash-anim" />

              {/* Ring 2 — Agentic AI */}
              <circle cx="340" cy="340" r="132" fill="none" stroke="#097C87" strokeWidth="40" opacity="0.09" />
              <circle cx="340" cy="340" r="132" fill="none" stroke="#097C87" strokeWidth="1.5" opacity="0.35" strokeDasharray="8 6" className="dash-anim" />

              {/* Ring 1 — Conversational core */}
              <circle cx="340" cy="340" r="68" fill="#097C87" opacity="0.85" />
              <circle cx="340" cy="340" r="68" fill="none" stroke="#065A62" strokeWidth="2" opacity="0.3" />

              {/* ══ CENTER — Layer 1: Conversational Interface ══ */}
              <text x="340" y="324" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="DM Sans Variable, sans-serif">Conversational</text>
              <text x="340" y="344" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="DM Sans Variable, sans-serif">Interface</text>
              <text x="340" y="364" textAnchor="middle" fill="#E0F4F7" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">NLP • Voice • Text</text>

              {/* ══ RING 2 — Agentic AI (r=132) — 6 items at 60° intervals ══ */}
              {/* 0° top — title pill */}
              <rect x="250" y="190" width="180" height="32" rx="16" fill="#097C87" />
              <text x="340" y="211" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="DM Sans Variable, sans-serif">Agentic AI Orchestration</text>
              {/* 60° upper-right */}
              <text x="454" y="278" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Goal-Oriented</text>
              {/* 120° lower-right */}
              <text x="454" y="408" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Context-Aware</text>
              {/* 180° bottom */}
              <text x="340" y="476" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Multi-Agent</text>
              {/* 240° lower-left */}
              <text x="226" y="408" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Autonomous</text>
              {/* 300° upper-left */}
              <text x="226" y="278" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Self-Learning</text>

              {/* ══ RING 3 — Task Management (r=194) — 6 items at 60° intervals ══ */}
              {/* 0° top */}
              <text x="340" y="152" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">Priority Queue</text>
              {/* 60° upper-right — title pill */}
              <rect x="468" y="226" width="150" height="30" rx="15" fill="#097C87" />
              <text x="543" y="246" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="DM Sans Variable, sans-serif">Task Management</text>
              {/* 120° lower-right */}
              <text x="508" y="440" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">Error Recovery</text>
              {/* 180° bottom */}
              <text x="340" y="540" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">Workflow Automation</text>
              {/* 240° lower-left */}
              <text x="172" y="440" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">Dependency Mgmt</text>
              {/* 300° upper-left */}
              <rect x="100" y="226" width="114" height="24" rx="12" fill="rgba(9,124,135,0.1)" />
              <text x="157" y="243" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Real-Time Exec</text>

              {/* ══ RING 4 — Smart on FHIR (r=256) — 8 items at 45° intervals ══ */}
              {/* 0° top */}
              <text x="340" y="90" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">OAuth 2.0</text>
              {/* 45° upper-right */}
              <text x="521" y="159" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">EHR Connect</text>
              {/* 90° right */}
              <text x="600" y="344" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">FHIR R4</text>
              {/* 135° lower-right */}
              <text x="521" y="525" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">Bi-Directional</text>
              {/* 180° bottom — title pill */}
              <rect x="265" y="578" width="150" height="32" rx="16" fill="#097C87" />
              <text x="340" y="599" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="DM Sans Variable, sans-serif">Smart on FHIR</text>
              {/* 225° lower-left */}
              <text x="159" y="525" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">Data Exchange</text>
              {/* 270° left */}
              <text x="80" y="344" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="500" fontFamily="DM Sans Variable, sans-serif">HL7 v2</text>
              {/* 315° upper-left */}
              <rect x="98" y="153" width="120" height="24" rx="12" fill="rgba(9,124,135,0.1)" />
              <text x="158" y="170" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">20+ EHR Systems</text>

              {/* ══ RING 5 — Security & Compliance (r=318) — 8 items at 45° intervals ══ */}
              {/* 0° top */}
              <text x="340" y="30" textAnchor="middle" fill="#065A62" fontSize="11" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">HIPAA</text>
              {/* 45° upper-right */}
              <text x="565" y="115" textAnchor="middle" fill="#065A62" fontSize="11" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">MFA</text>
              {/* 90° right */}
              <text x="652" y="344" textAnchor="middle" fill="#065A62" fontSize="11" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Audit Logs</text>
              {/* 135° lower-right */}
              <text x="565" y="568" textAnchor="middle" fill="#065A62" fontSize="11" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">AES-256</text>
              {/* 180° bottom */}
              <text x="340" y="654" textAnchor="middle" fill="#065A62" fontSize="11" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">BAA</text>
              {/* 225° lower-left */}
              <text x="115" y="568" textAnchor="middle" fill="#065A62" fontSize="11" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Zero Trust</text>
              {/* 270° left — title pill */}
              <rect x="18" y="322" width="168" height="32" rx="16" fill="#097C87" />
              <text x="102" y="343" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="DM Sans Variable, sans-serif">Security & Compliance</text>
              {/* 315° upper-left */}
              <text x="115" y="115" textAnchor="middle" fill="#065A62" fontSize="11" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Encryption</text>
              {/* Extra: between positions */}
              <text x="460" y="654" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">SOC 2 Type II</text>
              <text x="220" y="654" textAnchor="middle" fill="#065A62" fontSize="10" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">RBAC</text>
            </svg>
          </MotionBox>

          {/* Mobile: simplified horizontal layer bars */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4 }}>
            {architectureLayers.map((layer, i) => (
              <MotionBox
                key={layer.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  py: 2,
                  px: 2.5,
                  borderRadius: 2,
                  background: i === 0 ? 'rgba(9,124,135,0.12)' : 'transparent',
                  borderBottom: i < 4 ? '1px solid rgba(9,124,135,0.1)' : 'none',
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: i === 0 ? '#097C87' : 'rgba(9,124,135,0.1)',
                    color: i === 0 ? '#FFFFFF' : '#097C87',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#065A62', fontSize: '0.95rem', lineHeight: 1.3 }}>
                    {layer.title}
                  </Typography>
                  <Typography sx={{ color: '#065A62', fontSize: '0.8rem', lineHeight: 1.4 }}>
                    {layer.desc.split('.')[0]}.
                  </Typography>
                </Box>
              </MotionBox>
            ))}
          </Box>

          {/* Layer detail cards — horizontal row on desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'grid' },
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 2,
            }}
          >
            {architectureLayers.map((layer, i) => (
              <MotionBox
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  background: '#FFFFFF',
                  border: '1px solid rgba(9,124,135,0.1)',
                  boxShadow: '0 2px 8px rgba(9,124,135,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: i === 0 ? '#065A62' : i === 1 ? '#097C87' : i === 2 ? '#065A62' : i === 3 ? '#065A62' : '#4D8D9C',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: 'rgba(9,124,135,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1.5,
                  }}
                >
                  <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#097C87' }}>{i + 1}</Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond Variable", serif',
                    fontWeight: 700,
                    color: '#065A62',
                    fontSize: '1rem',
                    lineHeight: 1.3,
                    mb: 1,
                  }}
                >
                  {layer.title}
                </Typography>
                <Typography sx={{ color: '#065A62', fontSize: '0.8rem', lineHeight: 1.5 }}>
                  {layer.desc.split('.')[0]}.
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </Container>
      </Box>

      {/* AI-Native Scheduling */}
      <Box sx={{ py: { xs: 10, md: 16 }, background: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Chip
                  label="Industry First"
                  sx={{
                    mb: 2,
                    background: 'rgba(9,124,135,0.08)',
                    color: '#097C87',
                    fontWeight: 700,
                    border: '1px solid rgba(9,124,135,0.2)',
                  }}
                />
                <Typography variant="h2" sx={{ mb: 2 }}>
                  AI-Native Scheduling & Resource Optimization
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: '#065A62' }}>
                  Not a calendar with AI bolted on — Configural's scheduler was built from the ground up with AI at its core. It understands clinical protocols, treatment dependencies, and resource constraints that generic scheduling tools simply cannot handle.
                </Typography>
                {schedulingFeatures.map((f, i) => (
                  <MotionBox
                    key={f.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    sx={{
                      mb: 2.5,
                      p: f.highlight ? 2.5 : 0,
                      borderRadius: f.highlight ? 2 : 0,
                      background: f.highlight ? 'rgba(9,124,135,0.04)' : 'transparent',
                      border: f.highlight ? '1px solid rgba(9,124,135,0.12)' : 'none',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#065A62',
                        mb: 0.5,
                        fontFamily: '"Cormorant Garamond Variable", serif',
                        fontSize: f.highlight ? '1.2rem' : '1.1rem',
                      }}
                    >
                      {f.title}
                      {f.highlight && (
                        <Box
                          component="span"
                          sx={{
                            ml: 1.5,
                            fontSize: '0.65rem',
                            fontFamily: '"DM Sans Variable", sans-serif',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            background: '#097C87',
                            px: 1,
                            py: 0.3,
                            borderRadius: 1,
                            verticalAlign: 'middle',
                          }}
                        >
                          ONLY SCHEDULER
                        </Box>
                      )}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 300 }}>
                      {f.desc}
                    </Typography>
                  </MotionBox>
                ))}
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                {/* Scheduling Demo Terminal */}
                <Box sx={{ background: '#065A62', borderRadius: 3, overflow: 'hidden', boxShadow: '0 12px 40px rgba(6,90,98,0.2)' }}>
                  <Box sx={{ px: 2, py: 1.5, background: 'rgba(255,255,255,0.05)', display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#e74c3c' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#f39c12' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#2ecc71' }} />
                    <Typography sx={{ ml: 1, fontSize: '0.7rem', color: 'rgba(248,250,251,0.5)', fontFamily: 'monospace' }}>
                      protocol-scheduler
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#065A62', mb: 1.5 }}>
                      Protocol: Docetaxel Cycle 3 (21-day)
                    </Typography>
                    {[
                      { day: 'Day 1', task: 'Pre-treatment labs (CBC, CMP)', status: '✓ Scheduled', color: '#2ecc71' },
                      { day: 'Day 1', task: 'Physician clearance review', status: '✓ Scheduled', color: '#2ecc71' },
                      { day: 'Day 2', task: 'Infusion — Chair 3 (3.5 hrs)', status: '✓ Reserved', color: '#2ecc71' },
                      { day: 'Day 2', task: 'Nurse: M. Chen (certified)', status: '✓ Assigned', color: '#2ecc71' },
                      { day: 'Day 8', task: 'Mid-cycle CBC check', status: '✓ Scheduled', color: '#2ecc71' },
                      { day: 'Day 14', task: 'Follow-up + toxicity review', status: '✓ Scheduled', color: '#2ecc71' },
                      { day: 'Day 21', task: 'Cycle 4 auto-queued', status: '◆ Pending', color: '#f39c12' },
                    ].map((item, i) => (
                      <MotionBox
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.8, alignItems: 'center' }}
                      >
                        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#FCA47C', minWidth: 45 }}>
                            {item.day}
                          </Typography>
                          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(248,250,251,0.8)' }}>
                            {item.task}
                          </Typography>
                        </Box>
                        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: item.color, flexShrink: 0 }}>
                          {item.status}
                        </Typography>
                      </MotionBox>
                    ))}
                    <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(248,250,251,0.1)' }}>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#065A62', mb: 0.5 }}>
                        Infusion Suite Status:
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        {[
                          { label: 'Chairs Available', value: '4/12' },
                          { label: 'Utilization', value: '92%' },
                          { label: 'Staff On-Shift', value: '6 RN' },
                          { label: 'Conflicts', value: '0' },
                        ].map((s) => (
                          <Box key={s.label}>
                            <Typography sx={{ fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(248,250,251,0.4)' }}>{s.label}</Typography>
                            <Typography sx={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#F8FAFB', fontWeight: 600 }}>{s.value}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Agentic AI */}
      <Box sx={{ background: '#FFFFFF', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>Core Technology</Typography>
                <Typography variant="h2" sx={{ mb: 2 }}>
                  Agentic AI: Autonomous Intelligence
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Unlike traditional rule-based systems, our AI agents understand context, make independent decisions, and adapt to changing situations in real-time.
                </Typography>
                {agenticCapabilities.map((cap, i) => (
                  <Box key={cap.title} sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ color: '#065A62', mb: 0.5, fontFamily: '"Cormorant Garamond Variable", serif' }}>
                      {cap.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 300 }}>
                      {cap.desc}
                    </Typography>
                  </Box>
                ))}
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                {/* Agentic AI Demo Terminal */}
                <Box sx={{ background: '#065A62', borderRadius: 3, overflow: 'hidden', boxShadow: '0 12px 40px rgba(6,90,98,0.2)' }}>
                  <Box sx={{ px: 2, py: 1.5, background: 'rgba(255,255,255,0.05)', display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#e74c3c' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#f39c12' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#2ecc71' }} />
                    <Typography sx={{ ml: 1, fontSize: '0.7rem', color: 'rgba(248,250,251,0.5)', fontFamily: 'monospace' }}>
                      agentic-ai-demo
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    {[
                      { prefix: '▸', text: 'Agent initialized: SchedulingOptimizer', color: '#065A62' },
                      { prefix: '▸', text: 'Analyzing: 47 pending appointments', color: '#FCA47C' },
                      { prefix: '⚠', text: 'Detecting: Provider availability conflict', color: '#f39c12' },
                      { prefix: '↔', text: 'Collaborating: ResourceManager agent', color: '#065A62' },
                      { prefix: '◈', text: 'Evaluating: 12 possible solutions', color: '#FCA47C' },
                      { prefix: '✓', text: 'Selecting: Optimal strategy (94% confidence)', color: '#2ecc71' },
                    ].map((line, i) => (
                      <MotionBox
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
                        sx={{ display: 'flex', gap: 1, mb: 1 }}
                      >
                        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.8rem', color: line.color }}>{line.prefix}</Typography>
                        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'rgba(248,250,251,0.8)' }}>{line.text}</Typography>
                      </MotionBox>
                    ))}

                    <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(248,250,251,0.1)' }}>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#065A62', mb: 1 }}>
                        Autonomous Resolution:
                      </Typography>
                      {[
                        '23 appointments automatically rescheduled',
                        'Zero conflicts in new schedule',
                        '97% patient preference satisfaction',
                        'All patients notified via preferred method',
                      ].map((r, i) => (
                        <Typography key={i} sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#2ecc71', mb: 0.3 }}>
                          ✓ {r}
                        </Typography>
                      ))}
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(248,250,251,0.4)', mt: 1 }}>
                        Execution time: 1.2 seconds
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Task Management */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
              <MotionBox initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                {/* Task Console */}
                <Box sx={{ background: '#065A62', borderRadius: 3, overflow: 'hidden', boxShadow: '0 12px 40px rgba(6,90,98,0.2)' }}>
                  <Box sx={{ px: 2, py: 1.5, background: 'rgba(255,255,255,0.05)', display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#e74c3c' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#f39c12' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#2ecc71' }} />
                    <Typography sx={{ ml: 1, fontSize: '0.7rem', color: 'rgba(248,250,251,0.5)', fontFamily: 'monospace' }}>
                      task-engine
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#065A62' }}>Task Queue Status:</Typography>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#2ecc71' }}>Active</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3, mb: 2, flexWrap: 'wrap' }}>
                      {[
                        { label: 'Priority Tasks', value: '12' },
                        { label: 'Standard Tasks', value: '89' },
                        { label: 'Success Rate', value: '99.2%' },
                        { label: 'Avg Completion', value: '0.8s' },
                      ].map((s) => (
                        <Box key={s.label}>
                          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(248,250,251,0.4)' }}>{s.label}</Typography>
                          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#F8FAFB', fontWeight: 600 }}>{s.value}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ borderTop: '1px solid rgba(248,250,251,0.1)', pt: 2 }}>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(248,250,251,0.4)', mb: 1 }}>Priority Queue:</Typography>
                      {[
                        { task: 'Schedule Emergency Slot', status: 'EXECUTING', color: '#f39c12' },
                        { task: 'Patient Critical Alert', status: 'COMPLETED', color: '#2ecc71' },
                        { task: 'Provider Schedule Conflict', status: 'QUEUED', color: '#065A62' },
                      ].map((t) => (
                        <Box key={t.task} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(248,250,251,0.7)' }}>{t.task}</Typography>
                          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: t.color }}>{t.status}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
              <MotionBox initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>Automation Engine</Typography>
                <Typography variant="h2" sx={{ mb: 2 }}>
                  Intelligent Task Management
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Our task management system goes beyond simple automation. It understands the relationships between tasks, prioritizes based on clinical urgency, and adapts execution strategies based on real-time conditions.
                </Typography>
                {taskFeatures.map((f) => (
                  <Box key={f.title} sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ color: '#065A62', mb: 0.5, fontFamily: '"Cormorant Garamond Variable", serif' }}>
                      {f.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 300 }}>
                      {f.desc}
                    </Typography>
                  </Box>
                ))}
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Smart on FHIR */}
      <Box sx={{ background: '#FFFFFF', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>Interoperability</Typography>
                <Typography variant="h2" sx={{ mb: 2 }}>
                  Smart on FHIR Integration
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Built on the latest FHIR R4 standards, our platform provides seamless interoperability with any healthcare system. Native FHIR support ensures real-time data synchronization and standards-based integration.
                </Typography>
                {fhirFeatures.map((f) => (
                  <Box key={f.title} sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ color: '#065A62', mb: 0.5, fontFamily: '"Cormorant Garamond Variable", serif' }}>
                      {f.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 300 }}>
                      {f.desc}
                    </Typography>
                  </Box>
                ))}
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                {/* FHIR Console */}
                <Box sx={{ background: '#065A62', borderRadius: 3, overflow: 'hidden', boxShadow: '0 12px 40px rgba(6,90,98,0.2)' }}>
                  <Box sx={{ px: 2, py: 1.5, background: 'rgba(255,255,255,0.05)', display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#e74c3c' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#f39c12' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#2ecc71' }} />
                    <Typography sx={{ ml: 1, fontSize: '0.7rem', color: 'rgba(248,250,251,0.5)', fontFamily: 'monospace' }}>
                      fhir-integration
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(248,250,251,0.5)' }}>FHIR Server:</Typography>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#2ecc71' }}>Connected (R4.0.1)</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(248,250,251,0.5)' }}>EHR Systems:</Typography>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#F8FAFB' }}>Epic, Cerner, Allscripts</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(248,250,251,0.5)' }}>Active Connections:</Typography>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#F8FAFB' }}>127</Typography>
                    </Box>
                    <Box sx={{ borderTop: '1px solid rgba(248,250,251,0.1)', pt: 2 }}>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(248,250,251,0.4)', mb: 1 }}>Resource Types:</Typography>
                      {[
                        { type: 'Patient', value: '12,847 records' },
                        { type: 'Appointment', value: '5,692 active' },
                        { type: 'Practitioner', value: '234 providers' },
                        { type: 'Schedule', value: 'Real-time sync ✓' },
                      ].map((r) => (
                        <Box key={r.type} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#065A62' }}>{r.type}</Typography>
                          <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(248,250,251,0.7)' }}>{r.value}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ mt: 2, pt: 1.5, borderTop: '1px solid rgba(248,250,251,0.1)', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(248,250,251,0.4)' }}>Sync Latency:</Typography>
                        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#2ecc71' }}>&lt;100ms average</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'rgba(248,250,251,0.4)' }}>Compliance:</Typography>
                        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#2ecc71' }}>FHIR R4.0.1 certified</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Conversational AI */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
              <MotionBox initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                {/* Conversation Demo */}
                <Box sx={{ background: '#FFFFFF', borderRadius: 3, overflow: 'hidden', boxShadow: '0 12px 40px rgba(9,124,135,0.1)', border: '1px solid rgba(9,124,135,0.08)' }}>
                  <Box sx={{ px: 3, py: 2, borderBottom: '1px solid rgba(9,124,135,0.08)', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#2ecc71' }} />
                    <Typography sx={{ fontSize: '0.8rem', color: '#065A62', fontWeight: 500 }}>Configural AI Assistant</Typography>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    {/* User message */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                      <Box sx={{ background: '#097C87', borderRadius: '12px 12px 2px 12px', px: 2.5, py: 1.5, maxWidth: '80%' }}>
                        <Typography sx={{ fontSize: '0.85rem', color: '#F8FAFB' }}>
                          Reschedule Mrs. Johnson&apos;s chemo for next week
                        </Typography>
                      </Box>
                    </Box>
                    {/* AI thinking */}
                    <Box sx={{ mb: 2 }}>
                      {[
                        'Analyzing patient Sarah Johnson...',
                        'Found Cycle 3 Docetaxel scheduled 04/23',
                        'Checking next week availability...',
                      ].map((t, i) => (
                        <Typography key={i} sx={{ fontSize: '0.7rem', color: '#065A62', fontFamily: 'monospace', mb: 0.3 }}>
                          ▸ {t}
                        </Typography>
                      ))}
                    </Box>
                    {/* AI response */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <Box sx={{ background: 'rgba(9,124,135,0.06)', borderRadius: '12px 12px 12px 2px', px: 2.5, py: 1.5, maxWidth: '85%' }}>
                        <Typography sx={{ fontSize: '0.85rem', color: '#065A62', mb: 1 }}>
                          I found 3 available slots for Sarah Johnson&apos;s Cycle 3 Docetaxel next week:
                        </Typography>
                        {[
                          'Tuesday 4/30 at 10:00 AM',
                          'Wednesday 5/1 at 2:00 PM',
                          'Friday 5/3 at 9:00 AM',
                        ].map((slot, i) => (
                          <Typography key={i} sx={{ fontSize: '0.8rem', color: '#097C87', fontWeight: 500, ml: 1, mb: 0.3 }}>
                            • {slot}
                          </Typography>
                        ))}
                        <Typography sx={{ fontSize: '0.8rem', color: '#065A62', mt: 1 }}>
                          All include pre-labs and consultation. Which would you prefer?
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
              <MotionBox initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>Conversational AI</Typography>
                <Typography variant="h2" sx={{ mb: 2 }}>
                  Natural Conversation Interface
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Interact with our AI platform using natural language. Our conversational AI understands context, remembers previous interactions, and handles complex healthcare terminology and scenarios.
                </Typography>
                {conversationFeatures.map((f) => (
                  <Box key={f.title} sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ color: '#065A62', mb: 0.5, fontFamily: '"Cormorant Garamond Variable", serif' }}>
                      {f.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 300 }}>
                      {f.desc}
                    </Typography>
                  </Box>
                ))}
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#097C87' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: '#F8FAFB', mb: 2 }}>
            Experience the Future of Healthcare AI
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: '1.05rem', maxWidth: 600, mx: 'auto', color: 'rgba(248,250,251,0.8)', fontWeight: 300 }}
          >
            See how our agentic AI platform can transform your healthcare operations with intelligent automation and seamless integration.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                fontWeight: 600,
                '&:hover': { background: '#FFFFFF' },
              }}
            >
              Book Platform Demo
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              component={Link}
              to="/demo"
              sx={{
                py: 1.5,
                px: 4,
                color: '#F8FAFB',
                borderColor: 'rgba(248,250,251,0.4)',
                '&:hover': { borderColor: '#F8FAFB', background: 'rgba(248,250,251,0.08)' },
              }}
            >
              Start Free Trial
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
