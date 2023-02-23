//import logo from './logo.svg';

import './App.css';
import About from './Components/About';
import React,{useState} from 'react'
import Alert from './Components/Alert';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');//tells whether the mode is dark mode or the light mode
  const [alert, setalert] = useState('null');
  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type

      })
      setTimeout(() => {
        setalert('null');
      }, 2000);
  }
  
  const changemode=(()=>{
    
        
      if(mode==='light')
      {
        
        setmode('dark');
        document.body.style.backgroundColor='black';
        showAlert("Dark mode enabled!!","success");
        document.title='TextUtils - DARK'
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode enabled!!","success");
        document.title='TextUtils - LIGHT'
      }
  })
  return (
    <>    
    <Router>
     <Navbar title="Textutils"  aboutUs="About Us" mode={mode} changemode={changemode}/>  
     <Alert alert={alert} sig=': '/> 
     {/* <Navbar /> */}
     {/* bootstrap have a class named container which will align the text box in the center */}
     <div className="container my-3" >
     <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Try TextUtils Now'  mode={mode}/>}>
            </Route>
          </Routes>

     
     
      
     
     
     </div>
     
     </Router>
     
    </>
   
  );
}

export default App;
