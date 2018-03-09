import React from "react";
import ReactDOM from "react-dom";
import {mainStore} from "./stores";
import {ProductRouter} from "../products/routers";
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(

      <Provider store={mainStore}>
          <BrowserRouter>
            <ProductRouter />
          </BrowserRouter>
      </Provider>
      ,
  document.getElementById('x')
);
