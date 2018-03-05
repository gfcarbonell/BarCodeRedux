"use strict";
import React from "react";
import $ from "jquery";
import "jsbarcode";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Product} from "../actions";
import {ProductList} from "./product-list";


const mapStateToProps = (state, props) => {
  return {
    products: state.productReducer,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const actions = {
    loadProducts: bindActionCreators(Product.loadProducts, dispatch),
    addProduct: bindActionCreators(Product.addProduct, dispatch),
  };
  return actions;
}


class ProductListContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      loading: true,
    };

  }

  componentWillMount() {
    this.props.loadProducts();
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    var data = {
          code: this.addZeroLeftChain(self.refs.code.value, 10),
          name: self.refs.name.value,
          dependence: self.refs.dependence.value,
          headquarter: self.refs.headquarter.value,
        }
    this.props.addProduct(data);
  }

  addZeroLeftChain(chain, number){
    if (number === 0 || number < 0) return object
    while (chain.length<number)
      chain = '0' + chain;
    return chain;
  }

  render() {

      return (
        <div>
            <div>
                <form method="post" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="number" placeholder="Code" ref="code"/>
                    <input type="text" placeholder="Name" ref="name"/>
                    <input type="text" placeholder="Dependence" ref="dependence"/>
                    <input type="text" placeholder="Headquarters" ref="headquarter"/>
                    <input type="submit" />
                </form>
            </div>
            <div id="barcodes">
            {
                  this.props.products.map((item, index) => {
                      $("#barcodes").append("<img id=" + item.code + " />");
                      $("#" + item.code).JsBarcode(item.name, {displayValue:true,fontSize:20});
                      return null
                  })
            }
            </div>
        </div>
      );
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
