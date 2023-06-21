import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { NameSpaces, NameSpacesParm } from '../Shared/enum/i18nNamespaces';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';

import './styles.css';

const gridIconStyle = { display: {xs: "none", md: "flex"}, alignItems: "center", justifyContent: "center"}

const features = [
  {
    title: "Centralized Localization Management",
    description: "Hivensis serves as a centralized hub where you can connect all your applications in one place. Say goodbye to juggling multiple tools and platforms - now you can simplify your workflow and keep everything organized effortlessly.",
  },
  {
    title: "Integration with Popular Localization Apps",
    description: "We understand that different projects may require specific localization apps. That's why our platform seamlessly integrates with a wide range of popular apps, including translation management systems (TMS), content management systems (CMS), and more. You can connect your preferred tools and leverage their strengths while benefiting from our enhanced collaboration and management capabilities.",
  },
  {
    title: "Efficient Content Translation",
    description: "With Hivensis, you can upload your source files, whether they are text documents, website content, or InDesign files, and choose your desired target languages. Hivensis will automatically extract the translatable strings and recreate the delivery files at the end of the workflow.",
  },
  {
    title: "Collaborative Workflows",
    description: "Hivensis fosters collaboration among team members, no matter where they are located. Invite localization project managers, translators, and stakeholders to your projects, create customized workflows, and receive notifications directly from the app. You can streamline the translation process, track changes, and maintain a clear overview of project progress, ensuring that everyone stays aligned.",
  },
  {
    title: "Quality Assurance and Consistency",
    description: "We know how crucial quality and consistency are when it comes to localization. Hivensis includes customized Translation Memories that will help you define glossaries and keep consistency among all the projects.",
  },
  {
    title: "Automated Workflows and Notifications",
    description: "Save time and reduce manual effort with Hivensis' automation capabilities. Set up automated workflows to trigger specific actions based on predefined conditions or events, such as sending notifications to translators when new strings are added or generating reports upon project completion. Stay informed about project updates with customizable notifications.",
  },

]

interface Feature {
  title: string,
  description: string,
  index: number,
  isStart: boolean,
  isEnd: boolean,
}

const KeyFeatures = () => {  
  const { t } = useTranslation([NameSpaces.common]);
  
  const Feature = ({title, description, index, isStart, isEnd}: Feature) => {
    const marginTop = isStart ? "60%": "0";
    const marginBottom = isEnd ? "100%": "0";
    if (index % 2 == 0) {
      return (
        <>
          <Grid item xs={0} md={5} sx={{textAlign: "left"}}>
          </Grid>        
          <Grid item xs={0} md={2} sx={gridIconStyle}>
            <img src="/hexagon_primary.svg" style={{position: "absolute"}}/>
            <div className="vertical-line" style={{ marginTop: marginTop, marginBottom: marginBottom}}></div>
          </Grid>
          <Grid item xs={12} md={5} className="feature-item">
            <Typography className="feature-title">
              {t(title)}
            </Typography>          
            <Typography >
              {t(description)}
            </Typography>
          </Grid>
        </>
      )
    }else{
      return (
          <>
            <Grid item xs={12} md={5} className="feature-item">
              <Typography className="feature-title">
                {t(title)}
              </Typography>          
              <Typography>
                {t(description)}
              </Typography>
            </Grid>
            <Grid item xs={0} md={2} sx={gridIconStyle}>
              <img src="/hexagon_secondary.svg"  style={{position: "absolute"}}/>
              <div className="vertical-line" style={{ marginTop: marginTop, marginBottom: marginBottom}}></div>
            </Grid>
            <Grid item xs={0} md={5} sx={{textAlign: "left"}}>
            </Grid> 
          </>
        )
    }
    
  }

  return (
    <div id="key-features" style={{backgroundColor: "#0D0E10", color: "white", paddingLeft: "50px", paddingRight: "50px", paddingTop: "100px", paddingBottom: "50px"}}>
      <Container maxWidth="xl">
      <Box>
      <Typography sx={{fontWeight: "700", fontSize: "36px", lineHeight: "42px", color: "#FF9E44"}}>
        {t("Key Features")}
     </Typography>
     </Box>
      <Grid container columnSpacing={4} sx={{marginTop: "70px", marginBottom: "70px"}}>
        {features.map((feature, index) => {          
          return (
            <Feature title={feature.title} description={feature.description} index={index} isStart={index == 0} isEnd={index == features.length - 1}/>
          )
        })}
      


      </Grid>



      </Container>
      
     
      
    </div>
  )
}


export default KeyFeatures;
