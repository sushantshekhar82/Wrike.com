
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import IndividualIntervalsExample from './components/IndividualIntervalsExample'
import { CartProvider } from 'react-use-cart';
import NavScrollExample from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
        <NavScrollExample/>
   <IndividualIntervalsExample/>
   <CartProvider>
   <Home/>
   <Cart/>
   </CartProvider>
    </div>
  );
}

export default App;
