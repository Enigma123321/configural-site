import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function SectionWrapper({
  children,
  overline,
  title,
  subtitle,
  dark = false,
  centered = true,
  maxWidth = 'lg',
  sx = {},
  id,
}) {
  return (
    <Box
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: dark ? '#FFFFFF' : 'transparent',
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth}>
        {(overline || title || subtitle) && (
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            sx={{
              textAlign: centered ? 'center' : 'left',
              mb: { xs: 5, md: 7 },
              maxWidth: centered ? 700 : 'none',
              mx: centered ? 'auto' : 0,
            }}
          >
            {overline && (
              <Typography variant="overline" sx={{ mb: 2, display: 'block', color: '#097C87' }}>
                {overline}
              </Typography>
            )}
            {title && (
              <Typography variant="h2" component="h2" sx={{ mb: 2, color: '#065A62' }}>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography variant="body1" sx={{ color: '#065A62' }}>
                {subtitle}
              </Typography>
            )}
          </MotionBox>
        )}
        {children}
      </Container>
    </Box>
  );
}
