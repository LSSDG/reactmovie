import Cart from '../Cart/Cart';
import {useState,useContext} from 'react';
import CartProvider from '../Cart/CartProvider';
import Products from '../Products/Products';
import {Button,Container,Row,Col,Navbar,Nav,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Store = () =>{
    const [cartVisible,setCartVisible] = useState(false);
    const [movies,setMovies] = useState([]);
    const clicked=()=>{
        console.log('danny');
        setCartVisible(true);
      }
      const unclicked=()=>{
        console.log('dan');
        setCartVisible(false);
      }
    const fetchMoviesHandler = ()=>{
        fetch('https://swapi.dev/api/films').then(res=>{
            return res.json();
        }).then(data=>setMovies(data.results)).catch(err=>console.log(err))
    }  


    return(<div>
        <button onClick={clicked}>CART</button>
        <h3>0</h3>
        <CartProvider><Products/> 
        
        <h1>REACT MOVIE</h1>
        <Container><Button>SEE THE CART</Button></Container>
        {cartVisible && <Cart hide={unclicked}/> }
        <footer>REACT MOVIE</footer></CartProvider>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <ul>{movies.map(movie=><h3>{movie.title}</h3>)}</ul>
    </div>)
}

export default Store;