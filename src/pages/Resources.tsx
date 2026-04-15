import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import {
  Download as DownloadIcon,
  Link as LinkIcon,
  VideoLibrary as VideoIcon,
  MenuBook as GuideIcon,
  Phone as PhoneIcon,
  Calculate as CalculatorIcon,
} from '@mui/icons-material';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Benefits Calculator',
      description: 'Calculate your potential VA benefits based on your current disability rating.',
      icon: <CalculatorIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      action: 'USE CALCULATOR',
    },
    {
      title: 'Educational Guides',
      description: 'Comprehensive guides on VA claims process, C&P exams, and benefit eligibility.',
      icon: <GuideIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      action: 'VIEW GUIDES',
    },
    {
      title: 'Video Resources',
      description: 'Educational videos explaining complex VA processes in simple terms.',
      icon: <VideoIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      action: 'WATCH VIDEOS',
    },
    {
      title: 'Downloadable Forms',
      description: 'Essential VA forms and documents you need for your claims process.',
      icon: <DownloadIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      action: 'DOWNLOAD FORMS',
    },
    {
      title: 'Helpful Links',
      description: 'Curated links to important VA websites and veteran resources.',
      icon: <LinkIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      action: 'VIEW LINKS',
    },
    {
      title: 'Contact Support',
      description: 'Get personalized help with your specific VA claims questions.',
      icon: <PhoneIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      action: 'CONTACT US',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #303f9f 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Veterans Resources
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', maxWidth: '600px' }}>
            Access our comprehensive collection of tools, guides, and resources designed to help you navigate the VA benefits process with confidence.
          </Typography>
        </Container>
      </Box>

      {/* Resources Grid */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {resourceCategories.map((resource, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                  <CardContent>
                    <Box sx={{ mb: 3 }}>
                      {resource.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {resource.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                      {resource.description}
                    </Typography>
                    <Button variant="outlined" color="primary" fullWidth>
                      {resource.action}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Additional Information */}
          <Box sx={{ mt: 8, textAlign: 'center', p: 4, backgroundColor: 'white', borderRadius: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Need Personalized Help?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
              While our resources provide valuable information, every veteran's situation is unique. 
              Our experts are here to provide personalized guidance tailored to your specific needs.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              SCHEDULE A CONSULTATION
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Resources;
