import { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Container,
  IconButton, Drawer, List, ListItem, ListItemText, useScrollTrigger,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
  { label: 'Platform', path: '/platform' },
  { label: 'Solutions', path: '/solutions', hasSubmenu: true },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Company', path: '/company' },
];

const solutionsMenu = {
  columns: [
    {
      title: 'By Industry',
      items: [
        { label: 'For Oncology Clinics', path: '/use-cases/oncology' },
        { label: 'For Specialty Practices', path: '/use-cases/multi-specialty' },
        { label: 'For Health Systems', path: '/use-cases/aco' },
        { label: 'For Cancer Networks', path: '/use-cases/oncology' },
        { label: 'All Industries →', path: '/use-cases', highlight: true },
      ],
    },
    {
      title: 'AI Employees',
      items: [
        { label: 'AI Scheduler', path: '/agents' },
        { label: 'AI Care Manager', path: '/agents' },
        { label: 'AI Prior Auth Agent', path: '/agents' },
        { label: 'AI Referral Coordinator', path: '/agents' },
        { label: 'Meet All AI Employees →', path: '/agents', highlight: true },
      ],
    },
    {
      title: 'By Outcome',
      items: [
        { label: 'Reduce Scheduling Delays', path: '/outcomes/reduce-scheduling-delays' },
        { label: 'Increase Patient Throughput', path: '/outcomes/increase-patient-throughput' },
        { label: 'Reduce Referral Leakage', path: '/outcomes/reduce-referral-leakage' },
        { label: 'Automate Admin Tasks', path: '/outcomes/automate-admin-tasks' },
      ],
    },
    {
      title: 'Overview',
      items: [
        { label: 'How the Platform Works', path: '/platform' },
        { label: 'AI Agents in Healthcare', path: '/agents' },
        { label: 'EMR Integrations', path: '/platform' },
      ],
    },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  // Pages with light hero backgrounds need dark navbar text
  const lightHeroPages = ['/demo'];
  const isLightHero = lightHeroPages.includes(location.pathname);
  const useDarkText = isLightHero && !trigger;

  const isSolutionsActive =
    location.pathname.startsWith('/use-cases') ||
    location.pathname === '/solutions' ||
    location.pathname === '/agents';

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: trigger
            ? 'rgba(9, 124, 135, 0.92)'
            : isLightHero
              ? 'rgba(224, 240, 244, 0.8)'
              : 'transparent',
          backdropFilter: trigger || isLightHero ? 'blur(20px)' : 'none',
          borderBottom: trigger ? '1px solid rgba(248, 250, 251, 0.1)' : isLightHero ? '1px solid rgba(9, 124, 135, 0.08)' : 'none',
          transition: 'all 0.4s ease',
          zIndex: 1300,
          top: trigger ? 0 : 'var(--banner-height, 36px)',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 8, lg: 12 } }}>
          <Toolbar sx={{ py: 1.5, px: { xs: 0 } }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                gap: 1,
              }}
            >
              <Logo size={80} light={!useDarkText} />
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {navItems.map((item) =>
                item.hasSubmenu ? (
                  <Box
                    key={item.label}
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    sx={{ position: 'relative' }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      endIcon={
                        <KeyboardArrowDownIcon
                          sx={{
                            fontSize: '18px !important',
                            transition: 'transform 0.2s ease',
                            transform: solutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        />
                      }
                      sx={{
                        color: useDarkText
                          ? '#065A62'
                          : (isSolutionsActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)'),
                        fontWeight: 600,
                        fontSize: '1.15rem',
                        px: 2,
                        textTransform: 'none',
                        letterSpacing: 'normal',
                        transition: 'color 0.4s ease',
                        '&:hover': {
                          color: useDarkText ? '#065A62' : '#F8FAFB',
                          background: 'transparent',
                        },
                      }}
                    >
                      {item.label}
                    </Button>

                    {/* Mega Dropdown */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        pt: 1,
                        opacity: solutionsOpen ? 1 : 0,
                        visibility: solutionsOpen ? 'visible' : 'hidden',
                        transition: 'all 0.25s ease',
                        zIndex: 1400,
                      }}
                    >
                      <Box
                        sx={{
                          background: '#FFFFFF',
                          borderRadius: 3,
                          boxShadow: '0 20px 60px rgba(6,90,98,0.18), 0 4px 12px rgba(6,90,98,0.08)',
                          border: '1px solid rgba(9,124,135,0.1)',
                          p: 3,
                          minWidth: 880,
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 1fr)',
                          gap: 3,
                        }}
                      >
                        {solutionsMenu.columns.map((col) => (
                          <Box key={col.title}>
                            {/* Column Header */}
                            <Typography
                              sx={{
                                fontWeight: 700,
                                color: '#065A62',
                                fontSize: '0.9rem',
                                pb: 1,
                                mb: 1,
                                borderBottom: '2px solid #097C87',
                                letterSpacing: '0.02em',
                              }}
                            >
                              {col.title}
                            </Typography>

                            {/* Column Items */}
                            {col.items.map((menuItem, idx) => (
                              <Box
                                key={`${col.title}-${idx}`}
                                component={Link}
                                to={menuItem.path}
                                onClick={() => setSolutionsOpen(false)}
                                sx={{
                                  display: 'block',
                                  textDecoration: 'none',
                                  px: 1.5,
                                  py: 0.9,
                                  borderRadius: 1.5,
                                  transition: 'all 0.15s ease',
                                  background: location.pathname === menuItem.path ? 'rgba(9,124,135,0.06)' : 'transparent',
                                  '&:hover': {
                                    background: 'rgba(9,124,135,0.06)',
                                  },
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontWeight: menuItem.highlight ? 700 : 500,
                                    color: menuItem.highlight ? '#097C87' : '#1A3C48',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.4,
                                  }}
                                >
                                  {menuItem.label}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: useDarkText
                        ? (location.pathname === item.path ? '#065A62' : '#065A62')
                        : (location.pathname === item.path ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)'),
                      fontWeight: 600,
                      fontSize: '1.15rem',
                      px: 2,
                      textTransform: 'none',
                      letterSpacing: 'normal',
                      transition: 'color 0.4s ease',
                      '&:hover': {
                        color: useDarkText ? '#065A62' : '#F8FAFB',
                        background: 'transparent',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}
              <Button
                variant="contained"
                component={Link}
                to="/demo"
                sx={{
                  ml: 2,
                  background: useDarkText ? '#097C87' : '#F8FAFB',
                  color: useDarkText ? '#FFFFFF' : '#065A62',
                  fontWeight: 600,
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    background: useDarkText ? '#065A62' : '#FFFFFF',
                  },
                }}
              >
                Get Started
              </Button>
            </Box>

            <IconButton
              sx={{ display: { md: 'none' }, color: useDarkText ? '#065A62' : '#F8FAFB', transition: 'color 0.4s ease' }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            background: '#065A62',
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 4 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#F8FAFB' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 4 }}>
          {navItems.map((item) =>
            item.hasSubmenu ? (
              <Box key={item.label}>
                <ListItem
                  sx={{
                    py: 2,
                    borderBottom: '1px solid rgba(248, 250, 251, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                      fontSize: '1.8rem',
                      fontWeight: 300,
                      color: '#F8FAFB',
                    }}
                  />
                  <ExpandMoreIcon
                    sx={{
                      color: '#F8FAFB',
                      transition: 'transform 0.3s ease',
                      transform: mobileSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </ListItem>
                <Collapse in={mobileSolutionsOpen}>
                  <List sx={{ pl: 2 }}>
                    {solutionsMenu.columns.map((col) => (
                      <Box key={col.title} sx={{ mb: 2 }}>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemText
                            primary={col.title}
                            primaryTypographyProps={{
                              fontSize: '1rem',
                              fontWeight: 700,
                              color: '#FCA47C',
                              letterSpacing: '0.03em',
                            }}
                          />
                        </ListItem>
                        {col.items.map((menuItem, idx) => (
                          <ListItem
                            key={`${col.title}-mobile-${idx}`}
                            component={Link}
                            to={menuItem.path}
                            onClick={() => { setMobileOpen(false); setMobileSolutionsOpen(false); }}
                            sx={{ py: 0.6, pl: 2 }}
                          >
                            <ListItemText
                              primary={menuItem.label}
                              primaryTypographyProps={{
                                fontSize: '0.95rem',
                                fontWeight: 300,
                                color: 'rgba(248, 250, 251, 0.8)',
                              }}
                            />
                          </ListItem>
                        ))}
                      </Box>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ) : (
              <ListItem
                key={item.label}
                component={Link}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  py: 2,
                  borderBottom: '1px solid rgba(248, 250, 251, 0.1)',
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: '"Cormorant Garamond Variable", Georgia, serif',
                    fontSize: '1.8rem',
                    fontWeight: 300,
                    color: '#F8FAFB',
                  }}
                />
              </ListItem>
            )
          )}
          <ListItem sx={{ pt: 4 }}>
            <Button
              variant="outlined"
              fullWidth
              size="large"
              component={Link}
              to="/demo"
              onClick={() => setMobileOpen(false)}
              sx={{
                background: '#F8FAFB',
                color: '#065A62',
                fontWeight: 600,
                '&:hover': { background: '#FFFFFF' },
              }}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
