"use strict";
import React, { Component } from 'react';
import $ from "jquery";
import "materialize-css";
import Dropzone from 'react-dropzone';
import Files from 'react-files';
import {Product} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


const mapStateToProps = (state, props) => {
  return {
    file: state.productReducer,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const actions = {
    addFileExcel : bindActionCreators(Product.addFileExcel, dispatch),
  };
  return actions;
}


class Accept extends React.Component {
  constructor() {
    super()
  }
  componentDidMount(){
    $(".input-field :input").attr("disabled", true);
  }

  onFilesChange(e) {
    $(".input-field :input").attr("disabled", false);
  }

  onFilesError(error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  }

  handleSubmit(e) {
    e.preventDefault();
    let self = this;
    let file = self.refs.file_excel;

    var formData = new FormData();
    formData.set("code", self.refs.code.value);
    formData.set("name", self.refs.name.value);
    formData.set("dependence", self.refs.dependence.value);
    formData.set("headquarter", self.refs.headquarter.value);
    formData.set("file", file.state.files[0]);

    let data = {
      "code": self.refs.code.value,
      "name": self.refs.name.value,
      "dependence": self.refs.dependence.value,
      "headquarter": self.refs.headquarter.value,
      "file": file.state.files[0]
    }

    console.log(data);
    this.props.addFileExcel(formData);
  }

  render() {
    return (
      <section>
        <div class="margin-left-right">
            <div>
              <h3 className="center-align"> Import File Excel </h3>
            </div>
            <form method="post"
                  ref="form"
                  enctype="multipart/form-data"
                  onSubmit={this.handleSubmit.bind(this)}>
              <div class="card horizontal">
                  <div class="card-stacked">
                      <div className="files">
                        <Files
                          name="file_excel"
                          ref="file_excel"
                          className='files-dropzone files-dropzone-active'
                          onChange={this.onFilesChange.bind(this)}
                          onError={this.onFilesError.bind(this)}
                          accepts={["application/vnd.ms-excel"]}
                          maxFiles={1}
                          maxFileSize={10000000}
                          minFileSize={0}
                          clickable
                        >
                          Drop files here or click to upload
                        </Files>
                      </div>
                      <div className="center-align bar">
                            <div className="blue-background-bar" id="green_bar">
                                <span> </span>
                            </div>
                      </div>
                  </div>
              </div>

              <div className="container">
                    <h6>Accepted files</h6>
              </div>
              <div>
                  <div className="row">
                    <div className="input-field col s12 m12 l12">
                        <i class="material-icons prefix">assessment</i>
                        <input id="sheet" type="text" className="validate" ref="sheet" />
                        <label for="sheet">Name Sheet</label>
                    </div>
                    <div className="input-field col s12 m12 l6">
                        <i className="material-icons prefix">code</i>
                        <input id="code" type="number" className="validate" ref="code" />
                        <label for="code">Nro Column Code</label>
                    </div>
                    <div className="input-field col s12 m12 l6">
                        <i className="material-icons prefix">developer_board</i>
                        <input id="name" type="number" className="validate" ref="name" />
                        <label for="name">Nro Column name</label>
                    </div>
                    <div className="input-field col s12 m12 l6">
                        <i className="material-icons prefix">home</i>
                        <input id="dependence" type="number" className="validate" ref="dependence" />
                        <label for="dependence">Nro Column Dependence</label>
                    </div>
                    <div className="input-field col s12 m12 l6">
                        <i className="material-icons prefix">business</i>
                        <input id="headquarter" type="number" className="validate" ref="headquarter" />
                        <label for="headquarter">Nro Column headquarter</label>
                    </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12 m12 l12">
                          <button class="display-block green margin-right btn waves-effect waves-light disable" type="submit" id="submit" name="action">Submit
                              <i class="material-icons right">send</i>
                          </button>
                      </div>
                  </div>
              </div>
            </form>
        </div>

      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accept)
