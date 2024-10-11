import React from 'react'
import Input_comp from './input_comp'
import {useState} from "react"
function Output() {
  return (
    <>
    <div className='select_options'>
      <Input_comp/>
      <Input_comp/>
      <Input_comp/>
      <Input_comp/>
      <Input_comp/>
      <button>Submit</button>
      
    </div>
    </>
  )
}

export default Output