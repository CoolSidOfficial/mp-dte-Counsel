import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Form_Context } from './firstPage'
import institutes_name from "./final_list"
import { data } from 'autoprefixer'


function SecondPage() {
    const u_data=useContext(Form_Context)
    const [ticks, setTicks] = useState([false, false, false, false, false]); 
    const [showTicks, setShowTicks] = useState(false); 
    const [showmark,setshowmark]=useState(false)
    const [table_data,u_table_data]=useState([])



    const setdata=(data)=>{
      u_table_data((current_data)=>[...current_data,data])
    }
    const handleSelect=(event,index)=>{
      event.preventDefault()
      let matchFound = false; 
      let temp_key_data;
      for (let key in u_data){
        let simple_string=u_data[key]['INSTITUTE NAME']
        let cleanedStr = simple_string.replace(/\n/g, '');
        //  let cleanedStr=simple_string
        // console.log(cleanedStr,">>",event.target.value)
        if (cleanedStr==event.target.value){
         temp_key_data= u_data[key];
          matchFound = true;
          break;

        }
        else{
          console.log("it doesn't match")
        }
      }
      setdata(temp_key_data)
      const newTicks = [...ticks];
      newTicks[index] = matchFound; 
      setTicks(newTicks);
       
    }

     useEffect(()=>{
      const timer=setTimeout(()=>{
        setshowmark(true)
      },5000)
    
      return () => clearTimeout(timer);
    },[]);
  return (
    <> 
    <div class="year">
    {/* <select id="year">
        <option>Select Year</option>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020 </option>
        </select> */}
</div>
<div className="text-center bg-gray-900 text-white text-3xl  font-mono">
            {!showmark ? (
                <p className="text-center">    Please select your first five preferences of colleges and then press the predict button
                 </p>
            ) : (
                <marquee className="bg-slate-900 px-2">
                    Please select your first five preferences of colleges and then press the predict  button
                </marquee>
            )}
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
{showTicks &&

<div className='bg-gray-800 w-full p-5'>
  <div className=' text-white text-center text-4xl p-5 font-mono font-semibold'>MPDTE Counselling Allotment Status(2023) </div>
  <table className='bg-gray-700 mx-auto text-3xl border w-full  rounded-md text-white font-serif '>
    <tr className='border border-gray-400 px-4 py-2'>
      <th>Preference</th>
      <th>College Name</th>
      <th>Opening Rank</th>
      <th>Closing Rank</th>

      <th>Allotment Status</th>
    </tr>
<tbody className=''>
  {table_data?.length > 0 ? (
    table_data
      .filter((data) => data) // Remove undefined/null values
      .map((data, index) => (
        <tr key={data?.id || index} className='border border-gray-400 px-6 py-2'>
          <td>{index + 1}</td>
          <td>{data?.["INSTITUTE NAME"] ?? "N/A"}</td>
          <td>{data?.["JEE OPENING RANK"] ?? "N/A"}</td>
          <td>{data?.["JEE CLOSING RANK"] ?? "N/A"}</td>
          <td>☑️ Allotable ☑️</td>
        </tr>
      ))
  ) : (
    <tr>
      <td colSpan="5">No data available</td>
    </tr>
  )}
</tbody>


  </table>
  </div> 
}
    </>
  )
}

export default SecondPage