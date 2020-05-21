import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import OwlCarousel from "react-owl-carousel";

export default function Activities({ data }) {
  if (data.length === 0) return null;

  return (
    <>
      <section className="container d-none d-md-block">
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">Service Unggulan Kami</h4>
          <div className="container-grid">
            {data.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`activity-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={
                            item.imageUrl
                              ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                              : ""
                          }
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href='#'
                          className="stretched-link d-block text-gray-800"
                        >
                          <h5 className="h4">{item.name}</h5>
                        </Button>
                        <span className="text-gray-500">{item.type}</span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </Fade>
      </section>

      <section className="container d-block d-md-none">
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium text-center">
            Service Unggulan Kami
          </h4>
          <div className="">
            <OwlCarousel
              className="owl-theme"
              items={1}
              loop
              margin={10}
              autoPlay
              dots={false}
              nav={true}
            >
              {data.map((item, index2) => {
                return (
                  <div className="item" key={`activities-sm-${index2}`}>
                    <div className="card">
                      <figure
                        className="img-wrapper"
                        style={{ height: 180, borderRadius: 5 }}
                      >
                        <img
                          src={
                            item.imageUrl
                              ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                              : ""
                          }
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper text-center">
                        <Button
                          href="#"
                          className="stretched-link d-block text-gray-800"
                          type="link"
                        >
                          <h6>{item.name}</h6>
                        </Button>
                        <span className="text-gray-500">{item.type}</span>
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
