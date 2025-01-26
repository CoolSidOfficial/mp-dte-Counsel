import React from 'react'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faBuildingColumns,faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className='bg-[#111827]  w-full min-h-screen '>
    <Navbar/>
    <header className='xl:flex xl:flex-col   justify-center items-center  '>
      <div className='xl:text-6xl xl:font-bold xl:p-6 xl:text-white'>Predict Your Engineering  College</div>
       <p className='xl:text-2xl text-white'>Use our mock predictor based on previous years data <br/>  to find the best MP DTE  engineering  colleges for you</p>
       <a href="/predictor" className='xl:text-lg bg-[#2563EB] xl:w-50  xl:h-15  rounded p-2 xl:m-7'>Start Predicting  Now</a>
    </header>
     <main className='text-center'>
      <div className='font-semibold text-3xl text-white xl:m-7'>Our Impact</div>
      <div className='xl:flex xl:text-white text-xl space-x-32 p-4 justify-center '>
      <div className='flex flex-col bg-[#1F2937] h-44 w-96 justify-center rounded'>
      <FontAwesomeIcon icon={faUsers}  size="2xl"/>
        <span className='text-black text-2xl p-2 '>10,000+</span>
        <span  className='text-blue-500'>Students Helped</span>
      </div>
      <div className='flex flex-col bg-[#1F2937] h-44 w-96 justify-center rounded'>
      <FontAwesomeIcon icon={faBuildingColumns} size='2xl' />
        <span className='text-black text-2xl p-2'>200+</span>
        <span  className='text-blue-500'>Colleges Covered</span>
      </div>
      <div className='flex flex-col bg-[#1F2937] h-44 w-96 justify-center rounded'>
        <FontAwesomeIcon icon={faArrowTrendUp} size="2xl" />
        <span className='text-black text-2xl p-2 '>95%+</span>
        <span className='text-blue-500'>Prediction Accuracy</span>
      </div>

      </div>
      <div className='text-center text-white text-4xl font-mono m-4  '>Why choose CoolCounsel?</div>
      <div className='text-white flex space-x-56 m-10 justify-center'>
        <div className='flex flex-col'><span className='text-2xl '> ✔️Data Driven Predictions</span>
        <span>Our algorithm uses historical<br/> data to provide accurate college predictions.
</span></div>
        <div className='flex flex-col'><span className='text-2xl '>✔️ Comprehensive College Database</span>
        <span>Access information on all<br/> MP DTE engineering colleges in one place.
</span></div>
      </div>
      <div className='text-white flex space-x-60 m-10 justify-center  '>
        <div className='flex flex-col'><span className='text-2xl '> ✔️User-Friendly Interface
        </span><span>Easy-to-use predictor tool <br/> that anyone can navigate with ease.


</span>
</div>
        <div className='flex flex-col'><span className='text-2xl '>  ✔️Free to Use
        </span>
        <span className='mx-8 '>All our prediction services <br/>are completely free for students.
</span></div>
      </div>
      <div className='bg-[#1F2937] w-4/5 h-24 mx-auto text-center  flex items-center justify-center rounded-md  ' >
        <p  className='text-white   font-bold  text-center'>"Cool Counsel's predictor tool was incredibly helpful in my college search. It accurately predicted my options and helped me make an informed decision."
        </p>
      </div>
     </main>
     <div className='flex flex-col text-white mt-20 p-7 text-center'>   
      <div className='xl:text-4xl p-4 font-semibold '>Ready to Find  Your Perfect College? </div>
      <div className='xl:text-2xl p-4 '>Start  your engineering college journey with confidence </div>
      <a href="/predictor" className='w-60 self-center text-xl  bg-[#2563EB] rounded  p-2 '> Use Our Predictor now</a>
     </div>
    <footer className='bg-[#1a2335] w-screen h-20 justify-center  items-center flex text-white ' >
     <div> &#169;
     2024 CoolCounsel. All rights reserved.</div>
    </footer>
    </div>

  )
}

export default Home