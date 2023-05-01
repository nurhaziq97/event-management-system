import CalendarIcon from '@/icons/CalendarIcon';
import DashboardIcon from '@/icons/DashboardIcon';
import EventIcon from '@/icons/EventIcon';
import GroupIcon from '@/icons/GroupIcon';
import VenueIcon from '@/icons/VenueIcon';
import { useTheme } from '@emotion/react';
import { Menu, MenuItem, MenuItemStyles, Sidebar } from 'react-pro-sidebar';

const SidebarComponent = (props: any) => {
  const materialTheme = useTheme();
  const themeMode = 'light';
  const themes = {
    sidebarStyle: {
      fontFamily: 'Montserrat, sans-serif'
    },
    light: {
      sidebar: {
        bgColor: materialTheme.palette.info.main,
        color: materialTheme.palette.info.getContrastText,
      },
      menu: {
        menuContent: materialTheme.palette.info.main,
        active: materialTheme.palette.info.dark,
        hover: {
          bgColor: materialTheme.palette.info.dark,
          color: materialTheme.palette.info.getConstrastText
        }
      }
    }
  }

  const menuItemStyles: MenuItemStyles = {
    button: ({ active }) => {
      return ({
        '&:hover': {
          backgroundColor: themes[themeMode].menu.hover.bgColor,
          color: themes[themeMode].menu.hover.color
        },
        'backgroundColor': active ? themes[themeMode].menu.active : themes[themeMode].menu.menuContent,
        'borderRadius' : '10px',
        'margin' : '2px 5px'
      })
    },
  };

  const IconStyle = {
    'width' : '24',
    'fill' : 'white',
    'color' : 'white'
  }

  const sidebarItemList = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon style={{...IconStyle, 'width':'32'}}/>,
      routes: '/Dashboard'
    },
    {
      text: 'Events',
      icon: <EventIcon style={IconStyle}/>
    },
    {
      text: 'Calendar',
      icon: <CalendarIcon style={IconStyle} />
    },
    {
      text: 'Groups',
      icon: <GroupIcon style={IconStyle} />
    },
    {
      text: 'Venues',
      icon: <VenueIcon style={IconStyle}/>
    }];

  const generateSidebarItemList = (sidebarItemList).map((item, index) => {
    return (
      <MenuItem key={index} icon={item.icon}>{item.text}</MenuItem>
      // <MenuItem key={index}><div className="flex flex-row bg-black">{item.icon}<div>{item.text}</div></div></MenuItem>
    );
  });


  return (
    <Sidebar
      className={`${props?.className} sticky top-0 min-h-[93vh]`}
      backgroundColor={themes.light.sidebar.bgColor}
      color={themes.light.sidebar.bgColor}
      style={themes.sidebarStyle}
      collapsedWidth='0'
      breakPoint='lg'
    >
      <Menu
        menuItemStyles={menuItemStyles}
        className='mt-2'>
        {generateSidebarItemList}
      </Menu>
    </Sidebar>
  );
}

export default SidebarComponent;