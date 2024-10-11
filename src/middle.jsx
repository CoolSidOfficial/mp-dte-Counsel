import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import Output from './output';
import SecondPage from './secondPage';
function Middle() {
  
  const [b_data,u_b_data]=useState({
    "rank":"",
    "category":"",
    "round":"",
    "id":"",


  })
  const [index,setIndex]=useState(false)
  const after_submit=(event)=>{
    event.preventDefault();
    setIndex(!index)


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
  
  return (
    <>
      { index ?<SecondPage/>:
    <div className="center">
        <div className="box">
            <div className="top">
             <h2 className="text">Counselling Predictor</h2>
            </div>
            <div className="data">
            {/* <form  target="_self" action="http://localhost:3000/submit-form " method="GET"> */}
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
                        <input id="button"  type="submit"  value="Next"/>
 
                        </form>
                        
            </div>
            
    </div>
</div>
 } </>
    
)

}

export default Middle