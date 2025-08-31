import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import logo from "../../../assets/logo.png"
//import TextBoxSearch from "../homepage/TextBoxSearch"
import CallIcon from '@mui/icons-material/Call';
import { Drawer, IconButton } from '@mui/material';
import Menubar from './Menubar';
//import NotificationsIcon from '@mui/icons-material/Notifications';

// import Contact from './Contact';


import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';
import { Dashboard, Login } from '@mui/icons-material';

export default function Header() {

  const [open, setOpen] = React.useState(false);
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, [])

  const handleClick = () => {
    setOpen(true);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const navigate = useNavigate();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#8395a7', color: 'Black', height: 80, width: '100%' }}>
        <Toolbar>

          {matches ? <div></div> : <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: matches ? 2 : 0 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: matches ? '100%' : '100%' }}>
            <Typography onClick={() => navigate('/')} variant="h6" component="div" sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <img alt='logo' src={logo} style={{ width: matches ? 80 : 60, height: matches ? 70 : 50, marginLeft: matches ? 50 : 0, marginTop: 5 }} />
              <div style={{ fontSize: matches ? 24 : 14, fontWeight: 'bold', marginTop: 5, marginLeft: 9 }}>Varsha Research Organisation </div>
            </Typography>

            { /*  {matches?
         <TextBoxSearch/>:<div></div>
         }
*/}

            <div style={{ display: 'flex' }}>

              {/* <IconButton
            
            edge="start"
            color="inherit"
            aria-label="menu"
          >
             <NotificationsIcon style={{ fontSize: matches ? 30 : 24 }}/>
             </IconButton>

             */}

              <IconButton

                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => navigate('/contact')}

              >
                <CallIcon style={{ fontSize: matches ? 30 : 20, marginLeft: matches ? 0 : 16 }} />
              </IconButton>
              <IconButton
                color="inherit"
                // aria-label="menu"
                onClick={() => { !token ? navigate('/login') : navigate('/dashboard') }}
                style={{ fontSize: matches ? 20 : 15 }}
              >
                {token ? <Dashboard/> : <Login/>}
              </IconButton>


            </div>

          </div>
        </Toolbar>
      </AppBar>

      { /* {matches?<div></div>:

     <AppBar position="static" style={{background:'#8395a7',color:'Black'}}>
        <Toolbar style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          
        <TextBoxSearch width='80%' />
    
        </Toolbar>
      </AppBar>}

      */ }


      {matches ? <Menubar /> : <div></div>}

      {matches ? <></> : <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: 300, background: '#8395a7', height: '100vh', textAlign: 'center' }}>
          <Menubar />
        </div>
      </Drawer>}

    </Box>
  );
}
