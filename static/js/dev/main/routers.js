import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {mainStore} from "./stores";
import {ProductRouter} from "../products/routers";
import {Provider} from "react-redux";


ReactDOM.render(
  <Provider store={mainStore}>
      <ProductRouter/>
  </Provider>,
  document.getElementById('x')
);
