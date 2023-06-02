import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NameSpaces, NameSpacesParm } from '../Shared/enum/i18nNamespaces';
import { useTranslation } from 'react-i18next';
import { Box, fontWeight, Stack } from '@mui/system';

import "./styles.css";


const Footer = () => {  
  const { t } = useTranslation([NameSpaces.common]);
  
  return (
    <div id="footer" style={{color: "white", backgroundColor: "#2A2B2C", height: "70px", paddingLeft: "50px", paddingRight: "50px", paddingTop: "0px", marginBottom: "0px"}}>
      <Container maxWidth="xl">      
      <Grid container columnSpacing={5} sx={{marginTop: "70px", marginBottom: "70px", lineHeight: "70px"}} alignItems="center">
        <Grid item xs={6} sx={{textAlign: "left"}}>
          <img src="/brand-footer.svg" style={{position: "absolute", marginTop: "-12px"}}/>
        </Grid>
        <Grid item xs={6} sx={{textAlign: "right"}}>
          <Typography sx={{fontSize: "12px", fontWeight: "400",lineHeight: "70px"}}>
          @ 2023 Hivensis
          </Typography>
        </Grid>

      </Grid>
      </Container> 
     
      
    </div>
  )
}

export default Footer;
