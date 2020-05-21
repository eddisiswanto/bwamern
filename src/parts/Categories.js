import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import OwlCarousel from "react-owl-carousel";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <>
        <section
          className="container d-none d-md-block"
          key={`category-${index1}`}
        >
          <Fade bottom>
            <h4 className="mb-3 font-weight-medium">{category.name}</h4>
            <div className="container-grid">
              {category.itemId.length === 0 ? (
                <div className="row">
                  <div className="col-12 align-items-center">
                    There is no properti at this category
                  </div>
                </div>
              ) : (
                category.itemId.map((item, index2) => {
                  return (
                    <div
                      className="item column-3 row-1"
                      key={`category-${index1}-item-${index2}`}
                    >
                      <Fade bottom delay={300 * index2}>
                        <div className="card">
                          {item.isPopular && (
                            <div className="tag">
                              Paling{" "}
                              <span className="font-weight-light">Laris</span>
                            </div>
                          )}
                          <figure
                            className="img-wrapper"
                            style={{ height: 180 }}
                          >
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
                              href={`/properties/${item._id}`}
                              className="stretched-link d-block text-gray-800"
                              type="link"
                            >
                              <h5 className="h4">{item.title}</h5>
                            </Button>
                            <span className="text-gray-500">
                              Min. Order {item.min_order} {item.unit}
                            </span>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  );
                })
              )}
            </div>
          </Fade>
        </section>

        <section
          className="container d-block d-md-none"
          style={{ paddingRight: 0, marginBottom: 40, marginRight: 0 }}
          key={`category-small-${index1}`}
        >
          <Fade bottom>
            <h6 className="mb-3 font-weight-bold">{category.name}</h6>
            <div className="">
              {category.itemId.length === 0 ? (
                <div className="row">
                  <div className="col-auto align-items-center">
                    There is no properti at this category
                  </div>
                </div>
              ) : (
                <OwlCarousel
                  className="owl-theme"
                  items={2.2}
                  loop
                  margin={10}
                  autoPlay
                  dots={false}
                >
                  {category.itemId.map((item, index2) => {
                    return (
                      <div
                        className="item"
                        key={`category-sm-${index1}-item-${index2}`}
                      >
                        <div className="card">
                          {item.isPopular && (
                            <div className="tag" style={{ borderRadius: 5 }}>
                              Paling{" "}
                              <span className="font-weight-light">Laris</span>
                            </div>
                          )}
                          <figure
                            className="img-wrapper"
                            style={{ height: 180, borderRadius: 5 }}
                          >
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
                              href={`/properties/${item._id}`}
                              className="stretched-link d-block text-gray-800"
                              type="link"
                            >
                              <h6>{item.title}</h6>
                            </Button>
                            <span className="text-gray-500">
                              Min. Order {item.min_order} {item.unit}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </OwlCarousel>
              )}
            </div>
          </Fade>
        </section>
      </>
    );
  });
}
