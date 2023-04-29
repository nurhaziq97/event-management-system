import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import React from 'react';
import { useTheme } from '@emotion/react';

const SidebarComponent = ({className}:any) => {
  const theme = useTheme();
  return (
    <Sidebar
      className={`${className}`}
      backgroundColor= {`${theme.palette.info.main}`}
      color={`${theme.palette.info.getContrastText}`}
      style={{fontFamily: 'Montserrat, sans-serif'}}
      collapsedWidth='0'
      breakPoint='lg'
      >
      <Menu className='mt-2'>
        <MenuItem> Dashboard </MenuItem>
        <MenuItem> Events </MenuItem>
        <MenuItem>Calendar</MenuItem>
        <MenuItem>Groups</MenuItem>
        <MenuItem>Venues</MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SidebarComponent;