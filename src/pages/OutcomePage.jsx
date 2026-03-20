import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Box, Container, Typography, Grid, Chip, Button, Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import GlowCard from '../components/GlowCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import outcomes from '../data/outcomes';
import specialties from '../data/specialties';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

export default function OutcomePage() {
  const { slug } = useParams();
  const data = outcomes.find((o) => o.slug === slug);

  if (!data) return <Navigate to="/solutions" replace />;

  const related = (data.relatedSpecialties || [])
    .map((s) => specialties.find((sp) => sp.slug === s))
    .filter(Boolean);

  return (
    <Box>
      <SEO
        title={data.outcome}
        description={data.tagline}
      />
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #065A62 0%, #097C87 50%, #044048 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '50%',
            height: '140%',
            background: 'radial-gradient(circle, rgba(163,209,219,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ maxWidth: 800 }}
          >
            <Chip
              label="By Outcome"
              sx={{
                mb: 2,
                background: 'rgba(248,250,251,0.15)',
                border: '1px solid rgba(248,250,251,0.3)',
                color: '#F8FAFB',
                fontWeight: 600,
                py: 2,
                px: 1,
              }}
            />
            <Typography variant="h1" sx={{ color: '#F8FAFB', mb: 2 }}>
              {data.outcome}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.15rem', color: 'rgba(248,250,251,0.85)', mb: 3, maxWidth: 650 }}
            >
              {data.heroDescription}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#FCA47C',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: '1.05rem',
              }}
            >
              {data.tagline}
            </Typography>
          </MotionBox>

          {/* Stats row */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Grid container spacing={2} sx={{ mt: 4, maxWidth: 700 }}>
              {data.results.map((r, i) => (
                <Grid size={{ xs: 6, sm: 3 }} key={i}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: 'rgba(248,250,251,0.08)',
                      border: '1px solid rgba(248,250,251,0.15)',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minHeight: 90,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                        fontSize: '1.8rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        lineHeight: 1.2,
                      }}
                    >
                      {r.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(248,250,251,0.7)', fontSize: '0.8rem', mt: 0.5 }}>
                      {r.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </Container>
      </Box>

      {/* Challenges Section */}
      <SectionWrapper
        overline="The Challenge"
        title="What's Holding You Back"
        subtitle={data.description}
      >
        <Grid container spacing={3}>
          {data.challenges.map((challenge, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: '#FFFFFF',
                  border: '1px solid rgba(9,124,135,0.1)',
                  height: '100%',
                  display: 'flex',
                  gap: 1.5,
                  alignItems: 'flex-start',
                }}
              >
                <WarningAmberIcon sx={{ fontSize: 20, color: '#065A62', mt: 0.3, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: '#065A62', lineHeight: 1.6 }}>
                  {challenge}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Workflows Section */}
      <SectionWrapper
        dark
        overline="Automated Workflows"
        title="How Configural Delivers This Outcome"
        subtitle="AI-powered workflows that work together to achieve measurable results."
      >
        <Grid container spacing={3}>
          {data.workflows.map((wf, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <MotionBox
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  alignItems: 'flex-start',
                  p: 2.5,
                  borderRadius: 2,
                  background: '#FFFFFF',
                  border: '1px solid rgba(9,124,135,0.08)',
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 18, color: '#097C87', mt: 0.3, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: '#065A62', lineHeight: 1.6, fontWeight: 500 }}>
                  {wf}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* AI Agents Section */}
      <SectionWrapper
        overline="AI Employees"
        title="The AI Agents Behind This Outcome"
        subtitle="Specialized AI employees that work autonomously to deliver these results."
      >
        <Grid container spacing={3}>
          {data.aiAgents.map((agent, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <GlowCard delay={i * 0.1}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'rgba(9,124,135,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <AutoAwesomeIcon sx={{ fontSize: 22, color: '#097C87' }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#065A62', fontWeight: 700, mb: 0.5, fontSize: '1.05rem' }}>
                      {agent.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#065A62', lineHeight: 1.6 }}>
                      {agent.description}
                    </Typography>
                  </Box>
                </Box>
              </GlowCard>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Related Specialties Section */}
      {related.length > 0 && (
        <SectionWrapper
          dark
          overline="Related Specialties"
          title="See This Outcome in Action"
          subtitle="Explore how specific specialties achieve this outcome with Configural."
        >
          <Grid container spacing={3}>
            {related.map((spec, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={spec.slug}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  component={Link}
                  to={`/use-cases/${spec.slug}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    p: 3,
                    borderRadius: 2,
                    background: '#FFFFFF',
                    border: '1px solid rgba(9,124,135,0.08)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      background: 'rgba(9,124,135,0.04)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(9,124,135,0.08)',
                    },
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: '#065A62', fontSize: '1.05rem', fontFamily: '"Cormorant Garamond Variable", Georgia, serif' }}>
                      {spec.specialty}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#097C87', fontSize: '0.8rem', mt: 0.5 }}>
                      {spec.tagline}
                    </Typography>
                  </Box>
                  <OpenInNewIcon sx={{ fontSize: 18, color: '#097C87', flexShrink: 0, ml: 1 }} />
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </SectionWrapper>
      )}

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #065A62 0%, #097C87 100%)',
        }}
      >
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
                color: '#F8FAFB',
                mb: 2,
                fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
              }}
            >
              Ready to {data.outcome}?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(248,250,251,0.8)', mb: 4, maxWidth: 550, mx: 'auto' }}>
              See how Configural's AI employees can deliver this outcome for your practice.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
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
                  background: '#F8FAFB',
                  color: '#065A62',
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
                to="/use-cases"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '0.95rem',
                  borderColor: 'rgba(248,250,251,0.3)',
                  color: '#F8FAFB',
                  '&:hover': { borderColor: '#F8FAFB', background: 'rgba(248,250,251,0.05)' },
                }}
              >
                All Use Cases
              </Button>
            </Stack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
