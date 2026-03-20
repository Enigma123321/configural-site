import { Box, Container, Typography, Divider, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import SEO from '../components/SEO';

const MotionBox = motion.create(Box);

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the Configural platform, website, AI employees, or any related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.',
      'If you do not agree to these Terms, you must not access or use our Services.',
    ],
    bullets: [],
  },
  {
    title: '2. Description of Services',
    content: [
      'Configural provides an AI-powered healthcare operations platform that includes AI employees designed to assist with clinical and administrative workflows. Our Services include, but are not limited to:',
    ],
    bullets: [
      'AI-powered scheduling, referral coordination, and care management',
      'Prior authorization automation and insurance verification',
      'Patient engagement and care navigation tools',
      'Triage, waitlist management, and resource optimization',
      'Integration with Electronic Medical Record (EMR) systems',
      'Analytics, reporting, and operational dashboards',
    ],
  },
  {
    title: '3. Account Registration and Security',
    content: [
      'To use certain features of our Services, you must register for an account. You agree to:',
    ],
    bullets: [
      'Provide accurate, current, and complete information during registration',
      'Maintain and promptly update your account information',
      'Keep your login credentials confidential and secure',
      'Notify Configural immediately of any unauthorized access or security breach',
      'Accept responsibility for all activities that occur under your account',
    ],
  },
  {
    title: '4. Permitted Use',
    content: [
      'You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:',
    ],
    bullets: [
      'Use the Services in any way that violates applicable laws or regulations, including HIPAA, HITECH, and state healthcare privacy laws',
      'Attempt to gain unauthorized access to any part of the Services, other accounts, or computer systems',
      'Interfere with or disrupt the integrity or performance of the Services',
      'Use the Services to transmit viruses, malware, or other harmful code',
      'Reverse engineer, decompile, or disassemble any part of the Services',
      'Use the Services for any purpose other than legitimate healthcare operations',
      'Share, resell, or sublicense access to the Services without written authorization',
    ],
  },
  {
    title: '5. Healthcare Disclaimer',
    content: [
      'Configural\'s AI employees are designed to assist healthcare professionals with operational and administrative tasks. Our Services are not a substitute for professional medical judgment, diagnosis, or treatment.',
    ],
    bullets: [
      'All clinical decisions remain the sole responsibility of licensed healthcare providers',
      'AI-generated recommendations, schedules, and workflows should be reviewed by qualified personnel',
      'Configural does not practice medicine and our AI employees do not provide medical advice',
      'Users are responsible for verifying the accuracy and appropriateness of all AI-assisted outputs',
      'Emergency situations should always be handled through established clinical protocols',
    ],
  },
  {
    title: '6. HIPAA and Compliance',
    content: [
      'Configural operates as a Business Associate under HIPAA when processing Protected Health Information (PHI) on behalf of covered entities. We will:',
    ],
    bullets: [
      'Execute a Business Associate Agreement (BAA) with each covered entity client prior to processing PHI',
      'Implement and maintain administrative, physical, and technical safeguards as required by HIPAA',
      'Report any security incidents or breaches of unsecured PHI in accordance with applicable law',
      'Ensure that any subcontractors who access PHI agree to the same restrictions and conditions',
      'Return or destroy PHI upon termination of the BAA, as directed by the covered entity',
    ],
  },
  {
    title: '7. Intellectual Property',
    content: [
      'The Services, including all software, AI models, algorithms, designs, text, graphics, and other content, are owned by Configural and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Services for your internal business purposes during the term of your subscription.',
      'You retain ownership of all data you provide to the Services. By using our platform, you grant Configural a limited license to process your data solely for the purpose of providing and improving the Services, subject to our Privacy Policy and any applicable BAA.',
    ],
    bullets: [],
  },
  {
    title: '8. Service Availability and Support',
    content: [
      'We strive to maintain high availability of our Services but do not guarantee uninterrupted access. We may occasionally need to perform maintenance, updates, or modifications that temporarily affect availability. We will provide reasonable advance notice of planned maintenance whenever possible.',
    ],
    bullets: [],
  },
  {
    title: '9. Fees and Payment',
    content: [
      'Fees for the Services are set forth in your subscription agreement or order form. Unless otherwise stated:',
    ],
    bullets: [
      'Fees are billed in advance on a monthly or annual basis as specified in your agreement',
      'All fees are non-refundable except as required by law or as specified in your agreement',
      'Configural reserves the right to modify pricing with 30 days advance written notice',
      'Late payments may result in suspension of Services and are subject to applicable late fees',
      'You are responsible for all applicable taxes related to your use of the Services',
    ],
  },
  {
    title: '10. Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, Configural shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or related to your use of the Services.',
      'Configural\'s total liability for any claims arising under these Terms shall not exceed the fees paid by you to Configural during the twelve (12) months preceding the claim.',
    ],
    bullets: [],
  },
  {
    title: '11. Indemnification',
    content: [
      'You agree to indemnify, defend, and hold harmless Configural and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.',
    ],
    bullets: [],
  },
  {
    title: '12. Termination',
    content: [
      'Either party may terminate these Terms upon written notice if the other party materially breaches these Terms and fails to cure such breach within thirty (30) days of receiving written notice. Configural may also suspend or terminate access to the Services immediately if required by law or to prevent harm to other users or the platform.',
      'Upon termination, your right to use the Services will cease immediately. We will handle any PHI in accordance with the applicable BAA and HIPAA requirements.',
    ],
    bullets: [],
  },
  {
    title: '13. Changes to Terms',
    content: [
      'We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on our website and providing direct notice where required. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms.',
    ],
    bullets: [],
  },
  {
    title: '14. Governing Law',
    content: [
      'These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws provisions. Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.',
    ],
    bullets: [],
  },
  {
    title: '15. Contact Us',
    content: [
      'If you have questions about these Terms of Service, please contact us at:',
    ],
    bullets: [
      'Email: legal@configural.ai',
      'Address: Configural, Inc.',
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Configural terms of service. Read our terms for using the AI-powered healthcare operations platform."
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
              Terms of Service
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
              Please read these terms carefully before using the Configural platform and services.
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
                    mb: section.bullets.length > 0 && pIdx === section.content.length - 1 ? 2 : 1,
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
            Explore Configural's AI-powered healthcare platform and see how it works for your specialty.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button component={Link} to="/privacy" variant="outlined" sx={{ borderColor: '#097C87', color: '#097C87' }}>
              Privacy Policy
            </Button>
            <Button component={Link} to="/use-cases" variant="outlined" sx={{ borderColor: '#097C87', color: '#097C87' }}>
              Browse Use Cases
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
