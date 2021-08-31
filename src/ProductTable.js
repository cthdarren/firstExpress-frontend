import React, { Component } from 'react'
import ProductTableItem from './ProductTableItem';
const axios = require('axios');

export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <ProductTableItem name="Item" price="Price" header={true}/>
                {this.props.productsList.map(product => 
                    <ProductTableItem name={product.name} price={product.price} className="col"/>
                )}
            </div>
        )
    }
}
