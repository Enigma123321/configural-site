import {
  Box, Container, Typography, Button, Grid, Stack, Divider,
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import GlowCard from '../components/GlowCard';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);


const journeySteps = [
  { label: 'Referral\nIntake', icon: 'referral', desc: 'AI reads faxes, extracts data, matches patients, and verifies insurance in minutes.' },
  { label: 'Initial\nConsultation', icon: 'consult', desc: 'Smart scheduling across providers, rooms, and resources. Protocol-aware sequencing.' },
  { label: 'Treatment\nPlanning', icon: 'planning', desc: 'Automated eligibility checks, prior auth, and care plan coordination across systems.' },
  { label: 'Active\nCare', icon: 'care', desc: 'Real-time symptom monitoring, CTCAE scoring, and proactive clinical escalation.' },
  { label: 'Post-\nTreatment', icon: 'post', desc: 'Automated follow-ups, PRO questionnaires, and care gap surveillance 24/7.' },
  { label: 'Survivorship', icon: 'survivor', desc: 'Long-term engagement, wellness tracking, and continuous care coordination.' },
];

const results = [
  { value: '85%', label: 'Reduction in scheduling time' },
  { value: '4x', label: 'Staff throughput multiplier' },
  { value: '$1.8M', label: 'Annual savings per location' },
  { value: '91%', label: 'First-call resolution rate' },
  { value: '40%', label: 'No-show reduction' },
  { value: '3 min', label: 'Referral processing time' },
];

function HeroStageIcon({ iconId }) {
  const faceMap = {
    referral: '/faces/referral.jpg',
    scheduling: '/faces/scheduling.jpg',
    care: '/faces/care.jpg',
    outreach: '/faces/outreach.jpg',
    gaps: '/faces/gaps.jpg',
    survivorship: '/faces/survivorship.jpg',
  };
  return (
    <Box
      component="img"
      src={faceMap[iconId]}
      alt={iconId}
      sx={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid rgba(252,164,124,0.5)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
      }}
    />
  );
}

