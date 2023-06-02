import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, Link, Menu, MenuItem, Select, SelectChangeEvent, Tooltip, Typography } from '@mui/material';
import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { NameSpaces, NameSpacesParm } from "../enum/i18nNamespaces";
import MenuIcon from '@mui/icons-material/Menu';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation([NameSpaces.common]);

  const handleChange = (code: string) => {
   
  };

  const sections = [
    { anchor: '#whi-hivensis', label: 'Why Hivensis?' },
    { anchor: '#key-features', label: 'Key features' },
    { anchor: '#waiting-list', label: 'Waiting List' },
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
   
    
  };

  return (
    <Box style={{marginRight: "20px"}} sx={{ display: {sx: "block", md: "hide"}}}>
      <Tooltip title="Menu">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <MenuIcon/>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '40px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {sections.map((section, index) => (
          <MenuItem key={index}>
            <Link href={section.anchor} sx={{textDecoration: "none", color:"#323232"}}>
              {t(section.label, NameSpacesParm.common)}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
   
  );
}

export default LanguageSelector