import React from 'react';
import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';


export default function ProductListItem(props) {
    return <div className="col-md-4 mb-5">
        <h4>{ props.product.name }</h4>   
        <div className="text-danger mb-2"> Price for unit - { props.product.price }$ </div>
        <div> 
            <AddBtn 
                cartItem={props.cartItem} 
                product={props.product} 
                addToCart={props.addToCart}
            />
            <br/>
            {
                props.cartItem
                ?   <RemoveBtn 
                    cartItem={props.cartItem} 
                    product={props.product} 
                    removeFromCart={props.removeFromCart}
                    />
                : null
            }
        </div>
    </div>
}