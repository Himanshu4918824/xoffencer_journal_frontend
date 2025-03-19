import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Menubar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'#576574',color:'black'}}>
        <Toolbar>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
