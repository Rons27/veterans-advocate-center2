import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

const Contact = () => {
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
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', maxWidth: '600px' }}>
            Ready to get the help you deserve? We're here to answer your questions and guide you through your VA benefits journey.
          </Typography>
        </Container>
      </Box>

      {/* Contact Information and Form */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}>
                  Get In Touch
                </Typography>
                
                <Card sx={{ mb: 3, p: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PhoneIcon sx={{ color: 'primary.main', mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          Phone
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          (000) 000-0000
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ mb: 3, p: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <EmailIcon sx={{ color: 'primary.main', mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          Email
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          info@veteransadvokatecenter.com
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ mb: 3, p: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <ScheduleIcon sx={{ color: 'primary.main', mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          Business Hours
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Mon-Fri: 9:00 AM - 6:00 PM PST<br />
                          Saturday: 10:00 AM - 4:00 PM PST<br />
                          Sunday: Closed
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 4 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}>
                    Send Us a Message
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>How can we help you?</InputLabel>
                        <Select
                          label="How can we help you?"
                        >
                          <MenuItem value="general">General Information</MenuItem>
                          <MenuItem value="benefits">Benefits Consultation</MenuItem>
                          <MenuItem value="appeal">Appeal Assistance</MenuItem>
                          <MenuItem value="education">Educational Resources</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={6}
                        variant="outlined"
                        placeholder="Please describe your situation and how we can help you..."
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        fullWidth
                        sx={{ py: 2, fontWeight: 'bold' }}
                      >
                        SEND MESSAGE
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Additional Call to Action */}
          <Box sx={{ mt: 8, textAlign: 'center', p: 4, backgroundColor: 'primary.light', borderRadius: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'white' }}>
              Don't wait any longer to get the benefits you deserve. Schedule a consultation today.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              SCHEDULE CONSULTATION
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
