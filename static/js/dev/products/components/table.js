"use strict";
import React from "react";
import $ from "jquery";



class TableCustom extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){

  }
  componentDidMount(){
    /*$("#table")
      .css({"width":"100%"});
*/
  }

  render() {
    console.log(this.props.data);
    let data = this.props.data;
    let columns = [
      "Id",
      "Code",
      "Name",
      "Dependence",
      "Headquarter"
    ]
    return (
        <div>
            <ReactTable columns={columns} data={data} paginate={true} items_by_page={10}/>
        </div>
    )
  }
}
export {TableCustom}
