"use strict";
import axios from "axios";
import $ from "jquery";
import {PRODUCTS, ADD_PRODUCT, FILE_EXCEL_PRODUCT} from "./actions-types";
const ROOT_URL = 'http://localhost:3000'
const ROOT_URL_NODE = 'http://localhost:8000'

class Product {

  static loadProducts () {

    return (dispatch) => {

      //Begin Request
      dispatch({type: "FETCH_REQUEST"});

      return axios.get(`${ROOT_URL}/products`)
        .then(response => {
          //Success Request
          dispatch({ type: "FETCH_SUCCESS", products: response.data });
        })
        .catch(error => {
          //Error Request
          dispatch({type: "FETCH_ERROR", error:error})
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
      return axios.post(`${ROOT_URL}/products`, product, )
        .then(response => {
          dispatch({ type: ADD_PRODUCT, product: response.data});
        })
        .catch(error => {
          console.log(error)
        });
    };
  }

  static addFileExcel(excel){
    console.log(excel);
    return (dispatch) => {
      return axios.post(`${ROOT_URL_NODE}/dashboard/barcodes/import`,
            excel,
            {
              headers: {
                  'Content-Type': 'multipart/form-data'
              },
              onUploadProgress: (e) => {
                  console.log("evento pregress");
                  console.log(parseInt( Math.round( ( e.loaded * 100 ) / e.total ) ));
              }
            }
        )
        .then(response => {
          dispatch({ type: FILE_EXCEL_PRODUCT, excel: response.data});
        })
        .catch(error => {
          console.log(error)
        });
    };
  }
}

export {Product}
