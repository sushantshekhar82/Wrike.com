
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import NavScrollExample from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavScrollExample/>
  
        
    

     <Routes >
     <Route path='/' element={<Home/>} />
     <Route path='/cart' element={ <Cart/>} />
         
  
        </Routes>
   </Router>
    </div>
  );
}

export default App;
