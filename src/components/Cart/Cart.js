import React, { Fragment ,useContext} from 'react';
//import {Modal} from 'react-bootstrap';
import CartContext from './CartContext';

 
const Cart= (props)=>{
    const cartContextImp=useContext(CartContext);
    const totalAmount = `$${cartContextImp.totalAmount.toFixed(2)}`;
    //const containsItems=cartContextImp.items.length>0;
    const totalItems=cartContextImp.items.length;
    const addItemHandler = item=>{
        cartContextImp.addItem({...item,amount:1})
    }
    const removeItemHandler = id =>{
        cartContextImp.removeItem(id);
    }
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
             
        {cartContextImp.items.map(elem=>{
            return(<div key={Math.random().toString()}>
                <li>Title:{elem.title}</li>
                <li>${elem.price}</li>
                <h1>{elem.amount}</h1>
                <button onClick={addItemHandler}  >ADD</button>
                <button onClick={removeItemHandler}  >REMOVE</button>
            </div>)
        })}
        <button onClick={props.hide}>Close</button>
        <h3>TOTAL{totalAmount}</h3>
         </Fragment>
    )
}

export default Cart;