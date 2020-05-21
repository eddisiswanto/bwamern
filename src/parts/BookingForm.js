import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";

import Button from "elements/Button";
import { InputNumber, InputDate } from "elements/Form";
import formatNumber from "utils/formatNumber";

class BookingForm extends Component {
  constructor(props) {
    super(props);

    var date = new Date();
    this.state = {
      data: {
        jml_order: props.itemDetails.min_order,
        duration: 1,
        date: {
          startDate: date.addDays(1),
          endDate: date.addDays(1),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.jml_order !== data.jml_order) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.jml_order - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            // endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      jml_order: data.jml_order,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    var minDate = new Date();

    const { itemDetails, startBooking } = this.props;

    return (
      <div className="card bordered booking-form">
        <h4 className="mb-3">Pesan Sekarang</h4>
        <h5 className="h3 text-teal mb-4">
          Rp. {formatNumber(itemDetails.price)}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>

        <label htmlFor="jml_order">Ingin tambah porsinya?</label>
        <InputNumber
          min={this.props.itemDetails.min_order}
          max={100}
          suffix={" porsi"}
          onChange={this.updateData}
          name="jml_order"
          value={data.jml_order}
        />
        <span className="text-gray-400 mb-3" style={{ marginTop: -15 }}>
          <small>
            Min. Order {this.props.itemDetails.min_order}{" "}
            {this.props.itemDetails.unit}
          </small>
        </span>

        <label htmlFor="date">Untuk Kapan ?</label>
        <InputDate
          onChange={this.updateData}
          name="date"
          value={data.date}
          minDate={minDate.addDays(1)}
        />
        <span className="text-gray-400 mb-3" style={{ marginTop: -15 }}>
          <small>Min. Pesanan untuk besok</small>
        </span>

        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          Total Bayar{" "}
          <span className="text-gray-900">
            Rp.{" "}
            {formatNumber(itemDetails.price * data.jml_order * data.duration)}
          </span>{" "}
          untuk{" "}
          <span className="text-gray-900">
            {data.jml_order} {itemDetails.unit} selama {data.duration} hari
          </span>
        </h6>

        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
        >
          Lanjutkan Pesanan
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export default withRouter(BookingForm);
