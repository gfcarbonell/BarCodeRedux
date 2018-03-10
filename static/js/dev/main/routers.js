import React from "react";
import ReactDOM from "react-dom";
import {mainStore} from "./stores";
import {DashboardProduct} from "../products/dashboard";
import {Provider} from "react-redux";
import { BrowserRouter} from 'react-router-dom';


var url = __dirname + "static/img/png/QG-1.png";
var logo = {
  "name":"Quality Global",
  "img":url
}

ReactDOM.render(

      <Provider store={mainStore}>
          <BrowserRouter>
                <DashboardProduct logo={logo} BACKGROUND={"light-green darken-1"} />
          </BrowserRouter>
      </Provider>
      ,
  document.getElementById('x')
);
