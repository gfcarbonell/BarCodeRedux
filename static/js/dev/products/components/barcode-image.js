"use strict";
import React from "react";

class BarcodeImage extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return <img id={props.id} alt={props.name} />
  }

}
export {BarcodeImage}
