import { Box, Typography } from '@mui/material';

// Each theme = full color palette for icon + text + subtitle
const themes = [
  {
    name: 'Current — Teal & Coral',
    centerNode: '#23CED9', nodeA: '#F8FAFB', nodeB: '#FCA47C', nodeC: '#23CED9',
    lines: ['#F8FAFB', '#FCA47C', '#23CED9'], orbit: '#23CED9', pulse: '#F8FAFB',
    text: '#F8FAFB', subtitle: '#23CED9',
  },
  {
    name: 'Electric Blue & Gold',
    centerNode: '#3B82F6', nodeA: '#F8FAFB', nodeB: '#F59E0B', nodeC: '#3B82F6',
    lines: ['#F8FAFB', '#F59E0B', '#3B82F6'], orbit: '#3B82F6', pulse: '#F8FAFB',
    text: '#F59E0B', subtitle: '#60A5FA',
  },
  {
    name: 'Emerald & Lime',
    centerNode: '#10B981', nodeA: '#F8FAFB', nodeB: '#A3E635', nodeC: '#10B981',
    lines: ['#F8FAFB', '#A3E635', '#10B981'], orbit: '#10B981', pulse: '#F8FAFB',
    text: '#34D399', subtitle: '#A3E635',
  },
  {
    name: 'Violet & Rose',
    centerNode: '#8B5CF6', nodeA: '#F8FAFB', nodeB: '#F472B6', nodeC: '#8B5CF6',
    lines: ['#F8FAFB', '#F472B6', '#8B5CF6'], orbit: '#8B5CF6', pulse: '#F8FAFB',
    text: '#A78BFA', subtitle: '#F472B6',
  },
  {
    name: 'Sunset — Orange & Red',
    centerNode: '#F97316', nodeA: '#F8FAFB', nodeB: '#EF4444', nodeC: '#F97316',
    lines: ['#F8FAFB', '#EF4444', '#F97316'], orbit: '#F97316', pulse: '#F8FAFB',
    text: '#FCA47C', subtitle: '#FB923C',
  },
  {
    name: 'Arctic — Ice Blue & White',
    centerNode: '#38BDF8', nodeA: '#F8FAFB', nodeB: '#E0F2FE', nodeC: '#38BDF8',
    lines: ['#F8FAFB', '#BAE6FD', '#38BDF8'], orbit: '#38BDF8', pulse: '#F8FAFB',
    text: '#F8FAFB', subtitle: '#7DD3FC',
  },
  {
    name: 'Midnight — Deep Blue & Cyan',
    centerNode: '#06B6D4', nodeA: '#F8FAFB', nodeB: '#22D3EE', nodeC: '#0EA5E9',
    lines: ['#F8FAFB', '#22D3EE', '#06B6D4'], orbit: '#06B6D4', pulse: '#F8FAFB',
    text: '#22D3EE', subtitle: '#67E8F9',
  },
  {
    name: 'Monochrome — All White',
    centerNode: '#F8FAFB', nodeA: '#F8FAFB', nodeB: '#F8FAFB', nodeC: '#F8FAFB',
    lines: ['#F8FAFB', '#F8FAFB', '#F8FAFB'], orbit: '#F8FAFB', pulse: '#F8FAFB',
    text: '#F8FAFB', subtitle: 'rgba(248,250,251,0.5)',
  },
];

