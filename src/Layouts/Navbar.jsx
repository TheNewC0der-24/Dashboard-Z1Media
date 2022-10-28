import React from 'react';

import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Stack,
  Badge,
  InputBase,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import Profile from './Navtabs/Profile';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "100px",
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = ({ handleDrawerToggle }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#f9faff'
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#000" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="small">
              <Badge variant="dot" color="error">
                <ChatIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
            >
              <Badge variant="dot" color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <Stack direction='row' style={{ display: "flex", justifyContent: "end", marginLeft: "auto" }}>
            <Profile />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;