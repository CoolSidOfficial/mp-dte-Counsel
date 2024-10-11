import React from 'react'
function SecondPage() {
  return (
    <> 
    <div class="year">
    <select id="year">
        <option>Select Year</option>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        </select>
</div>
<div class="choose">
    <label for="firstPreference"> First Preferance:{true?"✅":"❎"} </label>
    <select id="firstPreference">
        <option>Choose College</option>
        <option>Oriental, Bhopal</option>
        <option>LNCT,Bhopal</option>
        <option>LNCT-S,Bhopal</option>
        </select>
        <label for="secondPreference"> Second Preferance: {true?"✅":"❎"}</label>
    <select id="secondPreference">
        <option>Choose College</option>
        <option>Oriental, Bhopal</option>
        <option>LNCT,Bhopal</option>
        <option>LNCT-S,Bhopal</option>
        </select>
        <label for="thirdPreference"> Third Preferance: {true?"✅":"❎"}</label>
    <select id="thirdPreference">
        <option>Choose College</option>
        <option>Oriental, Bhopal</option>
        <option>LNCT,Bhopal</option>
        <option>LNCT-S,Bhopal</option>
        </select>
        <label for="fourthPreference"> Fourth Preferance: {true?"✅":"❎"}</label>
    <select id="fourthPreference">
        <option>Choose College</option>
        <option>Oriental, Bhopal</option>
        <option>LNCT,Bhopal</option>
        <option>LNCT-S,Bhopal</option>
        </select>
        <label for="fifthPreference"> Fifth Preferance: {true?"✅":"❎"}</label>
    <select id="fifthPreference">
        <option>Choose College</option>
        <option>Oriental, Bhopal</option>
        <option>LNCT,Bhopal</option>
        <option>LNCT-S,Bhopal</option>
        </select>
        <input type="button" value="Predict"/>
</div>
   
    </>
  )
}

export default SecondPage