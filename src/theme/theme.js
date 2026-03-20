import { createTheme } from '@mui/material/styles';

const headingFont = '"Cormorant Garamond Variable", "Cormorant Garamond", Georgia, serif';
const bodyFont = '"DM Sans Variable", "DM Sans", -apple-system, sans-serif';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#097C87',
      light: '#065A62',
      dark: '#065A62',
      contrastText: '#F8FAFB',
    },
    secondary: {
      main: '#065A62',
      light: '#065A62',
      dark: '#065A62',
    },
    background: {
      default: '#F8FAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#065A62',
      secondary: '#065A62',
    },
    divider: 'rgba(9, 124, 135, 0.12)',
  },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: headingFont,
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '0.01em',
      '@media (max-width:900px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: headingFont,
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: '0.01em',
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: headingFont,
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: headingFont,
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: headingFont,
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: bodyFont,
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.7,
      letterSpacing: '-0.02em',
    },
    body2: {
      fontSize: '0.95rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    overline: {
      fontFamily: bodyFont,
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: bodyFont,
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: '0.85rem',
      letterSpacing: '0.13em',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '14px 32px',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
        },
        containedPrimary: {
          background: '#097C87',
          color: '#F8FAFB',
          boxShadow: 'none',
          '&:hover': {
            background: '#23CED9',
            boxShadow: 'none',
          },
          transition: 'all 0.3s ease',
        },
        outlinedPrimary: {
          borderColor: '#065A62',
          color: '#065A62',
          '&:hover': {
            borderColor: '#097C87',
            background: 'rgba(9, 124, 135, 0.04)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          border: 'none',
          boxShadow: '0 1px 3px rgba(9, 124, 135, 0.06)',
          borderRadius: 8,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(9, 124, 135, 0.1)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});

export default theme;
