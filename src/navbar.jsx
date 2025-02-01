import React from 'react'

function Navbar() {
  return (
    <div className='nav'>
        <div className="text">
            CoolCounsel
        </div>
        <div className="items">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/predictor">Predictor</a>
            <a href="/contact">Contact</a>
        </div>

    </div>
  )
}

export default Navbar