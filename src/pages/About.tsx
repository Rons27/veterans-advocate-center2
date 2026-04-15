import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import {
  Group as TeamIcon,
  Star as MissionIcon,
  Visibility as VisionIcon,
  Favorite as ValuesIcon,
} from '@mui/icons-material';

const About = () => {
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
            About Veterans Advocate Center
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', maxWidth: '700px' }}>
            We are dedicated to empowering veterans with the knowledge, tools, and support they need to successfully navigate the VA benefits process and secure the benefits they've earned through their service.
          </Typography>
        </Container>
      </Box>

      {/* Mission, Vision, Values */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <MissionIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    To educate and empower veterans to understand and successfully navigate the VA disability claims process, ensuring they receive the benefits and support they deserve for their service to our country.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <VisionIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Our Vision
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    A world where every veteran has the knowledge, resources, and support they need to successfully claim their benefits and transition to civilian life with dignity and financial security.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <ValuesIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Our Values
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Integrity, compassion, and dedication to service. We believe in transparency, honest guidance, and putting veterans first in everything we do.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What Makes Us Different */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
              color: 'text.primary',
            }}
          >
            What Makes Us Different
          </Typography>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
                  Educational Support Only
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
                  We teach and guide — we do not file claims for you. Our approach empowers you with the knowledge and tools necessary to handle your own claims with confidence and understanding.
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
                  Fees Only After a Successful Outcome
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
                  We only get paid when we win your case. You get a rating or an increase in your rating.
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
                  NOT the VA, NOT a Law Firm, NOT a VSO
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  We are an education and advocacy organization that works for you. Our loyalty is to veterans, not to any government agency or legal practice.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                  borderRadius: 2,
                  p: 4,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <TeamIcon sx={{ fontSize: 80, mb: 3 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Veteran-Focused
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  Our team understands the unique challenges veterans face because we've been there. We provide the support and guidance you need from people who truly understand your experience.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
