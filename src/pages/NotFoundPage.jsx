import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist. Navigate back to Configural to explore our AI-powered healthcare platform." />
      <Box
        sx={{
          background: 'linear-gradient(145deg, #065A62 0%, #097C87 50%, #0A8F9A 100%)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(252,164,124,0.06) 0%, transparent 60%)',
          }}
        />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: 10 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                fontWeight: 700,
                color: '#FCA47C',
                fontSize: { xs: '6rem', md: '8rem' },
                lineHeight: 1,
                mb: 2,
              }}
            >
              404
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                fontWeight: 600,
                color: '#F8FAFB',
                fontSize: { xs: '1.8rem', md: '2.4rem' },
                mb: 2,
              }}
            >
              Page Not Found
            </Typography>
            <Typography
              sx={{
                color: 'rgba(248, 250, 251, 0.7)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                mb: 5,
                maxWidth: 420,
                mx: 'auto',
              }}
            >
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                component={Link}
                to="/"
                startIcon={<HomeIcon />}
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
                Back to Home
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/use-cases"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '0.95rem',
                  borderColor: 'rgba(248,250,251,0.3)',
                  color: '#F8FAFB',
                  '&:hover': { borderColor: '#F8FAFB', background: 'rgba(248,250,251,0.05)' },
                }}
              >
                Browse Specialties
              </Button>
            </Box>

            {/* Quick links */}
            <Box sx={{ mt: 6, display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'AI Employees', path: '/agents' },
                { label: 'Platform', path: '/platform' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'Contact', path: '/demo' },
              ].map((link) => (
                <Typography
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: 'rgba(248,250,251,0.5)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': { color: '#F8FAFB' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}