const FullLogoVariant = ({ size = 90, theme }) => {
  const fontSize = size * 0.45;
  const iconSize = size * 0.7;

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: `${size * 0.08}px`, userSelect: 'none' }}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        {/* Center node */}
        <circle cx="20" cy="20" r="4.5" fill={theme.centerNode}>
          <animate attributeName="r" values="4.5;5.2;4.5" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Outer nodes */}
        <circle cx="20" cy="6" r="2.8" fill={theme.nodeA} opacity="0.9" />
        <circle cx="8" cy="30" r="2.8" fill={theme.nodeB} opacity="0.9" />
        <circle cx="32" cy="30" r="2.8" fill={theme.nodeC} opacity="0.7" />
        <circle cx="6" cy="16" r="2" fill={theme.nodeA} opacity="0.5" />
        <circle cx="34" cy="16" r="2" fill={theme.nodeB} opacity="0.5" />
        {/* Connection lines */}
        <line x1="20" y1="8.8" x2="20" y2="15.5" stroke={theme.lines[0]} strokeWidth="1.2" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="10.2" y1="28.5" x2="16.5" y2="22.5" stroke={theme.lines[1]} strokeWidth="1.2" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="29.8" y1="28.5" x2="23.5" y2="22.5" stroke={theme.lines[2]} strokeWidth="1.2" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.8s" repeatCount="indefinite" />
        </line>
        <line x1="7.5" y1="17.5" x2="15.8" y2="19" stroke={theme.lines[0]} strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.55;0.3" dur="3.2s" repeatCount="indefinite" />
        </line>
        <line x1="32.5" y1="17.5" x2="24.2" y2="19" stroke={theme.lines[1]} strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.55;0.3" dur="2.6s" repeatCount="indefinite" />
        </line>
        {/* Orbit ring */}
        <circle cx="20" cy="20" r="16" fill="none" stroke={theme.orbit} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 6">
          <animateTransform attributeName="transform" type="rotate" values="0 20 20;360 20 20" dur="30s" repeatCount="indefinite" />
        </circle>
        {/* Pulse ring */}
        <circle cx="20" cy="20" r="8" fill="none" stroke={theme.pulse} strokeWidth="0.6" opacity="0.12">
          <animate attributeName="r" values="8;9.5;8" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.12;0.25;0.12" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
      <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <Box sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: `${fontSize}px`, letterSpacing: '-0.02em' }}>
          <span style={{ color: theme.text }}>Configural</span>
        </Box>
        <Box sx={{ fontFamily: '"DM Sans Variable", "DM Sans", sans-serif', fontWeight: 400, fontSize: `${fontSize * 0.38}px`, letterSpacing: '0.14em', textTransform: 'uppercase', color: theme.subtitle, mt: `${size * 0.02}px`, opacity: 0.85 }}>
          Healthcare Administration
        </Box>
      </Box>
    </Box>
  );
};

export default function LogoPreview() {
  return (
    <Box sx={{ minHeight: '100vh', background: '#0A0A0A', py: 8, px: 4 }}>
      <Typography variant="h4" sx={{ color: '#F8FAFB', mb: 1, fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, textAlign: 'center' }}>
        Full Logo Color Themes
      </Typography>
      <Typography sx={{ color: 'rgba(248,250,251,0.5)', mb: 6, textAlign: 'center', fontSize: '0.9rem' }}>
        Each option changes icon nodes, lines, text, and subtitle together
      </Typography>

      {/* Dark background */}
      <Typography variant="h6" sx={{ color: 'rgba(248,250,251,0.6)', mb: 3, fontFamily: '"Space Grotesk", sans-serif', textAlign: 'center' }}>
        On Dark Background (hero)
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, maxWidth: 1100, mx: 'auto', mb: 8 }}>
        {themes.map((theme) => (
          <Box
            key={theme.name}
            sx={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 3,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {[theme.centerNode, theme.nodeB, theme.text, theme.subtitle].map((c, i) => (
                  <Box key={i} sx={{ width: 12, height: 12, borderRadius: '50%', background: c, border: '1px solid rgba(255,255,255,0.15)' }} />
                ))}
              </Box>
              <Typography sx={{ color: 'rgba(248,250,251,0.6)', fontSize: '0.75rem', fontFamily: 'monospace', ml: 0.5 }}>
                {theme.name}
              </Typography>
            </Box>
            <FullLogoVariant size={90} theme={theme} />
          </Box>
        ))}
      </Box>

      {/* Teal navbar background */}
      <Typography variant="h6" sx={{ color: 'rgba(248,250,251,0.6)', mb: 3, fontFamily: '"Space Grotesk", sans-serif', textAlign: 'center' }}>
        On Teal Background (scrolled navbar)
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, maxWidth: 1100, mx: 'auto' }}>
        {themes.map((theme) => (
          <Box
            key={theme.name}
            sx={{
              background: 'rgba(9,124,135,0.92)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(248,250,251,0.1)',
              borderRadius: 3,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {[theme.centerNode, theme.nodeB, theme.text, theme.subtitle].map((c, i) => (
                  <Box key={i} sx={{ width: 12, height: 12, borderRadius: '50%', background: c, border: '1px solid rgba(255,255,255,0.15)' }} />
                ))}
              </Box>
              <Typography sx={{ color: 'rgba(248,250,251,0.6)', fontSize: '0.75rem', fontFamily: 'monospace', ml: 0.5 }}>
                {theme.name}
              </Typography>
            </Box>
            <FullLogoVariant size={90} theme={theme} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
