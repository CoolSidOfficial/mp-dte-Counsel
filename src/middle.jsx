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
                <option value="EWS">Economically Weaker Sections</option>
<option value="FW/OP">Formerly Widowed/Orphaned Persons</option>
<option value="JKM">Jammu and Kashmir Migrants</option>
<option value="JKR">Jammu and Kashmir Residents</option>
<option value="NTPC">National Thermal Power Corporation</option>
<option value="OBC/FF/OP">Other Backward Classes - Freedom Fighters - Open</option>
<option value="OBC/H/OP">Other Backward Classes - Orthopedically Handicapped - Open</option>
<option value="OBC/NCC/OP">Other Backward Classes - National Cadet Corps - Open</option>
<option value="OBC/S/F">Other Backward Classes - Scheduled - Female</option>
<option value="OBC/S/OP">Other Backward Classes - Scheduled - Open</option>
<option value="SC/H/OP">Scheduled Castes - Orthopedically Handicapped - Open</option>
<option value="SC/S/OP">Scheduled Castes - Scheduled - Open</option>
<option value="ST/X/F">Scheduled Tribes - Female</option>
<option value="ST/X/OP">Scheduled Tribes - Open</option>
<option value="UR/FF/F">Unreserved - Freedom Fighters - Female</option>
<option value="UR/FF/OP">Unreserved - Freedom Fighters - Open</option>
<option value="UR/H/F">Unreserved - Orthopedically Handicapped - Female</option>
<option value="UR/H/OP">Unreserved - Orthopedically Handicapped - Open</option>
<option value="UR/NCC/F">Unreserved - National Cadet Corps - Female</option>
<option value="UR/NCC/OP">Unreserved - National Cadet Corps - Open</option>
<option value="UR/S/F">Unreserved - Scheduled - Female</option>
<option value="UR/S/OP">Unreserved - Scheduled - Open</option>
<option value="UR/X/F">Unreserved Male Category - Female</option>
<option value="UR/X/OP">Unreserved Male Category - Open</option>


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
                    <option value="AG">AG</option>
<option value="AGE">AGE</option>
<option value="AIADS">AIADS</option>
<option value="AIAIDS">AIAIDS</option>
<option value="AIML">AIML</option>
<option value="AIR">AIR</option>
<option value="ARE">ARE</option>
<option value="AUTO">AUTO</option>
<option value="BEIL">BEIL</option>
<option value="BM">BM</option>
<option value="CE">CE</option>
<option value="CERE">CERE</option>
<option value="CEng">CEng</option>
<option value="CHEM">CHEM</option>
<option value="CSBS">CSBS</option>
<option value="CSD">CSD</option>
<option value="CSE">CSE</option>
<option value="CSEAI">CSEAI</option>
<option value="CSEAIADS">CSEAIADS</option>
<option value="CSEBC">CSEBC</option>
<option value="CSECS">CSECS</option>
<option value="CSEDS">CSEDS</option>
<option value="CSEIL">CSEIL</option>
<option value="CSEIML">CSEIML</option>
<option value="CSEIOT">CSEIOT</option>
<option value="CSEITCS">CSEITCS</option>
<option value="CSERC">CSERC</option>
<option value="CSIT">CSIT</option>
<option value="CYSEC">CYSEC</option>
<option value="DS">DS</option>
<option value="EC">EC</option>
<option value="ECS">ECS</option>
<option value="EE">EE</option>
<option value="EEIOT">EEIOT</option>
<option value="EI">EI</option>
<option value="EL">EL</option>
<option value="ELECT ELEX">ELECT ELEX</option>
<option value="ET">ET</option>
<option value="Electronics and\nTelecommunications">Electronics and Telecommunications</option>
<option value="Electronics and Telecommunications">Electronics and Telecommunications</option>
<option value="FOOD">FOOD</option>
<option value="FTS">FTS</option>
<option value="INOT">INOT</option>
<option value="IP">IP</option>
<option value="IT">IT</option>
<option value="ITAIAR">ITAIAR</option>
<option value="ITIOT">ITIOT</option>
<option value="MAC">MAC</option>
<option value="MECH">MECH</option>
<option value="MINING">MINING</option>
<option value="MTENG">MTENG</option>
<option value="PCT">PCT</option>

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