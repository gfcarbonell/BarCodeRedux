"use strict";
import React from "react";
import {DashboardHeader} from "../dashboard/components/dashboard-header";
import {DashboardLeft} from "../dashboard/components/dashboard-left";
import {DashboardFooter} from "../dashboard/components/dashboard-footer";

import ProductList from "./components/products";
import {BarcodeImage} from "./components/barcode-image";
import ProductBarcode from "./components/product-barcode";
import ProductAdd from "./components/product-add";
import Accept from "./components/product-file";
import {Route, Switch} from 'react-router-dom';

class DashboardProduct extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
      return (
          <div>
                <DashboardHeader BACKGROUND={this.props.BACKGROUND}> </DashboardHeader>
                <div class="row margin-0 padding">
                    <DashboardLeft logo={this.props.logo}/>
                    <div className="col s12 m8 l9">
                        <main>
                            <Switch>
                                <Route path="/dashboard/barcodes/list" component={ProductList} />
                                <Route path="/dashboard/barcodes/print" component={ProductBarcode} />
                                <Route path="/dashboard/barcodes/import" component={Accept} />
                                <Route path="/dashboard/barcodes/add" component={ProductAdd} />
                            </Switch>
                        </main>
                    </div>
                </div>
                <DashboardFooter BACKGROUND={this.props.BACKGROUND}> </DashboardFooter>
          </div>
      )
  }
}
export {DashboardProduct}
