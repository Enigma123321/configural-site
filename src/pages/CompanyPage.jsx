import {
  Box, Container, Typography, Grid, Chip, Button, Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import GlowCard from '../components/GlowCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SecurityIcon from '@mui/icons-material/Security';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CampaignIcon from '@mui/icons-material/Campaign';
import EmailIcon from '@mui/icons-material/Email';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

const stats = [
  { value: '100+', label: 'Years Combined Healthcare Experience' },
  { value: '10+', label: 'EMR Systems Expertise' },
  { value: '15+', label: 'Specialties Hands-On Experience' },
  { value: '100%', label: 'Customer Focused Commitment' },
];

const expertiseAreas = [
  {
    title: 'Healthcare Operations',
    icon: <LocalHospitalIcon sx={{ fontSize: 28, color: '#097C87' }} />,
    items: [
      'EMR implementations experience',
      'Practice management across specialties',
      'Revenue cycle optimization',
      'Clinical workflow design',
      'Quality metrics and compliance',
    ],
  },
  {
    title: 'Interoperability Experts',
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 28, color: '#097C87' }} />,
    items: [
      'HL7 and FHIR standards expertise',
      'Complex integration architectures',
      'Real-time data synchronization',
      'Multi-system orchestration',
      'Security and HIPAA compliance',
    ],
  },
  {
    title: 'AI & Enterprise Technology',
    icon: <PsychologyIcon sx={{ fontSize: 28, color: '#097C87' }} />,
    items: [
      'Advanced AI and machine learning',
      'Enterprise application architecture',
      'Scalable cloud infrastructure',
      'Natural language processing',
      'Intelligent automation systems',
    ],
  },
];

const trustReasons = [
  { icon: <SecurityIcon sx={{ fontSize: 24, color: '#097C87' }} />, title: 'Proven Track Record', desc: 'Deep experience in healthcare workflows, from clinical operations to revenue cycle management.' },
  { icon: <HandshakeIcon sx={{ fontSize: 24, color: '#097C87' }} />, title: 'Industry Relationships', desc: 'Strong partnerships with EMR vendors and healthcare technology ecosystem leaders.' },
  { icon: <EmojiEventsIcon sx={{ fontSize: 24, color: '#097C87' }} />, title: 'Recognized Excellence', desc: 'Industry conference speakers and thought leaders in healthcare AI and automation.' },
  { icon: <CampaignIcon sx={{ fontSize: 24, color: '#097C87' }} />, title: 'Partner Approach', desc: 'We treat every client relationship as a partnership, invested in your long-term success.' },
];

const healthcareRoles = [
  'Nurses',
  'Nurse Navigators',
  'Clinical Specialists',
];

const techRoles = [
  'Software Engineers',
  'AI/ML Specialists',
  'Full Stack Developers',
];

