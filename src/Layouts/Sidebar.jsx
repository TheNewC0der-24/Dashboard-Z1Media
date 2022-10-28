import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

// react-router-dom
import { useLocation, useNavigate } from 'react-router-dom';

// Icons
import TimelineIcon from '@mui/icons-material/Timeline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AppsIcon from '@mui/icons-material/Apps';
import PaletteIcon from '@mui/icons-material/Palette';
import LayersIcon from '@mui/icons-material/Layers';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import BarChartIcon from '@mui/icons-material/BarChart';

// Styles
import { makeStyles } from '@mui/styles';


export const drawerWidth = 240;

const useStyles = makeStyles({
  sideBarActive: {
    backgroundColor: '#fff',
    borderRight: '3px solid #1976d2',
    color: '#1976d2',
  },
  sideBarActiveIcon: {
    color: '#1976d2'
  }
})

function Sidebar({ handleDrawerToggle, mobileOpen }) {

  const classes = useStyles();
  // const type = 0;


  const location = useLocation();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/dashboard'
    },
    {
      label: 'Pages',
      icon: <AutoStoriesIcon />,
      link: '/pages'
    },
    {
      label: 'Applications',
      icon: <AppsIcon />,
      link: '/applications'
    },
    {
      label: 'UI Components',
      icon: <PaletteIcon />,
      link: '/components'
    },
    {
      label: 'Widgets',
      icon: <LayersIcon />,
      link: '/widgets'
    },
    {
      label: 'Forms',
      icon: <ContentPasteSearchIcon />,
      link: '/forms'
    },
    {
      label: 'Charts',
      icon: <BarChartIcon />,
      link: '/charts'
    }
  ]
  const drawer = (
    <div style={{ paddingTop: '5px', paddingLeft: '10px', paddingRight: '10px', backgroundColor: "#f9faff", height: "100%", borderColor: "#f9faff" }}>
      <Box mb={3} sx={{ height: '3.70rem', borderBottom: "1px solid #000" }}>
        <Box sx={{ width: '100%', height: '3.25rem', display: 'flex', bgcolor: '#fff', justifyContent: 'center', alignItems: 'center', gap: "0.5rem", borderRadius: '10px' }}>
          <Typography color="primary" variant='h5' sx={{ fontWeight: "bold", fontFamily: "Public Sans,sans-serif" }}> <TimelineIcon /> Finance</Typography>
        </Box>
      </Box>
      <List>
        {sideBarMenu.map((item, index) => (
          <ListItem key={index}
            disablePadding
            className={location.pathname === item.link ? classes.sideBarActive : null}
            onClick={() => { navigate(item.link); handleDrawerToggle(item.link); }}
          >
            <ListItemButton>
              <ListItemIcon className={location.pathname === item.link ? classes.sideBarActiveIcon : null}>
                {item.icon}
              </ListItemIcon>
              <ListItemText className={location.pathname === item.label ? classes.sideBarActive : null} primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }
        }
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box >
  )
}
export default Sidebar;

