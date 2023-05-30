import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { NameSpaces, NameSpacesParm } from '../Shared/enum/i18nNamespaces';
import { useTranslation } from 'react-i18next';

const Hero = () => {  
  const { t } = useTranslation([NameSpaces.common]);
  
  return (
    <div style={{color: "black", background: "linear-gradient(255.61deg, #FFBB54 0%, #ED7200 100%)"}}>
      <Grid container >
        <Grid item xs={12} md={6} sx={{textAlign: "left", padding: "70px"}}>
          <Typography sx={{fontWeight: "700", fontSize: "62px", color: "#FFFF"}}>
            {t('Elevate Translation Efficiency', NameSpacesParm.common)}
          </Typography>  
          <Typography sx={{fontWeight: "400", fontSize: "22px", color: "#FFFF"}}>
          {t('Unlock the power of seamless localization with our innovative tool that connects different apps, making it easier than ever for you to translate and adapt your content.')}          
          </Typography>
          <br/>
          <Typography sx={{fontWeight: "400", fontSize: "22px", color: "#FFFF"}}>
            {t('Whether you\'re a translator, a content creator, or a project manaher, our app is designed to streamline the localization process, save your time, and improve the queality of your translations.')}
          </Typography>
          
         
        </Grid>
        <Grid item xs={12} md={6}>
        <div style={{mixBlendMode: "color-burn", backgroundImage: "/hexagon_pattern.png", position: "absolute",width: "100%", height: "200px"}}>
          <img src="hexagon-pattern.png" alt="hexagon-pattern" style={{width: "50%", marginLeft: "-50%"}}/>
        </div>    
        <div style={{padding: "70px"}}>
        <img src="/hero_image.png" alt="hero-image" />
        </div>         
        </Grid>
      </Grid>
     
      
    </div>
  )
};


export default Hero;
