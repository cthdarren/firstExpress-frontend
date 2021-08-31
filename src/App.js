import React, { Component } from "react";
import "./App.css";
import ProductTable from "./ProductTable";
import "./bootstrap/css/bootstrap.min.css";
const axios = require("axios");

class App extends Component {
  state = {
    productsList: [],
    name: "",
    price: null,
    message: "",
  };
  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios({
      method: "get",
      url: "/products",
    }).then((response) => {
      this.setState({ productsList: response.data.products });
    });
  };
  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handlePrice = (event) => {
    this.setState({ price: event.target.value });
  };

  handleSubmit = () => {
    axios({
      method: "post",
      url: "/add",
      data: {
        name: this.state.name,
        price: this.state.price,
      },
    }).then((response) => {
      this.setState({ message: response.data.message });
      console.log(response.data.success);
      this.getProducts();
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div>
          <ProductTable productsList={this.state.productsList} />
          <form className="col ">
            <div className="row">
              <div className="col">
                <label>Name: </label>
                <input
                  type="text"
                  onChange={(e) => this.handleName(e)}
                  value={this.state.name}
                ></input>
              </div>
              <div className="col">
                <label>Price: </label>
                <input
                  type="number"
                  onChange={(e) => this.handlePrice(e)}
                  value={this.state.price}
                ></input>
              </div>
              <button className="col" type="button" onClick={this.handleSubmit}>
                Add
              </button>
            </div>
            <div className="row">
              <div className="col text-danger">{this.state.message}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
