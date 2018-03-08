"use strict";
import {PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT} from "./actions-types";
import {Product} from "./actions";


const initialState = {
    products: []
}


const productReducer = (state = {}, action) =>
{
  switch (action.type) {
    case PRODUCTS:
        return [
          ...state,
          ...action.products
        ];
        break
    case ADD_PRODUCT:
        return [
          ...state,
          action.product
        ];
        break;
    case REMOVE_PRODUCT:
        return state.products.filter(product => product.id !== action.product.id);
        break;
    default:
      return [...state]
  }
}

export {productReducer}
