import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/material';

export default function Menubar() {
{/*
  var data=['Journal','Apply Online','Editorial','Guidline Originality','Thesis Publication','Thesis Publication','Thesis Publication','Thesis Publication']

  const showCateoryMenu=()=>{
    return data.map((item,i)=>{
      return (<Button style={{ color: '#fff', margin: 10 }}>{item}</Button>)
    })
  }
*/}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'#576574',color:'black'}}>
        <Toolbar style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/*{showCateoryMenu()}*/}
           <Button style={{ color: '#fff', margin: 10 }}>Journal</Button>
           <Button style={{ color: '#fff', margin: 10 }}>Apply Online</Button>
           <Button style={{ color: '#fff', margin: 10 }}>Editorial</Button>
           <Button style={{ color: '#fff', margin: 10 }}>Guidline Originality</Button>
           <Button style={{ color: '#fff', margin: 10 }}>Thesis Publication</Button>
           <Button style={{ color: '#fff', margin: 10 }}>Thesis Publication</Button>
           <Button style={{ color: '#fff', margin: 10 }}>Thesis Publication</Button>
           <Button style={{ color: '#fff', margin: 10 }}>Thesis Publication</Button>

            <Menu

            aria-labelledby="demo-positioned-button"
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >


          </Menu>


        </Toolbar>
      </AppBar>
    </Box>
  );
}
