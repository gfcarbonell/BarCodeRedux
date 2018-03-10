"use strict";
import React, { Component } from 'react';
import $ from "jquery";
import "materialize-css";
import Dropzone from 'react-dropzone';
import excelToJson from 'convert-excel-to-json';

class Accept extends React.Component {
  constructor() {
    super()
    this.state = {
      accepted: [],
      rejected: []
    }
  }
  componentDidMount(){
    $(".input-field :input").attr("disabled", true);
  }

  render() {
    return (
      <section>
        <div class="margin-left-right">
            <div>
              <h3 className="center-align"> Import File Excel </h3>
            </div>
            <form method="post" >
              <div class="card horizontal">
                  <div class="card-stacked">

                      <Dropzone
                        className="padding-up-down card-content "
                        accept="application/vnd.ms-excel"
                        onDrop={(accepted, rejected) => {

                          $(".input-field :input").attr("disabled", false);


                          accepted.forEach(file => {
                                 const reader = new FileReader();
                                 reader.onload = () => {
                                     const fileAsBinaryString = reader.result;
                                    console.log(fileAsBinaryString);
                                 };
                                 reader.onabort = () => console.log('file reading was aborted');
                                 reader.onerror = () => console.log('file reading has failed');

                                 reader.readAsDataURL(file);
                             });

                            this.setState({ accepted, rejected });
                        }}
                      >
                          <p className="center-align "> <i class="material-icons large"> attach_file </i></p>
                      </Dropzone>
                      <div class="card-action center-align light-green lighten-3">

                      </div>
                  </div>
              </div>
              <div className="container">
                    <h6>Accepted files</h6>
                    <ul>
                      {
                        this.state.accepted.map(f => <li key={f.name}>{f.name}  - {f.size} bytes</li>)
                      }
                    </ul>
                    <h6>Rejected files</h6>
                    <ul>
                      {
                        this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                      }
                    </ul>
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
                          <button class="display-block red margin-right btn waves-effect waves-light disable" type="submit" id="submit" name="action">Submit
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

export {Accept}
