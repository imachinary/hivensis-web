import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { NameSpaces, NameSpacesParm } from '../Shared/enum/i18nNamespaces';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';

import './styles.css';

const KeyFeatures = () => {  
  const { t } = useTranslation([NameSpaces.common]);
  
  return (
    <div id="key-features" style={{backgroundColor: "#0D0E10", color: "white", paddingLeft: "50px", paddingRight: "50px", paddingTop: "100px", paddingBottom: "50px"}}>
      <Container maxWidth="xl">
      <Box>
      <Typography sx={{fontWeight: "700", fontSize: "36px", lineHeight: "42px", color: "#FF9E44"}}>
        {t("Key Features")}
     </Typography>
     </Box>
      <Grid container columnSpacing={4} sx={{marginTop: "70px", marginBottom: "70px"}}>
        
        <Grid item xs={0} md={5} sx={{textAlign: "left"}}>
        </Grid>        
        <Grid item xs={0} md={2} sx={{ display: {xs: "none", md: "block"}}}>
          <img src="/hexagon_primary.svg" style={{marginTop: "25%"}}/>
        </Grid>
        <Grid item xs={12} md={5} className="feature-item">
          <Typography className="feature-title">
            {t("Centralized Localization Management")}
          </Typography>          
          <Typography >
            {t("Hivensis serves as a centralized hub where you can connect all your applications in one place. Say goodbye to juggling multiple tools and platforms - now you can simplify your workflow and keep everything organized effortlessly.")}
          </Typography>
        </Grid>

               
       
        <Grid item xs={12} md={5} className="feature-item">
          <Typography className="feature-title">
            {t("Integration with Popular Localization Apps")}
          </Typography>          
          <Typography>
            {t("We understand that different projects may require specific localization apps. That's why our platform seamlessly integrates with a wide range of popular apps, including translation management systems (TMS), content management systems (CMS), and more. You can connect your preferred tools and leverage their strengths while benefiting from our enhanced collaboration and management capabilities.")}
          </Typography>
        </Grid>
        <Grid item xs={0} md={2} sx={{ display: {xs: "none", md: "block"}}}>
          <img src="/hexagon_secondary.svg" style={{marginTop: "25%"}}/>
        </Grid>
        <Grid item xs={0} md={5} sx={{textAlign: "left"}}>
        </Grid> 
     

        <Grid item xs={0} md={5} sx={{textAlign: "left"}}>
        </Grid>        
        <Grid item xs={0} md={2} sx={{ display: {xs: "none", md: "block"}}}>
          <img src="/hexagon_primary.svg" style={{marginTop: "25%"}}/>
        </Grid>
        <Grid item xs={12} md={5} className="feature-item">
          <Typography className="feature-title">
            {t("Efficient Content Translation")}
          </Typography>          
          <Typography>
            {t("With Hivensis, you can upload your source files, whether they are text documents, website content, or InDesign files, and choose your desired target languages. Hivensis will automatically extract the translatable strings and recreate the delivery files at the end of the workflow.")}
          </Typography>
        </Grid>

        <Grid item xs={12} md={5} className="feature-item">
          <Typography className="feature-title">
            {t("Collaborative Workflows")}
          </Typography>          
          <Typography>
            {t("Hivensis fosters collaboration among team members, no matter where they are located. Invite localization project managers, translators, and stakeholders to your projects, create customized workflows, and receive notifications directly from the app. You can streamline the translation process, track changes, and maintain a clear overview of project progress, ensuring that everyone stays aligned.")}
          </Typography>
        </Grid>
        <Grid item xs={0} md={2} sx={{ display: {xs: "none", md: "block"}}}>
          <img src="/hexagon_secondary.svg" style={{marginTop: "25%"}}/>
        </Grid>
        <Grid item xs={0} md={5} sx={{textAlign: "left"}}>
        </Grid> 

        <Grid item xs={0} md={5} sx={{textAlign: "left"}}>
        </Grid>        
        <Grid item xs={0} md={2} sx={{ display: {xs: "none", md: "block"}}}>
          <img src="/hexagon_primary.svg" style={{marginTop: "25%"}}/>
        </Grid>
        <Grid item xs={12} md={5} className="feature-item">
          <Typography className="feature-title">
            {t("Quality Assurance and Consistency")}
          </Typography>          
          <Typography>
            {t("We know how crucial quality and consistency are when it comes to localization. Hivensis includes customized Translation Memories that will help you define glossaries and keep consistency among all the projects.")}
          </Typography>
        </Grid>

               
       
        <Grid item xs={12} md={5} className="feature-item">
          <Typography className="feature-title">
            {t("Automated Workflows and Notifications")}
          </Typography>          
          <Typography>
            {t("Save time and reduce manual effort with Hivensis' automation capabilities. Set up automated workflows to trigger specific actions based on predefined conditions or events, such as sending notifications to translators when new strings are added or generating reports upon project completion. Stay informed about project updates with customizable notifications.")}
          </Typography>
        </Grid>
        <Grid item xs={0} md={2} sx={{ display: {xs: "none", md: "block"}}}>
          <img src="/hexagon_secondary.svg" style={{marginTop: "25%"}}/>
        </Grid>
        <Grid item xs={0} md={5} sx={{textAlign: "left"}}>
        </Grid> 


      </Grid>



      </Container>
      
     
      
    </div>
  )
}


export default KeyFeatures;
