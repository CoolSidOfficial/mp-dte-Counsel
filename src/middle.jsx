import React from 'react'
import { useNavigate } from "react-router-dom";

function Middle() {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate("/checker");
    }
  return (
   
    <div className="center">
        <div className="box">
            <div className="top">
             <h2 class="text">Counselling Predictor</h2>
            </div>
            <div className="data">
            <form target="_blank" action="http://localhost:3000/submit-form " method="POST">
                <label for="rank" > Rank</label>
                <input type="number" id="rank" name="rank"placeholder="Enter your rank" />
                <label for="category"> Category</label>
                <select name="category"  id="category">
                    <option>Select Category</option>
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    </select> 
                    <label for="round"> Round </label> 
                    <select name="round" id ="round">
                    <option> Select Round </option>  
                    <option> Round 1</option>
                    <option> Round 2</option>
                    <option> Round 3</option>
                    </select>
                    <label for="branch"> Branch</label>
                    <select id="branch" name="branch">
                    <option> Select Branch</option>
                        <option> Computer Science</option>
                        <option> Electronics</option>
                        <option> Mechanical</option>
                        <option> Civil</option>
                        </select>
                        <input id="button"  onClick={handleClick} type="submit" value="Predict"/>
 
                        </form>
                        
            </div>
            
    </div>
    </div>
    
  )

}

export default Middle