import { Box, Container, Typography, Grid, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'AI Employees', path: '/agents' },
      { label: 'How It Works', path: '/platform' },
      { label: 'Integrations', path: '/platform' },
      { label: 'Pricing', path: '/pricing' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Reduce Scheduling Delays', path: '/outcomes/reduce-scheduling-delays' },
      { label: 'Increase Patient Throughput', path: '/outcomes/increase-patient-throughput' },
      { label: 'Reduce Referral Leakage', path: '/outcomes/reduce-referral-leakage' },
      { label: 'Automate Admin Tasks', path: '/outcomes/automate-admin-tasks' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { label: 'Oncology', path: '/use-cases/oncology' },
      { label: 'Multi-Specialty', path: '/use-cases/multi-specialty' },
      { label: 'Health Systems (ACO)', path: '/use-cases/aco' },
      { label: 'All Specialties', path: '/use-cases' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/company' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Contact', path: '/demo' },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: '#065A62',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
              <Logo size={64} light={true} />
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(248,250,251,0.7)', maxWidth: 300, mb: 3, lineHeight: 1.7 }}>
              AI-native platform that orchestrates the entire patient journey. From referral to survivorship.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/demo"
              sx={{
                background: '#F8FAFB',
                color: '#065A62',
                fontWeight: 600,
                '&:hover': { background: '#FFFFFF' },
              }}
            >
              Get Started
            </Button>
          </Grid>

          {footerSections.map((section) => (
            <Grid size={{ xs: 6, sm: 3, md: 2 }} key={section.title}>
              <Typography
                variant="overline"
                sx={{
                  color: 'rgba(248,250,251,0.6)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  display: 'block',
                  mb: 2.5,
                }}
              >
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Typography
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    display: 'block',
                    color: 'rgba(248,250,251,0.7)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    py: 0.5,
                    '&:hover': { color: '#F8FAFB' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: 'rgba(248,250,251,0.08)', my: 5 }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'rgba(248,250,251,0.5)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} Configural. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {[
              { label: 'Privacy Policy', path: '/privacy' },
              { label: 'Terms of Service', path: '/terms' },
              { label: 'HIPAA Compliance', path: '/platform' },
              { label: 'SOC 2', path: '/platform' },
            ].map((item) => (
              <Typography
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: 'rgba(248,250,251,0.5)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  '&:hover': { color: 'rgba(248,250,251,0.6)' },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
