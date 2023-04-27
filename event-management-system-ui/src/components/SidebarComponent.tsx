import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';

const SidebarComponent = (props) => {
  return (
    <Sidebar style={{height: '100%'}}
    backgroundColor='#343a40'
    color='#ffffff'>
      <Menu>
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