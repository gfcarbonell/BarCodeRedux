"use strict";
import React from "react";


class ProductList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    if(this.props.products.length){
      return (
      this.props.products.map((products, index) => {
          	return <li key={products.code}> {products.name} <span onClick={this.props.removeProduct}> x </span></li>
          })
      )
    }
    else{
      return <p> Loading... </p>
    }
  }
}
export {ProductList}
