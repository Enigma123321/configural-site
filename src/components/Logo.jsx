import { Box } from '@mui/material';

const LogoIcon = ({ size, light }) => {
  const iconSize = size * 0.7;
  const color1 = light ? '#F8FAFB' : '#097C87';
  const color2 = light ? '#F8FAFB' : '#097C87';
  const color3 = light ? '#F8FAFB' : '#097C87';

  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* Abstract neural/config node network */}
      {/* Center node */}
      <circle cx="20" cy="20" r="4.5" fill={color2}>
        <animate
          attributeName="r"
          values="4.5;5.2;4.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Top node */}
      <circle cx="20" cy="6" r="2.8" fill={color1} opacity="0.9" />
      {/* Bottom-left node */}
      <circle cx="8" cy="30" r="2.8" fill={color3} opacity="0.9" />
      {/* Bottom-right node */}
      <circle cx="32" cy="30" r="2.8" fill={color2} opacity="0.7" />
      {/* Left node */}
      <circle cx="6" cy="16" r="2" fill={color1} opacity="0.5" />
      {/* Right node */}
      <circle cx="34" cy="16" r="2" fill={color3} opacity="0.5" />

      {/* Connection lines */}
      <line x1="20" y1="8.8" x2="20" y2="15.5" stroke={color1} strokeWidth="1.2" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite" />
      </line>
      <line x1="10.2" y1="28.5" x2="16.5" y2="22.5" stroke={color3} strokeWidth="1.2" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="29.8" y1="28.5" x2="23.5" y2="22.5" stroke={color2} strokeWidth="1.2" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.8s" repeatCount="indefinite" />
      </line>
      <line x1="7.5" y1="17.5" x2="15.8" y2="19" stroke={color1} strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.55;0.3" dur="3.2s" repeatCount="indefinite" />
      </line>
      <line x1="32.5" y1="17.5" x2="24.2" y2="19" stroke={color3} strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.55;0.3" dur="2.6s" repeatCount="indefinite" />
      </line>

      {/* Outer orbit ring */}
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="none"
        stroke={color2}
        strokeWidth="0.8"
        opacity="0.15"
        strokeDasharray="4 6"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 20;360 20 20"
          dur="30s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Inner pulse ring */}
      <circle cx="20" cy="20" r="8" fill="none" stroke={color1} strokeWidth="0.6" opacity="0.12">
        <animate attributeName="r" values="8;9.5;8" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.12;0.25;0.12" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

const Logo = ({ size = 40, light = true, iconOnly = false }) => {
  const primary = light ? '#F8FAFB' : '#097C87';
  const accent = '#23CED9';

  const fontSize = size * 0.45;

  if (iconOnly) {
    return <LogoIcon size={size} light={light} />;
  }

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${size * 0.08}px`,
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      <LogoIcon size={size} light={light} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1,
        }}
      >
        <Box
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: `${fontSize}px`,
            letterSpacing: '-0.02em',
            display: 'flex',
          }}
        >
          <span style={{ color: primary }}>Configural</span>
        </Box>
        <Box
          sx={{
            fontFamily: '"DM Sans Variable", "DM Sans", sans-serif',
            fontWeight: 400,
            fontSize: `${fontSize * 0.38}px`,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: light ? 'rgba(248,250,251,0.5)' : 'rgba(9,124,135,0.5)',
            mt: `${size * 0.02}px`,
          }}
        >
          Healthcare Administration
        </Box>
      </Box>
    </Box>
  );
};

export default Logo;
