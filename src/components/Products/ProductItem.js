import CartContext from "../Cart/CartContext";
import { useContext } from "react";
import ProductItemForm from './ProductItemForm';

const ProductItem = props =>{
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount)=>{
        cartCtx.addItem({
            id:props.id,
            title:props.title,
            price:props.price,
            amount:amount,
             
        })
    }
    return(<li>
        <h3>{props.title}</h3>
            <img src={props.img} alt="pic"></img>
            <h4>${props.price}</h4>
            <div><ProductItemForm id ={props.img} addCart={addToCartHandler}/> </div>
    </li>)
}

export default ProductItem;