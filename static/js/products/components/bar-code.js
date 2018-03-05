"use strict";
import React from "react";
import $ from "jquery";


class BarCode extends React.Component {

  constructor(props){
    super(props);
  }

  createBarCodes(items){

  }
  
  render() {
    var items = this.props.products;
    if(items.length){
      this.createBarCodes(items);
      return null;
    }
    else{
      return <p> Loading... </p>
    }
  }
}
export {BarCode}
