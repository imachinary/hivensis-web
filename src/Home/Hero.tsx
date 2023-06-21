import React from 'react';
import { Button, Grid, Link, Typography } from '@mui/material';
import { NameSpaces, NameSpacesParm } from '../Shared/enum/i18nNamespaces';
import { useTranslation } from 'react-i18next';
import { Box, Container } from '@mui/system';
import { ImagesearchRoller } from '@mui/icons-material';

const Hero = () => {  
  const { t } = useTranslation([NameSpaces.common]);
  
  const paddingSize = window.innerWidth >= 768 ? '70px' : '0px';
  const imageSize = window.innerWidth >= 768 ? 'auto%' : '-webkit-fill-available';
  return (
    <div style={{color: "black", background: "linear-gradient(255.61deg, #FFBB54 0%, #ED7200 100%)"}}>
      <Container maxWidth="xl">
      <Grid container >
        <Grid item xs={12} md={6} sx={{textAlign: "left", padding: "70px 70px 90px 20px"}}>
          <Typography sx={{fontWeight: "700", fontSize: "62px", color: "#FFFF"}}>
            {t('Elevate Translation Efficiency', NameSpacesParm.common)}
          </Typography>  
          <Typography sx={{fontWeight: "400", fontSize: "22px", color: "#FFFF"}}>
          {t('Unlock the power of seamless localization with our innovative tool that connects different apps, making it easier than ever for you to translate and adapt your content.')}          
          </Typography>
          <br/>
          <Typography sx={{fontWeight: "400", fontSize: "22px", color: "#FFFF"}}>
            {t("Whether you're a translator, a content creator, or a project manager, our app is designed to streamline the localization process, save your time, and improve the queality of your translations.")}
          </Typography>
          <Link href="#waiting-list" color="primary" className="hero-button" sx={{marginTop:"20px", textDecoration: "none"}}>{t("Join the waiting list")}</Link>
         
        </Grid>
        <Grid item xs={12} md={6}>
        <Box sx={{display: {xs: "none", md: "none", lg: "block"}}} style={{mixBlendMode: "color-burn", backgroundImage: "/hexagon_pattern.png", position: "absolute",width: "50%", height: "200px"}}>
          <img src="hexagon-pattern.png" alt="hexagon-pattern"  style={{width: "100%", marginLeft: "0%"}}/>
        </Box>    
        <div style={{ padding: paddingSize}}>
          <img src="/hero_image.png" alt="hive" style={{width: imageSize}}/>
        </div>         
        </Grid>
      </Grid>
     </Container>

      
    </div>
  )
};


export default Hero;
