"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";
import {Link} from 'react-router-dom';

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
                      <div class="collapsible-header">
                          <Link to="/dashboard/barcodes/list">
                              <i class="material-icons">featured_play_list</i>
                              Products
                          </Link>
                      </div>
                      <div class="collapsible-body"><span> You can to do any operation </span></div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                          <Link to="/dashboard/barcodes/add">
                              <i class="material-icons">note_add</i> Add Product
                          </Link>
                      </div>
                      <div class="collapsible-body"><span> You can to do any operation </span></div>
                    </li>

                    <li>
                      <div class="collapsible-header">
                          <Link to="/dashboard/barcodes/import">
                              <i class="material-icons">import_export</i> Import File
                          </Link>
                      </div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                      <div class="collapsible-header">
                          <Link to="/dashboard/barcodes/print">
                              <i class="material-icons">print</i> Print Barcodes
                          </Link>
                      </div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                  </ul>
            </div>
        </div>

    )
  }
}

export {DashboardLeft}
