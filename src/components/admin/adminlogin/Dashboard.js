import { Divider, Grid, Paper, Box, Typography, Avatar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../../userinterface/homepage/Footer';
import Header from '../../userinterface/homepage/Header';

export default function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const token = localStorage.getItem('token');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!token) navigate('/');
  }, [token, navigate]);

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Mobile menu button */}
      {!matches && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 1 }}>
          <IconButton
            onClick={() => setSidebarOpen(!sidebarOpen)}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      <Grid container spacing={2} sx={{ mt: 1, px: { xs: 1, md: 3 } }}>
        {/* Sidebar */}
        {(matches || sidebarOpen) && (
          <Grid item xs={12} md={3}>
            <Paper
              elevation={6}
              sx={{
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                backgroundColor: '#ffffff',
                mb: { xs: 2, md: 0 },
              }}
            >
              {/* Profile */}
              <Avatar
                alt="Varsha Rajput"
                src="rajput.jpg"
                sx={{ width: 100, height: 100, mb: 2 }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 0.5, textAlign: 'center' }}
              >
                Varsha Rajput
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'gray',
                  textAlign: 'center',
                  mb: 2,
                  wordBreak: 'break-word',
                  overflowWrap: 'anywhere',
                }}
              >
                editor@varsharesearchorganization.com
              </Typography>

              <Divider width='90%' />

               <div style={{marginTop:20,fontSize:18,fontWeight:600, cursor:'pointer'}}>
                <Link style={{textDecoration:'none',color:'black'}} href="/uploadjournalform" target="nw">Add Journal</Link>
              </div>

              <div style={{marginTop:20,fontSize:18,fontWeight:600, cursor:'pointer'}}>
                <Link style={{textDecoration:'none',color:'black'}} href="/delete" target="nw">Delete Journal</Link>
              </div>



            </Paper>
          </Grid>
        )}

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              minHeight: '80vh',
              borderRadius: 3,
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              
            }}
           style={{marginBottom:30}}
          >
            <iframe
              name="nw"
              src="/uploadjournalform" // default page
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '80vh' }}
              title="Dashboard Panel"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
