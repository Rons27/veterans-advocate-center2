import { Box, Container, Typography, Grid, Button, Card, CardContent, Fab } from '@mui/material';
import {
  Shield as AdvocacyIcon,
  FavoriteBorder as SupportIcon,
  MenuBook as ResourcesIcon,
  Groups as CommunityIcon,
  Calculate as CalculatorIcon,
  Psychology as MentalHealthIcon,
  Handshake as CommunityBuildingIcon,
  MoneyOff as NoPaymentIcon,
  School as EducationIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';

const Home = () => {
  const topServices = [
    {
      title: 'ADVOCACY',
      description: 'We stand by your side to protect your rights and benefits.',
      icon: <AdvocacyIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'SUPPORT',
      description: 'Compassionate guidance for you and your family.',
      icon: <SupportIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'RESOURCES',
      description: 'Connect the benefits, services, and information you deserve.',
      icon: <ResourcesIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'COMMUNITY',
      description: 'Stronger together. Join a network that understands and cares.',
      icon: <CommunityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
  ];

  const helpServices = [
    {
      title: 'BENEFITS CALCULATOR',
      description: 'Calculate your potential VA Benefits based on your current disability.',
      icon: <CalculatorIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'MENTAL HEALTH SUPPORT',
      description: 'We can educate you how to get your mental health problems treated and service connected.',
      icon: <MentalHealthIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'COMMUNITY BUILDING',
      description: 'Connect with fellow veterans, re-live the brotherhood you had during your service.',
      icon: <CommunityBuildingIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'NO UPFRONT PAYMENT',
      description: 'We ONLY charge you when you get a rating or an increase in your rating.',
      icon: <NoPaymentIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    },
    {
      title: 'EDUCATION SUPPORT',
      description: 'Explore education benefits and pathways to your future.',
      icon: <EducationIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(/background.png)',
          backgroundSize: { xs: 'auto 100%', md: 'cover' },
          backgroundPosition: { xs: '75% center', md: 'center' },
          backgroundRepeat: 'no-repeat',
          color: 'white',
          py: { xs: 8, md: 4 },
          // minHeight: { xs: '440px', md: '680px' },
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(26, 35, 126, 0.8), rgba(26, 35, 126, 0.4), transparent)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2,  mt: { xs: 0, md: -3 } }}>
          <Grid container spacing={4} sx={{ alignItems: 'center', minHeight: '400px' }}>
            <Grid item xs={12} md={8}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '4rem' },
                    fontWeight: 800,
                    mb: 0.5,
                    lineHeight: 0.9,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    color: 'white !important',
                    letterSpacing: '-0.02em',
                  }}
                >
                  You Served
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '4rem' },
                    fontWeight: 800,
                    mb: 3,
                    lineHeight: 0.9,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    color: 'white !important',
                    letterSpacing: '-0.02em',
                  }}
                >
                  You Deserve
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '1.1rem', md: '1.3rem' }, 
                    mb: 4, 
                    maxWidth: '550px',
                    color: 'white !important',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                    lineHeight: 1.5,
                    margin: { xs: '0 auto 2rem', md: '0 0 2rem 0' },
                    fontWeight: 400,
                  }}
                >
                  Veterans Advocate Center educates veterans to better understand 
                  and move through the VA disability claims process with clarity and confidence
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 3, 
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                      component="a"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfz-fXVSJZ8ebmrTZIRSIzGacmC3WNXEIw6mkob-YnpoTINjQ/viewform?usp=sharing&ouid=117015048486566182542"
                    target="_blank" // optional: opens in new tab
                    rel="noopener noreferrer"
                    sx={{ 
                      fontWeight: 700,
                      py: 2,
                      px: 4,
                      fontSize: '1rem',
                      borderRadius: 1,
                      boxShadow: '0 4px 20px rgba(211, 47, 47, 0.4)',
                      '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: '0 6px 25px rgba(211, 47, 47, 0.5)',
                      },
                    }}
                  >
                    GET HELP TODAY
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.7)',
                      borderWidth: 2,
                      fontWeight: 700,
                      py: 2,
                      px: 4,
                      fontSize: '1rem',
                      borderRadius: 1,
                      background: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    LEARN MORE
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Top 4 Service Cards - Overlapping Hero */}
      <Box sx={{ mt: { xs: -6, md: -4 }, position: 'relative', zIndex: 3 }}>
        <Container maxWidth="xl">
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
              border: '1px solid #e2e8f0',
              mb: { xs: 6, md: 10 },
              overflow: 'visible',
            }}
          >
            <CardContent sx={{ p: { xs: 3, sm: 4, md: 3 } }}>
              <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                {topServices.map((service, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: { xs: 1, sm: 2} }}>
                      <Box
                        sx={{
                          width: { xs: 50, sm: 60, md: 70 },
                          height: { xs: 50, sm: 60, md: 70 },
                          backgroundColor: '#f8f9fa',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '2px solid #e9ecef',
                          flexShrink: 0,
                          '& svg': {
                            fontSize: { xs: 24, sm: 28, md: 32 },
                            color: '#1a237e',
                          },
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 700, 
                            mb: { xs: 0.5, sm: 1 }, 
                            color: '#1a237e', 
                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                            lineHeight: 1.2,
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#6c757d', 
                            lineHeight: 1.4, 
                            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.85rem' },
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* HOW WE CAN HELP Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, mt: { xs: 6, md: -15 }, mb: { xs: 5, md: -2 }, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 0 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: '#2d3748',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                letterSpacing: '-0.01em',
                position: 'relative',
                display: 'inline-block',
                mb: 2,
              }}
            >
              HOW WE CAN HELP
            </Typography>
            <Box
              sx={{
                width: '120px',
                height: '4px',
                background: 'linear-gradient(45deg, #d32f2f 30%, #ff6659 90%)',
                borderRadius: '2px',
                mx: 'auto',
              }}
            />
          </Box>

          {/* Help Services Grid - Horizontal Layout */}
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {helpServices.map((service, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: { xs: 2, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    height: '100%',
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 80, md: 100 },
                      height: { xs: 80, md: 100 },
                      backgroundColor: service.title === 'NO UPFRONT PAYMENT' ? '#d32f2f' : '#9e9e9e',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      '& svg': { 
                        fontSize: { xs: 32, md: 40 }, 
                        color: 'white'
                      },
                      ...(service.title === 'NO UPFRONT PAYMENT' && {
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%) rotate(45deg)',
                          width: '60%',
                          height: '4px',
                          backgroundColor: 'white',
                        },
                      }),
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 1, 
                        fontSize: { xs: '0.8rem', md: '0.9rem' }, 
                        color: '#2d3748',
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontSize: { xs: '0.7rem', md: '0.8rem' }, 
                        color: '#6c757d', 
                        lineHeight: 1.4,
                        mb: 1,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '0.7rem', md: '0.8rem' },
                        color: '#d32f2f',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      LEARN MORE →
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Chat with Us Button */}
      <Fab
        color="warning"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#ffc107',
          color: '#000',
          fontWeight: 700,
          fontSize: { xs: '0.8rem', md: '0.9rem' },
          px: { xs: 2, md: 3 },
          borderRadius: '25px',
          minWidth: { xs: '140px', md: '160px' },
          height: { xs: '48px', md: '56px' },
          '&:hover': {
            backgroundColor: '#ffb300',
          },
        }}
      >
        <ChatIcon sx={{ mr: 1 }} />
        CHAT WITH US
      </Fab>
    </Box>
  );
};

export default Home;