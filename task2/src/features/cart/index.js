import React from 'react';
import { connect } from 'react-redux';

function sort(items) {
    return items.sort((a, b) => a.id < b.id)
}

function searchingFor(term) {
    return function(x) {
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;  
    }
}

function Cart(props) {
    return <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Options</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    sort(props.cart).filter(searchingFor(props.term)).map(item => <tr>
                        <td>{ item.name }</td>
                        <td>{ item.quantity }</td>
                        <td> 
                            <button className="btn btn-success mx-1"
                            onClick={() => props.addToCart(item)}>
                                +
                            </button>

                            <button className="btn btn-danger mx-1"
                            onClick={() => props.removeFromCart(item)}>
                                -
                            </button>
                        </td>
                        <td> 
                            <button className="btn btn-danger"
                                onClick={() => props.removeAllFromCart(item)}>
                                Remove all from cart
                            </button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)