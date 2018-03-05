"use strict";
import React from "react";
import $ from "jquery";
import "jsbarcode";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Product} from "../actions";
import {ProductList} from "./product-list";
import {BarCode} from "./bar-code";


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
          code: self.refs.code.value,
          name: self.refs.name.value,
          dependence: self.refs.dependence.value,
          headquarter: self.refs.headquarter.value,
        }
    this.props.addProduct(data);
  }

  handleRemove(e, id) {
    e.preventDefault();
    var self = this;
    alert("ok");
  }

  addBarCodes(e){
    this.props.products.map((item, index)=>{
       $("#barcodes").append("<img id=" + item.code + " />");
       $("#" + item.code).JsBarcode(item.name, {displayValue:true,fontSize:20});
    });

    /*
    for (var i = 0; i < this.props.products.length; i++) {
       $("#barcodes").append("<img id=" + this.props.products[i].code + " />");
    }
    for (var i = 0; i < this.props.products.length; i++) {
       $("#" + this.props.products[i].code).JsBarcode(this.props.products[i].name, {displayValue:true,fontSize:20});
    }*/
  }

  render() {

      return (
        <div>
            <div>
                <form method="post" onSubmit={this.handleSubmit.bind(this)}>
                  <input type="text" placeholder="Code" ref="code"/>
                  <input type="text" placeholder="Name" ref="name"/>
                  <input type="text" placeholder="Dependence" ref="dependence"/>
                  <input type="text" placeholder="Headquarters" ref="headquarter"/>
                  <input type="submit" />
                </form>
            </div>
            <button onClick={this.addBarCodes.bind(this)}> click Me </button>
            <div id="barcodes">

            </div>
        </div>
      );
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
