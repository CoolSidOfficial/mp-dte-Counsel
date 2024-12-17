import React from 'react'
import Navbar from './navbar'

function Home() {
  return (
    <div className='bg-[#111827]'>
    <Navbar/>
    <header className='xl:flex xl:flex-col   justify-center items-center  '>
      <div className='xl:text-6xl xl:font-bold xl:p-6 xl:text-white'>Predict Your Engineering  College</div>
       <p className='xl:text-2xl text-white'>Use our mock predictor based on previous years data <br/>  to find the best MP DTE  engineering  colleges for you</p>
       <button className='xl:text-lg bg-[#2563EB] xl:w-[190px]  xl:h-15 rounded p-2 m-3'>Start Predicting  Now</button>
    </header>
     <main className='text-center'>
      <div className='font-semibold text-3xl text-white '>Our Impact</div>
      <div className='xl:flex xl:text-white text-xl space-x-32 p-4 justify-center '>
      <div className='flex flex-col bg-[#1F2937] h-44 w-96 justify-center'>
        <span></span>
        <span>10,000+</span>
        <span>Students Helped</span>
      </div>
      <div className='flex flex-col bg-[#1F2937] h-44 w-96 justify-center'>
        <span></span>
        <span>200+</span>
        <span>Colleges Covered</span>
      </div>
      <div className='flex flex-col bg-[#1F2937] h-44 w-96 justify-center'>
        <span></span>
        <span>95%+</span>
        <span>Prediction Accuracy</span>
      </div>

      </div>
      <div className='text-center text-white text-4xl font-mono m-4  '>Why choose CoolCounsel?</div>
      <div className='text-white flex space-x-56 m-10 '>
        <div className='flex flex-col'><span className='text-3xl '>Data Driven Predictions</span><span>Our algorithm uses historical data to provide accurate college predictions.
</span></div>
        <div className='flex flex-col'><span className='text-3xl '>Comprehensive College Database</span><span>Access information on all MP DTE engineering colleges in one place.
</span></div>
      </div>
      <div className='text-white flex space-x-56 m-10 '>
        <div className='flex flex-col'><span className='text-3xl '>User-Friendly Interface
        </span><span>Easy-to-use predictor tool that anyone can navigate with ease.


</span></div>
        <div className='flex flex-col'><span className='text-3xl '>Free to Use
        </span><span>All our prediction services are completely free for students.
</span></div>
      </div>
      <div className='bg-[#1F2937] w-4/5 h-3/4 mx-16' >
        <p  className='text-white font-bold'>"Cool Counsel's predictor tool was incredibly helpful in my college search. It accurately predicted my options and helped me make an informed decision."
        </p>
      </div>
     </main>
    
    </div>

  )
}

export default Home