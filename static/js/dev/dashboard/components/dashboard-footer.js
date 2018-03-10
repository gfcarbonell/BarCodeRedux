"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";
import {Footer} from "react-materialize";


class DashboardFooter extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Footer copyrights=" © 2018 Copyright Quality Global"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">www.qualityglobal.com.pe</a>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Youtube</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
            </ul>
          }
          className={this.props.BACKGROUND}>
            <h5 className="white-text">Quality Global</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
    )
  }
}

export {DashboardFooter}
