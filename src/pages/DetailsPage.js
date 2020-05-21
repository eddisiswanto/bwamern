import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import HeaderDetail from "parts/HeaderDetail";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Activities from "parts/Activities";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";

// import ItemDetails from "json/itemDetails.json";

import { fetchPage } from "store/actions/page";
import { checkoutBooking } from "store/actions/checkout";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }

  render() {
    const { page, match } = this.props;

    if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Catering Details", pageHref: "" },
    ];

    return (
      <>
        <HeaderDetail {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container" style={{position:"relative", zIndex: 4}}>
          <div className="row">
            <div className="col-7 pr-5 d-none d-lg-block">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-5 d-none d-lg-block">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>


            <div className="col-12 d-block d-lg-none">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-12 d-block d-lg-none">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Activities data={page[match.params.id].activityId} />
        {/* <Testimoni data={page[match.params.id].testimonial} /> */}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
