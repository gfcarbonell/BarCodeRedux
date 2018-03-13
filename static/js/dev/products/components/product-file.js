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
    $("#error").text('error code ' + error.code + ': ' + error.message);
    console.log('error code ' + error.code + ': ' + error.message)
  }

  handleSubmit(e) {
    e.preventDefault();
    let self = this;
    let file = self.refs.file_excel;

    let data = {
      "sheet":self.refs.sheet.value,
      "code": {
        "letter": self.refs.letter_column_code.value,
        "name": self.refs.name_column_code.value
      },
      "name": {
        "letter": self.refs.letter_column_name.value,
        "name": self.refs.name_column_name.value
      },
      "dependence": {
        "letter": self.refs.letter_column_dependence.value,
        "name": self.refs.name_column_dependence.value
      },
      "headquarter": {
        "letter": self.refs.letter_column_headquarter.value,
        "name": self.refs.name_column_headquarter.value
      }
    }
    //Use for in data more files
    var formData = new FormData();

    formData.set("data", JSON.stringify(data));
    formData.set("file", file.state.files[0]);
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
                      <div className="files card-content">
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
                          <p className="center-align"> <i className="material-icons medium prefix">attach_file</i> Drop files here or click to upload </p>
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
                    <p className="error" id="error">  </p>
              </div>
              <div>
                  <div className="row">
                    <legend> <i className="material-icons prefix">assessment</i> Sheet :</legend>
                    <div className="input-field col s12 m12 l12">
                        <input id="sheet" type="text" required className="validate" ref="sheet" />
                        <label for="sheet">Name Sheet</label>
                    </div>
                  </div>
                  <div className="row">
                      {
                        //Code
                      }
                      <div className="col s12 m12 l6">
                        <legend> <i className="material-icons prefix">code</i> Column Code :</legend>
                        <div className="input-field col s12 m4 l4">
                            <input id="letter_column_code" required type="text" className="validate text-uppercase" ref="letter_column_code" />
                            <label for="letter_column_code"> Letter </label>
                        </div>
                        <div className="input-field col s12 m8 l8">
                            <input id="name_column_code" required type="text" className="validate" ref="name_column_code" />
                            <label for="name_column_code"> Name </label>
                        </div>
                      </div>
                      {
                        //Name
                      }
                      <div className="col s12 m12 l6">
                          <legend> <i className="material-icons prefix">developer_board</i> Column Name :</legend>
                          <div className="input-field col s12 m4 l4">
                              <input id="letter_column_name" required type="text" className="validate text-uppercase" ref="letter_column_name" />
                              <label for="letter_column_name"> Letter </label>
                          </div>
                          <div className="input-field col s12 m8 l8">
                              <input id="name_column_name" required type="text" className="validate" ref="name_column_name" />
                              <label for="name_column_name"> Name </label>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      {
                        //Dependence
                      }
                      <div className="col s12 m12 l6">
                        <legend> <i className="material-icons prefix">home</i> Column Dependence :</legend>
                        <div className="input-field col s12 m4 l4">
                            <input id="letter_column_dependence" required type="text" className="validate text-uppercase" ref="letter_column_dependence" />
                            <label for="letter_column_dependence"> Letter </label>
                        </div>
                        <div className="input-field col s12 m8 l8">
                            <input id="name_column_dependence" required type="text" className="validate" ref="name_column_dependence" />
                            <label for="name_column_dependence"> Name </label>
                        </div>
                      </div>
                      {
                        //Headquarter
                      }
                      <div className="col s12 m12 l6">
                        <legend><i className="material-icons prefix">business</i>  Column Headquarter :</legend>
                        <div className="input-field col s12 m4 l4">
                            <input id="letter_column_headquarter" required type="text" className="validate text-uppercase" ref="letter_column_headquarter" />
                            <label for="letter_column_headquarter"> Letter </label>
                        </div>
                        <div className="input-field col s12 m8 l8">
                            <input id="name_column_headquarter" required type="text" className="validate" ref="name_column_headquarter" />
                            <label for="name_column_headquarter"> Name </label>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <button class="display-block red margin-right btn waves-effect waves-light" type="submit" name="action">Submit
                          <i class="material-icons right">send</i>
                      </button>
                  </div>
              </div>
            </form>
        </div>

      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accept)
