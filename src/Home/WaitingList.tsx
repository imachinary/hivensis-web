import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NameSpaces, NameSpacesParm } from '../Shared/enum/i18nNamespaces';
import { useTranslation } from 'react-i18next';
import { Box, fontWeight, Stack } from '@mui/system';

import "./styles.css";


const WaitingList = () => {  
  const { t } = useTranslation([NameSpaces.common]);
  
  return (
    <div id="waiting-list" style={{color: "black", paddingLeft: "50px", paddingRight: "50px", paddingTop: "50px"}}>
      <Container maxWidth="xl">      
      <Grid container columnSpacing={5} sx={{marginTop: "30px", marginBottom: "70px"}} alignItems="center">
        <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
          <Typography className='waiting-list-title' sx={{fontSize: "36px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.02em"}}>
            {t("Ready to take your localization processes to the next level? ")}          
          </Typography>
          <br/>
          <Typography>
            {t("Join our Waiting list and be the first to experience the power of efficient, collaborative, and high-quality localization!")}          
          </Typography>
        </Grid>
        <Grid item xs={0} md={1} sx={{textAlign: "left"}}>
        </Grid>  
        <Grid item xs={12} md={5} sx={{textAlign: "left", paddingTop: {xs: "50px", md: "0px"}}}>
          <Stack direction="row" spacing={2}>
            <TextField id="email" label={t("Enter your email")} variant="outlined" sx={{width: "80%"}}/>
            <Button variant="contained" sx={{width: "85px}}"}}>{t("Send")} </Button>
          </Stack>
        </Grid>       
      </Grid>
      </Container> 
     
      
    </div>
  )
}

export default WaitingList;
