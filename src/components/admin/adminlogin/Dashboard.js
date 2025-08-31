import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider, Grid, Paper } from '@mui/material';
import logo from '../../../assets/logo.png'
import JournalForm from '../../userinterface/journal/JournalForm';
import Footer from '../../userinterface/homepage/Footer';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' ,opacity: 0.9 }}>
        <Toolbar>
          <div>
            <img src={logo} alt="Logo"  style={{width:50,height:40,marginRight:10}}/>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Varsha Research Organisation
          </Typography>
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>

      <div>
        <Grid container spacing={2} style={{marginTop:20}}>
          <Grid item xs={2.5} style={{}}>
            
              <Paper elevation={4} style={{height:'85vh',borderRadius:5,margin:10,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div>
                  <img src={`rajput.jpg`} alt="Logo"  style={{width:100,height:100,borderRadius:50,marginTop:10}}/>
                </div>

                <div style={{fontSize:18,fontWeight:'bold',letterSpacing:1.2}}>
                 Varsha Rajput
                </div>

                <div style={{fontSize:12,letterSpacing:1.2,marginBottom:10}}>
                 editor@varsharesearchorganization.com
                </div>

                <Divider width='90%'/>


              </Paper>

          </Grid>

          <Grid item xs={9.5}>

            <div>
              <JournalForm status='hide'/>
            </div>

          </Grid>
          
        </Grid>
      </div>

<div>
  <Footer/>
</div>

    </Box>
  );
}
