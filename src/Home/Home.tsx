import React from 'react';
import { Button } from '@mui/material';
import Hero from './Hero';
import WhyHivensis from './WhyHivensis';
import KeyFeatures from './KeyFeatures';
import WaitingList from './WaitingList';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { NameSpaces } from '../Shared/enum/i18nNamespaces';

const Home = () => {
  const {t} = useTranslation([NameSpaces.common]);
  document.title = "Hivensis - "+ t("Home");
  return (
    <div>
      
     <Hero/>
     <WhyHivensis/>
     <KeyFeatures/>
     <WaitingList/>
     <Footer/>
    </div>
  );
};


export default Home;