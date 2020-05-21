import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import Star from "elements/Star";

export default function Testimoni({ data }) {
  return (
    <>
      {/* <section className="container">
        <Fade bottom>
          <div className="row align-items-center">
            <div className="col-auto" style={{ marginRight: 60 }}>
              <div
                className="testimonial-hero"
                style={{ margin: ` 30px 0 0 30px` }}
              >
                <img
                  src={`${data.imageUrl}`}
                  alt="Testimonial"
                  className="position-absolute frame-family"
                  style={{ zIndex: 1, objectFit: "cover" }}
                />
                <img
                  src={FamilyFrame}
                  alt="Testimonial frame"
                  className="position-absolute"
                  style={{
                    margin: `-30px 0 0 -30px`,
                  }}
                />
              </div>
            </div>
            <div className="col">
              <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
              <Star value={data.rate} width={35} height={35} spacing={4}></Star>
              <h5 className="h2 font-weight-light line-height-2 my-3">
                {data.content}
              </h5>
              <span className="text-gray-500">
                {data.familyName}, {data.familyOccupation}
              </span>

              <div>
                <Button
                  className="btn px-5"
                  style={{ marginTop: 40 }}
                  hasShadow
                  isPrimary
                  type="link"
                  href={`/testimonial/${data._id}`}
                >
                  Read their story
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </section>
     */}

      <section className=" testimonial bg-testi  d-none d-lg-block">
        <div className="container">
          <Fade bottom>
            <div className="row justify-content-center">
              <div className="col-8">
                <h5 className="title-testimonial">Apa Kata Mereka ?</h5>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="row">
              {data.map((item, index) => {
                return (
                  <div className="col-4 justify-content-center d-flex" key={index}>
                    <div className="card p-3 text-center">
                      <figure>
                        <img
                          src={`${item.imageUrl}`}
                          className="figure-img img-fluid rounded-circle"
                          alt={item.name}
                        />
                      </figure>

                      <div className="ml-4">
                        <Star
                          value={+item.rate}
                          width={35}
                          height={35}
                          spacing={4}
                        ></Star>
                      </div>

                      <h5>{item.name}</h5>
                      <span className="text-gray-500">{item.pekerjaan}</span>
                      <p className="mt-3">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
