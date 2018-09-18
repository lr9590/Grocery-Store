import React, { Component } from 'react';
import ProductListing from '../features/product-listing'
import data from '../data/products.json'

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: data.products,
            term: '',
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({ term: event.target.value })
    }

    render() {
        return <div className="text-center">
        <h1 className="mb-5 text-success">Grocery Store</h1>  
        <form className="mb-5"> 
            <input type="text"
                className="text-center p-1"
                placeholder="Search item"
                onChange={this.searchHandler}
                value={this.term}
            />
        </form>
        <ProductListing 
            products={ this.state.products } 
            term={ this.state.term }
        />
    </div>
    }
}

export default Homepage;