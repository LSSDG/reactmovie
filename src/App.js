 import {Button,Container,Row,Col,Navbar,Nav,Image} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
// import Cart from './components/Cart/Cart';
// import {useState,useContext} from 'react';
// import {Modal} from 'react-bootstrap';
 //import CartContext from './components/Cart/CartContext';
//import CartProvider from './components/Cart/CartProvider';
//import Products from './components/Products/Products';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import Store from './components/Pages/Store';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
 

function App() {
  //const cartCtx=useContext(CartContext);
  
  
  
  return (
    <BrowserRouter> 
      <div style={{
        display:'flex',
        background:'black',
        padding:'5px 0 5px 5px',
        fontSize:'20px'
      }}>
        <div style={{margin:'10px'}}>
          <NavLink to ="/" style={({isActive}) => ({color: isActive ? 'green' :'white'})}>Home</NavLink>

        </div>
        <div style={{margin:'10px'}}>
          <NavLink to ="/store" style={({isActive}) => ({color: isActive ? 'green' :'white'})}>Store</NavLink>

        </div>
        <div style={{margin:'10px'}}>
          <NavLink to ="/about" style={({isActive}) => ({color: isActive ? 'green' :'white'})}>About Us</NavLink>

        </div>

      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
     
      
     
     
      
       
      
    </BrowserRouter>
  );
}

export default App;
