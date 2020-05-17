import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import ReactAutocomplete from "react-autocomplete";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  // state = {
  //   value: '',
  // };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const menuStyle = {

      display: 'block',
      width: '100%',
      height: 'calc(1.5em + .75rem + 2px)',
      padding: '.375rem .75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#495057',
      backgroundColor: 'white',
      // backgroundClip: 'padding-box',
      border: '1px solid #ced4da',
      borderRadius: '50px',
      transition: 'red .15s ease-in-out,box-shadow .15s ease-in-out'
    };

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <ReactAutocomplete
              items={[
                { id: "foo", label: "foo" },
                { id: "bar", label: "bar" },
                { id: "baz", label: "baz" },
              ]}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={(item) => item.label}
              renderItem={(item, highlighted) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: highlighted ? "#eee" : "transparent",
                    borderRadius: '10px',
                    padding: '10px',
                  }}
                >
                  {item.label}
                </div>
              )}
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
              onSelect={(value) => this.setState({ value })}
              inputProps={{ style: menuStyle }}
            />

            <button className="btn ml-3 btn-danger">Search</button>
          </div>
        </div>
      </div>
    );
  }
}
