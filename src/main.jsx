import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SecondPage from './secondPage.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <App/> */}
    <BrowserRouter>

    <Routes> 
    <Route path="/" element={<App />} />

    <Route path="/checker" element={<SecondPage />} />

    </Routes>
    </BrowserRouter>
     
  </React.StrictMode>,
)
