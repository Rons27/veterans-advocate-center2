import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { title: 'HOME', path: '/' },
  { title: 'SERVICES', path: '/services' },
  { title: 'RESOURCES', path: '/resources' },
  { title: 'EVENTS', path: '/events' },
  { title: 'ABOUT', path: '/about' },
  { title: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'flex-end', pr: 2 }}>
        <img
          src="/logo.png"
          alt="Veterans Advocate"
          style={{
            height: '50px',
            width: 'auto',
            maxWidth: '180px',
          }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: 'center',
                backgroundColor: isActive(item.path) ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
              }}
            >
              <ListItemText
                primary={item.title}
                sx={{
                  color: isActive(item.path) ? 'primary.main' : 'text.primary',
                  fontWeight: isActive(item.path) ? 'bold' : 'normal'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="secondary" fullWidth
              component="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfz-fXVSJZ8ebmrTZIRSIzGacmC3WNXEIw6mkob-YnpoTINjQ/viewform?usp=sharing&ouid=117015048486566182542"
              target="_blank" // optional: opens in new tab
              rel="noopener noreferrer"

            >
              GET STARTED
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
      <AppBar
        position="static"
        sx={{
                    // backgroundColor: '#131a27',
          backgroundColor: 'rgba(26, 35, 126, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Mobile: Hamburger Menu on Left */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop: Logo on Left */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
              <Box
                component={Link}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  '&:hover': {
                    opacity: 0.9,
                    transition: 'opacity 0.2s ease',
                  },
                }}
              >
                <img
                  src="/logo.png"
                  alt="Veterans Advocate"
                  style={{
                    height: '90px',
                    width: 'auto',
                    maxWidth: '200px',
                  }}
                />
              </Box>
            </Box>
          )}

          {/* Center Section - Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    fontWeight: isActive(item.path) ? 'bold' : 'normal',
                    backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          )}

          {/* Right Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
            {/* Desktop: GET STARTED Button */}
            {!isMobile && (
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontWeight: 'bold' }}
                component="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfz-fXVSJZ8ebmrTZIRSIzGacmC3WNXEIw6mkob-YnpoTINjQ/viewform?usp=sharing&ouid=117015048486566182542"
                target="_blank" // optional: opens in new tab
                rel="noopener noreferrer"
              >
                GET STARTED
              </Button>
            )}

            {/* Mobile: Logo on Right */}
            {isMobile && (
              <Box
                component={Link}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  '&:hover': {
                    opacity: 0.9,
                    transition: 'opacity 0.2s ease',
                  },
                }}
              >
                <img
                  src="/logo.png"
                  alt="Veterans Advocate"
                  style={{
                    height: '40px',
                    width: 'auto',
                    maxWidth: '180px',
                  }}
                />
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;