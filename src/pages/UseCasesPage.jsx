import { useState, useMemo } from 'react';
import {
  Box, Container, Typography, Chip, Button, TextField, InputAdornment,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import specialties from '../data/specialties';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

export default function UseCasesPage() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return specialties;
    const q = search.toLowerCase().trim();
    return specialties.filter(
      (uc) =>
        uc.specialty.toLowerCase().includes(q) ||
        uc.tagline.toLowerCase().includes(q),
    );
  }, [search]);

  return (
    <Box>
      <SEO
        title="AI Healthcare Solutions by Medical Specialty"
        description="See how Configural's AI transforms operations for 112+ medical specialties — oncology, cardiology, orthopedics, primary care, multi-specialty groups, health systems, and beyond."
        keywords="healthcare AI by specialty, oncology automation, cardiology practice management, orthopedics scheduling, multi-specialty healthcare AI, medical practice automation"
      />
      {/* Hero Section */}
      <Box sx={{ pt: { xs: 12, md: 14 }, pb: { xs: 6, md: 10 }, background: '#097C87', position: 'relative' }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}
          >
            <Chip label="By Specialty" sx={{ mb: 2, background: 'rgba(248,250,251,0.15)', border: '1px solid rgba(248,250,251,0.3)', color: '#F8FAFB', fontWeight: 600, py: 2, px: 1 }} />
            <Typography variant="h1" sx={{ color: '#F8FAFB', mb: 2 }}>
              Built for Your{' '}
              <Box component="span" sx={{ color: '#FFFFFF' }}>
                Specialty
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 700, mx: 'auto', color: 'rgba(248,250,251,0.8)', mb: 4 }}>
              Configural adapts to the unique workflows, protocols, and challenges of your specialty. See how practices like yours are transforming their operations.
            </Typography>

            {/* Search Bar */}
            <Box sx={{ maxWidth: 520, mx: 'auto' }}>
              <TextField
                fullWidth
                placeholder="Search specialties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'rgba(6,90,98,0.4)' }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    background: '#F8FAFB',
                    borderRadius: '14px',
                    fontSize: '1rem',
                    '& fieldset': { border: 'none' },
                    '&:hover fieldset': { border: 'none' },
                    '&.Mui-focused fieldset': { border: '2px solid #FCA47C' },
                    '& input::placeholder': {
                      color: 'rgba(6,90,98,0.45)',
                      opacity: 1,
                    },
                  },
                }}
              />
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* Specialties List */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {filtered.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8, maxWidth: 600, mx: 'auto' }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                  fontWeight: 600,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  color: '#065A62',
                  mb: 2,
                }}
              >
                Don't See Your Specialty?
              </Typography>
              <Typography sx={{ color: '#065A62', fontSize: '1rem', lineHeight: 1.7, mb: 3 }}>
                Configural's platform is specialty-agnostic at its core. We can configure AI agents for any practice workflow. Let's talk about yours.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/demo"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '0.95rem',
                    background: '#097C87',
                    color: '#F8FAFB',
                    '&:hover': { background: '#065A62' },
                  }}
                >
                  Book a Demo
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setSearch('')}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '0.95rem',
                    borderColor: '#097C87',
                    color: '#097C87',
                    '&:hover': { borderColor: '#065A62', background: 'rgba(9,124,135,0.04)' },
                  }}
                >
                  Clear Search
                </Button>
              </Box>
            </Box>
          )}

          {filtered.length > 0 && (
            <Typography
              sx={{
                color: 'rgba(6,90,98,0.5)',
                fontSize: '0.85rem',
                fontWeight: 500,
                mb: 3,
                letterSpacing: '0.05em',
              }}
            >
              {filtered.length} {filtered.length === 1 ? 'specialty' : 'specialties'}{search.trim() ? ` matching "${search.trim()}"` : ''}
            </Typography>
          )}

          {filtered.map((uc, i) => (
            <MotionBox
              key={uc.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={search.trim() ? { opacity: 1, y: 0 } : undefined}
              whileInView={!search.trim() ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
              component={Link}
              to={`/use-cases/${uc.slug}`}
              sx={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: { xs: 'flex-start', md: 'center' },
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 1.5, md: 3 },
                py: { xs: 2.5, md: 3 },
                px: { xs: 2, md: 3 },
                borderBottom: '1px solid rgba(9,124,135,0.1)',
                borderRadius: 2,
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                '&:hover': {
                  background: 'rgba(9,124,135,0.03)',
                  '& .specialty-name': { color: '#097C87' },
                  '& .arrow-icon': {
                    transform: 'translateX(4px)',
                    color: '#097C87',
                  },
                },
              }}
            >
              {/* Specialty name */}
              <Typography
                className="specialty-name"
                sx={{
                  fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                  fontWeight: 700,
                  color: '#065A62',
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  minWidth: { md: 260 },
                  flexShrink: 0,
                  transition: 'color 0.25s ease',
                  lineHeight: 1.3,
                }}
              >
                {uc.specialty}
              </Typography>

              {/* Tagline */}
              <Typography
                sx={{
                  color: '#065A62',
                  fontSize: '0.92rem',
                  lineHeight: 1.5,
                  flexGrow: 1,
                }}
              >
                {uc.tagline}
              </Typography>

              {/* Key stat + arrow */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  flexShrink: 0,
                }}
              >
                <Box sx={{ textAlign: 'right', display: { xs: 'none', md: 'block' } }}>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                      fontWeight: 700,
                      color: '#097C87',
                      fontSize: '1.4rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {uc.results[0].value}
                  </Typography>
                  <Typography sx={{ color: '#065A62', fontSize: '0.7rem', fontWeight: 500 }}>
                    {uc.results[0].label}
                  </Typography>
                </Box>
                <ArrowForwardIcon
                  className="arrow-icon"
                  sx={{
                    fontSize: 22,
                    color: '#FCA47C',
                    transition: 'all 0.25s ease',
                    display: { xs: 'none', md: 'block' },
                  }}
                />
              </Box>
            </MotionBox>
          ))}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: '#F8FAFB' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: '#065A62', mb: 2 }}>Don't See Your Specialty?</Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', maxWidth: 600, mx: 'auto', color: '#065A62' }}>
            Configural's platform is specialty-agnostic at its core. We can configure AI agents for any practice workflow. Let's talk about yours.
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
              background: '#097C87',
              color: '#F8FAFB',
              '&:hover': { background: '#065A62' },
            }}
          >
            Book a Demo
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
