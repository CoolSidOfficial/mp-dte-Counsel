import React from 'react'

function Middle() {
  return (
   
    <div className="center">
        <div className="box">
            <div className="top">
             <h2 class="text">Counselling Predictor</h2>
            </div>
            <div className="data">
            
                <label for="rank"> Rank</label>
                <input type="number" id="rank" placeholder="Enter your rank" />
                <label for="category"> Category</label>
                <select id="category">
                    <option>Select Category</option>
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    </select> 
                    <label for="round"> Round </label> 
                    <select id="round">
                    <option> Select Round </option>  
                    <option> Round 1</option>
                    <option> Round 2</option>
                    <option> Round 3</option>
                    </select>
                    <label for="branch"> Branch</label>
                    <select id="branch">
                    <option> Select Branch</option>
                        <option> Computer Science</option>
                        <option> Electronics</option>
                        <option> Mechanical</option>
                        <option> Civil</option>
                        </select>
                        <button>Predict</button>
            </div>
            
    </div>
    </div>
    
  )

}

export default Middle