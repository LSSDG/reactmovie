import Cart from '../Cart/Cart';
import {useState,useContext,useEffect, useCallback,useRef} from 'react';
import CartProvider from '../Cart/CartProvider';
import Products from '../Products/Products';
import {Button,Container,Row,Col,Navbar,Nav,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Store = () =>{
    const [cartVisible,setCartVisible] = useState(false);
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false);

    const title=useRef();
    const open = useRef();
    const rel = useRef();

    const submitHandler = async ()=>{
        const movie ={
            title:title.current.value,
            open:open.current.value,
            rel:rel.current.value
        }
        const res = await fetch( 'https://reactmovie-cb3dc-default-rtdb.firebaseio.com/movies.json',
        {method:'POST',
        body:JSON.stringify(movie),
        headers:{'Content-Type':'application/json' }
        });
        const data = res.json();
        console.log(data);
     
    }
    
    const clicked=()=>{
        console.log('danny');
        setCartVisible(true);
      }
      const unclicked=()=>{
        console.log('dan');
        setCartVisible(false);
      }
    const fetchMoviesHandler =  async () =>{

        setLoading(true);
        try{
            const res = await fetch('https://reactmovie-cb3dc-default-rtdb.firebaseio.com/movies.json'); 
            if(!res.ok){
                throw new Error('Something went wrong');
            }
            const data = await res.json();
            setLoading(false);
            const loadedMovies =[];
            for(const key in data){
                loadedMovies.push({
                    id:key,
                    title:data[key].title,
                    open:data[key].open,
                    rel:data[key].rel
                })
            }
            setMovies(loadedMovies)
        }
        
        catch(error){
             console.log(error);
        }
        } 

        useEffect(()=>{
            fetchMoviesHandler();
        },[fetchMoviesHandler])
        
        
      


    return(<div>
        <button onClick={clicked}>CART</button>
        <h3>0</h3>
        <CartProvider><Products/> 
        
        <h1>REACT MOVIE</h1>
        <Container><Button>SEE THE CART</Button></Container>
        {cartVisible && <Cart hide={unclicked}/> }
        <footer>REACT MOVIE</footer></CartProvider>
        <form onSubmit={submitHandler}>
            <label htmlFor='title'>Title</label>
            <input ref={title} type="text" id="title"></input>
            <label htmlFor='open'>Opening Text</label>
            <input ref={open} type="text" id="open"></input>
            <label htmlFor='rel'>Release Date</label>
            <input ref={rel} type="text" id="rel"></input>
            <button type="submit">Add movie</button>
        </form>

        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        {loading && <p>Loading ...</p>}
        <ul>{movies.map(movie=><h3>{movie.title}</h3>)}</ul>
    </div>)
}

export default Store;