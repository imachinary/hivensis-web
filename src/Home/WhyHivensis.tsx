import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { NameSpaces, NameSpacesParm } from '../Shared/enum/i18nNamespaces';
import { useTranslation } from 'react-i18next';
import { Box, fontWeight } from '@mui/system';

import "./styles.css";

const WhyHivensis = () => {  
  const { t } = useTranslation([NameSpaces.common]);
  
  return (
    <div id="why-hivensis" style={{color: "black", paddingLeft: "50px", paddingRight: "50px", paddingTop: "100px"}}>
      <Container maxWidth="xl">
      <Box>
      <Typography sx={{fontWeight: "700", fontSize: "36px", lineHeight: "42px", color: "#FF9E44"}}>
        {t("Why Hivensis?")}
     </Typography>
     </Box>
      <Grid container columnSpacing={12} sx={{marginTop: "70px", marginBottom: "70px"}}>
        <Grid item xs={12} md={4} sx={{textAlign: "left"}}>
          <Typography sx={{fontSize: "20px", fontWeight: "700"}}>
            {t("Unified Workflows")}
          </Typography>
          <br/>
          <Typography>
            {t("Traditional translation processes involve multiple disconnected tools and platforms, making collaboration and coordination difficult. This fragmentation leads to inefficiencies, delays, and increased costs. Hivensis connects all the essential steps in the translation process, providing a unified platform for translators, editors, reviewers, and project managers. By centralizing the workflow, Hivensis eliminates fragmentation, streamlines operations, and ensures a smoother translation process.")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{textAlign: "left"}}>
          <Typography sx={{fontSize: "20px", fontWeight: "700"}}>
            {t("Seamless Integration")}    
          </Typography>
          <br/>
          <Typography>
            {t("Many translation tools lack seamless integration with other essential applications, such as content management systems, project management tools, and terminology databases. This results in time-consuming manual processes and increased chances of errors. Hivensis connects the most popular applications used in the localization industry, including CAT tools, project management software, and content management systems. This integration minimizes manual effort, reduces errors, and accelerates project completion.")}     
          </Typography>
          
          
        </Grid>
        <Grid item xs={12} md={4} sx={{textAlign: "left"}}>
          <Typography sx={{fontSize: "20px", fontWeight: "700"}}>
            {t("Enhances Collaboration")}
          </Typography>
          <br/>
          <Typography>
            {t("Effective communication among translation teams, project managers, and clients is vital to avoid gaps and misunderstandings. Hivensis promotes this collaboration by providing shared workspaces and instant notifications. Teams can collaborate effortlessly, ensuring accurate and timely translations.")}
          </Typography>                
        </Grid>
      </Grid>
      </Container> 
     
      
    </div>
  )
}


export default WhyHivensis;
