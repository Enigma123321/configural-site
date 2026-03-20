import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    // Remove banner offset when dismissed
    document.documentElement.style.setProperty('--banner-height', '0px');
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1400,
        background: 'linear-gradient(90deg, #065A62 0%, #097C87 40%, #0A8F9A 70%, #065A62 100%)',
        backgroundSize: '200% 100%',
        animation: 'bannerShimmer 6s ease infinite',
        '@keyframes bannerShimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        borderBottom: '1px solid rgba(248,250,251,0.1)',
        py: 0.8,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            background: 'rgba(252,164,124,0.2)',
            border: '1px solid rgba(252,164,124,0.3)',
            borderRadius: '4px',
            px: 1,
            py: 0.2,
          }}
        >
          <Typography
            sx={{
              fontSize: '0.65rem',
              fontWeight: 700,
              color: '#FCA47C',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            News
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: '0.75rem', md: '0.82rem' },
            color: '#F8FAFB',
            fontFamily: '"DM Sans Variable", "DM Sans", sans-serif',
            fontWeight: 500,
          }}
        >
          ManageCare is now Configural —{' '}
          <Box
            component={Link}
            to="/announcement"
            sx={{
              color: '#23CED9',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Read the full story →
          </Box>
        </Typography>
      </Box>
      <IconButton
        onClick={() => setVisible(false)}
        sx={{
          color: 'rgba(248,250,251,0.5)',
          p: 0.3,
          ml: 1,
          '&:hover': { color: '#F8FAFB', background: 'rgba(255,255,255,0.1)' },
        }}
      >
        <CloseIcon sx={{ fontSize: 16 }} />
      </IconButton>
    </Box>
  );
}
