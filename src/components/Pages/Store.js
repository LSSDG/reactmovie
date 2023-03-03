import Cart from '../Cart/Cart';
import {useState,useContext} from 'react';
import CartProvider from '../Cart/CartProvider';
import Products from '../Products/Products';
import {Button,Container,Row,Col,Navbar,Nav,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Store = () =>{
    const [cartVisible,setCartVisible] = useState(false);
    const clicked=()=>{
        console.log('danny');
        setCartVisible(true);
      }
      const unclicked=()=>{
        console.log('dan');
        setCartVisible(false);
      }

    return(<div>
        <button onClick={clicked}>CART</button>
        <h3>0</h3>
        <CartProvider><Products/> 
        
        <h1>REACT MOVIE</h1>
        <Container><Button>SEE THE CART</Button></Container>
        {cartVisible && <Cart hide={unclicked}/> }
        <footer>REACT MOVIE</footer></CartProvider>
    </div>)
}

export default Store;