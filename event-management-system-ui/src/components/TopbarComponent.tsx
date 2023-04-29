import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import * as React from 'react';

export default function TopbarComponent({collapseSidebar, className, broken, toggleSidebar}:any) {
  const [state, setState] = React.useState({
    open: false
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
      className={`${className} sticky self-start w-auto top-0 bg-white text-black`}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              return broken ? toggleSidebar() : collapseSidebar();
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size='small'
            edge='start'
            aria-label='main logo'
            sx={{ 
              mr: 2,
              py: 1,
              width: 48 
              }}>
            <img src="main-logo.svg" alt="main-logo" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Event Management
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}