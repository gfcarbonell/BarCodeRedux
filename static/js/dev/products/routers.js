"use strict";
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProductListContainer from "./components/products";
import ProductBarcode from "./components/product-barcode";
import {DashboardLayout} from "./layouts";

var url = __dirname + "static/img/png/QG-1.png";
var logo = {
  "name":"Quality Global",
  "img":url
}

class ProductRouter extends React.Component{

  constructor(props){
    super(props);

  }

  render() {
    return (
      <DashboardLayout logo={logo} BACKGROUND={"light-green darken-1"}>
          <BrowserRouter>
              <Switch>
                  <Route path="/dashboard/barcodes" component={ProductListContainer} />
                  <Route path="/dashboard/barcodes/print" component={ProductBarcode} />
              </Switch>
          </BrowserRouter>
      </DashboardLayout>
    );
  }
}

export {ProductRouter};
