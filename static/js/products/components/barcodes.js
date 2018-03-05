"use strict";
import React from "react";
import $ from "jquery";
import "jsbarcode";


class Barcode extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    if(this.props.products.length){
      return  null
    }
    else{
      return <p> Loading... </p>
    }
  }
}
export {Barcode}
