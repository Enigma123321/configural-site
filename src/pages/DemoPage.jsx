import {
  Box, Container, Typography, Grid, TextField, Button, Chip, MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

export default function DemoPage() {
  return (
    <Box sx={{ pt: { xs: 12, md: 14 }, pb: { xs: 6, md: 10 }, background: '#F8FAFB' }}>
      <SEO
        title="Request a Demo — See AI Healthcare Automation"
        description="Book a 30-minute personalized demo of Configural. See AI employees automate scheduling, referrals, and care management for your specialty. Custom ROI analysis included."
        keywords="healthcare AI demo, Configural demo, medical practice automation demo, AI scheduling demo, healthcare technology demo"
      />
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Chip
                icon={<CalendarMonthIcon sx={{ fontSize: 16, color: '#097C87 !important' }} />}
                label="30-Minute Personalized Demo"
                sx={{
                  mb: 2,
                  background: 'rgba(9,124,135,0.1)',
                  border: '1px solid rgba(9,124,135,0.25)',
                  color: '#097C87',
                  fontWeight: 600,
                  py: 2,
                  px: 1,
                }}
              />
              <Typography variant="h1" component="h1" sx={{ color: '#065A62', mb: 2 }}>
                See Configural in Action
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', color: '#065A62' }}>
                Get a personalized walkthrough of how Configural's AI agents can transform your specific practice workflows — with a custom ROI analysis included.
              </Typography>

              {[
                'Personalized to your specialty and workflows',
                'Live demo of AI agents handling real scenarios',
                'Custom ROI analysis for your practice size',
                'No commitment — just a conversation',
                'Implementation timeline and phased rollout plan',
              ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1.5, alignItems: 'center' }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: '#097C87' }} />
                  <Typography variant="body1" sx={{ color: '#065A62' }}>
                    {item}
                  </Typography>
                </Box>
              ))}

              <Box
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: 3,
                  background: '#FFFFFF',
                  border: '1px solid rgba(9,124,135,0.15)',
                }}
              >
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#065A62', lineHeight: 1.7 }}>
                  "The demo showed us exactly what we needed. Within 30 minutes, we understood how Configural would save our practice $1.8M annually and unlock VBC revenue we didn't know we had."
                </Typography>
                <Typography variant="body2" sx={{ color: '#097C87', mt: 1.5, fontWeight: 600 }}>
                  — Practice Administrator, 15-Physician Oncology Group
                </Typography>
              </Box>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlowCard>
                <Typography variant="h5" sx={{ color: '#065A62', mb: 2 }}>
                  Book Your Demo
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6 }}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Work Email"
                      type="email"
                      variant="outlined"
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Practice Name"
                      variant="outlined"
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <TextField
                      fullWidth
                      label="Specialty"
                      select
                      variant="outlined"
                      defaultValue=""
                      sx={inputSx}
                    >
                      <MenuItem value="">Select...</MenuItem>
                      <MenuItem value="oncology">Oncology</MenuItem>
                      <MenuItem value="multi-specialty">Multi-Specialty</MenuItem>
                      <MenuItem value="primary-care">Primary Care</MenuItem>
                      <MenuItem value="cardiology">Cardiology</MenuItem>
                      <MenuItem value="surgery">Surgery</MenuItem>
                      <MenuItem value="gastroenterology">Gastroenterology</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <TextField
                      fullWidth
                      label="Practice Size"
                      select
                      variant="outlined"
                      defaultValue=""
                      sx={inputSx}
                    >
                      <MenuItem value="">Select...</MenuItem>
                      <MenuItem value="1-5">1-5 Providers</MenuItem>
                      <MenuItem value="6-15">6-15 Providers</MenuItem>
                      <MenuItem value="16-50">16-50 Providers</MenuItem>
                      <MenuItem value="50+">50+ Providers</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="What challenges are you looking to solve?"
                      multiline
                      rows={3}
                      variant="outlined"
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      sx={{
                        py: 1.5,
                        fontSize: '0.95rem',
                        mt: 1,
                        background: '#097C87',
                        color: '#EEDFD1',
                        '&:hover': { background: '#065A62' },
                      }}
                    >
                      Book My Demo
                    </Button>
                    <Typography variant="body2" sx={{ textAlign: 'center', mt: 1.5, color: '#065A62', fontSize: '0.8rem' }}>
                      No credit card required. We'll reach out within 24 hours.
                    </Typography>
                  </Grid>
                </Grid>
              </GlowCard>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const inputSx = {
  '& .MuiOutlinedInput-root': {
    background: '#FFFFFF',
    borderRadius: 2,
    '& fieldset': {
      borderColor: 'rgba(9,124,135,0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(9,124,135,0.4)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#097C87',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#065A62',
  },
  '& .MuiInputBase-input': {
    color: '#065A62',
  },
  '& .MuiSelect-icon': {
    color: '#065A62',
  },
};
