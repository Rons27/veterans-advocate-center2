import { useRef } from 'react';
import { 
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
} from '@mui/material';
import { FilterList as FilterIcon } from '@mui/icons-material';
import {
  LocationOn as LocationIcon,
  CalendarMonth as CalendarIcon,
  Event as EventIcon,
} from '@mui/icons-material';

const Events = () => {
  const eventsGridRef = useRef<HTMLDivElement>(null);

  const scrollToEvents = () => {
    eventsGridRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const events = [
    {
      title: 'Pangaea Cup 2025',
      location: 'Bohol, Philippines',
      date: 'May 15-18, 2025',
      type: 'CONFERENCE',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Bohol, Philippines',
      location: 'Bohol, Philippines', 
      date: 'June 5-7, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Korea',
      location: 'Seoul, South Korea',
      date: 'July 10-14, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Okinawa, Japan',
      location: 'Okinawa, Japan',
      date: 'July 28 - Aug 1, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Bahrain',
      location: 'Manama, Bahrain',
      date: 'August 15-17, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Saudi Arabia',
      location: 'Riyadh, Saudi Arabia',
      date: 'September 5-8, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Cebu, Philippines',
      location: 'Cebu, Philippines',
      date: 'September 20-22, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Clark, Philippines',
      location: 'Clark, Philippines',
      date: 'October 10-12, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Thailand',
      location: 'Bangkok, Thailand',
      date: 'October 25-29, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Okinawa, Japan',
      location: 'Okinawa, Japan',
      date: 'November 12-16, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Dumaguete, Philippines',
      location: 'Dumaguete, Philippines',
      date: 'November 28-30, 2025',
      type: 'OUTREACH',
      image: '/api/placeholder/400/200',
    },
    {
      title: 'Pangaea Cup 2026',
      location: 'Clark, Philippines',
      date: 'May 14-17, 2026',
      type: 'CONFERENCE',
      image: '/api/placeholder/400/200',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'CONFERENCE':
        return 'primary';
      case 'OUTREACH':
        return 'secondary';
      case 'TOURNAMENT':
        return 'success';
      case 'COMMUNITY':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #303f9f 100%)',
          color: 'white',
          py: { xs: 6 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ color: 'secondary.light', mb: 2, fontWeight: 'bold' }}>
            EVENTS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
                   color: 'white',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Connecting. Supporting.
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' },
                   color: 'white',
            }}
          >
            Building Community.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', maxWidth: '600px', mb: 4, color: 'white' }}>
            We attend and host events around the world to support veterans, share resources, and build lasting connections.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              onClick={scrollToEvents}
            >
              VIEW UPCOMING EVENTS
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              PAST EVENTS
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Filter Section */}
      <Box sx={{ py: 3, backgroundColor: 'background.paper', borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Chip label="ALL EVENTS" variant="filled" color="primary" />
              <Chip label="CONFERENCES" variant="outlined" />
              <Chip label="OUTREACH" variant="outlined" />
              <Chip label="TOURNAMENTS" variant="outlined" />
              <Chip label="COMMUNITY" variant="outlined" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FilterIcon />
              <Typography variant="body2">SORT BY DATE</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Events Grid */}
      <Box ref={eventsGridRef} sx={{ py: 6, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {events.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', borderRadius: 2, overflow: 'hidden' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Chip
                      label={event.type}
                      color={getTypeColor(event.type) as any}
                      size="small"
                      sx={{ position: 'absolute', top: 16, left: 16 }}
                    />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                      {event.title}
                    </Typography>
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {event.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {event.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {event.date}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 8, p: 4, backgroundColor: 'primary.light', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <EventIcon sx={{ fontSize: 40, color: 'white', mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                MORE EVENTS. MORE IMPACT.
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, color: 'white' }}>
              We're always on the move to support veterans and build community. Check back often for updates on where we'll be next!
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              STAY UPDATED
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Events;
