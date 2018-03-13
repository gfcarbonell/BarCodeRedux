"use strict";
import {PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, FILE_EXCEL_PRODUCT, FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR} from "./actions-types";
import {Product} from "./actions";


var stateInitital = { products: [], error:null,  loading:true};

const productReducer = (state = stateInitital, action) =>
{
  switch (action.type) {
    case FETCH_REQUEST:
        return  state;
        break;
    case FETCH_SUCCESS:
        return {
                products: action.products,
                error:null,
                loading:false
              };
        break;
    case FETCH_ERROR:
        return {
                products: [],
                error: action.error,
                loading:false
              };
        break;
    case ADD_PRODUCT:
        return {
                  products: state.products.concat(action.product)
              };
        break;
    case REMOVE_PRODUCT:
        return state.products.filter(product => product.id !== action.product.id);
        break;
    default:
      return state;
  }
}

export {productReducer}
