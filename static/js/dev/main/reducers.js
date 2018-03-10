"use strict";
import {combineReducers} from "redux";
import {productReducer} from "../products/reducers";

const mainReducer = combineReducers({
  productReducer
});

export {mainReducer}
