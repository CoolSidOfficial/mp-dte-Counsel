import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {useState} from "react"
function About() {
  const faqs = [
    {
      question: "How does Cool Counsel use historical data?",
      answer: "Cool Counsel analyzes data from previous years' counselling rounds to identify trends and patterns in college placements. This historical data helps us predict the likely cut-off ranks for different colleges and branches, giving you a more accurate picture of your options."
    },
    {
      question: "Why is Cool Counsel better than watching YouTube videos?",
      answer: "While YouTube videos can be informative, they often provide general advice or outdated information. Cool Counsel offers personalized, up-to-date predictions based on your specific rank and preferences. Our platform saves you time by consolidating years of data into easy-to-understand recommendations, eliminating the need to watch hours of videos."
    },
    {
      question: "How often is the data updated?",
      answer: "We update our database annually with the latest counselling results. This ensures that our predictions are based on the most recent trends in college admissions, giving you the most accurate and relevant advice possible."
    },
    {
      question: "Can Cool Counsel guarantee my college placement?",
      answer: "While we strive to provide the most accurate predictions possible, college placements can vary from year to year. Cool Counsel offers a probability-based forecast to help you make informed decisions, but the final outcome depends on various factors including the number of applicants and available seats in a given year."
    },
    {
      question: "How does Cool Counsel simplify the counselling process?",
      answer: "Cool Counsel aggregates and analyzes years of counselling data, so you don't have to. Instead of manually sifting through past year cutoffs or watching numerous explanation videos, you can simply enter your rank and preferences. Our algorithm then provides you with tailored college and branch recommendations, saving you time and reducing stress during the counselling process."
    }
  ];

    const [activeIndex, setActiveIndex] = useState(null); 
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
       

  
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

<section className="w-2/3 mx-auto bg-gray-800 p-4 rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left p-3 font-semibold bg-gray-800 transition rounded flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{activeIndex === index ? "↑" : "↓"}</span>
            </button>
            {activeIndex === index && (
              <p className="p-3 rounded-b">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
      <a href='/predictor' className='text-2xl font-light bg-blue-700 w-72 text-center '>Visit Predictor</a>
</div>
<Footer/>
</div>


  )
}

export default About