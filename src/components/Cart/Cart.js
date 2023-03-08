import React, { Fragment ,useContext} from 'react';
//import {Modal} from 'react-bootstrap';
import CartContext from './CartContext';
import CartItem from './CartItem';
import classes from './Cart.module.css';

 
const Cart= (props)=>{
    const cartContextImp=useContext(CartContext);
    const totalAmount = `$${cartContextImp.totalAmount.toFixed(2)}`;
    const containsItems=cartContextImp.items.length>0;
    const totalItems=cartContextImp.items.length;
    const addItemHandler = item=>{
        cartContextImp.addItem({...item,amount:1})
    }
    const removeItemHandler = id =>{
        cartContextImp.removeItem(id);
    }
    const cartItems =<ul className=  {classes['cart-items']}>{cartContextImp.items.map(item=>{
        return <CartItem key={item.id} title={item.title} price={item.price} amount={item.amount} onAdd={addItemHandler.bind(null,item)} onRemove={removeItemHandler.bind(null,item.id)}/>
             
             
          
    })}</ul>
    /*const cartElements = [{

        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }];*/
    
    return (
        <Fragment>
             
        {cartItems}
        
        <h3>TOTAL{totalAmount}</h3>
        <button onClick={props.hide}>Close</button>
         </Fragment>
    )
}

export default Cart;