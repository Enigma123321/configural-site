import { Box, Container, Typography, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

export default function AnnouncementPage() {
  return (
    <Box>
      <SEO
        title="ManageCare Is Now Configural | Company Announcement"
        description="ManageCare and Configural are merging to create the most powerful AI-native healthcare administration platform. Learn what this means for our customers and the future of healthcare automation."
      />

      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(165deg, #065A62 0%, #097C87 50%, #0A8F9A 100%)',
          pt: { xs: 16, md: 20 },
          pb: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative elements */}
        <Box sx={{
          position: 'absolute', top: '20%', left: '10%', width: 300, height: 300,
          borderRadius: '50%', background: 'rgba(35,206,217,0.06)', filter: 'blur(80px)',
        }} />
        <Box sx={{
          position: 'absolute', bottom: '10%', right: '15%', width: 400, height: 400,
          borderRadius: '50%', background: 'rgba(252,164,124,0.05)', filter: 'blur(100px)',
        }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
              <Box sx={{
                background: 'rgba(252,164,124,0.15)', border: '1px solid rgba(252,164,124,0.3)',
                borderRadius: '6px', px: 1.5, py: 0.4,
              }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#FCA47C', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: '"Space Grotesk", sans-serif' }}>
                  Company Announcement
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.8rem', color: 'rgba(248,250,251,0.5)' }}>
                March 19, 2026
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.2rem', md: '3.2rem' },
                fontWeight: 800,
                color: '#F8FAFB',
                lineHeight: 1.15,
                mb: 3,
                fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
              }}
            >
              ManageCare Is Now{' '}
              <Box component="span" sx={{ color: '#F8FAFB' }}>
                Configural
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                color: 'rgba(248,250,251,0.8)',
                lineHeight: 1.7,
                maxWidth: 650,
              }}
            >
              Two companies with a shared vision are becoming one. Together, we are building the definitive AI-native platform for healthcare administration.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Article Content */}
      <Box sx={{ background: '#FAFBFC', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Letter from leadership */}
            <Box sx={{ mb: 6 }}>
              <Typography sx={{ fontSize: '0.85rem', color: '#097C87', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', mb: 2 }}>
                A Letter from Our Team
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', color: '#1a2b3c', lineHeight: 1.9, mb: 3 }}>
                When we started ManageCare, we had a simple belief: healthcare practices spend far too much time on administrative work and far too little time on what matters — patient care. We built AI agents that could handle scheduling, referrals, prior authorizations, and dozens of other workflows that consume staff hours.
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', color: '#1a2b3c', lineHeight: 1.9, mb: 3 }}>
                Along the way, we realized something bigger. The future of healthcare administration is not just automation — it is <strong>configurability</strong>. Every practice, every health system, every specialty has unique workflows, rules, and needs. A one-size-fits-all approach cannot serve a cardiology clinic in Houston the same way it serves an oncology network in Boston.
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', color: '#1a2b3c', lineHeight: 1.9, mb: 3 }}>
                That is why we are becoming <strong>Configural</strong>.
              </Typography>
            </Box>

            <Divider sx={{ my: 5, borderColor: 'rgba(9,124,135,0.1)' }} />

            {/* What's changing */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#065A62', mb: 3, fontFamily: '"Space Grotesk", sans-serif' }}>
                What Is Changing
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  {
                    title: 'A New Name, A Bigger Vision',
                    text: 'Configural reflects what we have always believed — that healthcare AI should adapt to your practice, not the other way around. Our platform is built to be configured, customized, and tailored to exactly how you work.',
                  },
                  {
                    title: 'Same Team, Same Mission',
                    text: 'The people behind ManageCare are the people behind Configural. Our engineers, clinicians, and customer success teams are not going anywhere. If anything, our team is growing to accelerate what we can deliver.',
                  },
                  {
                    title: 'Expanded Platform Capabilities',
                    text: 'Under the Configural brand, we are launching new capabilities including workflow builder for custom automation, expanded EMR integrations, and an open API for health system developers.',
                  },
                  {
                    title: 'Continued Support for All Customers',
                    text: 'Every existing ManageCare contract, integration, and SLA carries forward. Your AI agents, scheduling rules, and configurations remain exactly as they are. Nothing breaks. Nothing changes without your approval.',
                  },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(9,124,135,0.08)',
                      borderRadius: 2,
                      p: 3.5,
                      borderLeft: '3px solid #097C87',
                    }}
                  >
                    <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: '#065A62', mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: 1.8 }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 5, borderColor: 'rgba(9,124,135,0.1)' }} />

            {/* What's not changing */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#065A62', mb: 3, fontFamily: '"Space Grotesk", sans-serif' }}>
                What Is Not Changing
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', color: '#1a2b3c', lineHeight: 1.9, mb: 3 }}>
                We want to be very clear about what stays the same:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                {[
                  'Your AI agents continue running without interruption',
                  'All EMR integrations (Epic, Cerner, athenahealth, etc.) remain active',
                  'Pricing and contract terms are honored in full',
                  'Your dedicated customer success manager stays the same',
                  'HIPAA compliance, SOC 2 certification, and all security standards carry forward',
                  'Support channels, SLAs, and escalation paths remain unchanged',
                ].map((item, i) => (
                  <Typography
                    component="li"
                    key={i}
                    sx={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: 2, mb: 0.5 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 5, borderColor: 'rgba(9,124,135,0.1)' }} />

            {/* Looking ahead */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#065A62', mb: 3, fontFamily: '"Space Grotesk", sans-serif' }}>
                Looking Ahead
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', color: '#1a2b3c', lineHeight: 1.9, mb: 3 }}>
                Healthcare is at an inflection point. Practices are being asked to do more with less — more patients, more regulations, more complexity, fewer staff. We believe AI-native administration is not just helpful — it is essential.
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', color: '#1a2b3c', lineHeight: 1.9, mb: 3 }}>
                As Configural, we are investing in three major areas over the next year:
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3, mb: 3 }}>
                {[
                  { num: '01', title: 'Workflow Studio', desc: 'A visual builder that lets practices design custom AI workflows without writing a single line of code.' },
                  { num: '02', title: 'Agent Marketplace', desc: 'A library of pre-built AI agents for specific specialties, shareable across the Configural community.' },
                  { num: '03', title: 'Open Platform', desc: 'Full API access and developer tools so health systems can build on top of Configural.' },
                ].map((item) => (
                  <Box
                    key={item.num}
                    sx={{
                      background: 'linear-gradient(135deg, #065A62, #097C87)',
                      borderRadius: 2,
                      p: 3,
                      color: '#F8FAFB',
                    }}
                  >
                    <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(248,250,251,0.15)', fontFamily: '"Space Grotesk", sans-serif', mb: 1 }}>
                      {item.num}
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: 'rgba(248,250,251,0.7)', lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 5, borderColor: 'rgba(9,124,135,0.1)' }} />

            {/* Closing */}
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ fontSize: '1.05rem', color: '#1a2b3c', lineHeight: 1.9, mb: 3 }}>
                We are incredibly grateful to every practice, health system, and partner who has trusted ManageCare. That trust now carries forward to Configural. We are the same team, with the same obsession for making healthcare administration effortless — now with a name that better reflects where we are headed.
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', color: '#1a2b3c', lineHeight: 1.9, mb: 4 }}>
                Thank you for being part of this journey. The best is ahead.
              </Typography>
              <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#065A62', mb: 0.5 }}>
                The Configural Team
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: '#718096' }}>
                Formerly ManageCare
              </Typography>
            </Box>
          </MotionBox>

          {/* CTA */}
          <Box
            sx={{
              mt: 8,
              background: 'linear-gradient(135deg, #065A62, #097C87)',
              borderRadius: 3,
              p: { xs: 4, md: 6 },
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFB', mb: 1.5, fontFamily: '"Space Grotesk", sans-serif' }}>
              Ready to See What Configural Can Do?
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', color: 'rgba(248,250,251,0.7)', mb: 3, maxWidth: 500, mx: 'auto' }}>
              Schedule a demo and see how our AI agents can transform your practice workflows.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/demo"
                variant="contained"
                sx={{
                  background: '#FCA47C',
                  color: '#065A62',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  '&:hover': { background: '#fdb896' },
                }}
              >
                Book a Demo
              </Button>
              <Button
                component={Link}
                to="/platform"
                variant="outlined"
                sx={{
                  borderColor: 'rgba(248,250,251,0.3)',
                  color: '#F8FAFB',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  '&:hover': { borderColor: '#F8FAFB', background: 'rgba(255,255,255,0.05)' },
                }}
              >
                Explore the Platform
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
