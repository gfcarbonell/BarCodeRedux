"use strict";
import React from "react";
import {DashboardLayout} from "./layouts";
import { Router, Route, IndexRoute, browserHistory, hashHistory  } from 'react-router';


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
      <DashboardLayout logo={logo} BACKGROUND={"light-green darken-1"} />
    );
  }
}

export {ProductRouter};
