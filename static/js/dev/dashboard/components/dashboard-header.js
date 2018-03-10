"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";


class DashboardHeader extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
      $(".button-collapse").sideNav();
  }

  render(){
    let background = this.props.BACKGROUND + " nav-wrapper";
    return(
      <header>
          <nav>
              <div className={background}>
                <a href="#!" className="brand-logo">Q.G.</a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="collapsible.html">About</a></li>
                    <li><a href="mobile.html">Contact</a></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="collapsible.html">About</a></li>
                    <li><a href="mobile.html">Contact</a></li>
                </ul>
              </div>
          </nav>
      </header>
    )
  }
}

export {DashboardHeader}
