import React from "react";
import Fade from "react-reveal/Fade";

import OwlCarousel from "react-owl-carousel";

export default function FeaturedImage({ data }) {
  return (
    <>
      <section className="container d-none d-md-block">
        <div className="container-grid sm">
          {data.map((item, index) => {
            return (
              <div
                key={`FeaturedImage-${index}`}
                className={`item ${index > 0 ? "column-5" : "column-7"} ${
                  index > 0 ? "row-1" : "row-2"
                }`}
              >
                <Fade bottom delay={300 * index}>
                  <div className="card h-100">
                    <figure className="img-wrapper">
                      <img
                        className="img-cover"
                        src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                        alt={item._id}
                        
                      />
                    </figure>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container mb-2 d-block d-md-none">
        <Fade bottom>
          <div className="sm">
            <OwlCarousel
              className="owl-theme"
              items={1}
              loop
              margin={10}
              autoPlay
              dots={true}
            >
              {data.map((item, index) => {
                return (
                  <div
                    key={`FeaturedImage-sm-${index}`}
                    className={`item ${index > 0 ? "column-5" : "column-7"} ${
                      index > 0 ? "row-1" : "row-2"
                    }`}
                  >
                    <div className="card h-100">
                      <figure className="img-wrapper">
                        <img
                          className="img-cover"
                          src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                          alt={item._id}
                          style={{ height: 200 }}
                        />
                      </figure>
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
