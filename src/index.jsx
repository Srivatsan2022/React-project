import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "./Nav.jsx";
import App from './App'
export default ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="App">
    <div className="login-form"><Navbar />
      <div className="title">Sign In </div>
      <App/> 
    </div>  
  </div>
)