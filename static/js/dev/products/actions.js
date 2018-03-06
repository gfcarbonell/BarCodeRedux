"use strict";
import axios from "axios";
import {PRODUCTS, ADD_PRODUCT} from "./actions-types";
const ROOT_URL = 'http://localhost:3000'

class Product {

  static loadProducts () {
    return (dispatch) => {
      return axios.get(`${ROOT_URL}/products`)
        .then(response => {
          dispatch({ type: PRODUCTS, products: response.data});
        })
        .catch(error => {
          console.log(error);
        });
    };
  }

  static getProductById (id) {
    return (dispatch) => {
      return axios.get(`${ROOT_URL}/products/?id=${id}`)
        .then(response => {
          dispatch({ type: PRODUCTS, products: response.data});
        })
        .catch(error => {
          console.log(error);
        });
    };
  }

  static getProductByName (name) {
    return (dispatch) => {
      return axios.get(`${ROOT_URL}/products/?name=${name}`)
        .then(response => {
          dispatch({ type: PRODUCTS, products: response.data});
        })
        .catch(error => {
          console.log(error);
        });
    };
  }

  static addProduct(product){
    return (dispatch) => {
      return axios.post(`${ROOT_URL}/products`, product, 'Content-Type': 'application/json')
        .then(response => {
          dispatch({ type: ADD_PRODUCT, product: response.data});
        })
        .catch(error => {
          console.log(error)
        });
    };
  }
}

export {Product}
