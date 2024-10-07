import React from 'react'
import { useNavigate } from "react-router-dom";

function Middle() {
  // const navigate = useNavigate();

  //   const handleClick = () => {
  //       navigate("/checker");
  //   }
  return (
   
    <div className="center">
        <div className="box">
            <div className="top">
             <h2 className="text">Counselling Predictor</h2>
            </div>
            <div className="data">
            <form  target="_self" action="http://localhost:3000/submit-form " method="GET">
                <label htmlFor="rank" > Rank</label>
                <input type="number" id="rank" name="rank"placeholder="Enter your rank" />
                <label htmlFor="category"> Category</label>
                <select name="category"  id="category">
                    <option>Select Category</option>
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    </select> 
                    <label htmlFor="round"> Round </label> 
                    <select name="round" id ="round">
                    <option> Select Round </option>  
                    <option> Round 1</option>
                    <option> Round 2</option>
                    <option> Round 3</option>
                    </select>
                     <label htmlFor="branch"> Branch</label>
                    <select id="branch" name="branch">
                    <option> Select Branch</option>
                        <option>CSE</option>
                        <option> Ece</option>
                        <option> Mechanical</option>
                        <option> Civil</option>
                        </select> 
                        <input id="button"  type="submit"  value="Predict"/>
 
                        </form>
                        
            </div>
            
    </div>
    </div>
    
  )

}

export default Middle