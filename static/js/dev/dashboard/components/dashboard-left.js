"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";
import {Link, Router} from "react-redux"


class DashboardLeft extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    $('.collapsible').collapsible({
        accordion: false
    });
  }

  render(){

    return(
        <div className="col s12 m4 l3">
            <figure class="containerImage">
                <img class="materialboxed margin-left-right"
                     data-caption={this.props.logo.name}
                     width="250"
                     src={this.props.logo.img}  />
            </figure>
            <div class="container" >
                <ul class="collapsible" data-collapsible="accordion">
                    <li>
                    <Router>
                    <Link key={1} to={"ok"}> xxx </Link>
                    </Router>
                      <div class="collapsible-header">
                            <i class="material-icons">note_add</i> Products
                      </div>
                      <div class="collapsible-body"><span> You can to do any operation </span></div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                              <i class="material-icons">import_export</i> Import File
                      </div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                              <i class="material-icons">print</i> Print Barcodes
                      </div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                  </ul>
                  <div>
                      <button onClick={() => browserHistory.push('/dashboard/barcodes')}>Go to /foo</button>
                  </div>
            </div>
        </div>

    )
  }
}

export {DashboardLeft}
