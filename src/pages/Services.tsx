import { Box, Container, Typography, Grid, Button, Card } from '@mui/material';
import {
  School as EducationIcon,
  Assessment as BenefitsIcon,
  FolderCopy as DocumentIcon,
  Groups as GroupsIcon,
  Quiz as ExamIcon,
  Gavel as AppealsIcon,
  MedicalServices as SecondaryIcon,
  TrackChanges as TrackingIcon,
  Event as EventsIcon,
  Support as SupportIcon,
  LibraryBooks as ResourcesIcon,
  MoneyOff as NoFeesIcon,
  School as EducationalIcon,
  Paid as FeesIcon,
  Business as NotVAIcon,
} from '@mui/icons-material';

const Services = () => {
  const mainServices = [
    {
      title: 'VA CLAIMS EDUCATION',
      description: 'Learn how the VA disability claims process works from start to finish.',
      icon: <EducationIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'BENEFITS GUIDANCE & CLAIM STRATEGY',
      description: 'We help you understand your condition, potential, and the best path forward.',
      icon: <BenefitsIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'EVIDENCE & DOCUMENT ORGANIZATION',
      description: 'Organize and understand the evidence needed to build a strong claim.',
      icon: <DocumentIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'UNDERSTANDING THE GOLDEN TRIO',
      description: 'Learn why Diagnosis, Nexus, and Evidence are the foundation of every successful claim.',
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'C&P EXAM PREPARATION EDUCATION',
      description: 'We teach you what to expect, how to prepare, and how to communicate your symptoms.',
      icon: <ExamIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'DENIAL REVIEW & NEXT STEP GUIDANCE',
      description: 'We help you understand why claims are denied and what to do next.',
      icon: <AppealsIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'APPEALS EDUCATION & STEP-BY-STEP SUPPORT',
      description: 'Understand your options and the exact steps to keep your claim moving forward.',
      icon: <AppealsIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'SECONDARY CONDITIONS EDUCATION',
      description: 'Learn how service-connected conditions can impact or cause secondary conditions.',
      icon: <SecondaryIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'CLAIM TRACKING & GUIDED DIGITAL SUPPORT',
      description: 'Learn how to use VALPRS to track your claim and stay informed every step of the way.',
      icon: <TrackingIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'COMMUNITY EVENTS & IN-PERSON OUTREACH',
      description: 'Join local events, workshops, and veteran meetups designed to inform and connect.',
      icon: <EventsIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'ONE-ON-ONE SUPPORT & BENEFITS ACCOUNT MANAGER GUIDANCE',
      description: 'Get personalized help from a dedicated Benefits Account Manager who understands every step of the way.',
      icon: <SupportIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
    {
      title: 'RESOURCES FOR ADDITIONAL BENEFITS',
      description: 'Explore benefits beyond a basic rating, including benefits for dependents, healthcare, housing, and more.',
      icon: <ResourcesIcon sx={{ fontSize: 40, color: '#6c757d' }} />,
    },
  ];

  const highlightedServices = [
    {
      title: 'NO UPFRONT FEES',
      description: 'You don\'t pay us a penny to get started.',
      icon: <NoFeesIcon sx={{ fontSize: 40, color: 'white' }} />,
      color: '#3498db',
    },
    {
      title: 'EDUCATIONAL SUPPORT ONLY',
      description: 'We teach and guide — we do not file claims for you.',
      icon: <EducationalIcon sx={{ fontSize: 40, color: 'white' }} />,
      color: '#3498db',
    },
    {
      title: 'FEES ONLY AFTER A SUCCESSFUL OUTCOME',
      description: 'We only get paid when we win your case.',
      icon: <FeesIcon sx={{ fontSize: 40, color: 'white' }} />,
      color: '#3498db',
    },
    {
      title: 'NOT THE VA, NOT A LAW FIRM, NOT A VASO',
      description: 'We are an education and advocacy organization that works for you.',
      icon: <NotVAIcon sx={{ fontSize: 40, color: 'white' }} />,
      color: '#3498db',
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
          py: { xs: 8, md: 12 },
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} sx={{ alignItems: 'center', minHeight: '400px' }}>
            <Grid item xs={12} md={8}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    fontWeight: 800,
                    mb: 2,
                    lineHeight: 0.9,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    color: 'white !important',
                    letterSpacing: '-0.02em',
                  }}
                >
                  How We Help
                  <br />
                  Veterans Move Forward
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
                  Veterans Advocate Center educates veterans to better understand the VA disability claims process and move forward with clarity and confidence.
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
                    GET STARTED
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
                    BOOK A CALL
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Services Section */}
      <Box sx={{ py: { xs: 1, md: 1 }, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {mainServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: { xs: 2, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 2,
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
                      width: 80,
                      height: 80,
                      backgroundColor: '#f1f3f5',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
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
                        fontSize: '1rem', 
                        color: '#2d3748',
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontSize: '0.9rem', 
                        color: '#6c757d', 
                        lineHeight: 1.4,
                        mb: 2,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.9rem',
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

      {/* Highlighted Services Section */}
      <Box sx={{ py: { xs: 2, md: 1 }, backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {highlightedServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 2,
                    backgroundColor: service.color,
                    borderRadius: 2,
                    boxShadow: '0 4px 16px rgba(52, 152, 219, 0.2)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(52, 152, 219, 0.3)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
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
                        fontSize: '1rem', 
                        color: 'white',
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontSize: '0.9rem', 
                        color: 'rgba(255, 255, 255, 0.9)', 
                        lineHeight: 1.4,
                        mb: 2,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'white',
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
    </Box>
  );
};

export default Services;
