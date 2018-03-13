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
    products: state.productReducer.products,
    loading:  state.productReducer.loading,
    error: state.productReducer.error
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
      search:""
    };
  }
  onLoadTable(){

  }
  componentWillMount() {
      this.props.loadProducts();
  }

  handleFilterProduct(e){
    this.setState({search:e.target.value.toUpperCase()});
  }

  getColumns(){
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
      const { error, loading, products } = this.props;
      const columns = this.getColumns();
      const data =  products.filter(
          (product)=>{
              return product.name.indexOf(this.state.search) !== -1;
          }
      );
      if (error) {
        return <div>Error! {error.message}</div>;
      }

      if (loading) {
        return <div>Loading...</div>;
      }

      return (

        <div className="container">
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
            <div>
                <ReactTable className="-striped -highlight" defaultPageSize={10} resizable={true} data={data} columns={columns} items_by_page={5} paginate={true}>

                </ReactTable>
            </div>
        </div>
      );
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
