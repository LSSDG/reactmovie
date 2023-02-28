import React, { Fragment } from 'react';
import {Modal} from 'react-bootstrap';

 
const Cart= (props)=>{
    const cartElements = [{

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
        
        }];
    
    return (
        <Fragment>
             
        {cartElements.map(elem=>{
            return(<div key={Math.random().toString()}>
                <li>{elem.title}</li>
                <li>{elem.price}</li>
                <h1>{elem.quantity}</h1>
            </div>)
        })}
        <button onClick={props.hide}>Close</button>
         </Fragment>
    )
}

export default Cart;