export default function CompanyPage() {
  return (
    <Box>
      <SEO
        title="About Configural — Healthcare AI Company"
        description="Configural is built by healthcare operators with 100+ years of combined experience in EMR systems, interoperability, and AI. Transforming healthcare operations at scale."
        keywords="Configural company, healthcare AI startup, healthcare technology company, healthcare operations experts, FHIR interoperability experts"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Configural",
          "url": "https://configural-site.onrender.com",
          "description": "AI-native platform that orchestrates the entire patient journey with autonomous AI employees for healthcare operations.",
          "foundingDate": "2024",
          "knowsAbout": ["Healthcare Operations", "Medical AI", "EMR Integration", "FHIR Interoperability", "HIPAA Compliance"],
          "sameAs": []
        }}
      />
      {/* HERO */}
      <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 14 }, background: 'linear-gradient(135deg, #065A62 0%, #097C87 50%, #044048 100%)', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Chip
              label="Our Company"
              sx={{ mb: 2, background: 'rgba(248,250,251,0.12)', border: '1px solid rgba(248,250,251,0.25)', color: '#F8FAFB', fontWeight: 500, py: 2, px: 1 }}
            />
            <Typography variant="h1" style={{ color: '#FFFFFF' }} sx={{ mb: 2 }}>
              Leadership with Proven Healthcare Expertise
            </Typography>
            <Typography variant="body1" style={{ color: 'rgba(255,255,255,0.9)' }} sx={{ fontSize: '1.15rem', maxWidth: 700, mx: 'auto', mb: 5 }}>
              Our management team brings together unparalleled healthcare experience and cutting-edge AI expertise to revolutionize care coordination.
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {stats.map((s, i) => (
                <Grid size={{ xs: 6, sm: 3 }} key={i}>
                  <Typography sx={{ fontFamily: '"Cormorant Garamond Variable", serif', fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 400, color: '#FFFFFF' }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'rgba(248,250,251,0.7)', fontWeight: 500, lineHeight: 1.4 }}>
                    {s.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CORE EXPERTISE */}
      <SectionWrapper
        overline="Core Expertise"
        title="What We Bring to the Table"
        subtitle="Three pillars of expertise that make Configural uniquely qualified to transform healthcare operations."
        sx={{ background: '#FFFFFF' }}
      >
        <Grid container spacing={4}>
          {expertiseAreas.map((area, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={area.title}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                sx={{
                  background: '#FFFFFF',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid rgba(9,124,135,0.08)',
                  boxShadow: '0 4px 20px rgba(9,124,135,0.06)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(9,124,135,0.12)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Animated SVG illustration header */}
                <Box sx={{ background: '#065A62', px: 3, py: 4, position: 'relative', overflow: 'hidden' }}>
                  {/* Decorative bg circles */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-30%',
                      right: '-15%',
                      width: '60%',
                      height: '160%',
                      background: 'radial-gradient(circle, rgba(107,163,176,0.12) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />
                  {i === 0 && (
                    /* Healthcare Operations — EMR/Hospital icon animation */
                    <svg viewBox="0 0 320 120" width="100%" height="120" style={{ display: 'block' }} role="img" aria-label="Healthcare operations diagram showing EMR systems connected to a central hospital hub with workflow nodes">
                      <defs>
                        <style>{`
                          @keyframes pulse0 { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
                          @keyframes slideR { 0%,100% { transform: translateX(0); } 50% { transform: translateX(6px); } }
                          .hc-pulse { animation: pulse0 3s ease-in-out infinite; }
                          .hc-slide { animation: slideR 4s ease-in-out infinite; }
                        `}</style>
                      </defs>
                      {/* Central hospital cross */}
                      <rect x="130" y="20" width="60" height="80" rx="8" fill="none" stroke="#F8FAFB" strokeWidth="1.5" opacity="0.6" />
                      <rect x="148" y="35" width="24" height="8" rx="2" fill="#F8FAFB" className="hc-pulse" />
                      <rect x="156" y="27" width="8" height="24" rx="2" fill="#F8FAFB" className="hc-pulse" />
                      {/* EMR screens left */}
                      <rect x="20" y="30" width="50" height="35" rx="4" fill="none" stroke="#FCA47C" strokeWidth="1" opacity="0.7" />
                      <rect x="26" y="36" width="20" height="3" rx="1" fill="#F8FAFB" opacity="0.6" />
                      <rect x="26" y="42" width="30" height="3" rx="1" fill="#F8FAFB" opacity="0.4" />
                      <rect x="26" y="48" width="15" height="3" rx="1" fill="#F8FAFB" opacity="0.3" />
                      {/* Connection line left */}
                      <line x1="70" y1="48" x2="130" y2="60" stroke="#FCA47C" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" className="hc-slide" />
                      {/* EMR screens right */}
                      <rect x="250" y="30" width="50" height="35" rx="4" fill="none" stroke="#FCA47C" strokeWidth="1" opacity="0.7" />
                      <rect x="256" y="36" width="20" height="3" rx="1" fill="#F8FAFB" opacity="0.6" />
                      <rect x="256" y="42" width="30" height="3" rx="1" fill="#F8FAFB" opacity="0.4" />
                      <rect x="256" y="48" width="15" height="3" rx="1" fill="#F8FAFB" opacity="0.3" />
                      {/* Connection line right */}
                      <line x1="250" y1="48" x2="190" y2="60" stroke="#FCA47C" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" className="hc-slide" />
                      {/* Workflow nodes bottom */}
                      <circle cx="100" cy="95" r="8" fill="none" stroke="#FCA47C" strokeWidth="1" opacity="0.7" />
                      <circle cx="160" cy="108" r="6" fill="#097C87" opacity="0.6" className="hc-pulse" />
                      <circle cx="220" cy="95" r="8" fill="none" stroke="#FCA47C" strokeWidth="1" opacity="0.7" />
                      <line x1="108" y1="95" x2="152" y2="105" stroke="#FCA47C" strokeWidth="0.8" opacity="0.5" />
                      <line x1="168" y1="105" x2="212" y2="95" stroke="#FCA47C" strokeWidth="0.8" opacity="0.5" />
                    </svg>
                  )}
                  {i === 1 && (
                    /* Interoperability — data flow / integration animation */
                    <svg viewBox="0 0 320 120" width="100%" height="120" style={{ display: 'block' }} role="img" aria-label="Interoperability diagram showing Epic, Cerner, and Athena EMR systems connected through a central FHIR hub to scheduling, analytics, and outreach">
                      <defs>
                        <style>{`
                          @keyframes flowDots { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -30; } }
                          @keyframes nodeGlow { 0%,100% { r: 10; opacity: 0.5; } 50% { r: 12; opacity: 0.8; } }
                          .flow-line { animation: flowDots 3s linear infinite; }
                          .node-glow { animation: nodeGlow 2.5s ease-in-out infinite; }
                        `}</style>
                      </defs>
                      {/* Left system nodes */}
                      <rect x="15" y="20" width="55" height="28" rx="6" fill="none" stroke="#F8FAFB" strokeWidth="1" opacity="0.6" />
                      <text x="42" y="38" textAnchor="middle" fill="#F8FAFB" fontSize="8" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Epic</text>
                      <rect x="15" y="58" width="55" height="28" rx="6" fill="none" stroke="#F8FAFB" strokeWidth="1" opacity="0.6" />
                      <text x="42" y="76" textAnchor="middle" fill="#F8FAFB" fontSize="8" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Cerner</text>
                      <rect x="15" y="88" width="55" height="28" rx="6" fill="none" stroke="#F8FAFB" strokeWidth="1" opacity="0.5" />
                      <text x="42" y="106" textAnchor="middle" fill="#F8FAFB" fontSize="8" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Athena</text>
                      {/* Center hub */}
                      <circle cx="160" cy="60" r="24" fill="#097C87" opacity="0.6" />
                      <circle cx="160" cy="60" className="node-glow" fill="none" stroke="#F8FAFB" strokeWidth="1.5" />
                      <text x="160" y="56" textAnchor="middle" fill="#F8FAFB" fontSize="8" fontWeight="700" fontFamily="DM Sans Variable, sans-serif">FHIR</text>
                      <text x="160" y="67" textAnchor="middle" fill="#F8FAFB" fontSize="8" fontWeight="700" fontFamily="DM Sans Variable, sans-serif">Hub</text>
                      {/* Flow lines left to center */}
                      <line x1="70" y1="34" x2="136" y2="55" stroke="#FCA47C" strokeWidth="1" strokeDasharray="4 3" className="flow-line" opacity="0.7" />
                      <line x1="70" y1="72" x2="136" y2="62" stroke="#FCA47C" strokeWidth="1" strokeDasharray="4 3" className="flow-line" opacity="0.7" />
                      <line x1="70" y1="102" x2="136" y2="68" stroke="#FCA47C" strokeWidth="1" strokeDasharray="4 3" className="flow-line" opacity="0.5" />
                      {/* Right output nodes */}
                      <rect x="250" y="20" width="55" height="28" rx="6" fill="none" stroke="#F8FAFB" strokeWidth="1" opacity="0.6" />
                      <text x="278" y="38" textAnchor="middle" fill="#F8FAFB" fontSize="7" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Scheduling</text>
                      <rect x="250" y="58" width="55" height="28" rx="6" fill="none" stroke="#F8FAFB" strokeWidth="1" opacity="0.6" />
                      <text x="278" y="76" textAnchor="middle" fill="#F8FAFB" fontSize="7" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Analytics</text>
                      <rect x="250" y="88" width="55" height="28" rx="6" fill="none" stroke="#F8FAFB" strokeWidth="1" opacity="0.5" />
                      <text x="278" y="106" textAnchor="middle" fill="#F8FAFB" fontSize="7" fontWeight="600" fontFamily="DM Sans Variable, sans-serif">Outreach</text>
                      {/* Flow lines center to right */}
                      <line x1="184" y1="55" x2="250" y2="34" stroke="#FCA47C" strokeWidth="1" strokeDasharray="4 3" className="flow-line" opacity="0.7" />
                      <line x1="184" y1="62" x2="250" y2="72" stroke="#FCA47C" strokeWidth="1" strokeDasharray="4 3" className="flow-line" opacity="0.7" />
                      <line x1="184" y1="68" x2="250" y2="102" stroke="#FCA47C" strokeWidth="1" strokeDasharray="4 3" className="flow-line" opacity="0.5" />
                    </svg>
                  )}
                  {i === 2 && (
                    /* AI & Enterprise — neural network / brain animation */
                    <svg viewBox="0 0 320 120" width="100%" height="120" style={{ display: 'block' }} role="img" aria-label="AI neural network diagram showing input, processing, and output layers representing enterprise AI architecture">
                      <defs>
                        <style>{`
                          @keyframes neuronFire { 0%,100% { opacity: 0.3; } 30% { opacity: 1; } }
                          @keyframes synapse { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -20; } }
                          .n1 { animation: neuronFire 2s ease-in-out 0s infinite; }
                          .n2 { animation: neuronFire 2s ease-in-out 0.3s infinite; }
                          .n3 { animation: neuronFire 2s ease-in-out 0.6s infinite; }
                          .n4 { animation: neuronFire 2s ease-in-out 0.9s infinite; }
                          .n5 { animation: neuronFire 2s ease-in-out 1.2s infinite; }
                          .syn { animation: synapse 3s linear infinite; }
                        `}</style>
                      </defs>
                      {/* Input layer */}
                      <circle cx="40" cy="25" r="8" fill="#FCA47C" className="n1" />
                      <circle cx="40" cy="60" r="8" fill="#FCA47C" className="n2" />
                      <circle cx="40" cy="95" r="8" fill="#FCA47C" className="n3" />
                      {/* Hidden layer 1 */}
                      <circle cx="120" cy="35" r="10" fill="#FCA47C" className="n3" />
                      <circle cx="120" cy="85" r="10" fill="#FCA47C" className="n1" />
                      {/* Hidden layer 2 */}
                      <circle cx="200" cy="30" r="10" fill="#FCA47C" className="n5" />
                      <circle cx="200" cy="60" r="10" fill="#FCA47C" className="n2" />
                      <circle cx="200" cy="90" r="10" fill="#FCA47C" className="n4" />
                      {/* Output layer */}
                      <circle cx="280" cy="45" r="12" fill="#097C87" opacity="0.8" className="n4" />
                      <circle cx="280" cy="80" r="12" fill="#097C87" opacity="0.8" className="n5" />
                      {/* Synapse connections input->h1 */}
                      <line x1="48" y1="25" x2="110" y2="35" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.5" />
                      <line x1="48" y1="60" x2="110" y2="35" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.4" />
                      <line x1="48" y1="60" x2="110" y2="85" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.5" />
                      <line x1="48" y1="95" x2="110" y2="85" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.4" />
                      {/* h1->h2 */}
                      <line x1="130" y1="35" x2="190" y2="30" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.5" />
                      <line x1="130" y1="35" x2="190" y2="60" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.4" />
                      <line x1="130" y1="85" x2="190" y2="60" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.5" />
                      <line x1="130" y1="85" x2="190" y2="90" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.4" />
                      {/* h2->output */}
                      <line x1="210" y1="30" x2="268" y2="45" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.5" />
                      <line x1="210" y1="60" x2="268" y2="45" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.4" />
                      <line x1="210" y1="60" x2="268" y2="80" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.5" />
                      <line x1="210" y1="90" x2="268" y2="80" stroke="#F8FAFB" strokeWidth="0.8" strokeDasharray="3 3" className="syn" opacity="0.4" />
                      {/* Labels */}
                      <text x="40" y="115" textAnchor="middle" fill="#F8FAFB" fontSize="7" fontWeight="600" fontFamily="DM Sans Variable, sans-serif" opacity="0.7">Input</text>
                      <text x="160" y="115" textAnchor="middle" fill="#F8FAFB" fontSize="7" fontWeight="600" fontFamily="DM Sans Variable, sans-serif" opacity="0.7">Processing</text>
                      <text x="280" y="115" textAnchor="middle" fill="#F8FAFB" fontSize="7" fontWeight="600" fontFamily="DM Sans Variable, sans-serif" opacity="0.7">Output</text>
                    </svg>
                  )}
                </Box>

                {/* Card body */}
                <Box sx={{ p: 3.5 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#065A62',
                      mb: 2.5,
                      fontFamily: '"Cormorant Garamond Variable", serif',
                      fontWeight: 700,
                      fontSize: '1.4rem',
                    }}
                  >
                    {area.title}
                  </Typography>
                  {area.items.map((item, j) => (
                    <MotionBox
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + j * 0.06 }}
                      sx={{
                        display: 'flex',
                        gap: 1.5,
                        mb: 1.5,
                        alignItems: 'center',
                        py: 0.8,
                        px: 1.5,
                        borderRadius: 1.5,
                        transition: 'background 0.2s ease',
                        '&:hover': { background: 'rgba(9,124,135,0.04)' },
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 16, color: '#097C87', flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 500 }}>{item}</Typography>
                    </MotionBox>
                  ))}
                </Box>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* TRUSTED LEADERSHIP */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#097C87', display: 'block', mb: 2 }}>
              Trusted Leadership
            </Typography>
            <Typography variant="h2" sx={{ color: '#065A62', mb: 2 }}>
              We've Lived the Challenges You Face Every Day
            </Typography>
            <Typography variant="body1" sx={{ color: '#065A62', maxWidth: 700, mx: 'auto' }}>
              Our management team isn't just building technology — we've spent decades in the trenches of healthcare operations, understanding the problems from the inside out.
            </Typography>
          </Box>

          {/* Leadership Pillars */}
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {[
              { label: 'Healthcare Veterans', desc: 'Team members with direct experience in clinical operations, practice management, and patient care across multiple specialties.' },
              { label: 'Integration Masters', desc: 'Deep expertise in connecting disparate healthcare systems, from legacy EMRs to modern cloud platforms, ensuring seamless data flow.' },
              { label: 'Innovation Leaders', desc: 'Pioneers in applying AI and machine learning to healthcare challenges, with a track record of delivering production-ready solutions.' },
            ].map((pillar, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  sx={{
                    background: '#FFFFFF',
                    borderRadius: 2,
                    p: 3,
                    borderTop: '3px solid #097C87',
                    boxShadow: '0 2px 8px rgba(9,124,135,0.06)',
                    height: '100%',
                  }}
                >
                  <GroupsIcon sx={{ fontSize: 28, color: '#097C87', mb: 1.5 }} />
                  <Typography variant="h6" sx={{ color: '#065A62', mb: 1, fontFamily: '"Cormorant Garamond Variable", serif', fontWeight: 500 }}>
                    {pillar.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 300 }}>
                    {pillar.desc}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* WHY TRUST US */}
      <SectionWrapper
        overline="Why Configural"
        title="Why Trust This Team"
        subtitle="The combination of healthcare depth and technical excellence that sets us apart."
      >
        <Grid container spacing={3}>
          {trustReasons.map((reason, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <GlowCard delay={i * 0.1} sx={{ height: '100%' }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box sx={{ p: 1, borderRadius: 2, background: 'rgba(9,124,135,0.06)', flexShrink: 0 }}>
                    {reason.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#065A62', mb: 0.5, fontFamily: '"Cormorant Garamond Variable", serif', fontWeight: 500 }}>
                      {reason.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 300 }}>
                      {reason.desc}
                    </Typography>
                  </Box>
                </Box>
              </GlowCard>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* CAREERS */}
      <Box sx={{ background: '#FFFFFF', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="overline" sx={{ color: '#097C87', display: 'block', mb: 2 }}>
                  Careers
                </Typography>
                <Typography variant="h2" sx={{ color: '#065A62', mb: 2 }}>
                  Join the Team Transforming Healthcare
                </Typography>
                <Typography variant="body1" sx={{ color: '#065A62', mb: 3 }}>
                  We're actively hiring across healthcare and technology teams. If you're passionate about improving healthcare through innovation, we want to hear from you.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <EmailIcon sx={{ color: '#097C87', fontSize: 20 }} />
                  <Typography variant="body1" sx={{ color: '#097C87', fontWeight: 600 }}>
                    careers@configural.ai
                  </Typography>
                </Box>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ background: '#FFFFFF', borderRadius: 2, p: 3, border: '1px solid rgba(9,124,135,0.1)', height: '100%' }}>
                      <LocalHospitalIcon sx={{ fontSize: 24, color: '#097C87', mb: 1.5 }} />
                      <Typography variant="h6" sx={{ color: '#065A62', mb: 1.5, fontFamily: '"Cormorant Garamond Variable", serif', fontWeight: 500 }}>
                        Healthcare Professionals
                      </Typography>
                      {healthcareRoles.map((role, i) => (
                        <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center' }}>
                          <CheckCircleIcon sx={{ fontSize: 14, color: '#097C87', flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: '#065A62' }}>{role}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ background: '#FFFFFF', borderRadius: 2, p: 3, border: '1px solid rgba(9,124,135,0.1)', height: '100%' }}>
                      <PsychologyIcon sx={{ fontSize: 24, color: '#097C87', mb: 1.5 }} />
                      <Typography variant="h6" sx={{ color: '#065A62', mb: 1.5, fontFamily: '"Cormorant Garamond Variable", serif', fontWeight: 500 }}>
                        Technology Roles
                      </Typography>
                      {techRoles.map((role, i) => (
                        <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center' }}>
                          <CheckCircleIcon sx={{ fontSize: 14, color: '#097C87', flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: '#065A62' }}>{role}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #065A62 0%, #097C87 50%, #044048 100%)' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" style={{ color: '#F8FAFB' }} sx={{ mb: 2 }}>
            Work with a Team That Truly Understands Healthcare
          </Typography>
          <Typography variant="body1" style={{ color: 'rgba(248,250,251,0.85)' }} sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Let's transform your operations together. Our team of healthcare veterans and technology innovators is ready to help.
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
              Get in Touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              component={Link}
              to="/platform"
              sx={{
                py: 1.5,
                px: 4,
                color: '#F8FAFB',
                borderColor: 'rgba(248,250,251,0.4)',
                '&:hover': { borderColor: '#F8FAFB', background: 'rgba(248,250,251,0.08)' },
              }}
            >
              Explore Our Platform
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
