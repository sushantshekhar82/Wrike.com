
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
import {useEffect, useState} from 'react'
function App() {
  const [items, setItems] = useState([]);
  const [count,setCount]=useState(0)
useEffect(() => {
  const item = JSON.parse(localStorage.getItem('items'));
 
   setItems(item);
   if(item){
    setCount(item.length)
   }
   
}, []);
console.log(count)

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
