"use strict";
import React from "react";
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
  render() {
     return (
        <div>
            <form method="post" onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="Code" ref="code"/>
              <input type="text" placeholder="Name" ref="name"/>
              <input type="text" placeholder="Dependence" ref="dependence"/>
              <input type="text" placeholder="Headquarters" ref="headquarter"/>
              <input type="submit" />
            </form>
            <ProductList products={this.props.products} removeProduct={this.handleRemove.bind(this)}/>
        </div>
     );
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
