"use strict";
import {combineReducers} from "redux";
import {productReducer} from "../products/reducers";
import { routerReducer } from 'react-router-redux';

const mainReducer = combineReducers({
  productReducer,
  routing: routerReducer
});

export {mainReducer}
