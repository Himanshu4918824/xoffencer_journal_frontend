import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../../../assets/logo.png"
import TextBoxSearch from "../homepage/TextBoxSearch"
import CallIcon from '@mui/icons-material/Call';
import { IconButton } from '@mui/material';
import Menubar from './Menubar';
import HomeIcon from '@mui/icons-material/Home';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'#8395a7',color:'Black',height:100}}>
        <Toolbar>

        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between', width:'100%'}}>
            <Typography variant="h6" component="div" sx={{cursor:'pointer', display:'flex',alignItems:'center'}}>
               <img src={logo} style={{width:70,height:70,marginLeft:50,padding:10}} />
               <div style={{fontSize:24,fontWeight:'bold'}}> Xoffencer Journal</div> 
            </Typography>

          <TextBoxSearch/>

        <div>
          
        <IconButton
            
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <HomeIcon style={{fontSize:30}}/>
             </IconButton>

             

             <IconButton
            
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <CallIcon style={{fontSize:30}}/>
             </IconButton>


          </div>
          
          </div>
        </Toolbar>
      </AppBar>

      <Menubar/>
    </Box>
  );
}
