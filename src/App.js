import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#4345';
      showAlert("Dark Mode Enabled Dosto", "success")
      document.title = "TextUtils - Dark Mode";
      // Flickering title tab
      // setInterval(()=>{
      //   document.title ="TextUtil is Amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title ="TextUtil is Dosto";
      // },1000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled Dosto", "success")
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> */}
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About mode={mode}/>} /> */}
        {/* <Route exact path="/" element ={<TextForm heading="Enter Text to analyze below" mode={mode} showAlert={showAlert}/>}/> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
