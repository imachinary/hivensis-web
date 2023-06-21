import React, { useContext, useEffect, useState } from "react";
import { AppContext } from '../../context/provider';

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Container, Link } from '@mui/material';
import { UserRoles } from '../enum/userRoles';

import LanguageSelector from "../LanguageSelector";
import Menu from './Menu';

import { NameSpaces, NameSpacesParm } from "../enum/i18nNamespaces";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  anchor: 'right',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


export default function Header(props: any) {
  const theme = useTheme();
  const [state, setState] = useContext(AppContext);
  const [drawerState, setDrawerState] = useState(false);
  const { t } = useTranslation([NameSpaces.users, NameSpaces.common]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setDrawerState(true);
    console.log(drawerState)
  };

  const handleDrawerClose = () => {
    setDrawerState(false);
    console.log(drawerState)
  };

  const sections = [
    { anchor: '#why-hivensis', label: 'Why Hivensis?' },
    { anchor: '#key-features', label: "Key features" },
    { anchor: '#waiting-list', label: 'Waiting List' },
  ];

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',      
      // backgroundColor: theme.palette.common.black,
      
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
    

  return (
    <Container>
      <CssBaseline />
      <AppBar position="fixed">
        <Container maxWidth="xl" >
        <Toolbar>
        <a href="#" style={{textAlign:"left"}}><img alt="logo" style={{width: "100%"}} src="/logo_Hivensis.png"/></a>              
          <Typography variant="h6" noWrap component="div"  sx={{ flexGrow: 1 }}>            
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section, key) => (
              <Link
                key={key}
                href={section.anchor}
                sx={{ my: 2, color: '#323232', display: 'block', marginRight: "25px", fontSize: "14px", fontWeight: "400", textDecoration:"none" }}
              >
                {t(section.label, NameSpacesParm.common)}
              </Link>
            ))}
          </Box>
          <LanguageSelector/>   
          <Box sx={{ display: {xs: "block", md: "none"}}}>            
          <Menu/>      
          </Box>
          
         
        </Toolbar>
        </Container>
      </AppBar>    
    </Container>
  );
};