export default function HomePage() {
  return (
    <Box>
      <SEO
        title="AI-Powered Healthcare Automation Platform"
        description="Configural's AI employees automate healthcare scheduling, referral management, care coordination, and administrative tasks — saving practices 4+ hours daily per staff member."
        keywords="healthcare automation, AI healthcare platform, medical scheduling software, referral management, care coordination, healthcare AI, practice management"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Configural",
          "url": "https://configural-site.onrender.com",
          "description": "AI-native platform that orchestrates the entire patient journey with autonomous AI employees for healthcare operations.",
          "sameAs": []
        }}
      />
      {/* HERO */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(160deg, #021E22 0%, #043D43 25%, #065A62 50%, #097C87 75%, #0A8F9A 100%)',
          color: '#FFFFFF',
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
        }}
      >
        {/* Animated background orbs */}
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <style>{`
            @keyframes heroIconFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
            @keyframes heroIconPulse { 0%,100% { opacity: 0.7; } 50% { opacity: 1; } }
            @keyframes heroIconBeat { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }
            .hero-icon-float { animation: heroIconFloat 3s ease-in-out infinite; }
            .hero-icon-pulse { animation: heroIconPulse 2s ease-in-out infinite; }
            .hero-icon-beat { animation: heroIconBeat 2s ease-in-out infinite; transform-origin: center; }
            @keyframes orbFloat1 { 0% { transform: translate(0, 0) scale(1); } 25% { transform: translate(80px, -60px) scale(1.2); } 50% { transform: translate(20px, 40px) scale(0.9); } 75% { transform: translate(-50px, -20px) scale(1.1); } 100% { transform: translate(0, 0) scale(1); } }
            @keyframes orbFloat2 { 0% { transform: translate(0, 0) scale(1); } 25% { transform: translate(-70px, 60px) scale(1.15); } 50% { transform: translate(50px, -30px) scale(0.85); } 75% { transform: translate(-30px, -40px) scale(1.05); } 100% { transform: translate(0, 0) scale(1); } }
            @keyframes orbFloat3 { 0% { transform: translate(0, 0) scale(1); } 25% { transform: translate(40px, 80px) scale(1.25); } 50% { transform: translate(-80px, -40px) scale(0.8); } 75% { transform: translate(60px, -60px) scale(1.1); } 100% { transform: translate(0, 0) scale(1); } }
            @keyframes orbFloat4 { 0% { transform: translate(0, 0) scale(1); } 33% { transform: translate(-60px, -70px) scale(1.15); } 66% { transform: translate(50px, 30px) scale(0.9); } 100% { transform: translate(0, 0) scale(1); } }
            @keyframes orbFloat5 { 0% { transform: translate(0, 0) scale(1); } 20% { transform: translate(90px, 30px) scale(1.1); } 40% { transform: translate(-40px, 70px) scale(0.95); } 60% { transform: translate(-70px, -50px) scale(1.2); } 80% { transform: translate(30px, -40px) scale(0.9); } 100% { transform: translate(0, 0) scale(1); } }
            @keyframes shimmerSweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
            @keyframes pulseGlow { 0%,100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.35; transform: scale(1.05); } }
            @keyframes particleRise { 0% { transform: translateY(0) translateX(0); opacity: 0; } 15% { opacity: 0.8; } 85% { opacity: 0.8; } 100% { transform: translateY(-250px) translateX(50px); opacity: 0; } }
          `}</style>
          {/* Large floating gradient orbs — more vivid and dynamic */}
          <Box sx={{
            position: 'absolute', width: '700px', height: '700px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(252,164,124,0.22) 0%, rgba(252,164,124,0.05) 50%, transparent 70%)',
            top: '-15%', right: '-8%', animation: 'orbFloat1 12s ease-in-out infinite',
          }} />
          <Box sx={{
            position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(35,206,217,0.25) 0%, rgba(35,206,217,0.06) 50%, transparent 70%)',
            top: '20%', left: '-10%', animation: 'orbFloat2 15s ease-in-out infinite',
          }} />
          <Box sx={{
            position: 'absolute', width: '550px', height: '550px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(9,124,135,0.3) 0%, rgba(9,124,135,0.06) 50%, transparent 70%)',
            bottom: '-10%', right: '15%', animation: 'orbFloat3 10s ease-in-out infinite',
          }} />
          <Box sx={{
            position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(252,164,124,0.15) 0%, transparent 60%)',
            top: '55%', left: '25%', animation: 'orbFloat4 13s ease-in-out infinite',
          }} />
          <Box sx={{
            position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(35,206,217,0.12) 0%, transparent 60%)',
            top: '-5%', left: '50%', animation: 'orbFloat5 16s ease-in-out infinite',
          }} />
          <Box sx={{
            position: 'absolute', width: '350px', height: '350px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(252,164,124,0.18) 0%, transparent 60%)',
            bottom: '5%', left: '-5%', animation: 'orbFloat1 18s ease-in-out infinite',
          }} />
          {/* Pulsing glow center */}
          <Box sx={{
            position: 'absolute', width: '800px', height: '800px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(9,124,135,0.12) 0%, transparent 60%)',
            top: '50%', left: '50%', marginLeft: '-400px', marginTop: '-400px',
            animation: 'pulseGlow 4s ease-in-out infinite',
          }} />
          {/* Floating particles — more and brighter */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {[
              { cx: '8%', cy: '25%', r: 2.5, delay: '0s', dur: '6s', fill: '#FCA47C' },
              { cx: '22%', cy: '55%', r: 1.5, delay: '1s', dur: '7s', fill: '#F8FAFB' },
              { cx: '38%', cy: '20%', r: 3, delay: '0.5s', dur: '5s', fill: '#23CED9' },
              { cx: '52%', cy: '65%', r: 2, delay: '2s', dur: '6s', fill: '#FCA47C' },
              { cx: '68%', cy: '12%', r: 1.5, delay: '3s', dur: '8s', fill: '#F8FAFB' },
              { cx: '82%', cy: '45%', r: 2.5, delay: '0.5s', dur: '5.5s', fill: '#23CED9' },
              { cx: '12%', cy: '78%', r: 2, delay: '4s', dur: '7s', fill: '#F8FAFB' },
              { cx: '58%', cy: '38%', r: 3, delay: '1.5s', dur: '6s', fill: '#FCA47C' },
              { cx: '75%', cy: '72%', r: 1.5, delay: '2.5s', dur: '7s', fill: '#23CED9' },
              { cx: '32%', cy: '82%', r: 2, delay: '3s', dur: '5s', fill: '#F8FAFB' },
              { cx: '88%', cy: '22%', r: 2.5, delay: '5s', dur: '6s', fill: '#FCA47C' },
              { cx: '48%', cy: '8%', r: 2, delay: '3.5s', dur: '5.5s', fill: '#23CED9' },
              { cx: '5%', cy: '48%', r: 1.5, delay: '1.5s', dur: '8s', fill: '#F8FAFB' },
              { cx: '92%', cy: '60%', r: 2, delay: '4.5s', dur: '6s', fill: '#FCA47C' },
              { cx: '42%', cy: '90%', r: 2.5, delay: '0s', dur: '7s', fill: '#23CED9' },
              { cx: '18%', cy: '35%', r: 1.5, delay: '2s', dur: '5s', fill: '#FCA47C' },
              { cx: '65%', cy: '88%', r: 2, delay: '3.5s', dur: '6.5s', fill: '#F8FAFB' },
              { cx: '78%', cy: '32%', r: 3, delay: '1s', dur: '5s', fill: '#23CED9' },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.fill} opacity="0">
                <animate attributeName="opacity" values="0;0.7;0.4;0.8;0" dur={p.dur} begin={p.delay} repeatCount="indefinite" />
                <animate attributeName="cy" values={`${p.cy};${parseFloat(p.cy) - 20}%`} dur={p.dur} begin={p.delay} repeatCount="indefinite" />
                <animate attributeName="cx" values={`${p.cx};${parseFloat(p.cx) + (i % 2 === 0 ? 3 : -3)}%`} dur={p.dur} begin={p.delay} repeatCount="indefinite" />
              </circle>
            ))}
          </svg>
          {/* Light sweep effect */}
          <Box sx={{
            position: 'absolute', inset: 0, overflow: 'hidden',
          }}>
            <Box sx={{
              position: 'absolute', top: 0, left: 0, width: '50%', height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
              animation: 'shimmerSweep 6s ease-in-out infinite',
            }} />
          </Box>
        </Box>

        {/* Dark overlay behind text for contrast */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 35%, rgba(3,20,24,0.45) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 1 }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          {/* Centered headline */}
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}
          >
            <Typography
              variant="overline"
              sx={{ fontWeight: 700, mb: 2, display: 'block', letterSpacing: '0.2em', color: '#FCA47C', fontSize: '0.85rem' }}
            >
              AI-Native Patient Journey Platform
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: 3,
                maxWidth: 850,
                mx: 'auto',
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                textShadow: '0 2px 30px rgba(0,0,0,0.3)',
              }}
            >
              One Platform To Orchestrate Every Step Of The Patient Journey
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#FFFFFF',
                mb: 5,
                maxWidth: 620,
                mx: 'auto',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                fontWeight: 500,
                textShadow: '0 1px 10px rgba(0,0,0,0.15)',
              }}
            >
              The only platform with voice-powered AI agents and a scheduler built on clinical context and resource optimization — orchestrating the entire patient journey from referral to survivorship. Configural doesn't just automate. It thinks like a human.
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
                  fontWeight: 600,
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

          {/* Platform visualization — Journey flow cards */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Box
              sx={{
                background: 'rgba(0,0,0,0.25)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 4,
                p: { xs: 2.5, md: 4 },
              }}
            >
              {/* Top bar — simulated platform UI */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#FCA47C' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(248,250,251,0.5)' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(248,250,251,0.5)' }} />
                <Box sx={{ flex: 1, height: 28, borderRadius: 2, background: 'rgba(255,255,255,0.08)', ml: 2, display: 'flex', alignItems: 'center', px: 2 }}>
                  <Typography sx={{ fontSize: '0.7rem', color: 'rgba(248,250,251,0.8)', fontFamily: 'monospace' }}>
                    configural.ai / dashboard / patient-journey
                  </Typography>
                </Box>
              </Box>

              {/* Journey stages */}
              <Grid container spacing={1.5}>
                {[
                  { stage: 'Referral Intake', metric: '3 min', metricLabel: 'processing', iconId: 'referral' },
                  { stage: 'Smart Scheduling', metric: '100%', metricLabel: 'automated', iconId: 'scheduling' },
                  { stage: 'Active Care', metric: '24/7', metricLabel: 'monitoring', iconId: 'care' },
                  { stage: 'Patient Outreach', metric: '3x', metricLabel: 'engagement', iconId: 'outreach' },
                  { stage: 'Care Gaps', metric: '95%', metricLabel: 'closure rate', iconId: 'gaps' },
                  { stage: 'Survivorship', metric: '100%', metricLabel: 'follow-up', iconId: 'survivorship' },
                ].map((item, i) => (
                  <Grid size={{ xs: 6, sm: 4, md: 2 }} key={i}>
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      sx={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: 2.5,
                        p: 2,
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: { xs: 165, md: 'auto' },
                        '&:hover': {
                          background: 'rgba(255,255,255,0.15)',
                          borderColor: '#FCA47C',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box sx={{ mb: 0.5, display: 'flex', justifyContent: 'center' }}>
                        <HeroStageIcon iconId={item.iconId} />
                      </Box>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 0.5, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
                        {item.stage}
                      </Typography>
                      <Typography sx={{ fontFamily: '"Cormorant Garamond Variable", serif', fontSize: '1.8rem', fontWeight: 700, color: '#FCA47C', lineHeight: 1.1, textShadow: '0 1px 8px rgba(252,164,124,0.3)' }}>
                        {item.metric}
                      </Typography>
                      <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.9)', mt: 0.3, fontWeight: 500 }}>
                        {item.metricLabel}
                      </Typography>
                    </MotionBox>
                  </Grid>
                ))}
              </Grid>

              {/* Bottom status bar */}
              <Box sx={{ mt: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px rgba(74,222,128,0.5)' }} />
                  <Typography sx={{ fontSize: '0.7rem', color: 'rgba(248,250,251,0.8)' }}>
                    All systems operational
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {['Epic', 'Cerner', 'Athena', 'FHIR R4'].map(emr => (
                    <Typography key={emr} sx={{ fontSize: '0.65rem', color: 'rgba(248,250,251,0.7)', fontFamily: 'monospace', background: 'rgba(255,255,255,0.1)', px: 1.2, py: 0.4, borderRadius: 1, border: '1px solid rgba(255,255,255,0.1)' }}>
                      {emr}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* AT A GLANCE */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Bridge Diagram — Practice → Configural AI → Patient */}
                <Box
                  sx={{
                    background: '#FFFFFF',
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid rgba(9,124,135,0.1)',
                    boxShadow: '0 4px 24px rgba(9,124,135,0.08)',
                  }}
                >
                  <svg viewBox="0 0 520 380" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    <defs>
                      <filter id="hubGlow">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                      <linearGradient id="hubFill" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#097C87" /><stop offset="100%" stopColor="#044048" />
                      </linearGradient>
                      <linearGradient id="flowLeft" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#065A62" stopOpacity="0.6" /><stop offset="100%" stopColor="#097C87" stopOpacity="0.15" />
                      </linearGradient>
                      <linearGradient id="flowRight" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#097C87" stopOpacity="0.15" /><stop offset="100%" stopColor="#065A62" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <style>{`
                      @keyframes mcDash { to { stroke-dashoffset: -20; } }
                      @keyframes flowR { to { stroke-dashoffset: -16; } }
                      @keyframes flowL { to { stroke-dashoffset: 16; } }
                      @keyframes nBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
                      @keyframes nPulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
                      @keyframes nBeat { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
                      .mc-flow-r { animation: flowR 1.5s linear infinite; }
                      .mc-flow-l { animation: flowL 1.5s linear infinite; }
                      .n-bob { animation: nBob 3s ease-in-out infinite; }
                      .n-bob2 { animation: nBob 3.5s ease-in-out 0.3s infinite; }
                      .n-bob3 { animation: nBob 4s ease-in-out 0.6s infinite; }
                      .n-pulse { animation: nPulse 2s ease-in-out infinite; }
                      .n-beat { animation: nBeat 1.5s ease-in-out infinite; transform-origin: center; }
                    `}</style>

                    {/* Subtle dot grid */}
                    {Array.from({ length: 11 }).flatMap((_, r) =>
                      Array.from({ length: 14 }, (_, c) => (
                        <circle key={`g${r}-${c}`} cx={18 + c * 37} cy={15 + r * 35} r="0.6" fill="rgba(9,124,135,0.06)" />
                      ))
                    )}

                    {/* === LEFT: PRACTICE === */}
                    <g className="n-bob">
                      {/* Building icon */}
                      <rect x="28" y="140" width="60" height="80" rx="4" fill="white" stroke="rgba(9,124,135,0.2)" strokeWidth="1" />
                      <rect x="28" y="140" width="60" height="16" rx="4" fill="#097C87" opacity="0.1" />
                      {/* Cross on building */}
                      <line x1="58" y1="143" x2="58" y2="153" stroke="#097C87" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="53" y1="148" x2="63" y2="148" stroke="#097C87" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Windows */}
                      {[0,1,2].map(r => [0,1].map(c => (
                        <rect key={`w${r}${c}`} x={36 + c * 24} y={162 + r * 16} width={10} height={8} rx="1.5" fill="#097C87" opacity={0.12 + r * 0.04} />
                      )))}
                      {/* Door */}
                      <rect x="50" y="206" width="16" height="14" rx="2" fill="#097C87" opacity="0.2" />
                    </g>
                    <text x="58" y="235" textAnchor="middle" fill="#065A62" fontSize="9" fontWeight="700" fontFamily="DM Sans, sans-serif">Practice</text>
                    <text x="58" y="246" textAnchor="middle" fill="#065A62" fontSize="6.5" fontWeight="400" fontFamily="DM Sans, sans-serif">EMR · Staff · Workflows</text>

                    {/* === FLOW LINES: Practice → Configural === */}
                    <path d="M90 165 Q140 165 175 145" stroke="url(#flowLeft)" strokeWidth="2" strokeDasharray="6 4" fill="none" className="mc-flow-r" />
                    <path d="M90 185 Q150 185 185 185" stroke="url(#flowLeft)" strokeWidth="2" strokeDasharray="6 4" fill="none" className="mc-flow-r" />
                    <path d="M90 205 Q140 205 175 225" stroke="url(#flowLeft)" strokeWidth="2" strokeDasharray="6 4" fill="none" className="mc-flow-r" />

                    {/* Animated dots flowing Practice → Configural */}
                    <circle r="3" fill="#097C87" opacity="0.7">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M90,165 Q140,165 175,145" />
                    </circle>
                    <circle r="3" fill="#097C87" opacity="0.5">
                      <animateMotion dur="2s" repeatCount="indefinite" begin="0.8s" path="M90,185 Q150,185 185,185" />
                    </circle>
                    <circle r="3" fill="#097C87" opacity="0.7">
                      <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.4s" path="M90,205 Q140,205 175,225" />
                    </circle>

                    {/* === CENTER: CONFIGURAL AI HUB === */}
                    <circle cx="260" cy="185" r="58" fill="rgba(9,124,135,0.03)" />
                    <circle cx="260" cy="185" r="58" fill="none" stroke="rgba(9,124,135,0.1)" strokeWidth="1" strokeDasharray="4 3" />

                    {/* Hub circle */}
                    <circle cx="260" cy="185" r="38" fill="url(#hubFill)" filter="url(#hubGlow)" />
                    <circle cx="260" cy="185" r="38" fill="none" stroke="rgba(248,250,251,0.3)" strokeWidth="0.8" />
                    <text x="260" y="180" textAnchor="middle" fill="#F8FAFB" fontSize="10.5" fontWeight="700" fontFamily="Cormorant Garamond, serif">Configural</text>
                    <text x="260" y="193" textAnchor="middle" fill="rgba(248,250,251,0.85)" fontSize="6.5" fontWeight="500" fontFamily="DM Sans, sans-serif">AI Engine</text>

                    {/* Pulse ring */}
                    <circle cx="260" cy="185" r="38" fill="none" stroke="#097C87" strokeWidth="1" opacity="0">
                      <animate attributeName="r" values="40;62" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Agent icons orbiting around the hub */}
                    {/* Scheduling — top */}
                    <g className="n-bob">
                      <circle cx="260" cy="105" r="18" fill="white" stroke="rgba(9,124,135,0.15)" strokeWidth="1" />
                      <rect x="250" y="96" width="20" height="16" rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
                      <line x1="250" y1="101" x2="270" y2="101" stroke="#097C87" strokeWidth="1.2" />
                      <circle cx="260" cy="108" r="2" fill="#097C87" className="n-pulse" />
                      <text x="260" y="128" textAnchor="middle" fill="#065A62" fontSize="6" fontWeight="600" fontFamily="DM Sans, sans-serif">Schedule</text>
                    </g>
                    {/* Referral — top-right */}
                    <g className="n-bob2">
                      <circle cx="318" cy="140" r="18" fill="white" stroke="rgba(9,124,135,0.15)" strokeWidth="1" />
                      <rect x="308" y="132" width="14" height="16" rx="1.5" fill="none" stroke="#097C87" strokeWidth="1.2" />
                      <path d="M324 137 L329 140 L324 143" stroke="#097C87" strokeWidth="1.2" fill="none" strokeLinecap="round" className="n-pulse" />
                      <text x="318" y="163" textAnchor="middle" fill="#065A62" fontSize="6" fontWeight="600" fontFamily="DM Sans, sans-serif">Referral</text>
                    </g>
                    {/* Triage — bottom-right */}
                    <g className="n-bob3">
                      <circle cx="318" cy="230" r="18" fill="white" stroke="rgba(9,124,135,0.15)" strokeWidth="1" />
                      <path d="M307 230 L313 230 L316 224 L320 236 L324 228 L327 230 L333 230" stroke="#097C87" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                      <text x="318" y="253" textAnchor="middle" fill="#065A62" fontSize="6" fontWeight="600" fontFamily="DM Sans, sans-serif">Triage</text>
                    </g>
                    {/* Care Mgmt — bottom */}
                    <g className="n-bob">
                      <circle cx="260" cy="265" r="18" fill="white" stroke="rgba(9,124,135,0.15)" strokeWidth="1" />
                      <path d="M260 256 L269 260 L269 268 Q269 273 260 277 Q251 273 251 268 L251 260 Z" fill="none" stroke="#097C87" strokeWidth="1.1" />
                      <path d="M260 273 C257 270 254 268 254 265.5 C254 264 255.5 263 257 263 C258 263 259 264 260 265 C261 264 262 263 263 263 C264.5 263 266 264 266 265.5 C266 268 263 270 260 273Z" fill="#097C87" opacity="0.6" className="n-pulse" />
                      <text x="260" y="288" textAnchor="middle" fill="#065A62" fontSize="6" fontWeight="600" fontFamily="DM Sans, sans-serif">Care Mgmt</text>
                    </g>
                    {/* Outreach — bottom-left */}
                    <g className="n-bob2">
                      <circle cx="202" cy="230" r="18" fill="white" stroke="rgba(9,124,135,0.15)" strokeWidth="1" />
                      <rect x="193" y="224" width="13" height="10" rx="2" fill="none" stroke="#097C87" strokeWidth="1.2" />
                      <polygon points="198,234 196,238 200,234" fill="#097C87" opacity="0.5" />
                      <path d="M209 226 Q212 230 209 234" stroke="#065A62" strokeWidth="0.8" fill="none" strokeLinecap="round" className="n-pulse" />
                      <text x="202" y="253" textAnchor="middle" fill="#065A62" fontSize="6" fontWeight="600" fontFamily="DM Sans, sans-serif">Outreach</text>
                    </g>
                    {/* Analytics — top-left */}
                    <g className="n-bob3">
                      <circle cx="202" cy="140" r="18" fill="white" stroke="rgba(9,124,135,0.15)" strokeWidth="1" />
                      <rect x="194" y="142" width="4" height="8" rx="1" fill="#065A62" opacity="0.5" />
                      <rect x="200" y="138" width="4" height="12" rx="1" fill="#097C87" opacity="0.7" />
                      <rect x="206" y="134" width="4" height="16" rx="1" fill="#097C87" opacity="0.9" className="n-pulse" />
                      <text x="202" y="163" textAnchor="middle" fill="#065A62" fontSize="6" fontWeight="600" fontFamily="DM Sans, sans-serif">Analytics</text>
                    </g>

                    {/* Hub to agent connections */}
                    {[[260,147,260,108],[260,223,260,262],[222,185,202,145],[298,185,318,145],[222,185,202,228],[298,185,318,228]].map(([x1,y1,x2,y2], i) => (
                      <line key={`ha${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#097C87" strokeWidth="1" strokeDasharray="3 3" opacity="0.15" />
                    ))}

                    {/* === FLOW LINES: Configural → Patient === */}
                    <path d="M345 145 Q380 165 430 165" stroke="url(#flowRight)" strokeWidth="2" strokeDasharray="6 4" fill="none" className="mc-flow-r" />
                    <path d="M335 185 Q370 185 430 185" stroke="url(#flowRight)" strokeWidth="2" strokeDasharray="6 4" fill="none" className="mc-flow-r" />
                    <path d="M345 225 Q380 205 430 205" stroke="url(#flowRight)" strokeWidth="2" strokeDasharray="6 4" fill="none" className="mc-flow-r" />

                    {/* Animated dots flowing Configural → Patient */}
                    <circle r="3" fill="#097C87" opacity="0.7">
                      <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.3s" path="M345,145 Q380,165 430,165" />
                    </circle>
                    <circle r="3" fill="#097C87" opacity="0.5">
                      <animateMotion dur="1.8s" repeatCount="indefinite" begin="1s" path="M335,185 Q370,185 430,185" />
                    </circle>
                    <circle r="3" fill="#097C87" opacity="0.7">
                      <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.6s" path="M345,225 Q380,205 430,205" />
                    </circle>

                    {/* === RIGHT: PATIENT === */}
                    <g className="n-bob2">
                      {/* Person icon */}
                      <circle cx="462" cy="155" r="16" fill="white" stroke="rgba(9,124,135,0.2)" strokeWidth="1" />
                      {/* Head */}
                      <circle cx="462" cy="150" r="5" fill="none" stroke="#097C87" strokeWidth="1.3" />
                      {/* Body */}
                      <path d="M452 165 Q452 158 462 158 Q472 158 472 165" fill="none" stroke="#097C87" strokeWidth="1.3" strokeLinecap="round" />
                      {/* Heart beat */}
                      <circle cx="462" cy="155" r="12" fill="none" stroke="#097C87" opacity="0" strokeWidth="0.8">
                        <animate attributeName="r" values="14;22" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>
                    {/* Patient interactions */}
                    <g>
                      {/* Chat bubble */}
                      <rect x="440" y="182" width="44" height="14" rx="4" fill="white" stroke="rgba(9,124,135,0.15)" strokeWidth="0.8" />
                      <circle cx="452" cy="189" r="1.5" fill="#097C87" opacity="0.4" />
                      <circle cx="458" cy="189" r="1.5" fill="#097C87" opacity="0.6" />
                      <circle cx="464" cy="189" r="1.5" fill="#097C87" opacity="0.8" className="n-pulse" />
                      {/* Phone */}
                      <rect x="448" y="204" width="28" height="16" rx="3" fill="white" stroke="rgba(9,124,135,0.15)" strokeWidth="0.8" />
                      <circle cx="462" cy="212" r="3" fill="#097C87" opacity="0.15" />
                      <path d="M458 210 L462 214 L466 210" stroke="#097C87" strokeWidth="0.8" fill="none" strokeLinecap="round" className="n-pulse" />
                    </g>
                    <text x="462" y="235" textAnchor="middle" fill="#065A62" fontSize="9" fontWeight="700" fontFamily="DM Sans, sans-serif">Patient</text>
                    <text x="462" y="246" textAnchor="middle" fill="#065A62" fontSize="6.5" fontWeight="400" fontFamily="DM Sans, sans-serif">Engaged · Informed</text>

                    {/* Labels for flow directions */}
                    <text x="135" y="155" textAnchor="middle" fill="rgba(9,124,135,0.35)" fontSize="5.5" fontWeight="500" fontFamily="DM Sans, sans-serif">Queries · Referrals</text>
                    <text x="135" y="225" textAnchor="middle" fill="rgba(9,124,135,0.35)" fontSize="5.5" fontWeight="500" fontFamily="DM Sans, sans-serif">Tasks · Data</text>
                    <text x="388" y="155" textAnchor="middle" fill="rgba(9,124,135,0.35)" fontSize="5.5" fontWeight="500" fontFamily="DM Sans, sans-serif">Appointments</text>
                    <text x="388" y="225" textAnchor="middle" fill="rgba(9,124,135,0.35)" fontSize="5.5" fontWeight="500" fontFamily="DM Sans, sans-serif">Updates · Care</text>

                    <text x="260" y="320" textAnchor="middle" fill="rgba(9,124,135,0.35)" fontSize="7" fontWeight="500" fontFamily="DM Sans, sans-serif">Configural bridges the gap with autonomous AI agents</text>
                    <text x="260" y="335" textAnchor="middle" fill="rgba(9,124,135,0.25)" fontSize="6" fontWeight="400" fontFamily="DM Sans, sans-serif">18 agents · HL7/FHIR · 20+ EMR systems</text>
                  </svg>
                </Box>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>
                  What We Do Best
                </Typography>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Configural is powered by autonomous AI agents
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  The only AI platform built to interpret complex healthcare workflows, coordinate across 20+ EMR systems, and automate everything from scheduling to survivorship.
                </Typography>
                <Typography variant="body1">
                  Every agent shares a unified patient context. When one workflow changes, every dependent workflow adapts instantly.
                </Typography>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* AI EMPLOYEES AUTO-SCROLL */}
      <Box sx={{ background: '#044048', py: { xs: 8, md: 12 }, overflow: 'hidden', position: 'relative' }}>
        {/* Subtle grid overlay */}
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04 }}>
          <svg width="100%" height="100%"><defs><pattern id="aeGrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F8FAFB" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#aeGrid)" /></svg>
        </Box>
        <Container maxWidth="lg" sx={{ mb: 5 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography variant="overline" sx={{ color: '#FCA47C', mb: 1, display: 'block', letterSpacing: '0.2em' }}>
              AI Employees
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#F8FAFB',
                mb: 2,
                fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
              }}
            >
              Your Autonomous Healthcare Workforce
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(248,250,251,0.85)', maxWidth: 600, mx: 'auto', fontWeight: 500 }}>
              AI employees that work 24/7 — each specialized for a critical part of your operations.
            </Typography>
          </MotionBox>
        </Container>

        {/* Auto-scroll carousel */}
        <Box sx={{ position: 'relative' }}>
          {/* Fade edges */}
          <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #044048 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
          <Box sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #044048 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />

          <style>{`
            @keyframes scrollCards {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          <Box
            sx={{
              display: 'flex',
              animation: 'scrollCards 120s linear infinite',
              '&:hover': { animationPlayState: 'paused' },
              width: 'max-content',
            }}
          >
            {/* Double the cards for seamless loop */}
            {[...Array(2)].flatMap((_, setIdx) =>
              [
                {
                  title: 'AI Scheduler',
                  subtitle: 'Scheduling & Waitlist',
                  desc: 'Protocol-aware scheduling across providers, rooms, and equipment. Fills cancellations within minutes via smart waitlist resolution.',
                  stat: '85%',
                  statLabel: 'Scheduling time reduction',
                  iconId: 'scheduler',
                },
                {
                  title: 'AI Referral Coordinator',
                  subtitle: 'Referral Intake & Routing',
                  desc: 'OCR extraction, patient matching, and insurance verification in under 3 minutes. Zero referrals lost from intake to appointment.',
                  stat: '3 min',
                  statLabel: 'Referral processing',
                  iconId: 'referral',
                },
                {
                  title: 'AI Resource Optimizer',
                  subtitle: 'Rooms, Equipment & Staff',
                  desc: 'Real-time optimization of exam rooms, procedure suites, imaging equipment, and staff assignments. Maximizes utilization and eliminates conflicts.',
                  stat: '94%',
                  statLabel: 'Resource utilization rate',
                  iconId: 'resource',
                },
                {
                  title: 'AI Infusion Room Manager',
                  subtitle: 'Chair Scheduling & Flow',
                  desc: 'Dynamic infusion chair templates that adapt to treatment durations, nursing ratios, and patient acuity. Optimizes chair turnover and timing.',
                  stat: '30%',
                  statLabel: 'More patients per chair/day',
                  iconId: 'infusion',
                },
                {
                  title: 'AI Care Manager',
                  subtitle: 'Active Care & Monitoring',
                  desc: 'Real-time symptom monitoring, AI severity assessment, and proactive escalation. CCM/PCM program automation at scale.',
                  stat: '$523',
                  statLabel: 'Max CCM/PCM per patient/month',
                  iconId: 'care',
                },
                {
                  title: 'AI Patient Companion',
                  subtitle: 'Engagement & Prep',
                  desc: 'Multi-channel outreach via SMS, voice, and portal. Pre-treatment prep, appointment reminders, and no-show prevention.',
                  stat: '60%',
                  statLabel: 'No-show reduction',
                  iconId: 'companion',
                },
                {
                  title: 'AI Prior Auth Agent',
                  subtitle: 'Authorization & Appeals',
                  desc: 'Automated prior authorization submission, real-time status tracking, and denial appeal generation with clinical evidence packaging.',
                  stat: '0',
                  statLabel: 'Auth-related cancellations',
                  iconId: 'auth',
                },
                {
                  title: 'AI SDOH Navigator',
                  subtitle: 'Social Determinants & Equity',
                  desc: 'Automated SDOH screening (Z-codes), community resource matching, food/housing/transport referrals, and health equity gap tracking.',
                  stat: '100%',
                  statLabel: 'SDOH screening completion',
                  iconId: 'sdoh',
                },
                {
                  title: 'AI Triage Agent',
                  subtitle: 'Post-Treatment & Triage',
                  desc: 'AI-powered post-treatment triage with 91% first-call resolution. Automated survivorship surveillance — zero patients lost.',
                  stat: '91%',
                  statLabel: 'First-call resolution',
                  iconId: 'triage',
                },
                {
                  title: 'AI Waitlist Manager',
                  subtitle: 'Slot Recovery & Backfill',
                  desc: 'Monitors cancellations in real-time, scores waitlisted patients by urgency and fit, and fills open slots via automated outreach.',
                  stat: '92%',
                  statLabel: 'Same-day cancellation fill rate',
                  iconId: 'waitlist',
                },
                {
                  title: 'AI Survivorship Agent',
                  subtitle: 'Long-Term Follow-Up',
                  desc: 'Automated surveillance scheduling per NCCN/ASCO guidelines. Tracks imaging, labs, and symptom check-ins across years.',
                  stat: '0',
                  statLabel: 'Patients lost to follow-up',
                  iconId: 'survivorship',
                },
                {
                  title: 'AI Staff Coordinator',
                  subtitle: 'Workforce & Scheduling',
                  desc: 'Intelligent staff scheduling across locations, shift optimization based on patient volume forecasts, and credential-aware task assignment.',
                  stat: '4x',
                  statLabel: 'Coordinator throughput',
                  iconId: 'staff',
                },
                {
                  title: 'AI Insurance Verifier',
                  subtitle: 'Eligibility & Benefits',
                  desc: 'Pre-visit insurance eligibility checks, benefits verification, and coverage gap detection. Prevents claim denials before they happen.',
                  stat: '99%',
                  statLabel: 'Clean claim rate',
                  iconId: 'insurance',
                },
              ].map((agent, i) => (
                <Box
                  key={`${setIdx}-${i}`}
                  component={Link}
                  to="/agents"
                  sx={{
                    flex: '0 0 auto',
                    width: { xs: 340, md: 420 },
                    mx: 2,
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  <Box
                    sx={{
                      background: 'rgba(248,250,251,0.06)',
                      border: '1px solid rgba(248,250,251,0.12)',
                      borderRadius: 3,
                      p: 4,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(248,250,251,0.1)',
                        border: '1px solid rgba(248,250,251,0.25)',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                      },
                    }}
                  >
                    {/* Header row */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                      <Box
                        component="img"
                        src={`/faces/${agent.iconId}.jpg`}
                        alt={agent.title}
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid rgba(252,164,124,0.5)',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                          flexShrink: 0,
                        }}
                      />
                      <Box>
                        <Typography sx={{ color: '#F8FAFB', fontWeight: 700, fontSize: '1.2rem', fontFamily: '"Cormorant Garamond Variable", Georgia, serif', lineHeight: 1.2 }}>
                          {agent.title}
                        </Typography>
                        <Typography sx={{ color: '#FCA47C', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                          {agent.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography sx={{ color: 'rgba(248,250,251,0.8)', fontSize: '0.9rem', lineHeight: 1.7, mb: 3, minHeight: 80, fontWeight: 500 }}>
                      {agent.desc}
                    </Typography>

                    {/* Stat */}
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, pt: 2.5, borderTop: '1px solid rgba(248,250,251,0.08)' }}>
                      <Typography sx={{ fontFamily: '"Cormorant Garamond Variable", Georgia, serif', fontSize: '1.8rem', fontWeight: 700, color: '#FCA47C', lineHeight: 1 }}>
                        {agent.stat}
                      </Typography>
                      <Typography sx={{ color: 'rgba(248,250,251,0.7)', fontSize: '0.8rem', fontWeight: 500 }}>
                        {agent.statLabel}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))
            )}
          </Box>
        </Box>

        {/* CTA */}
        <Container maxWidth="lg" sx={{ mt: 5, textAlign: 'center' }}>
          <Button
            variant="outlined"
            component={Link}
            to="/agents"
            sx={{
              borderColor: 'rgba(248,250,251,0.3)',
              color: '#F8FAFB',
              px: 4,
              py: 1.2,
              fontWeight: 600,
              '&:hover': { borderColor: '#F8FAFB', background: 'rgba(248,250,251,0.05)' },
            }}
          >
            Meet All AI Employees →
          </Button>
        </Container>
      </Box>

      {/* END-TO-END PATIENT JOURNEY */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}>
        {/* Stacked diagonal blocks - right side */}
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', pointerEvents: 'none' }}>
          <svg viewBox="0 0 450 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMaxYMid slice">
            <style>{`
              @keyframes opShift { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
              .op-shift { animation: opShift 10s ease-in-out infinite; }
            `}</style>
            <g className="op-shift">
              <polygon points="200,0 450,0 450,140 300,200" fill="#065A62" opacity="0.22" />
              <polygon points="230,80 450,80 450,220 330,280" fill="#4D8D9C" opacity="0.18" />
              <polygon points="260,160 450,160 450,300 360,360" fill="#097C87" opacity="0.14" />
              <polygon points="180,280 450,280 450,440 300,510" fill="#FCA47C" opacity="0.16" />
              <polygon points="210,380 450,380 450,520 330,580" fill="#4D8D9C" opacity="0.14" />
              <polygon points="240,460 450,460 450,600 360,660" fill="#097C87" opacity="0.11" />
              <polygon points="180,560 450,560 450,720 300,780" fill="#065A62" opacity="0.16" />
              <polygon points="210,650 450,650 450,800 330,800" fill="#4D8D9C" opacity="0.12" />
            </g>
          </svg>
        </Box>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}
          >
            <Typography variant="overline" sx={{ mb: 2, display: 'block', color: '#097C87' }}>
              End-to-End Coverage
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#065A62',
                fontSize: { xs: '2.25rem', md: '3.5rem' },
                mb: 2,
                mx: 'auto',
                maxWidth: 700,
              }}
            >
              No delays. Fewer gaps. Everyone&apos;s connected.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, mx: 'auto', maxWidth: 600 }}>
              From the first referral to long-term survivorship, Configural AI agents orchestrate every step of the patient journey — so nothing falls through the cracks and your team can focus on what matters most.
            </Typography>
          </MotionBox>

          {/* Patient Journey — 2-row web interface cards */}
          <Box sx={{ position: 'relative' }}>
            <Grid container spacing={3}>
              {journeySteps.map((step, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={step.icon}>
                  <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    sx={{
                      background: '#FFFFFF',
                      borderRadius: 3,
                      p: 3,
                      height: '100%',
                      textAlign: 'center',
                      border: '1px solid rgba(9,124,135,0.08)',
                      boxShadow: '0 2px 12px rgba(9,124,135,0.06)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 30px rgba(9,124,135,0.12)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    {/* Step number badge */}
                    <Typography sx={{
                      fontFamily: '"DM Sans Variable", sans-serif',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#097C87',
                      mb: 2,
                      opacity: 0.7,
                    }}>
                      Step {String(i + 1).padStart(2, '0')}
                    </Typography>

                    {/* Animated illustration */}
                    <Box sx={{ width: 140, height: 120, mx: 'auto', mb: 2 }}>
                      {step.icon === 'referral' && (
                        <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                          <style>{`
                            @keyframes jrFloat0 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                            @keyframes jrScan { 0%,100% { transform: translateY(0); opacity: 0.4; } 50% { transform: translateY(40px); opacity: 0.8; } }
                            .jr-float0 { animation: jrFloat0 3s ease-in-out infinite; }
                            .jr-scan { animation: jrScan 2.5s ease-in-out infinite; }
                          `}</style>
                          <ellipse cx="70" cy="112" rx="45" ry="6" fill="rgba(9,124,135,0.08)" />
                          <g className="jr-float0">
                            {/* Fax/document */}
                            <rect x="30" y="15" width="55" height="75" rx="4" fill="#F8FAFB" stroke="#065A62" strokeWidth="1" />
                            <rect x="40" y="28" width="35" height="4" rx="2" fill="#097C87" opacity="0.2" />
                            <rect x="40" y="36" width="28" height="4" rx="2" fill="#097C87" opacity="0.15" />
                            <rect x="40" y="44" width="32" height="4" rx="2" fill="#097C87" opacity="0.2" />
                            <rect x="40" y="52" width="20" height="4" rx="2" fill="#097C87" opacity="0.15" />
                            <rect x="40" y="60" width="35" height="4" rx="2" fill="#097C87" opacity="0.1" />
                            {/* Scan line */}
                            <rect x="32" y="28" width="51" height="2" rx="1" fill="#097C87" className="jr-scan" />
                            {/* Checkmark badge */}
                            <circle cx="95" cy="30" r="14" fill="#097C87" opacity="0.85" />
                            <path d="M88 30 L93 35 L102 25" stroke="#F8FAFB" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </svg>
                      )}
                      {step.icon === 'consult' && (
                        <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                          <style>{`
                            @keyframes jcFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
                            @keyframes jcPulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
                            .jc-float { animation: jcFloat 3.5s ease-in-out infinite; }
                            .jc-pulse { animation: jcPulse 2s ease-in-out infinite; }
                          `}</style>
                          <ellipse cx="70" cy="112" rx="45" ry="6" fill="rgba(9,124,135,0.08)" />
                          <g className="jc-float">
                            {/* Doctor silhouette */}
                            <circle cx="52" cy="35" r="12" fill="#065A62" opacity="0.7" />
                            <ellipse cx="52" cy="70" rx="18" ry="22" fill="#065A62" opacity="0.5" />
                            <circle cx="52" cy="35" r="8" fill="#F8FAFB" />
                            {/* Stethoscope hint */}
                            <circle cx="52" cy="35" r="3" fill="#097C87" opacity="0.6" />
                            {/* Patient silhouette */}
                            <circle cx="92" cy="40" r="10" fill="#FCA47C" opacity="0.7" />
                            <ellipse cx="92" cy="72" rx="15" ry="18" fill="#FCA47C" opacity="0.5" />
                            <circle cx="92" cy="40" r="6" fill="#F8FAFB" />
                            {/* Connection pulse */}
                            <line x1="62" y1="45" x2="82" y2="48" stroke="#097C87" strokeWidth="2" strokeDasharray="4 3" className="jc-pulse" />
                            <circle cx="72" cy="46" r="4" fill="#097C87" className="jc-pulse" opacity="0.6" />
                          </g>
                        </svg>
                      )}
                      {step.icon === 'planning' && (
                        <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                          <style>{`
                            @keyframes jpFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                            @keyframes jpFill { 0%,100% { width: 0; } 50% { width: 30px; } }
                            @keyframes jpGlow { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
                            .jp-float { animation: jpFloat 4s ease-in-out infinite; }
                            .jp-glow { animation: jpGlow 2s ease-in-out infinite; }
                          `}</style>
                          <ellipse cx="70" cy="112" rx="45" ry="6" fill="rgba(9,124,135,0.08)" />
                          <g className="jp-float">
                            {/* Calendar/planner */}
                            <rect x="25" y="20" width="90" height="70" rx="5" fill="#F8FAFB" stroke="#065A62" strokeWidth="1" />
                            <rect x="25" y="20" width="90" height="18" rx="5" fill="#097C87" />
                            <rect x="25" y="33" width="90" height="5" fill="#097C87" />
                            {/* Calendar dots */}
                            {[0,1,2,3].map(c => [0,1,2].map(r => (
                              <rect key={`${r}-${c}`} x={35 + c * 20} y={46 + r * 14} width={14} height={9} rx={2}
                                fill={r === 0 && c === 1 ? '#097C87' : r === 1 && c === 2 ? '#097C87' : '#065A62'}
                                opacity={r === 0 && c === 1 ? 0.7 : r === 1 && c === 2 ? 0.5 : 0.15}
                                className={(r === 0 && c === 1) || (r === 1 && c === 2) ? 'jp-glow' : undefined}
                              />
                            )))}
                            {/* Top tabs */}
                            <rect x="45" y="14" width="4" height="12" rx="2" fill="#065A62" />
                            <rect x="70" y="14" width="4" height="12" rx="2" fill="#065A62" />
                            <rect x="95" y="14" width="4" height="12" rx="2" fill="#065A62" />
                          </g>
                        </svg>
                      )}
                      {step.icon === 'care' && (
                        <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                          <style>{`
                            @keyframes jaFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
                            @keyframes jaDash { 0% { stroke-dashoffset: 60; } 100% { stroke-dashoffset: -60; } }
                            @keyframes jaBeat { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
                            .ja-float { animation: jaFloat 3.5s ease-in-out infinite; }
                            .ja-dash { animation: jaDash 2.5s linear infinite; }
                            .ja-beat { animation: jaBeat 1.3s ease-in-out infinite; transform-origin: 70px 45px; }
                          `}</style>
                          <ellipse cx="70" cy="112" rx="45" ry="6" fill="rgba(9,124,135,0.08)" />
                          <g className="ja-float">
                            {/* Monitor screen */}
                            <rect x="25" y="15" width="90" height="60" rx="6" fill="#F8FAFB" stroke="#065A62" strokeWidth="1" />
                            {/* Heartbeat line */}
                            <path d="M35 50 L50 50 L55 35 L62 60 L68 42 L74 50 L125 50" stroke="#097C87" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="60" className="ja-dash" />
                            {/* Cross icon */}
                            <g className="ja-beat">
                              <circle cx="70" cy="45" r="10" fill="#097C87" opacity="0.15" />
                            </g>
                            {/* Monitor stand */}
                            <rect x="60" y="75" width="20" height="5" rx="1" fill="#065A62" opacity="0.5" />
                            <rect x="50" y="80" width="40" height="4" rx="2" fill="#065A62" opacity="0.3" />
                            {/* Status dots */}
                            <circle cx="38" cy="25" r="3" fill="#097C87" opacity="0.6" />
                            <circle cx="48" cy="25" r="3" fill="#065A62" opacity="0.4" />
                            <circle cx="58" cy="25" r="3" fill="#FCA47C" opacity="0.4" />
                          </g>
                        </svg>
                      )}
                      {step.icon === 'post' && (
                        <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                          <style>{`
                            @keyframes jptFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
                            @keyframes jptCheck { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
                            .jpt-float { animation: jptFloat 3.8s ease-in-out infinite; }
                            .jpt-check { animation: jptCheck 2s ease-in-out infinite; }
                          `}</style>
                          <ellipse cx="70" cy="112" rx="45" ry="6" fill="rgba(9,124,135,0.08)" />
                          <g className="jpt-float">
                            {/* Clipboard */}
                            <rect x="35" y="18" width="70" height="80" rx="5" fill="#F8FAFB" stroke="#065A62" strokeWidth="1" />
                            <rect x="55" y="12" width="30" height="12" rx="3" fill="#097C87" />
                            {/* Checklist items */}
                            {[0,1,2,3].map(r => (
                              <g key={r}>
                                <rect x={46} y={38 + r * 16} width={12} height={10} rx={2} fill={r < 3 ? '#097C87' : '#065A62'} opacity={r < 3 ? 0.7 : 0.2} className={r === 2 ? 'jpt-check' : undefined} />
                                {r < 3 && <path d={`M${49} ${43 + r * 16} l3 3 5-5`} stroke="#F8FAFB" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
                                <rect x={64} y={40 + r * 16} width={30} height={4} rx={2} fill="#097C87" opacity={0.12} />
                              </g>
                            ))}
                          </g>
                        </svg>
                      )}
                      {step.icon === 'survivor' && (
                        <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                          <style>{`
                            @keyframes jsFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                            @keyframes jsRay { 0%,100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.1); } }
                            @keyframes jsBeat { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
                            .js-float { animation: jsFloat 4s ease-in-out infinite; }
                            .js-ray { animation: jsRay 3s ease-in-out infinite; transform-origin: 70px 55px; }
                            .js-beat { animation: jsBeat 1.5s ease-in-out infinite; transform-origin: 70px 55px; }
                          `}</style>
                          <ellipse cx="70" cy="112" rx="45" ry="6" fill="rgba(9,124,135,0.08)" />
                          <g className="js-float">
                            {/* Radiance rays */}
                            <g className="js-ray">
                              <line x1="70" y1="18" x2="70" y2="28" stroke="#065A62" strokeWidth="2" strokeLinecap="round" />
                              <line x1="40" y1="30" x2="48" y2="38" stroke="#065A62" strokeWidth="2" strokeLinecap="round" />
                              <line x1="100" y1="30" x2="92" y2="38" stroke="#065A62" strokeWidth="2" strokeLinecap="round" />
                              <line x1="28" y1="55" x2="38" y2="55" stroke="#065A62" strokeWidth="2" strokeLinecap="round" />
                              <line x1="112" y1="55" x2="102" y2="55" stroke="#065A62" strokeWidth="2" strokeLinecap="round" />
                            </g>
                            {/* Heart */}
                            <g className="js-beat">
                              <path d="M70 82 C55 68 35 58 35 45 C35 34 44 27 55 27 C62 27 66 32 70 36 C74 32 78 27 85 27 C96 27 105 34 105 45 C105 58 85 68 70 82Z" fill="#097C87" opacity="0.75" />
                              <path d="M60 52 L67 59 L82 44" stroke="#F8FAFB" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            {/* Person silhouette */}
                            <circle cx="70" cy="92" r="4" fill="#065A62" opacity="0.4" />
                            <ellipse cx="70" cy="102" rx="8" ry="6" fill="#065A62" opacity="0.3" />
                          </g>
                        </svg>
                      )}
                    </Box>

                    {/* Title */}
                    <Typography variant="h4" sx={{ fontSize: '1.25rem', mb: 1 }}>
                      {step.label.replace('\n', ' ')}
                    </Typography>

                    {/* Description */}
                    <Typography variant="body2" sx={{ color: '#065A62', maxWidth: 280, mx: 'auto' }}>
                      {step.desc}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* TESTIMONIAL */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>
              Testimonials
            </Typography>
            <Typography variant="h2" sx={{ mb: 2 }}>
              What our customers say
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, maxWidth: 480 }}>
              They&apos;re improving quality, moving faster, and freeing up their teams.
            </Typography>
          </MotionBox>

          <Grid container spacing={3}>
            {[
              {
                quote: 'Configural transformed how our entire practice operates. We went from drowning in admin work to actually having time for patients.',
                name: 'Dr. Emily Thornton',
                title: 'Medical Director, Multi-Specialty Oncology',
              },
              {
                quote: 'The scheduling automation alone saved us 4 FTEs. The AI agents handle complex multi-resource coordination that used to take hours.',
                name: 'James Chen',
                title: 'VP Operations, Regional Health Network',
              },
              {
                quote: 'Zero referrals lost since implementation. The 3-minute processing time for referrals is a game-changer for our intake team.',
                name: 'Amy Williams',
                title: 'Director of Patient Access',
              },
            ].map((t, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <GlowCard delay={i * 0.1} sx={{ height: '100%' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                      fontSize: '1.15rem',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      color: '#065A62',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 500, mb: 0.25 }}>
                    {t.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#065A62', fontSize: '0.85rem' }}>
                    {t.title}
                  </Typography>
                </GlowCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* RESULTS */}
      <SectionWrapper
        dark
        overline="Measurable Impact"
        title="Results that speak for themselves"
        subtitle="Configural delivers measurable outcomes across clinical quality, operational efficiency, and revenue generation."
      >
        <Grid container spacing={3}>
          {results.map((stat, i) => (
            <Grid size={{ xs: 6, md: 4 }} key={i}>
              <GlowCard delay={i * 0.08}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#097C87',
                    fontWeight: 300,
                    mb: 1,
                    fontSize: { xs: '2rem', md: '2.75rem' },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </GlowCard>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* THINGS CONFIGURAL CAN DO — FAQ */}
      <Box sx={{ background: '#044048', py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03 }}>
          <svg width="100%" height="100%"><defs><pattern id="faqGrid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F8FAFB" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#faqGrid)" /></svg>
        </Box>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center', mb: 6 }}
          >
            <Typography variant="overline" sx={{ color: '#FCA47C', mb: 1, display: 'block', letterSpacing: '0.2em' }}>
              What Can Configural Do?
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#F8FAFB',
                mb: 2,
                fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
              }}
            >
              The Platform That Thinks Like a Human
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(248,250,251,0.8)', maxWidth: 600, mx: 'auto' }}>
              We do the hard work so you can relax and run your practice smoothly.
            </Typography>
          </MotionBox>

          {[
            {
              q: 'Can Configural coordinate a surgery across multiple practices and scheduling systems?',
              a: 'Yes. For a breast surgery case, the AI calls the radiology practice to book pre-surgery localization, calls the hospital OR to reserve the operating room and anesthesia team, and calls the plastic surgeon\'s office to book a reconstructive consult — sequencing everything correctly. The patient receives one consolidated prep guide covering all appointments at all locations.',
            },
            {
              q: 'What happens when a physician has an emergency day off?',
              a: 'Configural automatically detects the disruption and coordinates every schedule change — rebooking by clinical urgency, notifying patients via SMS, voice, and portal, reallocating resources across remaining providers, and adjusting downstream lab orders and imaging. Your staff doesn\'t lift a finger.',
            },
            {
              q: 'Can the AI voice agent handle patient phone calls and schedule appointments?',
              a: 'Yes. Configural\'s AI voice agent answers calls, identifies patients, pulls their full clinical context, and offers available slots conversationally. For simple requests it books end-to-end with no human. For complex cases like chemo rescheduling, it automatically escalates to your scheduling team with full context.',
            },
            {
              q: 'Can it analyze historical data to find scheduling gaps and recommend changes?',
              a: 'Yes. Our AI/ML analytics platform comes prebuilt with every KPI to track practice efficiency. Pre-trained models detect inefficiencies — underutilized slots, provider template mismatches, peak bottlenecks — and recommend specific changes including template adjustments, resource constraint alerts, and no-show prediction 48 hours in advance.',
            },
          ].map((faq, i) => (
            <MotionBox
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Accordion
                sx={{
                  background: 'rgba(248,250,251,0.06)',
                  border: '1px solid rgba(248,250,251,0.12)',
                  borderRadius: '12px !important',
                  mb: 2,
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    background: 'rgba(248,250,251,0.1)',
                    border: '1px solid rgba(252,164,124,0.3)',
                  },
                }}
                disableGutters
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#FCA47C' }} />}
                  sx={{ px: 3, py: 1.5 }}
                >
                  <Typography sx={{ color: '#F8FAFB', fontWeight: 600, fontSize: '1.05rem', lineHeight: 1.5 }}>
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography sx={{ color: 'rgba(248,250,251,0.8)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 500 }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionBox>
          ))}

          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              component={Link}
              to="/what-we-can-do"
              sx={{
                borderColor: 'rgba(248,250,251,0.3)',
                color: '#F8FAFB',
                px: 4,
                py: 1.2,
                fontWeight: 600,
                '&:hover': { borderColor: '#FCA47C', background: 'rgba(252,164,124,0.08)' },
              }}
            >
              See Everything Configural Can Do →
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SECURITY */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}>
        {/* Stacked diagonal blocks - bottom-left corner */}
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '35%', height: '100%', pointerEvents: 'none' }}>
          <svg viewBox="0 0 350 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMinYMax slice">
            <style>{`
              @keyframes secShift { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
              .sec-shift { animation: secShift 9s ease-in-out infinite; }
            `}</style>
            <g className="sec-shift">
              <polygon points="0,200 150,200 200,280 0,360" fill="#065A62" opacity="0.18" />
              <polygon points="0,260 130,260 180,340 0,420" fill="#4D8D9C" opacity="0.15" />
              <polygon points="0,320 110,320 160,400 0,480" fill="#097C87" opacity="0.1" />
              <polygon points="0,380 90,380 140,460 0,500" fill="#FCA47C" opacity="0.14" />
            </g>
          </svg>
        </Box>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>
                  Enterprise Grade
                </Typography>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Built for healthcare. Secured for enterprise.
                </Typography>
                <Typography variant="body1">
                  HIPAA-compliant, SOC 2 certified, and built with the security standards your practice demands. End-to-end encryption, BAA agreements, and comprehensive audit logging.
                </Typography>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2}>
                {[
                  { label: 'HIPAA Compliant', sub: 'Full BAA coverage' },
                  { label: 'SOC 2', sub: 'Independent verification' },
                  { label: 'HL7/FHIR Native', sub: '20+ EMR integrations' },
                  { label: '99.99% Uptime', sub: 'Automated failover' },
                ].map((item, i) => (
                  <Grid size={{ xs: 6 }} key={i}>
                    <GlowCard delay={i * 0.1}>
                      <Typography variant="h6" sx={{ color: '#065A62', mb: 0.5 }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                        {item.sub}
                      </Typography>
                    </GlowCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* INTEGRATIONS MARQUEE */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#FFFFFF', overflow: 'hidden' }}>
        <Container maxWidth="lg" sx={{ mb: 5 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: '#097C87', display: 'block', mb: 2 }}>
              Integrations
            </Typography>
            <Typography variant="h2" sx={{ color: '#065A62', mb: 1.5 }}>
              Designed to work with{' '}
              <Box component="span" sx={{ color: '#065A62' }}>your existing systems</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#065A62', maxWidth: 600, mx: 'auto' }}>
              Epic, Cerner, athenahealth, Salesforce — no rip-and-replace. We integrate with the tools you already use.
            </Typography>
          </Box>
        </Container>

        {/* Row 1 - scrolls left */}
        <Box sx={{ position: 'relative', mb: 2 }}>
          <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 2, background: 'linear-gradient(90deg, #FFFFFF 0%, transparent 100%)', pointerEvents: 'none' }} />
          <Box sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 2, background: 'linear-gradient(270deg, #FFFFFF 0%, transparent 100%)', pointerEvents: 'none' }} />
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              animation: 'marqueeLeft 45s linear infinite',
              width: 'max-content',
              '@keyframes marqueeLeft': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
            }}
          >
            {[...Array(2)].map((_, setIdx) => (
              [
                { name: 'Epic', category: 'EMR', color: '#E11F26' },
                { name: 'Cerner', category: 'EMR', color: '#1B7F8D' },
                { name: 'athenahealth', category: 'EMR', color: '#6B2D8B' },
                { name: 'MEDITECH', category: 'EMR', color: '#003B71' },
                { name: 'NextGen', category: 'EMR', color: '#00A5B5' },
                { name: 'eClinicalWorks', category: 'EMR', color: '#2E7D32' },
                { name: 'Allscripts', category: 'EMR', color: '#ED6C02' },
                { name: 'DrChrono', category: 'EMR', color: '#2196F3' },
                { name: 'Greenway', category: 'EMR', color: '#388E3C' },
                { name: 'Veradigm', category: 'EMR', color: '#0D47A1' },
                { name: 'Oracle Health', category: 'EMR', color: '#C74634' },
                { name: 'ModMed', category: 'EMR', color: '#FF6F00' },
              ].map((item, i) => (
                <Box
                  key={`r1-${setIdx}-${i}`}
                  sx={{
                    flexShrink: 0,
                    py: 1.8,
                    px: 2.5,
                    borderRadius: 2,
                    border: '1px solid rgba(9,124,135,0.08)',
                    background: '#FAFEFE',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.2,
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    '&:hover': { borderColor: 'rgba(9,124,135,0.25)', boxShadow: '0 2px 8px rgba(9,124,135,0.08)' },
                  }}
                >
                  <Box sx={{
                    width: 28, height: 28, borderRadius: 1, background: `${item.color}14`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: item.color, opacity: 0.7 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', color: '#065A62', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: '0.6rem', color: '#065A62', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.4 }}>
                      {item.category}
                    </Typography>
                  </Box>
                </Box>
              ))
            ))}
          </Box>
        </Box>

        {/* Row 2 - scrolls right */}
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 2, background: 'linear-gradient(90deg, #FFFFFF 0%, transparent 100%)', pointerEvents: 'none' }} />
          <Box sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 2, background: 'linear-gradient(270deg, #FFFFFF 0%, transparent 100%)', pointerEvents: 'none' }} />
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              animation: 'marqueeRight 40s linear infinite',
              width: 'max-content',
              '@keyframes marqueeRight': {
                '0%': { transform: 'translateX(-50%)' },
                '100%': { transform: 'translateX(0)' },
              },
            }}
          >
            {[...Array(2)].map((_, setIdx) => (
              [
                { name: 'Salesforce', category: 'CRM', icon: 'https://cdn.simpleicons.org/salesforce/00A1E0', color: '#00A1E0' },
                { name: 'Microsoft 365', category: 'PRODUCTIVITY', icon: 'https://cdn.simpleicons.org/microsoft/5E5E5E', color: '#F25022' },
                { name: 'Twilio', category: 'VOICE', icon: 'https://cdn.simpleicons.org/twilio/F22F46', color: '#F22F46' },
                { name: 'AWS', category: 'CLOUD', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900', color: '#FF9900' },
                { name: 'Google Cloud', category: 'CLOUD', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4', color: '#4285F4' },
                { name: 'Snowflake', category: 'DATA', icon: 'https://cdn.simpleicons.org/snowflake/29B5E8', color: '#29B5E8' },
                { name: 'Tableau', category: 'ANALYTICS', icon: 'https://cdn.simpleicons.org/tableau/E97627', color: '#E97627' },
                { name: 'Power BI', category: 'ANALYTICS', icon: 'https://cdn.simpleicons.org/powerbi/F2C811', color: '#F2C811' },
                { name: 'Slack', category: 'MESSAGING', icon: 'https://cdn.simpleicons.org/slack/4A154B', color: '#4A154B' },
                { name: 'Jira', category: 'WORKFLOW', icon: 'https://cdn.simpleicons.org/jira/0052CC', color: '#0052CC' },
                { name: 'Zoom', category: 'VOICE', icon: 'https://cdn.simpleicons.org/zoom/0B5CFF', color: '#0B5CFF' },
                { name: 'Teams', category: 'MESSAGING', icon: 'https://cdn.simpleicons.org/microsoftteams/6264A7', color: '#6264A7' },
              ].map((item, i) => (
                <Box
                  key={`r2-${setIdx}-${i}`}
                  sx={{
                    flexShrink: 0,
                    py: 1.8,
                    px: 2.5,
                    borderRadius: 2,
                    border: '1px solid rgba(9,124,135,0.08)',
                    background: '#FAFEFE',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.2,
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    '&:hover': { borderColor: 'rgba(9,124,135,0.25)', boxShadow: '0 2px 8px rgba(9,124,135,0.08)' },
                    '&:hover img': { filter: 'grayscale(0%) opacity(1)' },
                  }}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.name}
                    sx={{
                      width: 24,
                      height: 24,
                      objectFit: 'contain',
                      filter: 'grayscale(100%) opacity(0.45)',
                      transition: 'filter 0.3s',
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', color: '#065A62', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: '0.6rem', color: '#065A62', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.4 }}>
                      {item.category}
                    </Typography>
                  </Box>
                </Box>
              ))
            ))}
          </Box>
        </Box>
      </Box>

      {/* FINAL CTA */}
      <Box
        sx={{
          background: '#097C87',
          py: { xs: 10, md: 16 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Stacked diagonal blocks on CTA */}
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', pointerEvents: 'none' }}>
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMaxYMid slice">
            <style>{`
              @keyframes ctaShift { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
              .cta-shift { animation: ctaShift 7s ease-in-out infinite; }
            `}</style>
            <g className="cta-shift">
              <polygon points="200,0 400,0 400,100 280,150" fill="#F8FAFB" opacity="0.12" />
              <polygon points="220,60 400,60 400,160 300,210" fill="#FCA47C" opacity="0.1" />
              <polygon points="240,120 400,120 400,220 320,270" fill="#065A62" opacity="0.08" />
              <polygon points="180,200 400,200 400,320 280,370" fill="#F8FAFB" opacity="0.1" />
              <polygon points="200,270 400,270 400,400 300,400" fill="#FCA47C" opacity="0.08" />
            </g>
          </svg>
        </Box>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    color: '#F8FAFB',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    mb: 3,
                  }}
                >
                  No backlog, no bottlenecks — just growth
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
                    fontWeight: 600,
                    '&:hover': {
                      background: '#FFFFFF',
                    },
                  }}
                >
                  Get Started
                </Button>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
