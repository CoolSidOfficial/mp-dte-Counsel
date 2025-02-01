import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
function Contact() {
  return (
    <div className='bg-[#050d1e] h-max'>
    <Navbar/>
    <div  className='flex gap-72 m-32 w-64'>
      <div className='text-white' >
        <div className='text-6xl font-mono p-4 ' >Contact US</div>
        <div className='text-4xl font-mono p-2'>Let's get in Touch.</div>
        <div className='text-4xl font-mono p-2'>or just read out manually to </div>
        <a  className="text-4xl p-2 underline" href="mailto:coolsoft@protonmail.com">coolsoft@protonmail.com</a>
      </div>
      <form action='/' method='post'>
        <label  className="" for="full_name" >First Name:</label>
        <input type="text" className='w-[550px] text-white h-11 text-xl  bg-[#1e2d5a] rounded-3xl p-4' placeholder='Enter your Name' name="full_name" />
        <label for="full_name" >Email Address:</label>
        <input type="email"  className=' h-11 w-[550px] rounded-3xl  text-white  bg-[#1e2d5a] p-4 text-xl' name="email " placeholder='Enter your Email' />
        <label for="full_name"  >Message:</label>
        <textarea type="text"  className=' h-56 p-3 rounded-3xl w-[550px] bg-[#1e2d5a] text-xl text-white '    placeholder="Please enter your message" name="msg_box" />
        <button  className="w-72 text-3xl p-1 bg-blue-600 rounded-xl mt-5 font-medium " type='submit'>Submit Form →</button>
        
        


      </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact