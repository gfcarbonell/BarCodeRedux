"use strict";
import {PRODUCTS, ADD_PRODUCT} from "./actions-types";
import {Product} from "./actions";


const initialState = {
    product: []
}

const productReducer = (state = initialState, action) =>
{

  switch (action.type) {
    case PRODUCTS:
      return [
        ...state,
        ...action.products
      ];
      break;
      case ADD_PRODUCT:
        return [
          ...state,
          action.product
        ];
        break;
    default:
      return [...state]
  }
}

export {productReducer}
