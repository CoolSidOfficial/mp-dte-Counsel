import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <App/> */}
    <BrowserRouter>

    <Routes> 
    <Route path="/" element={<Home/>} />

    <Route path="/predictor" element={<App/>} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
