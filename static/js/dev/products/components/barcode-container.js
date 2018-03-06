"use strict";
import React from "react";
import $ from "jquery";
import "jsbarcode";
import {BarcodeImage} from "./barcode-image"


class BarcodeContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
      return (
                <div id="barcode_container">
                    <BarcodeImage id={this.props.item.code} alt={this.props.item.name} />
                </div>
            )
  }
}
export {BarcodeContainer}
