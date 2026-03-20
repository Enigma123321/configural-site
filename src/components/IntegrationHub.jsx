import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const MotionBox = motion.create(Box);

const emrSystems = [
  'Epic',
  'Cerner / Oracle Health',
  'athenahealth',
  'eClinicalWorks',
  'ModMed',
  'NextGen Healthcare',
  'AllScripts / Veradigm',
  'DrChrono',
  'Practice Fusion',
  'Greenway Health',
];

const platformModules = [
  ['Scheduling', 'Care Workflows'],
  ['Patient Outreach', 'Auto Follow-ups'],
  ['Referral Mgmt', 'Analytics'],
  ['Infusion Room', 'Multi-Specialty'],
];

const outcomes = [
  { title: 'Single Patient View', desc: '360° access across 20+ EMRs' },
  { title: 'Self-Scheduling', desc: '40-60% cost reduction' },
  { title: 'Automated Outreach', desc: '20-35% no-show reduction' },
  { title: 'Centralized Reporting', desc: 'ACO quality, referral analytics' },
  { title: 'Operational Savings', desc: 'Est. $2.1M-$3.5M annually' },
];

export default function IntegrationHub() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: '#F8FAFB', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}
        >
          <Typography variant="overline" sx={{ color: '#097C87', mb: 1, display: 'block' }}>
            Unified Integration Hub
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: '#065A62',
              mb: 1.5,
              fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
            }}
          >
            One Platform, One Patient, One Truth
          </Typography>
          <Typography variant="body1" sx={{ color: '#065A62', maxWidth: 600, mx: 'auto' }}>
            Centralizing data from 20+ EMR systems into a single patient context
          </Typography>
        </MotionBox>

        {/* Three-column hub diagram */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr auto 1.4fr auto 1fr' },
            gap: { xs: 3, md: 0 },
            alignItems: 'center',
          }}
        >
          {/* Left: EMR Systems */}
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                background: '#FFFFFF',
                borderRadius: 3,
                border: '1px solid rgba(9,124,135,0.12)',
                boxShadow: '0 4px 20px rgba(9,124,135,0.06)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  px: 2.5,
                  py: 1.5,
                  background: '#065A62',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <StorageIcon sx={{ fontSize: 18, color: '#FCA47C' }} />
                <Typography sx={{ fontWeight: 700, color: '#F8FAFB', fontSize: '0.9rem' }}>
                  EMR Systems (20+)
                </Typography>
              </Box>
              <Box sx={{ p: 1.5 }}>
                {emrSystems.map((emr, i) => (
                  <MotionBox
                    key={emr}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      py: 0.8,
                      px: 1.5,
                      borderRadius: 1.5,
                      '&:hover': { background: 'rgba(9,124,135,0.04)' },
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#065A62',
                        flexShrink: 0,
                      }}
                    />
                    <Typography sx={{ fontWeight: 600, color: '#065A62', fontSize: '0.85rem' }}>
                      {emr}
                    </Typography>
                  </MotionBox>
                ))}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, px: 1.5 }}>
                  <WarningAmberIcon sx={{ fontSize: 14, color: '#D4943A' }} />
                  <Typography sx={{ color: '#D4943A', fontSize: '0.75rem', fontWeight: 600 }}>
                    Current Siloed Data
                  </Typography>
                </Box>
              </Box>
            </Box>
          </MotionBox>

          {/* Arrow left */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              px: 1.5,
            }}
          >
            <Box sx={{ color: '#097C87', fontSize: '1.5rem', fontWeight: 700 }}>▶</Box>
          </MotionBox>

          {/* Center: Configural Platform */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Box
              sx={{
                background: '#065A62',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(6,90,98,0.2)',
              }}
            >
              <Box sx={{ px: 3, py: 2, textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    fontSize: '1.3rem',
                    mb: 1.5,
                  }}
                >
                  Configural Platform
                </Typography>
                <Box
                  sx={{
                    background: 'rgba(9,124,135,0.5)',
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    mb: 2,
                  }}
                >
                  <Typography sx={{ color: '#F8FAFB', fontSize: '0.8rem', fontWeight: 600 }}>
                    Unified Patient Database • HL7/FHIR • AI Engine
                  </Typography>
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                  {platformModules.map((row, i) =>
                    row.map((mod, j) => (
                      <MotionBox
                        key={mod}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + (i * 2 + j) * 0.06 }}
                        sx={{
                          background: '#065A62',
                          borderRadius: 1.5,
                          px: 2,
                          py: 1.2,
                          textAlign: 'center',
                        }}
                      >
                        <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.8rem' }}>
                          {mod}
                        </Typography>
                      </MotionBox>
                    ))
                  )}
                </Box>
                <Typography
                  sx={{
                    color: 'rgba(248,250,251,0.6)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    mt: 2,
                    letterSpacing: '0.05em',
                  }}
                >
                  One Platform, One Patient, One Truth
                </Typography>
              </Box>
            </Box>
          </MotionBox>

          {/* Arrow right */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.45 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              px: 1.5,
            }}
          >
            <Box sx={{ color: '#097C87', fontSize: '1.5rem', fontWeight: 700 }}>▶</Box>
          </MotionBox>

          {/* Right: Outcomes */}
          <MotionBox
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Box
              sx={{
                background: '#FFFFFF',
                borderRadius: 3,
                border: '1px solid rgba(9,124,135,0.12)',
                boxShadow: '0 4px 20px rgba(9,124,135,0.06)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  px: 2.5,
                  py: 1.5,
                  background: '#065A62',
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 700, color: '#F8FAFB', fontSize: '0.9rem' }}>
                  Outcomes
                </Typography>
              </Box>
              <Box sx={{ p: 1.5 }}>
                {outcomes.map((o, i) => (
                  <MotionBox
                    key={o.title}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      py: 1,
                      px: 1.5,
                      borderRadius: 1.5,
                      '&:hover': { background: 'rgba(9,124,135,0.04)' },
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 18, color: '#097C87', mt: 0.2, flexShrink: 0 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: '#065A62', fontSize: '0.85rem', lineHeight: 1.3 }}>
                        {o.title}
                      </Typography>
                      <Typography sx={{ color: '#065A62', fontSize: '0.75rem' }}>
                        {o.desc}
                      </Typography>
                    </Box>
                  </MotionBox>
                ))}
              </Box>
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
