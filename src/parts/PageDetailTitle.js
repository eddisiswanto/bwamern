import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <>
      <section className="container spacing-sm d-none d-md-block">
        <Fade bottom>
          <div className="row align-items-center">
            <div className="col">
              <Breadcrumb data={breadcrumb} />
            </div>
            <div className="col-auto text-center">
              <h1 className="h2">{data.title}</h1>
              <span className="text-gray-400">{data.type}</span>
            </div>
            <div className="col"></div>
          </div>
        </Fade>
      </section>

      <section className="container mb-4 spacing-sm d-block d-md-none">
        <Fade bottom>
          <div className="row">
            <div className="col-12">
              <Breadcrumb data={breadcrumb} />
            </div>
            <div className="col-12 text-center">
              <h1 className="h2">{data.title}</h1>
              <span className="text-gray-400">{data.type}</span>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}
