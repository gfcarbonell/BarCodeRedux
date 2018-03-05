"use strict";
import {createStore, applyMiddleware, compose} from "redux";
import {mainReducer} from "./reducers";
import thunk from "redux-thunk";

let mainStore = createStore(mainReducer, compose(applyMiddleware(thunk)));

export {mainStore}
