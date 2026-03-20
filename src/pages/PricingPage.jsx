import {
  Box, Container, Typography, Grid, Chip, Button, Divider, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import GlowCard from '../components/GlowCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

const enterpriseFeatures = [
  'Complete AI automation platform with all features included',
  'Unlimited AI agents and workflow automation',
  'Custom integrations with your existing EHR and systems',
  'Dedicated implementation team and success manager',
  '24/7 enterprise support with guaranteed SLAs',
  'Advanced security features and HIPAA compliance',
  'Custom training for your entire team',
  'Regular platform updates and new AI capabilities',
];

const valueProps = [
  { title: 'Customized Implementation', desc: 'Every healthcare organization is unique. We tailor our platform to your specific workflows, specialties, and operational needs.' },
  { title: 'ROI-Focused Approach', desc: 'Our pricing is designed to deliver positive ROI within 6 months through automation savings and efficiency gains.' },
  { title: 'Scale with Confidence', desc: 'Start with one department and expand across your organization. Our pricing scales with your growth and success.' },
  { title: 'No Hidden Costs', desc: 'Transparent pricing includes all features, integrations, training, and support. No surprises or add-on fees.' },
  { title: 'Partnership Model', desc: 'Transparent, predictable pricing that scales with your practice size and needs, delivering immediate ROI through automation.' },
  { title: 'Rapid Deployment', desc: 'Go live in days, not months. Our proven implementation process minimizes disruption and accelerates time to value.' },
];

const changeFeatures = [
  { title: 'Quick Configuration', desc: 'AI agents automatically set up all protocols and configurations based on your practice\'s needs — no manual setup required.' },
  { title: 'AI-Led Staff Training', desc: 'Our AI agents take full responsibility for training your staff, providing personalized guidance for each team member\'s role.' },
  { title: 'Always-On Support', desc: 'AI assistants available 24/7 on every screen, ready to answer questions and guide users through any process instantly.' },
  { title: 'Pain-Free Transition', desc: 'We\'ve invested significant effort to make change management the least painful part of your digital transformation journey.' },
];

const faqs = [
  { q: 'How is pricing determined?', a: 'Pricing is customized based on your organization size, number of locations, patient volume, required integrations, and specific use cases. We ensure our pricing delivers positive ROI within 6 months.' },
  { q: 'Can we start with a pilot program?', a: 'Yes! Many organizations start with a department or single location pilot. We offer flexible pilot programs that allow you to validate ROI before full deployment.' },
  { q: 'What\'s included in the price?', a: 'Everything: the full platform, all AI agents, unlimited users, integrations, training, 24/7 support, updates, and new features. No hidden fees or surprise costs. AI usage costs may be additional based on volume and usage patterns.' },
  { q: 'How quickly can we see ROI?', a: 'Most organizations see immediate efficiency gains upon go-live, with full ROI typically achieved within 3-6 months through automation savings and improved resource utilization.' },
];

export default function PricingPage() {
  return (
    <Box>
      <SEO
        title="Enterprise Healthcare AI Pricing"
        description="Transparent pricing for Configural's AI-powered healthcare platform. Plans for solo practices, multi-specialty groups, and health systems. ROI-positive from month one."
        keywords="healthcare AI pricing, medical practice automation cost, healthcare platform pricing, AI employee pricing, healthcare software plans"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        }}
      />
      {/* Hero */}
      <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #065A62 0%, #097C87 50%, #044048 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
            <Chip
              label="Enterprise Pricing"
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
            <Typography variant="h1" style={{ color: '#FFFFFF' }} sx={{ mb: 2 }}>
              Enterprise Pricing
            </Typography>
            <Typography variant="body1" style={{ color: 'rgba(255,255,255,0.9)' }} sx={{ fontSize: '1.15rem', maxWidth: 620, mx: 'auto' }}>
              Tailored solutions for healthcare organizations of all sizes. Every deployment is unique, and so is our pricing.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Enterprise Pricing Card */}
      <Container maxWidth="md" sx={{ mt: -4, mb: 8, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            background: '#FFFFFF',
            borderRadius: 3,
            border: '2px solid #097C87',
            p: { xs: 4, md: 6 },
            boxShadow: '0 12px 40px rgba(9,124,135,0.12)',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <Chip
            label="Tailored for Your Organization"
            sx={{
              position: 'absolute',
              top: -14,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#097C87',
              color: '#F8FAFB',
              fontWeight: 600,
              px: 2,
            }}
          />
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" sx={{ color: '#065A62', mb: 1, fontFamily: '"Cormorant Garamond Variable", serif' }}>
              Custom Enterprise Solution
            </Typography>
            <Typography variant="body1" sx={{ color: '#065A62' }}>
              Pricing based on your specific needs and scale
            </Typography>
          </Box>
          <Divider sx={{ borderColor: 'rgba(9,124,135,0.12)', mb: 3 }} />
          <Grid container spacing={1.5}>
            {enterpriseFeatures.map((feature, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={i}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: '#097C87', mt: 0.3, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: '#065A62', fontSize: '0.9rem' }}>
                    {feature}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/demo"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: '#097C87',
                color: '#F8FAFB',
                px: 6,
                py: 1.8,
                fontWeight: 600,
                '&:hover': { background: '#065A62' },
              }}
            >
              Contact Sales Team
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Value Props */}
      <SectionWrapper
        overline="Why Configural"
        title="Priced Based on Value"
        subtitle="Our pricing model aligns with the value we deliver to your organization."
        sx={{ background: '#F8FAFB' }}
      >
        <Grid container spacing={3}>
          {valueProps.map((prop, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={prop.title}>
              <GlowCard delay={i * 0.1} sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ color: '#065A62', mb: 1, fontFamily: '"Cormorant Garamond Variable", serif', fontWeight: 500 }}>
                  {prop.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 300 }}>
                  {prop.desc}
                </Typography>
              </GlowCard>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* Change Management */}
      <Box sx={{ background: '#FFFFFF', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#097C87', display: 'block', mb: 2 }}>
              Onboarding
            </Typography>
            <Typography variant="h2" sx={{ color: '#065A62', mb: 2, fontFamily: '"Cormorant Garamond Variable", serif' }}>
              Seamless Change Management, Powered by AI
            </Typography>
            <Typography variant="body1" sx={{ color: '#065A62', maxWidth: 700, mx: 'auto' }}>
              We understand that implementing new technology can be challenging. That's why we've revolutionized the onboarding process with AI agents that handle everything from setup to staff training.
            </Typography>
          </Box>

          {/* Stats */}
          <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
            {[
              { value: '24/7', label: 'AI-Guided Setup' },
              { value: '100%', label: 'On-Screen Support' },
              { value: 'Zero', label: 'Training Downtime' },
            ].map((stat, i) => (
              <Grid size={{ xs: 12, sm: 4 }} key={i}>
                <Box sx={{ textAlign: 'center', py: 3 }}>
                  <Typography sx={{ fontFamily: '"Cormorant Garamond Variable", serif', fontSize: '2.5rem', fontWeight: 300, color: '#097C87', mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Features */}
          <Grid container spacing={3}>
            {changeFeatures.map((f, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={f.title}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  sx={{
                    background: '#FFFFFF',
                    borderRadius: 2,
                    p: 3,
                    borderLeft: '3px solid #097C87',
                    boxShadow: '0 2px 8px rgba(9,124,135,0.06)',
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#065A62', mb: 1, fontFamily: '"Cormorant Garamond Variable", serif', fontWeight: 500 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#065A62', fontWeight: 300 }}>
                    {f.desc}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQs */}
      <Box sx={{ background: '#F8FAFB', py: { xs: 10, md: 16 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#097C87', display: 'block', mb: 2 }}>
              FAQ
            </Typography>
            <Typography variant="h2" sx={{ color: '#065A62', mb: 1, fontFamily: '"Cormorant Garamond Variable", serif' }}>
              Pricing FAQs
            </Typography>
            <Typography variant="body1" sx={{ color: '#065A62' }}>
              Common questions about our enterprise pricing model
            </Typography>
          </Box>
          {faqs.map((faq, i) => (
            <Accordion
              key={i}
              defaultExpanded={i === 0}
              sx={{
                background: '#FFFFFF',
                boxShadow: 'none',
                border: '1px solid rgba(9,124,135,0.1)',
                borderRadius: '8px !important',
                mb: 1.5,
                '&:before': { display: 'none' },
                '&.Mui-expanded': { mb: 1.5 },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#097C87' }} />} sx={{ px: 3, py: 0.5 }}>
                <Typography sx={{ color: '#065A62', fontWeight: 500, fontSize: '1rem' }}>
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 2.5 }}>
                <Typography variant="body2" sx={{ color: '#065A62', lineHeight: 1.8, fontWeight: 300 }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #065A62 0%, #097C87 50%, #044048 100%)' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" style={{ color: '#F8FAFB' }} sx={{ mb: 2 }}>
            Ready to Transform Your Healthcare Operations?
          </Typography>
          <Typography variant="body1" style={{ color: 'rgba(248,250,251,0.85)' }} sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Let's discuss how Configural.ai can deliver value to your organization with a pricing model that works for you.
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
              Schedule Consultation
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
              ROI Resources
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
