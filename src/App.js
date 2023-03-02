 import {Button,Container,Row,Col,Navbar,Nav,Image} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Cart from './components/Cart/Cart';
 import {useState,useContext} from 'react';
 import {Modal} from 'react-bootstrap';
 //import CartContext from './components/Cart/CartContext';
import CartProvider from './components/Cart/CartProvider';
import Products from './components/Products/Products';
 

function App() {
  //const cartCtx=useContext(CartContext);
  
  const [cartVisible,setCartVisible] = useState(false);
  const clicked=()=>{
    console.log('danny');
    setCartVisible(true);
  }
  const unclicked=()=>{
    console.log('dan');
    setCartVisible(false);
  }
  return (
    <div className='App'> 
    <Navbar bg="dark" variant="dark">
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Store</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button onClick={clicked}>CART</Button>
      <h3>0</h3>
    </Navbar>
    <Navbar align="center"  bg='light' variant='success'><Navbar.Brand ><h1>REACT MOVIE</h1>
    </Navbar.Brand></Navbar>
     <CartProvider><Products/> 
        
      <h1>REACT MOVIE</h1>
      <Container><Button>SEE THE CART</Button></Container>
      {cartVisible && <Cart hide={unclicked}/> }
      <footer>REACT MOVIE</footer></CartProvider>
       
      
    </div>
  );
}

export default App;
