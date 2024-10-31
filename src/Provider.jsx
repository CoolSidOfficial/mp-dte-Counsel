import React, { createContext, useState } from 'react';

export const StepperContext = createContext();


 const MyProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const goToNextStep = () => {
        if (step < 2) setStep(step + 1);
      };


    return (
        <StepperContext.Provider value={{ step, goToNextStep }}>
            {children}
        </StepperContext.Provider>
    );
};
export default MyProvider;