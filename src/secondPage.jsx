import React from 'react'
import { useContext } from 'react'
import { Form_Context } from './middle'





function SecondPage() {
    const u_data=useContext(Form_Context)
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
 <div class="choose">
     
    <label for="firstPreference"> First Preferance:{true?"✅":"❎"} </label>
    <select id="firstPreference">
    {
    u_data.map((option, index) => (
        <option key={index}>
            {option['INSTITUTE NAME']}
        </option>
    ))
}

        </select>
        <label for="secondPreference"> Second Preferance: {true?"✅":"❎"}</label>
    <select id="secondPreference">
    {
    u_data.map((option, index) => (
        <option key={index}>
            {option['INSTITUTE NAME']}
        </option>
    ))
}

        </select>
        <label for="thirdPreference"> Third Preferance: {true?"✅":"❎"}</label>
    <select id="thirdPreference">
    {
    u_data.map((option, index) => (
        <option key={index}>
            {option['INSTITUTE NAME']}
        </option>
    ))
}

        </select>
        <label for="fourthPreference"> Fourth Preferance: {true?"✅":"❎"}</label>
    <select id="fourthPreference">
    {
    u_data.map((option, index) => (
        <option key={index}>
            {option['INSTITUTE NAME']}
        </option>
    ))
}

        </select>
        <label for="fifthPreference"> Fifth Preferance: {true?"✅":"❎"}</label>
    <select id="fifthPreference">
    {
    u_data.map((option, index) => (
        <option key={index}>
            {option['INSTITUTE NAME']}
        </option>
    ))
}

        </select>
        <input type="button" value="Predict"/>
</div> 
   
    </>
  )
}

export default SecondPage