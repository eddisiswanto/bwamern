import React from "react";
import Fade from "react-reveal/Fade";

import formatNumber from "utils/formatNumber";
import Button from "elements/Button";

import OwlCarousel from "react-owl-carousel";

export default function MostPicked(props) {
  return (
    <>
      <section
        className="container d-none d-lg-block"
        ref={props.refMostPicked}
      >
        <Fade bottom>
          <h4 className="mb-3">Paket Catering Sering di Pesan</h4>
          <div className="container-grid">
            {props.data.map((item, index) => {
              return (
                <div
                  key={`mostpicked-${index}`}
                  className={`item column-4${
                    index === 0 ? " row-2" : " row-1"
                  }`}
                >
                  <Fade bottom delay={400 * index}>
                    <div className="card card-featured">
                      <div className="tag">
                        Rp. {formatNumber(item.price)}
                        <span className="font-weight-light">
                          {" "}
                          / {item.unit}
                        </span>
                      </div>
                      <figure className="img-wrapper">
                        <img
                          src={
                            item.imageId[0]
                              ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          className="stretched-link d-block text-white"
                          type="link"
                          href={`/properties/${item._id}`}
                        >
                          <h5>{item.title}</h5>
                        </Button>
                        <span>
                          Min. order {item.min_order} {item.unit}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </Fade>
      </section>

      <section
        className="container d-block d-lg-none"
        style={{ marginBottom: 40 }}
        ref={props.refMostPickedSmall}
      >
        <Fade bottom>
          <h6 className="font-weight-bold mb-3">
            Paket Catering Sering di Pesan
          </h6>
          <div className="">
            <OwlCarousel
              className="owl-theme"
              items={1}
              loop
              margin={10}
              autoPlay={true}
              autoplaySpeed={true}
              dots={true}
            >
              {props.data.map((item, index) => {
                return (
                  <div className="item" key={`mostpicked-${index}`}>
                    <div
                      className="card card-featured"
                      style={{ height: 220, borderRadius: 5 }}
                    >
                      <div className="tag" style={{ borderRadius: 5 }}>
                        Rp. {formatNumber(item.price)}
                        <span className="font-weight-light">
                          {" "}
                          / {item.unit}
                        </span>
                      </div>
                      <figure className="img-wrapper">
                        <img
                          src={
                            item.imageId[0]
                              ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="full-mask"></div>
                      <div className="meta-wrapper">
                        <Button
                          className="stretched-link d-block text-white"
                          type="link"
                          href={`/properties/${item._id}`}
                        >
                          <h5>{item.title}</h5>
                        </Button>
                        <span>
                          Min. order {item.min_order} {item.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </Fade>
      </section>
    </>
  );
}
