import React, { useState } from 'react'
import { useContext } from 'react'
import { Form_Context } from './middle'
import institutes_name from "./clg_list"


function SecondPage() {
    const u_data=useContext(Form_Context)
    const [ticks, setTicks] = useState([false, false, false, false, false]); 
    const [showTicks, setShowTicks] = useState(false); 


    const handleSelect=(event,index)=>{
      event.preventDefault()
      let matchFound = false; 
      for (let key in u_data){
        let simple_string=u_data[key]['INSTITUTE NAME']
        let cleanedStr = simple_string.replace(/\n/g, '');
        // console.log(cleanedStr,">>",event.target.value)
        if (cleanedStr==event.target.value){

          matchFound = true;
          break;

        }
        else{
          console.log("it doesn't match")
        }
      }
      const newTicks = [...ticks];
      newTicks[index] = matchFound; 
      setTicks(newTicks);
       
    }
  return (
    <> 
    <div class="year">
    <select id="year">
        <option>Select Year</option>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020 </option>
        </select>
</div>
 <div className="choose">
     
    <label for="firstPreference"> First Preferance:{showTicks && (ticks[0] ? "✅" : "❎")} </label>
    <select id="firstPreference"  onChange={(event) => handleSelect(event, 0)}>
    {institutes_name.map((item, index) => (
    <option key={index}>{item}</option>
  ))}
   

        </select>
        <label for="secondPreference"> Second Preferance:{showTicks && (ticks[1] ? "✅" : "❎")}</label>
    <select id="secondPreference"  onChange={(event) => handleSelect(event, 1)}>
    {institutes_name.map((item, index) => (
    <option key={index}>{item}</option>
  ))}
        </select>
        <label for="thirdPreference"> Third Preferance: {showTicks && (ticks[2] ? "✅" : "❎")}</label>
    <select id="thirdPreference"  onChange={(event) => handleSelect(event, 2)}>
    {institutes_name.map((item, index) => (
    <option key={index}>{item}</option>
  ))}

        </select>
        <label for="fourthPreference"> Fourth Preferance: {showTicks && (ticks[3] ? "✅" : "❎")}</label>
    <select id="fourthPreference"  onChange={(event) => handleSelect(event, 3)}>
    {institutes_name.map((item, index) => (
    <option key={index}>{item}</option>
  ))}
        </select>
        <label for="fifthPreference"> Fifth Preferance: {showTicks && (ticks[4] ? "✅" : "❎")}</label>
    <select id="fifthPreference"  onChange={(event) => handleSelect(event, 4)}>
    {institutes_name.map((item, index) => (
    <option key={index}>{item}</option>
  ))}

        </select>
        <input type="button" value="Predict" onClick={()=>{setShowTicks(!showTicks)}} />
</div> 
   
    </>
  )
}

export default SecondPage