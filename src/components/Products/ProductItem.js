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
             
        });
        const cartItem ={
            id:props.id,
            title:props.title,
            price:props.price,
            amount:amount
        }
        fetch('https://crudcrud.com/api/7eaf8696fd1d429895de4135904c1942/useritems',{
            method:'POST',
            body:JSON.stringify(cartItem),
            headers:{'Content-Type':'application/json'}
        }).then(res=>console.log(res.json())).catch(err=>console.log(err));
    }
    return(<li>
        <h3>{props.title}</h3>
            <img src={props.img} alt="pic"></img>
            <h4>${props.price}</h4>
            <div><ProductItemForm id ={props.img} addCart={addToCartHandler}/> </div>
    </li>)
}

export default ProductItem;