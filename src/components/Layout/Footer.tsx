import { Box, Typography, Container, Button, Link } from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a237e',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '80%', px: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: { xs: 'center', md: 'center' },
            gap: { xs: 2, md: 3 },
            width: '100%',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Left Section - Main Message */}
          <Box sx={{ flex: 'none' }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.2,
                color: 'white',
              }}
            >
              YOU SERVED YOUR COUNTRY
              <br />
              NOW LET US SERVE YOU
            </Typography>
          </Box>

          {/* Center Section - Description */}
          <Box sx={{ flex: 1, mx: 3 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.9, 
                fontSize: '0.9rem',
                lineHeight: 1.4,
                color: 'white',
              }}
            >
              Whether you're just getting started, ongoing but confused, or stuck on a denied claim. We can educate you to get through the VA Benefits difficulties.
            </Typography>
          </Box>

          {/* Right Section - Buttons and Contact */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 1.5, md: 2 },
            flex: 'none',
          }}>
            {/* Action Buttons */}
            <Button
              component="a"
  href="https://docs.google.com/forms/d/e/1FAIpQLSfz-fXVSJZ8ebmrTZIRSIzGacmC3WNXEIw6mkob-YnpoTINjQ/viewform?usp=sharing&ouid=117015048486566182542"
  target="_blank" // optional: opens in new tab
  rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              sx={{ 
                fontWeight: 'bold', 
                px: 3,
                py: 1,
                fontSize: '0.9rem',
              }}
            >
              GET STARTED
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                fontWeight: 'bold',
                px: 3,
                py: 1,
                fontSize: '0.9rem',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              BOOK A CALL
            </Button>

            {/* Contact Information */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
              <EmailIcon sx={{ fontSize: '1.2rem' }} />
              <Link 
                href="mailto:info@veteransadvocatecenter.com" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    color: 'white',
                  }}
                >
                  info@veteransadvocatecenter.com
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;