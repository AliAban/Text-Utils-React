
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // code for darkmode  
  const [mode, setMode] = useState("light");
  const toggleDarkMode = ()=>{
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = "#1B1B32"
        document.body.style.color = "white";
        showAlert("Dark Mode Enabled", "success");
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Dark Mode Disabled", "warning");
      }
  };

  // code for pink mode
  const [pink, setPink] = useState("normal");  
  const pinkThemeToggle = ()=>{
    if(pink === "normal"){
      setPink("pink");
      document.body.style.backgroundColor="#f240a1";
      document.body.style.color ="white";
      showAlert("Pink Theme Enabled", "success");
    }else{
      setPink("normal");
      document.body.style.backgroundColor = "white";
      document.body.style.color ="black"
      showAlert("Pink Mode Disabled", "success");

    }
  }

  // code for alert
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Navbar about="About" mode={mode} pink={pink} pinkTheme={pinkThemeToggle} toggleDarkMode={toggleDarkMode} style={{color: mode === "light" ? "black": "white"}}/>
      <Alert alert={alert}/>
      
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>

    </>
  );
}

export default App;
