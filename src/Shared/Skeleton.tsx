import React, { useState } from 'react';
import Header from './Header/Header';


interface SkeletonProps {
  props: JSX.Element | JSX.Element[];
}
const Skeleton = ({ props } : SkeletonProps) => {
  console.log("skeleton", props)
  return (
    <div className="Skeleton">
      <Header/> 
      <div style={{marginTop: "64px"}}>
        {props}
      </div>    
      
    </div>
  )
}

export default Skeleton;