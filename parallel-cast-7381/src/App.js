
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { useEffect, useState } from 'react';
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

import Dashboard from './components/Dashboard';

function App() {
  let signin=localStorage.getItem('signin')
  const[showHome,setShowHome]=useState(false)
  const[currentForm,setCurrentForm]=useState('login')
  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  useEffect(()=>{
 if(signin){
  setShowHome(true)
 }
  },[])

  return (
   
    <div className="App">
    
     { showHome ?<Dashboard/>:

      <Router>
        <NavScrollExample/>
       
        
    

     <Routes >
     <Route path='/' element={<Home/>} />
     <Route path='/login' element={ currentForm==="login"?<Login onChange={toggleForm} />:<Register onChange={toggleForm}/> } />
      <Route path='/register' element={<Register/>}  /> 
  
        </Routes>
   </Router>
  }
    </div>
  );
}

export default App;
