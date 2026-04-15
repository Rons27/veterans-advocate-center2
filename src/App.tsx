import { Routes, Route } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material'

// Import layout components
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

// Import page components  
import Services from './pages/Services'
import Home from './pages/Home'
import Events from './pages/Events'



const OptimizedResources = () => (
  <Container maxWidth="lg" sx={{ py: 8, px: 4 }}>
    <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' }}>Resources</Typography>
    <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary' }}>
      Essential resources and information for veterans.
    </Typography>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 4 }}>
      {[
        'VA Forms & Documents',
        'Disability Rating Guidelines',
        'Benefits Information',
        'Healthcare Resources'
      ].map((resource) => (
        <Box key={resource} sx={{ p: 4, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
            {resource}
          </Typography>
          <Typography color="text.secondary">
            Comprehensive information and guidance for {resource.toLowerCase()}.
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
)

const OptimizedAbout = () => (
  <Container maxWidth="lg" sx={{ py: 8, px: 4 }}>
    <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' }}>About Us</Typography>
    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
      Veterans Advocate Center - serving those who served.
    </Typography>
  </Container>
)

const OptimizedContact = () => (
  <Container maxWidth="lg" sx={{ py: 8, px: 4 }}>
    <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' }}>Contact Us</Typography>
    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
      Get in touch: info@veteransadvocatecenter.com
    </Typography>
  </Container>
)

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<OptimizedResources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<OptimizedAbout />} />
        <Route path="/contact" element={<OptimizedContact />} />
      </Routes>
      
      {/* Footer */}
      <Footer />
    </Box>
  )
}

export default App