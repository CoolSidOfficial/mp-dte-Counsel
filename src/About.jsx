import React from 'react'
import Navbar from './navbar'
function About() {
  return (

<div className='bg-[#111827] h-max'>
       <Navbar/> 
   <div className='flex text-white text-2xl flex-col  items-center gap-9 font-mono '> 
    <img  src='/coolcounsel_trans.png' width={250}  alt={"logo"}/>
      <div className='font-mono font-semibold xl:text-4xl  '>Cool-Counsel</div>
            <div>Your Simple Engineering Counselling Companion</div>
<div className='xl:text-4xl font-mono'>What is Cool Counsel?
</div>
<p className='xl:text-xl  font-mono xl:w-1/2'>
Cool Counsel is an innovative platform designed to simplify the MP DTE engineering counselling process. We use data-driven predictions to help aspiring engineers make informed decisions about their college choices, all with just a few clicks.

</p>
<p className='xl:text-xl font-mono xl:w-1/2'>
  Our advanced algorithm analyzes previous years' data to provide accurate predictions, making your engineering college selection process easier and more efficient than ever before.
  </p>
<div className=''>
    Key Features
</div>
<div> ✔ Accurate college predictions based on historical data
</div>
<div> ✔ User-friendly interface for easy navigation
</div>
<div> ✔ Comprehensive database of MP engineering colleges
</div>
<div> ✔ Personalized recommendations based on your preferences
</div>
<div> ✔ Regular updates with the latest counselling information
</div>
<div className='bg-[#1F2937] xl:rounded-lg text-xl w-2/3 flex  flex-col'> 
<span className='text-center m-4 text-2xl'>
    How Simple is Cool Counsel?
    </span>
    <p className='m-2'>Using Cool Counsel is as easy as 1-2-3:</p>


<ol className='list-decimal font-semibold ml-10 text-lg '>

<li>
  Enter your rank and preferences
  </li>
<li>
  View personalized college recommendations
  </li>
<li>
  Make an informed decision about your future
  </li>
</ol>
  <p className='m-2'>
    No need to spend hours researching or watching countless videos. Cool Counsel does all the hard work for you, presenting complex data in an easy-to-understand format.
    </p>




    
</div>

<div className=''>Frequently Asked Questions
<span></span>
</div>
</div>
</div>



  )
}

export default About