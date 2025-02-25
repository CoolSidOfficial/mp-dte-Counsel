import React from 'react'
import './index.css'
import Navbar from './navbar';
import Middle from './firstPage';
// import Output from './output';
import Footer from './footer';
import SecondPage from './secondPage';
import { useState } from 'react';
import MyProvider from './Provider';
import { useContext } from 'react';
import { StepperContext } from './Provider';
import {Helmet} from "react-helmet";


const Stepper = () => {
  const { step } = useContext(StepperContext); // Access context inside this child component

  return (
      <div className="stepper-container">
          <div className="stepper">
              <div className={`step ${step >= 1 ? 'active' : ''}`}>Step 1</div>
              <div className={`line ${step === 2 ? 'green' : ''}`}></div>
              <div className={`step ${step >= 2 ? 'active' : ''}`}>Step 2</div>
          </div>
      </div>
  );
};








function App() {
  return (
    
      <MyProvider>
        <Helmet>
            <title>CoolCounsel-Predictor</title>
        <meta
                name="description"
                content=" free Mp Dte counselling predictor  "
            />
            <meta name="keywords " content="mp dte predictor, mp dte college predictor, mp dte counseling, mp dte admission predictor, mp dte cutoff, mp dte seat allotment, mp dte engineering predictor, mp dte polytechnic predictor, mp dte merit list, mp dte rank predictor, mp dte choice filling, mp dte 2025 counseling, mp dte previous year cutoff, mp online dte predictor, madhya pradesh dte predictor, mp dte eligibility checker, mp dte seat matrix,lnct rank"/>
        </Helmet>
          <Navbar />
          <Stepper />  
          <Middle />
          <Footer />
      </MyProvider>
  );
}

export default App;