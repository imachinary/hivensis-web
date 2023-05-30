import React from 'react';
import { Button } from '@mui/material';
import Hero from './Hero';
import WhyHivensis from './WhyHivensis';

const Home = () => {
  document.title = "Home";
  console.log("home")
  return (
    <div>
     <Hero/>
     <WhyHivensis/>
    </div>
  );
};


export default Home;