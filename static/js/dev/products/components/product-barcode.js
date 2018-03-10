"use strict";
import React from "react";
import $ from "jquery";
import "jsbarcode";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Product} from "../actions";



const mapStateToProps = (state, props) => {
  return {
    products: state.productReducer,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const actions = {
    loadProducts: bindActionCreators(Product.loadProducts, dispatch),
  };
  return actions;
}


class ProductBarcode extends React.Component {

  constructor(){
    super();
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.props.loadProducts();
  }

  render() {
      return (
        <div>
            <div id="barcodes">
            {
                  this.props.products.map((item, index) => {
                      $("#barcodes").append("<img id=" + item.code + " />");
                      $("#" + item.code).JsBarcode(item.code, {displayValue:true, fontSize:20});
                      return null
                  })
            }
            </div>
        </div>
      );
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductBarcode);
