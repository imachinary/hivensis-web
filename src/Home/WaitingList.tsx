import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NameSpaces, NameSpacesParm } from '../Shared/enum/i18nNamespaces';
import { useTranslation } from 'react-i18next';
import { Box, fontWeight, Stack } from '@mui/system';
import addToWaitingList from './api';
import "./styles.css";


const WaitingList = () => {  
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isCompleted, setIsCompleted ] = useState(false);
  const [ helperText, setHelperText ] = useState('');
  const [ email, setEmail ] = useState("");
  
  const { t } = useTranslation([NameSpaces.common]);

  const helperTextLoc = t("Incorrect format", NameSpacesParm.common);
  const handleSubmit = async () => {   
    const isValid = validateEmail(email);
    if (isValid){
      setIsLoading(true)
      const response = await addToWaitingList(email, "en");
      setIsLoading(false);
      setIsCompleted(true)
    }else{      
      setHelperText(helperTextLoc)
    }
    
  }

  const handleChange = (event: any) => {
    setHelperText('')
    setEmail(event.target.value)
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  return (
    <div id="waiting-list" style={{color: "black", paddingLeft: "50px", paddingRight: "50px", paddingTop: "50px"}}>
      <Container maxWidth="xl">      
      <Grid container columnSpacing={5} sx={{marginTop: "30px", marginBottom: "70px"}} alignItems="center">
        <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
          <Typography className='waiting-list-title' sx={{fontSize: "36px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.02em"}}>
            {t("Ready to take your localization processes to the next level?")}          
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
            {!isLoading && !isCompleted && 
              <>
                <TextField id="email" error={helperText ? true : false} label={t("Enter your email")} helperText={helperText} variant="outlined" value={email} onChange={handleChange} sx={{width: "80%"}}/>
                <Button variant="contained" sx={{width: "85px}}"}} onClick={handleSubmit}>{t("Send")} </Button>
              </>
            }
            {isLoading && !isCompleted &&
              <CircularProgress sx={{height: "50px}}"}}/>
            }
            {isCompleted && 
              <Alert severity="success">{t("Hooray! You're officially on the waiting list! 🎉", NameSpacesParm.common)}</Alert>
            }
            
          </Stack>
        </Grid>       
      </Grid>
      </Container> 
     
      
    </div>
  )
}

export default WaitingList;
