import React, { Component } from "react";

import Button from "../elements/Button/index"
export default class PageNotFound extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto text-center">
            <p className="text-gray-900">
              Halaman tidak ditemukan. <br /> Mungkin masih dalam proses pengembangan
            </p>

            <Button className="btn" type="link" isPrimary isLight href="/">
              Kembali Ke Home
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
