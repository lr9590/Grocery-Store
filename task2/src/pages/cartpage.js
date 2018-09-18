import React, { Component } from 'react';
import Cart from '../features/cart' 

class Cartpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({ term: event.target.value })
    }

    render() {
        return <div className="text-center">
        <h1 className="mb-5 text-warning">My Cart</h1> 
        <form className="mb-5"> 
            <input type="text"
                className="text-center p-1"
                placeholder="Search order"
                onChange={this.searchHandler}
            />
        </form> 
        <Cart term={ this.state.term }/>  
    </div>
    }
}

export default Cartpage;
