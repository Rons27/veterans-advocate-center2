import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', //深蓝色 (Deep Navy Blue) - Professional patriotic blue
      dark: '#0d1642',
      light: '#3949ab',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d32f2f', // Professional red for CTAs and accents
      dark: '#b71c1c',
      light: '#ff6659',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f9fa', // Slightly warmer gray
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a', // Darker for better contrast
      secondary: '#4a5568', // Professional gray
    },
    grey: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#a0aec0',
      500: '#718096',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },
    // Custom patriotic palette extension
    info: {
      main: '#1a237e', // Navy blue for information
      light: '#3949ab',
      dark: '#0d1642',
    },
    success: {
      main: '#2e7d32', // Military green
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#1a1a1a',
      '@media (max-width:900px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: '#1a1a1a',
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#1a1a1a',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1a1a1a',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1a1a1a',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#1a1a1a',
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#4a5568',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#4a5568',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#4a5568',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: '8px',
          fontWeight: 700,
          padding: '14px 32px',
          fontSize: '0.875rem',
          letterSpacing: '0.05em',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
          },
        },
        sizeSmall: {
          padding: '10px 20px',
          fontSize: '0.8rem',
        },
        sizeLarge: {
          padding: '16px 40px',
          fontSize: '1rem',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            background: 'linear-gradient(45deg, #d32f2f 30%, #ff6659 90%)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(45deg, #b71c1c 30%, #d32f2f 90%)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e2e8f0',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 28px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          background: 'linear-gradient(45deg, #1a237e 30%, #3949ab 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        h2: {
          position: 'relative',
          '&.section-title': {
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(45deg, #d32f2f 30%, #ff6659 90%)',
              borderRadius: '2px',
            },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '20px',
          paddingRight: '20px',
          '@media (min-width:600px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 8, // Base spacing unit
  shape: {
    borderRadius: 12, // Consistent border radius
  },
});

export default theme;