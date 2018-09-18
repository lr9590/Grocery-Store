import React from 'react';

export default function AddButton(props) {
   return <button className="btn btn-primary mb-2"
    onClick={() => props.addToCart(props.product)}
    > Add to cart 
        <span className="ml-1 text-dark font-weight-bold">
            ({(props.cartItem && props.cartItem.quantity) || 0})
        </span>
    </button>
}