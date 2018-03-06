"use strict";
import React from "react";
import $ from "jquery";
import "jsbarcode";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Product} from "../actions";
import {ProductList} from "./product-list";
import { Link } from 'react-router-dom';
import { Grid } from 'react-redux-grid';

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

  }

  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    var data = {
          code: this.addZeroLeftChain(self.refs.code.value, 13),
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
              <h3 className="center-align"> Generated Barcode</h3>
            </div>
            <div className="row">
                <form className="col s12" method="post" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                      <div className="input-field col s12 m12 l6">
                          <i className="material-icons prefix">code</i>
                          <input id="code" type="number" className="validate" ref="code" />
                          <label for="code">Code</label>
                      </div>
                      <div className="input-field col s12 m12 l6">
                          <i className="material-icons prefix">developer_board</i>
                          <input id="name" type="text" className="validate text-uppercase" ref="name" />
                          <label for="name">name</label>
                        </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12 m12 l6">
                          <i className="material-icons prefix">home</i>
                          <input id="dependence" type="text" className="validate text-uppercase" ref="dependence" />
                          <label for="dependence">Dependence</label>
                      </div>
                      <div className="input-field col s12 m12 l6">
                          <i className="material-icons prefix">business</i>
                          <input id="headquarter" type="text" className="validate text-uppercase" ref="headquarter" />
                          <label for="headquarter">headquarter</label>
                        </div>
                    </div>
                    <div className="row">
                        <button class="display-block red margin-right btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="row">
                <form className="col s12" method="post" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                      <div className="input-field col s12">
                          <i className="material-icons prefix">search</i>
                          <input id="search" type="number" className="validate" ref="search" />
                          <label for="search">Search</label>
                      </div>
                    </div>
                </form>
            </div>
            <div className="row">
                
            </div>
        </div>
      );
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
