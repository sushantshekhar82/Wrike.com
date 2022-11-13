
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';
import NavScrollExample from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Register';

function App() {
  const[currentForm,setCurrentForm]=useState('login')
  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      <Router>
        <NavScrollExample/>
  
        
    

     <Routes >
     <Route path='/' element={<Home/>} />
     <Route path='/login' element={ currentForm==="login"?<Login onChange={toggleForm} />:<Register onChange={toggleForm}/> } />
      <Route path='/register' element={<Register/>}  /> 
  
        </Routes>
   </Router>
    </div>
  );
}

export default App;
