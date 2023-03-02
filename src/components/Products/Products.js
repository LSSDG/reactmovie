import CartContext from "../Cart/CartContext";
//import { Container ,Row,Col,Image} from "react-bootstrap";
import { useContext } from "react";
import ProductItem from "./ProductItem";
const Products = props =>{
    const cartCtx=useContext(CartContext);
    //const addItem=()=>{
    //    console.log('adding');
    //    cartCtx.addItem({})
    //}
    const add=()=>{
        console.log('adding');
        cartCtx.addItem({
            title:'Colors',
            price:100,
            imageUrl:'',
            amount:1
        })
    }
    const products = [{

        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
         
        },
        
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
         
        },
        
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
          title: 'Album4',
          price: 20,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          }
      ];
      const productList = products.map(prod=>{
        return (<ProductItem 
            key={prod.imageUrl} 
            id={prod.imageUrl} 
            title={prod.title} price={prod.price} img={prod.imageUrl}/> 
          
         )
      })
    return(
        <div>
            <div>
        <div>
          <ul>{productList}</ul>
           
        </div>
         

      </div>
        </div>
    )
}

export default Products;