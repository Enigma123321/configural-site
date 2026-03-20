import { Box, Container, Typography, Divider, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect information you provide directly to us when you use our platform, request a demo, or communicate with us. This may include:',
    ],
    bullets: [
      'Contact information such as name, email address, phone number, and organization name',
      'Professional information such as job title, specialty, and practice details',
      'Account credentials used to access the Configural platform',
      'Usage data including how you interact with our AI employees and platform features',
      'Technical data such as IP address, browser type, and device information',
      'Protected Health Information (PHI) processed on behalf of covered entities under a Business Associate Agreement (BAA)',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect to provide, maintain, and improve our AI-powered healthcare operations platform. Specifically, we use your information to:',
    ],
    bullets: [
      'Deliver and operate our AI employee services including scheduling, care management, and referral coordination',
      'Process and fulfill your requests, including demo scheduling and account setup',
      'Send administrative communications about your account or our services',
      'Analyze usage patterns to improve platform performance and AI accuracy',
      'Ensure compliance with healthcare regulations including HIPAA, HITECH, and state privacy laws',
      'Protect against fraud, unauthorized access, and other security threats',
    ],
  },
  {
    title: '3. HIPAA Compliance',
    content: [
      'Configural operates as a Business Associate under HIPAA. We maintain rigorous safeguards for Protected Health Information (PHI):',
    ],
    bullets: [
      'All PHI is encrypted at rest using AES-256 encryption and in transit using TLS 1.3',
      'We execute Business Associate Agreements (BAAs) with all covered entity clients',
      'Access to PHI is restricted through role-based access controls and multi-factor authentication',
      'We maintain comprehensive audit logs of all PHI access and modifications',
      'Our AI employees process PHI only as directed by the covered entity and within the scope of the BAA',
      'We conduct regular risk assessments and maintain an incident response plan for potential breaches',
    ],
  },
  {
    title: '4. Data Sharing and Disclosure',
    content: [
      'We do not sell, rent, or trade your personal information or PHI. We may share information only in the following circumstances:',
    ],
    bullets: [
      'With healthcare providers and organizations as directed by our platform workflows and your authorization',
      'With service providers who assist in operating our platform, under strict contractual obligations and BAAs where applicable',
      'To comply with legal obligations, court orders, or regulatory requirements',
      'To protect the rights, safety, and property of Configural, our users, or the public',
      'In connection with a merger, acquisition, or sale of assets, with appropriate notice and protections',
    ],
  },
  {
    title: '5. Data Security',
    content: [
      'We implement industry-leading security measures to protect your data:',
    ],
    bullets: [
      'SOC 2 Type II certified infrastructure and processes',
      'End-to-end encryption for all data in transit and at rest',
      'Regular penetration testing and vulnerability assessments',
      'Dedicated security team with 24/7 monitoring and incident response',
      'Physical security controls at all data center facilities',
      'Employee background checks and ongoing security training',
    ],
  },
  {
    title: '6. Data Retention',
    content: [
      'We retain your information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. PHI is retained in accordance with applicable healthcare regulations and our BAA terms. When data is no longer needed, it is securely deleted or de-identified using industry-standard methods.',
    ],
    bullets: [],
  },
  {
    title: '7. Your Rights',
    content: [
      'Depending on your jurisdiction, you may have the following rights regarding your personal information:',
    ],
    bullets: [
      'Access — Request a copy of the personal information we hold about you',
      'Correction — Request correction of inaccurate or incomplete information',
      'Deletion — Request deletion of your personal information, subject to legal retention requirements',
      'Portability — Request a copy of your data in a portable, machine-readable format',
      'Restriction — Request that we limit processing of your personal information',
      'Objection — Object to processing of your personal information for certain purposes',
    ],
  },
  {
    title: '8. Cookies and Tracking',
    content: [
      'Our platform uses essential cookies to maintain session state and provide core functionality. We use analytics tools to understand how our platform is used and to improve performance. You can control cookie preferences through your browser settings. We do not use tracking technologies for advertising purposes.',
    ],
    bullets: [],
  },
  {
    title: '9. Children\'s Privacy',
    content: [
      'Our platform is designed for use by healthcare professionals and organizations. We do not knowingly collect personal information from individuals under the age of 18. If we learn that we have collected information from a minor, we will take steps to delete it promptly.',
    ],
    bullets: [],
  },
  {
    title: '10. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by posting the updated policy on our website and, where required, by direct communication. Your continued use of our platform after changes take effect constitutes acceptance of the updated policy.',
    ],
    bullets: [],
  },
  {
    title: '11. Contact Us',
    content: [
      'If you have questions about this Privacy Policy, our data practices, or wish to exercise your rights, please contact us at:',
    ],
    bullets: [
      'Email: privacy@configural.ai',
      'Address: Configural, Inc.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Configural's privacy policy. Learn how we collect, use, and protect your information with HIPAA-compliant security measures."
      />
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(145deg, #065A62 0%, #097C87 50%, #0A8F9A 100%)',
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 20% 50%, rgba(252,164,124,0.08) 0%, transparent 60%)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: '#FCA47C',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                mb: 2,
                display: 'block',
              }}
            >
              Legal
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                fontWeight: 600,
                color: '#F8FAFB',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                color: 'rgba(248, 250, 251, 0.8)',
                fontSize: '1.15rem',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Your privacy is fundamental to everything we build. This policy describes how Configural collects, uses, and protects your information.
            </Typography>
            <Typography
              sx={{
                color: 'rgba(248, 250, 251, 0.5)',
                fontSize: '0.9rem',
                mt: 3,
              }}
            >
              Last updated: March 18, 2026
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content */}
      <SectionWrapper>
        <Container maxWidth="md">
          {sections.map((section, idx) => (
            <MotionBox
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              sx={{ mb: 5 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                  fontWeight: 600,
                  color: '#065A62',
                  fontSize: '1.5rem',
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>
              {section.content.map((para, pIdx) => (
                <Typography
                  key={pIdx}
                  sx={{
                    color: '#3A5A62',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    mb: section.bullets.length > 0 ? 2 : 0,
                  }}
                >
                  {para}
                </Typography>
              ))}
              {section.bullets.length > 0 && (
                <Box component="ul" sx={{ pl: 3, m: 0 }}>
                  {section.bullets.map((bullet, bIdx) => (
                    <Box
                      component="li"
                      key={bIdx}
                      sx={{
                        color: '#3A5A62',
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                        mb: 0.5,
                        '&::marker': { color: '#097C87' },
                      }}
                    >
                      {bullet}
                    </Box>
                  ))}
                </Box>
              )}
              {idx < sections.length - 1 && (
                <Divider sx={{ mt: 4, borderColor: 'rgba(9, 124, 135, 0.1)' }} />
              )}
            </MotionBox>
          ))}
        </Container>
      </SectionWrapper>

      {/* Internal Links */}
      <Box sx={{ py: 6, background: '#F8FAFB' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#065A62', mb: 3 }}>
            Learn more about how Configural protects your data and transforms healthcare operations.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button component={Link} to="/terms" variant="outlined" sx={{ borderColor: '#097C87', color: '#097C87' }}>
              Terms of Service
            </Button>
            <Button component={Link} to="/platform" variant="outlined" sx={{ borderColor: '#097C87', color: '#097C87' }}>
              Explore the Platform
            </Button>
            <Button component={Link} to="/demo" variant="contained" sx={{ background: '#097C87', '&:hover': { background: '#065A62' } }}>
              Request a Demo
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
