import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState,createContext} from 'react';
import Output from './output';
import SecondPage from './secondPage';
import axios from 'axios';    
import { useContext } from 'react';
import { StepperContext } from './Provider';

export const Form_Context=createContext()

function Middle() {
  const {step,goToNextStep}=useContext(StepperContext)

  const [b_data,u_b_data]=useState({
    "rank":"",
    "category":"",
    "round":"",
    "id":"",
  })
  const [index,setIndex]=useState(false)
  const [recv_data,u_recv_data]=useState([])
  const after_submit=(event)=>{
    event.preventDefault();
    setIndex(!index)
    send_data()
    goToNextStep();

  }
  const inputEvent=(event)=>{
    const {name,value}=event.target
    u_b_data((prevalue)=>{
      return {
        ...prevalue,
        [name]:value
      }
  
    })
  
  }

const send_data=async ()=>{
  try{
    let requested= await axios.get("https://counsel-backend.onrender.com/submit-form",{
      params:b_data,
    })
    u_recv_data( await requested.data)
    console.log(recv_data)

  }catch(error){
    alert("Some error occurred while connecting to backend::",error)
   console.log(error)
  }
    
}
  return (
    <>
    <Form_Context.Provider value={recv_data}>

    
    
      { index ?<SecondPage />:
    <div className="center">
    
        <div className="box">
            <div className="top">     
             <h2 className="text">Counselling Predictor</h2>
            </div>
            <div className="data">
                <form onSubmit={after_submit}>
                <label htmlFor="rank" > Rank</label>
                <input type="number" id="rank" name="rank"placeholder="Enter your rank" onChange={inputEvent} />
                <label htmlFor="category"> Category</label>
                <select name="category"  id="category" onChange={inputEvent}>
                    <option>Select Category</option>
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    </select> 
                    <label htmlFor="round"> Round </label> 
                    <select name="round" id ="round" onChange={inputEvent}>
                    <option> Select Round </option>  
                    <option> Round 1</option>
                    <option> Round 2</option>
                    <option> Round 3</option>
                    </select>
                     <label htmlFor="branch"> Branch</label>
                    <select id="branch" name="branch" onChange={inputEvent}>
                    <option> Select Branch</option>
                        <option>CSE</option>
                        <option> Ece</option>
                        <option> Mechanical</option>
                        <option> Civil</option>
                        </select> 
                        <input id="button"  type="submit"   value="Next"/>
 
                        </form>
                        
            </div>
            
    </div>
</div>
 } 
  </Form_Context.Provider>
 </>
    
)

}

export default Middle