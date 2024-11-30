import React from 'react'
import './index.css'
import Navbar from './navbar';
import Middle from './middle';
import Output from './output';
import Footer from './footer';
import SecondPage from './secondPage';
import { useState } from 'react';
import MyProvider from './Provider';
import { useContext } from 'react';
import { StepperContext } from './Provider';

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
          <Navbar />
          <Stepper />  
          <Middle />
          <Footer />
      </MyProvider>
  );
}

export default App;