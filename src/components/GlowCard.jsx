import { Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

export default function GlowCard({ children, delay = 0, sx = {}, ...props }) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      sx={{
        background: '#FFFFFF',
        border: 'none',
        borderRadius: 2,
        boxShadow: '0 1px 3px rgba(9, 124, 135, 0.06)',
        '&:hover': {
          boxShadow: '0 8px 30px rgba(9, 124, 135, 0.1)',
        },
        ...sx,
      }}
      {...props}
    >
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        {children}
      </CardContent>
    </MotionCard>
  );
}
