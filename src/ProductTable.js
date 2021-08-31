import React, { Component } from "react";
import ProductTableItem from "./ProductTableItem";
const axios = require("axios");

export default class ProductTable extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col">Name</div>
          <div className="col text-end">Price</div>
        </div>
        {this.props.productsList.map((product) => (
          <ProductTableItem
            name={product._id}
            price={product.price}
            className="col"
          />
        ))}
      </>
    );
  }
}
