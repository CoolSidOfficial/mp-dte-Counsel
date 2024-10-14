import React from 'react'
import './index.css'
import Navbar from './navbar';
import Middle from './middle';
import Output from './output';
import Footer from './footer';
import SecondPage from './secondPage';
function App() {
  return (
    <>
         <Navbar />
         <Middle/>
        {/* <Output/> */}
         <Footer /> 
         
    </>
  );
}

export default App