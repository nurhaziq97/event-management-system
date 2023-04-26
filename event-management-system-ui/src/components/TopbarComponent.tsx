import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {purple} from '@mui/material/colors';
import {styled} from '@mui/material/styles';

const CustomTopBar = styled(AppBar)(({theme}) => ({
  color: theme.palette.getContrastText(purple[50]),
  backgroundColor: purple[50]
}));

export default function TopbarComponent() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomTopBar
        position="static"
        color="secondary">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Event Management System
          </Typography>
        </Toolbar>
      </CustomTopBar>
    </Box>
  );
}