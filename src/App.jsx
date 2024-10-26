import React from 'react'
import './index.css'
import Navbar from './navbar';
import Middle from './middle';
import Output from './output';
import Footer from './footer';
import SecondPage from './secondPage';
import { useState } from 'react';
import { createContext } from 'react';



export const stepperContext=createContext()


function App() {
  const [step, setStep] = useState(1);


  const goToNextStep = () => {
    if (step < 2) setStep(step + 1);
  };
  return (
    <>
     <stepperContext.Provider value={step}>

         <Navbar />
         <div className="stepper-container">
             <div className="stepper">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>Step 1</div>
        <div className={`line ${step === 2 ? 'green' : ''}`}></div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>Step 2</div>
      </div>
  
     </div>
         {/* <div className='stepper'>
         <span className='step-small'>1</span>
         <span className='step-small'>2</span>

         </div> */}

         <Middle/>
         <Footer /> 
        {/* <Output/> */}
         </stepperContext.Provider>
    </>
  );
}

export default App