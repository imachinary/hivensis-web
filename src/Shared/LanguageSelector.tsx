import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, Menu, MenuItem, Select, SelectChangeEvent, Tooltip, Typography } from '@mui/material';
import { AppContext } from '../context/provider';
import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);
  const [state, setState] = useContext(AppContext);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleChange = (code: string) => {
    const newLang = code;
    setState({ ...state, language: newLang });
    setLang(newLang);
    i18n.changeLanguage(newLang);
    setAnchorElUser(null);
  };

  const settings = [
    { code: 'en', language: 'English' },
    { code: 'es', language: 'Español' }
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
   
    
  };

  return (
    <Box style={{marginRight: "20px"}}>
      <Tooltip title="Languages">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <LanguageIcon/>
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
        {settings.map((setting, index) => (
          <MenuItem key={index} onClick={() => handleChange(setting.code)}>
            <Typography textAlign="center">{setting.language}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
   
  );
}

export default LanguageSelector