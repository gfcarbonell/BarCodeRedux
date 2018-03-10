"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";
import ReactTable from "react-table";
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
    addProduct: bindActionCreators(Product.addProduct, dispatch)
  };
  return actions;
}

class ProductList extends React.Component {

  constructor(){
    super();
    this.state = {
      search:"",
      loading:false,
      filter:[]
    };
  }

  componentWillMount() {
      this.props.loadProducts();
      this.setState({loading:true});
  }

  handleFilterProduct(e){
    this.setState({search:e.target.value.toUpperCase()});
  }

  addColumns(){
    const columns = [{
            Header: 'Id',
            accessor: 'id'
            }, {
                Header: 'Code',
                accessor: 'code'

            }, {
                Header: 'Name',
                accessor: 'name'

            }, {
                Header: 'Dependence',
                accessor: 'dependence'

            },{
                Header: 'Headquarter',
                accessor: 'headquarter'
            }
        ];
      return columns;
  }


  render() {
      let columns = this.addColumns();

      const products =  this.props.products.filter(
          (product)=>{
              return product.name.indexOf(this.state.search) !== -1;
          }
      );

      return (
        <div>
          <div>
              <div>
                <h3 className="center-align"> List Products </h3>
              </div>
              <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input
                              onChange ={this.handleFilterProduct.bind(this)}
                              id="search"
                              type="text"
                              value={this.state.search}
                              className="validate"
                              ref="search" />
                        <label for="search">Search</label>
                    </div>
              </div>
          </div>
              <ReactTable
                  className="-striped -highlight"
                  defaultPageSize={10}
                  resizable={true}
                  data={products}
                  columns={columns}
                  items_by_page={5}
                  paginate={true}>
              </ReactTable>
          </div>
      );
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
