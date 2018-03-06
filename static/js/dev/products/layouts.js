"use strict";
import React from "react";
import {DashboardHeader} from "../dashboard/components/dashboard-header";
import {DashboardLeft} from "../dashboard/components/dashboard-left";
import {DashboardFooter} from "../dashboard/components/dashboard-footer";

class DashboardLayout extends React.Component {

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
                         <main>{this.props.children}</main>
                    </div>
                </div>
                <DashboardFooter BACKGROUND={this.props.BACKGROUND}> </DashboardFooter>
          </div>
      )
  }
}
export {DashboardLayout}
