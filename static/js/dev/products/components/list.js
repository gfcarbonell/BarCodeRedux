"use strict";
import React from "react";


class List extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    if(this.props.items.length){
      return (
      this.props.items.map((item, index) => {
          	return (
                <div>
                      <li key={index}>
                        <input type="checkbox" className="filled-in" name="items" id={item.id} />
                        <label for={item.id}> </label>
                      </li>
                      <li key={index}>{item.code}</li>
                      <li key={index}>{item.name}</li>
                      <li key={index}>{item.dependence}</li>
                      <li key={index}>{item.headquarter}</li>
                      <li key={index}><a> <i class="material-icons">delete</i> </a></li>
                      <li key={index}><a> <i class="material-icons">update</i> </a> </li>
                </div>
            )
          })
      )
    }
    else{
      return <p> Loading... </p>
    }
  }
}
export {List}
