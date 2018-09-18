import React from 'react';

export default function RemoveButton(props) {
   return <button className="btn btn-danger"
        onClick={() => props.removeFromCart(props.cartItem)}
    > Remove</button>
}